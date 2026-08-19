---
title: "CoWoS 先進封裝產能：AI 加速器供給的關鍵限制"
date: "2026-08-19"
slug: "cowos-packaging-broadcom-custom-ai-asics"
research_type: NEW
topics: ["semiconductors", "ai-infrastructure", "advanced-packaging"]
companies: ["Broadcom"]
verdict: "VALIDATE"
confidence: "medium"
primary_question: "2026 年 AI 加速器供給的關鍵限制，是否在於 TSMC 的 CoWoS 先進封裝產能，而非晶圓投片或 HBM 記憶體？這項限制是否使 Broadcom 的客製 ASIC 業務相對商用 GPU 供應商更具優勢？"
---

# 一句話結論

目前 AI 加速器供給的結構性瓶頸在於 CoWoS 先進封裝產能，而非矽晶圓投片或 HBM 記憶體；且其配額分配方式正在鞏固最大的既有買家，而非擴大參與者的範圍。

# Executive Summary（摘要）

Broadcom 的 2026 財年財測與 TSMC 自身的產能揭露，都指向同一個關鍵限制：TSMC 的 CoWoS 先進封裝產線已被預訂一空直到 2026 年底，而即使 TSMC 正努力將月產能提升到接近四倍，擴產仍受限於長達數年的設備交期。Broadcom 的客製 AI 加速器（XPU/ASIC）業務與 Nvidia 的商用 GPU 共用同一池稀缺封裝產能，其財測包括 Q3 FY2026 AI 半導體營收 160 億美元、全年約 560 億美元，以及超過 730 億美元、集中於六家超大規模客戶的已承諾訂單。由於封裝配額是透過多年期承諾量而非現貨採購取得，這種稀缺性看來正在強化資本最雄厚的大型買家（Nvidia 與 Broadcom 的六家錨定客戶）的地位，而非擴大供給基礎。主要不確定性兼具週期性與結構性：TSMC 宣示的 2026 年底產能目標若能達成並持續，將超過目前的全年需求估計；且歷史顯示，一旦 AI 資本支出減速，封裝與記憶體週期可能迅速從稀缺翻轉為過剩。

# Research Question / Why Now（研究問題與時機）

**主要問題：** 2026 年 AI 加速器供給的關鍵限制，是否在於 TSMC 的 CoWoS 先進封裝產能，而非晶圓投片或 HBM 記憶體？這項限制是否使 Broadcom 的客製 ASIC 業務相對商用 GPU 供應商更具優勢？

**子問題：**
- CoWoS 封裝需求的成長是否快於 TSMC 宣示的產能擴張？
- CoWoS 產能能多快擴張？擴張速度受什麼限制？
- AI 加速器設計能否繞開 CoWoS 這類先進封裝？
- 在 TSMC、Nvidia 與 Broadcom 的超大規模客戶之間，封裝配額分配的定價權掌握在誰手上？
- 什麼證據可以推翻這個瓶頸論點？

**Why now：** Broadcom Q2 FY2026 財報電話會議（AI 半導體營收財測）與 TSMC 2026 年第二季法說會確認 CoWoS 先進封裝產能 2026 年已全數售罄。

**論點：** 2026–2027 年 AI 加速器供給的關鍵限制是 TSMC 的 CoWoS 先進封裝產能，而非矽晶圓投片或 HBM 記憶體本身；且由於配額是透過多年期承諾量而非現貨訂單取得，這項限制正在強化資本最雄厚的大型買家（Nvidia 與 Broadcom 的六家錨定客製 ASIC 客戶）的地位，而非提升整體產業產出。

# Known Facts（已知事實）

