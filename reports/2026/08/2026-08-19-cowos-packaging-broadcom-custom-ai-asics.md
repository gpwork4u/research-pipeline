---
title: "CoWoS advanced-packaging capacity as the binding constraint on AI accelerator supply"
date: "2026-08-19"
slug: "cowos-packaging-broadcom-custom-ai-asics"
research_type: NEW
topics: ["semiconductors", "ai-infrastructure", "advanced-packaging"]
companies: ["Broadcom"]
verdict: "VALIDATE"
confidence: "medium"
primary_question: "Is TSMC's CoWoS advanced-packaging capacity, rather than wafer starts or HBM memory, the binding constraint on AI accelerator supply in 2026, and does that constraint favor Broadcom's custom-ASIC franchise over merchant GPU suppliers?"
---

# 一句話結論

CoWoS advanced-packaging capacity, not silicon wafer starts or HBM memory, currently qualifies as the structural bottleneck on AI accelerator supply, and its allocation is entrenching the largest incumbent buyers rather than expanding the field.

# Executive Summary

Broadcom's fiscal 2026 guidance and TSMC's own capacity disclosures both point to the same binding constraint: TSMC's CoWoS advanced-packaging lines are fully booked through 2026, and expanding them requires multi-year equipment lead times even as TSMC works to nearly quadruple monthly output. Broadcom's custom AI accelerator (XPU/ASIC) business is growing off this same scarce packaging pool alongside Nvidia's merchant GPUs, with guidance of $16 billion in Q3 FY2026 AI semiconductor revenue, a full-year target near $56 billion, and a committed backlog exceeding $73 billion concentrated in six hyperscale customers. Because packaging allocation is won through multi-year committed volume rather than spot purchasing, the scarcity appears to be reinforcing the position of the largest, best-capitalized buyers -- Nvidia and Broadcom's six anchor accounts -- rather than broadening the supply base. The main uncertainty is cyclical and structural at once: TSMC's stated capacity-ramp target for the end of 2026 would, if sustained, exceed current full-year demand estimates, and history shows packaging and memory cycles can flip from scarcity to oversupply quickly if AI capital expenditure decelerates.

# Research Question / Why Now

**Primary question:** Is TSMC's CoWoS advanced-packaging capacity, rather than wafer starts or HBM memory, the binding constraint on AI accelerator supply in 2026, and does that constraint favor Broadcom's custom-ASIC franchise over merchant GPU suppliers?

**Sub-questions:**
- Is demand for CoWoS packaging growing faster than TSMC's stated capacity expansion?
- How quickly can CoWoS capacity expand, and what limits the expansion rate?
- Can AI accelerator designs substitute away from CoWoS-style advanced packaging?
- Who holds pricing power in the packaging allocation process among TSMC, Nvidia, and Broadcom's hyperscale customers?
- What evidence would refute the bottleneck thesis?

**Why now:** Broadcom Q2 FY2026 earnings call (AI semiconductor revenue guidance) and TSMC Q2 2026 earnings call confirming CoWoS advanced-packaging capacity sold out through 2026.

**Thesis:** TSMC's CoWoS advanced-packaging capacity, not silicon wafer starts or HBM memory itself, is the binding constraint on AI accelerator supply through 2026-2027, and because allocation is won through committed multi-year volume rather than spot orders, the constraint is reinforcing the position of the largest, best-capitalized buyers (Nvidia and Broadcom's six anchor custom-ASIC customers) rather than expanding total industry throughput.

# Known Facts

