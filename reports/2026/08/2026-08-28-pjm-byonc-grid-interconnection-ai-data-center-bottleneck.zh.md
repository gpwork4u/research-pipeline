---
title: "PJM「自帶電力」新規：美國電網併網政策，是否已取代設備供應，成為 AI 資料中心的最緊束縛？"
date: "2026-08-28"
slug: "pjm-byonc-grid-interconnection-ai-data-center-bottleneck"
research_type: NEW
topics: ["ai-infrastructure", "energy", "regulation", "data-centers"]
companies: ["PJM Interconnection"]
verdict: "VALIDATE"
confidence: "medium"
primary_question: "PJM 向聯邦能源管理委員會(FERC)提出的「過渡性資源適足服務」(Interim Resource Adequacy Service)暨「自帶新增容量」(BYONC)限電優先框架，是否標誌著美國最大電網從「實體設備短缺」轉向「政策造成的容量分配限制」——而這項限制究竟是持久的結構性瓶頸，還是一項在正式生效前很可能被削弱的爭議性提案？"
---

# 一句話結論

PJM 的限電新規並未創造瓶頸，而是在配給既有、以十年計的美國固定發電容量稀缺，渦輪機交期無法快速化解此稀缺。

# Executive Summary

美國最大電網營運商 PJM 於 2026 年 8 月 13 日向 FERC 提出提案：新增 50MW 以上資料中心若未自行取得發電、合約或已購容量(「BYONC」)，在缺電時將優先於一般用戶被限電。此舉緊隨 FERC 於 2026 年 6 月要求全美六大電網營運商改革大型負載規則之後，且正值 PJM 容量拍賣價格創下每 MW-日 333.44 美元新高、電網首度未能達成可靠度目標之際。真正的限制在更上游：GE Vernova、西門子能源與三菱電力的燃氣渦輪機積壓交期現已長達三至五年。此規則要到 2027 年 6 月才生效，且 PJM 先前已因反彈而軟化過類似的強制性提案，其最終、具拘束力的形式仍存在真實爭議。

# Research Question / Why Now

**主要問題：** 見上方 primary_question。

**子問題：**
- IRAS 對新增 50MW 以上負載有何要求？何謂 BYONC？
- 此政策層與實體設備短缺、渦輪機積壓有何關聯？
- 容量價格漲幅與可靠度缺口多大？需求多少是「真實」、多少是「幻影」？
- 這是 PJM 獨有行動，或 FERC 命令正催生其他地區類似規則？
- 鑑於 PJM 曾軟化強制提案，什麼情況會推翻此論點？

**為何是現在：** PJM 於 8 月 13 日提交 IRAS 與大型負載登記系統，要求 10 月 12 日生效，緊接 Anthropic 與 Nscale 450 億美元電力交易，且容量價格創新高——有別於本研究 2026-08-23 變壓器設備報告的獨立角度。

**論點：** PJM 的限電申請是分配機制，而非稀缺根本成因：真正瓶頸是固定發電容量，證據是價格漲幅逾十倍及史上首次可靠度缺口，渦輪機交期則制約了自建發電路徑。

# Known Facts

- FERC 於 2026 年 6 月 18 日發出立案命令(RM26-4)，給六大電網營運商 60 天證明或改革大型負載規則，涵蓋約 2 億人口。 _(evidence: ev-1, ev-2)_
- PJM 董事會 7 月 27 日指示提交申請；PJM 於 8 月 13 日向 FERC(ER26-3380)提交 IRAS 與大型負載登記系統。 _(evidence: ev-3, ev-4, ev-5, ev-18)_
- IRAS 將「新大型負載」定義為 2027 年 6 月 1 日後併網、單場址達 50MW 以上者；未經 BYONC(自建發電、長期合約或已購容量)覆蓋的需求，將優先被限電。 _(evidence: ev-5, ev-6, ev-7, ev-8)_
- PJM 要求 2026 年 10 月 12 日生效。 _(evidence: ev-6, ev-9)_
- 容量拍賣價格從 2024/25 的 28.92 美元/MW-日，升至 2027/28 創紀錄的 333.44 美元；資料中心佔最近一次拍賣成本約 40%(65 億/164 億美元)。 _(evidence: ev-10, ev-12)_
- 2027/28 拍賣結清容量短少約 6,623MW——據報史上首見。 _(evidence: ev-11)_
- GE Vernova 燃氣設備積壓於 2026 年 Q2 達 116GW(較2025年底83GW增加)，交期最快2031年；西門子能源積壓69GW；三菱電力積壓35GW(去年23GW)。 _(evidence: ev-13, ev-14)_
- Wood Mackenzie 估計，美國資料中心申請的 1,066GW 電力中，僅約 28% 會真正落地。 _(evidence: ev-15)_
- 德州 ERCOT 另於 6 月 18 日核准限電接受規則；僅 Q1 2026 即收 198GW 併網申請。 _(evidence: ev-16)_
- Anthropic 於 8 月 26 日同意六年支付 Nscale 450 億美元，取得西維吉尼亞州 460MW 容量。 _(evidence: ev-17)_
- PJM 先前已因 2025 年反彈，將強制「自帶發電」提案軟化為自願框架。 _(evidence: ev-19)_

