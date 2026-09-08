---
title: "永久化學物質的冷卻瓶頸：3M 退出 PFAS 是否威脅 AI 兩相冷卻的未來？"
date: "2026-09-08"
slug: "pfas-cooling-fluid-ai-data-center-bottleneck"
research_type: NEW
topics: ["ai-infrastructure", "data-centers", "materials", "regulation", "thermal-management"]
companies: ["3M", "Chemours", "Vertiv"]
verdict: "VALIDATE"
confidence: "medium"
primary_question: "3M 退出 PFAS 介電冷卻液製造(Novec/Fluorinert),加上 EPA 與歐盟 PFAS 法規趨嚴,是否構成 AI 資料中心轉向兩相浸沒式冷卻的真正結構性瓶頸?抑或產業正透過單相直接晶片冷卻與新興 HFO 替代冷卻液快速繞道,使該化學品供應限制從未真正構成束縛?"
---

# 一句話結論

3M 退出 PFAS 使兩相冷卻液供應吃緊,但產業已改用單相方案繞道,尚未構成真正瓶頸。

# Executive Summary

3M 於 2022 年退出 PFAS 製造,使兩相浸沒式冷卻的主要冷卻液供應商消失;2026 年又添 EPA 申報期限調整、歐盟 REACH 限制案推進、以及 Chemours 為 HFO 替代液 Opteon 2P50 簽署量產協議等發展。AI 晶片熱設計功耗攀升(Rubin Ultra 約 3.6kW)使高效冷卻更迫切,但無需介電液的單相直接晶片冷卻已佔液冷市場多數。微軟與 Meta 據報已暫停兩相研發——顯示的是替代,而非短缺束縛。主要不確定性在於時機:機櫃密度攀升速度是否快過替代液量產爬坡速度。

# Research Question / Why Now

**主要問題:** 見前述 front matter。

**子問題:**
- AI 冷卻對兩相 PFAS 冷卻液的實際依賴程度,相較於不需要它的替代方案有多大?
- Chemours 的 Opteon 2P50 是否已具備合格、量產規模的製造能力,或仍處於試驗階段?
- EPA 對資料中心化學品的快速審查立場,是否足以抵銷歐盟 REACH 帶來的壓力?
- 晶片熱設計功耗上升,是否正以具約束力的時程迫使產業採用兩相冷卻?
- 微軟與 Meta 據報暫停兩相冷卻研發,是否已透過迴避方式解決此風險?

**為何是現在:** 2026 年 4 月 13 日聯邦公報通知將 EPA 的 TSCA PFAS 申報期限延至 2026 年 10 月 13 日;ECHA 風險評估委員會於 2026 年 3 月 3 日通過 REACH PFAS 限制案意見,最終諮詢期至 5 月 25 日;Chemours 於 2026 年 5 月與 Navin Fluorine International 簽署量產協議並展開全規模客戶試驗;Vertiv 2026 年第二季財報揭露由 AI 驅動的 150 億美元冷卻設備積壓訂單,同時業界報導冷卻零組件交期達 16 至 24 週。本研究管道先前報告均未檢視冷卻/熱管理化學品這一層面。

**論點:** 3M 退出造成兩相冷卻液供應出現真實但範圍有限的缺口;整體 AI 冷卻市場正透過單相替代方案繞道,故此尚不構成具約束力的結構性瓶頸——但晶片熱設計功耗持續上升,未來可能使其成為瓶頸。

# Known Facts

