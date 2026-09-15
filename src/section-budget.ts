import { splitSections, tableDataRows } from "./reading-time.js";

// Per-section length budgets from AGENTS.md / prompts/writer-agent.md.
//
// Two units are checked, because the two editions are written differently:
//   en — words (whitespace-delimited runs)
//   zh — CJK characters in the prose (tables excluded, they have row caps)
//
// Sub-Questions and Sources render into the collapsed appendix and are not on
// the reader's path, so they are uncounted — as are table rows, which have
// their own caps below.

export interface SectionBudget {
  en: number;
  zh: number;
}

export const SECTION_BUDGETS: Record<string, SectionBudget> = {
  一句話結論: { en: 25, zh: 40 },
  "Executive Summary": { en: 130, zh: 220 },
  "Research Question / Why Now": { en: 90, zh: 200 },
  "Known Facts": { en: 120, zh: 200 },
  "Reasonable Inferences": { en: 100, zh: 160 },
  Unknowns: { en: 80, zh: 130 },
  "Core Mechanism": { en: 180, zh: 300 },
  "Financial / Valuation": { en: 120, zh: 200 },
  Catalysts: { en: 90, zh: 150 },
  "Strongest Bear Case": { en: 120, zh: 200 },
  "Final Assessment": { en: 130, zh: 220 },
};

/** Sections that live in the collapsed appendix — never counted. */
export const APPENDIX_SECTIONS = new Set(["Sub-Questions", "Sources"]);

export const TOTAL_PROSE_BUDGET: SectionBudget = { en: 1300, zh: 2000 };

/** Table data-row caps (both editions share the research data). */
export const TABLE_ROW_BUDGET = 39;

const CJK_RE = /[一-鿿㐀-䶿豈-﫿]/g;

/** Strip markdown tables — their size is governed by TABLE_ROW_BUDGET. */
function proseOnly(markdown: string): string {
  return markdown
    .split("\n")
    .filter((line) => !/^\s*\|/.test(line))
    .join("\n");
}

export function countWords(prose: string): number {
  return (prose.trim().match(/\S+/g) ?? []).length;
}

export function countHan(prose: string): number {
  return (prose.match(CJK_RE) ?? []).length;
}

export interface BudgetViolation {
  section: string;
  unit: "words" | "CJK chars" | "rows";
  actual: number;
  cap: number;
}

/**
 * Check one report body against the per-section and total budgets.
 * `lang` is inferred by the caller from the filename (`.zh.md` → zh).
 */
export function checkSectionBudgets(
  body: string,
  lang: "en" | "zh",
  canonicalKey: (heading: string) => string | null,
): BudgetViolation[] {
  const unit = lang === "zh" ? ("CJK chars" as const) : ("words" as const);
  const count = lang === "zh" ? countHan : countWords;
  const { sections } = splitSections(body, canonicalKey);
  const violations: BudgetViolation[] = [];
  let total = 0;

  for (const sec of sections) {
    const key = sec.key;
    if (key && APPENDIX_SECTIONS.has(key)) continue;
    const prose = proseOnly(sec.content);
    const n = count(prose);
    total += n;
    const cap = key ? SECTION_BUDGETS[key] : undefined;
    if (cap && n > cap[lang]) {
      violations.push({ section: key as string, unit, actual: n, cap: cap[lang] });
    }
  }

  if (total > TOTAL_PROSE_BUDGET[lang]) {
    violations.push({
      section: "TOTAL prose",
      unit,
      actual: total,
      cap: TOTAL_PROSE_BUDGET[lang],
    });
  }

  const rows = tableDataRows(body);
  if (rows > TABLE_ROW_BUDGET) {
    violations.push({
      section: "TOTAL table rows",
      unit: "rows",
      actual: rows,
      cap: TABLE_ROW_BUDGET,
    });
  }

  return violations;
}
