import fs from "node:fs";
import path from "node:path";
import type { PipelineConfig } from "./config.js";
import { validateAgainstSchema } from "./providers.js";
import type { ResearchData } from "./types.js";

export interface ValidationResult {
  ok: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Stage: Validate Research (spec §27). Any failed critical check stops the
 * pipeline before the Writer ever runs.
 */
export function validateResearch(
  research: ResearchData,
  config: PipelineConfig,
  rootDir?: string,
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (rootDir) {
    const schema = JSON.parse(
      fs.readFileSync(
        path.join(rootDir, "schemas", "research.schema.json"),
        "utf8",
      ),
    );
    const { ok, errors: schemaErrors } = validateAgainstSchema(research, schema);
    if (!ok) errors.push(...schemaErrors.map((e) => `schema: ${e}`));
  }

  if (!research.questions?.primary?.trim()) {
    errors.push("primary research question is missing");
  }

  const sources = research.sources ?? [];
  if (sources.length < config.minTotalSources) {
    errors.push(
      `only ${sources.length} sources; need >= ${config.minTotalSources}`,
    );
  }
  const primaryCount = sources.filter((s) => s.source_type === "primary").length;
  if (primaryCount < config.minPrimarySources) {
    errors.push(
      `only ${primaryCount} primary sources; need >= ${config.minPrimarySources}`,
    );
  }

  const evidenceIds = new Set(sources.map((s) => s.id));

  for (const fact of research.facts ?? []) {
    if (!fact.evidence_ids?.length) {
      errors.push(`FACT without evidence: "${fact.statement.slice(0, 60)}"`);
    } else {
      for (const id of fact.evidence_ids) {
        if (!evidenceIds.has(id)) {
          errors.push(`FACT references unknown evidence id "${id}"`);
        }
      }
    }
    if (fact.type !== "FACT") {
      errors.push(`facts[] entry has type ${fact.type}; facts/inferences must be separated`);
    }
  }
  for (const inf of research.inferences ?? []) {
    if (inf.type !== "INFERENCE") {
      errors.push(`inferences[] entry has type ${inf.type}`);
    }
  }

  for (const metric of research.metrics ?? []) {
    if (!metric.source_id || !evidenceIds.has(metric.source_id)) {
      errors.push(`metric "${metric.name}" has no valid source_id`);
    }
  }

  if (!research.bear_case?.length) errors.push("bear case is missing");
  if (!research.kill_conditions?.length) errors.push("kill conditions are missing");
  const events = research.validation_events ?? [];
  if (events.length < 3 || events.length > 5) {
    errors.push(`validation_events must contain 3-5 entries (got ${events.length})`);
  }

  // Bottleneck qualification (spec §18) — a mislabeled bottleneck is a warning
  // upgraded to an error because it corrupts downstream theses.
  for (const b of research.bottlenecks ?? []) {
    if (b.classification === "Structural Bottleneck") {
      const demandOk = b.demand_growth === "High" || b.demand_growth === "Extreme";
      const supplyOk = b.supply_elasticity === "Low";
      const substOk = b.substitutability === "Hard";
      if (!(demandOk && supplyOk && substOk)) {
        errors.push(
          `bottleneck "${b.node}" marked Structural Bottleneck but does not meet qualification (demand High/Extreme + supply Low + substitutability Hard)`,
        );
      }
    }
  }

  if (sources.some((s) => s.source_type === "discovery")) {
    warnings.push("discovery-tier sources present; ensure none solely supports a key claim");
  }

  return { ok: errors.length === 0, errors, warnings };
}
