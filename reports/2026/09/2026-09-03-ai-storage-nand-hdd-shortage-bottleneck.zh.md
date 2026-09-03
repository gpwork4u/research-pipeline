---
title: "儲存高牆：售罄的硬碟與飆漲的 NAND 價格，是否為 AI 的下一個結構性瓶頸？"
date: "2026-09-03"
slug: "ai-storage-nand-hdd-shortage-bottleneck"
research_type: NEW
topics: ["ai-infrastructure", "semiconductors", "data-storage", "memory"]
companies: ["Western Digital", "Seagate Technology", "Kioxia / SanDisk"]
verdict: "VALIDATE"
confidence: "medium"
primary_question: "AI 資料中心對近線硬碟容量與企業級 NAND/SSD 儲存的需求——硬碟產能已售罄至 2026-2028 年、NAND/SSD 價格一年內飆漲 50%-100% 以上——是否正在形成 AI 建設真正的結構性瓶頸？抑或這只是週期性的記憶體短缺，將隨 HAMR 硬碟產能與新 NAND 晶圓廠在 2027-2028 年間獲得緩解？"
---

# 一句話結論

AI 訓練資料、檢查點與日誌已讓硬碟產能售罄至 2028 年、NAND/SSD 價格漲逾 50%-100%，但既定的 HAMR 產能爬坡與 310 億美元 NAND 晶圓廠投資已在進行,使此瓶頸的解除更取決於執行時程,而非無止境的稀缺。

# Executive Summary

Western Digital 全部 2026 年硬碟產能已售罄,長約已延伸至 2027-2028 年;Seagate 2026 財年第四季近線儲存出貨年增 43%,絕大部分產能已配置至 2028 日曆年。NAND 與企業級 SSD 價格大幅上漲——2026 年第一季企業 SSD 合約價漲約 80%——同時 Kioxia 與 SanDisk 承諾投資 310 億美元於日本新產能,期程至 2032 年。QLC SSD 正吸收硬碟售罄後的溢出需求,即使每 TB 成本仍維持 16-19 倍的持續溢價。此瓶頸在 NAND 晶圓廠層級符合嚴格結構性測試(需求極高、彈性低、替代性難),但在硬碟組裝層級較弱,QLC SSD 替代已提供部分彈性。Seagate 的 HAMR 爬坡與 Kioxia/SanDisk 投資兩大產能應對措施皆有明確揭露時程,有別於受限於地質或許可程序的瓶頸。

# Research Question / Why Now

**主要問題:** 見前述 front matter。

**子問題:**
- 目前硬碟與 NAND 供需失衡有多嚴重?廠商揭露的積壓訂單與售罄狀況為何?
- 需求驅動因素為何?廠商營收中 AI/雲端客戶佔比多少?
- QLC SSD 能否大規模替代近線硬碟?每 TB 成本差距的走勢對替代性有何意義?
- 目前有哪些產能擴張正在進行?時程能否緩解短缺?
- 什麼證據會推翻「持久結構性瓶頸」論點,顯示這只是常規週期性記憶體上升週期?

**為何是現在:** 2026 年 8 月 27 日至 9 月 2 日這一週,Kioxia 與 SanDisk 宣布 310 億美元日本 NAND 投資,Seagate 7 月 28 日公布之財年第四季財報顯示近線產能已配置至 2028 年,TrendForce 2026 年第三季預測顯示 NAND/DRAM 價格仍在上漲——這是本研究管道尚未檢視的大宗資料儲存節點,有別於 8 月 22 日已涵蓋的 HBM/DRAM 加速器記憶體瓶頸。

**論點:** AI 訓練資料集、檢查點與推論日誌已將雲端服務商對近線硬碟與企業級 NAND/SSD 容量的需求推升至售罄硬碟產能至 2026-2028 年、NAND/SSD 價格漲 50%-100% 以上的程度,在儲存堆疊頂端形成高需求、低短期供給彈性與難替代性。有別於受地質或許可程序限制的瓶頸,此瓶頸已有明確、資本支持的產能應對措施在進行中。

# Known Facts

