import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { loadConfig, ROOT_DIR, type PipelineConfig } from "./config.js";
import { renderChartSvg, type ChartSpec } from "./charts.js";
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
//   /feed.xml, /index.json  copied from public/

type Lang = "en" | "zh";

const UI: Record<Lang, Record<string, string>> = {
  en: {
    indexTitle: "Research Reports",
    contents: "Contents",
    charts: "Data Charts",
    verdict: "Verdict",
    confidence: "confidence",
    switchLabel: "中文",
    otherLangNote: "",
    footer: "Automated research — not investment advice.",
    rss: "RSS",
  },
  zh: {
    indexTitle: "研究報告",
    contents: "目錄",
    charts: "數據圖表",
    verdict: "結論",
    confidence: "信心水準",
    switchLabel: "English",
    otherLangNote: "此報告尚無中文版，以下為英文原文。",
    footer: "自動化研究內容，不構成投資建議。",
    rss: "RSS",
  },
};

const esc = (s: string): string =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const VERDICT_CLASS: Record<string, string> = {
  "BUILD NOW": "v-build",
  VALIDATE: "v-validate",
  PAUSE: "v-pause",
};
const VERDICT_ICON: Record<string, string> = {
  "BUILD NOW": "▲",
  VALIDATE: "◔",
  PAUSE: "■",
};

const STYLE = `
:root {
  color-scheme: light dark;
  --bg: #f9f9f7; --surface: #fcfcfb; --ink: #0b0b0b; --ink-2: #52514e;
  --muted: #898781; --line: #e1e0d9; --accent: #2a78d6;
  --viz-surface: #fcfcfb; --viz-series: #2a78d6; --viz-ink: #0b0b0b;
  --viz-muted: #898781; --viz-grid: #e1e0d9; --viz-baseline: #c3c2b7;
  --good: #0ca30c; --warn: #b97a00; --neutral: #52514e;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0d0d0d; --surface: #1a1a19; --ink: #ffffff; --ink-2: #c3c2b7;
    --muted: #898781; --line: #2c2c2a; --accent: #3987e5;
    --viz-surface: #1a1a19; --viz-series: #3987e5; --viz-ink: #ffffff;
    --viz-grid: #2c2c2a; --viz-baseline: #383835;
    --good: #0ca30c; --warn: #fab219; --neutral: #c3c2b7;
  }
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans TC", sans-serif;
  line-height: 1.65; }
a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }
.topbar { position: sticky; top: 0; z-index: 5; background: var(--surface);
  border-bottom: 1px solid var(--line); }
.topbar .inner { max-width: 72rem; margin: 0 auto; padding: 0.6rem 1rem;
  display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
.topbar .brand { font-weight: 650; color: var(--ink); }
.topbar .spacer { flex: 1; }
.topbar a.lang { border: 1px solid var(--line); border-radius: 999px;
  padding: 0.1rem 0.8rem; font-size: 0.85rem; }
main { max-width: 72rem; margin: 0 auto; padding: 1.5rem 1rem 3rem; }
.layout { display: block; }
@media (min-width: 64rem) {
  .layout { display: grid; grid-template-columns: 15rem minmax(0, 46rem); gap: 3rem; }
  .toc { position: sticky; top: 4rem; align-self: start; max-height: calc(100vh - 5rem); overflow-y: auto; }
}
.toc { font-size: 0.88rem; }
.toc h2 { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); }
.toc ol { list-style: none; margin: 0; padding: 0; }
.toc li { margin: 0.35rem 0; }
.toc a { color: var(--ink-2); }
article { min-width: 0; }
article h1 { font-size: 1.25rem; border-bottom: 1px solid var(--line);
  padding-bottom: 0.3rem; margin-top: 2.2rem; scroll-margin-top: 4.5rem; }
article h1:first-of-type { margin-top: 1rem; }
.report-title { font-size: 1.7rem; line-height: 1.3; margin: 0 0 0.6rem; }
.metacard { background: var(--surface); border: 1px solid var(--line);
  border-radius: 12px; padding: 0.9rem 1.1rem; margin: 1rem 0 1.5rem;
  display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: center; }
.badge { display: inline-flex; align-items: center; gap: 0.3rem;
  border: 1px solid var(--line); border-radius: 999px; padding: 0 0.65rem;
  font-size: 0.8rem; color: var(--ink-2); background: var(--bg); }
.badge.v-build { color: var(--good); border-color: var(--good); font-weight: 600; }
.badge.v-validate { color: var(--warn); border-color: var(--warn); font-weight: 600; }
.badge.v-pause { color: var(--neutral); font-weight: 600; }
.meta { color: var(--muted); font-size: 0.85rem; }
table { border-collapse: collapse; display: block; overflow-x: auto;
  font-size: 0.9rem; font-variant-numeric: tabular-nums; }
th, td { border: 1px solid var(--line); padding: 0.35rem 0.6rem; text-align: left; }
th { background: var(--surface); }
code { background: var(--surface); border: 1px solid var(--line);
  border-radius: 4px; padding: 0.05rem 0.3rem; font-size: 0.85em; }
pre { background: var(--surface); border: 1px solid var(--line);
  border-radius: 8px; padding: 0.8rem; overflow-x: auto; }
pre code { border: 0; background: none; }
blockquote { border-left: 3px solid var(--line); margin: 0; padding: 0 1rem; color: var(--ink-2); }
figure.chart { margin: 1.2rem 0; background: var(--viz-surface);
  border: 1px solid var(--line); border-radius: 12px; padding: 1rem; }
figure.chart h3 { margin: 0 0 0.5rem; font-size: 0.95rem; }
figure.chart svg { width: 100%; height: auto; display: block; }
.cards { list-style: none; padding: 0; display: grid; gap: 1rem; }
.cards li { background: var(--surface); border: 1px solid var(--line);
  border-radius: 12px; padding: 1rem 1.2rem; }
.cards .title { font-size: 1.05rem; font-weight: 650; }
.cards .badges { margin: 0.4rem 0; display: flex; flex-wrap: wrap; gap: 0.35rem; }
.notice { background: var(--surface); border: 1px dashed var(--line);
  border-radius: 8px; padding: 0.6rem 1rem; color: var(--ink-2); font-size: 0.9rem; }
footer { border-top: 1px solid var(--line); margin-top: 3rem;
  padding-top: 1rem; color: var(--muted); font-size: 0.85rem; }
`;

