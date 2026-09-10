---
title: "The Mature-Node Squeeze: Are 8-Inch Analog and Power-IC Fabs the AI Buildout's Overlooked Structural Bottleneck?"
date: "2026-09-10"
slug: "mature-node-power-ic-fab-capacity-ai-bottleneck"
research_type: NEW
topics: ["ai-infrastructure", "semiconductors", "advanced-manufacturing", "analog-ics"]
companies: ["Texas Instruments", "onsemi", "GlobalFoundries", "Vanguard International Semiconductor"]
verdict: "VALIDATE"
confidence: "medium"
primary_question: "Is 8-inch/mature-node foundry capacity for power-management ICs and analog chips -- the components that regulate power delivery and signal conversion around every AI accelerator, rather than the accelerator chip itself -- becoming a genuine Structural Bottleneck on the AI buildout, distinct from and largely unseen relative to the advanced-node, packaging, and memory constraints this pipeline has previously covered?"
---

# 一句話結論

8-inch mature-node fabs making the power-management chips around every AI accelerator are quietly as tight as HBM or CoWoS, but draw far less attention.

# Executive Summary

Global 8-inch foundry utilization has climbed toward 90% in 2026 as TSMC and Samsung cut legacy capacity to redeploy toward advanced nodes, even as AI-server demand for power-management ICs accelerates. Texas Instruments, onsemi and GlobalFoundries each reported 60-100%+ year-over-year growth in AI/data-center-linked revenue in Q2 2026, far outpacing their 6-23% overall growth. Vanguard International Semiconductor's new Singapore fab sold out its entire first production phase before mass production even begins, and its chairman warned 2027 wafer prices will rise more than 2026's. Power ICs cannot easily migrate to advanced nodes, meeting this pipeline's strict bottleneck test. The main uncertainty is whether Chinese mature-node expansion (~70% of new investment) or a cyclical demand cooldown could ease the squeeze faster than incumbents' capacity can.

# Research Question / Why Now

**Primary question:** see front matter above.

**Sub-questions:** How tight is 2026 mature-node utilization, and is capacity shrinking? Which companies show clearest evidence of demand outstripping supply? Why can't power ICs move to advanced nodes? How much new capacity arrives by 2027-2028, and who builds it? What would end the constraint?

**Why now:** Digitimes reported on September 9, 2026 that the mature-node chip scramble may persist through 2028, following a string of 2026 disclosures: TrendForce's May and June mature-node price-hike reports, and Q2 2026 earnings (July-August) from Texas Instruments, onsemi, GlobalFoundries and Vanguard all citing AI-driven power-IC and analog demand outstripping 8-inch and legacy 12-inch capacity. No prior report in this pipeline examined this layer.

**Thesis:** Mature-node/analog-IC capacity meets the strict Structural Bottleneck test but receives far less market attention than packaging, HBM or lithography.

# Known Facts

- Top-10 foundry 8-inch utilization rose to ~88% in 2026, projected ~90% in 2H26, up from 75-80% in 2025; TSMC and Samsung have been cutting 8-inch capacity since 2H2025. _(evidence: ev-16)_
- TrendForce: Jan. 2026 price hikes of 5-20%; May 7 report ties further hikes to capacity cuts plus AI power-IC demand; June 30 report (EE Times Asia) forecasts a third round of hikes into 2027. _(evidence: ev-2, ev-1, ev-3)_
- Digitimes (Sept. 9, 2026): mature-node scramble may persist through 2028, with supply-chain management becoming customer bargaining leverage. _(evidence: ev-4)_
- Digitimes (Mar. 18, 2026): China's Nexchip, Silan and Hua Hong are accelerating 12-inch/28nm-class capacity; Chinese foundries account for ~70% of new mature-node investment. _(evidence: ev-5, ev-16)_
- TI Q2 2026: revenue $5.46B (+23% YoY), analog $4.37B (+26% YoY); data-center revenue roughly doubled YoY as AI racks shift to 800V DC power, raising analog content per system. _(evidence: ev-6, ev-6b)_
- TI Q1 2026: CEO Haviv Ilan reported data-center revenue +90% YoY, exceeding $1B annualized; TI extended lead times and raised prices from April 2026. _(evidence: ev-7, ev-15)_
- onsemi Q2 2026: revenue $1,604M (+9% YoY), gross margin 38.4%, FCF $425.4M (~4x YoY); launched GaNEXUS GaN power portfolio; guided AI data-center revenue to more than double in 2026. _(evidence: ev-8, ev-9)_
- GlobalFoundries Q2 2026 (call Aug. 5): revenue $1.786B (+6% YoY); comms infrastructure/data-center segment +60%+ YoY on silicon-photonics/SiGe demand; FY26 guidance for that segment raised to 50-60% YoY. _(evidence: ev-10)_
- Vanguard: Singapore 12-inch fab's first phase (44,000 wafers) fully sold out before production starts; Chairman Fang Leuh warned 2027 wafer prices will exceed 2026's; Q3 2026 shipments guided +11-13% QoQ. _(evidence: ev-12, ev-11, ev-13)_
- SEMI: global 300mm fab equipment spending +18% to $133B (2026), +14% to $151B (2027); most new fab capacity not in volume production until 2028-2030. _(evidence: ev-14)_

