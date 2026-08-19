import fs from "node:fs";
import path from "node:path";
import type {
  MemoryStore,
  ResearchData,
  ThesisMemoryEntry,
  WatchlistEntry,
} from "./types.js";

const FILES = ["topics", "theses", "watchlist", "companies"] as const;

export function loadMemory(rootDir: string): MemoryStore {
  const store = {} as Record<string, unknown>;
  for (const name of FILES) {
    const file = path.join(rootDir, "memory", `${name}.json`);
    store[name] = fs.existsSync(file)
      ? JSON.parse(fs.readFileSync(file, "utf8"))
      : [];
  }
  return store as unknown as MemoryStore;
}

export function saveMemory(rootDir: string, memory: MemoryStore): void {
  for (const name of FILES) {
    const file = path.join(rootDir, "memory", `${name}.json`);
    fs.writeFileSync(
      file,
      JSON.stringify(memory[name as keyof MemoryStore], null, 2) + "\n",
    );
  }
}

/**
 * Fold a finished research run into memory: topic history, thesis registry,
 * company index, and future validation events onto the watchlist.
 */
export function updateMemory(
  memory: MemoryStore,
  research: ResearchData,
  reportPath: string,
): MemoryStore {
  const { topic } = research;
  const date = topic.date;

  // --- topics ---
  const existingTopic = memory.topics.find((t) => t.slug === topic.slug);
  const companies = (research.companies ?? [])
    .map((c) => String(c.name ?? ""))
    .filter(Boolean);
  if (existingTopic) {
    existingTopic.last_updated = date;
    if (!existingTopic.reports.includes(reportPath)) {
      existingTopic.reports.push(reportPath);
    }
    existingTopic.companies = Array.from(
      new Set([...(existingTopic.companies ?? []), ...companies]),
    );
  } else {
    memory.topics.push({
      slug: topic.slug,
      title: topic.title,
      last_updated: date,
      reports: [reportPath],
      status: "active",
      categories: topic.categories ?? [],
      companies,
    });
  }

  // --- theses ---
  const thesisId = `thesis-${topic.slug}`;
  const existingThesis = memory.theses.find((t) => t.id === thesisId);
  if (existingThesis) {
    existingThesis.statement = research.thesis;
    existingThesis.confidence = research.confidence ?? "medium";
    existingThesis.updated_at = date;
    if (!existingThesis.supporting_reports.includes(reportPath)) {
      existingThesis.supporting_reports.push(reportPath);
    }
    existingThesis.kill_conditions = research.kill_conditions;
  } else {
    const entry: ThesisMemoryEntry = {
      id: thesisId,
      topic: topic.slug,
      statement: research.thesis,
      confidence: research.confidence ?? "medium",
      created_at: date,
      updated_at: date,
      supporting_reports: [reportPath],
      kill_conditions: research.kill_conditions,
    };
    memory.theses.push(entry);
  }

  // --- watchlist: future validation events become open entries ---
  for (const event of research.validation_events) {
    const dup = memory.watchlist.find(
      (w) => w.event === event.event && w.origin_report === reportPath,
    );
    if (!dup) {
      const entry: WatchlistEntry = {
        ...event,
        origin_report: reportPath,
        status: "open",
      };
      memory.watchlist.push(entry);
    }
  }

  // --- companies ---
  for (const name of companies) {
    const existing = memory.companies.find((c) => c.name === name);
    if (existing) {
      existing.last_updated = date;
      if (!existing.reports.includes(reportPath)) existing.reports.push(reportPath);
    } else {
      memory.companies.push({ name, reports: [reportPath], last_updated: date });
    }
  }

  return memory;
}
