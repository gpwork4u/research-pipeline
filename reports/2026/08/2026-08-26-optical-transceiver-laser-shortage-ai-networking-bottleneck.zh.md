---
title: "光收發模組與 EML 雷射：AI GPU 叢集網路是否已取代封裝與記憶體，成為 AI 基礎建設最緊繃的瓶頸？"
date: "2026-08-26"
slug: "optical-transceiver-laser-shortage-ai-networking-bottleneck"
research_type: NEW
topics: ["ai-infrastructure", "semiconductors", "networking", "optics"]
companies: ["Coherent Corp", "Lumentum Holdings"]
verdict: "VALIDATE"
confidence: "medium"
primary_question: "輝達已於 2026 年 3 月鎖定 Coherent 與 Lumentum 共計 40 億美元的雷射產能，兩家供應商最新一季營收年增分別達 58% 與 109%，麥肯錫更警告光收發模組的短缺——而非 GPU 本身——將在整個十年內制約 AI 網路發展；EML 雷射供應鏈是否已成為 AI 基礎建設最緊繃的結構性瓶頸？還是 AXT、Coherent 與中國模組廠都在積極擴充磷化銦(InP)產能，一旦超大規模業者資本支出成長放緩，2027 年恐將反轉為產能過剩？"
---

# 一句話結論

EML 雷射製造是真實且符合條件的結構性瓶頸，但其 1-3 年即可倍增產能的時程，使其遠不如記憶體、封裝或礦業瓶頸持久。

# Executive Summary

Coherent 與 Lumentum 8 月財報皆顯示資料中心通訊營收年增 58% 至 109%；輝達 3 月向兩家供應商各投資 20 億美元(合計 40 億)鎖定 EML 雷射產能，據報導已使其他買家交貨延至 2027 年後。麥肯錫估 800G 產能到 2027 年將低於需求 40% 至 60%，1.6T 短缺至 2029 年達 30% 至 40%，因全球僅少數公司能製造符合良率的磷化銦(InP)雷射。TrendForce 估 2026 年 AI 收發模組市場成長 57% 至 260 億美元。但 InP 產能可於 12 至 18 個月內倍增，遠快於礦業或封裝，若資本支出放緩，2027 年恐現產能過剩。

# Research Question / Why Now

**主要問題：** 見上方 primary_question。

**子問題：**
- EML 雷射/收發模組供需缺口有多大？產業鏈哪個環節最緊繃？
- 輝達鎖定兩大供應商 40 億美元產能，透露出持久性與買方集中風險為何？
- 此節點是否符合結構性瓶頸測試，相較 CoWoS、ABF、HBM、變壓器與銅礦如何？
- InP 產能擴充、中國模組廠、CPO 等供給因應進展與時程為何？
- 什麼情況會推翻此論點，證明只是週期性短缺？

**為何是現在：** Coherent 與 Lumentum 8 月財報均顯示元件短缺驅動的三位數營收成長；輝達 3 月對兩家合計 40 億美元投資，據報導已使其他買家交貨延至 2027 年後；TrendForce 與麥肯錫各自預估 800G/1.6T 多年期短缺——此為本研究尚未檢視的網路節點，有別於先前六份封裝、基板、記憶體、變壓器與銅礦報告。

**論點：** EML 雷射製造是 AI 叢集擴展的真實近期結構性瓶頸——需求極高，全球僅少數公司能生產符合良率的 InP 雷射，且難以替代。輝達直接投資兩大供應商，本身即證明瓶頸真實且正朝買方集中。但 InP 與模組產能可於 12 至 18 個月倍增，遠快於礦業或電網設備，若資本支出放緩，2027 年確實存在過剩風險。

# Known Facts

