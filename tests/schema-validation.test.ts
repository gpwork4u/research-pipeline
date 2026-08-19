import assert from "node:assert/strict";
import { test } from "node:test";
import fs from "node:fs";
import path from "node:path";
import { loadConfig, ROOT_DIR } from "../src/config.js";
import { exampleResearch } from "../src/mock-fixtures.js";
import { validateAgainstSchema } from "../src/providers.js";
import { validateResearch } from "../src/validator.js";

const schema = JSON.parse(
  fs.readFileSync(path.join(ROOT_DIR, "schemas", "research.schema.json"), "utf8"),
);
const config = loadConfig();

test("example research passes the JSON schema", () => {
  const { ok, errors } = validateAgainstSchema(exampleResearch("2026-08-19"), schema);
  assert.ok(ok, errors.join("; "));
});

test("example research passes all validator critical checks", () => {
  const result = validateResearch(exampleResearch("2026-08-19"), config, ROOT_DIR);
  assert.ok(result.ok, result.errors.join("; "));
});

test("validator fails when primary sources are insufficient", () => {
  const research = exampleResearch("2026-08-19");
  for (const s of research.sources) s.source_type = "secondary";
  const result = validateResearch(research, config);
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((e) => e.includes("primary sources")));
});

test("validator fails when a FACT has no evidence", () => {
  const research = exampleResearch("2026-08-19");
  research.facts[0].evidence_ids = [];
  const result = validateResearch(research, config);
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((e) => e.includes("FACT without evidence")));
});

test("validator fails when kill conditions are missing", () => {
  const research = exampleResearch("2026-08-19");
  research.kill_conditions = [];
  const result = validateResearch(research, config);
  assert.equal(result.ok, false);
});

test("validator rejects unqualified Structural Bottleneck labels (spec §18)", () => {
  const research = exampleResearch("2026-08-19");
  research.bottlenecks[0].supply_elasticity = "High";
  const result = validateResearch(research, config);
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((e) => e.includes("does not meet qualification")));
});
