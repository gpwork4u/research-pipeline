---
title: "AI 基礎建設的電力瓶頸：電網變壓器與電工鋼——而非晶片——是否已成為資料中心產能的關鍵限制？"
date: "2026-08-23"
slug: "transformer-shortage-ai-data-center-power-bottleneck"
research_type: NEW
topics: ["ai-infrastructure", "energy", "electrical-equipment", "data-centers"]
companies: ["Siemens Energy", "GE Vernova", "Hitachi"]
verdict: "VALIDATE"
confidence: "medium"
primary_question: "西門子能源、GE Vernova 與日立能源皆公布創紀錄的電網設備訂單積壓與長達數年的變壓器交期，而獨立追蹤機構指出 2026 年美國 AI 資料中心規劃產能中有 30-50% 因電力設備短缺而延遲或取消——大型電力變壓器及其上游的電工鋼，是否已取代晶片封裝、基板與記憶體，成為 AI 加速器供應鏈最關鍵的實體瓶頸？"
---

# 一句話結論

電網變壓器與其背後的電工鋼，而非晶片，才是 2026 年延遲 AI 資料中心產能的最直接實體瓶頸。

# Executive Summary（摘要）

西門子能源、GE Vernova 與日立能源皆公布創紀錄電網設備訂單積壓，變壓器交期長達三到六年——正是新建 AI 資料中心所需的關鍵設備。獨立報導指出，2026 年美國資料中心規劃產能中有 30-50% 將因缺乏電力設備而延遲或取消，即使業者計畫投入逾 6,500 億美元 AI 資本支出。瓶頸根源在於上游電工鋼，美國來源僅一家，品質據報較低。新產能雖在興建，但要到 2027-2028 年才會實質緩解。

# Research Question / Why Now（研究問題與時機）

**主要問題：** 三大供應商皆公布創紀錄的電網設備訂單積壓與數年變壓器交期，而 2026 年美國 AI 資料中心規劃產能中有 30-50% 因電力設備短缺而延遲或取消——大型電力變壓器及其上游電工鋼，是否已取代晶片封裝、基板與記憶體，成為 AI 加速器供應鏈最關鍵的實體瓶頸？

**子問題：**
- 三大供應商 2026 年揭露對積壓訂單與交期相對需求透露了什麼？
- 延遲／取消比例有多少可歸因於變壓器短缺？
- 此節點是否符合結構性瓶頸測試，時程與 CoWoS、ABF 基板、HBM 相比如何？
- 目前有哪些供給面應對措施？
- 什麼證據可以推翻此論點？

**為何是現在：** 西門子能源 8 月 5 日財報顯示積壓訂單創紀錄達 510 億歐元；GE Vernova 電氣化部門訂單有機成長 66%；日立能源 6 月 29 日動工 4.57 億美元擴廠；8 月報導指出近半數規劃產能因電力設備短缺延遲——這是本研究尚未檢視過的節點。

**論點：** 創紀錄的積壓訂單與數年交期，加上三分之一至一半的規劃產能因缺乏變壓器延遲或取消，顯示電網設備已成為比先前晶片端瓶頸（CoWoS、ABF 基板、HBM）更立即、範圍更廣的結構性瓶頸，因它限制每一座資料中心。根源可追溯至電工鋼，國內來源僅一家且品質較低。新產能正在興建，但緩解不太可能早於 2027-2028 年。

# Known Facts（已知事實）

- 西門子能源 2026 財年第 3 季（8 月 5 日）：訂單創紀錄 179 億歐元；電網技術部門訂單 54 億歐元（年增 28%），利益率 19.9%。_(evidence: ev-1)_
- 電網技術部門積壓訂單創紀錄達 510 億歐元；全年展望上修至 18-20% 利益率、25-27% 營收成長。_(evidence: ev-1)_
- GE Vernova 2026 年第 2 季：總訂單 242 億美元（有機成長 88%），積壓訂單 1,763 億美元；電氣化部門訂單 63 億美元，設備積壓訂單 406 億美元（年增 69%）。_(evidence: ev-2)_
- GE Vernova 將電氣化部門營收展望上修至 145-150 億美元，維持 18-20% 利益率展望。_(evidence: ev-2)_
- 日立能源 6 月 29 日動工 4.57 億美元擴廠，目標成美國最大大型電力變壓器廠，預計 2028-2029 年投產。_(evidence: ev-3, ev-8)_
- Wood Mackenzie：美國變壓器平均交期 128 週，升壓變壓器 144 週；電氣設備市場預估自 200 億美元成長至 2030 年的 650 億美元；年度需求預估自約 1,500 台增至逾 9,000 台。_(evidence: ev-4)_
- 一線廠商 2027-28 年交期幾乎售罄——ABB／西門子能源 48-60 個月，日立能源同樣（承諾至 2029 年），GE Vernova 60 個月以上。_(evidence: ev-5)_
- 美國約 16 GW 規劃資料中心產能僅約 5 GW 在興建；30-50% 預估延遲或取消，即使四大業者計畫投入逾 6,500 億美元資本支出。_(evidence: ev-6)_
- 電工鋼美國國內來源僅一家（Cleveland-Cliffs），品質據報低於日韓進口貨；生產資本密集且全球集中。_(evidence: ev-7)_
- Virginia Transformer、Prolec GE 與 HD Hyundai Electric 皆有新產能在建，多以擴產三至五成為目標。_(evidence: ev-9, ev-5)_
- 升壓變壓器需求 2019-2025 年成長約 274%；美國整體交期自 2020 年以來成長約六倍。_(evidence: ev-5)_

