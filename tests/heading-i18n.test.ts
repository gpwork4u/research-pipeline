import assert from "node:assert/strict";
import { test } from "node:test";
import { localizeHeadings } from "../src/site.js";

const md = [
  "# 一句話結論",
  "text",
  "# Executive Summary",
  "text",
  "# 30–90 Day Validation",
  "text",
  "# Sources",
].join("\n");

test("en pages show pure-English headings", () => {
  const out = localizeHeadings(md, "en");
  assert.match(out, /# One-Sentence Conclusion/);
  assert.doesNotMatch(out, /# 一句話結論/);
  assert.match(out, /# Executive Summary/);
});

test("zh pages show pure-Chinese headings", () => {
  const out = localizeHeadings(md, "zh");
  assert.match(out, /# 一句話結論/);
  assert.match(out, /# 重點摘要/);
  assert.match(out, /# 30–90 天驗證/);
  assert.match(out, /# 資料來源/);
  assert.doesNotMatch(out, /# Executive Summary/);
});

test("legacy annotated headings (英文（中文）) normalize to the i18n label", () => {
  const legacy = "# Known Facts（已知事實）\n\n# Research Question / Why Now（研究問題與時機）";
  const zh = localizeHeadings(legacy, "zh");
  assert.match(zh, /# 已知事實/);
  assert.match(zh, /# 研究問題與時機/);
  const en = localizeHeadings(legacy, "en");
  assert.match(en, /# Known Facts/);
  assert.doesNotMatch(en, /（/);
});

test("unknown headings pass through untouched", () => {
  const out = localizeHeadings("# Custom Section", "zh");
  assert.equal(out, "# Custom Section");
});