- Broadcom 公布 Q2 FY2026 AI 半導體營收為 108 億美元，並預估 Q3 FY2026 AI 半導體營收將年增超過 200% 達 160 億美元。 _(evidence: ev-1)_
- Broadcom 預估 2026 全財年 AI 半導體營收約 560 億美元（年增約 180%），並重申 2027 財年 AI 半導體營收「超過 1,000 億美元」的指引，背後是超過 730 億美元的已承諾 AI 訂單。 _(evidence: ev-1)_
- Broadcom 的客製 AI 加速器（XPU/ASIC）設計業務服務六家核心超大規模客戶，公開已知包括 Google、Meta、Anthropic 與 OpenAI。 _(evidence: ev-1, ev-5)_
- TSMC 正將 CoWoS 先進封裝產能從 2024 年底約 35,000 片/月，擴張至 2026 年底約 125,000–130,000 片/月的目標，2026 年資本支出上調至 600–640 億美元，其中大部分投向先進製程（2nm/3nm）與先進封裝。 _(evidence: ev-2)_
- TSMC 管理層在 2026 年第二季財報溝通中表示，CoWoS 先進封裝產能 2026 年已全數預訂。 _(evidence: ev-2)_
- 產業分析師估計 Nvidia 約占 TSMC 2026 年 CoWoS 晶圓配額的 60%；Broadcom 的客製 ASIC 配額明顯較小但成長快速，其中相當比例與 Google 計畫對外供應 TPU、以及 Meta 與 OpenAI 的專案有關。 _(evidence: ev-3, ev-4)_
- OpenAI 正與 Broadcom 開發其第一顆客製 AI ASIC，該計畫規模據報約 100 億美元，預計由 TSMC 製造；初始出貨時程已從 2026 年 Q2 延後至 Q3 或更晚。 _(evidence: ev-5)_
- Meta 於 2026 年 4 月承諾在其 MTIA 計畫下與 Broadcom 共同建置一吉瓦（1 GW）規模的客製 AI 加速器。 _(evidence: ev-5)_

# Reasonable Inferences（合理推論）

- 由於 CoWoS 產能擴充需要多年的設備交期、TSMC 表示產線 2026 年已被訂滿，且商用 GPU 廠商與客製 ASIC 超大規模客戶的需求同步上升，封裝配額——而非晶圓投片或 HBM 記憶體——是 2026 年任何架構的 AI 加速器實際出貨量更具約束力的近期限制。 _(evidence: ev-1, ev-2, ev-3)_
- 由於封裝配額是透過多年期承諾量而非現貨採購取得，而 Broadcom 的錨定客戶兼具設計合作的可見度與足以做出此類承諾的資產負債表規模，這個瓶頸更可能強化大型既有玩家（Nvidia 與 Broadcom 的六家錨定客戶）的客戶集中度，而非讓較小或較新的進入者擴大 AI 加速器供給基礎。 _(evidence: ev-1, ev-4, ev-5)_
- TSMC 宣示的 2026 年底 125,000–130,000 片/月退出產能目標，年化後將超過分析師對 2026 全年需求的估計，意味著產能稀缺主要是因為它在年度中逐步爬坡、而非從一月就以該速率供應——這與 2026 年「售罄」的狀態一致，但若爬坡順利，限制在進入 2027 年時可能明顯緩解。 _(evidence: ev-2, ev-4)_

# Unknowns（未知）

- TSMC 實際的 CoWoS 產能利用率與各客戶別良率並未公開揭露。
- 各家分析報告的客戶別晶圓配額數字不一致（例如 Broadcom 的 2026 年 CoWoS 配額分別被估計為約 150,000 片與約 200,000 片）；TSMC 不確認客戶別拆分。
- 替代性先進封裝方案（扇出型面板級封裝、Samsung/Intel Foundry 的先進封裝）能否在 2026–2027 年的時間窗內吸收有意義的溢出需求。
- OpenAI 的客製 ASIC 計畫能否達成修正後的出貨時程；若再延誤，原因屬於封裝還是設計。

# Core Mechanism（核心機制）

