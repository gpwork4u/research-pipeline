import fs from "node:fs";
import path from "node:path";
import type { LLMProvider } from "./providers.js";
import type { CandidateTopic, ResearchData } from "./types.js";

const QUESTIONS_SCHEMA = {
  type: "object",
  required: ["primary"],
  properties: {
    primary: { type: "string", minLength: 10 },
    sub: { type: "array", items: { type: "string" }, maxItems: 5 },
  },
};

export interface ResearchQuestions {
  primary: string;
  sub?: string[];
}

function loadPrompt(rootDir: string, name: string): string {
  return fs.readFileSync(path.join(rootDir, "prompts", name), "utf8");
}

function loadResearchSchema(rootDir: string): object {
  return JSON.parse(
    fs.readFileSync(path.join(rootDir, "schemas", "research.schema.json"), "utf8"),
  );
}

/** Stage: Build Research Questions — research never starts without questions. */
export async function buildQuestions(
  llm: LLMProvider,
  topic: CandidateTopic,
): Promise<ResearchQuestions> {
  const prompt =
    `Research topic: "${topic.title}" (trigger: ${topic.trigger}; type: ${topic.research_type}).\n` +
    `Reason it was selected: ${topic.reason}\n\n` +
    `Before any searching, formulate 1 primary research question and up to 5 ` +
    `sub-questions. The primary question should be falsifiable and structural ` +
    `(e.g. "is X becoming a new industry bottleneck?"). Sub-questions should ` +
    `cover demand, supply, substitutability, pricing power, and what evidence ` +
    `could refute the thesis.`;
  return llm.generateStructured<ResearchQuestions>(prompt, QUESTIONS_SCHEMA, {
    stage: "questions",
    maxTokens: 4000,
  });
}

/** Stages: Gather Sources → Extract Evidence → Build Structured Research. */
export async function conductResearch(
  llm: LLMProvider,
  topic: CandidateTopic,
  questions: ResearchQuestions,
  rootDir: string,
  date: string,
): Promise<ResearchData> {
  const agentPrompt = loadPrompt(rootDir, "research-agent.md");
  const bottleneckPrompt = loadPrompt(rootDir, "bottleneck-framework.md");
  const schema = loadResearchSchema(rootDir);

  const prompt = [
    agentPrompt,
    "\n---\n",
    bottleneckPrompt,
    "\n---\n",
    `## Assigned topic\n${JSON.stringify({ title: topic.title, slug: topic.slug, trigger: topic.trigger, research_type: topic.research_type, categories: topic.categories }, null, 2)}`,
    `\n## Research questions\nPrimary: ${questions.primary}\nSub:\n${(questions.sub ?? []).map((q) => `- ${q}`).join("\n")}`,
    `\n## Date\nToday is ${date}. Set topic.date to ${date}, topic.slug to "${topic.slug}", topic.research_type to "${topic.research_type}". Set retrieved_at on evidence to ${date}.`,
    `\nResearch thoroughly with web search, then produce the structured research JSON.`,
  ].join("\n");

  const research = await llm.generateStructured<ResearchData>(prompt, schema, {
    stage: "research",
    useWebSearch: true,
    maxTokens: 64000,
  });

  // Enforce code-controlled topic fields regardless of what the model wrote.
  research.topic.slug = topic.slug;
  research.topic.date = date;
  research.topic.research_type = topic.research_type;
  research.topic.score = topic.total_score;
  research.topic.trigger = topic.trigger;
  research.topic.categories = topic.categories;
  return research;
}

export function researchFilePath(rootDir: string, date: string, slug: string): string {
  const [year, month] = date.split("-");
  return path.join(rootDir, "research", year, month, `${date}-${slug}.json`);
}

export function reportFilePath(rootDir: string, date: string, slug: string): string {
  const [year, month] = date.split("-");
  return path.join(rootDir, "reports", year, month, `${date}-${slug}.md`);
}

export function persistResearch(
  rootDir: string,
  research: ResearchData,
): string {
  const file = researchFilePath(rootDir, research.topic.date, research.topic.slug);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(research, null, 2) + "\n");
  return file;
}