- Western Digital 全部 2026 年硬碟產能已售罄,部分 2027-2028 年長期協議已到位。 _(evidence: ev-1, ev-2)_
- Western Digital 雲端業務約佔公司營收 89%,消費性業務僅約 5%。 _(evidence: ev-1)_
- Seagate 2026 財年第四季近線儲存出貨年增 43% 至 195 EB;資料中心客戶佔出貨量 89%。 _(evidence: ev-3, ev-4, ev-5)_
- Seagate 絕大部分近線產能已配置至 2028 日曆年,2027 年全年定價已固定;客戶尋求 2029 年後的規劃能見度。 _(evidence: ev-3)_
- HAMR 產品佔 Seagate 2026 財年末近線出貨量約 40%,目標 2027 年 6 月達 70%。 _(evidence: ev-3, ev-17)_
- Seagate 2026 財年第四季營收 36 億美元,全年營收 122 億美元,均優於財測。 _(evidence: ev-4, ev-5)_
- Kioxia 與 SanDisk 於 2026 年 8 月 27 日宣布投資 310 億美元(約 5 兆日圓)於日本四日市與北上廠,期程至 2032 年,須取決於政府支持。 _(evidence: ev-6, ev-7)_
- TrendForce 預測 2026 年第三季 NAND 合約價季增 10-15%、DRAM 季增 13-18%,較前幾季放緩;其他報導援引 ADATA 董事長指出 NAND 漲幅達 35-40%、DRAM 達 20-30%。 _(evidence: ev-11, ev-12)_
- 2026 年第一季企業級 SSD 合約價漲約 80%。 _(evidence: ev-13)_
- 30TB QLC SSD 對硬碟的成本倍數從 2025 年第二季的 4.9 倍擴大至 2026 年第一季的 22.6 倍,第二季收窄至 16.3 倍,第三季再升至 18.6 倍。 _(evidence: ev-9, ev-10)_
- Pure Storage(2026 財年第四季營收 10.58 億美元,年增 20%)與 NetApp(2026 財年第四季營收 19.5 億美元,年增 12%)均表示 AI 需求超越供給。 _(evidence: ev-15, ev-16)_
- Seagate 目標 2027-2028 年推出 40-44TB HAMR 硬碟,2030 年前擴至 50-60TB;Western Digital 目標 2027 年量產 40-44TB 硬碟,2028 年每碟片達 10TB。 _(evidence: ev-17, ev-18)_

# Reasonable Inferences

- 由於 Seagate 與 Western Digital 已將多數近線產能以固定價格預售至 2027-2028 年,無既有協議的買家短期內不太可能獲得緩解,無論價格如何變動。 _(evidence: ev-1, ev-3)_
- QLC SSD 與硬碟持續存在雙位數成本倍數差距,即使雲端服務商已轉向 SSD,顯示買家是在支付產能可得性溢價,符合真實供給限制而非單純價格週期。 _(evidence: ev-9, ev-10)_
- 由於 HAMR 爬坡與晶圓廠投資皆有揭露的多年期時程,此瓶頸的解決路徑相較本研究管道涵蓋過的許可或地緣政治型瓶頸更為明確。 _(evidence: ev-3, ev-6)_
- TrendForce 10-15% 的 NAND 預測與 ADATA 董事長引述之 35-40% 數字間的落差,顯示短缺緩解速度確實存在不確定性。 _(evidence: ev-11, ev-12)_

# Unknowns

- 無資料來源揭露硬碟/NAND 積壓訂單中,AI 訓練/檢查點儲存與一般雲端成長各佔多少比重。
- 2026 年第二季 QLC/硬碟成本倍數收窄是否為持久緩解,抑或只是第三季再度擴大前的暫時性下降,未獲說明。
- 無資料來源提供 Western Digital、Seagate 或 SanDisk 經核實的股價或股數資料,故未進行估值分析。
- Kioxia/SanDisk 日本投資案的政府補貼但書是否已解決,未獲確認。
- 本次研究過程中嘗試存取的所有一手資料來源網域(SEC EDGAR、Kioxia、SanDisk、Seagate 投資人關係頁)均遭研究環境的出口代理封鎖;事實依據為交叉印證的搜尋結果摘要,而非直接頁面驗證。

# Core Mechanism

AI 訓練作業、模型檢查點與推論日誌消耗儲存的規模已超越硬碟與 NAND 快閃記憶體的產能。近線硬碟仍是儲存 EB 級訓練資料最便宜的媒介,雲端服務商因此鎖定數年期前瞻產能,售罄 Western Digital 與 Seagate 的 2026 年產出,並將定價承諾推至 2027-2028 年。硬碟產能用盡之處,買家轉向企業級 QLC SSD,但已因 AI 加速器記憶體需求而吃緊的 NAND 晶圓廠無法完全吸收溢出需求,SSD 價格因而同步上漲,即便該技術替代仍需付出高昂且持續的成本溢價。此瓶頸與無止境的實體稀缺不同之處在於,兩個關鍵層級皆有已在進行、資本支持且有時限的解決方案:Seagate 的 HAMR 技術預計於 2027 年中達到近線出貨量 70%,提升每碟片密度與吞吐量;Kioxia 與 SanDisk 則已承諾至 2032 年在日本投資 310 億美元新增 NAND 產能。因此,此瓶頸的持久性較不取決於是否有更多供給到來,而更取決於供給能否跟上迄今持續超越每一次先前產能規劃的 AI 需求成長。