無論是商用 GPU 還是超大規模客戶自行設計的客製 ASIC，每一顆 AI 加速器現在都依賴 TSMC 的 CoWoS 先進封裝，把邏輯晶片與高頻寬記憶體堆疊為單一模組。這個封裝步驟是整條產業鏈最緊的一環：TSMC 已表示產線 2026 年被訂滿，而新增產能所需的設備與良率學習以年為單位、而非以季為單位。由於 Nvidia、Broadcom 的六家錨定超大規模客戶與其他 ASIC 專案都在爭奪同一池有限的 CoWoS 晶圓，且配額是透過提前數年的具約束力承諾量協議、而非現貨市場分配，能做出最大且最早承諾的買家便取得不成比例的稀缺產能份額。這正是結構性瓶頸的定義機制：需求超過供給、供給無法快速回應、買方在 AI 訓練與推論所需的頻寬水準上難以替代 CoWoS 等級的封裝，於是稀缺資源的擁有者與其最大的承諾客戶取得了凌駕其他人的定價與配額權力。

# Industry Chain（產業鏈）

| 節點 | 角色 | 主要玩家 | 定價權 | 供給彈性 | 可替代性 |
| --- | --- | --- | --- | --- | --- |
| 先進製程晶圓製造（2nm/3nm） | Upstream | TSMC | High | Medium | Hard |
| CoWoS／先進封裝 | Components | TSMC、基板與封裝設備供應商 | High | Low | Hard |
| AI 加速器設計（商用 GPU 與客製 ASIC） | Platform | Nvidia、AMD、Broadcom（設計夥伴）、Google、Meta、OpenAI | Medium | Medium | Medium |
| 超大規模 AI 基礎設施部署 | Infrastructure | Google、Meta、Microsoft、Amazon、OpenAI | Medium | Medium | Medium |

# Bottleneck Analysis（瓶頸分析）

| 節點 | 需求 | 供給彈性 | 可替代性 | 定價權 | 機會分數 | 分類 |
| --- | --- | --- | --- | --- | --- | --- |
| CoWoS／先進封裝產能 | Extreme | Low | Hard | High | 5 | Structural Bottleneck |
| 先進製程晶圓製造（2nm/3nm） | High | Medium | Hard | High | 4 | Growth Area |
| AI 加速器設計（商用 GPU vs. 客製 ASIC） | Extreme | Medium | Medium | Medium | 3 | Growth Area |

- **CoWoS／先進封裝產能**：商用 GPU 與客製 ASIC 兩個通路的需求都極高，TSMC 表示產線 2026 年被訂滿，產能新增受多年設備交期限制，且目前沒有封裝替代方案能在相當規模下同時滿足 CoWoS 的頻寬與合格良率。
- **先進製程晶圓製造（2nm/3nm）**：需求高，但 TSMC 擴充先進製程晶圓產能的相對速度快於封裝，使此節點短期內不如 CoWoS 緊繃。
- **AI 加速器設計（商用 GPU vs. 客製 ASIC）**：需求與競爭強度都極高，但設計產能本身比最終決定出貨的實體封裝產能更有彈性。

# Key Metrics（關鍵指標）

| 指標 | 數值 | 單位 | 期間 | 成長 | 來源 |
| --- | --- | --- | --- | --- | --- |
| Q2 FY2026 AI 半導體營收（Broadcom） | 10.8 | USD billion | Q2 FY2026 | ~106% YoY | ev-1 |
| Q3 FY2026 AI 半導體營收財測（Broadcom） | 16.0 | USD billion | Q3 FY2026（財測） | >200% YoY | ev-1 |
| FY2026 AI 半導體營收財測（Broadcom） | 56 | USD billion | FY2026（財測） | ~180% YoY | ev-1 |
| FY2027 AI 半導體營收目標（Broadcom） | 超過 100 | USD billion | FY2027（財測） | null | ev-1 |
| 已承諾 AI 專屬訂單（Broadcom） | 73 | USD billion | 截至 Q2 FY2026 | null | ev-1 |
| TSMC CoWoS 產能（2024 年底） | 35,000 | wafers/month | 2024 年底 | null | ev-2 |
| TSMC CoWoS 產能目標（2026 年底） | 125,000–130,000 | wafers/month | 2026 年底（目標） | null | ev-2 |
| TSMC 2026 財年資本支出財測 | 60–64 | USD billion | FY2026（財測） | null | ev-2 |
| Nvidia 估計占 2026 年 CoWoS 晶圓配額比重 | ~60 | percent | 2026（分析師估計） | null | ev-3 |
| 全球 CoWoS 需求，2024 vs. 2026（分析師估計） | 370,000（2024）vs. ~1,000,000（2026） | wafers/year | 2024–2026（分析師估計） | null | ev-4 |

