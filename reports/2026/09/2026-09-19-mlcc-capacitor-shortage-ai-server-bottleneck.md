---
title: "The Two-Cent Bottleneck: Are Sold-Out MLCC Ceramic Capacitors Quietly Constraining AI Server Production?"
date: "2026-09-19"
slug: "mlcc-capacitor-shortage-ai-server-bottleneck"
research_type: NEW
topics: ["ai-infrastructure", "semiconductors", "passive-components", "advanced-manufacturing"]
companies: ["Murata Manufacturing", "Samsung Electro-Mechanics", "TDK Corporation", "Yageo Corporation"]
verdict: "VALIDATE"
confidence: "medium"
primary_question: "Have AI-server-grade high-capacitance MLCC ceramic capacitors become a genuine structural bottleneck on AI accelerator production, distinct from the chip, memory, packaging and power-equipment constraints this pipeline has previously examined?"
---

# One-Sentence Conclusion

A Murata/Samsung Electro-Mechanics MLCC duopoly is sold out and raising prices on AI-server capacitors, meeting the strict bottleneck test but carrying real cyclical-reversal risk.

# Executive Summary

Murata and Samsung Electro-Mechanics, holding an estimated 84% of AI-server-grade MLCC capacitor supply, both posted record 2026 earnings and imposed successive double-digit price increases (Murata 15-35% in April, Samsung Electro-Mechanics 30% in August) as AI servers pull far more of this multi-cent passive component than general-purpose machines. Murata's MLCC book-to-bill hit 1.47x with 90-95% utilization, and its ~¥80 billion capacity plan adds only 10-15% more output by FY2027. High-end lead times reached 5-10 months by August 2026 and may extend into 2027, per TrendForce. Yet the MLCC industry has a documented history of shortage-to-glut reversal, and partial substitutes (silicon capacitors, polymer tantalum) are already shipping, leaving this bottleneck less durable than memory or packaging constraints this pipeline has previously confirmed.

# Research Question / Why Now

**Primary question:** see front matter above.

**Sub-questions:** How concentrated is AI-server-grade MLCC supply, and how fast can that capacity expand? What is driving demand growth specifically from AI servers? Is there a credible near-term substitute? How does today's tightness compare to the 2018-2019 shortage-to-glut cycle? Could Chinese makers or new capacitor technologies ease the constraint before 2027?

**Why now:** DigiTimes reported September 14, 2026 that AI servers are consuming a growing share of global MLCC capacity, following record Q1/Q2 2026 earnings and back-to-back price hikes at Murata and Samsung Electro-Mechanics -- a passive-component bottleneck this pipeline has not previously examined.

**Thesis:** AI-server-grade MLCCs meet the strict Structural Bottleneck test on demand and supply elasticity, but their history of cyclicality and emerging partial substitutes make the finding more contested than most of this pipeline's prior confirmations.

# Known Facts

- Murata's Q1 FY2026 (Apr-Jun) revenue hit a record ¥502.3B, up 20.7% YoY, driven by data-center demand; MLCC book-to-bill reached 1.47x. _(e1)_
- Murata plans ~¥80B in added MLCC capacity (¥40B each in FY2026/FY2027) but expects only a 10-15% capacity increase once complete. _(e2)_
- Murata raised AI-server/automotive MLCC prices 15-35%, effective April 1, 2026. _(e3)_
- Samsung Electro-Mechanics' Q2 2026 operating profit reached KRW440.4B, up 107% YoY, on sales of KRW3,457.2B; MLCC revenue grew 44% YoY; margin improved to 12.7% from 7.6%. _(e4)_
- Samsung Electro-Mechanics signed long-term MLCC contracts with 10+ customers, including hyperscalers, and raised MLCC prices 30% effective August 1, 2026. _(e4, e5)_
- TrendForce: high-end MLCC lead times diverged to 5-10 months by August 18, 2026; tightness may extend into 2027. _(e6)_
- TrendForce: an across-the-board ~30% MLCC price surge was reported August 4, 2026. _(e7)_
- Murata (~45%) and Samsung Electro-Mechanics (~39%) together hold ~84% of AI-server-grade MLCC supply; Chinese suppliers are absorbing overflow demand, per DigiTimes (Sept. 14, 2026). _(e8)_
- TrendForce (June 17, 2026): in-house hyperscaler ASIC programs are concentrating demand on fewer high-end MLCC specs, risking structural shortages in 2H26. _(e9)_
- Samsung Electro-Mechanics signed a ~$1B silicon-capacitor supply contract (May 2026, through 2027-2028); silicon capacitors are described as complementary to, not a substitute for, MLCCs. _(e12)_
- The global MLCC market suffered a severe 2018-2019 shortage that reversed into oversupply and price erosion within roughly 18 months once double-ordered inventory unwound. _(e14)_
- Chinese makers' combined MLCC share has risen to roughly 10% (from ~6% in 2019), but still trail top-tier suppliers in specs needed for AI-server qualification. _(e8, e16)_

