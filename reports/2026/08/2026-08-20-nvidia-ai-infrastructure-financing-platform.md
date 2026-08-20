---
title: "Nvidia's $500 billion third-party AI financing push: does it solve a capital bottleneck, or relocate a credit-risk one?"
date: "2026-08-20"
slug: "nvidia-ai-infrastructure-financing-platform"
research_type: NEW
topics: ["ai-infrastructure", "semiconductors", "capital-markets"]
companies: ["Nvidia"]
verdict: "VALIDATE"
confidence: "medium"
primary_question: "Does Nvidia's push to mobilize over $500 billion in third-party financing for AI compute infrastructure solve a genuine capital-availability constraint on the AI buildout, or does it primarily redistribute and obscure credit risk that regulators (BIS) and credit markets (Nvidia's own CDS spreads) are already flagging as a systemic vulnerability?"
---

# 一句話結論

Capital itself is not scarce for the AI buildout, but credible, arm's-length underwriting capacity for AI compute as loan collateral is -- and Nvidia's $500 billion financing push, plus its own rapid retreat on the OpenAI Ohio guarantee, is direct evidence of exactly that constraint.

# Executive Summary

On August 10, 2026, Nvidia announced financing platforms with six major financial institutions -- Apollo, BlackRock, Blackstone, Brookfield, Goldman Sachs and KKR -- aimed at mobilizing over $500 billion of third-party capital for AI compute infrastructure. This arrives against a backdrop of mounting concern: the Bank for International Settlements' June 2026 Annual Economic Report named an AI-capex bust and "circular financing" collapse among its top financial-stability risks, and Nvidia's own five-year credit default swap spread hit a record 82 basis points on July 27, 2026 as reports circulated of Nvidia AI infrastructure arrangements potentially exceeding $750 billion. The clearest real-time evidence of where the actual constraint lies emerged within the research window itself: Nvidia's proposed guarantee for OpenAI's Ohio data-center campus was cut from roughly $250 billion under discussion in late July to $105 billion when the deal was finally signed on August 17, reportedly after investor pushback over balance-sheet risk concentration -- and reports characterized the original guarantee as necessary in the first place because OpenAI, projected to lose about $14 billion in 2026, lacks an investment-grade credit rating and could not otherwise access debt markets at this scale. This research concludes that global capital supply is not the binding constraint -- private credit and alternative-asset capacity is abundant and can be committed in months -- but that credible underwriting capacity for GPU-backed debt is scarce, because no large AI GPU cluster has yet completed a full multi-year depreciation and resale cycle, leaving lenders unable to confidently price the collateral. The main uncertainty is how much of this is manageable market discipline working as intended versus an early symptom of a larger, poorly disclosed structural fragility.

# Research Question / Why Now

**Primary question:** Does Nvidia's push to mobilize over $500 billion in third-party financing for AI compute infrastructure solve a genuine capital-availability constraint on the AI buildout, or does it primarily redistribute and obscure credit risk that regulators (BIS) and credit markets (Nvidia's own CDS spreads) are already flagging as a systemic vulnerability?

**Sub-questions:**
- Is capital availability -- rather than chips, packaging, or power -- becoming a binding constraint on further AI infrastructure buildout?
- What is the actual structure of Nvidia's $500 billion financing platforms, and whose balance sheet bears the credit risk?
- How does this financing push relate to the broader "circular financing" concerns flagged by the BIS and short sellers such as Michael Burry?
- What does the GPU depreciation and residual-value debate imply about the quality of AI compute as loan collateral?
- What would falsify the thesis that credit-risk-underwriting capacity, not capital quantity, is the real constraint?

**Why now:** Nvidia's August 10, 2026 announcement of financing platforms with Apollo, BlackRock, Blackstone, Brookfield, Goldman Sachs and KKR to mobilize over $500 billion of third-party capital for AI compute infrastructure, amid the Bank for International Settlements' June 2026 Annual Economic Report flagging AI "circular financing" as a top financial-stability risk and Nvidia's five-year credit default swap spread hitting a record 82 basis points on July 27, 2026.