# Reasonable Inferences（合理推論）

- 三大供應商皆公布數年期積壓訂單，即使投入數十億美元擴產仍未緩解，且變壓器限制每一座資料中心，此瓶頸涵蓋範圍可能超越先前晶片端瓶頸。_(evidence: ev-1, ev-2, ev-3, ev-5)_
- 電工鋼國內來源僅一家且品質較低、全球集中於少數業者，僅擴充組裝產能未必能解決短缺——呼應先前發現 ABF 薄膜、而非封裝設備才是 CoWoS 瓶頸根源。_(evidence: ev-7)_
- 即使有創紀錄資本支出計畫，2026 年規劃產能仍有 30-50% 延遲或取消，此瓶頸看來比先前任何晶片端瓶頸都更立即限制 AI 運算成長。_(evidence: ev-6)_
- 新產能多以 2027-2029 年為目標，緩解不太可能提前——時程與已趨緩的 CoWoS 相當，短於 2028-2032 年的 ABF 基板或約 2030 年的 HBM。_(evidence: ev-3, ev-4, ev-9)_

# Unknowns（未知）

- 主要來源皆遭研究環境網路代理封鎖；事實仰賴搜尋結果摘要，而非直接聲明。
- 一線廠商交期數據僅來自單一媒體報導，未能交叉驗證第二來源。
- 延遲／取消比例中有多少可歸因於變壓器本身，現有報導未清楚拆分。
- 電工鋼品質落差是暫時或結構性問題，現有來源未說明。

# Core Mechanism（核心機制）

創紀錄積壓訂單反映變壓器需求已領先既有產能數年，訂單簿據報排至 2029-2031 年，即使廠商正投入數十億美元新建產能。此持久性源於一項實體投入：電工鋼，國內來源僅一家且品質較低——新增組裝產能未必能轉化為成品變壓器供給。可見後果是：規劃產能中有 30-50% 據報因缺乏設備延遲或取消，影響比先前任何晶片端瓶頸都更立即。新投資多以 2027-2029 年為目標，這是緩解不會提前的原因。

# Industry Chain（產業鏈）

| 節點 | 角色 | 主要業者 | 定價能力 | 供給彈性 | 可替代性 |
| --- | --- | --- | --- | --- | --- |
| 電工鋼（GOES） | 上游 | Cleveland-Cliffs、新日鐵、JFE Steel、POSCO | 中等 | 低 | 困難 |
| 大型電力變壓器／配電設備製造 | 元件 | 西門子能源、GE Vernova／Prolec GE、日立能源、ABB | 高 | 低 | 困難 |
| 電網、輸電與併網 | 基礎設施 | 各地電力公司、PJM、MISO、ERCOT | 低 | 低 | 中等 |
| 資料中心開發商與營運商 | 平台 | 微軟、谷歌、亞馬遜、Meta、甲骨文 | 中等 | 中等 | 中等 |
| AI 運算終端客戶 | 客戶 | AI 實驗室、企業 | 低 | -- | -- |

# Bottleneck Analysis（瓶頸分析）

| 節點 | 需求 | 供給彈性 | 可替代性 | 定價能力 | 機會分數 | 分類 |
| --- | --- | --- | --- | --- | --- | --- |
| 大型電力變壓器／發電機升壓變壓器製造產能 | 極高 | 低 | 困難 | 高 | 4 | 結構性瓶頸 |
| 電工鋼（GOES）供給 | 高 | 低 | 困難 | 中等 | 3 | 結構性瓶頸 |
| 電網併網與許可 | 極高 | 低 | 中等 | 低 | 2 | 成長領域 |
| 新進變壓器製造業者 | 極高 | 中等 | 中等 | 中等 | 3 | 成長領域 |