- 3M 於 2022 年 12 月宣布 2025 年底前全面退出 PFAS,停產兩相浸沒式冷卻核心的 Novec 與 Fluorinert。_(evidence: ev-1, ev-2)_
- Novec 最後下單期限為 2025 年 3 月 31 日;三款關鍵冷卻液現已停產。_(evidence: ev-3)_
- 3M 面臨逾 4,000 件 PFAS 訴訟,並達成 125 億美元和解(2024 年 3 月定案)。_(evidence: ev-5)_
- 據報導微軟與 Meta 已因 PFAS 疑慮暫停兩相冷卻研發。_(evidence: ev-5, ev-6)_
- EPA 的 TSCA PFAS 申報期限延至 2026 年 10 月 13 日。_(evidence: ev-7, ev-8)_
- 現任 EPA 放寬部分 PFAS 飲用水限值,並自 2025 年 10 月起對資料中心化學品啟動快速審查。_(evidence: ev-13, ev-14, ev-15)_
- ECHA REACH PFAS 限制案:委員會 2026 年 3 月通過意見,SEAC 意見預計年底完成。_(evidence: ev-9)_
- Chemours 的 Opteon 2P50 於 2026 年 5 月與 Navin Fluorine 簽署量產協議,並展開全規模試驗。_(evidence: ev-10, ev-11, ev-12)_
- 單相無 PFAS 冷卻約佔市場 55%至 62%;兩相冷卻基數小但成長較快(年複合約 19%)。_(evidence: ev-16)_
- Nvidia Rubin Ultra 熱設計功耗約 3.6kW,VR200 約 5kW;AI 機櫃密度預計達每櫃 250 至 900kW。_(evidence: ev-17)_
- Vertiv 2026 Q2 營收約 32.7 億美元(年增 24.1%),積壓訂單約 150 億美元;冷卻零組件交期 16 至 24 週。_(evidence: ev-18, ev-19)_

# Reasonable Inferences

- 3M 退出加上 Opteon 2P50 仍處早期爬坡,顯示兩相冷卻液短期供給彈性偏低,但整體市場並不依賴此投入。_(evidence: ev-1, ev-10, ev-11, ev-12)_
- 單相冷卻居主導,加上兩大巨頭暫停兩相研發,顯示的是替代而非短缺——未達嚴格需求/替代性門檻。_(evidence: ev-5, ev-16)_
- 熱設計功耗與機櫃密度上升,可能使此限制在 2027-2030 年間更具約束力。_(evidence: ev-17)_
- 美歐法規路徑分歧,可能使美國冷卻液生產所受限制小於歐盟。_(evidence: ev-13, ev-9)_
- 3M 訴訟風險使其重返可能性低;缺口更可能由 Chemours 等新型 HFO 化學品填補。_(evidence: ev-5, ev-10)_

# Unknowns

- 尚無資料量化 AI 資料中心目前兩相對單相冷卻部署的實際佔比。
- Opteon 2P50 的產能、定價與全面上市時間均未揭露。
- REACH 限制案定案後是否豁免介電冷卻液,尚未確認。
- 下世代晶片冷卻參考設計是否預設兩相冷卻,尚未確認。
- 本次嘗試查證的主要來源網域均遭研究環境代理伺服器封鎖;事實陳述依賴搜尋摘要,非直接查證原文。

# Core Mechanism

3M 因訴訟與法規壓力於 2022 年決定退出 PFAS 製造,消除了兩相浸沒式冷卻(極高密度機櫃最有效率的冷卻技術)的含氟冷卻液主要供應商。此舉恰逢 AI 晶片熱輸出攀升之際,2026 年更添 EPA 期限延後、歐盟 REACH 限制案邁向決策等動態。

然而此機制未清楚指向具約束力的瓶頸。多數液冷市場已轉向不需介電液的單相方案,兩大巨頭據報已暫停兩相研發。Chemours 的 Opteon 2P50 已進入量產協議與客戶試驗。真正懸念在於機櫃密度攀升速度是否快過替代液達到商業規模的速度。

# Industry Chain

五個節點串連冷卻液化學品、法規與驅動熱需求的 AI 晶片。

| 節點 | 角色 | 主要業者 | 定價能力 | 供給彈性 | 可替代性 |
| --- | --- | --- | --- | --- | --- |
| PFAS/HFO 介電冷卻液化學品與製造 | 上游 | 3M(已退出)、Chemours、Navin Fluorine | 中 | 低 | 中 |
| 冷卻設備與 CDU/機櫃硬體製造 | 基礎設施 | Vertiv、Schneider/Motivair、Submer、Zutacore | 中 | 中 | 中 |
| 冷卻技術採用層 | 基礎設施 | 微軟、Meta、Google、整合商 | -- | 高 | 易 |
| 驅動熱需求的 AI 加速器設計 | 平台 | Nvidia | 高 | 低 | 難 |
| PFAS 法規與訴訟風險層 | 基礎設施 | 美國 EPA、ECHA | -- | 低 | 中 |

