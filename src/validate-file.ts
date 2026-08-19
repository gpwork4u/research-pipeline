import fs from "node:fs";
import { loadConfig, ROOT_DIR } from "./config.js";
import { validateResearch } from "./validator.js";
import type { ResearchData } from "./types.js";

// CLI: npm run validate:file -- <path-to-research.json>
const file = process.argv[2];
if (!file) {
  console.error("usage: npm run validate:file -- <research.json>");
  process.exit(2);
}
const research = JSON.parse(fs.readFileSync(file, "utf8")) as ResearchData;
const result = validateResearch(research, loadConfig(), ROOT_DIR);
console.log(JSON.stringify(result, null, 2));
process.exit(result.ok ? 0 : 1);