**Thesis:** Nvidia's push to mobilize over $500 billion in third-party financing does not resolve a capital-quantity bottleneck -- global private credit and alternative-asset capacity is abundant and readily deployed -- but it does not resolve the harder constraint either: credible, arm's-length underwriting capacity for AI compute as loan collateral remains scarce because no large AI GPU cluster has yet completed a full multi-year depreciation and resale cycle, leaving lenders, regulators (BIS), and credit markets (Nvidia's own record CDS spread) unable to price the risk with confidence, while Nvidia's simultaneous role as chip vendor, prospective guarantor, and financing orchestrator is what critics label "circular financing."

# Known Facts

- On August 10, 2026, Nvidia announced memoranda of understanding with six financial institutions -- Apollo, BlackRock, Blackstone, Brookfield, Goldman Sachs and KKR -- to establish separate AI compute infrastructure financing platforms intended to mobilize over $500 billion of third-party capital over time; the arrangements are structured as independent platform targets rather than a single jointly capitalized vehicle, and remain subject to execution of final agreements. _(evidence: ev-1, ev-3)_
- The six financial partners are structured to independently underwrite and deploy capital through their own platforms rather than through a jointly guaranteed vehicle; Bank of America analyst Vivek Arya characterized the arrangement as a pivot away from vendor financing that keeps the capital-commitment burden with the consortium rather than on Nvidia's own balance sheet. _(evidence: ev-3)_
- Nvidia's five-year credit default swap spread hit a record 82 basis points on July 27, 2026 -- its largest one-day jump since the contracts began active trading in November 2025 -- up from roughly 40 basis points earlier in the summer, coinciding with reports that Nvidia's total AI infrastructure arrangements could exceed $750 billion, including a partnership with SK Group valued at more than $500 billion and discussions of up to a $250 billion payment guarantee for OpenAI's Ohio data-center lease. _(evidence: ev-4, ev-5)_
- The Bank for International Settlements' June 2026 Annual Economic Report named an AI-capex bust and a "circular financing" collapse among its top financial-stability risks, stating that the five largest hyperscalers are on pace to spend more than $1 trillion combined on AI-related capital expenditure across 2025-2026, a sum the BIS says already outpaces their earnings and free cash flow and is forcing some to issue debt to cover the gap. _(evidence: ev-2)_
- The BIS report specifically flagged circular financing arrangements in which hyperscalers take equity stakes in AI labs that then commit to buying chips or compute from the same hyperscaler, warning that the terms of such deals are typically poorly disclosed and carry the risk of the same underlying asset being pledged multiple times. _(evidence: ev-2)_
- Nvidia was initially reported (July 27, 2026) to be weighing a payment guarantee of up to $250 billion for OpenAI's lease of a data center in Ohio and was separately in discussions to provide up to $350 billion in financing tied to OpenAI's purchases of Nvidia semiconductors -- a figure distinct from the data-center lease/construction guarantee and covering the chips themselves. _(evidence: ev-9, ev-5, ev-11)_
- That Ohio guarantee was scaled back twice within the research window: the Wall Street Journal reported on August 14, 2026 that Nvidia had cut the planned guarantee to less than $120 billion, and when Nvidia and OpenAI signed the partnership on August 17, 2026 the final guarantee settled at up to $105 billion -- less than half the roughly $250 billion originally discussed -- covering the opening phase (about 5 gigawatts) of OpenAI's Ohio data-center campus developed with SoftBank-backed SB Energy, and backstopping lease/power payments and the value of completed infrastructure if OpenAI were to default. _(evidence: ev-10)_
- Multiple reports characterized the original $250 billion guarantee discussion as necessary because OpenAI does not hold an investment-grade credit rating and was projected to lose approximately $14 billion in 2026 on roughly $25 billion in revenue, meaning conventional debt markets and banks were unwilling to finance the Ohio campus directly at the required scale; Nvidia's own credit standing was substituted for OpenAI's so lenders could price the debt against Nvidia rather than OpenAI. _(evidence: ev-11)_
- Hyperscalers' collective US dollar bond debt more than doubled to over $360 billion in the year following September 2025, with incremental debt as a share of capital expenditure rising from about 9% in fiscal 2024 to about 32% in the twelve months before June 2026, taking aggregate hyperscaler debt to roughly $700 billion; BofA analysts expect the largest hyperscalers to borrow roughly $140 billion annually over the next three years, a figure that could exceed $300 billion annually. _(evidence: ev-7)_
- Short seller Michael Burry has published an analysis estimating hyperscalers will collectively understate depreciation expense by roughly $176 billion between 2026 and 2028, projecting Oracle would overstate earnings by roughly 27% and Meta by roughly 21% by 2028 under his depreciation-schedule assumptions; industry data providers report Nvidia H100 GPUs retaining roughly 50-70% of value at three years, a figure Burry and other critics dispute as too high. _(evidence: ev-6)_
- Jensen Huang has publicly rejected the "circular financing" characterization of Nvidia's dealmaking, telling CNBC that Nvidia's chips are an "investable asset" and calling the idea that its arrangements are circular "ridiculous," while Bernstein analyst Stacy Rasgon said the new financing platforms will "clearly fuel circular concerns." _(evidence: ev-3)_

# Reasonable Inferences

- Because Nvidia's new financing platforms are structured as six independent, uncommitted memoranda of understanding rather than a single funded vehicle, and because their stated purpose is explicitly to move AI-infrastructure lending off Nvidia's own balance sheet and onto those of large alternative-asset managers, the arrangement looks less like Nvidia solving a shortage of available capital and more like Nvidia and its financial partners redistributing exposure to credit risk that markets are already re-pricing, consistent with the BIS's warning that circular AI financing structures are poorly disclosed. _(evidence: ev-1, ev-3, ev-4, ev-2)_
- Because global private credit and alternative-asset assets under management are large relative to the $500 billion platform target, and because the six partner firms are financial institutions rather than physical-capacity providers, capital itself does not appear to be the classical scarce, hard-to-add resource that CoWoS packaging or grid power represent; the harder constraint is that GPUs are a contested, fast-depreciating collateral asset, and lenders' willingness to underwrite AI-infrastructure debt against that collateral -- not the nominal quantity of capital available -- is what the platforms are actually trying to expand. _(evidence: ev-1, ev-6, ev-7)_
- Because Nvidia is simultaneously the equipment vendor, a prospective guarantor of customer leases (the reported OpenAI Ohio backstop), and now an orchestrator of third-party financing for its own customers' purchases, its financial exposure to a downturn in AI demand is more entangled with its customers' creditworthiness than a simple arm's-length supplier relationship would be -- the structural basis for the "circular financing" concern that regulators and short sellers are raising. _(evidence: ev-1, ev-4, ev-5, ev-2)_
- The roughly 58% cut to Nvidia's OpenAI Ohio guarantee between the initial ~$250 billion figure reported July 27 and the signed $105 billion figure on August 17 -- occurring within a three-week window and reportedly following investor pushback over balance-sheet risk concentration -- is early, direct evidence that willingness to underwrite AI-infrastructure credit risk is genuinely limited in practice, not merely a theoretical concern; this supports the thesis that underwriting capacity, not the nominal quantity of available capital, is the binding constraint. _(evidence: ev-5, ev-10)_

# Unknowns

- The final, legally binding terms of the six financing platforms -- including specific per-partner allocation amounts, interest rates, collateral structures, and any Nvidia guarantees -- have not been disclosed and remain subject to execution of definitive agreements.
- How much of the widely reported "$750 billion" figure around Nvidia's dealmaking represents genuinely new, incremental financing versus re-stated or overlapping prior commitments (e.g., the SK Group partnership and the OpenAI Ohio guarantee) is not independently verifiable from public disclosures.
- Actual realized resale and residual values for retired AI GPU clusters at three-plus years of age are not yet observable at scale, since the current generation of large AI training clusters has not yet reached that age; both Burry's bear-case depreciation estimates and industry bull-case retention estimates are projections, not realized outcomes.
- Whether the BIS's warned "circular financing collapse" scenario would require only a moderate AI demand slowdown or a more severe shock to be triggered is not quantified in the report.

# Core Mechanism

The AI buildout's capital needs have grown faster than hyperscalers' own cash flow can fund, pushing them toward debt and, increasingly, toward third-party financing structures orchestrated by Nvidia itself. But global capital supply is not scarce: alternative-asset managers command trillions in deployable assets, and Nvidia's six new financing platforms can, in principle, be stood up in months, not years -- nothing like the multi-year lead times that gate physical bottlenecks such as advanced packaging or grid power. The actual constraint sits one level deeper: lenders need to price the collateral backing this debt, and that collateral is AI GPUs -- an asset class with no track record. No large AI training cluster has yet gone through a full multi-year depreciation and resale cycle, so nobody has observed real-world loss-given-default data for GPU-backed loans. That gap in trackable history is precisely why OpenAI, unprofitable and without an investment-grade rating, could not raise debt for its Ohio campus on its own, and why Nvidia had to substitute its own credit standing to make the financing possible in the first place. It is also why that substitution did not hold at its original scale: within three weeks, investor pushback forced Nvidia's guarantee down from roughly $250 billion under discussion to $105 billion signed. This is the defining mechanism of the underwriting-capacity bottleneck: demand for credit against AI compute is rising fast, the supply of parties willing to hold that specific risk is thin and skittish, substitutes for a genuine track record don't exist yet, and the entity forced to bridge the gap -- Nvidia -- becomes financially entangled with the same customers whose chip purchases determine its own revenue.

# Industry Chain

| Node | Role | Major players | Pricing power | Supply elasticity | Substitutability |
| --- | --- | --- | --- | --- | --- |
| Alternative asset managers / private credit (capital providers) | Upstream | Apollo, BlackRock, Blackstone, Brookfield, Goldman Sachs, KKR | Medium | High | Easy |
| GPU / AI accelerator supply | Components | Nvidia | High | Low | Hard |
| AI compute infrastructure operators (hyperscalers, neoclouds) | Infrastructure | Microsoft, Google, Amazon, Meta, Oracle, CoreWeave | Medium | Medium | Medium |
| Frontier AI labs (compute buyers / lease counterparties) | Platform | OpenAI, Anthropic | Low | Medium | Medium |

# Bottleneck Analysis

| Node | Demand | Supply elasticity | Substitutability | Pricing power | Opportunity | Classification |
| --- | --- | --- | --- | --- | --- | --- |
| Third-party capital for AI infrastructure financing | Extreme | High | Easy | Low | 3 | Growth Area |
| Credit-risk underwriting capacity for AI compute as loan collateral | High | Low | Hard | Medium | 4 | Structural Bottleneck |

- **Third-party capital for AI infrastructure financing**: Demand for AI-infrastructure financing is extreme, but global private-credit and alternative-asset capacity is large and can be committed on a timescale of months rather than years, and many providers can substitute for one another; capital quantity is not the classical hard-to-add resource, so this node does not qualify as a structural bottleneck despite the extreme demand.
- **Credit-risk underwriting capacity for AI compute as loan collateral**: Demand for credible underwriting of GPU-backed debt is rising fast with the AI buildout, but the supply of underwriting capacity willing and able to price this risk is low because no large AI GPU cluster has yet completed a full multi-year depreciation and resale cycle, leaving no established loss-given-default data; there is no ready substitute risk model to borrow from other asset classes. The clearest direct evidence: conventional debt markets and banks reportedly declined to finance OpenAI's Ohio campus directly because OpenAI lacks an investment-grade rating, forcing Nvidia to substitute its own credit standing, and Nvidia's own guarantee was then cut by roughly 58% (from ~$250B discussed to $105B signed) within three weeks after investor pushback -- alongside the BIS's warning and Nvidia's record CDS spread, this corroborates that underwriting capacity, not the nominal quantity of capital, is where the strain concentrates.

# Key Metrics

| Metric | Value | Unit | Period | Growth | Source |
| --- | --- | --- | --- | --- | --- |
| Target third-party capital to be mobilized by Nvidia's six financing platforms | 500 | USD billion (target, not committed capital) | announced August 10, 2026 | null | ev-1 |
| Nvidia 5-year credit default swap spread, pre-summer 2026 vs. record | ~40 (pre-summer) vs. 82 (record, July 27, 2026) | basis points | summer 2026 | null | ev-4 |
| Reported total scale of Nvidia AI infrastructure arrangements coinciding with CDS spike | 750 | USD billion | as of July 27, 2026 | null | ev-4 |
| Nvidia's OpenAI Ohio guarantee: initial discussion vs. signed figure | up to 250 (discussed July 27) vs. up to 105 (signed August 17) | USD billion | July 27 - August 17, 2026 | -58% from initial discussed figure to signed figure | ev-10 |
| Nvidia financing under discussion tied to OpenAI's Nvidia chip purchases | up to 350 | USD billion | as of 2026 (under discussion) | null | ev-11 |
| Combined 2025-2026 AI capital expenditure, five largest hyperscalers | more than 1,000 | USD billion | 2025-2026 combined | null | ev-2 |
| Hyperscaler collective US dollar bond debt growth | more than doubled to over 360 | USD billion | September 2025 to mid-2026 | null | ev-7 |
| Incremental hyperscaler debt as share of capital expenditure | 9 (FY2024) to 32 (LTM before June 2026) | percent | FY2024 vs. LTM before June 2026 | null | ev-7 |
| Aggregate hyperscaler total debt | 700 | USD billion (approximate) | as of mid-2026 | null | ev-7 |
| Estimated hyperscaler depreciation understatement (Michael Burry analysis, 2026-2028) | 176 | USD billion | 2026-2028 (projection) | null | ev-6 |
| OpenAI projected net loss vs. revenue, 2026 | -14 (loss) on 25 (revenue) | USD billion | 2026 (projection) | null | ev-11 |

# Competition

| Name | Kind | Note |
| --- | --- | --- |
| SK Group | indirect alternative | Separately reported as a more-than-$500-billion Nvidia partnership distinct from the six-asset-manager financing platforms; contributes to the aggregate "$750 billion" figure that unsettled credit markets in July 2026. |
| AMD (merchant GPU alternative) | direct competitor | Competes for the same hyperscaler AI-accelerator demand that underlies the financing arrangements studied here, though this research did not gather AMD-specific financing-platform evidence. |
| In-house hyperscaler balance-sheet financing (self-funded capex via cash flow and direct bond issuance) | status quo | The prior default path for funding AI infrastructure before third-party financing platforms; hyperscalers have already been issuing more debt directly, per the evidence gathered. |

# Financial / Valuation

_Nvidia company profile: fabless AI-accelerator design and sales business, increasingly also orchestrating and guaranteeing third-party financing for customers; no gross margin, operating margin, or cost-structure figures were gathered in this research pass._

_Valuation not performed: current market price, diluted share count, and full financial statements were not gathered in this research pass._

# Catalysts

- Execution of definitive agreements for the six Nvidia financing platforms with disclosed terms
- Nvidia's next quarterly earnings call and SEC filings disclosing guarantee and financing-commitment exposure
- Further BIS or IMF commentary on AI-related financial-stability risk
- Continued movement in Nvidia's and major hyperscalers' credit default swap and bond spreads

# Strongest Bear Case

- **Economics**: If AI demand and revenue growth continue to meet or exceed hyperscaler guidance, the elevated capex and debt levels this research treats as risky could simply reflect a justified, self-funding infrastructure buildout, and Nvidia's financing platforms could prove to be ordinary market-based project finance rather than a symptom of fragility.
- **Valuation**: Nvidia's credit default swap spread, even at its record 82 basis points, remains low in absolute terms and does not itself indicate elevated default probability; credit markets may be pricing idiosyncratic headline risk rather than a genuine deterioration in Nvidia's credit quality.
- **Regulation**: BIS and IMF commentary is advisory, not binding; central banks and international bodies have flagged AI-related financial risks before without triggering intervention, and the report's warnings may not translate into any near-term change in market behavior or credit availability.
- **Execution**: The six-partner financing platforms are structured as independent, arm's-length underwriting relationships rather than joint guarantees; if the disclosed terms bear this out, risk would be distributed across large, well-capitalized institutions rather than concentrated in a fragile circular loop, undercutting the systemic-risk framing central to this research.
- **Economics**: Nvidia's roughly 58% cut to its OpenAI Ohio guarantee (from ~$250 billion discussed to $105 billion signed) within three weeks, reportedly in direct response to investor pushback, could be read as evidence that the market is functioning correctly -- pricing and constraining excessive risk-taking before it accumulates -- rather than evidence of an unpriced, building systemic vulnerability.

# Kill Conditions

| Condition | Metric | Threshold | Window | Impact |
| --- | --- | --- | --- | --- |
| Definitive financing-platform agreements are disclosed with fully transparent, conventional, arm's-length terms that do not depend on Nvidia guarantees, Nvidia equity stakes in borrowers, or overlapping collateral | Disclosed terms of the six financing platforms | Publicly disclosed agreement terms show no Nvidia guarantee or equity linkage to borrowing counterparties | next 2-3 quarters | invalidate |
| Nvidia and hyperscaler credit-risk pricing normalizes despite continued AI capex growth | Nvidia 5-year CDS spread and hyperscaler investment-grade bond spreads | Sustained normalization to roughly pre-2026 levels (around 40 basis points or below for Nvidia CDS) for at least one full quarter | next 2-3 quarters | weaken |
| Realized secondary-market resale prices for 3+ year old AI GPU clusters come in at or above industry bull-case retention estimates | Observed secondary-market GPU resale values as a percentage of original price | Verified resale transactions at or above roughly 50% of original value at three years | next 12-18 months | weaken |

# 30–90 Day Validation

| Event | Window | Supports if | Weakens if | Monitor |
| --- | --- | --- | --- | --- |
| Execution of definitive agreements for Nvidia's six AI compute-infrastructure financing platforms | Q4 2026 - H1 2027 | Agreements are signed with terms showing Nvidia guarantees, equity stakes, or other circular linkages to borrowing counterparties | Agreements are signed with fully arm's-length, diversified, transparent terms with no Nvidia guarantee exposure | NVIDIA Newsroom (nvidianews.nvidia.com) and partner-firm investor communications (Apollo, BlackRock, Blackstone, Brookfield, Goldman Sachs, KKR) |
| Nvidia quarterly earnings calls and SEC filings disclosing guarantee and financing-commitment exposure | November 2026 and February 2027 | Nvidia discloses growing guarantee, financing, or equity-stake commitments to AI-lab and hyperscaler customers | Nvidia discloses shrinking or capped financing-related exposure, or clarifies prior reported figures were overstated | Nvidia investor relations / SEC filings |
| Next Bank for International Settlements or IMF financial-stability commentary on AI-related credit risk | Q4 2026 (BIS quarterly review) / October 2026 (IMF Global Financial Stability Report) | BIS or IMF reiterate or escalate warnings about AI circular financing and hyperscaler debt | BIS or IMF assess AI financing risk as contained or improving | bis.org and imf.org publications |
| Continued movement in Nvidia and major hyperscaler credit default swap and bond spreads | ongoing, next 2-3 quarters | Spreads remain elevated or widen further | Spreads normalize toward pre-2026 levels | Credit market data and financial press coverage of CDS/bond spreads |
| First large-scale secondary-market resale or retirement of 3+ year old frontier AI GPU clusters | H2 2026 - 2027 | Resale values come in materially below industry retention estimates, consistent with the depreciation bear case | Resale values meet or exceed industry retention estimates | Secondary GPU marketplace data and industry analyst reports |

# Final Assessment

**Verdict: VALIDATE** (confidence: medium)

Verdict VALIDATE: the topic merits continued research with defined validation events rather than an immediate deep commitment. The evidence gathered supports a disciplined, non-inflated bottleneck finding: aggregate capital supply for AI infrastructure is not structurally scarce, so it would be a mistake to label Nvidia's $500 billion financing push a solution to a classic resource bottleneck. What the evidence does support is a narrower, better-defined constraint -- credit-risk underwriting capacity for GPU-backed debt -- corroborated by a primary-source financial-stability body (the BIS), by market pricing (Nvidia's own record CDS spread), and by a concrete, dated event inside the research window itself: Nvidia's OpenAI Ohio guarantee being cut by roughly 58% within three weeks after investor pushback. That last data point cuts both ways for the verdict -- it could indicate healthy market discipline containing risk before it compounds, or an early tremor in a still-growing structure of interlocking guarantees. The defined kill conditions and validation events, particularly the disclosure of definitive platform terms and the next round of BIS/IMF commentary, should clarify within one to two quarters which reading is correct.