# Reasonable Inferences

- Rising 8-inch utilization plus active TSMC/Samsung capacity cuts and Vanguard's pre-sold-out fab together indicate Low supply elasticity: incumbents are withdrawing capacity even as AI-linked demand accelerates. _(evidence: ev-16, ev-12, ev-13)_
- Power ICs require specialty BCD processes for voltage/current handling -- reinforced by the shift to 800V DC racks -- so they cannot simply move to advanced nodes, meeting Hard substitutability for this specific node. _(evidence: ev-6, ev-6b)_
- TI, onsemi and GlobalFoundries each show data-center-linked growth of 60-100%+ against 6-23% overall growth, consistent with Extreme demand growth for this segment specifically. _(evidence: ev-6, ev-8, ev-10)_
- Because ~70% of new mature-node capacity investment is Chinese, the capacity response may not reach non-China AI supply chains, potentially prolonging the constraint there even as aggregate global capacity grows. _(evidence: ev-5, ev-16)_
- Given SEMI's 2028-2030 volume-production timeline and Vanguard's own 2027 start date, meaningful relief is unlikely before 2027-2028. _(evidence: ev-14, ev-11)_

# Unknowns

- No source quantified how much AI server or rack production is currently delayed, if any, by mature-node/analog constraints.
- No confirmed disclosure of an AI server OEM delay explicitly attributed to power-IC shortages.
- The timeline for Chinese mature-node capacity to qualify with non-China AI supply chains is unconfirmed.
- Whether equipment makers are meaningfully expanding new/refurbished 200mm-class tool output in 2026 was not confirmed with adequately dated sources.
- All primary-source domains attempted (sec.gov, semi.org, vis.com.tw, investor.onsemi.com, trendforce.com, digitimes.com, eetasia.com) were blocked by the research environment's egress proxy; facts rely on convergent search-result snippets rather than direct retrieval.

# Core Mechanism

AI servers need far more than the accelerator chip itself: power-management ICs and power discretes regulate the electricity feeding every GPU, and as racks shift toward higher-voltage architectures like 800V DC, the analog content per system rises. Those chips are built almost entirely on mature, specialty processes (8-inch/200mm-class and legacy 12-inch), not the leading-edge nodes reserved for logic and memory -- because voltage and current handling favor different transistor physics than density-optimized advanced nodes.

Just as this demand accelerates, the leading foundries (TSMC, Samsung) are cutting 8-inch capacity to redeploy fab space toward higher-margin advanced-node and packaging work, shrinking supply from the incumbent side. Independent foundries serving this layer (Vanguard, GlobalFoundries, UMC, PSMC) are absorbing the demand instead, and Vanguard's newest fab selling out before it even starts production is the clearest evidence the squeeze is real. New capacity is coming, but overwhelmingly from Chinese entrants and mostly not before 2027-2028, leaving a multi-year gap during which non-China AI supply chains face a genuine, if underappreciated, constraint.

# Industry Chain

Five nodes connect mature-node fabrication through analog design to the AI servers driving demand.

