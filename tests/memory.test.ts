import assert from "node:assert/strict";
import { test } from "node:test";
import { updateMemory } from "../src/memory.js";
import { exampleResearch } from "../src/mock-fixtures.js";
import type { MemoryStore } from "../src/types.js";

const emptyMemory = (): MemoryStore => ({
  topics: [],
  theses: [],
  watchlist: [],
  companies: [],
});

const REPORT = "reports/2026/08/2026-08-19-hbm-supply-ai-accelerators.md";

test("updateMemory creates topic, thesis, watchlist and company entries", () => {
  const memory = updateMemory(emptyMemory(), exampleResearch("2026-08-19"), REPORT);
  assert.equal(memory.topics.length, 1);
  assert.equal(memory.topics[0].slug, "hbm-supply-ai-accelerators");
  assert.deepEqual(memory.topics[0].reports, [REPORT]);
  assert.equal(memory.theses.length, 1);
  assert.equal(memory.theses[0].id, "thesis-hbm-supply-ai-accelerators");
  assert.equal(memory.watchlist.length, 3);
  assert.ok(memory.watchlist.every((w) => w.status === "open"));
  assert.equal(memory.companies.length, 1);
  assert.equal(memory.companies[0].name, "Supplier A");
});

test("updateMemory is idempotent for the same report", () => {
  let memory = updateMemory(emptyMemory(), exampleResearch("2026-08-19"), REPORT);
  memory = updateMemory(memory, exampleResearch("2026-08-19"), REPORT);
  assert.equal(memory.topics.length, 1);
  assert.deepEqual(memory.topics[0].reports, [REPORT]);
  assert.equal(memory.theses.length, 1);
  assert.equal(memory.watchlist.length, 3);
});

test("a later UPDATE report extends the same topic and thesis", () => {
  const memory = updateMemory(emptyMemory(), exampleResearch("2026-08-19"), REPORT);
  const later = exampleResearch("2026-09-01");
  later.thesis = "Revised thesis after new capacity announcements.";
  const laterReport = "reports/2026/09/2026-09-01-hbm-supply-ai-accelerators.md";
  updateMemory(memory, later, laterReport);
  assert.equal(memory.topics.length, 1);
  assert.equal(memory.topics[0].last_updated, "2026-09-01");
  assert.equal(memory.topics[0].reports.length, 2);
  assert.equal(memory.theses.length, 1);
  assert.equal(memory.theses[0].statement, "Revised thesis after new capacity announcements.");
  assert.equal(memory.theses[0].created_at, "2026-08-19");
  assert.equal(memory.theses[0].updated_at, "2026-09-01");
});
