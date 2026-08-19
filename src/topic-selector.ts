import fs from "node:fs";
import path from "node:path";
import type { PipelineConfig } from "./config.js";
import type { LLMProvider, SearchProvider } from "./providers.js";
import type {
  CandidateScores,
  CandidateTopic,
  MemoryStore,
  ResearchType,
  SearchResult,
} from "./types.js";
import { daysBetween, slugify } from "./util.js";

export const SCORE_DIMENSIONS: (keyof CandidateScores)[] = [
  "novelty",
  "timeliness",
  "structural_importance",
  "commercial_relevance",
  "investment_relevance",
  "data_availability",
  "bottleneck_potential",
];

export function totalScore(scores: CandidateScores): number {
  return SCORE_DIMENSIONS.reduce((sum, d) => sum + (scores[d] ?? 0), 0);
}

function tokens(text: string): Set<string> {
  return new Set(
    text
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((t) => t.length > 2),
  );
}

/**
 * Code-side duplicate detection against topic memory within the recent window.
 * Returns the matching previous slug, or null.
 */
export function findRecentDuplicate(
  candidate: { title: string; slug: string },
  memory: MemoryStore,
  today: string,
  windowDays: number,
): string | null {
  const candTokens = tokens(`${candidate.title} ${candidate.slug}`);
  for (const topic of memory.topics) {
    if (daysBetween(topic.last_updated, today) > windowDays) continue;
    if (topic.slug === candidate.slug) return topic.slug;
    const prevTokens = tokens(`${topic.title} ${topic.slug}`);
    const overlap = [...candTokens].filter((t) => prevTokens.has(t)).length;
    const denom = Math.min(candTokens.size, prevTokens.size) || 1;
    if (overlap / denom >= 0.6) return topic.slug;
  }
  return null;
}

const CANDIDATE_SCHEMA = {
  type: "array",
  minItems: 1,
  items: {
    type: "object",
    required: ["title", "slug", "reason", "trigger", "research_type", "categories", "scores", "related_previous_topics"],
    properties: {
      title: { type: "string", minLength: 5 },
      slug: { type: "string", pattern: "^[a-z0-9]+(-[a-z0-9]+)*$" },
      reason: { type: "string" },
      trigger: { type: "string" },
      research_type: { enum: ["NEW", "UPDATE", "FOLLOW_UP"] },
      source_count: { type: "integer" },
      categories: { type: "array", items: { type: "string" } },
      scores: {
        type: "object",
        required: [
          "novelty",
          "timeliness",
          "structural_importance",
          "commercial_relevance",
          "investment_relevance",
          "data_availability",
          "bottleneck_potential",
        ],
        additionalProperties: { type: "number", minimum: 0, maximum: 5 },
      },
      related_previous_topics: { type: "array", items: { type: "string" } },
    },
  },
};

const DISCOVERY_QUERIES = [
  "major technology product releases this week",
  "notable tech company earnings results this week",
  "significant AI or semiconductor regulatory changes recent",
  "influential new research papers AI infrastructure recent",
  "major cloud or datacenter infrastructure announcements recent",
  "significant open source project releases this week",
];

export interface SelectionResult {
  selected: CandidateTopic | null;
  candidates: CandidateTopic[];
  skippedReason?: string;
}

function loadPrompt(rootDir: string): string {
  return fs.readFileSync(
    path.join(rootDir, "prompts", "topic-selector.md"),
    "utf8",
  );
}

export async function selectTopic(
  llm: LLMProvider,
  search: SearchProvider,
  memory: MemoryStore,
  config: PipelineConfig,
  rootDir: string,
  today: string,
  forcedTopic?: string,
): Promise<SelectionResult> {
  if (forcedTopic) {
    const forced: CandidateTopic = {
      title: forcedTopic,
      slug: slugify(forcedTopic),
      reason: "manually forced via --topic",
      trigger: "manual",
      research_type: "NEW",
      categories: [],
      scores: {
        novelty: 5,
        timeliness: 5,
        structural_importance: 5,
        commercial_relevance: 5,
        investment_relevance: 5,
        data_availability: 5,
        bottleneck_potential: 5,
      },
      total_score: 35,
      related_previous_topics: [],
    };
    return { selected: forced, candidates: [forced] };
  }

  // Stage: Discover Candidates — gather event signals first.
  const signals: SearchResult[] = [];
  for (const query of DISCOVERY_QUERIES) {
    try {
      signals.push(...(await search.search(query)).slice(0, 5));
    } catch (err) {
      console.warn(`[topic-selector] discovery query failed: ${query}`, err);
    }
  }

  const recentTopics = memory.topics.filter(
    (t) => daysBetween(t.last_updated, today) <= config.recentTopicWindowDays,
  );
  const openWatchlist = memory.watchlist.filter((w) => w.status === "open");

  const prompt = [
    loadPrompt(rootDir),
    `\n## Today\n${today}`,
    `\n## Event signals from web search\n${JSON.stringify(signals, null, 2)}`,
    `\n## Recent topics (last ${config.recentTopicWindowDays} days)\n${JSON.stringify(recentTopics, null, 2)}`,
    `\n## Open watchlist events (FOLLOW_UP has priority if one has occurred)\n${JSON.stringify(openWatchlist, null, 2)}`,
    `\nProduce 3-6 scored candidate topics.`,
  ].join("\n");

  const candidates = await llm.generateStructured<CandidateTopic[]>(
    prompt,
    CANDIDATE_SCHEMA,
    { stage: "candidates", useWebSearch: false, maxTokens: 16000 },
  );

  for (const c of candidates) {
    c.total_score = totalScore(c.scores);
    // Code-side duplicate check: same-topic candidates within the window are
    // downgraded to UPDATE unless the LLM already marked them FOLLOW_UP.
    const dup = findRecentDuplicate(c, memory, today, config.recentTopicWindowDays);
    if (dup && c.research_type === "NEW") {
      c.research_type = "UPDATE" as ResearchType;
      if (!c.related_previous_topics.includes(dup)) {
        c.related_previous_topics.push(dup);
      }
    }
  }

  const ranked = [...candidates].sort(
    (a, b) => (b.total_score ?? 0) - (a.total_score ?? 0),
  );
  const followUp = ranked.find((c) => c.research_type === "FOLLOW_UP");
  const best = followUp ?? ranked[0];

  if (!best || (best.total_score ?? 0) < config.minTopicScore) {
    return {
      selected: null,
      candidates: ranked,
      skippedReason: `no candidate reached minTopicScore=${config.minTopicScore} (best=${best?.total_score ?? 0})`,
    };
  }
  return { selected: best, candidates: ranked };
}
