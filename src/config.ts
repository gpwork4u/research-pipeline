import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT_DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);

export interface PipelineConfig {
  timezone: string;
  publicationHour: number;
  minTopicScore: number;
  recentTopicWindowDays: number;
  minPrimarySources: number;
  minTotalSources: number;
  feedItemLimit: number;
  siteTitle: string;
  siteUrl: string;
  siteDescription: string;
  siteTitleZh?: string;
  siteDescriptionZh?: string;
}

export interface CliOptions {
  dryRun: boolean;
  forceUpdate: boolean;
  topic?: string;
  date?: string;
  stage?: string;
}

export function loadConfig(rootDir: string = ROOT_DIR): PipelineConfig {
  const raw = fs.readFileSync(
    path.join(rootDir, "config", "default.json"),
    "utf8",
  );
  return JSON.parse(raw) as PipelineConfig;
}

export function parseCli(argv: string[]): CliOptions {
  const opts: CliOptions = {
    dryRun: process.env.DRY_RUN === "true",
    forceUpdate: process.env.FORCE_UPDATE === "true",
  };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    switch (arg) {
      case "--dry-run":
        opts.dryRun = true;
        break;
      case "--force-update":
        opts.forceUpdate = true;
        break;
      case "--topic":
        opts.topic = argv[++i];
        break;
      case "--date":
        opts.date = argv[++i];
        break;
      case "--stage":
        opts.stage = argv[++i];
        break;
      default:
        break;
    }
  }
  return opts;
}

/** Today's date (YYYY-MM-DD) in the configured timezone. */
export function todayInTimezone(timezone: string, now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}
