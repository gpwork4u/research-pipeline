import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { loadConfig, ROOT_DIR, type PipelineConfig } from "./config.js";
import { renderChartSvg, type ChartSpec } from "./charts.js";
import { reportReadingMinutes, splitSections } from "./reading-time.js";
import { collectReports } from "./rss.js";
import { parseFrontMatter } from "./writer.js";
import type { ReportMeta } from "./types.js";

// Static site generator: builds dist/site/ for GitHub Pages.
//
//   /                       English index
//   /reports/<slug>/        English report (permanent URL, spec §39)
//   /zh/                    繁體中文 index
//   /zh/reports/<slug>/     繁體中文 report (from the sibling .zh.md file)
//   /assets/**              chart data & images referenced by reports
//   /feed.xml, /zh/feed.xml RSS (en / zh)
//
// Reading design (2026-08 redesign, research-backed):
//   - warm-paper palette, 3-tier ink hierarchy, terracotta accent (all AA+)
//   - 36em text measure (≈36 Han chars), zh line-height 1.8 / en 1.55
//   - 18 sections grouped into Overview + 4 numbered parts + appendix
//   - sources collapsed; reading-time badge (350 cpm zh / 220 wpm en + tables)

type Lang = "en" | "zh";

const UI: Record<Lang, Record<string, string>> = {
  en: {
    indexTitle: "Research Reports",
    contents: "Contents",
    charts: "Data Charts",
    confidence: "confidence",
    switchLabel: "中文",
    otherLangNote: "",
    footer: "Automated research — not investment advice.",
    rss: "RSS",
    overview: "Overview",
    appendix: "Appendix",
    minRead: "min read",
    moreSections: "More",
  },
  zh: {
    indexTitle: "研究報告",
    contents: "目錄",
    charts: "數據圖表",
    confidence: "信心水準",
    switchLabel: "English",
    otherLangNote: "此報告尚無中文版，以下為英文原文。",
    footer: "自動化研究內容，不構成投資建議。",
    rss: "RSS",
    overview: "速覽",
    appendix: "附錄",
    minRead: "分鐘讀完",
    moreSections: "其他",
  },
};

const esc = (s: string): string =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// ---------------------------------------------------------------------------
// Section i18n (canonical headings in markdown; localized at display time)
// ---------------------------------------------------------------------------

export const SECTION_LABELS: Record<string, { en: string; zh: string }> = {
  一句話結論: { en: "One-Sentence Conclusion", zh: "一句話結論" },
  "Executive Summary": { en: "Executive Summary", zh: "重點摘要" },
  "Research Question / Why Now": { en: "Research Question / Why Now", zh: "研究問題與時機" },
  "Known Facts": { en: "Known Facts", zh: "已知事實" },
  "Reasonable Inferences": { en: "Reasonable Inferences", zh: "合理推論" },
  Unknowns: { en: "Unknowns", zh: "未知事項" },
  "Core Mechanism": { en: "Core Mechanism", zh: "核心機制" },
  "Industry Chain": { en: "Industry Chain", zh: "產業鏈" },
  "Bottleneck Analysis": { en: "Bottleneck Analysis", zh: "瓶頸分析" },
  "Key Metrics": { en: "Key Metrics", zh: "關鍵指標" },
  Competition: { en: "Competition", zh: "競爭格局" },
  "Financial / Valuation": { en: "Financial / Valuation", zh: "財務與估值" },
  Catalysts: { en: "Catalysts", zh: "催化劑" },
  "Strongest Bear Case": { en: "Strongest Bear Case", zh: "最強反方論點" },
  "Kill Conditions": { en: "Kill Conditions", zh: "推翻條件" },
  "30–90 Day Validation": { en: "30–90 Day Validation", zh: "30–90 天驗證" },
  "Final Assessment": { en: "Final Assessment", zh: "總體評估" },
  Sources: { en: "Sources", zh: "資料來源" },
};