| Node | Role | Major players | Pricing power | Supply elasticity | Substitutability |
| --- | --- | --- | --- | --- | --- |
| Mature-node (8-inch/200mm) analog & power-IC fabrication | Upstream | GlobalFoundries, UMC, PSMC, Vanguard, SMIC, Hua Hong | High | Low | Hard |
| Analog & power semiconductor design/production | Components | Texas Instruments, onsemi, STMicroelectronics | High | Medium | Medium |
| 12-inch mature-node (28-55nm) networking & analog SoC capacity | Infrastructure | Nexchip, Silan, Hua Hong, UMC | Medium | Medium | Medium |
| AI server power-delivery & networking infrastructure | Infrastructure | Nvidia, Dell, Supermicro, hyperscalers | High | Low | Hard |
| Advanced-node logic, HBM & CoWoS (comparison layer) | Platform | TSMC, Nvidia, SK Hynix, Samsung | High | Low | Hard |

# Bottleneck Analysis

The strict test is applied to the 8-inch power-IC layer, the 12-inch mature-node layer, and the advanced-node comparison layer.

| Node | Demand | Supply elasticity | Substitutability | Pricing power | Opportunity | Classification |
| --- | --- | --- | --- | --- | --- | --- |
| Mature-node (8-inch) power-IC/discrete capacity | Extreme | Low | Hard | High | 4 | Structural Bottleneck |
| 12-inch mature-node (28-55nm) networking/analog SoC capacity | High | Medium | Medium | Medium | 3 | Growth Area |
| Advanced-node logic, HBM & CoWoS (comparison) | Extreme | -- | -- | High | -- | Neutral |

- The 8-inch power-IC layer meets all three strict criteria: incumbents are cutting capacity even as demand from TI, onsemi and GlobalFoundries accelerates, and substitution to advanced nodes is not viable for voltage-handling ICs.
- The 12-inch layer is only a Growth Area: multiple independently-capitalized entrants, especially Chinese state-backed foundries, can each add capacity, and networking/analog SoCs have more process-node flexibility than power ICs.
- The advanced-node/HBM/CoWoS layer is included only for contrast: it already carries classifications from prior reports and absorbs most market attention despite the mature-node layer being comparably tight.

# Key Metrics

| Metric | Value | Unit | Period | Source |
| --- | --- | --- | --- | --- |
| Top-10 foundry 8-inch utilization | 88 to 90 | percent | 2026 | ev-16 |
| Chinese share of new 12-inch mature-node investment | ~70 | percent | 2026 | ev-16 |
| TI data-center revenue growth | ~100 | percent YoY | Q2 2026 | ev-6 |
| onsemi AI data-center revenue guidance | >2x | growth multiple | FY2026 | ev-8 |
| GlobalFoundries comms/data-center segment growth | >60 | percent YoY | Q2 2026 | ev-10 |
| Vanguard Singapore fab first-phase sold out | 44,000 | wafers | pre-2027 start | ev-12 |
| Global 300mm fab equipment spending | 133 | USD billion | 2026 | ev-14 |
| Global 300mm fab equipment spending | 151 | USD billion | 2027 | ev-14 |

# Competition

| Name | Kind | Note |
| --- | --- | --- |
| Nexchip / Silan / Hua Hong | indirect alternative | ~70% of new 12-inch mature-node investment; mainly serves China-domestic customers. |
| STMicroelectronics | direct competitor | Also raising prices amid tight mature-node capacity alongside TI and onsemi. |

# Financial / Valuation

_Valuation not performed: this report spans four companies (Texas Instruments, onsemi, GlobalFoundries, Vanguard) with different business models; a share-count/valuation analysis was not central to the bottleneck thesis and was not confirmed as necessary from credible sources gathered._

# Catalysts

- Texas Instruments' Q3 2026 earnings call (~October 2026)
- onsemi's Q3 2026 earnings call: progress toward doubling AI data-center revenue
- GlobalFoundries' Q3 2026 earnings call: comms infrastructure/data-center growth vs. 50-60% guidance
- Vanguard's Q3 2026 earnings call and Singapore fab progress
- TrendForce's next mature-node/8-inch utilization and pricing update

