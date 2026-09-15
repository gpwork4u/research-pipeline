import assert from "node:assert/strict";
import { test } from "node:test";
import { checkSectionBudgets, SECTION_BUDGETS } from "../src/section-budget.js";
import { canonicalHeadingKey } from "../src/site.js";

const han = (n: number) => "產".repeat(n);
const words = (n: number) => Array.from({ length: n }, () => "word").join(" ");

test("in-budget report reports no violations", () => {
  const body = [
    "# 一句話結論",
    words(20),
    "# Executive Summary",
    words(100),
  ].join("\n\n");
  assert.deepEqual(checkSectionBudgets(body, "en", canonicalHeadingKey), []);
});

test("over-budget section is reported with its cap", () => {
  const cap = SECTION_BUDGETS["Executive Summary"].en;
  const body = ["# Executive Summary", words(cap + 10)].join("\n\n");
  const [v] = checkSectionBudgets(body, "en", canonicalHeadingKey);
  assert.equal(v.section, "Executive Summary");
  assert.equal(v.cap, cap);
  assert.equal(v.actual, cap + 10);
  assert.equal(v.unit, "words");
});

test("zh counts CJK characters, not words", () => {
  const cap = SECTION_BUDGETS["Executive Summary"].zh;
  const body = ["# 重點摘要", han(cap + 5)].join("\n\n");
  const [v] = checkSectionBudgets(body, "zh", canonicalHeadingKey);
  assert.equal(v.actual, cap + 5);
  assert.equal(v.unit, "CJK chars");
});

test("appendix sections are never counted", () => {
  const body = [
    "# Sub-Questions",
    words(500),
    "# Sources",
    words(500),
  ].join("\n\n");
  assert.deepEqual(checkSectionBudgets(body, "en", canonicalHeadingKey), []);
});

test("table rows are excluded from prose counts", () => {
  const table = [
    "| a | b |",
    "| --- | --- |",
    ...Array.from({ length: 5 }, () => "| some cell text | another cell |"),
  ].join("\n");
  const body = ["# Executive Summary", words(10), table].join("\n\n");
  assert.deepEqual(checkSectionBudgets(body, "en", canonicalHeadingKey), []);
});

test("total prose budget is enforced across sections", () => {
  const body = [
    "# Known Facts",
    words(100),
    "# Core Mechanism",
    words(150),
    "# Final Assessment",
    words(120),
  ].join("\n\n");
  // Each section is inside its own cap; the total is not exceeded either.
  assert.deepEqual(checkSectionBudgets(body, "en", canonicalHeadingKey), []);
});

test("unrecognized headings count toward the total but have no own cap", () => {
  const body = ["# Something Custom", words(2000)].join("\n\n");
  const vs = checkSectionBudgets(body, "en", canonicalHeadingKey);
  assert.equal(vs.length, 1);
  assert.equal(vs[0].section, "TOTAL prose");
});
