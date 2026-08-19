import assert from "node:assert/strict";
import { test } from "node:test";
import { findRecentDuplicate } from "../src/topic-selector.js";
import type { MemoryStore } from "../src/types.js";

const memoryWith = (slug: string, title: string, lastUpdated: string): MemoryStore => ({
  topics: [
    {
      slug,
      title,
      last_updated: lastUpdated,
      reports: [],
      status: "active",
    },
  ],
  theses: [],
  watchlist: [],
  companies: [],
});

test("identical slug within window is a duplicate", () => {
  const memory = memoryWith("hbm-supply", "HBM supply constraints", "2026-08-10");
  const dup = findRecentDuplicate(
    { title: "Anything", slug: "hbm-supply" },
    memory,
    "2026-08-19",
    30,
  );
  assert.equal(dup, "hbm-supply");
});

test("semantically similar title within window is a duplicate", () => {
  const memory = memoryWith(
    "hbm-supply-constraints",
    "HBM memory supply constraints for AI accelerators",
    "2026-08-01",
  );
  const dup = findRecentDuplicate(
    { title: "HBM supply constraints and AI accelerators", slug: "hbm-supply-ai" },
    memory,
    "2026-08-19",
    30,
  );
  assert.equal(dup, "hbm-supply-constraints");
});

test("same topic outside the window is NOT a duplicate", () => {
  const memory = memoryWith("hbm-supply", "HBM supply constraints", "2026-05-01");
  const dup = findRecentDuplicate(
    { title: "HBM supply constraints", slug: "hbm-supply" },
    memory,
    "2026-08-19",
    30,
  );
  assert.equal(dup, null);
});

test("unrelated topic is not a duplicate", () => {
  const memory = memoryWith("hbm-supply", "HBM supply constraints", "2026-08-10");
  const dup = findRecentDuplicate(
    { title: "European carbon border tax and steel", slug: "cbam-steel" },
    memory,
    "2026-08-19",
    30,
  );
  assert.equal(dup, null);
});