# Strongest Bear Case

- **Supply**: Chinese mature-node capacity (~70% of new investment) could scale faster and become accessible to non-China supply chains sooner than assessed.
- **Technology**: Equipment makers have re-entered legacy-tool markets in past shortage cycles; a similar 2026 response could not be confirmed with current, dated sources.
- **Demand**: Mature-node shortages proved cyclical in 2021-2022; a hyperscaler capex slowdown could normalize demand quickly given these firms' broad non-AI exposure.
- **Execution**: The clearest "sold out" evidence (Vanguard) rests on one company's pre-production disclosure, not realized shipment data.

# Kill Conditions

| Condition | Metric | Threshold | Window | Impact |
| --- | --- | --- | --- | --- |
| 8-inch utilization falls materially | Top-10 foundry 8-inch utilization | Below 80% for 2 quarters | 3-4 quarters | invalidate |
| AI/data-center revenue growth decelerates sharply | QoQ growth at TI/onsemi/GF | Below 20% YoY for 2 quarters | 2-3 quarters | weaken |
| Chinese mature-node capacity qualifies non-China customers | Design wins outside China | 1+ confirmed qualification | 12-18 months | invalidate |
| 2027 mature-node price increases fail to materialize | Wafer contract price changes | Flat/declining for 2 quarters | 2027 | invalidate |

# 30–90 Day Validation

| Event | Window | Supports if | Weakens if | Monitor |
| --- | --- | --- | --- | --- |
| TI Q3 2026 earnings | ~Oct. 2026 | Data-center growth sustained, lead times extended | Growth decelerates, lead times normalize | TI IR |
| onsemi Q3 2026 earnings | Late Oct.-early Nov. 2026 | Doubling guidance reiterated/raised | Guidance walked back | onsemi IR |
| GlobalFoundries Q3 2026 earnings | Early Nov. 2026 | Segment growth at/above 50-60% guide | Growth materially below guidance | GF IR |
| Vanguard Q3 2026 earnings | ~Late Oct. 2026 | 2027 price warning reiterated, fab on schedule | Fab timeline slips or price hikes scaled back | Vanguard IR |
| TrendForce mature-node update | ~Q4 2026 | Utilization sustained, 2027 hikes reaffirmed | Utilization falls, hikes revised down | TrendForce |

# Final Assessment

**Verdict: VALIDATE** (confidence: medium)

Mature-node/8-inch fab capacity for power-management ICs and analog chips meets the strict Structural Bottleneck test -- Extreme demand, Low supply elasticity, Hard substitutability -- on the evidence of rising utilization, active capacity cuts by leading foundries, 60-100%+ AI-linked revenue growth at Texas Instruments, onsemi and GlobalFoundries, and Vanguard's fab selling out before production begins. It is genuinely under-covered relative to packaging, HBM, and lithography despite comparable tightness. The main open question is whether Chinese mature-node expansion or a cyclical demand cooldown could ease the constraint faster than incumbent capacity plans allow -- worth continued validation rather than a settled finding.

# Sources

_Note: [primary] labels the source's own nature (official company/regulatory releases), not that this session directly fetched the page -- every sec.gov, semi.org, vis.com.tw, investor.onsemi.com, trendforce.com, digitimes.com and eetasia.com URL below was blocked by the research environment's egress proxy, so those citations rely on convergent secondary reprints/search-result snippets rather than direct verification (see Unknowns)._

