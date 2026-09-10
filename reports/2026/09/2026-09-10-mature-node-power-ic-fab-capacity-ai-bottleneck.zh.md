---
title: "成熟製程瓶頸:8 吋類比與電源 IC 晶圓廠是否是 AI 建設中被忽視的結構性瓶頸?"
date: "2026-09-10"
slug: "mature-node-power-ic-fab-capacity-ai-bottleneck"
research_type: NEW
topics: ["ai-infrastructure", "semiconductors", "advanced-manufacturing", "analog-ics"]
companies: ["Texas Instruments", "onsemi", "GlobalFoundries", "Vanguard International Semiconductor"]
verdict: "VALIDATE"
confidence: "medium"
primary_question: "8 吋/成熟製程晶圓代工產能——用於製造圍繞每顆 AI 加速器的電源管理與類比晶片,而非加速器本身——是否已成為 AI 建設的真正結構性瓶頸?相較於本研究線先前涵蓋的先進製程、封裝與記憶體限制,這個層級是否明顯較少受到市場關注?"
---

# 一句話結論

製造圍繞每顆 AI 加速器之電源管理晶片的 8 吋成熟製程晶圓廠,其緊俏程度已悄悄追上 HBM 或 CoWoS,卻鮮少受到關注。

# Executive Summary

2026 年全球 8 吋稼動率已攀升至近 90%,台積電與三星削減舊製程產能、轉向先進製程,而 AI 伺服器對電源管理 IC 的需求持續加速。德儀、onsemi 與格芯第二季各自公布 AI/資料中心營收年增 60% 至逾 100%,遠高於公司整體 6-23% 的成長。世界先進新加坡新廠第一期產能在量產前就已售罄,董事長警告 2027 漲幅將超過 2026 年。電源 IC 難以轉移至先進製程,符合嚴格瓶頸標準。主要不確定性在於中國擴產(約占新投資七成)或需求降溫能否更快緩解此緊縮。

# Research Question / Why Now

**主要問題:** 見前述 front matter。

**子問題:** 2026 年成熟製程稼動率有多緊俏,產能是否正在萎縮?哪些公司顯示需求超過供給的最明顯證據?為何電源 IC 無法轉移至先進製程?2027-2028 年將有多少新產能上線,由誰興建?此瓶頸需要什麼條件才會解除?

**為何是現在:** Digitimes 於 2026 年 9 月 9 日報導,成熟製程晶片爭奪戰可能持續至 2028 年,此前已有一連串 2026 年揭露:TrendForce 5 月與 6 月的成熟製程漲價報告,以及德州儀器、onsemi、格芯與世界先進在 7-8 月公布的第二季財報,皆指出 AI 驅動的電源 IC 與類比需求已超過 8 吋及舊型 12 吋產能。本研究線先前尚未檢視此一層級。

**論點:** 成熟製程/類比 IC 產能符合嚴格的結構性瓶頸測試,但相較於封裝、HBM 或微影製程,受到的市場關注明顯較少。

# Known Facts

