# AGENTS.md — Rules for Agents Working in This Repository

This repository is operated by automated agents. Two distinct roles exist.

## 1. Daily Research Agent (the scheduled pipeline run)

The daily job (`daily-research.yml` → `npm run daily`) may **only write to**:

```text
reports/**
research/**
memory/**
public/**
assets/**
```

It must never modify:

```text
.github/**
src/**
prompts/**
schemas/**
config/**
package.json
tsconfig.json
```

The daily job must not modify its own pipeline. `src/publisher.ts` enforces
this at commit time and will throw if any staged file is outside the allowed
paths.

## 2. Coding / Maintenance Agents (humans or Claude working on the codebase)

### Allowed

- read the entire repository
- modify `src/`, `tests/`, `config/`, `prompts/`, `schemas/` **when explicitly
  asked**
- run `npm test`, `npm run typecheck`, and dry runs
- fix pipeline bugs

### Forbidden

- committing secrets, API keys, tokens, or `.env` files
- disabling or weakening the validator (`src/validator.ts`)
- bypassing the reviewer gate (a `FAIL` review must never publish)
- fabricating research data, sources, or evidence
- modifying GitHub workflows during a daily run
- adding any personalization (user-specific business, career, or investment
  advice) to reports or prompts

## Conventions

- Commit messages: `research: add YYYY-MM-DD <slug>`, `research: update <slug>`,
  `fix(research): correct <slug>` for corrections, `chore:`/`feat:`/`fix:` for
  pipeline work via maintenance.
- Idempotency key is `date + slug`. Never create two reports for the same key;
  use `FORCE_UPDATE=true` / `--force-update` to intentionally overwrite.
- Published report URLs (`/reports/<slug>`) are permanent.
- Bilingual reports: each `reports/**/<date>-<slug>.md` (English) has a sibling
  `<date>-<slug>.zh.md` — a faithful Traditional Chinese translation with the
  same front matter keys (only `title` and `primary_question` translated) and
  identical numbers, links, evidence ids, and section order. The site serves
  it under `/zh/`.
- Chart data: numeric series worth charting go in
  `assets/<date>-<slug>/charts.json` as
  `[{"title", "title_zh", "type": "bar"|"line", "unit", "source_id", "series": [{"label", "value"}]}]`.
  Every chart must trace to an evidence id via `source_id`. Never chart
  fabricated or interpolated values (a range may be charted at its midpoint if
  the label says so).
