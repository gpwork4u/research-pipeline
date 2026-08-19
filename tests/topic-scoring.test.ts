import assert from "node:assert/strict";
import { test } from "node:test";
import { loadConfig, ROOT_DIR } from "../src/config.js";
import { exampleCandidates, exampleSearchResults } from "../src/mock-fixtures.js";
import { MockLLMProvider, MockSearchProvider } from "../src/providers.js";
import { selectTopic, totalScore } from "../src/topic-selector.js";
import type { MemoryStore } from "../src/types.js";

const emptyMemory = (): MemoryStore => ({
  topics: [],
  theses: [],
  watchlist: [],
  companies: [],
});

test("totalScore sums all seven dimensions", () => {
  const [candidate] = exampleCandidates();
  assert.equal(totalScore(candidate.scores), 4 + 5 + 5 + 4 + 4 + 4 + 5);
});

test("selectTopic picks the highest-scoring candidate above threshold", async () => {
  const llm = new MockLLMProvider({ candidates: exampleCandidates() });
  const search = new MockSearchProvider(exampleSearchResults());
  const result = await selectTopic(
    llm,
    search,
    emptyMemory(),
    loadConfig(),
    ROOT_DIR,
    "2026-08-19",
  );
  assert.ok(result.selected);
  assert.equal(result.selected.slug, "hbm-supply-ai-accelerators");
  assert.equal(result.selected.total_score, 31);
});

test("selectTopic skips publication when no candidate reaches threshold", async () => {
  const low = exampleCandidates().map((c) => ({
    ...c,
    scores: { ...c.scores, novelty: 0, timeliness: 0, structural_importance: 0 },
  }));
  const llm = new MockLLMProvider({ candidates: low });
  const search = new MockSearchProvider([]);
  const result = await selectTopic(
    llm,
    search,
    emptyMemory(),
    loadConfig(),
    ROOT_DIR,
    "2026-08-19",
  );
  assert.equal(result.selected, null);
  assert.match(result.skippedReason ?? "", /minTopicScore/);
});

test("forced topic bypasses discovery and scoring", async () => {
  const llm = new MockLLMProvider({});
  const search = new MockSearchProvider([]);
  const result = await selectTopic(
    llm,
    search,
    emptyMemory(),
    loadConfig(),
    ROOT_DIR,
    "2026-08-19",
    "Some Manually Chosen Topic",
  );
  assert.ok(result.selected);
  assert.equal(result.selected.slug, "some-manually-chosen-topic");
});