interface PageOpts {
  title: string;
  body: string;
  rootPrefix: string;
  lang: Lang;
  config: PipelineConfig;
  /** URL (relative to site root) of this page in the other language. */
  altPath: string;
}

function sitePage(o: PageOpts): string {
  const ui = UI[o.lang];
  const siteTitle =
    o.lang === "zh" ? (o.config.siteTitleZh ?? o.config.siteTitle) : o.config.siteTitle;
  const homePath = o.lang === "zh" ? `${o.rootPrefix}zh/` : o.rootPrefix || "./";
  return `<!doctype html>
<html lang="${o.lang === "zh" ? "zh-Hant" : "en"}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(o.title)}</title>
<link rel="alternate" type="application/rss+xml" title="${esc(siteTitle)}" href="${o.rootPrefix}feed.xml">
<style>${STYLE}</style>
</head>
<body>
<div class="topbar"><div class="inner">
  <a class="brand" href="${homePath}">${esc(siteTitle)}</a>
  <span class="spacer"></span>
  <a href="${o.rootPrefix}feed.xml">${ui.rss}</a>
  <a class="lang" href="${o.rootPrefix}${o.altPath}">${ui.switchLabel}</a>
</div></div>
<main>
${o.body}
<footer>${esc(ui.footer)} · <a href="https://github.com/gpwork4u/research-pipeline">research-pipeline</a></footer>
</main>
</body>
</html>
`;
}

function badges(meta: ReportMeta, lang: Lang): string {
  const ui = UI[lang];
  const v = meta.verdict;
  return [
    `<span class="badge">${esc(meta.date)}</span>`,
    `<span class="badge">${esc(meta.research_type)}</span>`,
    `<span class="badge ${VERDICT_CLASS[v] ?? ""}">${VERDICT_ICON[v] ?? ""} ${esc(v)}</span>`,
    `<span class="badge">${esc(ui.confidence)}: ${esc(meta.confidence)}</span>`,
    ...meta.topics.map((t) => `<span class="badge">${esc(t)}</span>`),
  ].join("");
}

