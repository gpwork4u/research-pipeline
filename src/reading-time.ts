// Reading-time estimation + section splitting, shared by the site generator
// and the report linter.
//
// Formula (planning-grade speeds, deliberately slower than Medium's skim
// speeds so the badge stays honest for dense analytical text):
//   seconds = cjk_chars/350*60 + latin_words/220*60
//           + Σ over tables (10 + 2 * data_rows) + 10 * charts
// The sources appendix is excluded (collapsed reference material).

export interface ReportSection {
  /** Canonical section key when recognized (e.g. "Known Facts"), else null. */
  key: string | null;
  heading: string;
  content: string;
}

const CJK_RE = /[一-鿿㐀-䶿豈-﫿]/g;

/** Split a front-matter-free markdown body into "# " sections. */
export function splitSections(
  body: string,
  canonicalKey: (heading: string) => string | null,
): { preamble: string; sections: ReportSection[] } {
  const chunks = body.split(/\n(?=# )/);
  const sections: ReportSection[] = [];
  let preamble = "";
  for (const chunk of chunks) {
    const match = chunk.match(/^# (.+)\n?([\s\S]*)$/);
    if (!match) {
      preamble += chunk;
      continue;
    }
    const heading = match[1].trim();
    sections.push({ key: canonicalKey(heading), heading, content: match[2].trim() });
  }
  return { preamble, sections };
}

export function tableDataRows(markdown: string): number {
  // Data rows: pipe-rows that are neither the header nor the separator line.
  const pipeRows = markdown.match(/^\|.*\|\s*$/gm) ?? [];
  const separators = markdown.match(/^\|[\s\-:|]+\|\s*$/gm) ?? [];
  const headers = separators.length; // one header row per table
  return Math.max(pipeRows.length - separators.length - headers, 0);
}

export interface ReadingTimeInput {
  /** Markdown of the counted sections (sources already removed). */
  markdown: string;
  chartCount?: number;
}

export function readingSeconds({ markdown, chartCount = 0 }: ReadingTimeInput): number {
  const dataRows = tableDataRows(markdown);
  const tableCount = (markdown.match(/^\|[\s\-:|]+\|\s*$/gm) ?? []).length;
  const prose = markdown.replace(/^\|.*\|\s*$/gm, " ");
  const cjk = (prose.match(CJK_RE) ?? []).length;
  const latinWords = prose
    .replace(CJK_RE, " ")
    .split(/\s+/)
    .filter((t) => /[A-Za-z0-9]/.test(t)).length;
  return (
    (cjk / 350) * 60 +
    (latinWords / 220) * 60 +
    tableCount * 10 +
    dataRows * 2 +
    chartCount * 10
  );
}

export function readingMinutes(input: ReadingTimeInput): number {
  return Math.max(1, Math.ceil(readingSeconds(input) / 60));
}

/** Reading minutes for a full report body: strips front matter and Sources. */
export function reportReadingMinutes(
  markdownWithFrontMatter: string,
  canonicalKey: (heading: string) => string | null,
  chartCount = 0,
): number {
  const body = markdownWithFrontMatter.replace(/^---\n[\s\S]*?\n---\n/, "");
  const { sections } = splitSections(body, canonicalKey);
  const counted = sections
    .filter((s) => s.key !== "Sources")
    .map((s) => s.content)
    .join("\n\n");
  return readingMinutes({ markdown: counted, chartCount });
}
