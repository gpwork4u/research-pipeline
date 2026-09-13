---
title: "DDR5 排擠效應:AI 對 HBM 的爭奪,是否讓傳統記憶體成為 AI 基礎建設的下一個結構性瓶頸?"
date: "2026-09-13"
slug: "ddr5-conventional-memory-crowd-out-ai-hbm-bottleneck"
research_type: NEW
topics: ["ai-infrastructure", "semiconductors", "memory", "regulation"]
companies: ["Samsung Electronics", "SK Hynix", "Micron Technology", "Lenovo"]
verdict: "VALIDATE"
confidence: "medium"
primary_question: "三星、SK 海力士與美光將共用的 DRAM 晶圓產能轉向 AI 相關的 HBM 生產,是否已讓傳統 DDR4/DDR5 記憶體本身成為更廣泛 AI 與 PC 運算建設的結構性瓶頸——而正在進行的反托拉斯訴訟(指控三家業者協同限產)是否削弱了「這是純粹結構性稀缺、而非人為稀缺」的論點?"
---

# 一句話結論

AI 對 HBM 的產能爭奪已使 DDR5 價格上漲 485%,並促使美光退出消費型記憶體市場,但一項未決的反托拉斯訴訟指控此稀缺係協同所致,並非純粹結構性因素。

# Executive Summary

三星、SK 海力士與美光將共用的 DRAM 產能轉向高毛利 HBM,傳統 DDR4/DDR5 價格截至 2026 年 9 月已年增達 485%,預期 2027 年底前無緩解。美光已於 2026 年初退出消費型記憶體,理由是 AI 需求。記憶體現佔標準伺服器物料成本 40-50%,每年增加雲端業者約 1,000 億美元資本支出,聯想等 PC 廠商即便囤貨仍面臨「前所未見」的成本上漲。傳統 DRAM 可能符合嚴格結構性瓶頸測試:需求高、供給彈性低、替代困難。但 2026 年 6 月 25 日的集體訴訟指控三家業者協同限產——若獲證實,將使此現象轉為人為稀缺。

# Research Question / Why Now

**Primary question:** 見前述 front matter。

**Sub-questions:** HBM 與傳統 DDR4/DDR5 之間的產能分配比例為何?此排擠效應是否直接提高 AI 資料中心成本,或主要衝擊 PC/消費型伺服器市場?反托拉斯訴訟的指控內容為何,證據力有多強?有多少新產能可能專門緩解傳統 DRAM 的短缺,時程為何?OEM 廠商能否透過替代方案緩解此瓶頸?

**Why now:** DDR5 零售價格截至 2026 年 9 月上旬持續創新高、未見回落,延續自美光退出消費型記憶體(2025 年 12 月)以來的緊縮態勢;SK 海力士執行長更在該公司於那斯達克掛牌上市當日警告,2027 年將是產業史上供給最吃緊的一年,需求將持續超過供給至 2030 年後。2026 年 6 月 25 日提出的反托拉斯訴訟則指控此為協同限產,而非純粹稀缺——這是本系列尚未探討的全新角度,有別於 2026 年 8 月 22 日的 HBM 超級週期報告(聚焦 HBM 供給本身)與 9 月 3 日的儲存報告(NAND/HDD)。

**Thesis:** 傳統 DRAM 因 AI 驅動的產能排擠,可能符合嚴格瓶頸測試標準,但一項未決的反托拉斯訴訟,加上業者仍在積極投資產能,使「這是否為真實結構性稀缺,或部分屬於蓄意分配選擇」尚無定論。

# Known Facts