# Competition（競爭）

| 名稱 | 類型 | 說明 |
| --- | --- | --- |
| Nvidia（商用 GPU） | direct competitor | 估計持有 TSMC 2026 年 CoWoS 配額的最大單一份額（約 60%），與客製 ASIC 爭奪同一池稀缺封裝產能。 |
| AMD（商用 GPU／客製混合） | direct competitor | 同樣與 Nvidia 及 Broadcom 設計的客製 ASIC 競爭 CoWoS 配額。 |
| 超大規模客戶自研晶片計畫（如 Google TPU、Meta MTIA） | internal build | 依現有證據，這些計畫由 Broadcom 參與設計，但代表超大規模業者可降低對單一外部 ASIC 設計夥伴依賴的路徑；製造與封裝仍依賴 TSMC。 |
| 替代先進封裝供應商（Samsung、Intel Foundry、面板級扇出封裝新進者） | indirect alternative | 在研究時間窗內，尚未有可比擬的合格規模或量產紀錄支撐前緣 AI 加速器。 |

# Financial / Valuation（財務／估值）

_除 Broadcom 全公司營業利益率（Q2 FY2026 為 67%）外，未取得完整財務報表或毛利結構拆分。_

_未進行估值：本次研究未蒐集目前市價、稀釋後股數與完整財務報表。_

# Catalysts（催化劑）

- Broadcom Q3 FY2026 財報電話會議（預計 2026 年 9 月），實際 AI 半導體營收對照約 160 億美元的財測
- TSMC 2026 年第三季法說會（預計 10 月中），更新 CoWoS 產能與 FY2026/2027 資本支出指引
- OpenAI 客製 ASIC 出貨時程是否進一步延後或趨於穩定
- Google 對外供應 TPU 產能計畫的進一步揭露

# Strongest Bear Case（最強反方論點）

- **Supply（供給）**：TSMC 自身的指引目標是在約兩年內把 CoWoS 產能提升近四倍（35,000 → 125,000–130,000 片/月）；若擴產如期執行、而 AI 資本支出成長哪怕只是溫和減速，封裝瓶頸可能緩解甚至翻轉為過剩，重演過往半導體產能週期。
- **Competition（競爭）**：替代封裝技術（面板級扇出封裝、Samsung/Intel Foundry 先進封裝）吸收溢出需求的速度可能快於目前假設，侵蝕 CoWoS 的專屬稀缺性與 TSMC 的配額議價力。
- **Execution（執行）**：Broadcom 的成長論點建立在六家客戶的承諾訂單上，其中至少一個專案（OpenAI）已出現時程延誤；若超大規模客戶自研設計進一步成功或更多專案延誤，即使封裝產能不受限，AI 加速器需求也可能移出 Broadcom 設計的 ASIC。
- **Demand（需求）**：上述所有數字都假設超大規模業者的 AI 資本支出以目前速度持續複合成長；一旦出現全面性 AI 資本支出暫停，商用 GPU 與客製 ASIC 的需求會同時下滑，瓶頸壓力的緩解速度將快於供給端的調整。

# Kill Conditions（推翻條件）

| 條件 | 指標 | 門檻 | 時間窗 | 影響 |
| --- | --- | --- | --- | --- |
| CoWoS 交期正常化，或產能被確認不再全數訂滿 | TSMC 管理層對 CoWoS 預訂狀態的說法／公開的封裝交期 | TSMC 表示 CoWoS 年度產能不再訂滿，或交期回落到產業一般水準 | 未來 2–3 季 | invalidate |
| Broadcom AI 半導體營收不及財測 | 季度 AI 半導體營收 vs. 財測 | 連續兩季實際營收明顯低於財測 | 未來 2 季 | weaken |
| 超大規模客戶宣布大幅放緩 AI 資本支出 | 合計超大規模資本支出指引（Google、Meta、Microsoft、Amazon） | 合計資本支出成長逐季明顯減速 | 未來 2–3 季 | invalidate |