- Broadcom reported Q2 FY2026 AI semiconductor revenue of $10.8 billion and guided Q3 FY2026 AI semiconductor revenue to grow over 200% year-over-year to $16.0 billion. _(evidence: ev-1)_
- Broadcom guided full-year fiscal 2026 AI semiconductor revenue to approximately $56 billion, up roughly 180% year-over-year, and reaffirmed fiscal 2027 AI semiconductor revenue guidance of "in excess of $100 billion," backed by a committed AI-specific order backlog exceeding $73 billion. _(evidence: ev-1)_
- Broadcom's custom AI accelerator (XPU/ASIC) design business serves six core hyperscale customers, publicly including Google, Meta, Anthropic, and OpenAI. _(evidence: ev-1, ev-5)_
- TSMC is expanding CoWoS advanced-packaging capacity from approximately 35,000 wafers/month at the end of 2024 toward a target of roughly 125,000-130,000 wafers/month by the end of 2026, with 2026 capital expenditure raised to $60-64 billion, the majority directed toward leading-edge (2nm/3nm) and advanced-packaging capacity. _(evidence: ev-2)_
- TSMC management described CoWoS advanced-packaging capacity as fully booked for 2026 in its Q2 2026 earnings communications. _(evidence: ev-2)_
- Industry analysts estimate Nvidia holds roughly 60% of TSMC's 2026 CoWoS wafer allocation, while Broadcom's custom-ASIC allocation is reported at a materially smaller but fast-growing share, with a substantial portion tied to Google's plan to externally supply its TPUs alongside Meta and OpenAI programs. _(evidence: ev-3, ev-4)_
- OpenAI is developing its first custom AI ASIC with Broadcom, a program reported at roughly $10 billion, with TSMC as the planned manufacturer; initial shipment ambitions have slipped from Q2 2026 toward Q3 2026 or later. _(evidence: ev-5)_
- Meta committed in April 2026 to one gigawatt of custom AI accelerators built with Broadcom under its MTIA program. _(evidence: ev-5)_

# Reasonable Inferences

- Because CoWoS capacity additions require multi-year equipment lead times, TSMC describes the line as fully booked for 2026, and demand from both merchant GPU vendors and custom-ASIC hyperscalers is rising simultaneously, packaging allocation -- not wafer starts or HBM memory -- is the more binding near-term constraint on how many AI accelerators of any architecture can actually ship in 2026. _(evidence: ev-1, ev-2, ev-3)_
- Because packaging allocation is secured through multi-year committed volume rather than spot purchasing, and Broadcom's anchor customers have both design-partnership visibility and balance-sheet scale to make such commitments, the bottleneck likely reinforces customer concentration among large incumbents (Nvidia and Broadcom's six anchor accounts) rather than broadening the AI-accelerator supply base to smaller or newer entrants. _(evidence: ev-1, ev-4, ev-5)_
- TSMC's stated exit-rate target of 125,000-130,000 CoWoS wafers/month by end-2026 annualizes to more capacity than analyst estimates of full-year 2026 demand, implying capacity is scarce mainly because it ramps through the year rather than being available at that rate from January -- consistent with a "sold out" status in 2026 even as the constraint could ease materially entering 2027 if the ramp holds. _(evidence: ev-2, ev-4)_

# Unknowns