/** Add ids to <h1> sections and build the TOC list. */
function addAnchors(html: string): { html: string; toc: { id: string; text: string }[] } {
  const toc: { id: string; text: string }[] = [];
  const out = html.replace(/<h1>([\s\S]*?)<\/h1>/g, (_m, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    const id = `s-${toc.length + 1}`;
    toc.push({ id, text });
    return `<h1 id="${id}">${inner}</h1>`;
  });
  return { html: out, toc };
}

function loadCharts(rootDir: string, meta: ReportMeta): ChartSpec[] {
  const dir = path.join(rootDir, "assets", `${meta.date}-${meta.slug}`);
  const file = path.join(dir, "charts.json");
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
  const body = markdown.replace(/^---\n[\s\S]*?\n---\n/, "");
  const rootPrefix = lang === "zh" ? "../../../" : "../../";
  let html = marked.parse(body, { async: false }) as string;
  // Asset references inside reports resolve against the site root.
  html = html.replace(/src="\/?assets\//g, `src="${rootPrefix}assets/`);
  const { html: contentHtml, toc } = addAnchors(html);

  const charts = loadCharts(rootDir, meta);
  const chartsHtml = charts.length
    ? `<section><h1 id="charts">${ui.charts}</h1>${charts.map((c) => renderChartSvg(c, lang)).join("\n")}</section>`
    : "";
  const tocItems = [
    ...toc.map((t) => `<li><a href="#${t.id}">${esc(t.text)}</a></li>`),
    ...(charts.length ? [`<li><a href="#charts">${ui.charts}</a></li>`] : []),
  ].join("");

  const notice = opts.fallbackNotice ? `<p class="notice">${UI.zh.otherLangNote}</p>` : "";

  const bodyHtml = `
<div class="layout">
<aside class="toc"><h2>${ui.contents}</h2><ol>${tocItems}</ol></aside>
<article>
<h1 class="report-title" style="border:0">${esc(title)}</h1>
<div class="metacard">${badges(meta, lang)}</div>
${notice}
${chartsHtml}
${contentHtml}
</article>
</div>`;

  const altPath = lang === "zh" ? `reports/${meta.slug}/` : `zh/reports/${meta.slug}/`;
  return sitePage({ title, body: bodyHtml, rootPrefix, lang, config, altPath });
}

interface IndexEntry {
  meta: ReportMeta;
  title: string;
  conclusion: string;
}

function renderIndexPage(
  entries: IndexEntry[],
  lang: Lang,
  config: PipelineConfig,
): string {
  const ui = UI[lang];
  const prefix = lang === "zh" ? "../" : "";
  const items = entries
    .map(
      (e) => `<li>
  <div class="title"><a href="${prefix}${lang === "zh" ? "zh/" : ""}reports/${esc(e.meta.slug)}/">${esc(e.title)}</a></div>
  <div class="badges">${badges(e.meta, lang)}</div>
  <div class="meta">${esc(e.conclusion)}</div>
</li>`,
    )
    .join("\n");
  const body = `<h1 class="report-title" style="border:0">${ui.indexTitle}</h1>
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
  const re = new RegExp(`^# ${heading}\\s*\\n+([\\s\\S]*?)(?=\\n# |$)`, "m");
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

    enIndex.push({ meta: r, title: r.title, conclusion: r.one_sentence_conclusion ?? "" });
    const zhTitle = hasZh ? ((parseFrontMatter(zhMd).title as string) || r.title) : r.title;
    zhIndex.push({
      meta: r,
      title: zhTitle,
      conclusion: hasZh
        ? extractSection(zhMd.replace(/^---\n[\s\S]*?\n---\n/, ""), "一句話結論")
        : (r.one_sentence_conclusion ?? ""),
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
  fs.writeFileSync(path.join(outDir, ".nojekyll"), "");

  console.log(`[site] built ${reports.length} report(s) x 2 languages -> ${outDir}`);
  return outDir;
}

const isMain = process.argv[1] && import.meta.url.endsWith(path.basename(process.argv[1]));
if (isMain) buildSite();