- Coherent 2026 財年 Q4(截至 6/30)營收 20.5 億美元(+34% YoY)；資料中心與通訊營收 16.2 億美元(+58.6%)；全年營收 71.2 億美元(+22.5%)。 _(evidence: ev-3)_
- Lumentum 2026 財年 Q4 營收 10.1 億美元(+109%)；元件 6.494 億美元(+103%)，系統 3.569 億美元(+123%)；2027 財年 Q1 指引中位數約 12.5 億美元(+130%)。 _(evidence: ev-4)_
- 輝達 3/2 宣布分別向 Coherent、Lumentum 投資 20 億美元(合計 40 億)，簽署多年期採購承諾與 EML 產能取用權；其他買家交貨據報導延至 2027 年後。 _(evidence: ev-1, ev-2, ev-8)_
- TrendForce(4/20)：AI 收發模組市場 2026 年成長 57% 至 260 億美元；800G 以上出貨量躍升 2.6 倍，自 2,400 萬件增至約 6,300 萬件。 _(evidence: ev-7)_
- TrendForce(2025/12/8)：AI 資料中心引爆全球光雷射短缺潮；輝達在 EML/CW-LD 供應商的產能鎖定正重塑全球供應鏈。 _(evidence: ev-9)_
- 麥肯錫：800G 產能到 2027 年低於需求 40% 至 60%；1.6T 短缺至 2029 年達 30% 至 40%；根源是 InP 製造集中於少數公司。 _(evidence: ev-5)_
- 博通第三代 CPO 交換器 Tomahawk 6-Davisson 已於 2026 年量產出貨；標準版 Tomahawk 6 於 3 月進入量產。 _(evidence: ev-6)_
- AXT 目標 2026 年底前倍增 InP 產能(季產能約 3,500 萬美元)，2027 年再倍增；Coherent 擁 6 吋 InP 晶圓廠，計劃同樣時程倍增。 _(evidence: ev-10, ev-11)_
- 中國中際旭創、光迅 2025 財年營收分別成長 60%、187%；2026 年 800G 產能目標分別為 1,400至1,500萬件、800至900萬件。 _(evidence: ev-12)_
- 分析師指出，若資本支出成長從約 70%(2026)放緩至 30% 至 50%，2027 年恐現產能過剩。 _(evidence: ev-13)_

# Reasonable Inferences

- 輝達直接資本投資(而非僅擴大訂單)供應商，模式與先前 CoWoS/HBM 瓶頸相似：產能由最大買家以資本承諾贏得，強化其相對小型業者的地位。 _(evidence: ev-1, ev-2, ev-8, ev-9)_
- 供應商三位數成長伴隨管理層產能受限言論，顯示需求真實超越供給，而非疲軟需求被短缺假象掩蓋。 _(evidence: ev-3, ev-4, ev-5, ev-7)_
- InP/模組產能倍增速度約為 CoWoS、ABF、HBM 或銅礦時程的兩倍快，近期分類正確，但長期持久性較弱。 _(evidence: ev-10, ev-11, ev-12)_
- 共同封裝光學較可能是轉移瓶頸位置(轉向雷射晶片/封裝產能)，而非消除底層限制，因 CPO 仍需相同雷射。 _(evidence: ev-6)_
- 本研究先前每份報告皆將資本支出放緩列為推翻條件，此瓶頸命運與所有其他瓶頸背後同一總體變數緊密相關。 _(evidence: ev-13)_

# Unknowns

- 本次研究嘗試的所有主要來源直接擷取均遭出口代理伺服器封鎖；事實依據搜尋結果摘要而非原始聲明。
- 產業鏈中哪個環節(InP 基板、磊晶晶圓、雷射晶片製造、或模組組裝)最緊繃，無法從單一來源確認。
- 輝達與 Coherent、Lumentum 採購承諾的實際數量與價格條件未獲揭露。
- 2027 年產能過剩情境是否成真，取決於未獨立驗證的資本支出走勢。

# Core Mechanism

AI GPU 叢集擴展至 800G、1.6T 互連，需要建立在高精度磷化銦(InP)晶圓上的 EML 雷射，全球僅少數公司(主要 Coherent、Lumentum)能以符合良率規模量產，認證週期逾兩年。需求持續疊加(2026 年出貨量單年躍升 2.6 倍)，輝達直接投資兩家供應商 40 億美元——而非僅擴大訂單——既證實短缺存在，也將產能集中導向最大買家，使其他買家交貨延至 2027 年後。此節點與先前瓶頸不同之處在於供給反應速度：InP 與模組產能可於 12 至 18 個月倍增，若資本支出放緩，同樣的資本反應也可能在 2027 年推向產能過剩。