- 前十大晶圓廠 8 吋稼動率 2026 年升至約 88%,下半年估達 90%,較 2025 年 75-80% 提升;台積電、三星自 2025 下半年起削減 8 吋產能。 _(evidence: ev-16)_
- TrendForce:1 月報告漲價 5-20%;5 月報告歸因龍頭廠削減產能加上 AI 電源 IC 需求激增;6 月報告(EE Times Asia)預測 2027 年第三輪漲價。 _(evidence: ev-2, ev-1, ev-3)_
- Digitimes(09-09):成熟製程爭奪戰恐持續至 2028 年,供應鏈管理能力成為議價籌碼。 _(evidence: ev-4)_
- Digitimes(03-18):中國睿力、士蘭微、華虹加速擴充 12 吋/28 奈米產能;中國占新增成熟製程投資約七成。 _(evidence: ev-5, ev-16)_
- 德儀 Q2:營收 54.6 億美元(+23%),類比營收 43.7 億美元(+26%);隨機櫃轉向 800V 直流架構,資料中心營收約倍增。 _(evidence: ev-6, ev-6b)_
- 德儀 Q1:執行長稱資料中心營收年增約 90%,年化逾 10 億美元;自 4 月起延長交期並調漲價格。 _(evidence: ev-7, ev-15)_
- onsemi Q2:營收 16.04 億美元(+9%),毛利率 38.4%;推出 GaNEXUS 氮化鎵產品線;估 2026 年 AI 資料中心營收倍增。 _(evidence: ev-8, ev-9)_
- 格芯 Q2(法說會 8/5):營收 17.86 億美元(+6%);通訊/資料中心事業群受矽光子與 SiGe 帶動年增逾 60%;全年展望上修至 50-60%。 _(evidence: ev-10)_
- 世界先進:新加坡 12 吋新廠首期 4.4 萬片晶圓於量產前售罄;董事長警告 2027 漲幅將超過 2026;Q3 出貨展望季增 11-13%。 _(evidence: ev-12, ev-11, ev-13)_
- SEMI:全球 300 毫米設備支出 2026 年增 18% 至 1,330 億美元,2027 年再增 14% 至 1,510 億美元;多數新產能要到 2028-2030 年才量產。 _(evidence: ev-14)_

# Reasonable Inferences

- 稼動率上升,加上台積電、三星主動削減產能及世界先進新廠提前售罄,共同顯示供給彈性偏低:既有業者在 AI 相關需求加速之際反而在退出產能。 _(evidence: ev-16, ev-12, ev-13)_
- 電源 IC 需要專用 BCD 製程以處理電壓與電流——800V 直流機櫃的轉型更強化此點——因此無法輕易轉移至先進製程,使此節點符合「難以替代」標準。 _(evidence: ev-6, ev-6b)_
- 德儀、onsemi 與格芯的資料中心相關成長皆達 60% 至逾 100%,遠高於公司整體 6-23% 的成長,與此區隔「需求極高」的判定一致。 _(evidence: ev-6, ev-8, ev-10)_
- 由於約七成新增成熟製程投資來自中國,產能因應措施可能無法惠及非中國 AI 供應鏈,即使全球整體產能成長,該地區的瓶頸仍可能延續。 _(evidence: ev-5, ev-16)_
- 依 SEMI 所示 2028-2030 年量產時程,以及世界先進自身 2027 年開始量產的規劃,2027-2028 年前不太可能出現實質緩解。 _(evidence: ev-14, ev-11)_

# Unknowns

- 沒有資料量化目前因此瓶頸而延遲的 AI 伺服器或機櫃產量。
- 尚無確認的 OEM 因電源 IC 短缺而延遲出貨的揭露。
- 中國成熟製程產能取得非中國供應鏈認證的時程尚不明確。
- 設備商是否於 2026 年實質擴大 200 毫米級設備產出,未能以足夠新近資料確認。
- 所有主要來源網域(sec.gov、semi.org、vis.com.tw、investor.onsemi.com、trendforce.com、digitimes.com、eetasia.com)均遭研究環境代理封鎖;事實依賴匯聚一致的搜尋摘要,而非直接檢索原文。

# Core Mechanism

AI 伺服器需要的不只是加速器晶片:電源管理 IC 負責調節每顆 GPU 的電力,隨機櫃轉向 800V 直流等高電壓架構,單機類比含量隨之提升。這些晶片幾乎全建立在成熟專用製程(8 吋/200 毫米級及舊型 12 吋)之上,而非先進製程——因為電壓電流處理所需的電晶體特性與密度優化的先進製程不同。

正當需求加速,龍頭晶圓廠(台積電、三星)卻削減 8 吋產能、轉向利潤更高的先進製程與封裝業務,使供給隨之收縮。服務此層級的獨立廠(世界先進、格芯、聯電、力積電)正承接需求,世界先進最新工廠在量產前售罄即是明證。新產能多來自中國業者,且多數要到 2027-2028 年才出現,期間非中國 AI 供應鏈將面臨真實卻鮮少受重視的限制。

