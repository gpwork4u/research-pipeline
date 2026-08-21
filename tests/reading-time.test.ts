import assert from "node:assert/strict";
import { test } from "node:test";
import {
  readingMinutes,
  reportReadingMinutes,
  splitSections,
  tableDataRows,
} from "../src/reading-time.js";
import { canonicalHeadingKey } from "../src/site.js";

const TABLE = "| a | b |\n| --- | --- |\n| 1 | 2 |\n| 3 | 4 |\n| 5 | 6 |";

test("tableDataRows counts data rows, not header/separator", () => {
  assert.equal(tableDataRows(TABLE), 3);
  assert.equal(tableDataRows("plain prose only"), 0);
});

test("readingMinutes: 700 CJK chars ≈ 2 minutes at 350 cpm", () => {
  assert.equal(readingMinutes({ markdown: "字".repeat(700) }), 2);
});

test("readingMinutes: 440 English words ≈ 2 minutes at 220 wpm", () => {
  assert.equal(readingMinutes({ markdown: Array(440).fill("word").join(" ") }), 2);
});

test("tables and charts add time", () => {
  const noTable = readingMinutes({ markdown: "字".repeat(300) });
  const withTable = readingMinutes({ markdown: "字".repeat(300) + "\n" + TABLE, chartCount: 2 });
  assert.ok(withTable >= noTable);
});

test("reportReadingMinutes excludes the Sources section", () => {
  const long = "字".repeat(1400);
  const base = `---\ntitle: "t"\n---\n\n# Core Mechanism\n\n${long}\n`;
  const withSources = base + `\n# Sources\n\n${"- [x](https://e.com) " + "字".repeat(2000)}\n`;
  assert.equal(
    reportReadingMinutes(base, canonicalHeadingKey),
    reportReadingMinutes(withSources, canonicalHeadingKey),
  );
});

test("splitSections keys canonical and zh-translated headings alike", () => {
  const md = "# 一句話結論\n\nx\n\n# Known Facts（已知事實）\n\ny\n\n# Custom\n\nz";
  const { sections } = splitSections(md, canonicalHeadingKey);
  assert.deepEqual(
    sections.map((s) => s.key),
    ["一句話結論", "Known Facts", null],
  );
});
