import type { LLMProvider } from "./providers.js";

export const TRANSLATION_SCHEMA = {
  type: "object",
  required: ["markdown"],
  properties: {
    markdown: { type: "string", minLength: 200 },
  },
};

/**
 * Translate a finished English report into Traditional Chinese (zh-TW).
 * Translation only — numbers, links, evidence ids, front matter keys, slug,
 * date, verdict values and section order must stay identical; the title value
 * inside the front matter is translated.
 */
export async function translateReport(
  llm: LLMProvider,
  reportMarkdown: string,
): Promise<string> {
  const prompt =
    `Translate the following Markdown research report into Traditional Chinese (繁體中文, zh-TW).\n\n` +
    `Rules:\n` +
    `- Translation ONLY: do not add, remove, or reinterpret any claim.\n` +
    `- Keep the YAML front matter keys and structure identical. Translate only the "title" value; keep date, slug, research_type, topics, companies, verdict, confidence unchanged. Translate the primary_question value.\n` +
    `- Keep all numbers, URLs, evidence ids (ev-*), table structure, and section order identical.\n` +
    `- Keep every top-level section heading (lines starting with "# ") EXACTLY as in the original — do not translate or annotate headings; the site localizes headings at display time.\n` +
    `- Keep company/product names and technical terms (CoWoS, HBM, ASIC...) in their original form.\n\n` +
    `Report:\n\n${reportMarkdown}`;
  const result = await llm.generateStructured<{ markdown: string }>(
    prompt,
    TRANSLATION_SCHEMA,
    { stage: "translate", maxTokens: 32000 },
  );
  return result.markdown.endsWith("\n") ? result.markdown : result.markdown + "\n";
}

/** reports/YYYY/MM/date-slug.md -> reports/YYYY/MM/date-slug.zh.md */
export function zhReportPath(reportPath: string): string {
  return reportPath.replace(/\.md$/, ".zh.md");
}
