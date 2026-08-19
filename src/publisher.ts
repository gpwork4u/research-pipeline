import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

/** Paths the daily agent is allowed to modify (spec §41). */
export const ALLOWED_PATHS = ["reports", "research", "memory", "public"];

function git(rootDir: string, args: string[]): string {
  return execFileSync("git", args, { cwd: rootDir, encoding: "utf8" }).trim();
}

export interface PublishResult {
  committed: boolean;
  pushed: boolean;
  message?: string;
}

export function commitAndPush(
  rootDir: string,
  commitMessage: string,
  options: { dryRun: boolean; push?: boolean },
): PublishResult {
  if (options.dryRun) {
    console.log("[publish] DRY_RUN — skipping git commit/push");
    return { committed: false, pushed: false, message: "dry run" };
  }
  if (!fs.existsSync(path.join(rootDir, ".git"))) {
    console.log("[publish] not a git repository — skipping commit");
    return { committed: false, pushed: false, message: "no git repo" };
  }

  // Only stage the paths the daily agent may touch.
  for (const p of ALLOWED_PATHS) {
    if (fs.existsSync(path.join(rootDir, p))) {
      git(rootDir, ["add", p]);
    }
  }

  const staged = git(rootDir, ["diff", "--cached", "--name-only"]);
  if (!staged) {
    console.log("[publish] nothing to commit");
    return { committed: false, pushed: false, message: "nothing to commit" };
  }
  const offending = staged
    .split("\n")
    .filter((f) => !ALLOWED_PATHS.some((p) => f.startsWith(`${p}/`)));
  if (offending.length) {
    throw new Error(
      `refusing to commit files outside allowed paths: ${offending.join(", ")}`,
    );
  }

  git(rootDir, ["commit", "-m", commitMessage]);
  let pushed = false;
  if (options.push !== false) {
    try {
      git(rootDir, ["push"]);
      pushed = true;
    } catch (err) {
      console.warn("[publish] push failed:", (err as Error).message);
    }
  }
  return { committed: true, pushed };
}

export function commitMessageFor(
  researchType: string,
  date: string,
  slug: string,
): string {
  // Spec §43 commit format.
  if (researchType === "UPDATE" || researchType === "FOLLOW_UP") {
    return `research: update ${slug}`;
  }
  return `research: add ${date} ${slug}`;
}
