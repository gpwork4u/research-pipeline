import fs from "node:fs";
import path from "node:path";
import type { PipelineConfig } from "./config.js";
import type { ReportMeta } from "./types.js";
import { parseFrontMatter } from "./writer.js";

export function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function extractSection(markdown: string, heading: string): string {
  // Tolerates legacy annotated headings like "# Executive Summary（摘要）".
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`^# ${escaped}[^\\n]*\\n+([\\s\\S]*?)(?=\\n# |$)`, "m");
  const match = markdown.match(re);
  return match ? match[1].trim() : "";
}

/** Walk reports/YYYY/MM/*.md and parse metadata for every report. */
export function collectReports(rootDir: string): ReportMeta[] {
  const reportsDir = path.join(rootDir, "reports");
  const found: ReportMeta[] = [];
  if (!fs.existsSync(reportsDir)) return found;

  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith(".md") && !entry.name.endsWith(".zh.md")) {
        // .zh.md files are translations of the sibling .md — the site renders
        // them under /zh/, but the feed and index list each report once.
        const md = fs.readFileSync(full, "utf8");
        try {
          const fm = parseFrontMatter(md) as Record<string, never>;
          const zhFile = full.replace(/\.md$/, ".zh.md");
          let zhFields: Partial<ReportMeta> = {};
          if (fs.existsSync(zhFile)) {
            const zhMd = fs.readFileSync(zhFile, "utf8");
            try {
              const zhFm = parseFrontMatter(zhMd) as Record<string, string>;
              zhFields = {
                title_zh: zhFm["title"],
                one_sentence_conclusion_zh: extractSection(zhMd, "一句話結論"),
                executive_summary_zh: extractSection(zhMd, "Executive Summary"),
              };
            } catch {
              // a broken translation never blocks the English feed
            }
          }
          found.push({
            ...zhFields,
            title: fm["title"],
            date: fm["date"],
            slug: fm["slug"],
            research_type: fm["research_type"],
            topics: fm["topics"] ?? [],
            companies: fm["companies"] ?? [],
            verdict: fm["verdict"],
            confidence: fm["confidence"],
            primary_question: fm["primary_question"],
            path: path.relative(rootDir, full),
            one_sentence_conclusion: extractSection(md, "一句話結論"),
            executive_summary: extractSection(md, "Executive Summary"),
          });
        } catch (err) {
          console.warn(`[rss] skipping ${full}: ${(err as Error).message}`);
        }
      }
    }
  };
  walk(reportsDir);
  return found.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function reportUrl(
  config: PipelineConfig,
  meta: ReportMeta,
  lang: "en" | "zh" = "en",
): string {
  // Permanent URL: /reports/<slug> — never changes once published (spec §39).
  const base = config.siteUrl.replace(/\/$/, "");
  return lang === "zh" ? `${base}/zh/reports/${meta.slug}` : `${base}/reports/${meta.slug}`;
}

export function buildFeedXml(
  reports: ReportMeta[],
  config: PipelineConfig,
  lang: "en" | "zh" = "en",
): string {
  const items = reports
    .slice(0, config.feedItemLimit)
    .map((r) => {
      const title = lang === "zh" ? (r.title_zh ?? r.title) : r.title;
      const description = (lang === "zh"
        ? [
            r.one_sentence_conclusion_zh || r.one_sentence_conclusion,
            r.executive_summary_zh || r.executive_summary,
          ]
        : [r.one_sentence_conclusion, r.executive_summary]
      )
        .filter(Boolean)
        .join("\n\n");
      const url = reportUrl(config, r, lang);
      return [
        "    <item>",
        `      <title>${escapeXml(title)}</title>`,
        `      <link>${escapeXml(url)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
        `      <pubDate>${new Date(`${r.date}T0${config.publicationHour}:00:00+08:00`).toUTCString()}</pubDate>`,
        `      <category>${escapeXml(r.research_type)}</category>`,
        ...r.topics.map((t) => `      <category>${escapeXml(t)}</category>`),
        `      <description>${escapeXml(description)}</description>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    "  <channel>",
    `    <title>${escapeXml(lang === "zh" ? (config.siteTitleZh ?? config.siteTitle) : config.siteTitle)}</title>`,
    `    <link>${escapeXml(lang === "zh" ? `${config.siteUrl.replace(/\/$/, "")}/zh/` : config.siteUrl)}</link>`,
    `    <description>${escapeXml(lang === "zh" ? (config.siteDescriptionZh ?? config.siteDescription) : config.siteDescription)}</description>`,
    `    <language>${lang === "zh" ? "zh-Hant" : "en"}</language>`,
    items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");
}

export function buildIndexJson(
  reports: ReportMeta[],
  config: PipelineConfig,
): string {
  return (
    JSON.stringify(
      reports.map((r) => ({
        title: r.title,
        date: r.date,
        slug: r.slug,
        research_type: r.research_type,
        topics: r.topics,
        companies: r.companies,
        verdict: r.verdict,
        confidence: r.confidence,
        url: reportUrl(config, r),
        path: r.path,
        one_sentence_conclusion: r.one_sentence_conclusion,
      })),
      null,
      2,
    ) + "\n"
  );
}

export function buildRss(rootDir: string, config: PipelineConfig): {
  feedPath: string;
  indexPath: string;
  itemCount: number;
} {
  const reports = collectReports(rootDir);
  const publicDir = path.join(rootDir, "public");
  fs.mkdirSync(publicDir, { recursive: true });
  const feedPath = path.join(publicDir, "feed.xml");
  const indexPath = path.join(publicDir, "index.json");
  fs.writeFileSync(feedPath, buildFeedXml(reports, config, "en"));
  fs.writeFileSync(path.join(publicDir, "feed.zh.xml"), buildFeedXml(reports, config, "zh"));
  fs.writeFileSync(indexPath, buildIndexJson(reports, config));
  return { feedPath, indexPath, itemCount: Math.min(reports.length, config.feedItemLimit) };
}
