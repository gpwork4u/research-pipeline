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
- Reading budget (hard rule): every published report must read in **under 10
  minutes** — verify with `npm run lint:report -- <report.md> <report.zh.md>`
  (warn > 9 min, fail > 10 min; sources excluded). English budgets are in
  `prompts/writer-agent.md`. 中文版各節字數上限（正文 CJK 字元）：一句話結論
  40；執行摘要 220（至多 4 條 bullet）；研究問題 200（主問題＋時機＋論點）；
  已知事實 200；推論 160；未知 130；核心機制 300；財務 200；催化劑 150；
  反方論點 200；總體評估 220；每張表引言 ≤ 40 字；表格資料列上限同英文版
  （8/6/8/6/5/6，合計 ≤ 39 列）。全文正文合計 ≤ 2,000 字。子問題與資料來源
  屬附錄，不計入。格式規則：每段 ≤ 2 句；每節第一句為粗體重點句；3 個以上
  可比事實一律入表；表格儲存格 ≤ 12 字、≤ 6 欄；表中已有的數字不在正文複述。
- 漸進式揭露（hard rule）：一句話結論與執行摘要寫給**不懂這個產業的人**——
  專有名詞首次出現必須就地用 ≤ 12 字解釋，數字至多兩個，先講因果再講證據；
  細節、完整術語與具體數字留到核心機制之後的章節。規則全文見
  `prompts/writer-agent.md` 的 Progressive Disclosure 段落。
- 長度上限由 `npm run lint:report` 強制執行（每節字數 ＋ 總閱讀時間），daily
  workflow 在 commit 前呼叫；任一項超標即 fail，不發布。
- Chart data: numeric series worth charting go in
  `assets/<date>-<slug>/charts.json` as
  `[{"title", "title_zh", "type": "bar"|"line", "unit", "source_id", "series": [{"label", "value"}]}]`.
  Every chart must trace to an evidence id via `source_id`. Never chart
  fabricated or interpolated values (a range may be charted at its midpoint if
  the label says so).
