import assert from "node:assert/strict";
import { test } from "node:test";
import fs from "node:fs";
import path from "node:path";
import { ROOT_DIR } from "../src/config.js";
import { exampleNarrative, exampleResearch } from "../src/mock-fixtures.js";
import { validateAgainstSchema } from "../src/providers.js";
import { buildFrontMatter, parseFrontMatter, renderReport } from "../src/writer.js";

const reportSchema = JSON.parse(
  fs.readFileSync(path.join(ROOT_DIR, "schemas", "report.schema.json"), "utf8"),
);

test("front matter round-trips and matches report.schema.json", () => {
  const research = exampleResearch("2026-08-19");
  const fm = parseFrontMatter(buildFrontMatter(research) + "\n");
  const { ok, errors } = validateAgainstSchema(fm, reportSchema);
  assert.ok(ok, errors.join("; "));
  assert.equal(fm.title, research.topic.title);
  assert.equal(fm.date, "2026-08-19");
  assert.equal(fm.slug, "hbm-supply-ai-accelerators");
  assert.equal(fm.research_type, "NEW");
  assert.deepEqual(fm.companies, ["Supplier A"]);
});

test("front matter escapes quotes in titles", () => {
  const research = exampleResearch("2026-08-19");
  research.topic.title = 'The "sold out" question';
  const fm = parseFrontMatter(buildFrontMatter(research) + "\n");
  assert.equal(fm.title, 'The "sold out" question');
});

test("rendered report contains every required section (spec §29)", () => {
  const md = renderReport(exampleResearch("2026-08-19"), exampleNarrative());
  const sections = [
    "一句話結論",
    "Executive Summary",
    "Research Question / Why Now",
    "Known Facts",
    "Reasonable Inferences",
    "Unknowns",
    "Core Mechanism",
    "Industry Chain",
    "Bottleneck Analysis",
    "Key Metrics",
    "Competition",
    "Financial / Valuation",
    "Catalysts",
    "Strongest Bear Case",
    "Kill Conditions",
    "30–90 Day Validation",
    "Final Assessment",
    "Sources",
  ];
  for (const section of sections) {
    assert.ok(md.includes(`# ${section}`), `missing section: ${section}`);
  }
});