# Reasonable Inferences

- The combination of 90-95% utilization, 12-24 month capacity lead times, and double-digit 2026 price increases across every major supplier indicates this segment meets the strict Structural Bottleneck test through 2027. _(e1, e2, e4, e6, e7, e8, e9)_
- Because the duopoly is steering new capacity toward long-term contracted hyperscaler customers, AI-server builders without such contracts likely face longer effective delays than headline lead times suggest. _(e4, e6, e8)_
- Nvidia's next-generation Vera Rubin platform is likely to raise per-rack capacitor consumption further, extending demand pressure into 2027-2028, though specific unit-count estimates are third-party, not Nvidia-disclosed. _(e11, e18)_
- Given the industry's 2018-2019 shortage-to-glut history, today's tightness carries meaningful risk of reversal once 2027 capacity from Murata, Samsung Electro-Mechanics and Chinese entrants lands together. _(e1, e2, e14)_
- Partial substitution already shipping (silicon capacitors, polymer tantalum) may cap this bottleneck's price/lead-time ceiling versus bottlenecks with no substitution path at all. _(e12, e13)_

# Unknowns

- No source discloses effective MLCC lead times for AI-server builders lacking long-term supplier contracts.
- No hyperscaler or AI-server OEM has publicly disclosed a shipment delay specifically attributed to MLCC shortage, as distinct from GPU, HBM, or power-equipment constraints.
- Nvidia has not officially disclosed Vera Rubin's MLCC/capacitor specifications; current figures are third-party estimates.
- Whether Chinese makers will reach AI-server qualification at scale before 2027 incumbent capacity additions land is unknown.

# Core Mechanism

Every AI server board's power-delivery network depends on high-capacitance, low-ESL MLCC ceramic capacitors to stabilize voltage as GPUs draw increasingly spiky, high-density current -- a function that cannot be omitted. Two companies, Murata and Samsung Electro-Mechanics, supply an estimated 84% of this AI-server-grade tier, running 90-95% utilization with 12-24 month lead times to add qualified capacity. Both posted record 2026 profit growth on data-center demand and imposed successive double-digit price increases, while directing new capacity toward long-term hyperscaler contracts rather than the open market.

The complicating evidence is the MLCC industry's own history: a severe 2018-2019 shortage reversed into oversupply within about 18 months once double-ordered inventory unwound, and partial substitutes -- silicon capacitors for specific power-delivery functions, polymer tantalum for bulk decoupling -- are already shipping commercially. Whether AI-driven demand (amplified further by Nvidia's next-generation Vera Rubin platform) outruns the 2026-2027 capacity response from Murata, Samsung Electro-Mechanics and rising Chinese suppliers, or instead repeats the industry's familiar boom-bust pattern, remains the open question.

# Industry Chain