const ZH_TO_KEY: Record<string, string> = Object.fromEntries(
  Object.entries(SECTION_LABELS).map(([key, v]) => [v.zh, key]),
);

/** "Known Facts（已知事實）" → "Known Facts"; unify hyphen/en-dash. */
export function canonicalHeadingKey(raw: string): string | null {
  const stripped = raw
    .replace(/[（(][^（）()]*[）)]\s*$/, "")
    .replace(/(\d)\s*-\s*(\d)/g, "$1–$2")
    .trim();
  if (SECTION_LABELS[stripped]) return stripped;
  if (ZH_TO_KEY[stripped]) return ZH_TO_KEY[stripped];
  return null;
}

/** Replace canonical section headings with the target language's labels. */
export function localizeHeadings(markdown: string, lang: Lang): string {
  return markdown.replace(/^# (.+)$/gm, (line, text: string) => {
    const key = canonicalHeadingKey(text);
    return key ? `# ${SECTION_LABELS[key][lang]}` : line;
  });
}

// ---------------------------------------------------------------------------
// Part grouping (Overview + 4 numbered parts + appendix)
// ---------------------------------------------------------------------------

interface PartDef {
  id: string;
  num: number | null; // null = overview (unnumbered)
  label: { en: string; zh: string };
  sections: string[];
}

export const PARTS: PartDef[] = [
  { id: "overview", num: null, label: { en: "Overview", zh: "速覽" }, sections: ["Executive Summary"] },
  {
    id: "evidence", num: 1,
    label: { en: "Question & Evidence", zh: "問題與證據" },
    sections: ["Research Question / Why Now", "Known Facts", "Reasonable Inferences", "Unknowns"],
  },
  {
    id: "mechanism", num: 2,
    label: { en: "Mechanism & Industry", zh: "機制與產業" },
    sections: ["Core Mechanism", "Industry Chain", "Bottleneck Analysis", "Key Metrics", "Competition"],
  },
  {
    id: "financials", num: 3,
    label: { en: "Financials & Catalysts", zh: "財務與催化" },
    sections: ["Financial / Valuation", "Catalysts"],
  },
  {
    id: "risk", num: 4,
    label: { en: "Risk & Falsification", zh: "風險與否證" },
    sections: ["Strongest Bear Case", "Kill Conditions", "30–90 Day Validation", "Final Assessment"],
  },
];

const VERDICT_META: Record<string, { cls: string; icon: string; zh: string }> = {
  "BUILD NOW": { cls: "v-build", icon: "▲", zh: "值得立即投入" },
  VALIDATE: { cls: "v-validate", icon: "◔", zh: "持續驗證" },
  PAUSE: { cls: "v-pause", icon: "■", zh: "暫緩觀察" },
};

// ---------------------------------------------------------------------------
// Stylesheet — warm-paper palette, all pairs verified ≥ WCAG AA this session
// ---------------------------------------------------------------------------