# Bottleneck Analysis

嚴格結構性瓶頸測試分別套用於冷卻液化學品節點、冷卻硬體節點與政策風險層。

| 節點 | 需求 | 供給彈性 | 可替代性 | 定價能力 | 機會分數 | 分類 |
| --- | --- | --- | --- | --- | --- | --- |
| 兩相 PFAS/HFO 介電冷卻液供應 | 中 | 低 | 中 | 中 | 3 | 成長領域 |
| AI 驅動冷卻設備(CDU/硬體)產能 | 極高 | 中 | 中 | 高 | 4 | 成長領域 |
| PFAS 法規/訴訟風險對冷卻化學品的影響 | -- | 低 | 中 | -- | 2 | 中性 |

- 冷卻液節點的供給彈性確實偏低,但需求與可替代性僅為中等,因存在可行的無 PFAS 替代方案——未通過嚴格三項測試。
- 冷卻硬體需求極高且交期確有壓力,但供給彈性為中等而非低:多家大型廠商正快速擴產,並非單一瓶頸點。
- 法規/訴訟層是解釋 3M 為何退出、Chemours 為何謹慎擴產的風險因素,而非本身即為需求驅動的瓶頸。

# Key Metrics

| 指標 | 數值 | 單位 | 期間 | 來源 |
| --- | --- | --- | --- | --- |
| 3M PFAS 和解金 | 12.5 | 美元十億 | 2024年3月定案 | ev-5 |
| 3M PFAS 訴訟件數 | >4,000 | 件 | 和解時 | ev-5 |
| TSCA PFAS 申報期限 | 2026-10-13 | 日期 | 2026 | ev-7 |
| 浸沒式冷卻市場規模 | 17至21 | 美元億 | 2025-2026 | ev-16 |
| 兩相冷卻年複合成長率 | 19.42 | % | 至2031年 | ev-16 |
| 單相冷卻市佔率 | 55至62 | % | 2025-2026 | ev-16 |
| Nvidia Rubin Ultra 熱設計功耗 | 3.6 | kW | 2027(預估) | ev-17 |
| Nvidia VR200 熱設計功耗 | 5 | kW | 2027(預估) | ev-17 |
| AI機櫃密度預估 | 250至900 | kW/櫃 | 2026-2027 | ev-17 |
| Vertiv 2026年Q2營收 | 3.27 | 美元十億 | 2026 Q2 | ev-18 |
| Vertiv 積壓訂單 | 15 | 美元十億 | 2026 Q2 | ev-18 |
| 冷卻零組件交期 | 16至24 | 週 | 2026 | ev-19 |

# Competition

| 名稱 | 類型 | 說明 |
| --- | --- | --- |
| 單相直接晶片冷卻 | 直接競爭者 | 市場主流;採水/乙二醇混合液,無需介電冷卻液。 |
| 單相浸沒式冷卻 | 間接替代方案 | 無 PFAS,但在極高密度下效率較低。 |
| Chemours Opteon 2P50 | 間接替代方案 | 提議中的 HFO 替代冷卻液;仍處於試驗與早期量產爬坡階段。 |

# Financial / Valuation

_未進行估值分析:本報告涵蓋跨產業的材料與法規動態,涉及多家公司(3M、Chemours、Vertiv),而非單一可投資標的之核心論點;所蒐集之可信來源中,並無任何公司股價被確認為本報告結論之核心。_

# Catalysts

- Chemours/Navin Fluorine 的 Opteon 2P50 量產爬坡與後續試驗結果(未來2-3季)
- ECHA SEAC 對 REACH PFAS 限制案的最終意見(預計2026年底前)
- EPA TSCA 申報,截止日為2026年10月13日
- Vertiv 與 Schneider Electric 下次財報揭露的冷卻積壓訂單與交期
- Nvidia 2027世代晶片冷卻參考設計揭露