- **變壓器製造**：需求極高、彈性低（交期 3-6 年）、替代困難——電網電壓下無替代元件。
- **電工鋼供給**：需求高、彈性低（資本密集、全球集中、國內來源僅一家）、替代困難。組裝產能成長無法增加鋼材供給，是更持久的上游限制。
- **電網併網**：需求極高、彈性低，但可替代性僅中等——自建發電成部分繞道方案，未符合嚴格測試。
- **新進業者**：Virginia Transformer、Prolec GE 與 HD Hyundai 的新產能使此節點具中等彈性，是緩解短缺最明確的路徑。

# Key Metrics（關鍵指標）

| 指標 | 數值 | 單位 | 期間 | 成長 | 來源 |
| --- | --- | --- | --- | --- | --- |
| 西門子能源電網技術部門積壓訂單 | 51 | 十億歐元 | 2026 財年第 3 季 | 創紀錄 | ev-1 |
| 西門子能源電網技術部門訂單 | 5.4 | 十億歐元 | 2026 財年第 3 季 | 年增 28% | ev-1 |
| GE Vernova 總訂單 | 24.2 | 十億美元 | 2026 年第 2 季 | 有機成長 88% | ev-2 |
| GE Vernova 電氣化部門設備積壓訂單 | 40.6 | 十億美元 | 截至 2026 年第 2 季 | 年增 69% | ev-2 |
| 日立能源南波士頓維吉尼亞州投資 | 457 | 百萬美元 | 2026 年 6 月宣布 | -- | ev-3 |
| 美國電力變壓器平均交期 | 128 | 週 | 2026 年 | -- | ev-4 |
| 美國電氣設備市場規模預估 | 200 億至 650 億 | 美元 | 2026 至 2030 年 | 約 3.25 倍 | ev-4 |
| 2026 年美國資料中心產能（16 GW）延遲／取消占比 | 30-50 | % | 2026 年 | -- | ev-6 |

# Competition（競爭）

| 名稱 | 類型 | 說明 |
| --- | --- | --- |
| Virginia Transformer、Prolec GE、HD Hyundai Electric、JST Power | 直接競爭者 | 新／擴產變壓器製造商，以 2-3 年為期增加美國及盟友產能，是短缺的主要供給面回應。 |
| 自建／表後發電 | 間接替代方案 | 開發商直接投資自建發電，以部分繞過併網與變壓器限制，而非真正取代電網變壓器。 |
| 中國電氣設備製造商 | 間接替代方案 | 中國是相關設備的全球最大生產國；部分美國短缺與中國製零組件供給受限有關。 |

# Financial / Valuation（財務／估值）

_本研究蒐集了西門子能源、GE Vernova 與日立三家公司的訂單、積壓訂單與利益率展望證據，但未取得完整財務報表或股數。_

_未進行估值：本次研究未取得任何一家公司的當前市場價格與完整財務報表。_

# Catalysts（催化劑）

- 西門子能源 2026 財年第 4 季財報電話會議（預計 2026 年 11 月左右）：電網技術部門積壓訂單與利益率趨勢
- GE Vernova 2026 年第 3 季財報電話會議（預計 2026 年 10 月下旬左右）：電氣化部門積壓訂單與訂單進度
- 日立能源維吉尼亞州廠及其他美國變壓器擴產進度
- 美國電氣設備交期與 2026 年延遲／取消比例的最新追蹤

# Strongest Bear Case（最強反方論點）

- **供給面**：新產能多以 2027-2029 年為目標，若如期到位，短缺可能比目前交期顯示的更快緩解。
- **法規面**：短缺部分與中國製零組件供給受限有關；貿易限制放寬可能更快提升供給彈性。
- **技術面**：開發商日益轉向自建發電，繞過併網延遲與變壓器採購瓶頸。
- **需求面**：AI 資本支出放緩——先前 CoWoS、輝達融資、ABF 基板與 HBM 報告皆曾提及此風險——將削弱新產能需求。
- **執行面**：交期數據僅來自單一媒體綜合報導，未交叉驗證第二來源，存在量測不確定性。

# Kill Conditions（推翻條件）

| 條件 | 指標 | 門檻 | 期間 | 影響 |
| --- | --- | --- | --- | --- |
| 一線廠商交期明顯縮短 | 大型電力變壓器報價交期（月） | 三大供應商中至少兩家降至 24 個月以下 | 未來 2 年 | 削弱 |
| 新產能提前彌合 2030 年需求缺口的顯著份額 | 新增變壓器產能對比 2030 年約 9,000 台／年的預估需求 | 2028 年底前有望達成缺口的 50% 以上 | 未來 2-3 年 | 削弱 |
| 資料中心延遲／取消比例明顯降至 2026 年區間以下 | 因電力設備延遲／取消的規劃資料中心產能占比 | 全年低於 15% | 未來 2 年 | 推翻 |
| 超大規模業者資本支出展望明顯放緩 | 超大規模業者資本支出成長展望合計數 | 合計展望逐季明顯放緩 | 未來 2-3 季 | 削弱 |