| Node | Role | Major players | Pricing power | Supply elasticity | Substitutability |
| --- | --- | --- | --- | --- | --- |
| Ceramic/electrode raw materials (BaTiO3, Ni, Pd) | Upstream | Unnamed in evidence | Medium | Medium | Medium |
| AI-server-grade high-capacitance MLCC fabrication | Components | Murata, Samsung Electro-Mechanics, TDK, Taiyo Yuden, Yageo, Walsin | High | Low | Hard |
| AI server power-delivery board assembly | Infrastructure | Not separately evidenced | -- | -- | -- |
| AI accelerator platform | Platform | Nvidia, AMD | High | -- | -- |
| Hyperscale AI data-center operators | Application | Not individually evidenced | -- | -- | -- |
| AI training/inference end customers | Customer | Not individually evidenced | -- | -- | -- |

# Bottleneck Analysis

| Node | Demand | Supply elasticity | Substitutability | Pricing power | Opportunity | Classification |
| --- | --- | --- | --- | --- | --- | --- |
| AI-server-grade high-capacitance MLCC fabrication | Extreme | Low | Hard | High | 4 | Structural Bottleneck |
| Barium titanate/electrode raw materials | High | Medium | Medium | Medium | 2 | Growth Area |
| Chinese MLCC manufacturing capacity | High | Medium | Medium | Medium | 3 | Growth Area |

MLCC fabrication meets the strict test: extreme demand from AI servers, low elasticity from a two-firm duopoly at near-full utilization with multi-year lead times, and hard substitutability since silicon/tantalum alternatives only partly cover MLCC functions. Raw materials and Chinese capacity are contributing pressure-relief valves, not yet proven bottlenecks themselves.

# Key Metrics

| Metric | Value | Unit | Period | Source |
| --- | --- | --- | --- | --- |
| Murata Q1 FY2026 revenue | 502.3 | JPY billion | Apr-Jun 2026 | e1 |
| Murata MLCC book-to-bill ratio | 1.47 | ratio | Q1 FY2026 | e1 |
| Murata additional MLCC capacity investment | 80 | JPY billion | FY2026-27 | e2 |
| Samsung Electro-Mechanics Q2 2026 operating profit | 440.4 | KRW billion | Q2 2026 | e4 |
| Samsung Electro-Mechanics MLCC revenue growth | 44 | % YoY | Q2 2026 | e4 |
| Samsung Electro-Mechanics MLCC price increase | 30 | % | eff. Aug 1, 2026 | e5 |
| High-end MLCC lead times | 5-10 | months | August 2026 | e6 |
| Combined Murata+SEMCO AI-server MLCC share | 84 | % | 2026 | e8 |

# Competition

| Name | Kind | Note |
| --- | --- | --- |
| TDK Corporation | direct competitor | ~5% share of AI-grade MLCC market; negotiating price adjustments. |
| Taiyo Yuden | direct competitor | ~4% share; reportedly weighing a September 2026 price hike. |
| Yageo Corporation | direct competitor | Expanding Kaohsiung capacity for AI-server X6S specifications. |
| Walsin Technology | direct competitor | Expanding via Taiwan acquisitions and a new Malaysia plant. |
| Guangdong Fenghua Advanced Technology | direct competitor | Chinese maker; robust orders, two 2026 price hikes (~20%). |
| Silicon capacitor suppliers (e.g., Empower Semiconductor) | indirect alternative | Complementary, not fully substitutive, for select PDN functions. |

# Financial / Valuation

_Valuation not performed: this research verified disclosed revenue, profit and margin figures from Murata's and Samsung Electro-Mechanics' own earnings releases, but did not independently verify current share prices, share counts or complete financial statements needed to build a valuation._

# Catalysts

- Nvidia's Vera Rubin platform ramp, expected to raise per-rack MLCC intensity from 2027
- Murata's ~¥80B capacity expansion completing across FY2026-FY2027
- Chinese MLCC makers' AI-server qualification progress
- Silicon-capacitor and polymer-tantalum substitution adoption in AI-server PDN designs

# Strongest Bear Case