# Industry Chain

| 節點 | 角色 | 主要業者 | 定價能力 | 供給彈性 | 可替代性 |
| --- | --- | --- | --- | --- | --- |
| InP 基板與磊晶晶圓生產 | 上游 | AXT、住友電工、JX Advanced Metals | 高 | 低 | 難 |
| EML/CW 雷射晶片製造 | 元件 | Coherent、Lumentum | 高 | 低 | 難 |
| 光收發模組組裝 | 元件 | Coherent、Lumentum、中際旭創、光迅、Applied Optoelectronics | 中 | 中 | 中 |
| 交換器 ASIC / 共同封裝光學 | 基礎設施 | 博通、輝達、邁威爾 | 高 | 中 | 中 |
| 超大規模 AI 叢集業者 | 平台 | Microsoft、Google、Amazon、Meta、Oracle | 中 | 中 | 中 |
| AI 算力終端客戶 | 客戶 | AI 實驗室、企業 | 低 | -- | -- |

# Bottleneck Analysis

| 節點 | 需求 | 供給彈性 | 可替代性 | 定價能力 | 機會分數 | 分類 |
| --- | --- | --- | --- | --- | --- | --- |
| EML/CW 雷射晶片製造 | 極高 | 低 | 難 | 高 | 4 | 結構性瓶頸 |
| 光收發模組組裝 | 極高 | 中 | 中 | 中 | 3 | 成長領域 |
| 共同封裝光學整合 | 高 | 中 | 中 | 高 | 3 | 成長領域 |

- **雷射製造**：需求極高(2026 年出貨量成長 2.6 倍)；彈性低(僅少數符合良率的 InP 晶圓廠，認證週期逾兩年)；對高速長距光通訊難以替代——符合嚴格測試標準。
- **模組組裝**：中際旭創、光迅、Coherent、Lumentum 等多家組裝廠並行擴產，加上 CPO 部分替代，使彈性與可替代性維持中等——屬成長領域。
- **共同封裝光學**：屬於架構層面的因應方案，而非獨立受限節點——仍依賴相同的底層雷射供給。

# Key Metrics

| 指標 | 數值 | 單位 | 期間 | 成長 | 來源 |
| --- | --- | --- | --- | --- | --- |
| Coherent 資料中心與通訊營收 | 16.2 | 億美元 | 2026財年Q4 | +58.6% YoY | ev-3 |
| Lumentum 營收 | 10.1 | 億美元 | 2026財年Q4 | +109% YoY | ev-4 |
| 輝達對Coherent+Lumentum投資 | 40 | 億美元 | 2026年3月宣布 | -- | ev-1 |
| AI 光收發模組市場 | 165至260 | 億美元 | 2025至2026年 | +57% | ev-7 |
| 800G以上收發模組出貨量 | 2,400萬至6,300萬 | 件 | 2025至2026年 | 約2.6倍 | ev-7 |
| 麥肯錫800G產能缺口 | 40至60 | %低於需求 | 至2027年 | -- | ev-5 |
| AXT 季度InP產能目標 | 3,500 | 萬美元 | 2026年底前 | 較2025年Q4倍增 | ev-10 |

# Competition

| 名稱 | 類型 | 說明 |
| --- | --- | --- |
| 共同封裝光學(博通、未來輝達) | 間接替代方案 | 降低對分立式插拔收發模組的依賴，但仍需相同的底層雷射供給。 |
| 中際旭創、光迅、Applied Optoelectronics | 直接競爭者 | 並行擴充 800G/1.6T 產能；光迅在泰國設廠以服務北美需求，規避中國出口管制曝險。 |
| 銅纜互連(NVLink、DAC) | 間接替代方案 | 僅適用於機櫃內短距離連結，無法擴展至 AI 叢集所需的距離。 |

