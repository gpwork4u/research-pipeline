import assert from "node:assert/strict";
import { test } from "node:test";
import { renderChartSvg, type ChartSpec } from "../src/charts.js";
import { ROOT_DIR } from "../src/config.js";
import { collectReports } from "../src/rss.js";
import { zhReportPath } from "../src/translator.js";

const barChart: ChartSpec = {
  title: "Revenue",
  title_zh: "營收",
  type: "bar",
  unit: "USD B",
  source_id: "ev-1",
  series: [
    { label: "Q1", value: 10.8 },
    { label: "Q2", value: 16 },
  ],
};

test("bar chart renders an SVG with one mark per point", () => {
  const html = renderChartSvg(barChart, "en");
  assert.match(html, /<svg /);
  const marks = html.match(/fill="var\(--viz-series\)"/g) ?? [];
  assert.equal(marks.length, 2);
  assert.match(html, /<h3>Revenue<\/h3>/);
  assert.match(html, /Source: <code>ev-1<\/code>/);
});

test("chart uses the zh title and caption for zh pages", () => {
  const html = renderChartSvg(barChart, "zh");
  assert.match(html, /<h3>營收<\/h3>/);
  assert.match(html, /資料來源/);
});

test("line chart renders a 2px path and markers", () => {
  const html = renderChartSvg({ ...barChart, type: "line" }, "en");
  assert.match(html, /stroke-width="2"/);
  assert.equal((html.match(/<circle /g) ?? []).length, 2);
});

test("empty or non-numeric series renders nothing", () => {
  assert.equal(renderChartSvg({ ...barChart, series: [] }, "en"), "");
});

test("collectReports lists each report once and ignores .zh.md translations", () => {
  const reports = collectReports(ROOT_DIR);
  const slugs = reports.map((r) => r.slug);
  assert.equal(new Set(slugs).size, slugs.length, "duplicate slugs in feed metadata");
  assert.ok(reports.every((r) => !r.path.endsWith(".zh.md")));
});

test("zhReportPath maps a report path to its translation sibling", () => {
  assert.equal(
    zhReportPath("reports/2026/08/2026-08-19-foo.md"),
    "reports/2026/08/2026-08-19-foo.zh.md",
  );
});