# Reasonable Inferences

- 創紀錄容量價格與史上首次可靠度缺口顯示，稀缺早於且獨立於 IRAS 申請存在，該申請只是配給而非創造供給。 _(evidence: ev-10, ev-11)_
- BYONC 亦接受合約或已購容量，鑑於原廠交期長達三至五年，多數新負載很可能無需新建渦輪機即可合規。 _(evidence: ev-5, ev-13, ev-14)_
- 若約 72% 申請電力屬「幻影負載」，PJM 排隊與缺口數字或有膨脹，惟價格與缺口數據顯示今日確有真實缺口。 _(evidence: ev-15, ev-11)_
- PJM 先前由強制轉自願的退讓，加上 FERC 尚待核准及 2027 年 6 月生效日，此規則仍有空間在真正限制專案前被軟化。 _(evidence: ev-6, ev-19)_

# Unknowns

- 截至 8 月 28 日，FERC 是否將核准、修改或駁回 IRAS 申請，尚無來源證實。
- 無來源量化有多少具名專案面臨立即的新大型負載限電風險，相對於獲排除適用。
- MISO、SPP、ISO-NE、NYISO 與 CAISO 是否採行類似框架，仍未有定論。
- PJM 2025 年由強制轉自願的確切細節，僅單一次要來源證實，未獨立確認。
- 本次研究嘗試直接擷取的主要來源均遭研究環境的出口代理伺服器封鎖；事實依據為搜尋結果摘要之交叉比對。

# Core Mechanism

PJM 容量拍賣價格三年內漲逾十倍，且 2027/28 年度拍賣首次未能結清足夠容量滿足可靠度需求——顯示固定、可調度發電容量確實稀缺，獨立於任何單一申請案而存在。三大原廠(GE Vernova、西門子能源、三菱電力)的燃氣渦輪機交期現已達三至五年，新建自用發電難以快速吸收新增 AI 負載。PJM 的 IRAS/BYONC 申請以此為背景，要求新增 50MW 以上負載除非取得容量，否則優先被限電——將風險轉嫁給開發商，而非擴大供給。由於 BYONC 亦接受合約與已購容量，此規則短期效果更接近將既有稀缺容量重新分配給資本雄厚的開發商(如 Anthropic 與 Nscale 交易)，而非直接觸發新建。

# Industry Chain

六個層級由稀缺的上游發電延伸至 AI 運算終端客戶；PJM 位於併網／關稅層，負責分配對上方稀缺層的存取權。

| Node | Role | Major players | Pricing power | Supply elasticity | Substitutability |
| --- | --- | --- | --- | --- | --- |
| 固定發電容量 | Upstream | GE Vernova, Siemens Energy, Mitsubishi Power, Constellation | High | Low | Hard |
| 併網與關稅管理 | Infrastructure | PJM, FERC, MISO, ERCOT, SPP, ISO-NE, NYISO, CAISO | Medium | Medium | Medium |
| 場內自建發電 | Infrastructure | GE Vernova, Siemens Energy, Mitsubishi Power | High | Low | Medium |
| AI 資料中心開發 | Platform | Nscale, Volta Infra, hyperscalers | Medium | Medium | Medium |
| AI 運算/GPU 租賃 | Application | Nvidia, Anthropic, OpenAI | Medium | Medium | Medium |
| AI 運算終端客戶 | Customer | AI labs, enterprises | Low | -- | -- |