const STYLE = `
:root {
  color-scheme: light dark;
  --bg: #FAF7F2; --bg-stripe: #F3EFE7; --bg-head: #EFEAE0; --border: #E4DDD1;
  --ink: #2A2622; --ink-2: #55504A; --ink-3: #6E675F; --accent: #8C4A1F;
  --viz-surface: #FAF7F2; --viz-series: #2a78d6; --viz-ink: #2A2622;
  --viz-muted: #6E675F; --viz-grid: #E4DDD1; --viz-baseline: #D4CCBE;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #1B1A18; --bg-stripe: #232220; --bg-head: #26241F; --border: #33312C;
    --ink: #E3DED4; --ink-2: #B0A99C; --ink-3: #918A7D; --accent: #E0A165;
    --viz-surface: #1B1A18; --viz-series: #3987e5; --viz-ink: #E3DED4;
    --viz-muted: #918A7D; --viz-grid: #33312C; --viz-baseline: #3E3B34;
  }
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif;
  font-size: 1rem; }
@media (min-width: 600px) { body { font-size: 1.0625rem; } }
@media (min-width: 900px) { body { font-size: 1.125rem; } }
p, li { line-height: 1.55; }
p:lang(zh), li:lang(zh) { line-height: 1.8; text-align: justify; }
p { margin: 0 0 0.75em; }
a { color: var(--accent); text-decoration: underline;
  text-decoration-thickness: 1px; text-underline-offset: 3px; }
a:hover { text-decoration-thickness: 2px; }

.topbar { position: sticky; top: 0; z-index: 5; background: var(--bg);
  border-bottom: 1px solid var(--border); }
.topbar .inner { max-width: 60rem; margin: 0 auto; padding: 0.55rem 1rem;
  display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
.topbar a { text-decoration: none; }
.topbar .brand { font-weight: 650; color: var(--ink); font-size: 0.95rem; }
.topbar .spacer { flex: 1; }
.topbar a.lang { border: 1px solid var(--border); border-radius: 999px;
  padding: 0.05rem 0.75rem; font-size: 0.85rem; color: var(--ink-2); }
.topbar a[href$="feed.xml"] { color: var(--ink-2); font-size: 0.85rem; }

main { max-width: 60rem; margin: 0 auto; padding: 2rem 1rem 4rem; }
.layout { display: block; }
@media (min-width: 1100px) {
  .layout { display: grid; grid-template-columns: minmax(0, 38em) 15rem;
    gap: 3.5rem; align-items: start; }
  .toc { position: sticky; top: 3.5rem; max-height: calc(100vh - 5rem);
    overflow-y: auto; display: block; }
}
.toc { display: none; font-size: 0.85rem; line-height: 1.5; }
.toc .toc-part { margin: 1.1rem 0 0.3rem; font-size: 0.72rem;
  text-transform: uppercase; letter-spacing: 0.08em; color: var(--ink-3); }
.toc ol { list-style: none; margin: 0; padding: 0; }
.toc li { margin: 0.3rem 0; }
.toc a { color: var(--ink-2); text-decoration: none; display: block;
  padding-left: 0.6rem; border-left: 2px solid transparent; }
.toc a:hover { color: var(--ink); }
.toc a.active { color: var(--accent); border-left-color: var(--accent); }

.toc-inline { margin: 1.5rem 0 0; padding: 0; display: flex; flex-wrap: wrap; gap: 0.4rem; }
@media (min-width: 1100px) { .toc-inline { display: none; } }
.toc-inline a { font-size: 0.82rem; color: var(--ink-2); text-decoration: none;
  border: 1px solid var(--border); border-radius: 999px; padding: 0.15rem 0.7rem; }

article { min-width: 0; }
article > * { max-width: 36em; }
.report-title { font-size: 1.728em; line-height: 1.35; margin: 0.5rem 0 0.75rem;
  font-weight: 700; }
.kicker { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--ink-2); margin: 0 0 0.35rem; font-weight: 600; }
.metaline { display: flex; flex-wrap: wrap; gap: 0.4rem; margin: 0.75rem 0 1.25rem;
  align-items: center; }
.badge { display: inline-flex; align-items: center; gap: 0.3rem;
  border: 1px solid var(--border); border-radius: 999px; padding: 0 0.6rem;
  font-size: 0.78rem; color: var(--ink-2); background: var(--bg); }
.badge.v-build { color: var(--accent); font-weight: 650; }
.badge.v-validate { font-weight: 650; }
.badge.v-pause { font-weight: 650; }
.meta { color: var(--ink-3); font-size: 0.82em; }

.verdict-card { background: var(--bg-stripe); border-left: 3px solid var(--accent);
  border-radius: 0 10px 10px 0; padding: 1.1rem 1.3rem; margin: 1.25rem 0 0; }
.verdict-card .verdict-line { font-size: 0.82rem; color: var(--ink-2);
  margin-bottom: 0.5rem; font-weight: 600; letter-spacing: 0.02em; }
.standfirst { font-size: 1.2em; line-height: 1.55; margin: 0; font-weight: 500; }
.standfirst p { margin: 0; line-height: inherit; }
.notice { border: 1px dashed var(--border); border-radius: 8px;
  padding: 0.6rem 1rem; color: var(--ink-2); font-size: 0.9em; margin-top: 1.25rem; }

.part { margin-top: 4.5rem; }
.part-head { border-top: 1px solid var(--border); padding-top: 1rem; }
section.sec { margin-top: 2.8rem; }
section.sec:first-of-type { margin-top: 1.25rem; }
h2 { font-size: 1.44em; line-height: 1.3; margin: 0 0 0.6em; scroll-margin-top: 4.5rem; }
h2:lang(zh) { line-height: 1.4; }
h3 { font-size: 1.2em; margin: 1.6em 0 0.5em; }
article strong { font-weight: 650; }
blockquote { border-left: 3px solid var(--border); margin: 0 0 0.75em;
  padding: 0.1rem 1rem; color: var(--ink-2); background: var(--bg-stripe);
  border-radius: 0 8px 8px 0; }
ul, ol { margin: 0 0 0.75em; padding-left: 1.4em; }
li { margin: 0.3em 0; }
code { background: var(--bg-stripe); border: 1px solid var(--border);
  border-radius: 4px; padding: 0.05em 0.3em; font-size: 0.85em; }
pre { background: var(--bg-stripe); border: 1px solid var(--border);
  border-radius: 8px; padding: 0.8rem; overflow-x: auto; max-width: 46em; }
pre code { border: 0; background: none; }
hr { border: 0; border-top: 1px solid var(--border); margin: 2rem 0; }

.tablewrap { max-width: 46em; overflow-x: auto; margin: 0 0 1.25em; }
table { border-collapse: collapse; font-size: 0.875em;
  font-variant-numeric: tabular-nums; }
th, td { border: 0; border-bottom: 1px solid var(--border);
  padding: 0.5em 0.75em; text-align: left; vertical-align: top; }
td { line-height: 1.5; } td:lang(zh) { line-height: 1.6; }
th { background: var(--bg-head); color: var(--ink-3); font-size: 0.8125em;
  font-weight: 600; letter-spacing: 0.03em; }
table.zebra tbody tr:nth-child(even) { background: var(--bg-stripe); }

figure.chart { margin: 1.4rem 0; background: var(--viz-surface);
  border: 1px solid var(--border); border-radius: 10px; padding: 1rem;
  max-width: 46em; }
figure.chart h3 { margin: 0 0 0.5rem; font-size: 0.95em; }
figure.chart svg { width: 100%; height: auto; display: block; }
figure.chart figcaption { margin-top: 0.4rem; }

details.appendix { margin-top: 4.5rem; border-top: 1px solid var(--border);
  padding-top: 1rem; }
details.appendix summary { cursor: pointer; color: var(--ink-2);
  font-weight: 600; padding: 0.5rem 0; min-height: 44px;
  display: flex; align-items: center; }
details.appendix .meta a { overflow-wrap: anywhere; }

.cards { list-style: none; padding: 0; margin: 1.5rem 0 0; }
.cards li { border-top: 1px solid var(--border); padding: 1.3rem 0; }
.cards .title { font-size: 1.1em; font-weight: 650; line-height: 1.45; }
.cards .title a { color: var(--ink); text-decoration: none; }
.cards .title a:hover { color: var(--accent); }
.cards .badges { margin: 0.5rem 0 0.4rem; display: flex; flex-wrap: wrap; gap: 0.35rem; }
.cards .meta { line-height: 1.6; }
.index-title { font-size: 1.5em; margin: 0.5rem 0 0; }

footer { border-top: 1px solid var(--border); margin-top: 4rem;
  padding-top: 1rem; color: var(--ink-3); font-size: 0.82em; }
footer a { color: var(--ink-3); }
@media print {
  .topbar, .toc, .toc-inline { display: none !important; }
  body { background: #fff; }
}
`;