# Strongest Bear Case

- **需求**:若 AI 廠商持續推進單相/混合冷卻以因應密度上升,兩相冷卻可能永遠無法成為主流,使此議題僅侷限於小眾利基市場。
- **法規**:若 EPA 快速審查立場持續,且歐盟豁免冷卻液,本報告記錄的法規壓力可能永遠不會真正產生約束力。
- **供應**:Chemours 的量產爬坡速度可能快於現有資料顯示,在兩相冷卻需求變得重要之前即補上缺口。
- **執行**:微軟與 Meta 暫停研發的報導僅依賴媒體報導,並非公司直接證實,可能誇大了實際退卻程度。

# Kill Conditions

| 條件 | 指標 | 門檻 | 時間窗 | 影響 |
| --- | --- | --- | --- | --- |
| 超大規模業者揭露因冷卻液短缺導致延遲 | 揭露之延遲/產能影響 | 至少一件確認案例 | 4-6季 | invalidate |
| Opteon 2P50 爬坡延遲或試驗中止 | 商業化進度 | 確認延遲/中止 | 12個月 | weaken |
| 歐盟通過 REACH PFAS 限制且無冷卻液豁免 | 執委會限制決議與範圍 | 通過且無豁免 | 2027年以後 | weaken |
| 兩相冷卻佔新部署比例升至20%以上 | 兩相冷卻部署佔比 | ≥20%新部署 | 2-3年 | invalidate |

# 30–90 Day Validation

| 事件 | 時間窗 | 支持條件 | 削弱條件 | 監測來源 |
| --- | --- | --- | --- | --- |
| Opteon 2P50 量產爬坡/試驗結果 | 2-3季 | 按時程進行;新增試驗 | 延遲、縮減或中止 | Chemours 投資人關係 |
| ECHA SEAC 最終意見/執委會決議 | 2026年底-2027 | 納入冷卻液豁免 | 未採納豁免 | echa.europa.eu |
| EPA TSCA 申報 | 2026年10月-2027初 | 未再延遲;無新增限制 | 再延遲或新增限制 | epa.gov, federalregister.gov |
| 下次兩相對單相市佔率報告 | 2-3季 | 兩相佔比維持小眾 | 兩相佔比快速升至20%以上 | Dell'Oro, Straits Research |
| 任何超大規模業者揭露冷卻液延遲影響 | 持續 | 未出現揭露 | 出現揭露之延遲/影響 | 產業媒體、投資人揭露 |

# Final Assessment

**結論:VALIDATE**(信心水準:中)

3M 退出 PFAS 為兩相浸沒式冷卻的冷卻液創造了真實且供給彈性偏低的缺口,2026 年一連串法規發展更加劇此不確定性。但現有證據不足以定性為具約束力的結構性瓶頸:單相無 PFAS 冷卻已主導市場,業者據報正繞道而非硬扛,替代冷卻液也已進入量產協議與試驗階段。此議題值得持續驗證,尤其是熱設計功耗上升是否會快過替代供應鏈擴產速度,而非已有定論。

# Sources