# Industry Chain

六個層級將 NAND 晶圓製造與硬碟零組件製造連結至最終消耗容量的 AI 工作負載。

| Node | Role | Major players | Pricing power | Supply elasticity | Substitutability |
| --- | --- | --- | --- | --- | --- |
| NAND 晶圓製造 | Upstream | Samsung, SK Hynix, Micron, Kioxia/SanDisk | High | Low | Hard |
| 硬碟碟片、磁頭與 HAMR | Components | Western Digital, Seagate, Toshiba | High | Low | Medium |
| 硬碟/SSD 模組組裝 | Infrastructure | WD, Seagate, Solidigm, Phison | Medium | Medium | Medium |
| 儲存系統與平台 | Platform | Pure Storage, NetApp, Dell, HPE | Medium | Medium | Medium |
| 雲端服務商儲存 | Application | Amazon, Microsoft, Google, Meta | Medium | Medium | Medium |
| AI 實驗室與企業客戶 | Customer | AI labs, enterprises | Low | -- | -- |

# Bottleneck Analysis

嚴格測試將真正難以化解的瓶頸,與更具調適空間的層級區分開來。

| Node | Demand | Supply elasticity | Substitutability | Pricing power | Opportunity | Classification |
| --- | --- | --- | --- | --- | --- | --- |
| NAND 晶圓廠產能 | Extreme | Low | Hard | High | 4 | Structural Bottleneck |
| 近線硬碟碟片與組裝 | High | Low | Medium | High | 3 | Growth Area |
| 儲存系統整合 | High | Medium | Medium | Medium | 2 | Neutral |

- **NAND 晶圓廠產能**符合嚴格測試:需求極高、2026 年產能售罄導致彈性低、對雲端服務商認證密度而言替代性難。
- **硬碟碟片/組裝**仍歸類為成長領域,因 QLC SSD 是真實(雖昂貴)的替代方案,已在吸收需求。
- **系統整合**調適空間最大,可跨硬碟/SSD 組合採購並轉嫁零組件成本。

# Key Metrics

| Metric | Value | Unit | Period | Growth | Source |
| --- | --- | --- | --- | --- | --- |
| Seagate 近線儲存出貨成長 | 43 | percent YoY | Q4 FY2026 | -- | ev-3 |
| Seagate 資料中心佔出貨比 | 89 | percent | Q4 FY2026 | -- | ev-3 |
| Seagate HAMR 佔近線出貨比 | 40 | percent | exiting FY2026 | to 70% by Jun 2027 | ev-3 |
| Western Digital 雲端營收佔比 | 89 | percent | Q2 FY2026 | -- | ev-1 |
| Kioxia/SanDisk 日本投資額 | 31 | USD billion | through 2032 | -- | ev-6 |
| NAND 合約價預測 | 10-15 | percent QoQ | Q3 2026 | -- | ev-11 |
| 企業 SSD 價格漲幅 | 80 | percent QoQ | Q1 2026 | -- | ev-13 |
| QLC SSD 對硬碟成本倍數(30TB) | 18.6x, down from 22.6x | multiple | Q1-Q3 2026 | -- | ev-10 |

# Competition

| Name | Kind | Note |
| --- | --- | --- |
| QLC 企業級 SSD | indirect alternative | 真實硬碟替代方案,但每 TB 成本溢價達 16-19 倍。 |
| 磁帶/冷儲存歸檔 | indirect alternative | 成本較低但延遲遠高,不適用於活躍 AI 工作負載。 |
| 資料縮減/生命週期分層軟體 | status quo | 延緩而非解決原始容量限制。 |
| 雲端服務商自研儲存工程 | internal build | 降低營運負擔,但未創造新的底層供給。 |

# Financial / Valuation

_未執行:本報告為跨產業儲存供應鏈結構性研究,並無資料來源提供與此論點相關、經核實的股價或股數資料。_

# Catalysts

- Western Digital 與 Seagate 2027 財年第一季財報電話會議
- TrendForce 2026 年第四季 NAND/DRAM 合約價預測
- Kioxia/SanDisk 日本晶圓廠投資與補貼決定進度
- 雲端服務商進一步的長期儲存供應協議
- Pure Storage 與 NetApp 對零組件交貨時間的評論