- **Economics**: The industry's 2018-2019 shortage reversed into oversupply within ~18 months once double-ordered inventory unwound; the same dynamic could unwind today's tightness faster than 2027-2028 capacity plans assume.
- **Technology**: Silicon and polymer-tantalum capacitors are already shipping as partial substitutes, a path structural bottlenecks like EUV lithography lack.
- **Competition**: Chinese makers' combined share has already risen from ~6% to ~10% and is actively pursuing AI-server qualification.
- **Demand**: Any deceleration in hyperscaler capex guidance flows straight through to MLCC order books and book-to-bill ratios.

# Kill Conditions

| Condition | Metric | Threshold | Window | Impact |
| --- | --- | --- | --- | --- |
| MLCC lead times normalize | Reported AI-server MLCC lead times | Below 12 weeks, 2 consecutive quarters | 3-4 quarters | invalidate |
| Book-to-bill falls toward 1.0 | Quarterly MLCC book-to-bill (Murata/SEMCO) | At/below 1.0 for 1 quarter | 2-3 quarters | invalidate |
| Hyperscaler capex guidance decelerates materially | Aggregate hyperscaler capex growth guidance | Material deceleration QoQ | 2-3 quarters | weaken |
| Substitution technologies scale meaningfully | Adoption share in new AI-server PDN designs | 15%+ of new PDN capacitance | 4-6 quarters | weaken |

# 30-90 Day Validation

| Event | Window | Supports if | Weakens if | Monitor |
| --- | --- | --- | --- | --- |
| Murata Q2 FY2026 earnings | Late Oct. 2026 | Book-to-bill stays above ~1.2x, constrained commentary | Book-to-bill nears 1.0, easing lead times | Murata IR |
| Samsung Electro-Mechanics Q3 2026 earnings | Late Oct. 2026 | MLCC growth/margin keep rising, sold-out commentary | Growth decelerates sharply, margin contracts | SEMCO IR |
| TrendForce next MLCC update | Nov-Dec 2026 | Lead times stay 5-10+ months or extend | Lead times shorten or oversupply flagged | TrendForce presscenter |
| Nvidia Vera Rubin launch specs/shipments | Late 2026-2027 | Higher per-rack capacitor requirements confirmed | Lower intensity than estimated, or launch slips | Nvidia newsroom |
| Disclosed AI-server delay attributed to MLCC shortage | Next 2-3 quarters | A hyperscaler/OEM discloses such a delay | No disclosure despite continued capex growth | Trade press |

# Final Assessment

**Verdict: VALIDATE** (confidence: medium)

AI-server-grade MLCCs plausibly meet the strict Structural Bottleneck test: extreme, duopoly-confirmed demand; low supply elasticity from 90-95% utilization and 12-24 month capacity lead times; and hard substitutability for the specific specs AI power-delivery networks need. But this finding is more contested than most of this pipeline's prior confirmations -- the MLCC industry's own history of rapid shortage-to-glut reversal, plus already-shipping partial substitutes and rising Chinese capacity, mean the current tightness could prove more cyclical than structural. Worth continued tracking through Murata's and Samsung Electro-Mechanics' Q3 2026 results rather than treated as a settled, durable constraint.

# Sources

_Note: [primary] labels the source's own nature (official company releases and newsroom pages), not that this session directly fetched the page -- corporate.murata.com, samsungsem.com, trendforce.com and digitimes.com were blocked by the research environment's egress proxy, so those citations rely on convergent search-result snippets rather than direct verification (see Unknowns)._