- `ev-1` [primary] [3M Newsroom: "3M to Exit PFAS Manufacturing by the End of 2025"](https://news.3m.com/2022-12-20-3M-to-Exit-PFAS-Manufacturing-by-the-End-of-2025) (2022-12-20)
- `ev-2` [primary] [3M Co. Form 8-K Exhibit 99.1 (FY2022)](https://www.sec.gov/Archives/edgar/data/66740/000006674022000085/a1220228kex-991.htm) (2022-12-20)
- `ev-3` [secondary] [Techspray: "3M Novec Phase-Out: Impact & Alternatives"](https://www.techspray.com/3m-announcement-of-novec-phase-out-what-does-it-mean) (2025)
- `ev-4` [secondary] [HPCwire: "PFAS Regulations, 3M Exit to Impact Two-Phase Cooling in HPC"](https://www.hpcwire.com/2023/01/27/pfas-regulations-3m-exit-to-impact-two-phase-cooling-in-hpc/) (2023-01-27)
- `ev-5` [secondary] [ServeTheHome: "2-Phase Immersion Cooling Halted Over Multi-Billion Dollar Health Hazard Lawsuits"](https://www.servethehome.com/2-phase-immersion-cooling-halted-over-multi-billion-dollar-health-hazard-lawsuits/) (2023-06)
- `ev-6` [secondary] [Data Center Dynamics: "Two-phase cooling will be hit by EPA rules and 3M's exit from PFAS forever chemicals"](https://www.datacenterdynamics.com/en/news/two-phase-cooling-will-be-hit-by-epa-rules-and-3ms-exit-from-pfas-forever-chemicals/) (2023)
- `ev-7` [primary] [Federal Register: "Modification to the Start of the Submission Period for PFAS Reporting Under TSCA 8(a)(7)"](https://www.federalregister.gov/documents/2026/04/13/2026-07062/modification-to-the-start-of-the-submission-period-for-perfluoroalkyl-and-polyfluoroalkyl-substances) (2026-04-13)
- `ev-8` [primary] [US EPA: "Update on Reporting Deadline for TSCA PFAS Reporting Rule"](https://www.epa.gov/chemicals-under-tsca/update-reporting-deadline-tsca-pfas-reporting-rule) (2026)
- `ev-9` [primary] [ECHA: "ECHA announces timeline for PFAS restriction evaluation"](https://echa.europa.eu/-/echa-announces-timeline-for-pfas-restriction-evaluation) (2026-03)
- `ev-10` [primary] [Chemours: "Chemours Announces Development of New Specialty Fluid for Two-Phase Immersion Cooling: Opteon 2P50"](https://www.chemours.com/en/news-media-center/all-news/press-releases/2023/chemours-announces-development-of-new-specialty-fluid-for-two-phase-immersion-cooling-opteon-2p50) (2023)
- `ev-11` [secondary] [Data Center Dynamics: "Chemours selects Navin Fluorine to make its two-phase immersion cooling fluid"](https://www.datacenterdynamics.com/en/news/chemours-selects-navin-fluorine-to-make-its-two-phase-immersion-cooling-fluid/) (2026-05)
- `ev-12` [secondary] [Digital Infra Network: "Chemours helping bridge the data center cooling gap"](https://digitalinfranetwork.com/news/chemours-opteon-2p50-immersion-cooling-trial/) (2026)
- `ev-13` [secondary] [C&EN (ACS): "EPA begins expeditious reviews of chemicals for data center projects"](https://cen.acs.org/policy/chemical-regulation/EPA-begins-expeditious-reviews-chemicals/103/web/2025/10) (2025-10)
- `ev-14` [secondary] [Grist: "The Trump administration's data center push could open the door for new forever chemicals"](https://grist.org/accountability/the-trump-administrations-data-center-push-could-open-the-door-for-new-forever-chemicals/) (2026)
- `ev-15` [secondary] [Grist: "The EPA is rolling back drinking water limits for 4 PFAS"](https://grist.org/regulation/epa-pfas-drinking-water-limits-trump-rollback/) (2026)
- `ev-16` [secondary] [Global Market Insights: "Data Center Immersion Cooling Market Size, Forecast"](https://www.gminsights.com/industry-analysis/data-center-immersion-cooling-market) (2026)
- `ev-17` [secondary] [Network World: "Why AI rack densities make liquid cooling nonnegotiable"](https://www.networkworld.com/article/4149069/why-ai-rack-densities-make-liquid-cooling-nonnegotiable.html) (2026)
- `ev-18` [secondary] [Seeking Alpha: "Vertiv Holdings: The $15 Billion Backlog, Liquid Cooling Dominance, And The AI Infrastructure Trade"](https://seekingalpha.com/article/4890719-vertiv-holdings-the-15-billion-backlog-liquid-cooling-dominance-and-the-ai-infrastructure-trade-wall-street-is-still-underpricing) (2026)
- `ev-19` [secondary] [DC Atlas: "Data Center Supply Chain Lead Times: The Reality"](https://dcatlas.io/en/articles/trends/data-center-supply-chain-lead-times-delivery-delays) (2026)