# Financial / Valuation

_Coherent 2026財年Q4：營收20.5億美元，非公認會計原則每股盈餘1.74美元，全年營收71.2億美元。Lumentum 2026財年Q4：營收10.1億美元，2027財年Q1指引中位數約12.5億美元。(evidence: ev-3, ev-4)_

_未進行估值：本次研究未取得目前市價、股數與完整資產負債表資料。_

# Catalysts

- Coherent 與 Lumentum 2027財年Q1財報電話會議(約2026年11月)，關注產能與訂單積壓評論
- 輝達2026年3月採購承諾的實際數量/價格條件揭露
- TrendForce/麥肯錫最新2027年收發模組供需平衡預估
- 博通與輝達共同封裝光學導入進度里程碑

# Strongest Bear Case

- **供給面**：AXT、Coherent 皆計劃 2026、2027 年底倍增 InP 產能，短缺可能於 12 至 24 個月內緩解。
- **需求面**：若資本支出放緩至 30% 至 50%，銷售成長恐趨緩，重複下單後可能反轉為過剩。
- **技術面**：已出貨的博通 CPO，長期可能減少對插拔模組的依賴。
- **執行面**：兩家供應商快速擴產；良率或認證若有閃失，可能加劇短缺或加速過剩。
- **競爭面**：輝達鎖定僅嘉惠兩家；其他買家可能轉向中國供應商或加速採用 CPO。

# Kill Conditions

| 條件 | 指標 | 門檻 | 期間 | 影響 |
| --- | --- | --- | --- | --- |
| 交貨時間恢復正常 | EML/收發模組交貨時間 | 連續2季降至20週以下 | 未來3-4季 | 推翻 |
| 超大規模業者資本支出明顯放緩 | 綜合資本支出成長指引 | 放緩至30%至50%區間 | 未來2-3季 | 推翻 |
| 供應商成長/訂單明顯放緩 | Coherent/Lumentum季對季營收成長、訂單出貨比 | 連續2季季增為負或訂單出貨比低於1.0 | 未來2-4季 | 減弱 |
| CPO採用速度快於預期 | CPO占新建AI叢集網路埠比重 | 一年內超過25% | 未來3-4季 | 減弱 |

# 30–90 Day Validation

| 事件 | 期間 | 支持條件 | 減弱條件 | 監測來源 |
| --- | --- | --- | --- | --- |
| Coherent 2027財年Q1財報電話會議 | 約2026年11月 | 重申產能受限，上調指引 | 交貨時間縮短，訂單放緩 | Coherent 投資人關係 |
| Lumentum 2027財年Q1財報電話會議 | 約2026年11月 | 確認約130% YoY成長，訂單積壓成長 | 指引未達標，需求轉弱 | Lumentum 投資人關係 |
| 超大規模業者2026Q4/2027Q1資本支出指引 | 2027年1月底至2月 | 資本支出成長維持 | 資本支出放緩至30%至50% | 超大規模業者財報 |
| TrendForce/麥肯錫最新供需平衡研究 | 2026年第四季至2027年第一季 | 缺口獲確認或擴大 | 缺口縮小或出現過剩警訊 | TrendForce、McKinsey |
| 輝達採購承諾條件揭露 | 未來2-3季 | 確認大規模多年期鎖定 | 條件小於或不如報導的排他性 | Nvidia Newsroom、SEC 文件 |

# Final Assessment

**結論：VALIDATE**（信心水準：中）

EML 雷射製造符合本研究嚴格的結構性瓶頸測試：需求極高且持續疊加，供給彈性低且集中於少數符合良率的 InP 晶圓廠，對 AI 叢集高速互連難以替代——輝達直接資本投資兩大供應商即為佐證。但與先前驗證的 HBM、銅礦或變壓器瓶頸不同，InP 與模組產能可於 12 至 18 個月倍增，多方意見已指出 2027 年存在過剩風險，且該風險與本研究其他每項瓶頸背後同一資本支出變數緊密相關。鑑於供給反應已如此迅速浮現，此論點宜維持持續驗證，而非給出更強結論。

