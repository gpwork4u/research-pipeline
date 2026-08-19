import Anthropic from "@anthropic-ai/sdk";
import { Ajv, type ValidateFunction } from "ajv";
import type { SearchResult } from "./types.js";
import { extractJson, withRetry } from "./util.js";

export interface GenerateOptions {
  /** Stage label — used for logging and by the mock provider to pick fixtures. */
  stage?: string;
  /** Let the model use Anthropic's server-side web_search tool first. */
  useWebSearch?: boolean;
  maxTokens?: number;
  system?: string;
}

export interface LLMProvider {
  generateStructured<T>(
    prompt: string,
    schema: object,
    opts?: GenerateOptions,
  ): Promise<T>;
}

export interface SearchProvider {
  search(query: string): Promise<SearchResult[]>;
}

const ajv = new Ajv({ allErrors: true, strict: false });
const validatorCache = new Map<object, ValidateFunction>();

export function validateAgainstSchema(
  data: unknown,
  schema: object,
): { ok: boolean; errors: string[] } {
  // Schemas with an $id may be loaded from disk more than once — reuse the
  // instance ajv already registered instead of re-compiling (duplicate-$id error).
  const id = (schema as { $id?: string }).$id;
  let validate = (id && ajv.getSchema(id)) || validatorCache.get(schema);
  if (!validate) {
    validate = ajv.compile(schema);
    if (!id) validatorCache.set(schema, validate);
  }
  const ok = validate(data) as boolean;
  const errors = (validate.errors ?? []).map(
    (e) => `${e.instancePath || "/"} ${e.message ?? ""}`,
  );
  return { ok, errors };
}

// ---------------------------------------------------------------------------
// Anthropic implementation
// ---------------------------------------------------------------------------

export class AnthropicProvider implements LLMProvider {
  private client: Anthropic;
  constructor(private model: string = process.env.LLM_MODEL ?? "claude-opus-5") {
    this.client = new Anthropic();
  }

  private async runWithWebSearch(
    prompt: string,
    system: string | undefined,
    maxTokens: number,
  ): Promise<string> {
    const messages: Anthropic.MessageParam[] = [
      { role: "user", content: prompt },
    ];
    // Manual loop: web_search is server-executed, but long turns can pause.
    for (let i = 0; i < 8; i++) {
      const response = await this.client.messages.create({
        model: this.model,
        max_tokens: maxTokens,
        system,
        tools: [{ type: "web_search_20260209", name: "web_search", max_uses: 12 }],
        messages,
      });
      if (response.stop_reason === "pause_turn") {
        messages.push({ role: "assistant", content: response.content });
        continue;
      }
      return response.content
        .filter((b): b is Anthropic.TextBlock => b.type === "text")
        .map((b) => b.text)
        .join("\n");
    }
    throw new Error("web search loop did not terminate");
  }

  async generateStructured<T>(
    prompt: string,
    schema: object,
    opts: GenerateOptions = {},
  ): Promise<T> {
    const maxTokens = opts.maxTokens ?? 32000;
    let basePrompt = prompt;

    if (opts.useWebSearch) {
      const notes = await withRetry(
        () => this.runWithWebSearch(prompt, opts.system, maxTokens),
        { retries: 3, baseDelayMs: 2000, label: `${opts.stage ?? "llm"}:search` },
      );
      basePrompt =
        `${prompt}\n\n---\nResearch notes gathered via web search:\n\n${notes}` +
        `\n\n---\nNow convert the findings above into the requested JSON.`;
    }

    const jsonPrompt =
      `${basePrompt}\n\nReturn ONLY a single JSON value (no prose, no markdown ` +
      `fence) that strictly conforms to this JSON Schema:\n` +
      JSON.stringify(schema);

    // Schema-validation failures get up to 2 retries (spec §45).
    let lastErrors: string[] = [];
    for (let attempt = 0; attempt < 3; attempt++) {
      const retryHint =
        attempt === 0
          ? ""
          : `\n\nYour previous output failed schema validation: ${lastErrors.join("; ")}. Fix these issues.`;
      const response = await withRetry(
        () =>
          this.client.messages.create({
            model: this.model,
            max_tokens: maxTokens,
            system: opts.system,
            messages: [{ role: "user", content: jsonPrompt + retryHint }],
          }),
        { retries: 3, baseDelayMs: 2000, label: opts.stage ?? "llm" },
      );
      const text = response.content
        .filter((b): b is Anthropic.TextBlock => b.type === "text")
        .map((b) => b.text)
        .join("\n");
      let data: unknown;
      try {
        data = extractJson(text);
      } catch {
        lastErrors = ["output was not parseable JSON"];
        continue;
      }
      const { ok, errors } = validateAgainstSchema(data, schema);
      if (ok) return data as T;
      lastErrors = errors;
    }
    throw new Error(
      `LLM output failed schema validation after retries (stage=${opts.stage}): ${lastErrors.join("; ")}`,
    );
  }
}

export class AnthropicSearchProvider implements SearchProvider {
  constructor(private llm: AnthropicProvider) {}

  async search(query: string): Promise<SearchResult[]> {
    const schema = {
      type: "array",
      items: {
        type: "object",
        required: ["title", "url", "snippet"],
        properties: {
          title: { type: "string" },
          url: { type: "string" },
          snippet: { type: "string" },
        },
      },
    };
    return this.llm.generateStructured<SearchResult[]>(
      `Search the web for: "${query}". Return the most relevant recent results ` +
        `(title, url, and a 1-2 sentence factual snippet each).`,
      schema,
      { stage: "search", useWebSearch: true, maxTokens: 8000 },
    );
  }
}

// ---------------------------------------------------------------------------
// Mock implementations — used in tests and keyless dry runs
// ---------------------------------------------------------------------------

export class MockLLMProvider implements LLMProvider {
  constructor(private fixtures: Record<string, unknown>) {}

  async generateStructured<T>(
    _prompt: string,
    schema: object,
    opts: GenerateOptions = {},
  ): Promise<T> {
    const stage = opts.stage ?? "default";
    const fixture = this.fixtures[stage];
    if (fixture === undefined) {
      throw new Error(`MockLLMProvider: no fixture for stage "${stage}"`);
    }
    const { ok, errors } = validateAgainstSchema(fixture, schema);
    if (!ok) {
      throw new Error(
        `MockLLMProvider fixture for "${stage}" fails schema: ${errors.join("; ")}`,
      );
    }
    return structuredClone(fixture) as T;
  }
}

export class MockSearchProvider implements SearchProvider {
  constructor(private results: SearchResult[] = []) {}
  async search(_query: string): Promise<SearchResult[]> {
    return this.results;
  }
}

export function hasApiKey(): boolean {
  return Boolean(
    process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_AUTH_TOKEN,
  );
}
