import fs from "node:fs";
import path from "node:path";
import type { LLMProvider } from "./providers.js";
import type { ResearchData, ReviewResult } from "./types.js";

export const REVIEW_SCHEMA = {
  type: "object",
  required: ["status", "issues"],
  properties: {
    status: { enum: ["PASS", "FAIL"] },
    issues: {
      type: "array",
      items: {
        type: "object",
        required: ["severity", "section", "description"],
        properties: {
          severity: { enum: ["critical", "major", "minor"] },
          section: { type: "string" },
          description: { type: "string" },
        },
      },
    },
  },
};

export async function reviewReport(
  llm: LLMProvider,
  reportMarkdown: string,
  research: ResearchData,
  rootDir: string,
): Promise<ReviewResult> {
  const promptFile = fs.readFileSync(
    path.join(rootDir, "prompts", "reviewer-agent.md"),
    "utf8",
  );
  const prompt = [
    promptFile,
    "\n## Report (Markdown)\n\n```markdown\n" + reportMarkdown + "\n```",
    "\n## Underlying research.json\n\n```json\n" +
      JSON.stringify(research, null, 2) +
      "\n```",
  ].join("\n");
  const result = await llm.generateStructured<ReviewResult>(
    prompt,
    REVIEW_SCHEMA,
    { stage: "review", maxTokens: 8000 },
  );
  // Enforce: any critical issue means FAIL, whatever the model said.
  if (result.issues.some((i) => i.severity === "critical")) {
    result.status = "FAIL";
  }
  return result;
}