# Bottleneck Analysis

依嚴格測試,僅固定發電容量本身符合結構性瓶頸;政策層與自建發電層屬於具部分替代方案的成長區。

| Node | Demand | Supply elasticity | Substitutability | Pricing power | Opportunity | Classification |
| --- | --- | --- | --- | --- | --- | --- |
| 固定發電容量 | Extreme | Low | Hard | High | 5 | Structural Bottleneck |
| 併網/關稅管理(IRAS, RM26-4) | High | Medium | Medium | Medium | 3 | Growth Area |
| 場內自建發電 | Extreme | Low | Medium | High | 4 | Growth Area |

- **發電**：需求極高、彈性低、替代性難——符合嚴格測試。
- **併網**：需求高，但彈性中等且替代性中等(可改選其他電網)——屬成長區。
- **自建發電**：需求極高，但因 BYONC 亦接受合約——替代性中等，屬成長區。

# Key Metrics

| Metric | Value | Unit | Period | Growth | Source |
| --- | --- | --- | --- | --- | --- |
| PJM 大型負載門檻 | 50 | MW(單一場址) | IRAS 申請 | -- | ev-6 |
| IRAS 要求生效日 | 2026-10-12 | 日期 | 2026年8月13日提交 | -- | ev-6 |
| 新大型負載生效日 | 2027-06-01 | 日期 | IRAS 提案 | -- | ev-7 |
| PJM 容量價格,2024/25 | 28.92 | 美元/MW-日 | 2024/25 | -- | ev-10 |
| PJM 容量價格,2027/28 | 333.44 | 美元/MW-日 | 2027/28 | 創新高,約11.5倍 | ev-10 |
| PJM 可靠度缺口 | 6,623 | MW | 2027/28拍賣 | 史上首見 | ev-11 |
| 資料中心佔拍賣成本比例 | 40 | % | 最近一次拍賣 | -- | ev-12 |
| GE Vernova 燃氣訂單積壓 | 116 | GW | 2026年Q2 | 較83GW增加 | ev-13 |

# Competition

| Name | Kind | Note |
| --- | --- | --- |
| 長期購電合約 | indirect alternative | 無需新建發電即可滿足 BYONC,如 Anthropic-Nscale 案例。 |
| 已購 PJM 市場容量 | indirect alternative | 重新分配既有稀缺容量,而非新增供給。 |
| 其他區域電網／場外選址 | indirect alternative | ERCOT 有自身不同的限電規則;開發商可繞過 PJM。 |
| 儲能電池系統 | indirect alternative | 可部分符合 BYONC,但相較固定發電仍受時長與規模限制。 |

# Financial / Valuation

_PJM 為非營利電網營運商,並非上市公司;相關財務訊號為市場結清規模:其最近一次容量拍賣結清總額達 164 億美元,其中資料中心約佔 65 億美元(40%)。(evidence: ev-12)_

_未進行估值:此為市場結構/監管議題,而非單一公司財報分析。_

# Catalysts

- FERC 就 PJM ER26-3380 IRAS/BYONC 申請的裁決,預期約在要求的 2026 年 10 月 12 日前後
- MISO、SPP、ISO-NE、NYISO 與 CAISO 依 FERC RM26-4 命令提交的合規申請
- PJM 下一次基本住宅拍賣(Base Residual Auction)結果
- GE Vernova、西門子能源與三菱電力就渦輪機積壓與交期的財報評論
- PJM 大型負載登記系統上線後的數據

# Strongest Bear Case

- **Regulation**：PJM 已因 2025 年反彈軟化過一次強制性自帶發電提案;FERC 同樣可能修改或駁回本次申請。
- **Demand**：Wood Mackenzie 估計美國申請電力中約 72% 屬「幻影負載」,不會真正落地。
- **Execution**：此規則要到 2027 年 6 月才生效,且僅涵蓋新負載,留下約十個月時間取得排除適用或 BYONC。
- **Supply**：BYONC 亦接受合約或已購容量,故渦輪機交期未必制約多數開發商的合規進程。
- **Competition**：開發商可將新負載轉向其他區域電網或場外選址,規避 PJM 特有的政策風險。