# Industry Chain

五個節點串連成熟製程製造、類比設計與驅動需求的 AI 伺服器。

| Node | Role | Major players | Pricing power | Supply elasticity | Substitutability |
| --- | --- | --- | --- | --- | --- |
| 成熟製程(8 吋/200 毫米)類比與電源 IC 製造 | Upstream | 格芯、聯電、力積電、世界先進、中芯、華虹 | High | Low | Hard |
| 類比與電源半導體設計/生產 | Components | 德州儀器、onsemi、意法半導體 | High | Medium | Medium |
| 12 吋成熟製程(28-55 奈米)網路與類比 SoC 產能 | Infrastructure | 睿力、士蘭微、華虹、聯電 | Medium | Medium | Medium |
| AI 伺服器電源與網路基礎設施 | Infrastructure | Nvidia、Dell、Supermicro、雲端業者 | High | Low | Hard |
| 先進製程邏輯、HBM 與 CoWoS(對照層級) | Platform | 台積電、Nvidia、SK 海力士、三星 | High | Low | Hard |

# Bottleneck Analysis

嚴格測試分別套用於 8 吋電源 IC 層級、12 吋成熟製程層級,以及先進製程對照層級。

| Node | Demand | Supply elasticity | Substitutability | Pricing power | Opportunity | Classification |
| --- | --- | --- | --- | --- | --- | --- |
| 成熟製程(8 吋)電源 IC/分離元件產能 | Extreme | Low | Hard | High | 4 | Structural Bottleneck |
| 12 吋成熟製程(28-55 奈米)網路/類比 SoC 產能 | High | Medium | Medium | Medium | 3 | Growth Area |
| 先進製程邏輯、HBM 與 CoWoS(對照) | Extreme | -- | -- | High | -- | Neutral |

- 8 吋電源 IC 層級符合全部三項嚴格標準:既有業者在德儀、onsemi 與格芯需求加速之際削減產能,且電壓處理型 IC 無法有效轉移至先進製程。
- 12 吋層級僅屬成長領域:多家獨立資本業者、尤其中國國家支持的晶圓廠皆可個別擴產,且網路/類比 SoC 較電源 IC 具備更高製程彈性。
- 先進製程/HBM/CoWoS 層級僅作對照之用:其分類已由先前報告界定,儘管成熟製程層級同樣緊俏,市場關注仍高度集中於此層級。

# Key Metrics

| Metric | Value | Unit | Period | Source |
| --- | --- | --- | --- | --- |
| 前十大晶圓廠 8 吋稼動率 | 88 to 90 | percent | 2026 | ev-16 |
| 中國占新增 12 吋成熟製程投資比重 | ~70 | percent | 2026 | ev-16 |
| 德儀資料中心營收成長 | ~100 | percent YoY | Q2 2026 | ev-6 |
| onsemi AI 資料中心營收展望 | >2x | growth multiple | FY2026 | ev-8 |
| 格芯通訊/資料中心事業群成長 | >60 | percent YoY | Q2 2026 | ev-10 |
| 世界先進新加坡廠第一期售罄 | 44,000 | wafers | pre-2027 start | ev-12 |
| 全球 300 毫米晶圓廠設備支出 | 133 | USD billion | 2026 | ev-14 |
| 全球 300 毫米晶圓廠設備支出 | 151 | USD billion | 2027 | ev-14 |

# Competition

| Name | Kind | Note |
| --- | --- | --- |
| 睿力/士蘭微/華虹 | indirect alternative | 約占新增 12 吋成熟製程投資七成;主要服務中國境內客戶。 |
| 意法半導體 | direct competitor | 在成熟製程產能緊俏之際,與德儀、onsemi 同步調漲價格。 |

# Financial / Valuation

_未進行估值分析:本報告涵蓋四家business model不同的公司(德州儀器、onsemi、格芯、世界先進);股數/估值分析並非此瓶頸論點的核心,亦未從蒐集到的可信來源確認其必要性。_