- TSMC's actual CoWoS capacity utilization and yield rates broken out by customer are not publicly disclosed.
- Exact customer-level wafer allocation figures vary across analyst reports (e.g., Broadcom's 2026 CoWoS allocation has been separately estimated at both roughly 150,000 and roughly 200,000 wafers by different research notes); TSMC does not confirm customer-level splits.
- Whether alternative advanced-packaging approaches (fan-out panel-level packaging, or Samsung/Intel Foundry advanced packaging) will absorb meaningful overflow demand within the 2026-2027 window.
- Whether OpenAI's custom-ASIC program will hit its revised shipment timeline or slip further, and whether any further slippage is packaging-related or design-related.

# Core Mechanism

Every AI accelerator, whether a merchant GPU or a hyperscaler-designed custom ASIC, now depends on TSMC's CoWoS advanced packaging to stack logic and high-bandwidth memory into a single module. That packaging step is the tightest link in the chain: TSMC has said the line is fully booked through 2026, and the equipment and yield-learning needed to add capacity takes years, not quarters. Because Nvidia, Broadcom's six anchor hyperscale customers, and other ASIC programs are all drawing from the same finite pool of CoWoS wafers, and because allocation is committed years in advance through binding volume agreements rather than sold on the spot market, the buyers able to make the largest, earliest commitments capture disproportionate share of scarce capacity. This is the defining mechanism of a structural bottleneck: demand outstrips supply, supply cannot respond quickly, buyers cannot easily substitute away from CoWoS-class packaging at the bandwidth AI training and inference require, and the scarce resource's owner and its largest committed customers gain pricing and allocation power over everyone else.

# Industry Chain

| Node | Role | Major players | Pricing power | Supply elasticity | Substitutability |
| --- | --- | --- | --- | --- | --- |
| Leading-edge wafer fabrication (2nm/3nm) | Upstream | TSMC | High | Medium | Hard |
| CoWoS / advanced packaging | Components | TSMC, substrate and packaging equipment vendors | High | Low | Hard |
| AI accelerator design (merchant GPU and custom ASIC) | Platform | Nvidia, AMD, Broadcom (design partner), Google, Meta, OpenAI | Medium | Medium | Medium |
| Hyperscale AI infrastructure deployment | Infrastructure | Google, Meta, Microsoft, Amazon, OpenAI | Medium | Medium | Medium |

# Bottleneck Analysis

| Node | Demand | Supply elasticity | Substitutability | Pricing power | Opportunity | Classification |
| --- | --- | --- | --- | --- | --- | --- |
| CoWoS / advanced packaging capacity | Extreme | Low | Hard | High | 5 | Structural Bottleneck |
| Leading-edge wafer fabrication (2nm/3nm) | High | Medium | Hard | High | 4 | Growth Area |
| AI accelerator design (merchant GPU vs. custom ASIC) | Extreme | Medium | Medium | Medium | 3 | Growth Area |

- **CoWoS / advanced packaging capacity**: Demand is extreme across both merchant-GPU and custom-ASIC channels, TSMC describes the line as fully booked through 2026, capacity additions are gated by multi-year equipment lead times, and no packaging alternative currently matches CoWoS bandwidth and qualified yield at comparable scale.
- **Leading-edge wafer fabrication (2nm/3nm)**: Demand is high and TSMC is expanding leading-edge wafer capacity on a faster relative trajectory than packaging, keeping this node less acutely constrained than CoWoS in the near term.
- **AI accelerator design (merchant GPU vs. custom ASIC)**: Demand and competitive intensity between merchant GPU and custom-silicon design are both extreme, but design capacity itself is more elastic than the physical packaging capacity that ultimately gates shipments.

# Key Metrics

| Metric | Value | Unit | Period | Growth | Source |
| --- | --- | --- | --- | --- | --- |
| Q2 FY2026 AI semiconductor revenue (Broadcom) | 10.8 | USD billion | Q2 FY2026 | ~106% YoY | ev-1 |
| Q3 FY2026 AI semiconductor revenue guidance (Broadcom) | 16.0 | USD billion | Q3 FY2026 (guidance) | >200% YoY | ev-1 |
| FY2026 AI semiconductor revenue guidance (Broadcom) | 56 | USD billion | FY2026 (guidance) | ~180% YoY | ev-1 |
| FY2027 AI semiconductor revenue target (Broadcom) | in excess of 100 | USD billion | FY2027 (guidance) | null | ev-1 |
| Committed AI-specific order backlog (Broadcom) | 73 | USD billion | as of Q2 FY2026 | null | ev-1 |
| TSMC CoWoS capacity, end of 2024 | 35,000 | wafers/month | end of 2024 | null | ev-2 |
| TSMC CoWoS capacity target, end of 2026 | 125,000-130,000 | wafers/month | end of 2026 (target) | null | ev-2 |
| TSMC FY2026 capital expenditure guidance | 60-64 | USD billion | FY2026 (guidance) | null | ev-2 |
| Nvidia estimated share of 2026 CoWoS wafer allocation | ~60 | percent | 2026 (analyst estimate) | null | ev-3 |
| Global CoWoS demand, 2024 vs. 2026 (analyst estimate) | 370,000 (2024) vs. ~1,000,000 (2026) | wafers/year | 2024-2026 (analyst estimate) | null | ev-4 |

# Competition

| Name | Kind | Note |
| --- | --- | --- |
| Nvidia (merchant GPU) | direct competitor | Holds the largest single estimated share (~60%) of TSMC's 2026 CoWoS allocation and competes with custom ASICs for the same scarce packaging capacity. |
| AMD (merchant GPU / custom silicon hybrid) | direct competitor | Also competes for CoWoS allocation alongside Nvidia and Broadcom-designed custom ASICs. |
| In-house or partially in-house hyperscaler silicon programs (e.g., Google TPU, Meta MTIA) | internal build | Designed with Broadcom in these specific programs per current evidence, but represent a path by which hyperscalers could reduce reliance on any single external ASIC design partner; still dependent on TSMC for fabrication and packaging. |
| Alternative advanced-packaging providers (Samsung, Intel Foundry, fan-out panel-level packaging entrants) | indirect alternative | Not reported at comparable qualified scale or volume for frontier AI accelerators within the research window. |

# Financial / Valuation

_No full financial statements or margin breakdown obtained beyond a company-wide operating margin figure (67% in Q2 FY2026) for Broadcom._

_Valuation not performed: current market price, diluted share count, and full financial statements were not gathered in this research pass._

# Catalysts

- Broadcom Q3 FY2026 earnings call (expected September 2026) reporting actual AI semiconductor revenue against the ~$16 billion guide
- TSMC Q3 2026 earnings call (expected mid-October 2026) with updated CoWoS capacity and FY2026/2027 capex guidance
- Disclosure of whether OpenAI's custom-ASIC shipment timeline slips further or stabilizes
- Further disclosures on Google's plans to externally supply TPU capacity

# Strongest Bear Case

- **Supply**: TSMC's own guidance targets nearly quadrupling CoWoS capacity in about two years (35,000 to 125,000-130,000 wafers/month); if that ramp executes on schedule while AI capital expenditure growth decelerates even modestly, the packaging bottleneck could ease or flip toward oversupply, echoing prior semiconductor capacity cycles.
- **Competition**: Alternative packaging technologies (fan-out panel-level packaging, or Samsung/Intel Foundry advanced-packaging entrants) could absorb overflow demand faster than currently assumed, eroding CoWoS-specific scarcity and TSMC's allocation leverage.
- **Execution**: Broadcom's growth thesis rests on committed backlog from six customers, with reported schedule slippage already observed on at least one program (OpenAI); further in-house design success at hyperscalers or additional program delays could shift AI-accelerator demand away from Broadcom-designed ASICs even if packaging capacity itself is unconstrained.
- **Demand**: All of these figures assume hyperscaler AI capital expenditure keeps compounding at its current pace; a broad AI capex pause would reduce demand for both merchant GPUs and custom ASICs simultaneously, easing pressure on the packaging bottleneck faster than supply could adjust.

# Kill Conditions

| Condition | Metric | Threshold | Window | Impact |
| --- | --- | --- | --- | --- |
| CoWoS lead times normalize or capacity is confirmed no longer fully booked | TSMC management commentary on CoWoS booking status / reported packaging lead times | TSMC states CoWoS capacity is no longer fully booked for the year, or reported lead times fall to industry-typical levels | next 2-3 quarters | invalidate |
| Broadcom AI semiconductor revenue misses guidance | Quarterly AI semiconductor revenue vs. guided figure | Actual revenue below the guided figure by a material margin for two consecutive quarters | next 2 quarters | weaken |
| Major AI capex slowdown announced by hyperscaler customers | Aggregate hyperscaler capex guidance (Google, Meta, Microsoft, Amazon) | Aggregate guided capex growth decelerates materially quarter over quarter | next 2-3 quarters | invalidate |

# 30–90 Day Validation

| Event | Window | Supports if | Weakens if | Monitor |
| --- | --- | --- | --- | --- |
| Broadcom Q3 FY2026 earnings call | September 2026 | AI semiconductor revenue meets or exceeds the ~$16 billion guide and the committed backlog continues growing | Revenue misses guidance or backlog growth stalls | Broadcom investor relations (investors.broadcom.com) |
| TSMC Q3 2026 earnings call | mid-October 2026 | Management reiterates that CoWoS capacity is fully booked and maintains or raises 2026/2027 capacity and capex targets | Management signals CoWoS capacity easing or capital-expenditure guidance is cut | TSMC investor relations (investor.tsmc.com) |
| OpenAI custom-ASIC shipment milestone | Q3-Q4 2026 | Shipment continues to slip and any delay is explicitly tied to packaging or capacity constraints | OpenAI's custom ASIC ships on the revised schedule with no packaging-related delay cited | OpenAI and Broadcom public statements, trade press |
| Hyperscaler Q3 2026 capital-expenditure guidance (Google, Meta, Microsoft, Amazon) | October-November 2026 | Capex guidance continues to grow, sustaining demand pressure on packaging capacity | Capex guidance decelerates or is cut | Respective hyperscaler quarterly earnings releases |

# Final Assessment

**Verdict: VALIDATE** (confidence: medium)

Verdict VALIDATE: the topic merits continued research with defined validation events rather than immediate deep commitment. The bottleneck framework's strict qualification criteria currently hold for CoWoS advanced packaging -- extreme demand growth, low supply elasticity, and hard substitutability -- supported directly by both companies' own earnings disclosures. But two structural uncertainties keep this from a higher-conviction verdict: TSMC's own capacity-ramp target for the end of 2026, if achieved, could exceed current full-year demand estimates, meaning the "sold out" status may reflect a mid-ramp snapshot rather than a durable multi-year constraint; and customer-level allocation figures beyond the companies' own disclosures rely on analyst estimates that vary meaningfully across sources. The defined kill conditions and validation events -- primarily the next TSMC and Broadcom earnings calls -- should clarify within one to two quarters whether the constraint is tightening, holding steady, or beginning to ease.

# Sources

- `ev-1` [primary] [Broadcom Inc. Form 8-K, Exhibit 99.1 -- Second Quarter Fiscal Year 2026 Financial Results press release](https://www.sec.gov/Archives/edgar/data/1730168/000173016826000051/avgo-05032026x8kxex99.htm) (2026-06-03)
- `ev-2` [primary] [TSMC Second Quarter 2026 Earnings Conference -- official investor presentation and earnings call materials](https://investor.tsmc.com/english/encrypt/files/encrypt_file/qr/phase4_reports/2026-07/9b7865fc366e66c9e73f04ab72a2a6c3c00fb49e/2Q26%20Presentation%20(E)_WoG.pdf) (2026-07-16)
- `ev-3` [secondary] [CNBC: "Nvidia snaps up AI chip packaging capacity as TSMC expands in U.S."](https://www.cnbc.com/2026/04/08/tsmc-nvidia-advanced-packaging-intel.html) (2026-04-08)
- `ev-4` [discovery] ["Who Will Divide Up the CoWoS Production Capacity in 2026?" -- industry report citing Morgan Stanley research](https://eu.36kr.com/en/p/3580962946874242) (2026-07)
- `ev-5` [secondary] [IBTimes: "What Is Broadcom? The Unknown Company Building the AI Chips Powering Google, Anthropic, OpenAI and Meta"](https://www.ibtimes.com/what-broadcom-unknown-company-building-ai-chips-powering-google-anthropic-openai-meta-3802922) (2026)