# Kill Conditions

| Condition | Metric | Threshold | Window | Impact |
| --- | --- | --- | --- | --- |
| FERC 駁回/削弱 IRAS | FERC 就 ER26-3380 之裁決 | 否決強制限電優先或 BYONC 連結 | 未來1-2季 | invalidate |
| 可靠度缺口收斂 | PJM 拍賣結清量對比需求 | 完全結清,無缺口 | 未來2次拍賣週期 | weaken |
| 渦輪機交期縮短 | 原廠公告交期 | 2家以上主要原廠低於2年 | 未來2-3年 | weaken |
| 大型負載繞過 PJM | 各區域電網併網排隊佔比 | PJM 佔比逐季明顯下滑 | 未來3-4季 | weaken |
| 實際負載遠低於預測 | 負載預測校對研究 | 連續2個以上規劃週期明顯低於預測 | 未來2-3年 | invalidate |

# 30–90 Day Validation

| Event | Window | Supports if | Weakens if | Monitor |
| --- | --- | --- | --- | --- |
| FERC 就 ER26-3380 之裁決 | 2026年Q4 | 大致依原案核准 | 遭駁回/延後/改為自願性 | FERC.gov |
| 其他區域電網 RM26-4 合規申請 | 2026下半年-2027年 | 採行類似框架 | 其他地區規則明顯較弱 | 各區域電網/FERC 申請文件 |
| PJM 下一次容量拍賣 | 約2027年 | 缺口持續,價格維持高檔 | 缺口收斂,價格下滑 | PJM Inside Lines |
| 渦輪機原廠財報 | 2026年Q4/2027年Q1 | 積壓持續成長,交期不變 | 積壓成長停滯 | 各原廠投資人關係 |
| 大型負載登記系統數據 | 持續 | 大量負載未預先取得 BYONC | 多數負載已預先取得 BYONC | PJM Large Load Registry |

# Final Assessment

**Verdict: VALIDATE** (confidence: medium)

PJM 境內固定發電容量符合本研究嚴格的結構性瓶頸測試:需求極高且持續成長、因渦輪機多年交期而供給彈性低,且就電網可靠度而言替代性難。PJM 的 IRAS/BYONC 申請,較適合理解為對此既有稀缺的配給回應,而非其成因;由於 BYONC 亦接受合約與已購容量,其短期效果更像是將容量重新分配給資本雄厚的開發商,而非直接觸發新增發電。此申請案的持久性仍屬真正未定之數:FERC 尚未裁決、具拘束力機制要到 2027 年 6 月才適用,且 PJM 有軟化類似提案的紀錄——應持續以 FERC 案卷與拍賣數據驗證,而非給予更強烈結論。

# Sources