- DDR5 零售價(2026/9 上旬):32GB 套裝 425-560 美元;相近套裝年增 485%;預期 2027 年底前無緩解。_(evidence: ev-1)_
- 8 月創下的 DDR5/DDR4 價格紀錄延續至 9 月未見回落;AI 基礎設施與 PC 與 HBM 爭奪同一晶圓產能。_(evidence: ev-2)_
- 美光宣布退出消費型 Crucial 業務(2025/12/3 公告,約 2026/2 生效),理由為 AI 資料中心需求。_(evidence: ev-3)_
- 三星 2026 Q2:AI 驅動獲利創紀錄;HBM4 銷售預期 Q3 成長三倍;60-70% DRAM 產能轉向長期合約;稱維持「均衡組合」。_(evidence: ev-4)_
- SK 海力士 SEC 申報:DRAM 產能預計由約 55 萬片增至 2030-31 年約 100 萬片/月;新產能主要用於 HBM。_(evidence: ev-5)_
- SK 海力士執行長(2026/7,那斯達克掛牌當日):2027 年將是「產業史上最糟的一年」;需求將超過供給至 2030 年後。_(evidence: ev-6)_
- 集邦科技(2026/7/9):預測 Q3 伺服器 DRAM 合約價季增 13-18%;長期合約使漲價壓力轉移至未簽約買家。_(evidence: ev-7)_
- 2026/6/25:集體訴訟指控三星/SK 海力士/美光協同轉向 HBM 以削減傳統產出,引用四年來約 700% 漲幅;美光否認。_(evidence: ev-8)_
- 記憶體佔標準伺服器物料成本 40-50%(原約 30-35%);每年增加雲端業者約 1,000 億美元資本支出。_(evidence: ev-9)_
- 聯想財務長稱成本上漲「前所未見」(庫存高於正常水準約 50%);仍上調售價,稱漲勢「才剛開始」。_(evidence: ev-10)_
- 三星與 SK 海力士合計揭露約 8,700 億美元擴產計畫;SK 海力士另加碼 150 億美元。_(evidence: ev-11)_

# Reasonable Inferences

- HBM 獲利創紀錄與傳統 DRAM 價格同步飆升,顯示短缺部分反映刻意轉向高毛利 HBM 的選擇,而非單純總產能不足——此即訴訟核心指控。_(evidence: ev-4, ev-5, ev-8)_
- SK 海力士新產能主要投向 HBM,總產能倍增要等到 2030-2031 年,傳統 DRAM 短期供給彈性因此偏低。_(evidence: ev-5)_
- 此短缺將產能排擠出 PC/一般伺服器市場,屬於與本系列已探討的 AI 專屬瓶頸不同的外溢效應。_(evidence: ev-3, ev-9)_
- 長期合約保護大型雲端業者,使成本負擔不成比例落在如聯想等未簽約買家身上。_(evidence: ev-7, ev-10)_
- 三星與 SK 海力士合計投入約 8,700 億美元擴產,顯示供給回應價格,但尚未證實用於緩解傳統 DRAM 短缺。_(evidence: ev-5, ev-11)_

# Unknowns

- 無來源揭露三星、SK 海力士或美光目前 HBM 與傳統 DDR4/DDR5 之間確切的晶圓產能分配比例。
- 反托拉斯訴訟(2026/6/25 提出)仍處早期階段;截至研究日期尚無裁決、證據揭露或和解結果。
- AI 主記憶體需求(相對於一般 PC/伺服器換機需求與囤貨行為)在此排擠效應中的實際佔比,未獲量化。
- 各來源引用的價格漲幅數字不一致(年增 485% 對比單季約 300% 對比 Jefferies 預測 Q3/Q4 再漲 40-50%/30-40%),未獲統一基準調和。
- 本研究環境封鎖了所有嘗試存取的一手來源網域;相關事實仰賴搜尋結果片段而非直接檢索。

# Core Mechanism

三星、SK 海力士與美光的 HBM 與傳統 DDR4/DDR5 生產,仰賴共用晶圓產能。隨 AI 需求推升 HBM 成為高毛利、產能吃緊的產品線,三家業者皆將愈來愈多產能轉向 HBM——三星 HBM4 銷售 Q3 成長三倍,SK 海力士新產能主要用於進階產品,美光直接退出消費型記憶體。每片轉向 HBM 的晶圓即無法生產 DDR5;總產能擴張要到 2030-2031 年才到位,短期緊縮已推升價格,對 PC 廠商與未簽約買家衝擊最大,因長期合約保護了大型雲端業者。

