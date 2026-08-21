import assert from "node:assert/strict";
import { test } from "node:test";
import { anchorSourceEntries, linkEvidenceRefs } from "../src/site.js";

test("evidence ids in text become links to the source anchor", () => {
  const html = "<p>Revenue grew. <em>(evidence: ev-1, ev-12)</em></p>";
  const out = linkEvidenceRefs(html);
  assert.match(out, /<a class="evref" href="#src-ev-1">ev-1<\/a>/);
  assert.match(out, /<a class="evref" href="#src-ev-12">ev-12<\/a>/);
});

test("evidence ids inside code and table cells are linked too", () => {
  const out = linkEvidenceRefs("<td>ev-3</td><code>ev-4</code>");
  assert.match(out, /<td><a class="evref" href="#src-ev-3">ev-3<\/a><\/td>/);
  assert.match(out, /<code><a class="evref" href="#src-ev-4">ev-4<\/a><\/code>/);
});

test("tag attributes are never rewritten", () => {
  const html = '<a href="https://example.com/ev-1/page">an article</a>';
  assert.equal(linkEvidenceRefs(html), html);
});

test("words merely containing ev- patterns elsewhere stay untouched", () => {
  assert.equal(linkEvidenceRefs("<p>whatever-3 dev-1x</p>"), "<p>whatever-3 dev-1x</p>");
});

test("source list items receive matching anchor ids", () => {
  const html = "<li><code>ev-2</code> [primary] <a href=\"https://e.com\">t</a></li>";
  assert.match(anchorSourceEntries(html), /<li id="src-ev-2"><code>ev-2<\/code>/);
});