- `ev-1` [primary] [Federal Energy Regulatory Commission: "Interconnection of Large Loads to the Interstate Transmission System (Docket No. RM26-4-000)"](https://www.ferc.gov/rm26-4) (2026-06-18)
- `ev-2` [secondary] [Day Pitney LLP: "FERC Issues Show Cause Orders to Six RTOs/ISOs on Large Load Integration"](https://www.daypitney.com/ferc-issues-show-cause-orders-to-six-rtos/isos-on-large-load-integration) (2026-06)
- `ev-3` [primary] [PJM Interconnection: Board of Managers decisional letter on CIFP, Reliability Backstop Procurement and Connect and Manage](https://www.pjm.com/-/media/DotCom/about-pjm/who-we-are/public-disclosures/2026/20260727-board-decisional-letter-on-cifp-reliability-backstop-procurement-and-connect-and-manage.pdf) (2026-07-27)
- `ev-4` [secondary] [Foley Hoag LLP: "PJM Board Directs FERC Filing on Reliability Backstop Procurement and Interim Resource Adequacy Service"](https://foleyhoag.com/news-and-insights/blogs/energy-and-climate-counsel/2026/july/pjm-board-directs-ferc-filing-on-reliability-backstop-procurement-and-interim-resource-adequacy-serv/) (2026-07)
- `ev-5` [primary] [PJM Interconnection: FERC eTariff filing, Docket ER26-3380-000](https://www.pjm.com/pjmfiles/directory/etariff/FercDockets/9806/20260731-er26-3380-000.pdf) (2026-07-31)
- `ev-6` [secondary] [MLQ News: "PJM proposal would put new 50 MW-plus data centers first in line for curtailment during shortages"](https://mlq.ai/news/pjm-proposal-would-put-new-50-mw-plus-data-centers-first-in-line-for-curtailment-during-shortages/) (2026-08)
- `ev-7` [secondary] [Data Center Frontier: "PJM's New Data Center Power Equation"](https://www.datacenterfrontier.com/energy/article/55397507/pjms-new-data-center-power-equation) (2026-08)
- `ev-8` [secondary] [Tom's Hardware: "America's largest grid wants to cut power to new data centers first during shortages"](https://www.tomshardware.com/tech-industry/data-centers/new-data-centers-on-americas-largest-grid-face-first-in-line-blackouts-unless-they-bring-their-own-power) (2026-08)
- `ev-9` [secondary] [Virginia Mercury: "New proposal from grid operator PJM would require data centers to bring their own power"](https://virginiamercury.com/2026/08/27/new-proposal-from-grid-operator-pjm-would-require-data-centers-to-bring-their-own-power/) (2026-08-27)
- `ev-10` [secondary] [IGS Energy: "PJM Capacity Auction Hits Record $329/MW-Day: Business Impact Guide"](https://www.igs.com/energy-resource-center/energy-101/capacity-auction-results--what-it-means-for-your-business-s-electric-bill) (2026)
- `ev-11` [secondary] [Introl: "PJM's 6GW Capacity Shortfall"](https://introl.com/blog/pjm-grid-crisis-2027-data-center-capacity-shortfall) (2026)
- `ev-12` [secondary] [Utility Dive: "Data centers were 40% of PJM capacity costs in last auction: market monitor"](https://www.utilitydive.com/news/data-centers-pjm-capacity-auction/808951/) (2026)
- `ev-13` [secondary] [Energy News Beat: "GE Vernova's Gas Turbine Backlog Hits 116 GW. What Does This Mean for the AI Market?"](https://energynewsbeat.co/ai/ge-vernovas-gas-turbine-backlog-hits-116-gw-what-does-this-mean-for-the-ai-market/) (2026-07)
- `ev-14` [secondary] [OilPrice.com: "The Gas Turbine Shortage Just Became AI's Biggest Constraint"](https://oilprice.com/Energy/Energy-General/The-Gas-Turbine-Shortage-Just-Became-AIs-Biggest-Constraint.amp.html) (2026)
- `ev-15` [secondary] [Bloomberg: "Most Power Sought for US Data Centers Will Never Materialize"](https://www.bloomberg.com/news/articles/2026-08-12/most-electricity-sought-for-ai-data-centers-in-us-will-never-materialize) (2026-08-12)
- `ev-16` [secondary] [Utility Dive: "Texas, facing 438 GW queue, approves initial large-load interconnection process"](https://www.utilitydive.com/news/texas-facing-438-gw-queue-approves-initial-large-load-interconnection-pro/823367/) (2026-06)
- `ev-17` [secondary] [CNBC: "Anthropic and Nscale strike $45 billion cloud deal, sources say"](https://www.cnbc.com/2026/08/26/anthropic-and-nscale-strike-45-billion-cloud-deal-sources-say.html) (2026-08-26)
- `ev-18` [secondary] [PA Environment Digest Blog: "PJM Formally Submits FERC Proposal On Connecting Data Centers That Bring And Don't Bring Their Own Power Supplies"](http://paenvironmentdaily.blogspot.com/2026/08/pjm-formally-submits-ferc-proposal-on.html) (2026-08)
- `ev-19` [secondary] [Citizens Utility Board: "PJM enlists states in plan to hold Big Tech accountable for data center costs"](https://www.citizensutilityboard.org/blog/2026/08/21/pjm-enlists-states-in-plan-to-hold-big-tech-accountable-for-data-center-costs/) (2026-08-21)
