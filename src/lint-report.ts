import fs from "node:fs";
import path from "node:path";
import { ROOT_DIR } from "./config.js";
import { reportReadingMinutes } from "./reading-time.js";
import { canonicalHeadingKey } from "./site.js";
import { parseFrontMatter } from "./writer.js";
import { checkSectionBudgets } from "./section-budget.js";

// CLI: npm run lint:report -- <report.md> [more.md ...]
// Enforces two budgets, both hard-failing (see AGENTS.md):
//   1. per-section length + total prose + table rows (section-budget.ts)
//   2. the 10-minute reading budget — warn above 9 minutes, fail above 10
// Appendix sections (Sub-Questions, Sources) are excluded from both.

const files = process.argv.slice(2);
if (!files.length) {
  console.error("usage: npm run lint:report -- <report.md> [...]");
  process.exit(2);
}

let failed = false;
for (const file of files) {
  const md = fs.readFileSync(file, "utf8");
  let chartCount = 0;
  try {
    const fm = parseFrontMatter(md) as { date?: string; slug?: string };
    const chartsFile = path.join(
      ROOT_DIR, "assets", `${fm.date}-${fm.slug}`, "charts.json",
    );
    if (fs.existsSync(chartsFile)) {
      const specs = JSON.parse(fs.readFileSync(chartsFile, "utf8"));
      chartCount = Array.isArray(specs) ? specs.length : 0;
    }
  } catch {
    // missing/odd front matter: lint the text alone
  }
  const minutes = reportReadingMinutes(md, canonicalHeadingKey, chartCount);
  let status = "OK";
  if (minutes > 10) {
    status = "FAIL (>10 min — trim per-section content; see AGENTS.md budgets)";
    failed = true;
  } else if (minutes > 9) {
    status = "WARN (>9 min — close to the budget ceiling)";
  }
  console.log(`${file}: ~${minutes} min read — ${status}`);

  const lang = file.endsWith(".zh.md") ? "zh" : "en";
  const body = md.replace(/^---\n[\s\S]*?\n---\n/, "");
  const violations = checkSectionBudgets(body, lang, canonicalHeadingKey);
  for (const v of violations) {
    console.log(
      `  over budget: ${v.section} — ${v.actual} ${v.unit} (cap ${v.cap})`,
    );
  }
  if (violations.length) failed = true;
}
process.exit(failed ? 1 : 0);