# 30–90 Day Validation（30–90 天驗證）

| 事件 | 期間 | 支持條件 | 削弱條件 | 監測來源 |
| --- | --- | --- | --- | --- |
| 西門子能源 2026 財年第 4 季財報電話會議 | 約 2026 年 11 月 | 電網技術部門積壓訂單與利益率展望持續上升 | 訂單成長放緩或利益率展望下修 | 西門子能源投資人關係 |
| GE Vernova 2026 年第 3 季財報電話會議 | 約 2026 年 10 月下旬 | 電氣化部門訂單／積壓訂單維持相近成長步調 | 成長明顯放緩或訂單出貨比趨近 1.0 | GE Vernova 投資人關係 |
| 日立能源維吉尼亞州廠及其他美國擴產進度 | 持續至 2028-2029 年 | 建廠依公布時程進行 | 時程延宕或投資規模縮減 | 日立能源新聞室、業界媒體 |
| 美國電氣設備交期與延遲比例最新追蹤 | 持續進行，未來 2-4 季 | 交期維持高檔，延遲／取消占比維持在 30-50% 以上 | 交期縮短或延遲占比明顯降低 | Wood Mackenzie、業界媒體 |

# Final Assessment（總評）

**結論：VALIDATE（驗證）**（信心水準：中）

證據支持將變壓器製造產能與電工鋼供給皆歸類為結構性瓶頸，其對 AI 基礎建設的影響在 2026 年看來比先前晶片端瓶頸（CoWoS、ABF 基板、HBM）更立即：積壓訂單創紀錄、訂單簿已排至 2029-2031 年，且規劃產能有 30-50% 因缺乏此類設備延遲或取消。最大風險在於興建中的新產能，多數以 2027-2029 年為目標——若如期到位且鋼材供給同步擴張，緩解可能比目前交期更快出現。驗證事件應能在二到三季內釐清短缺是加深或緩解。

# Sources

- `ev-1` [primary] [Siemens Energy: "Earnings Release Q3 FY 2026"](https://www.siemens-energy.com/global/en/home/press-releases/earnings-release-q3-fy-2026.html) (2026-08-05)
- `ev-2` [primary] [GE Vernova Inc. Q2 2026 Earnings Press Release (via SEC EDGAR Form 8-K)](https://www.sec.gov/Archives/edgar/data/0001996810/000199681026000147/gevpressrelease2q26.htm) (2026-07-22)
- `ev-3` [primary] [Hitachi Energy: "Hitachi Energy breaks ground on the nation's largest facility for the production of large power transformers in South Boston, Virginia"](https://www.hitachienergy.com/us/en/news-and-events/press-releases/2026/06/hitachi-energy-breaks-ground-on-the-nation-s-largest-facility-for-the-production-of-large-power-transformers-in-south-boston-virginia) (2026-06-29)
- `ev-4` [primary] [Wood Mackenzie: "Data center demand drives US electrical equipment market to $65B, reshaping industry dynamics"](https://www.woodmac.com/press-releases/data-center-demand-drives-us-electrical-equipment-market-to-$65b-reshaping-industry-dynamics/) (2026-04)
- `ev-5` [secondary] [POWER Magazine: "Transformers in 2026: Shortage, Scramble, or Self-Inflicted Crisis?"](https://www.powermag.com/transformers-in-2026-shortage-scramble-or-self-inflicted-crisis/) (2026)
- `ev-6` [secondary] [Yahoo Finance: "Half of planned US data center builds have been delayed or canceled, growth limited by shortages of power infrastructure and parts from China"](https://finance.yahoo.com/sectors/technology/articles/half-planned-us-data-center-150928890.html) (2026-08)
- `ev-7` [secondary] [The Breakthrough Journal: "America Makes The Wrong Steel For Its Transformer Supply Chain"](https://www.breakthroughjournal.org/p/america-makes-the-wrong-steel-for) (2026)
- `ev-8` [secondary] [Manufacturing Dive: "Hitachi unveils $1B grid manufacturing investment, including Virginia transformer factory"](https://www.manufacturingdive.com/news/hitachi-unveils-1b-grid-manufacturing-investment-virginia-transformer/759512/) (2026-06-29)
- `ev-9` [primary] [PR Newswire: "Virginia Transformer Breaks Ground on Georgia Transformer Expansion In Rincon; to Increase Production Capacity by 50 Percent"](https://www.prnewswire.com/news-releases/virginia-transformer-breaks-ground-on-georgia-transformer-expansion-in-rincon-to-increase-production-capacity-by-50-percent-302750084.html) (2026)
