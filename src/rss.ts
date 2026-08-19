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
  const re = new RegExp(`^# ${heading}\\s*\\n+([\\s\\S]*?)(?=\\n# |$)`, "m");
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
      else if (entry.name.endsWith(".md")) {
        const md = fs.readFileSync(full, "utf8");
        try {
          const fm = parseFrontMatter(md) as Record<string, never>;
          found.push({
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

export function reportUrl(config: PipelineConfig, meta: ReportMeta): string {
  // Permanent URL: /reports/<slug> — never changes once published (spec §39).
  return `${config.siteUrl.replace(/\/$/, "")}/reports/${meta.slug}`;
}

export function buildFeedXml(
  reports: ReportMeta[],
  config: PipelineConfig,
): string {
  const items = reports
    .slice(0, config.feedItemLimit)
    .map((r) => {
      const description = [
        r.one_sentence_conclusion,
        r.executive_summary,
      ]
        .filter(Boolean)
        .join("\n\n");
      return [
        "    <item>",
        `      <title>${escapeXml(r.title)}</title>`,
        `      <link>${escapeXml(reportUrl(config, r))}</link>`,
        `      <guid isPermaLink="true">${escapeXml(reportUrl(config, r))}</guid>`,
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
    `    <title>${escapeXml(config.siteTitle)}</title>`,
    `    <link>${escapeXml(config.siteUrl)}</link>`,
    `    <description>${escapeXml(config.siteDescription)}</description>`,
    `    <language>en</language>`,
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
  fs.writeFileSync(feedPath, buildFeedXml(reports, config));
  fs.writeFileSync(indexPath, buildIndexJson(reports, config));
  return { feedPath, indexPath, itemCount: Math.min(reports.length, config.feedItemLimit) };
}
