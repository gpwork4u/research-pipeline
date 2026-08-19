import fs from "node:fs";
import path from "node:path";
import type { LLMProvider } from "./providers.js";
import type { Narrative, ResearchData, Statement } from "./types.js";

export const NARRATIVE_SCHEMA = {
  type: "object",
  required: [
    "one_sentence_conclusion",
    "executive_summary",
    "core_mechanism",
    "final_assessment",
  ],
  properties: {
    one_sentence_conclusion: { type: "string", minLength: 10 },
    executive_summary: { type: "string", minLength: 50 },
    core_mechanism: { type: "string", minLength: 50 },
    final_assessment: { type: "string", minLength: 50 },
  },
};

function yamlEscape(value: string): string {
  return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

export function buildFrontMatter(research: ResearchData): string {
  const companies = (research.companies ?? [])
    .map((c) => String(c.name ?? ""))
    .filter(Boolean);
  const lines = [
    "---",
    `title: ${yamlEscape(research.topic.title)}`,
    `date: "${research.topic.date}"`,
    `slug: "${research.topic.slug}"`,
    `research_type: ${research.topic.research_type}`,
    `topics: [${(research.topic.categories ?? []).map(yamlEscape).join(", ")}]`,
    `companies: [${companies.map(yamlEscape).join(", ")}]`,
    `verdict: ${yamlEscape(research.verdict ?? "VALIDATE")}`,
    `confidence: ${yamlEscape(research.confidence ?? "medium")}`,
    `primary_question: ${yamlEscape(research.questions.primary)}`,
    "---",
  ];
  return lines.join("\n");
}

/** Minimal front matter parser for the subset this pipeline writes. */
export function parseFrontMatter(markdown: string): Record<string, unknown> {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) throw new Error("no front matter found");
  const result: Record<string, unknown> = {};
  for (const line of match[1].split("\n")) {
    const kv = line.match(/^([a-z_]+):\s*(.*)$/);
    if (!kv) continue;
    const [, key, rawValue] = kv;
    let value: unknown = rawValue.trim();
    if (typeof value === "string") {
      if (value.startsWith("[") && value.endsWith("]")) {
        const inner = value.slice(1, -1).trim();
        value = inner
          ? inner.split(/",\s*"/).map((s) => s.replace(/^"|"$/g, "").replace(/\\"/g, '"'))
          : [];
      } else if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
      }
    }
    result[key] = value;
  }
  return result;
}

const statementLines = (items: (Statement | string)[] | undefined): string =>
  (items ?? [])
    .map((s) => {
      if (typeof s === "string") return `- ${s}`;
      const refs = s.evidence_ids?.length ? ` _(evidence: ${s.evidence_ids.join(", ")})_` : "";
      return `- ${s.statement}${refs}`;
    })
    .join("\n") || "_None recorded._";

function table(headers: string[], rows: string[][]): string {
  if (!rows.length) return "_None recorded._";
  return [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((r) => `| ${r.map((c) => c.replace(/\|/g, "\\|")).join(" | ")} |`),
  ].join("\n");
}

const str = (v: unknown): string =>
  v === null || v === undefined ? "null" : String(v);

/**
 * Deterministic report renderer. The Writer LLM only supplies narrative
 * sections; all structure and data come straight from validated research.json,
 * so the writer can never introduce claims that are not in the research data.
 */
export function renderReport(research: ResearchData, narrative: Narrative): string {
  const sections: string[] = [buildFrontMatter(research), ""];
  const push = (s: string) => sections.push(s, "");

  push(`# 一句話結論\n\n${narrative.one_sentence_conclusion}`);
  push(`# Executive Summary\n\n${narrative.executive_summary}`);
  push(
    `# Research Question / Why Now\n\n**Primary question:** ${research.questions.primary}\n\n` +
      ((research.questions.sub ?? []).length
        ? `**Sub-questions:**\n${(research.questions.sub ?? []).map((q) => `- ${q}`).join("\n")}\n\n`
        : "") +
      `**Why now:** ${research.topic.trigger ?? "n/a"}\n\n**Thesis:** ${research.thesis}`,
  );
  push(`# Known Facts\n\n${statementLines(research.facts)}`);
  push(`# Reasonable Inferences\n\n${statementLines(research.inferences)}`);
  push(`# Unknowns\n\n${statementLines(research.unknowns)}`);
  push(`# Core Mechanism\n\n${narrative.core_mechanism}`);
  push(
    `# Industry Chain\n\n` +
      table(
        ["Node", "Role", "Major players", "Pricing power", "Supply elasticity", "Substitutability"],
        (research.industry_chain ?? []).map((n) => [
          str(n.name),
          str(n.role),
          Array.isArray(n.major_players) ? n.major_players.join(", ") : "null",
          str(n.pricing_power),
          str(n.supply_elasticity),
          str(n.substitutability),
        ]),
      ),
  );
  push(
    `# Bottleneck Analysis\n\n` +
      table(
        ["Node", "Demand", "Supply elasticity", "Substitutability", "Pricing power", "Opportunity", "Classification"],
        (research.bottlenecks ?? []).map((b) => [
          str(b.node),
          str(b.demand_growth),
          str(b.supply_elasticity),
          str(b.substitutability),
          str(b.pricing_power),
          str(b.opportunity_score),
          str(b.classification),
        ]),
      ) +
      ((research.bottlenecks ?? []).some((b) => b.rationale)
        ? "\n\n" +
          (research.bottlenecks ?? [])
            .filter((b) => b.rationale)
            .map((b) => `- **${str(b.node)}**: ${str(b.rationale)}`)
            .join("\n")
        : ""),
  );
  push(
    `# Key Metrics\n\n` +
      table(
        ["Metric", "Value", "Unit", "Period", "Growth", "Source"],
        (research.metrics ?? []).map((m) => [
          str(m.name),
          str(m.value),
          str(m.unit),
          str(m.period),
          str(m.growth),
          str(m.source_id),
        ]),
      ),
  );
  push(
    `# Competition\n\n` +
      table(
        ["Name", "Kind", "Note"],
        (research.competitors ?? []).map((c) => [str(c.name), str(c.kind), str(c.note ?? "")]),
      ),
  );
  const valuation = research.valuation;
  const valuationText =
    valuation && !Array.isArray(valuation) && (valuation as { available?: boolean }).available === false
      ? `_Valuation not performed: ${(valuation as { reason?: string }).reason ?? "insufficient reliable market data"}_`
      : "```json\n" + JSON.stringify(valuation ?? [], null, 2) + "\n```";
  push(
    `# Financial / Valuation\n\n` +
      ((research.financials ?? []).length
        ? "```json\n" + JSON.stringify(research.financials, null, 2) + "\n```\n\n"
        : "_No reliable financial data obtained._\n\n") +
      valuationText,
  );
  push(
    `# Catalysts\n\n` +
      ((research.catalysts ?? []).map((c) => `- ${c}`).join("\n") || "_None recorded._"),
  );
  push(
    `# Strongest Bear Case\n\n` +
      research.bear_case.map((b) => `- **${b.dimension}**: ${b.argument}`).join("\n"),
  );
  push(
    `# Kill Conditions\n\n` +
      table(
        ["Condition", "Metric", "Threshold", "Window", "Impact"],
        research.kill_conditions.map((k) => [
          k.condition,
          k.metric,
          k.threshold,
          k.time_window,
          k.impact,
        ]),
      ),
  );
  push(
    `# 30–90 Day Validation\n\n` +
      table(
        ["Event", "Window", "Supports if", "Weakens if", "Monitor"],
        research.validation_events.map((v) => [
          v.event,
          v.expected_window,
          v.supports_if,
          v.weakens_if,
          v.source_to_monitor ?? "",
        ]),
      ),
  );
  push(
    `# Final Assessment\n\n**Verdict: ${research.verdict ?? "VALIDATE"}** (confidence: ${research.confidence ?? "medium"})\n\n${narrative.final_assessment}`,
  );
  push(
    `# Sources\n\n` +
      research.sources
        .map(
          (s) =>
            `- \`${s.id}\` [${s.source_type}] [${s.source_title}](${s.source_url})` +
            (s.published_at ? ` (${s.published_at})` : ""),
        )
        .join("\n"),
  );

  return sections.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
}

export async function writeNarrative(
  llm: LLMProvider,
  research: ResearchData,
  rootDir: string,
): Promise<Narrative> {
  const promptFile = fs.readFileSync(
    path.join(rootDir, "prompts", "writer-agent.md"),
    "utf8",
  );
  const prompt = `${promptFile}\n\n## Validated research data\n\n${JSON.stringify(research, null, 2)}`;
  return llm.generateStructured<Narrative>(prompt, NARRATIVE_SCHEMA, {
    stage: "narrative",
    maxTokens: 8000,
  });
}