- `ev-1` [secondary] [TrendForce: "Capacity Cuts and Surging Demand for AI Power ICs Set Stage for Mature-Node Foundry Price Increases"](https://www.trendforce.com/presscenter/news/20260507-13036.html) (2026-05-07)
- `ev-2` [secondary] [TrendForce: "[News] 8-Inch Foundries May Raise Prices 5-20%, Benefiting UMC, PSMC, Vanguard"](https://www.trendforce.com/news/2026/01/14/news-8-inch-foundries-may-raise-prices-5-20-potentially-benefiting-umc-psmc-vanguard/) (2026-01-14)
- `ev-3` [secondary] [EE Times Asia: "AI Component Capacity Squeeze, Foundry Output Cuts to Extend Mature-node Price Increases in 2027"](https://www.eetasia.com/ai-component-capacity-squeeze-foundry-output-cuts-to-extend-mature-node-price-increases-in-2027/) (2026-06-30)
- `ev-4` [secondary] [Digitimes: "Mature-node chip scramble may persist through 2028 as supply chain management becomes bargaining leverage"](https://www.digitimes.com/news/a20260909PD219/management-supply-chain-2028-demand-packaging.html) (2026-09-09)
- `ev-5` [secondary] [Digitimes: "China's mature-node push gathers pace: Nexchip, Silan, Hua Hong step up capacity and integration"](https://www.digitimes.com/news/a20260318VL209/12-inch-china-28nm-mature-process-hua-hong-semiconductor-nexchip-silan.html) (2026-03-18)
- `ev-6` [primary] [Texas Instruments Incorporated, Form 10-Q, quarter ended June 30, 2026](https://www.sec.gov/Archives/edgar/data/0000097476/000009747626000152/txn-20260630.htm) (2026-07)
- `ev-6b` [secondary] [Benzinga: "Texas Instruments Q2 2026 Earnings Call Transcript"](https://www.benzinga.com/news/26/07/60626539/texas-instruments-q2-2026-earnings-call-transcript) (2026-07)
- `ev-7` [secondary] [Yahoo Finance: "Texas Instruments Q1 2026 earnings beat on AI data center demand"](https://finance.yahoo.com/markets/stocks/articles/texas-instruments-q1-2026-earnings-184147102.html) (2026-04)
- `ev-8` [primary] [ON Semiconductor Corp, Form 8-K exhibit, "onsemi Reports Second Quarter 2026 Results"](https://www.sec.gov/Archives/edgar/data/0001097864/000114036126018868/ef20072220_ex99-1.htm) (2026-08-03)
- `ev-9` [secondary] [Tech Times: "Onsemi Completes AI Power Stack With GaN as Data Center Revenue Set to Double"](https://www.techtimes.com/articles/322917/20260804/onsemi-completes-ai-power-stack-gan-data-center-revenue-set-double.htm) (2026-08-04)
- `ev-10` [secondary] [The Motley Fool: "GlobalFoundries (GFS) Q2 2026 Earnings Call Transcript"](https://www.fool.com/earnings/call-transcripts/2026/08/12/globalfoundries-gfs-q2-2026-earnings-call-transcript/) (2026-08-12)
- `ev-11` [secondary] [Digitimes: "AI demand fills Vanguard's Singapore fab ahead of schedule"](https://www.digitimes.com/news/a20260509PD201/demand-fab-vis-2026-market.html) (2026-05-09)
- `ev-12` [secondary] [Tech Times: "Chip Foundry Warns 2027 Wafer Price Hikes Will Be Steeper as Singapore Fab Sells Out"](https://www.techtimes.com/articles/323072/20260804/chip-foundry-warns-2027-wafer-price-hikes-will-steeper-singapore-fab-sells-out.htm) (2026-08-04)
- `ev-13` [primary] [Vanguard International Semiconductor Corporation: Q2 2026 investor press release](https://www.vis.com.tw/en/press_detail?itemid=20234) (2026-08)
- `ev-14` [primary] [SEMI: "SEMI Projects Double-Digit Growth in Global 300mm Fab Equipment Spending for 2026 and 2027"](https://www.semi.org/en/semi-press-release/semi-projects-double-digit-growth-in-global-300mm-fab-equipment-spending-for-2026-and-2027) (2026-04)
- `ev-15` [secondary] [Aetrix: "Semiconductor Lead Times 2026: AI Chip Supply Chain Bottlenecks"](https://www.aetrixelec.com/blog/semiconductor-lead-times-2026-ai-chip-supply-chain) (2026)
- `ev-16` [secondary] [TrendForce: aggregated 8-inch/12-inch mature-node foundry utilization and capacity-investment data (2026 reporting)](https://www.trendforce.com/news/2026/01/14/news-8-inch-foundries-may-raise-prices-5-20-potentially-benefiting-umc-psmc-vanguard/) (2026)