# Catalysts

- 德州儀器第三季 2026 法說會(約 2026 年 10 月)
- onsemi 第三季 2026 法說會:AI 資料中心營收倍增目標的進度
- 格芯第三季 2026 法說會:通訊基礎設施/資料中心成長是否符合 50-60% 展望
- 世界先進第三季 2026 法說會與新加坡廠進度
- TrendForce 下一次成熟製程/8 吋稼動率與價格更新

# Strongest Bear Case

- **Supply**:中國成熟製程產能(約占新增投資七成)可能較預期更快開放給非中國供應鏈。
- **Technology**:設備商過去曾在缺貨週期重返舊型設備市場;2026 年是否出現類似反應未能以足夠新近資料確認。
- **Demand**:成熟製程短缺在 2021-2022 年曾具週期性;若雲端資本支出放緩,鑑於公司廣泛非 AI 曝險,需求可能迅速回歸常態。
- **Execution**:最明確的「售罄」證據(世界先進)僅來自單一公司量產前的前瞻揭露,非已實現出貨數據。

# Kill Conditions

| Condition | Metric | Threshold | Window | Impact |
| --- | --- | --- | --- | --- |
| 8 吋稼動率大幅下滑 | 前十大晶圓廠 8 吋稼動率 | 連續 2 季低於 80% | 3-4 個季度 | invalidate |
| AI/資料中心營收成長大幅減速 | 德儀/onsemi/格芯季增率 | 連續 2 季低於年增 20% | 2-3 個季度 | weaken |
| 中國成熟製程產能取得非中國客戶認證 | 中國以外設計得標 | 至少 1 件確認認證 | 12-18 個月 | invalidate |
| 2027 年成熟製程漲價未能實現 | 晶圓合約價格變動 | 連續 2 季持平或下跌 | 2027 年 | invalidate |

# 30–90 Day Validation

| Event | Window | Supports if | Weakens if | Monitor |
| --- | --- | --- | --- | --- |
| 德儀第三季 2026 財報 | 約 2026 年 10 月 | 資料中心成長延續、交期持續延長 | 成長減速、交期回歸常態 | 德儀 IR |
| onsemi 第三季 2026 財報 | 2026 年 10 月底至 11 月初 | 重申或上修倍增展望 | 展望遭下修 | onsemi IR |
| 格芯第三季 2026 財報 | 2026 年 11 月初 | 事業群成長達 50-60% 展望以上 | 成長明顯低於展望 | 格芯 IR |
| 世界先進第三季 2026 財報 | 約 2026 年 10 月底 | 重申 2027 漲價警告、新廠進度如期 | 新廠時程延後或漲價縮減 | 世界先進 IR |
| TrendForce 成熟製程更新 | 約 2026 年第四季 | 稼動率維持、2027 漲價獲重申 | 稼動率下滑、漲價預測下修 | TrendForce |

# Final Assessment

**Verdict: VALIDATE** (confidence: medium)

成熟製程/8 吋電源 IC 產能符合嚴格結構性瓶頸測試——需求極高、供給彈性偏低、替代困難——證據包括稼動率上升、龍頭廠削減產能、三家公司 AI 相關營收成長 60% 至逾 100%,以及世界先進新廠量產前即售罄。相較封裝、HBM 與微影製程,此層級明顯較少受關注,儘管緊俏程度相當。主要待解問題在於中國擴產或需求降溫能否更快緩解瓶頸——值得持續追蹤驗證,而非定論。

# Sources

_註:[primary] 標示來源本身的性質(官方公司/監管機構發布),並不代表本次研究階段直接擷取該頁面——以下所有 sec.gov、semi.org、vis.com.tw、investor.onsemi.com、trendforce.com、digitimes.com 及 eetasia.com 網址皆遭研究環境的網路代理封鎖,因此相關引用依賴匯聚一致的二手轉載/搜尋結果摘要,而非直接驗證(見 Unknowns)。_

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