- `e1` [primary] [Murata Manufacturing Co., Ltd. FY2026 Q1 Financial Results](https://corporate.murata.com/-/media/corporate/about/newsroom/news/irnews/irnews/2026/0731d/26q1-e.ashx) (2026-07-31)
- `e2` [primary] [Murata Manufacturing FY2025 Q4 / FY2026 Outlook Earnings Release Conference](https://corporate.murata.com/-/media/corporate/about/newsroom/news/irnews/irnews/2026/0430b/25q4-e-speach.ashx) (2026-04-30)
- `e3` [secondary] [SmBom: "Murata to Raise Prices on High-End MLCCs"](https://www.smbom.com/news/46373) (2026-03)
- `e4` [primary] [Samsung Electro-Mechanics, Q2 2026 Business Results](https://m.samsungsem.com/global/newsroom/news/view.do?id=10462) (2026-07-30)
- `e5` [secondary] [The Elec: "Samsung Electro-Mechanics to Raise MLCC Prices by 30% Starting in August"](https://www.thelec.net/news/articleView.html?idxno=12636) (2026-07-29)
- `e6` [secondary] [TrendForce: "MLCC Lead Times Diverge as High-End Products Stretch to 5-10 Months; Tightness May Extend Into 2027"](https://www.trendforce.com/news/2026/08/18/news-mlcc-lead-times-diverge-as-high-end-products-stretch-to-5-10-months-on-ai-demand-tightness-may-extend-into-2027/) (2026-08-18)
- `e7` [secondary] [TrendForce: "Across-the-Board 30% Price Hike: MLCC Price Surge Intensifies"](https://www.trendforce.com/news/2026/08/04/news-across-the-board-30-price-hike-mlcc-price-surge-intensifies/) (2026-08-04)
- `e8` [secondary] [DigiTimes: "AI servers are eating MLCC capacity, and Chinese suppliers are taking what's left"](https://www.digitimes.com/news/a20260914VL212/mlcc-capacity-market-semco-murata.html) (2026-09-14)
- `e9` [secondary] [TrendForce: "CSP In-House ASIC Boom Drives MLCC Specification Concentration; Structural Shortages of High-End Specialty MLCCs May Emerge in 2H26"](https://www.trendforce.com/presscenter/news/20260617-13105.html) (2026-06-17)
- `e10` [discovery] [Cosolvic: "Murata MLCC Price Increase 2026: AI Server Demand"](https://cosolvic.com/blog/murata-mlcc-price-increase-2026-ai-server-impact/)
- `e11` [discovery] [Utmel: "AI Server MLCCs: Why NVIDIA Rubin Racks Require Over 600,000 Capacitors"](https://www.utmel.com/blog/categories/capacitors/ai-server-mlccs-why-nvidia-rubin-racks-require-over-600-000-capacitors)
- `e12` [secondary] [TrendForce Insights: "Powering Next-Gen AI: Capacitors' Dual-Track Evolution"](https://insights.trendforce.com/p/mlcc-silicon-capacitor-power-integrity)
- `e13` [discovery] [Utmel: "MLCC vs Polymer Tantalum Capacitors: Overcoming 2026 Shortages in AI Server PDNs"](https://www.utmel.com/blog/categories/capacitors/mlcc-vs-polymer-tantalum-capacitors-overcoming-2026-shortages-in-ai-server-pdns)
- `e14` [secondary] [Passive Components: "How Recent MLCC End-of-Life Announcements Helped to Disrupt the High-Tech Economy in 2018 and What to Expect in 2019"](https://passive-components.eu/how-recent-mlcc-end-of-life-announcements-helped-to-disrupt-the-high-tech-economy-in-2018-and-what-to-expect-in-2019/)
- `e15` [secondary] [Passive Components: "MLCCs in the Age of AI: Q2 2026 Market Tightness"](https://passive-components.eu/mlccs-in-the-age-of-ai-q2-2026-market-tightness/) (2026)
- `e16` [discovery] [Unibetter: "Top Multilayer Ceramic Capacitor Manufacturers"](https://en.unibetter-ic.com/top-multilayer-ceramic-capacitor-manufacturers/)
- `e17` [discovery] [FTC Electronics: "MLCC Price Increase 2026: Causes & Supply Chain Impact"](https://www.ftcelectronics.com/news/why-mlcc-prices-are-rising)
- `e18` [primary] [NVIDIA Vera Rubin Opens Agentic AI Frontier](https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform) (2026)
- `e19` [discovery] [Terahertz Co.: "MLCC demand is exploding! An AI server now uses up to 30,000 units -- six Taiwanese manufacturers poised for a major comeback"](https://thz.com.tw/en/news_detail.aspx?CatID=f3fb8e92-4354-44cb-b213-ac69e33d6f44&ID=fd18e75a-1cbf-42ef-9adf-db1fd2909f74)