# Strongest Bear Case

- **Supply**: Seagate 的 HAMR 爬坡與 Kioxia/SanDisk 310 億美元晶圓廠投資是已在進行、資本支持的具體產能應對,有別於受地質或許可程序限制的瓶頸。
- **Economics**: TrendForce 官方 2026 年第三季預測顯示 NAND/DRAM 價格漲幅已較 2026 年初放緩。
- **Technology**: QLC SSD 對硬碟的成本倍數在 2026 年第一至第二季由 22.6 倍收窄至 16.3 倍,顯示價格彈性已在發揮作用。
- **Demand**: 部分已記錄的雙重/三重下單行為,與過往記憶體景氣循環相似,歷史上多在買家安全庫存重建完成後修正。
- **Execution**: 同一季度出現不一致的價格預測數字(NAND 10-15% 對 35-40%),顯示市場緊俏程度確實存在不確定性。

# Kill Conditions

| Condition | Metric | Threshold | Window | Impact |
| --- | --- | --- | --- | --- |
| HAMR 如期或提前達 70% 滲透率且交貨時間縮短 | HAMR 佔比/交貨時間 | 滲透率 70%+,交貨恢復 2025 年前水準 | by mid-2027 | invalidate |
| NAND/DRAM 合約價持平或下降 | 季增合約價變化 | 連續 2 季持平或下降 | 2-3 quarters | invalidate |
| QLC/硬碟成本倍數持續降至約 10 倍以下 | 30TB 成本倍數 | 連續 2 季低於 10 倍 | 3-4 quarters | weaken |
| 雲端服務商取消長期儲存協議 | 長約取消情形 | 任一大型雲端服務商揭露削減承諾 | 2-4 quarters | invalidate |
| 新 NAND 產能大幅提前於 2032 年計畫到位 | 晶圓廠量產時程對比計畫 | 提前 12 個月以上 | 2-3 years | weaken |

# 30–90 Day Validation

| Event | Window | Supports if | Weakens if | Monitor |
| --- | --- | --- | --- | --- |
| WD 2027 財年第一季財報 | late Oct 2026 | 產能售罄、2028 年後長約增加 | 積壓緩解、交貨時間縮短 | Investor relations |
| Seagate 2027 財年第一季財報 | late Oct 2026 | 近線成長、HAMR 如期推進 | 成長放緩、HAMR 延遲 | investors.seagate.com |
| TrendForce 2026 年第四季預測 | ~Oct 2026 | 價格重申或加速上漲 | 漲幅放緩或下降 | trendforce.com |
| Kioxia/SanDisk 日本進度 | ~Nov 2026 | 補貼獲准、如期推進 | 延遲或縮減規模 | Company newsrooms |
| Pure Storage / NetApp 財報 | Nov-Dec 2026 | 需求持續超越供給 | 交貨時間恢復正常 | Investor relations |

# Final Assessment

**Verdict: VALIDATE** (confidence: medium)

NAND 晶圓廠產能符合嚴格結構性瓶頸測試:需求極高、2026 年產能售罄導致彈性低、對雲端服務商認證密度而言替代性難。近線硬碟組裝層級則較具爭議,因 QLC SSD 替代已提供真實、雖成本高昂的彈性。兩個關鍵層級皆面臨具體、資本支持的產能應對措施——Seagate 的 HAMR 爬坡與 Kioxia/SanDisk 310 億美元投資——並有揭露的多年期時程,使此瓶頸的持久性更取決於供給能否追上 AI 需求成長的執行速度,而非無止境的實體稀缺。這種真實短期壓力與明確(但尚未證實)解決路徑並存的組合,支持驗證評級,而非更強烈的判斷。

# Sources