這在理論上滿足傳統 DRAM 的嚴格瓶頸測試:需求高、短期彈性低、替代困難,因無可行的系統記憶體替代方案。但機制本身存在爭議:2026 年 6 月 25 日的訴訟主張「轉向 HBM」本身就是被指控的反競爭行為——蓄意協同限產,而非不可避免的限制。三星與 SK 海力士合計約 8,700 億美元擴產計畫顯示供給回應價格,但尚未確認是否針對傳統 DRAM。

# Industry Chain

四個節點串連 DRAM 晶圓產能與 AI 建設及更廣泛的 PC/伺服器市場。

| Node | Role | Major players | Pricing power | Supply elasticity | Substitutability |
| --- | --- | --- | --- | --- | --- |
| 傳統 DRAM(DDR4/DDR5)生產 | Components | 三星、SK 海力士、美光 | High | Low | Hard |
| HBM 生產(比較層) | Components | 三星、SK 海力士、美光 | High | Low | Hard |
| PC 與一般伺服器 OEM | Platform | 聯想、戴爾、HP | Low | Medium | Medium |
| 雲端業者/AI 資料中心(主記憶體成本暴露) | Customer | 亞馬遜、微軟、Google、Meta | Low | Low | Hard |

# Bottleneck Analysis

嚴格測試專門套用於傳統 DRAM 節點,並附上兩個比較層。

| Node | Demand | Supply elasticity | Substitutability | Pricing power | Opportunity | Classification |
| --- | --- | --- | --- | --- | --- | --- |
| PC/一般伺服器用傳統 DRAM | High | Low | Hard | High | 4 | Structural Bottleneck |
| HBM 生產(比較層) | Extreme | -- | -- | High | -- | Neutral |
| PC/伺服器 OEM 成本轉嫁 | Medium | Medium | Medium | Low | 2 | Neutral |

- 傳統 DRAM 符合嚴格測試:需求高(結構性成長加上 AI 主記憶體需求與囤貨行為)、短期彈性低(產能已預留給 HBM)、替代性困難。
- 未決的反托拉斯訴訟是關鍵但書:若證實限產係協同而非結構性因素,此分類須改為人為稀缺。
- OEM 未通過嚴格測試:可透過調整規格部分替代,替代性為中等,即便上游短缺仍屬困難。

# Key Metrics

| Metric | Value | Unit | Period | Source |
| --- | --- | --- | --- | --- |
| 32GB DDR5 套裝零售價區間 | 425-560 | 美元 | 2026/9 | ev-1 |
| 最低價 32GB DDR5-6000 套裝 | 489.99 | 美元 | 2026/9/7 | ev-1 |
| DRAM 累計價格漲幅(訴訟引用) | 約 700 | %/4年 | 2022-2026 | ev-8 |
| 伺服器 DRAM 合約價預測 | 13-18 | % 季增 | Q3 2026 | ev-7 |
| 記憶體佔伺服器物料成本 | 40-50 | % | 2026 | ev-9 |
| 記憶體增加之雲端業者資本支出 | 約 100 | 億美元/年 | 2026 | ev-9 |
| SK 海力士目標 DRAM 產能 | 約 100 萬 | 片/月 | 2030-31年前 | ev-5 |
| SK 海力士那斯達克 ADR 規模 | 26.5 | 億美元 | 2026/7 | ev-6 |

# Competition

| Name | Kind | Note |
| --- | --- | --- |
| 長鑫存儲(CXMT) | indirect alternative | 中國本土業者;HBM3E 出貨規模尚小,非中國市場替代性未獲證實。 |
| DDR4(舊世代)記憶體 | indirect alternative | 部分買家轉向 DDR4 以規避 DDR5 漲價,但舊世代價格亦同步上漲。 |

# Financial / Valuation

_未進行估值分析:本報告橫跨四家公司(三星、SK 海力士、美光、聯想),共用同一記憶體分配論點;股數/估值分析非瓶頸分類問題之核心,且現有可信來源未確認其必要性。_

