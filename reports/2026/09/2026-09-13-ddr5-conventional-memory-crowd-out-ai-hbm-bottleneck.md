---
title: "The DDR5 Crowd-Out: Is AI's HBM Grab Making Conventional Memory the AI Buildout's Next Structural Bottleneck?"
date: "2026-09-13"
slug: "ddr5-conventional-memory-crowd-out-ai-hbm-bottleneck"
research_type: NEW
topics: ["ai-infrastructure", "semiconductors", "memory", "regulation"]
companies: ["Samsung Electronics", "SK Hynix", "Micron Technology", "Lenovo"]
verdict: "VALIDATE"
confidence: "medium"
primary_question: "Has Samsung's, SK Hynix's and Micron's allocation of shared DRAM wafer capacity toward AI-linked HBM production made conventional DDR4/DDR5 memory itself a Structural Bottleneck on the broader AI-and-PC compute buildout -- and does the pending antitrust lawsuit alleging coordinated restriction undermine the case that this is a purely structural, rather than artificial, scarcity?"
---

# 一句話結論

AI's HBM capacity grab has pushed DDR5 prices up 485% and driven Micron out of consumer memory, but a pending antitrust suit alleges the scarcity is coordinated, not purely structural.

# Executive Summary

Samsung, SK Hynix and Micron have redirected shared DRAM capacity toward high-margin HBM, and conventional DDR4/DDR5 prices have spiked as much as 485% YoY by September 2026, with no relief expected before late 2027. Micron exited consumer memory entirely in early 2026, citing AI demand. Memory now costs 40-50% of a standard server's bill of materials, adding an estimated $100 billion a year to hyperscaler capex, while PC makers like Lenovo absorb "unprecedented" inflation despite large stockpiles. Conventional DRAM plausibly meets the strict Structural Bottleneck test: high demand, low elasticity, hard substitutability. But a June 25, 2026 antitrust suit alleges the three producers coordinated the HBM shift to deliberately restrict conventional output -- a claim that, if proven, reframes this as artificial rather than structural scarcity.

# Research Question / Why Now

**Primary question:** see front matter above.

**Sub-questions:** How much DRAM capacity is split between HBM and conventional DDR4/DDR5? Does the crowd-out raise AI data-center costs directly, or mainly hit PCs/consumer servers? What does the antitrust complaint allege, and how strong is its evidence? How much new capacity could relieve conventional DRAM specifically, and when? Can OEMs substitute around the shortage?

**Why now:** DDR5 retail prices hit fresh records through early September 2026 with no reversal, extending a crunch that already forced Micron to exit consumer memory (Dec. 2025) and prompted SK Hynix's CEO to warn -- on the day of its $26.5 billion Nasdaq debut -- that 2027 will be the industry's worst supply year, with demand outstripping supply beyond 2030. A June 25, 2026 antitrust complaint now alleges this is coordinated restriction, not pure scarcity -- a genuinely new angle distinct from this pipeline's August 22, 2026 HBM-supercycle report (HBM supply itself) and September 3, 2026 storage report (NAND/HDD).

**Thesis:** Conventional DRAM plausibly meets the strict bottleneck test given AI-driven capacity crowd-out, but an unresolved antitrust case and active capacity investment leave open whether this is genuine structural scarcity or partly a deliberate allocation choice.

# Known Facts

- DDR5 retail (Sept. 7-11, 2026): 32GB kits $425-$560; cheapest DDR5-6000 32GB kit $489.99 (Sept. 7); a comparable kit up 485% YoY; no relief expected before late 2027. _(evidence: ev-1)_
- August 2026's record DDR5/DDR4 prices carried into September with no reversal; AI infrastructure and PCs bid for the same wafer capacity as HBM. _(evidence: ev-2)_
- Micron exited its consumer Crucial business (announced Dec. 3, 2025; ended ~Feb. 2026), citing AI-driven data-center demand and redirecting supply to strategic customers. _(evidence: ev-3)_
- Samsung Q2 2026: record profit on AI DRAM/NAND demand; HBM4 sales guided to triple in Q3, >60% of H2 HBM revenue; 60-70% of DRAM capacity going to long-term contracts; says it keeps a "balanced mix." _(evidence: ev-4)_
- SK Hynix's 2026 SEC filings: DRAM wafer capacity to nearly double, ~550K to ~1M wafers/month by 2030-2031; new Yongin/M15X capacity earmarked mainly for HBM. _(evidence: ev-5)_
- SK Hynix CEO Kwak Noh-jung (July 2026, on Nasdaq debut day): 2027 will be "the worst year in the industry's history"; demand exceeds supply "even beyond 2030." _(evidence: ev-6)_
- TrendForce (Jul. 9, 2026): server DRAM contract prices to rise 13-18% QoQ in Q3 2026; LTAs shield contracted hyperscalers, shifting increases to non-LTA buyers. _(evidence: ev-7)_
- June 25, 2026: class action (Garciaguirre v. Samsung Electronics, N.D. Cal.) alleges Samsung/SK Hynix/Micron coordinated the HBM shift to cut DDR3/DDR4 output, citing a ~700% price rise over 4 years; Micron denies wrongdoing. _(evidence: ev-8)_
- Memory is 40-50% of a standard server's bill of materials (up from ~30-35%); ~25% of a high-end AI server rack's cost; adds ~$100B/year to hyperscaler capex. _(evidence: ev-9)_
- Lenovo CFO called 2026 memory inflation "unprecedented" (inventories ~50% above normal); still raised PC/server prices from ~Jan/March 2026; says the trajectory "has just begun." _(evidence: ev-10)_
- Samsung and SK Hynix disclosed a combined ~$870B capacity-expansion plan; SK Hynix added $15B more in March 2026. _(evidence: ev-11)_

