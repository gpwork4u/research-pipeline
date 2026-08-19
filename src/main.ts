import fs from "node:fs";
import path from "node:path";
import { loadConfig, parseCli, ROOT_DIR, todayInTimezone } from "./config.js";
import { fixturesForDate } from "./mock-fixtures.js";
import { loadMemory, saveMemory, updateMemory } from "./memory.js";
import {
  AnthropicProvider,
  AnthropicSearchProvider,
  hasApiKey,
  MockLLMProvider,
  MockSearchProvider,
  type LLMProvider,
  type SearchProvider,
} from "./providers.js";
import { commitAndPush, commitMessageFor } from "./publisher.js";
import {
  buildQuestions,
  conductResearch,
  persistResearch,
  reportFilePath,
  researchFilePath,
} from "./researcher.js";
import { reviewReport } from "./reviewer.js";
import { buildRss } from "./rss.js";
import { selectTopic } from "./topic-selector.js";
import { validateResearch } from "./validator.js";
import { renderReport, writeNarrative } from "./writer.js";
import { exampleSearchResults } from "./mock-fixtures.js";
import type { ResearchData } from "./types.js";

function makeProviders(date: string): { llm: LLMProvider; search: SearchProvider } {
  if (hasApiKey()) {
    const llm = new AnthropicProvider();
    return { llm, search: new AnthropicSearchProvider(llm) };
  }
  console.warn(
    "[main] no ANTHROPIC_API_KEY found — using MOCK providers (example data only)",
  );
  return {
    llm: new MockLLMProvider(fixturesForDate(date)),
    search: new MockSearchProvider(exampleSearchResults()),
  };
}

async function main() {
  const opts = parseCli(process.argv.slice(2));
  const config = loadConfig();
  const date = opts.date ?? todayInTimezone(config.timezone);
  const runId = `run-${date}-${Math.random().toString(36).slice(2, 8)}`;
  const log = (msg: string) => console.log(`[${runId}] ${msg}`);

  log(`stage=start date=${date} dryRun=${opts.dryRun} stage=${opts.stage ?? "all"}`);

  // Partial stage: rebuild RSS only.
  if (opts.stage === "rss") {
    const rss = buildRss(ROOT_DIR, config);
    log(`rss rebuilt: ${rss.itemCount} items -> ${rss.feedPath}`);
    return;
  }

  const { llm, search } = makeProviders(date);
  const memory = loadMemory(ROOT_DIR);
  log(
    `memory loaded: ${memory.topics.length} topics, ${memory.theses.length} theses, ` +
      `${memory.watchlist.filter((w) => w.status === "open").length} open watchlist events`,
  );

  // Stages: Discover -> Rank -> Select (includes watchlist scan + dedup).
  const selection = await selectTopic(
    llm,
    search,
    memory,
    config,
    ROOT_DIR,
    date,
    opts.topic,
  );
  if (!selection.selected) {
    log(`no topic selected — ${selection.skippedReason}. Skipping publication.`);
    return;
  }
  const topic = selection.selected;
  log(
    `topic selected: "${topic.title}" (slug=${topic.slug}, type=${topic.research_type}, score=${topic.total_score})`,
  );

  // Idempotency: date + slug is the unique key (spec §44).
  const researchPath = researchFilePath(ROOT_DIR, date, topic.slug);
  if (fs.existsSync(researchPath) && !opts.forceUpdate) {
    log(
      `research for ${date}/${topic.slug} already exists — aborting (use --force-update to overwrite)`,
    );
    return;
  }

  // Stage: Build Research Questions.
  const questions = await buildQuestions(llm, topic);
  log(`primary question: ${questions.primary}`);

  // Stages: Gather Sources / Extract Evidence / Build Structured Research.
  let research: ResearchData = await conductResearch(
    llm,
    topic,
    questions,
    ROOT_DIR,
    date,
  );
  const primarySources = research.sources.filter(
    (s) => s.source_type === "primary",
  ).length;
  log(`research built: ${research.sources.length} sources (${primarySources} primary)`);

  // Stage: Validate Research — critical failures stop the pipeline.
  const validation = validateResearch(research, config, ROOT_DIR);
  for (const w of validation.warnings) log(`validation warning: ${w}`);
  if (!validation.ok) {
    log(`validation FAILED:\n  - ${validation.errors.join("\n  - ")}`);
    process.exitCode = 1;
    return;
  }
  log("validation passed");

  if (opts.stage === "research" || opts.stage === "validate") {
    const file = persistResearch(ROOT_DIR, research);
    log(`research persisted: ${path.relative(ROOT_DIR, file)} (stage=${opts.stage}, stopping here)`);
    return;
  }

  // Stage: Write Report — writer only receives validated research.json.
  const narrative = await writeNarrative(llm, research, ROOT_DIR);
  const reportMd = renderReport(research, narrative);

  // Stage: Review Report — FAIL is never published.
  const review = await reviewReport(llm, reportMd, research, ROOT_DIR);
  log(`review status: ${review.status} (${review.issues.length} issues)`);
  if (review.status === "FAIL") {
    for (const issue of review.issues) {
      log(`  [${issue.severity}] ${issue.section}: ${issue.description}`);
    }
    log("review FAILED — not publishing");
    process.exitCode = 1;
    return;
  }

  // Stage: Persist Research + Report.
  const researchFile = persistResearch(ROOT_DIR, research);
  const reportFile = reportFilePath(ROOT_DIR, date, topic.slug);
  fs.mkdirSync(path.dirname(reportFile), { recursive: true });
  fs.writeFileSync(reportFile, reportMd);
  const reportRel = path.relative(ROOT_DIR, reportFile);
  log(`report written: ${reportRel}`);
  log(`research written: ${path.relative(ROOT_DIR, researchFile)}`);

  // Stage: Update Memory.
  updateMemory(memory, research, reportRel);
  saveMemory(ROOT_DIR, memory);
  log("memory updated");

  // Stage: Build RSS.
  const rss = buildRss(ROOT_DIR, config);
  log(`rss built: ${rss.itemCount} items`);

  // Stage: Commit / Publish.
  const message = commitMessageFor(topic.research_type, date, topic.slug);
  const publish = commitAndPush(ROOT_DIR, message, { dryRun: opts.dryRun });
  log(
    `publish: committed=${publish.committed} pushed=${publish.pushed}` +
      (publish.message ? ` (${publish.message})` : ""),
  );

  log(
    `SUMMARY run=${runId} topic="${topic.title}" score=${topic.total_score} ` +
      `sources=${research.sources.length}/${primarySources}p validation=PASS ` +
      `review=${review.status} report=${reportRel} rss=ok publish=${publish.committed ? "committed" : "skipped"}`,
  );
}

main().catch((err) => {
  console.error("[main] pipeline failed:", err);
  process.exitCode = 1;
});