const SCROLL_SPY = `
<script>
(function () {
  if (!("IntersectionObserver" in window)) return;
  var links = document.querySelectorAll(".toc a[href^='#']");
  if (!links.length) return;
  var map = new Map();
  links.forEach(function (a) {
    var sec = document.getElementById(a.getAttribute("href").slice(1));
    if (sec) map.set(sec, a);
  });
  var active = null;
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        if (active) active.classList.remove("active");
        active = map.get(e.target);
        if (active) active.classList.add("active");
      }
    });
  }, { rootMargin: "-15% 0px -70% 0px" });
  map.forEach(function (_a, sec) { obs.observe(sec); });
})();
</script>`;

// ---------------------------------------------------------------------------

interface PageOpts {
  title: string;
  body: string;
  rootPrefix: string;
  lang: Lang;
  config: PipelineConfig;
  altPath: string;
  scrollSpy?: boolean;
}

function sitePage(o: PageOpts): string {
  const ui = UI[o.lang];
  const siteTitle =
    o.lang === "zh" ? (o.config.siteTitleZh ?? o.config.siteTitle) : o.config.siteTitle;
  const homePath = o.lang === "zh" ? `${o.rootPrefix}zh/` : o.rootPrefix || "./";
  const feedHref = o.lang === "zh" ? `${o.rootPrefix}zh/feed.xml` : `${o.rootPrefix}feed.xml`;
  return `<!doctype html>
<html lang="${o.lang === "zh" ? "zh-Hant" : "en"}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(o.title)}</title>
<link rel="alternate" type="application/rss+xml" title="${esc(siteTitle)}" href="${feedHref}">
<style>${STYLE}</style>
</head>
<body>
<div class="topbar"><div class="inner">
  <a class="brand" href="${homePath}">${esc(siteTitle)}</a>
  <span class="spacer"></span>
  <a href="${feedHref}">${ui.rss}</a>
  <a class="lang" href="${o.rootPrefix}${o.altPath}">${ui.switchLabel}</a>
</div></div>
<main>
${o.body}
<footer>${esc(ui.footer)} · <a href="https://github.com/gpwork4u/research-pipeline">research-pipeline</a></footer>
</main>${o.scrollSpy ? SCROLL_SPY : ""}
</body>
</html>
`;
}