# 30–90 Day Validation（30–90 天驗證）

| 事件 | 時間窗 | 支持論點若 | 削弱論點若 | 追蹤來源 |
| --- | --- | --- | --- | --- |
| Broadcom Q3 FY2026 財報電話會議 | 2026 年 9 月 | AI 半導體營收達到或超越約 160 億美元的財測，且承諾訂單持續成長 | 營收不及財測或訂單成長停滯 | Broadcom 投資人關係（investors.broadcom.com） |
| TSMC 2026 年第三季法說會 | 2026 年 10 月中 | 管理層重申 CoWoS 產能訂滿，並維持或上調 2026/2027 產能與資本支出目標 | 管理層釋出 CoWoS 產能鬆動訊號，或下修資本支出指引 | TSMC 投資人關係（investor.tsmc.com） |
| OpenAI 客製 ASIC 出貨里程碑 | 2026 年 Q3–Q4 | 出貨持續延後，且延誤明確歸因於封裝或產能限制 | OpenAI 客製 ASIC 依修正後時程出貨，且未提及封裝相關延誤 | OpenAI 與 Broadcom 公開聲明、產業媒體 |
| 超大規模客戶 2026 年 Q3 資本支出指引（Google、Meta、Microsoft、Amazon） | 2026 年 10–11 月 | 資本支出指引持續成長，維持對封裝產能的需求壓力 | 資本支出指引減速或遭下修 | 各超大規模業者季度財報 |

# Final Assessment（總評）

**結論：VALIDATE**（信心水準：medium）

VALIDATE 的意思是：此主題值得以明確的驗證事件持續追蹤研究，而非立即投入高度信念。瓶頸框架的嚴格資格條件目前對 CoWoS 先進封裝成立——需求成長極高、供給彈性低、難以替代——且直接由兩家公司自身的財報揭露支撐。但兩項結構性不確定性使本結論停留在中等信心：其一，TSMC 的 2026 年底產能目標若達成，可能超過目前的全年需求估計，代表「售罄」狀態可能只是產能爬坡中段的快照、而非可持續多年的限制；其二，公司自身揭露以外的客戶別配額數字仰賴分析師估計，各來源差異明顯。既定的推翻條件與驗證事件——主要是下一次 TSMC 與 Broadcom 的財報——應可在一到兩季內釐清限制正在收緊、持平還是開始鬆動。

# Sources（資料來源）

- `ev-1` [primary] [Broadcom Inc. Form 8-K, Exhibit 99.1 -- Second Quarter Fiscal Year 2026 Financial Results press release](https://www.sec.gov/Archives/edgar/data/1730168/000173016826000051/avgo-05032026x8kxex99.htm) (2026-06-03)
- `ev-2` [primary] [TSMC Second Quarter 2026 Earnings Conference -- official investor presentation and earnings call materials](https://investor.tsmc.com/english/encrypt/files/encrypt_file/qr/phase4_reports/2026-07/9b7865fc366e66c9e73f04ab72a2a6c3c00fb49e/2Q26%20Presentation%20(E)_WoG.pdf) (2026-07-16)
- `ev-3` [secondary] [CNBC: "Nvidia snaps up AI chip packaging capacity as TSMC expands in U.S."](https://www.cnbc.com/2026/04/08/tsmc-nvidia-advanced-packaging-intel.html) (2026-04-08)
- `ev-4` [discovery] ["Who Will Divide Up the CoWoS Production Capacity in 2026?" -- industry report citing Morgan Stanley research](https://eu.36kr.com/en/p/3580962946874242) (2026-07)
- `ev-5` [secondary] [IBTimes: "What Is Broadcom? The Unknown Company Building the AI Chips Powering Google, Anthropic, OpenAI and Meta"](https://www.ibtimes.com/what-broadcom-unknown-company-building-ai-chips-powering-google-anthropic-openai-meta-3802922) (2026)
