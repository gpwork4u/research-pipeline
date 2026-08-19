export type ResearchType = "NEW" | "UPDATE" | "FOLLOW_UP";
export type Verdict = "BUILD NOW" | "VALIDATE" | "PAUSE";
export type Confidence = "low" | "medium" | "high";

export interface Evidence {
  id: string;
  claim: string;
  source_url: string;
  source_title: string;
  source_type: "primary" | "secondary" | "discovery";
  published_at?: string | null;
  retrieved_at?: string | null;
  quote_or_extract?: string | null;
  confidence?: Confidence | null;
}

export interface Statement {
  statement: string;
  type: "FACT" | "INFERENCE" | "UNKNOWN";
  evidence_ids?: string[];
  confidence?: Confidence;
}

export interface KillCondition {
  condition: string;
  metric: string;
  threshold: string;
  time_window: string;
  impact: "invalidate" | "weaken";
}

export interface ValidationEvent {
  event: string;
  expected_window: string;
  supports_if: string;
  weakens_if: string;
  source_to_monitor?: string;
}

export interface ResearchTopic {
  title: string;
  slug: string;
  date: string;
  research_type: ResearchType;
  categories?: string[];
  score?: number;
  trigger?: string;
}

export interface ResearchData {
  topic: ResearchTopic;
  questions: { primary: string; sub?: string[] };
  thesis: string;
  facts: Statement[];
  inferences: Statement[];
  unknowns: (string | Statement)[];
  industry_chain?: Record<string, unknown>[];
  bottlenecks: Record<string, unknown>[];
  companies?: Record<string, unknown>[];
  metrics?: { name: string; source_id: string; [k: string]: unknown }[];
  competitors?: Record<string, unknown>[];
  financials?: Record<string, unknown>[];
  valuation?: unknown;
  catalysts?: string[];
  bear_case: { dimension: string; argument: string }[];
  kill_conditions: KillCondition[];
  validation_events: ValidationEvent[];
  sources: Evidence[];
  verdict?: Verdict | null;
  confidence?: Confidence | null;
}

export interface CandidateScores {
  novelty: number;
  timeliness: number;
  structural_importance: number;
  commercial_relevance: number;
  investment_relevance: number;
  data_availability: number;
  bottleneck_potential: number;
}

export interface CandidateTopic {
  title: string;
  slug: string;
  reason: string;
  trigger: string;
  research_type: ResearchType;
  source_count?: number;
  categories: string[];
  scores: CandidateScores;
  total_score?: number;
  related_previous_topics: string[];
}

export interface Narrative {
  one_sentence_conclusion: string;
  executive_summary: string;
  core_mechanism: string;
  final_assessment: string;
}

export interface ReviewIssue {
  severity: "critical" | "major" | "minor";
  section: string;
  description: string;
}

export interface ReviewResult {
  status: "PASS" | "FAIL";
  issues: ReviewIssue[];
}

export interface TopicMemoryEntry {
  slug: string;
  title: string;
  last_updated: string;
  reports: string[];
  status: "active" | "archived";
  categories?: string[];
  companies?: string[];
}

export interface ThesisMemoryEntry {
  id: string;
  topic: string;
  statement: string;
  confidence: Confidence;
  created_at: string;
  updated_at: string;
  supporting_reports: string[];
  kill_conditions: KillCondition[];
}

export interface WatchlistEntry extends ValidationEvent {
  origin_report: string;
  status: "open" | "triggered" | "expired";
}

export interface CompanyMemoryEntry {
  name: string;
  reports: string[];
  last_updated: string;
}

export interface MemoryStore {
  topics: TopicMemoryEntry[];
  theses: ThesisMemoryEntry[];
  watchlist: WatchlistEntry[];
  companies: CompanyMemoryEntry[];
}

export interface SearchResult {
  title: string;
  url: string;
  snippet: string;
}

export interface ReportMeta {
  title: string;
  date: string;
  slug: string;
  research_type: ResearchType;
  topics: string[];
  companies: string[];
  verdict: Verdict;
  confidence: Confidence;
  primary_question: string;
  path: string;
  one_sentence_conclusion?: string;
  executive_summary?: string;
  /** Filled from the sibling .zh.md translation when it exists. */
  title_zh?: string;
  one_sentence_conclusion_zh?: string;
  executive_summary_zh?: string;
}