# Reasonable Inferences

- Because record HBM profits coincide with record conventional-DRAM prices, the shortage partly reflects a deliberate allocation choice toward higher-margin HBM, not just a total-capacity constraint -- the core claim in the antitrust complaint. _(evidence: ev-4, ev-5, ev-8)_
- Because SK Hynix's new capacity targets mainly HBM and total-capacity doubling isn't due until 2030-2031, near-term elasticity for conventional DRAM stays Low even as industry capacity grows. _(evidence: ev-5)_
- Because this shortage redirects capacity away from PCs/general servers -- markets outside the AI buildout -- it is a collateral effect distinct from AI-specific bottlenecks already covered, even though AI-server host memory shares the price spike. _(evidence: ev-3, ev-9)_
- Because LTAs shield large contracted hyperscalers from the steepest increases, the cost burden falls disproportionately on non-LTA buyers like Lenovo, despite its large stockpile. _(evidence: ev-7, ev-10)_
- Because Samsung and SK Hynix are investing roughly $870-885B combined while still directing near-term capacity mainly to HBM, supply is responding in aggregate dollars but not yet confirmed to relieve the conventional-DRAM squeeze. _(evidence: ev-5, ev-11)_

# Unknowns

- No source discloses the exact HBM-vs-conventional-DRAM wafer-capacity split at Samsung, SK Hynix or Micron.
- The antitrust case (filed June 25, 2026) remains early-stage; no ruling, discovery outcome or settlement was reported as of the research date.
- Whether AI host-system DRAM demand (versus normal PC/server refresh plus stockpiling) materially drives the crowd-out was not quantified.
- Conflicting price-increase figures across sources (485% YoY vs. ~300% single-quarter vs. Jefferies' further 40-50%/30-40% Q3/Q4 forecast) were not reconciled to one consistent baseline.
- All primary-source domains attempted were blocked by the research environment's egress proxy; facts rely on convergent search-result snippets rather than direct retrieval.

# Core Mechanism

Samsung, SK Hynix and Micron produce both HBM and conventional DDR4/DDR5 from largely shared wafer capacity. As AI demand made HBM the higher-margin, capacity-constrained line, all three redirected a growing share of capacity toward it -- Samsung tripling Q3 2026 HBM4 sales, SK Hynix earmarking new Yongin/M15X capacity mainly for advanced products, Micron exiting consumer memory outright. Every wafer redirected to HBM cannot produce DDR5, and with total capacity expansion not due until 2030-2031, the near-term squeeze has pushed prices up sharply, hitting PC makers and non-contracted buyers hardest since LTAs shield large hyperscalers.

This plausibly satisfies the strict bottleneck test: demand High, elasticity Low near-term, substitutability Hard since no viable system-memory replacement exists. But the mechanism is contested: the June 25, 2026 complaint argues the "HBM shift" is itself the alleged anticompetitive conduct -- deliberate coordination, not an unavoidable limit. Samsung and SK Hynix's roughly $870 billion in disclosed expansion shows supply responding to price, but not yet confirmed to target conventional DRAM specifically.

# Industry Chain

Four nodes connect DRAM wafer capacity to the AI buildout and the broader PC/server market.

| Node | Role | Major players | Pricing power | Supply elasticity | Substitutability |
| --- | --- | --- | --- | --- | --- |
| Conventional DRAM (DDR4/DDR5) production | Components | Samsung, SK Hynix, Micron | High | Low | Hard |
| HBM production (comparison layer) | Components | Samsung, SK Hynix, Micron | High | Low | Hard |
| PC and general-server OEMs | Platform | Lenovo, Dell, HP | Low | Medium | Medium |
| Hyperscalers / AI data centers (host-memory exposure) | Customer | Amazon, Microsoft, Google, Meta | Low | Low | Hard |

# Bottleneck Analysis

The strict test is applied to the conventional-DRAM node specifically, with two comparison layers.

| Node | Demand | Supply elasticity | Substitutability | Pricing power | Opportunity | Classification |
| --- | --- | --- | --- | --- | --- | --- |
| Conventional DRAM for PCs/general servers | High | Low | Hard | High | 4 | Structural Bottleneck |
| HBM production (comparison) | Extreme | -- | -- | High | -- | Neutral |
| PC/server OEM cost pass-through | Medium | Medium | Medium | Low | 2 | Neutral |

- Conventional DRAM meets the strict test: high demand (secular growth plus AI-host-memory add-on plus stockpiling), low near-term elasticity given capacity earmarked for HBM, and hard substitutability.
- The pending antitrust case is the key caveat: if capacity restriction is proven coordinated rather than structural, this classification would need to be reframed as artificial scarcity.
- OEMs fail the strict test: they can partially substitute via configuration changes, giving Medium substitutability even as the upstream shortage stays Hard.

# Key Metrics

| Metric | Value | Unit | Period | Source |
| --- | --- | --- | --- | --- |
| 32GB DDR5 kit retail price range | 425-560 | USD | Sept 2026 | ev-1 |
| Cheapest 32GB DDR5-6000 kit | 489.99 | USD | 2026-09-07 | ev-1 |
| Cumulative DRAM price rise (lawsuit) | ~700 | percent/4yr | 2022-2026 | ev-8 |
| Server DRAM contract price forecast | 13-18 | percent QoQ | Q3 2026 | ev-7 |
| Memory share of server BOM | 40-50 | percent | 2026 | ev-9 |
| Added hyperscaler capex from memory | ~100 | USD billion/yr | 2026 | ev-9 |
| SK Hynix targeted DRAM capacity | ~1,000,000 | wafers/month | by 2030-31 | ev-5 |
| SK Hynix Nasdaq ADR size | 26.5 | USD billion | 2026-07 | ev-6 |

# Competition

| Name | Kind | Note |
| --- | --- | --- |
| CXMT | indirect alternative | China domestic maker; HBM3E ramp small-scale, non-China substitution unconfirmed. |
| DDR4 (legacy) memory | indirect alternative | Some buyers shift to DDR4, but legacy prices have risen in parallel. |

# Financial / Valuation

_Valuation not performed: this report spans four companies (Samsung, SK Hynix, Micron, Lenovo) sharing a memory-allocation thesis; a share-count/valuation analysis was not central to the bottleneck-classification question and was not confirmed as necessary from credible sources gathered._

# Catalysts

- Garciaguirre v. Samsung Electronics: ruling on motion to dismiss or discovery disclosures
- Samsung's and SK Hynix's Q3 2026 earnings calls: HBM vs. conventional DRAM capacity split
- Micron's fiscal Q4 2026 earnings call (late September 2026)
- TrendForce's Q4 2026 DRAM/DDR5 contract price forecast (~October 2026)
- Further OEM (Dell, HP) price actions mirroring Lenovo's pattern

# Strongest Bear Case

- **Regulation**: A pending Sherman Act class action alleges coordinated restriction of conventional DRAM output -- if proven, this reframes the shortage as anticompetitive conduct, not structural scarcity.
- **Supply**: Samsung and SK Hynix's combined ~$870B capacity expansion shows supply responding to price, potentially easing the crowd-out from 2027.
- **Demand**: LTAs shield most large hyperscalers from the steepest increases, concentrating the crowd-out's worst effects outside the AI data-center buildout itself.
- **Execution**: No source confirms the exact HBM-vs-conventional wafer split, leaving the deliberate-crowd-out magnitude unverified.

# Kill Conditions

| Condition | Metric | Threshold | Window | Impact |
| --- | --- | --- | --- | --- |
| Court finds coordinated restriction | Case ruling/discovery | Confirmed coordination finding | 12-18 months | invalidate |
| New non-HBM capacity normalizes prices | DDR5/DDR4 contract index | <5% QoQ for 2+ quarters | 4-6 quarters | weaken |
| Producers raise conventional-DRAM capacity share | Disclosed allocation % | Any disclosed increase | 2-4 quarters | weaken |
| HBM demand growth decelerates materially | HBM revenue growth | Low double digits or below QoQ | 2-3 quarters | invalidate |

# 30–90 Day Validation

| Event | Window | Supports if | Weakens if | Monitor |
| --- | --- | --- | --- | --- |
| Garciaguirre v. Samsung ruling/discovery | Next 2-3 quarters | Coordination evidence found | Dismissed/settled, no findings | N.D. Cal. docket, Reuters |
| Samsung/SK Hynix Q3 2026 earnings | ~Late Oct. 2026 | HBM priority reiterated | Shift back to conventional DRAM | Samsung/SK Hynix IR |
| Micron fiscal Q4 2026 earnings | Late Sept. 2026 | Pivot reiterated | Crucial-exit reversed | Micron IR |
| TrendForce Q4 2026 DRAM forecast | ~Oct. 2026 | Price trajectory continues | Growth decelerates to single digits | TrendForce |
| Dell/HP price actions | Next 1-2 quarters | More OEMs hike prices | Costs stabilize | OEM IR, trade press |

# Final Assessment

**Verdict: VALIDATE** (confidence: medium)

Conventional DRAM plausibly meets the strict Structural Bottleneck test as AI's HBM allocation crowds out DDR4/DDR5 supply, driving record prices, Micron's consumer exit, and rising server costs. But a live antitrust case alleging coordinated restriction, combined with roughly $870 billion in disclosed capacity investment and no confirmed HBM-vs-conventional wafer split, means the "purely structural" framing is not yet settled -- this is worth continued monitoring, not a closed case.

# Sources

_Note: [primary] labels the source's own nature (investor relations releases, SEC filings), not that this session directly fetched the page -- every URL below was blocked by the research environment's egress proxy, so citations rely on convergent secondary reprints/search-result snippets rather than direct verification (see Unknowns)._

- `ev-1` [secondary] [Tom's Hardware: "RAM price tracking 2026 -- lowest price on DDR5 and DDR4 memory of all capacities"](https://www.tomshardware.com/pc-components/ram/ram-price-index-2026-lowest-price-on-ddr5-and-ddr4-memory-of-all-capacities) (2026-09)
- `ev-2` [secondary] [OC3D: "It's getting worse -- DDR5 memory prices continue to increase in 2026"](https://overclock3d.net/news/memory/its-getting-worse-ddr5-memory-prices-continue-to-increase-in-2026/) (2026-09)
- `ev-3` [primary] [Micron Technology, Inc.: "Micron Announces Exit from Crucial Consumer Business"](https://investors.micron.com/news-releases/news-release-details/micron-announces-exit-crucial-consumer-business) (2025-12-03)
- `ev-4` [primary] [Samsung Global Newsroom: "Samsung Electronics Announces Second Quarter 2026 Results"](https://news.samsung.com/global/samsung-electronics-announces-second-quarter-2026-results) (2026-07-30)
- `ev-5` [primary] [SK hynix Inc., Form F-1, FY2026 (SEC EDGAR)](https://www.sec.gov/Archives/edgar/data/0002120882/000119312526280172/d32785df1.htm) (2026)
- `ev-6` [secondary] [U.S. News (Reuters): "SK Hynix CEO Sees Worst-Ever Memory Supply Shortage in 2027, Says Demand to Outstrip Supply Beyond 2030"](https://money.usnews.com/investing/news/articles/2026-07-10/sk-hynix-ceo-sees-worst-ever-memory-supply-shortage-in-2027-says-demand-to-outstrip-supply-beyond-2030) (2026-07-10)
- `ev-7` [secondary] [TrendForce: "Long-Term Agreements Cap Price Increases; Server DRAM Contract Prices Expected to Rise 13-18% QoQ in 3Q26"](https://www.trendforce.com/presscenter/news/20260709-13140.html) (2026-07-09)
- `ev-8` [secondary] [Tom's Hardware: "Samsung, SK hynix, and Micron sued over alleged DRAM price fixing amid record memory costs"](https://www.tomshardware.com/tech-industry/samsung-sk-hynix-and-micron-sued-over-alleged-dram-price-fixing-amid-record-memory-costs) (2026-06)
- `ev-9` [secondary] [Network World: "Server memory prices could double by 2026 as AI demand strains supply"](https://www.networkworld.com/article/4093752/server-memory-prices-could-double-by-2026-as-ai-demand-strains-supply.html) (2026)
- `ev-10` [secondary] [PCWorld: "Lenovo stockpiled enough RAM for 2026. It's still raising PC prices"](https://www.pcworld.com/article/3060746/lenovo-stockpiled-enough-ram-for-2026-its-still-raising-pc-prices.html) (2026)
- `ev-11` [secondary] [TechPowerUp: "Samsung and SK hynix to Expand Semiconductor Capacity with $870 Billion Plan"](https://www.techpowerup.com/350478/samsung-and-sk-hynix-to-expand-semiconductor-capacity-with-usd-870-billion-plan) (2026)