- `ev-1` [secondary] [Tom's Hardware: "Western Digital is already sold out of hard drives for all of 2026, chief says"](https://www.tomshardware.com/pc-components/hdds/western-digital-is-already-sold-out-of-hard-drives-for-all-of-2026-chief-says-some-long-term-agreements-for-2027-and-2028-already-in-place) (2026-02)
- `ev-2` [primary] [Western Digital Corp: Form 8-K FY2026 (Q2 press release)](https://www.sec.gov/Archives/edgar/data/106040/000162828026004131/a4ex991-pressreleaseq226.htm) (2026-02)
- `ev-3` [primary] [Seagate Technology: Reports Fiscal Fourth Quarter and Fiscal Year 2026 Financial Results](https://investors.seagate.com/news/news-details/2026/Seagate-Technology-Reports-Fiscal-Fourth-Quarter-and-Fiscal-Year-2026-Financial-Results/default.aspx) (2026-07-28)
- `ev-4` [primary] [Seagate Technology Holdings plc: Form 8-K FY2026 (Q4 press release financials)](https://www.sec.gov/Archives/edgar/data/0001137789/000113778926000153/stxq42026pressreleasefinan.htm) (2026-07-28)
- `ev-5` [secondary] [BusinessWire: "Seagate Technology Reports Fiscal Fourth Quarter and Fiscal Year 2026 Financial Results"](https://www.businesswire.com/news/home/20260728962365/en/Seagate-Technology-Reports-Fiscal-Fourth-Quarter-and-Fiscal-Year-2026-Financial-Results) (2026-07-28)
- `ev-6` [primary] [Kioxia: "Kioxia and Sandisk to Invest Over $31 Billion in Japan"](https://apac.kioxia.com/en-apac/about/news/2026/20260827-3.html) (2026-08-27)
- `ev-7` [primary] [SanDisk: "Kioxia and Sandisk to Invest Over $31 Billion in Japan"](https://www.sandisk.com/company/newsroom/press-releases/2026/2026-08-27-kioxia-and-sandisk-to-invest-over-31-billion-in-japan-extending-leadership-in-memory-industry) (2026-08-27)
- `ev-8` [primary] [Sandisk Corp: Form 10-Q FY2026](https://www.sec.gov/Archives/edgar/data/2023554/000162828026004407/sndk-20260102.htm) (2026)
- `ev-9` [secondary] [Blocks and Files: "VDURA says 30 TB QLC SSD capacity now costs 22.6x more than HDD"](https://www.blocksandfiles.com/flash/2026/04/08/vdura-says-30-tb-qlc-ssd-capacity-now-costs-226x-more-than-hdd/5214761) (2026-04-08)
- `ev-10` [secondary] [ServNet UK: "SSD vs HDD Cost Per TB 2026: The 22.6x Capacity Gap"](https://www.servnetuk.com/research/ssd-vs-hdd-cost-per-tb-tco-2026) (2026)
- `ev-11` [secondary] [Igor's Lab: "TrendForce: DRAM and NAND remain more expensive in Q3 2026"](https://www.igorslab.de/en/dram-and-nand-remain-more-expensive-trendforce-sees-slowing-but-still-rising-memory-prices-q3-2026/) (2026-07)
- `ev-12` [secondary] [TrendForce: "AI Server Demand Continues to Support Memory Prices in 3Q26"](https://www.trendforce.com/presscenter/news/20260703-13134.html) (2026-07-03)
- `ev-13` [secondary] [Astute Group: "AI Memory Shortage Drives Enterprise SSD Prices Up 80%"](https://www.astutegroup.com/news/memory-shortages/ai-memory-shortage-drives-enterprise-ssd-prices-up-80/) (2026)
- `ev-14` [secondary] [Tom's Hardware: "Hard drives on backorder for two years as AI data centers trigger hard-drive shortage"](https://www.tomshardware.com/pc-components/hdds/ai-triggers-hard-drive-shortage-amidst-dram-squeeze-enterprise-hard-drives-on-backorder-by-2-years-as-hyperscalers-switch-to-qlc-ssds) (2026)
- `ev-15` [secondary] [Investing.com: "Earnings call transcript: Pure Storage Q4 2026 beats forecasts"](https://www.investing.com/news/transcripts/earnings-call-transcript-pure-storage-q4-2026-beats-forecasts-with-strong-growth-93CH-4526187) (2026)
- `ev-16` [secondary] [Futurum Group: "NetApp Q4 FY 2026: AI Deployments Accelerate High-Performance Storage Demand"](https://futurumgroup.com/insights/netapp-q4-fy-2026-ai-deployments-accelerate-high-performance-storage-demand/) (2026)
- `ev-17` [secondary] [TechSpot: "Seagate aims to launch 50TB HAMR hard drives in 2027"](https://www.techspot.com/news/113301-seagate-looking-launch-50tb-hamr-hard-disk-drives.html) (2026)
- `ev-18` [secondary] [Tom's Hardware: "Western Digital details 14-platter 3.5-inch HAMR HDD designs with 140 TB and beyond"](https://www.tomshardware.com/pc-components/hdds/western-digital-details-14-platter-3-5-inch-hamr-hdd-designs-with-140-tb-and-beyond) (2026)