# Sources

- `ev-1` [primary] [NVIDIA Newsroom: "NVIDIA Partners With Apollo, BlackRock, Blackstone, Brookfield, Goldman Sachs and KKR to Establish AI Compute Infrastructure Financing Platforms to Mobilize Over $500 Billion of Third-Party Capital"](https://nvidianews.nvidia.com/news/nvidia-partners-with-apollo-blackrock-blackstone-brookfield-goldman-sachs-and-kkr-to-establish-ai-compute-infrastructure-financing-platforms-to-mobilize-over-500-billion-of-third-party-capital) (2026-08-10)
- `ev-2` [primary] [Bank for International Settlements, Annual Economic Report 2026](https://www.bis.org/publ/arpdf/ar2026e.pdf) (2026-06-28)
- `ev-3` [secondary] [CNBC: "Nvidia lines up $500 billion in financing as CEO Jensen Huang tells CNBC his chips are investable asset" / "Nvidia is trying to quiet circular financing accusations. Wall Street is unsure it will"](https://www.cnbc.com/2026/08/10/nvidia-wall-street-asset-managers-500-billion-ai-push.html) (2026-08-10)
- `ev-4` [secondary] [Bloomberg: "Nvidia's $750 Billion in Deals Reignite Circular AI Fears"](https://www.bloomberg.com/news/articles/2026-07-27/nvidia-s-750-billion-deals-revive-fear-of-ai-circular-financing) (2026-07-27)
- `ev-5` [secondary] [Axios: "Nvidia reignites 'circular' AI concerns as it weighs OpenAI financing guarantee"](https://www.axios.com/2026/07/27/nvidia-openai-financing-ai-jensen-huang-ssi) (2026-07-27)
- `ev-6` [discovery] [24/7 Wall St.: "Michael Burry Sounds the Alarm Again: AI Is a Circular Financing Web With Nvidia In the Middle"](https://247wallst.com/investing/2026/08/13/michael-burry-sounds-the-alarm-again-ai-is-a-circular-financing-web-with-nvidia-in-the-middle/) (2026-08-13)
- `ev-7` [secondary] [FactSet Insight: "Hyperscalers Tap External Financing as AI Capex Outruns Cash Flow"](https://insight.factset.com/hyperscalers-tap-external-financing-as-ai-capex-outruns-cash-flow) (2026)
- `ev-8` [secondary] [The Motley Fool: "Is Nvidia Engaging in Circular Financing? Some Think So."](https://www.fool.com/investing/2026/08/19/is-nvidia-engaging-in-circular-financing-some-thin/) (2026-08-19)
- `ev-9` [discovery] [BigGo Finance: "Nvidia Pursues $250 Billion Guarantee for OpenAI, Reigniting AI Circular Financing Debate"](https://finance.biggo.com/news/9de80bb7-a45b-4402-b088-df14845969d1) (2026)
- `ev-10` [secondary] [Bloomberg: "Nvidia Will Back First Phase of OpenAI Ohio Project With as Much as $105 Billion"](https://www.bloomberg.com/news/articles/2026-08-17/nvidia-to-invest-up-to-105-billion-for-openai-data-center-in-ohio) (2026-08-17)
- `ev-11` [secondary] [Tech Times: "Nvidia's $250B Guarantee for OpenAI Ohio Campus Proves Debt Markets Said No"](https://www.techtimes.com/articles/321652/20260727/nvidias-250b-guarantee-openai-ohio-campus-proves-debt-markets-said-no.htm) (2026-07-27)
