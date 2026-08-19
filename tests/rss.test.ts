import assert from "node:assert/strict";
import { test } from "node:test";
import { loadConfig } from "../src/config.js";
import { buildFeedXml, buildIndexJson, escapeXml } from "../src/rss.js";
import type { ReportMeta } from "../src/types.js";

const config = loadConfig();

const meta = (overrides: Partial<ReportMeta> = {}): ReportMeta => ({
  title: "Report <A> & B",
  date: "2026-08-19",
  slug: "report-a",
  research_type: "NEW",
  topics: ["semiconductors"],
  companies: [],
  verdict: "VALIDATE",
  confidence: "medium",
  primary_question: "Is A a bottleneck?",
  path: "reports/2026/08/2026-08-19-report-a.md",
  one_sentence_conclusion: "A is likely a bottleneck.",
  executive_summary: "Summary here.",
  ...overrides,
});

test("escapeXml escapes special characters", () => {
  assert.equal(escapeXml(`<a href="x">&'</a>`), "&lt;a href=&quot;x&quot;&gt;&amp;&apos;&lt;/a&gt;");
});

test("feed contains channel metadata and escaped item fields", () => {
  const xml = buildFeedXml([meta()], config);
  assert.match(xml, /<rss version="2.0">/);
  assert.match(xml, /<title>Report &lt;A&gt; &amp; B<\/title>/);
  assert.match(xml, /<category>NEW<\/category>/);
  assert.match(xml, /<category>semiconductors<\/category>/);
  assert.match(xml, /A is likely a bottleneck\./);
  assert.match(xml, new RegExp(`/reports/report-a</link>`));
});

test("feed item count respects feedItemLimit", () => {
  const many = Array.from({ length: config.feedItemLimit + 10 }, (_, i) =>
    meta({ slug: `report-${i}`, title: `Report ${i}` }),
  );
  const xml = buildFeedXml(many, config);
  const count = (xml.match(/<item>/g) ?? []).length;
  assert.equal(count, config.feedItemLimit);
});

test("zh feed uses zh titles, zh descriptions, and /zh/ links with en fallback", () => {
  const withZh = meta({
    title_zh: "報告 A",
    one_sentence_conclusion_zh: "A 很可能是瓶頸。",
    executive_summary_zh: "中文摘要。",
  });
  const xml = buildFeedXml([withZh], config, "zh");
  assert.match(xml, /<language>zh-Hant<\/language>/);
  assert.match(xml, /<title>報告 A<\/title>/);
  assert.match(xml, /A 很可能是瓶頸。/);
  assert.match(xml, /\/zh\/reports\/report-a<\/link>/);

  // No translation -> fall back to the English fields, still /zh/ links.
  const fallback = buildFeedXml([meta()], config, "zh");
  assert.match(fallback, /<title>Report &lt;A&gt; &amp; B<\/title>/);
  assert.match(fallback, /\/zh\/reports\/report-a<\/link>/);
});

test("index.json contains permanent URLs", () => {
  const index = JSON.parse(buildIndexJson([meta()], config));
  assert.equal(index.length, 1);
  assert.ok(index[0].url.endsWith("/reports/report-a"));
});