# Catalysts

- Garciaguirre v. Samsung Electronics 訴訟:駁回動議裁決或證據揭露進度
- 三星與 SK 海力士 2026 年 Q3 財報電話會議:HBM 與傳統 DRAM 產能分配比例
- 美光 2026 財年 Q4 財報電話會議(2026 年 9 月底)
- 集邦科技 2026 年 Q4 DRAM/DDR5 合約價預測(約 2026 年 10 月)
- 戴爾、HP 等 OEM 是否出現與聯想相似的漲價行動

# Strongest Bear Case

- **Regulation**:一項未決的反托拉斯集體訴訟指控三家業者協同限制傳統 DRAM 產出——若獲證實,此短缺將被重新定義為反競爭行為,而非結構性稀缺。
- **Supply**:三星與 SK 海力士合計約 8,700 億美元的產能擴張,顯示供給正回應價格訊號,可能自 2027 年起緩解排擠效應。
- **Demand**:長期合約已保護多數大型雲端業者免於最劇烈的漲價,使排擠效應最嚴重的影響集中於 AI 資料中心建設以外的市場。
- **Execution**:無來源證實 HBM 與傳統產能的確切分配比例,使刻意排擠的程度無法獨立驗證。

# Kill Conditions

| Condition | Metric | Threshold | Window | Impact |
| --- | --- | --- | --- | --- |
| 法院認定存在協同限產 | 案件裁決/證據揭露 | 確認協同限產之認定 | 12-18 個月 | invalidate |
| 非 HBM 新產能上線且價格回歸正常 | DDR5/DDR4 合約價指數 | 連續 2 季以上季增低於 5% | 4-6 季 | weaken |
| 業者揭露傳統 DRAM 產能佔比上升 | 揭露之分配比例 | 任何揭露之上升 | 2-4 季 | weaken |
| HBM 需求成長明顯放緩 | HBM 營收成長率 | 季增降至低雙位數以下 | 2-3 季 | invalidate |

# 30–90 Day Validation

| Event | Window | Supports if | Weakens if | Monitor |
| --- | --- | --- | --- | --- |
| Garciaguirre v. Samsung 裁決/證據揭露 | 未來 2-3 季 | 發現協同限產證據 | 駁回或和解、無相關認定 | 加州北區地方法院案件系統、路透 |
| 三星/SK 海力士 2026 Q3 財報 | 約 2026/10 底 | 重申 HBM 優先策略 | 轉回傳統 DRAM 產能 | 三星/SK 海力士 IR |
| 美光 2026 財年 Q4 財報 | 2026/9 底 | 重申既有轉型策略 | 逆轉 Crucial 退出決定 | 美光 IR |
| 集邦科技 2026 Q4 DRAM 預測 | 約 2026/10 | 價格趨勢延續 | 成長放緩至個位數 | 集邦科技 |
| 戴爾/HP 漲價行動 | 未來 1-2 季 | 更多 OEM 跟進漲價 | 成本趨於穩定 | OEM IR、產業媒體 |

# Final Assessment

**Verdict: VALIDATE** (confidence: medium)

隨著 AI 對 HBM 的產能分配排擠傳統 DDR4/DDR5 供給,傳統 DRAM 在理論上可能符合嚴格的結構性瓶頸標準,並已導致價格創新高、美光退出消費市場、伺服器成本上升。但一項指控協同限產的未決訴訟、約 8,700 億美元的已揭露產能投資,以及尚無法確認的 HBM 與傳統產能分配比例,意味著「純粹結構性」的論述尚未成定局——此議題值得持續追蹤,而非已有定論。

# Sources

_Note: [primary] 標示來源本身性質(投資者關係新聞稿、SEC 申報文件),並非本次工作階段直接擷取該頁面——以下所有網址均遭本研究環境的出口代理伺服器封鎖,故該等引用仰賴間接的二手轉載/搜尋結果片段,而非直接查證(詳見 Unknowns)。_

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