# Sources

- `ev-1` [primary] [NVIDIA Newsroom: "NVIDIA and Coherent Announce Strategic Partnership to Develop Optics Technology to Scale Next-Generation Data Center Architecture"](https://nvidianews.nvidia.com/news/nvidia-and-coherent-announce-strategic-partnership-to-develop-optics-technology-to-scale-next-generation-data-center-architecture) (2026-03-02)
- `ev-2` [primary] [NVIDIA Newsroom: "NVIDIA Announces Strategic Partnership With Lumentum to Develop State-of-the-Art Optics Technology"](https://nvidianews.nvidia.com/news/nvidia-announces-strategic-partnership-with-lumentum-to-develop-state-of-the-art-optics-technology) (2026-03-02)
- `ev-3` [primary] [Coherent Corp.: "Coherent Corp. Reports Fourth Quarter and Full Year Fiscal 2026 Results"](https://www.coherent.com/news/press-releases/fourth-quarter-and-fiscal-year-2026-results) (2026-08-12)
- `ev-4` [primary] [Lumentum: "Lumentum Announces Fourth Quarter and Full Fiscal Year 2026 Results"](https://investor.lumentum.com/financial-news-releases/news-details/2026/Lumentum-Announces-Fourth-Quarter-and-Full-Fiscal-Year-2026-Results/default.aspx) (2026-08-11)
- `ev-5` [primary] [McKinsey & Company: "Opportunities in networking optics: Boosting supply for data centers"](https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/opportunities-in-networking-optics-boosting-supply-for-data-centers) (2025-06)
- `ev-6` [primary] [Broadcom Inc.: "Broadcom Ships Tomahawk 6: World's First 102.4 Tbps Switch"](https://investors.broadcom.com/news-releases/news-release-details/broadcom-ships-tomahawk-6-worlds-first-1024-tbps-switch) (2026-03)
- `ev-7` [secondary] [TrendForce: "Global AI Optical Transceiver Market to Reach US$26 Billion in 2026; Component Shortages Identified as Primary Capacity Expansion Bottleneck"](https://www.trendforce.com/presscenter/news/20260420-13017.html) (2026-04-20)
- `ev-8` [secondary] [CNBC: "Nvidia to invest $4 billion into photonics companies Coherent and Lumentum"](https://www.cnbc.com/2026/03/02/nvidia-investment-coherent-lumentum.html) (2026-03-02)
- `ev-9` [secondary] [TrendForce: "AI Data Centers Ignite a Laser Shortage Wave; Nvidia's Strategic Lock-In Reshapes the Global Laser Supply Chain"](https://www.trendforce.com/presscenter/news/20251208-12823.html) (2025-12-08)
- `ev-10` [secondary] [Yahoo Finance: "AXTI Ramps Up InP Capacity: Is Multi-Year Growth Taking Shape?"](https://finance.yahoo.com/technology/ai/articles/axti-ramps-inp-capacity-multi-133100922.html) (2026)
- `ev-11` [primary] [Coherent Corp.: "World's First 6-inch InP Scalable Wafer Fabs, Paving the Way for the Next Generation of Lasers for AI Transceivers and 6G Wireless Networks"](https://www.coherent.com/news/press-releases/worlds-first-6-inch-inp-scalable-wafer-fabs-paving-the-way-for-the-next-generation-of-lasers-for-ai-transceivers-and-6g-wireless-networks) (2024-03)
- `ev-12` [secondary] [ChinaBizInsight: "Who's Who in China's Optical Transceiver Industry -- Top Players 2026"](https://cnbizinsight.com/whos-who-in-chinas-optical-transceiver-industry-the-top-players-you-need-to-know/) (2026)
- `ev-13` [discovery] [Crux Capital Group: "The AI Optics Trade: Shortage Today, Oversupply Tomorrow?"](https://cruxcapitalgroup.substack.com/p/the-ai-optics-trade-shortage-today) (2026)