/** Wrap tables for horizontal overflow; zebra only when ≥5 rows and ≥4 cols. */
export function processTables(html: string): string {
  return html.replace(/<table>([\s\S]*?)<\/table>/g, (_m, inner: string) => {
    const bodyRows = (inner.match(/<tr>/g) ?? []).length - 1;
    const cols = (inner.slice(0, inner.indexOf("</tr>")).match(/<th>/g) ?? []).length;
    const zebra = bodyRows >= 5 && cols >= 4 ? ' class="zebra"' : "";
    return `<div class="tablewrap"><table${zebra}>${inner}</table></div>`;
  });
}

function mdToHtml(markdown: string, rootPrefix: string): string {
  let html = marked.parse(markdown, { async: false }) as string;
  html = html.replace(/src="\/?assets\//g, `src="${rootPrefix}assets/`);
  return processTables(html);
}

function readTimeBadge(minutes: number, lang: Lang): string {
  return lang === "zh" ? `約 ${minutes} 分鐘讀完` : `${minutes} ${UI.en.minRead}`;
}

function loadCharts(rootDir: string, meta: ReportMeta): ChartSpec[] {
  const file = path.join(rootDir, "assets", `${meta.date}-${meta.slug}`, "charts.json");
  if (!fs.existsSync(file)) return [];
  try {
    const specs = JSON.parse(fs.readFileSync(file, "utf8")) as ChartSpec[];
    return Array.isArray(specs) ? specs : [];
  } catch (err) {
    console.warn(`[site] bad charts.json for ${meta.slug}: ${(err as Error).message}`);
    return [];
  }
}

export function renderReportPage(
  rootDir: string,
  meta: ReportMeta,
  markdown: string,
  lang: Lang,
  config: PipelineConfig,
  opts: { fallbackNotice?: boolean } = {},
): string {
  const ui = UI[lang];
  const fm = parseFrontMatter(markdown) as Partial<ReportMeta>;
  const title = (fm.title as string) || meta.title;
  const rootPrefix = lang === "zh" ? "../../../" : "../../";
  const body = markdown.replace(/^---\n[\s\S]*?\n---\n/, "");
  const { sections } = splitSections(body, canonicalHeadingKey);
  const byKey = new Map(sections.filter((s) => s.key).map((s) => [s.key as string, s]));
  const unknownSections = sections.filter((s) => !s.key);
  const charts = loadCharts(rootDir, meta);
  const minutes = reportReadingMinutes(markdown, canonicalHeadingKey, charts.length);

  const verdict = meta.verdict;
  const vmeta = VERDICT_META[verdict] ?? { cls: "", icon: "", zh: verdict };
  const verdictLabel =
    lang === "zh" ? `${verdict} · ${vmeta.zh}` : verdict;
  const conclusion = byKey.get("一句話結論");

  // --- hero: title, meta badges, verdict card with standfirst ---
  const metaline = [
    `<span class="badge">${esc(meta.date)}</span>`,
    `<span class="badge">${esc(meta.research_type)}</span>`,
    `<span class="badge">${esc(ui.confidence)}: ${esc(meta.confidence)}</span>`,
    `<span class="badge">${esc(readTimeBadge(minutes, lang))}</span>`,
    ...meta.topics.map((t) => `<span class="badge">${esc(t)}</span>`),
  ].join("");
  const verdictCard = `<div class="verdict-card">
<div class="verdict-line">${vmeta.icon} ${esc(verdictLabel)}</div>
<div class="standfirst">${conclusion ? mdToHtml(conclusion.content, rootPrefix) : ""}</div>
</div>`;

  // --- parts ---
  const tocGroups: string[] = [];
  const inlineToc: string[] = [];
  const partsHtml: string[] = [];
  let secId = 0;

  for (const part of PARTS) {
    const present = part.sections.filter((k) => byKey.has(k));
    if (!present.length) continue;
    const partLabel = part.label[lang];
    const partKicker =
      part.num === null ? partLabel : `PART ${part.num} · ${partLabel}`;
    const partAnchor = `part-${part.id}`;
    inlineToc.push(`<a href="#${partAnchor}">${esc(partLabel)}</a>`);
    const tocItems: string[] = [];
    const sectionHtml: string[] = [];
    let secNo = 0;

    for (const key of present) {
      const sec = byKey.get(key)!;
      secNo++;
      secId++;
      const id = `sec-${secId}`;
      const label = SECTION_LABELS[key][lang];
      const secKicker =
        part.num === null ? partLabel : `${part.num}.${secNo} · ${partLabel}`;
      tocItems.push(`<li><a href="#${id}">${esc(label)}</a></li>`);
      sectionHtml.push(`<section class="sec" id="${id}">
<p class="kicker">${esc(secKicker)}</p>
<h2>${esc(label)}</h2>
${mdToHtml(sec.content, rootPrefix)}
</section>`);
      // Charts live in the Overview part, right after the executive summary.
      if (key === "Executive Summary" && charts.length) {
        secId++;
        sectionHtml.push(`<section class="sec" id="charts">
<p class="kicker">${esc(partLabel)}</p>
<h2>${ui.charts}</h2>
${charts.map((c) => renderChartSvg(c, lang)).join("\n")}
</section>`);
        tocItems.push(`<li><a href="#charts">${ui.charts}</a></li>`);
      }
    }

    tocGroups.push(`<div class="toc-part">${esc(partKicker)}</div><ol>${tocItems.join("")}</ol>`);
    partsHtml.push(`<div class="part" id="${partAnchor}">
<div class="part-head"><p class="kicker">${esc(partKicker)}</p></div>
${sectionHtml.join("\n")}
</div>`);
  }

  // Unrecognized sections keep their original headings, before the appendix.
  if (unknownSections.length) {
    const items = unknownSections
      .map((s) => {
        secId++;
        return `<section class="sec" id="sec-${secId}">
<h2>${esc(s.heading)}</h2>
${mdToHtml(s.content, rootPrefix)}
</section>`;
      })
      .join("\n");
    partsHtml.push(`<div class="part">${items}</div>`);
  }

  // --- appendix: sources collapsed with a counting summary line ---
  const sources = byKey.get("Sources");
  let appendix = "";
  if (sources) {
    const count = (sources.content.match(/^- /gm) ?? []).length;
    const summaryLabel =
      lang === "zh"
        ? `${SECTION_LABELS["Sources"].zh}（${count} 筆）`
        : `${SECTION_LABELS["Sources"].en} (${count})`;
    appendix = `<details class="appendix" id="sources">
<summary>${esc(ui.appendix)} · ${esc(summaryLabel)}</summary>
<div class="meta">${mdToHtml(sources.content, rootPrefix)}</div>
</details>`;
    inlineToc.push(`<a href="#sources">${esc(SECTION_LABELS["Sources"][lang])}</a>`);
    tocGroups.push(
      `<div class="toc-part">${esc(ui.appendix)}</div><ol><li><a href="#sources">${esc(SECTION_LABELS["Sources"][lang])}</a></li></ol>`,
    );
  }

  const notice = opts.fallbackNotice ? `<p class="notice">${UI.zh.otherLangNote}</p>` : "";

  const bodyHtml = `
<div class="layout">
<article>
<p class="kicker">${esc(meta.date)}</p>
<h1 class="report-title">${esc(title)}</h1>
<div class="metaline">${metaline}</div>
${verdictCard}
${notice}
<nav class="toc-inline">${inlineToc.join("")}</nav>
${partsHtml.join("\n")}
${appendix}
</article>
<aside class="toc"><div class="toc-part">${ui.contents}</div>${tocGroups.join("")}</aside>
</div>`;

  const altPath = lang === "zh" ? `reports/${meta.slug}/` : `zh/reports/${meta.slug}/`;
  return sitePage({
    title, body: bodyHtml, rootPrefix, lang, config, altPath, scrollSpy: true,
  });
}

// ---------------------------------------------------------------------------

interface IndexEntry {
  meta: ReportMeta;
  title: string;
  conclusion: string;
  minutes: number;
}

function renderIndexPage(entries: IndexEntry[], lang: Lang, config: PipelineConfig): string {
  const ui = UI[lang];
  const prefix = lang === "zh" ? "../" : "";
  const items = entries
    .map((e) => {
      const v = VERDICT_META[e.meta.verdict] ?? { cls: "", icon: "", zh: e.meta.verdict };
      return `<li>
  <div class="title"><a href="${prefix}${lang === "zh" ? "zh/" : ""}reports/${esc(e.meta.slug)}/">${esc(e.title)}</a></div>
  <div class="badges">
    <span class="badge">${esc(e.meta.date)}</span>
    <span class="badge ${v.cls}">${v.icon} ${esc(lang === "zh" ? `${e.meta.verdict} · ${v.zh}` : e.meta.verdict)}</span>
    <span class="badge">${esc(readTimeBadge(e.minutes, lang))}</span>
    ${e.meta.topics.map((t) => `<span class="badge">${esc(t)}</span>`).join("")}
  </div>
  <div class="meta">${esc(e.conclusion)}</div>
</li>`;
    })
    .join("\n");
  const body = `<h1 class="index-title">${ui.indexTitle}</h1>
<ul class="cards">${items}</ul>`;
  return sitePage({
    title: lang === "zh" ? (config.siteTitleZh ?? config.siteTitle) : config.siteTitle,
    body,
    rootPrefix: prefix,
    lang,
    config,
    altPath: lang === "zh" ? "" : "zh/",
  });
}

function extractSection(markdown: string, heading: string): string {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`^# ${escaped}[^\\n]*\\n+([\\s\\S]*?)(?=\\n# |$)`, "m");
  const match = markdown.match(re);
  return match ? match[1].trim() : "";
}

function copyDir(src: string, dest: string): void {
  if (!fs.existsSync(src)) return;
  fs.cpSync(src, dest, { recursive: true });
}

export function buildSite(rootDir: string = ROOT_DIR): string {
  const config = loadConfig(rootDir);
  const outDir = path.join(rootDir, "dist", "site");
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  const reports = collectReports(rootDir);
  const enIndex: IndexEntry[] = [];
  const zhIndex: IndexEntry[] = [];

  for (const r of reports) {
    const enMd = fs.readFileSync(path.join(rootDir, r.path), "utf8");
    const zhFile = path.join(rootDir, r.path.replace(/\.md$/, ".zh.md"));
    const hasZh = fs.existsSync(zhFile);
    const zhMd = hasZh ? fs.readFileSync(zhFile, "utf8") : enMd;
    const chartCount = loadCharts(rootDir, r).length;

    const enDir = path.join(outDir, "reports", r.slug);
    fs.mkdirSync(enDir, { recursive: true });
    fs.writeFileSync(
      path.join(enDir, "index.html"),
      renderReportPage(rootDir, r, enMd, "en", config),
    );

    const zhDir = path.join(outDir, "zh", "reports", r.slug);
    fs.mkdirSync(zhDir, { recursive: true });
    fs.writeFileSync(
      path.join(zhDir, "index.html"),
      renderReportPage(rootDir, r, zhMd, "zh", config, { fallbackNotice: !hasZh }),
    );

    enIndex.push({
      meta: r,
      title: r.title,
      conclusion: r.one_sentence_conclusion ?? "",
      minutes: reportReadingMinutes(enMd, canonicalHeadingKey, chartCount),
    });
    const zhTitle = hasZh ? ((parseFrontMatter(zhMd).title as string) || r.title) : r.title;
    zhIndex.push({
      meta: r,
      title: zhTitle,
      conclusion: hasZh
        ? extractSection(zhMd.replace(/^---\n[\s\S]*?\n---\n/, ""), "一句話結論")
        : (r.one_sentence_conclusion ?? ""),
      minutes: reportReadingMinutes(zhMd, canonicalHeadingKey, chartCount),
    });
  }

  fs.writeFileSync(path.join(outDir, "index.html"), renderIndexPage(enIndex, "en", config));
  fs.mkdirSync(path.join(outDir, "zh"), { recursive: true });
  fs.writeFileSync(path.join(outDir, "zh", "index.html"), renderIndexPage(zhIndex, "zh", config));

  copyDir(path.join(rootDir, "assets"), path.join(outDir, "assets"));
  for (const f of ["feed.xml", "index.json"]) {
    const src = path.join(rootDir, "public", f);
    if (fs.existsSync(src)) fs.copyFileSync(src, path.join(outDir, f));
  }
  const zhFeed = path.join(rootDir, "public", "feed.zh.xml");
  if (fs.existsSync(zhFeed)) {
    fs.copyFileSync(zhFeed, path.join(outDir, "zh", "feed.xml"));
  }
  fs.writeFileSync(path.join(outDir, ".nojekyll"), "");

  console.log(`[site] built ${reports.length} report(s) x 2 languages -> ${outDir}`);
  return outDir;
}

const isMain = process.argv[1] && import.meta.url.endsWith(path.basename(process.argv[1]));
if (isMain) buildSite();
