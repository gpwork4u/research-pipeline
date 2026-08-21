---
title: "ABF 介電膜與 Ajinomoto 的近乎壟斷地位：CoWoS 產能吃緊趨緩後，AI 晶片封裝背後浮現的新瓶頸"
date: "2026-08-21"
slug: "abf-substrate-ajinomoto-ai-chip-packaging"
research_type: NEW
topics: ["semiconductors", "ai-infrastructure", "advanced-packaging", "materials"]
companies: ["Ajinomoto", "Ibiden", "Unimicron"]
verdict: "VALIDATE"
confidence: "medium"
primary_question: "既然台積電 CoWoS 封裝產能據稱正逐漸追上需求，AI 加速器供應鏈真正的結構性限制，是否已經轉移到更上游的一層——也就是 Ajinomoto 在 ABF 介電膜市場的近乎壟斷地位，以及 Ibiden、Unimicron 等 IC 載板廠所需的多年期產能擴建?"
---

# 一句話結論

隨著台積電 CoWoS 封裝產能逐漸追上需求，AI 加速器供應鏈的約束正在往上游一層轉移，來到 ABF 介電膜與以此製成的載板——依本研究自身嚴格的判準，這是一個真正的結構性瓶頸，而 CoWoS 封裝組裝本身則愈來愈不符合這項資格。

# Executive Summary（摘要）

2026 年 8 月 11 日，台積電先進封裝技術暨服務部門副總經理何軍在 OCP APAC 峰會上表示，CoWoS 封裝產能已連續三年幾乎每年翻倍，如今已「非常接近」市場需求——同時明確點名記憶體與 ABF 載板將是 AI 供應鏈的下一個瓶頸。這項發言與一連串具體發展相互呼應：在全球 ABF（Ajinomoto Build-up Film）市場市佔率估計達 95% 以上、幾乎為所有高效能 IC 載板核心介電材料供應商的 Ajinomoto，已通知載板廠自 2026 年第三季起調漲價格 30%；Ibiden 在表示其 AI 伺服器載板需求持續超過產能後，揭露了一項為期三年、約 33 億美元的資本投資計畫（2026–2028 財年）；台灣的欣興電子（Unimicron）則在毛利率因折舊上升壓縮至 2026 年第二季 13.2% 的同時，將 2026 年資本支出上調至約 17 億美元。以本研究嚴格的結構性瓶頸判準（需求 High/Extreme、供給彈性 Low、可替代性 Hard）檢視，ABF 介電膜與以 ABF 為基礎的載板兩個節點均符合資格；而 CoWoS 封裝組裝本身——鑑於台積電自身表示產能三年內幾近三倍成長——在本研究中則被重新歸類為成長領域（Growth Area），而非結構性瓶頸。最主要的不確定性在於：Ajinomoto、Ibiden 與 Unimicron 目前已在進行的多年期產能投資,最終是否會像 CoWoS 本身一樣,在類似的多年期時間軸上緩解這項限制;抑或多家供應商的產能同時到位,反而可能讓當前的短缺翻轉為供過於求——正如這個產業在記憶體與封裝週期中曾經發生過的情況。

# Research Question / Why Now（研究問題與時機）

**主要問題：** 既然台積電 CoWoS 封裝產能據稱正逐漸追上需求，AI 加速器供應鏈真正的結構性限制，是否已經轉移到更上游的一層——也就是 Ajinomoto 在 ABF 介電膜市場的近乎壟斷地位，以及 Ibiden、Unimicron 等 IC 載板廠所需的多年期產能擴建？

**子問題：**
- 截至 2026 年年中至下半年，CoWoS 產能相對於需求的實際狀況為何？產能缺口的縮小是否足以支持「封裝組裝本身已不再是約束因素」這項說法？
- Ajinomoto 在 ABF 介電膜市場的地位為何？其 2026 年第三季的漲價與新廠時程，揭示了 ABF 薄膜供給彈性的哪些特徵？
- IC 載板廠（Ibiden、Unimicron 及同業）投入了多少資本與時間來擴充 ABF 載板產能？這些新產能實際何時能夠上線？
- ABF 薄膜／載板這個節點是否符合結構性瓶頸的嚴格判準（需求 High/Extreme ＋ 供給彈性 Low ＋ 可替代性 Hard），還是更適合歸類為成長領域？
- 有什麼證據能推翻「ABF 材料與載板、而非 CoWoS 封裝產能，才是當前 AI 加速器供應的真正限制」這項論點？

**Why now：** 台積電副總經理何軍於 2026 年 8 月 11 日在 OCP APAC 峰會上表示，CoWoS 先進封裝產能歷經三年多近三倍成長後，如今已「非常接近」市場需求，同時明確點出記憶體與 ABF 載板是 AI 供應鏈的下一個瓶頸——與此同時，Ajinomoto（全球市佔率估計達 95% 以上）宣布 2026 年第三季 ABF 介電膜漲價 30%，Ibiden（約 5,000 億日圓／約 33 億美元，2026–2028 財年）與 Unimicron（2026 年資本支出上調至約新台幣 537 億元／約 17 億美元）也分別公布了數十億美元規模、為期多年的 ABF 載板產能擴建計畫。

**論點：** 隨著台積電 CoWoS 先進封裝產能歷經三年多近三倍成長後逐漸追上需求，AI 加速器供應鏈真正的結構性限制正轉移到上游一層,來到 ABF 介電膜以及以此製成的 IC 載板：Ajinomoto 在全球 ABF 薄膜供給市場估計 95% 以上的市佔率、其 2026 年第三季的 30% 漲價，以及載板廠 Ibiden 與 Unimicron 各自規模達數十億美元、為期多年的產能擴建計畫（兩者主要新產能均鎖定 2028 年或之後上線），共同顯示封裝已不再是這條鏈中最緊繃的環節——材料與載板製造才是；依本研究採用的嚴格定義（需求極高、供給彈性低、可替代性困難），這個節點符合真正結構性瓶頸的資格，而 CoWoS 封裝組裝則愈來愈不符合。

# Known Facts（已知事實）

- 2026 年 8 月 11 日在 OCP APAC 峰會上，台積電先進封裝技術暨服務部門副總經理何軍表示，CoWoS 產能已連續三年幾乎每年翻倍，如今已「非常接近」市場需求；台積電 5.5 倍光罩尺寸的 CoWoS 已進入量產，多項 AI 客戶產品良率穩定超過 98%，部分甚至達到 99%，公司並計劃在 2029 年前將 CoWoS 擴展至超過 14 倍光罩尺寸。 _(evidence: ev-1, ev-2)_
- 在同一場活動中，何軍指出記憶體與 ABF 載板是 AI 供應鏈接下來浮現的關鍵瓶頸，表示未來幾年產業很可能面臨 ABF 載板供給吃緊的情況，約束正從 CoWoS 封裝製程本身，轉移到周邊元件；他也指出，隨著產能吃緊，採購團隊正轉向多元採購，但不同供應商在機械與熱性質上的差異，使製程控制變得更加困難。 _(evidence: ev-1, ev-2)_
- 在台積電 2026 年第二季財報電話會議上（2026 年 7 月 16 日），執行長魏哲家表示 CoWoS 目前仍是主流先進封裝技術，台積電正在建立一條替代性、成本較低的封裝技術試產線，還需約一年才能成熟並進入客戶量產階段；由於持續強勁的結構性 AI 需求，台積電已將 2026 全年資本支出預算上調至 600 億至 640 億美元之間。 _(evidence: ev-3)_
- 在全球 ABF（Ajinomoto Build-up Film）市場市佔率估計達 95% 以上——ABF 是幾乎所有高效能 IC 載板核心介電絕緣材料——的 Ajinomoto，已通知台灣及其他地區的載板製造商，將自 2026 年第三季起調漲其核心 ABF 薄膜價格 30%；產業報導將此次漲價與預期將持續至 2027 年的 ABF 載板供需缺口相連結。 _(evidence: ev-4, ev-8, ev-11)_
- Ibiden 董事會核准一項約 5,000 億日圓（約 33 億美元）的資本投資計畫，涵蓋 2026 至 2028 三個財年，用於擴充高效能 IC 載板產能，第一階段主要投入現有 Gama 廠（Cell 6）；該公司在自身 2026 年 2 月 3 日的公告中揭露，其 AI 伺服器 IC 載板需求持續超過產能，並估計其在該產品類別的市佔率約為 70–80%。 _(evidence: ev-5, ev-10)_
- Ibiden 透過發行約 524.7 億日圓的追加公開發行股票（約 687.47 萬股普通股，每股 7,632 日圓）來支應部分擴建資金，此項籌資與其 2026 年 2 月的資本投資計畫一併揭露。 _(evidence: ev-5)_
- 台灣掛牌的欣興電子（Unimicron，證券代號 3037）在其 2026 財年第二季財報電話會議上（2026 年 7 月 29 日）公布，合併營收約新台幣 278.8 億元（約 8.6 億美元），季增 5.6%，但毛利率因產能擴建帶動折舊費用上升，加上低階 ABF 與傳統 PCB 產品線價格持續承壓，季減 3.1 個百分點至 13.2%；董事會核准追加新台幣 197 億元（約 6.09 億美元）資本支出，使 2026 年資本支出總額達到約新台幣 537 億元（約 17 億美元）。 _(evidence: ev-6)_
- Unimicron 表示，AI 與 HPC 應用在 2026 年上半年佔其 ABF 載板營收逾 60%，預期下半年將提升至約 70%，公司並以 ABF 與 AI 系統板需求為動能，目標創下 2026 年全年營收新高。 _(evidence: ev-7)_
- 據報導 ABF 載板供需缺口將持續至 2027 年，至少有一項產業分析師估計指出，缺口到 2028 年可能擴大至高達 26–29%，促使多家券商上調 Unimicron、南亞電路板與景碩等 ABF 載板廠的目標價。 _(evidence: ev-8, ev-9)_
- 另一份 TrendForce 報告（2026 年 8 月 19 日）指出，CoWoS 產能吃緊所產生的外溢需求，正使英特爾 EMIB-T 等替代先進封裝方案受惠，載板與封裝供應商 Unimicron 與日月光（ASE）被視為可能因此受益。 _(evidence: ev-12)_
- Ibiden 與 Unimicron 自身的揭露內容，與部分探索層級的評論在大方向上相互印證——這些評論描述僅有少數幾家供應商（Ibiden、Unimicron、揖斐電〔Shinko Electric〕、AT&S）掌控了大部分高階 IC 載板市場、且產能利用率偏高；但本研究並未取得可佐證確切集體市佔率或產能利用率百分比的次要或主要來源數字。 _(evidence: ev-5, ev-6, ev-9, ev-10)_

# Reasonable Inferences（合理推論）

- 由於台積電自家副總經理公開表示，CoWoS 產能在連續三年幾乎翻倍後已「非常接近」需求，且台積電執行長也將 CoWoS 描述為目前仍是主流技術、同時正積極開發成本較低的替代方案，CoWoS 封裝組裝這個環節本身似乎正從結構性瓶頸轉向成長領域——這與本研究團隊 2026 年 8 月 19 日 CoWoS 報告中已提出的不確定性相互一致，該報告當時即指出，台積電 2026 年底的產能擴建目標，有可能超過當時全年需求的估計值。 _(evidence: ev-1, ev-2, ev-3)_
- 由於 Ajinomoto 的 ABF 薄膜位於每一家主要 IC 載板廠的上游，市佔率估計達 95% 以上，且目前並無經量產驗證的替代材料，加上即使在下游載板廠自身毛利率承壓（Unimicron 毛利率降至 13.2%）之際，Ajinomoto 仍能實施 30% 的漲價，展現出定價權——Ajinomoto 的地位看起來是這條鏈中更集中、更持久的瓶頸，程度更甚於載板製造這個環節本身，因為後者至少還有三家規模不小的競爭者（Ibiden、Unimicron、揖斐電）能提供一定程度的多元採購空間。 _(evidence: ev-4, ev-5, ev-6, ev-10, ev-11)_
- 由於 Ibiden 與 Unimicron 的擴建計畫都是多年期方案（Ibiden 為期三年、約 33 億美元的計畫至 2028 財年；Unimicron 的產能擴充則分階段延伸至 2028–2030 年），而 TrendForce 相關分析預期 ABF 載板供需缺口將在 2027–2028 年持續擴大而非收斂,載板製造這一層供應鏈,交期似乎明顯長於 CoWoS 封裝組裝當年多年期擴建的速度,顯示 AI 加速器供應鏈的約束,未來 1 至 2 年仍可能停留在封裝組裝的更上游。 _(evidence: ev-5, ev-6, ev-9)_
- 由於台積電自身管理層同時在開發一條較低成本的替代封裝試產線（預計約一年內成熟）並持續推進玻璃載板技術，產業本身似乎正把對 ABF 載板的依賴視為一項值得刻意繞開的風險，這支持將 ABF 材料／載板節點歸類為一項真正的結構性限制，而非參與者普遍預期單靠增加產能便能自行緩解的週期性吃緊。 _(evidence: ev-3)_

# Unknowns（未知）

- Ajinomoto 自身針對 2026 年第三季 ABF 漲價的投資人關係與企業溝通資料，在本次研究中因研究環境的出口代理伺服器遭封鎖而無法直接擷取；30% 的漲幅與生效季度，是根據多方一致的次要／探索層級報導,而非直接取得的原始聲明。
- AI 加速器封裝需求成長中，有多少確切歸因於 ABF 材料短缺、又有多少歸因於台積電同一份 2026 年 8 月 11 日聲明中同時提及的記憶體（HBM）供給或其他限制，現有報導並未進行明確拆分。
- Ajinomoto 或任何競爭者的新增產能（例如現有報導所稱、鎖定 2032 年投產的 Ajinomoto 岐阜縣新廠）相對於 2028–2032 年 AI 加速器需求而言，究竟是充足、不足或過剩，目前尚屬未知；本次研究並未取得任何 2028 年後的整合供需預測來源。
- 現有關於 Unimicron 2026 年第二季業績的次要報導中，部分數字存在內部不一致之處（其中一份來源提及的毛利率與每股盈餘數字，明顯高於本研究所採用、來自財報電話會議摘要、細節更完整且內部一致的數字）；本研究採用較細緻且內部一致的數字（毛利率 13.2%、營收新台幣 278.8 億元），並將此差異標註為尚未釐清，而非在缺乏原始資料的情況下逕自調和。

# Core Mechanism（核心機制）

台積電的 CoWoS 先進封裝產能在三年內幾乎成長為原本的三倍，據其副總經理表示，如今已足夠接近需求，使公司認為 AI 供應鏈的約束已經超越封裝組裝本身，轉移到記憶體與 ABF 載板。這項轉變可追溯至上游更深一層的真正瓶頸：Ajinomoto 的 ABF（Ajinomoto Build-up Film）是幾乎所有高效能 IC 載板所使用的介電材料，Ajinomoto 在該市場的市佔率估計達 95% 以上，且目前並無經量產驗證的替代材料。當 Ajinomoto 針對 2026 年第三季推出 30% 的漲價時，載板廠幾乎沒有其他有意義的替代供應商可以轉單——這種定價權在下游表現得相當明顯：Unimicron 的毛利率在 2026 年第二季降至 13.2%，即便其 AI 相關營收正邁向創紀錄的一年，原因是原料成本上升與產能擴建帶來的折舊，壓縮毛利的速度快於 AI 驅動的出貨量所能彌補。緊接在 Ajinomoto 之下的載板製造層——Ibiden、Unimicron 及同業——本身也受到資本與時間的雙重限制：Ibiden 約 33 億美元、為期三年的擴建計畫，以及 Unimicron 上調後的 2026 年資本支出，皆屬多年期承諾，而產業分析師的預測則指出，ABF 載板供需缺口將持續到 2027 年，並可能延伸至 2028 年。這比 CoWoS 產能從吃緊走向「非常接近」需求所花的三年時間要長得多，這也是本研究將當前約束定位在上一份 CoWoS 主題分析所在位置更上游一層的原因：真正的限制,已不在於能否組裝出 AI 加速器,而在於能否製造並供應這些加速器所賴以建構的介電膜載板本身。

# Industry Chain（產業鏈）

| 節點 | 角色 | 主要玩家 | 定價權 | 供給彈性 | 可替代性 |
| --- | --- | --- | --- | --- | --- |
| ABF 介電膜（上游材料） | Upstream | Ajinomoto | High | Low | Hard |
| 高效能 IC 載板製造 | Components | Ibiden、Unimicron、揖斐電（Shinko Electric）、AT&S、三星電機（Samsung Electro-Mechanics） | Medium | Low | Medium |
| 先進封裝／CoWoS 組裝 | Infrastructure | 台積電（TSMC） | High | Medium | Hard |
| AI 加速器設計與組裝 | Platform | Nvidia、Broadcom、AMD | High | Low | Hard |
| AI 運算基礎設施業者（超大規模業者） | Application | Microsoft、Google、Amazon、Meta、Oracle | Medium | Medium | Medium |

# Bottleneck Analysis（瓶頸分析）

| 節點 | 需求 | 供給彈性 | 可替代性 | 定價權 | 機會分數 | 分類 |
| --- | --- | --- | --- | --- | --- | --- |
| ABF 介電膜材料供給（Ajinomoto） | Extreme | Low | Hard | High | 4 | Structural Bottleneck |
| 高效能 ABF 基載板製造（Ibiden、Unimicron、揖斐電、AT&S） | Extreme | Low | Hard | Medium | 3 | Structural Bottleneck |
| 先進封裝／CoWoS 組裝產能（台積電） | Extreme | Medium | Hard | High | 3 | Growth Area |

- **ABF 介電膜材料供給（Ajinomoto）**：ABF 薄膜的需求極高，緊貼整個 AI 加速器封裝建設的步伐。供給彈性偏低：Ajinomoto 市佔率估計達 95% 以上，且無經量產驗證的替代材料，其新宣布的產能也要到 2032 年才投產。可替代性困難：每一家主要 IC 載板廠（Ibiden、Unimicron、揖斐電、AT&S）都仰賴同一種材料，且據報導在嘗試多元採購替代介電材料時面臨製程控制上的困難，顯示轉換供應商並非易事。即使下游載板廠毛利率正在承壓，Ajinomoto 仍能順利實施 30% 的漲價，這正是與真正瓶頸相符的定價權直接證據。
- **高效能 ABF 基載板製造（Ibiden、Unimicron、揖斐電、AT&S）**：需求成長極高，反映在 Ibiden 與 Unimicron 自身揭露的「需求超過現有產能」，以及兩家公司雙雙創紀錄的資本支出計畫上。由於多年期資本支出週期，加上核心供應商產能利用率已接近滿載，供給彈性偏低。就實務而言，短期內可替代性也屬困難：儘管市場上存在三到四家規模不小的供應商，但台積電自身副總經理指出，不同供應商在機械與熱性質上的差異，使多元採購與製程控制更加複雜，意味著買方無法輕易且快速地在合格供應商之間切換。獲利留存比例則顯得偏低：Unimicron 的毛利率即使在營收創紀錄之際仍降至 13.2%，與載板廠正吸收原料成本上升（包括 Ajinomoto 的漲價）與產能擴建折舊、而非攫取超額利潤的情況相符。
- **先進封裝／CoWoS 組裝產能（台積電）**：需求依然極高，而領先製程 CoWoS 的可替代性依然困難（台積電在此節點並無規模相當的競爭者）——若按過去的標準，這原本應被判定為結構性瓶頸，正如本研究團隊 2026 年 8 月 19 日的報告所發現。然而，依據最新證據，供給彈性已改善至 Medium：台積電自身副總經理表示，產能在三年多近三倍成長後，如今已「非常接近」需求，量產良率超過 98–99%。由於嚴格判準要求供給彈性偏低須與極高需求及困難可替代性同時成立，此節點已不像前一次研究時那樣乾淨地符合門檻，本研究因此將其重新歸類為成長領域，待台積電 2026 年第三季財報電話會議進一步確認。

# Key Metrics（關鍵指標）

| 指標 | 數值 | 單位 | 期間 | 成長 | 來源 |
| --- | --- | --- | --- | --- | --- |
| Ajinomoto 全球 ABF 介電膜市佔率估計 | 95 以上 | percent（估計） | 截至 2026 年 | null | ev-4 |
| Ajinomoto ABF 薄膜漲價幅度 | 30 | percent | 自 2026 年第三季起生效 | null | ev-8 |
| 台積電 CoWoS 良率，5.5 倍光罩尺寸產品 | 98–99 | percent | 截至 2026 年 8 月 | null | ev-1 |
| 台積電 2026 全年資本支出指引 | 60–64 | USD billion | 2026 財年 | null | ev-3 |
| Ibiden 高效能 IC 載板資本投資計畫 | 約 500（日圓）／約 3.3（美元） | JPY billion／USD billion（約值） | 2026–2028 財年（三年） | null | ev-5 |
| Ibiden 於 AI 伺服器 IC 載板之估計市佔率 | 70–80 | percent（估計，公司自行揭露） | 截至 2026 年 2 月 | null | ev-5 |
| Ibiden 為支應產能擴建之追加公開發行股票金額 | 52.47 | JPY billion | 2026 年 2 月 | null | ev-5 |
| Unimicron 2026 年第二季合併營收 | 27.88（新台幣）／約 0.86（美元） | NT$ billion／USD billion（約值） | 2026 年第二季 | 季增 5.6% | ev-6 |
| Unimicron 2026 年第二季毛利率 | 13.2 | percent | 2026 年第二季 | 季減 3.1 個百分點 | ev-6 |
| Unimicron 2026 年資本支出總額（上調後） | 53.7（新台幣）／約 1.7（美元） | NT$ billion／USD billion（約值） | 2026 全年 | null | ev-6 |
| Unimicron AI／HPC 佔 ABF 載板營收比重，上半年 vs. 下半年（預估） | 60 以上（上半年）朝向約 70（下半年預估） | percent | 2026 年 | null | ev-7 |
| ABF 載板供需缺口預估，2027–2028 年 | 至 2028 年最高達 26–29 | percent（產業分析師預估） | 2027–2028 年 | null | ev-9 |

# Competition（競爭）

| 名稱 | 類型 | 說明 |
| --- | --- | --- |
| 台積電內部替代封裝試產線（非 CoWoS／不依賴 ABF 之方案） | internal build | 台積電執行長描述了一條成本較低的替代封裝技術試產線，預計約一年內成熟，並持續推進玻璃載板技術——這是一條可能長期繞開 ABF 載板依賴的替代路徑，惟尚未進入量產。 |
| 揖斐電（Shinko Electric）／AT&S／三星電機（Samsung Electro-Mechanics） | direct competitor | 除 Ibiden 與 Unimicron 外，其他具備合格資格的高效能 IC 載板廠；本研究未針對這三家公司蒐集個別產能或財務細節，惟報導中提及它們與其他業者共同掌握大部分集體市佔率。 |
| Resonac／三菱瓦斯化學（相鄰載板材料，如銅箔基板） | indirect alternative | 據報導，這兩家公司在與 Ajinomoto 調漲 ABF 價格相近的時期，也調漲了銅箔基板材料價格約 30%，顯示成本壓力並非僅侷限於單一材料的壟斷故事，儘管 ABF 本身目前並無經報導證實的合格替代材料。 |

# Financial / Valuation（財務／估值）

_Ajinomoto、Ibiden 與 Unimicron 公司概況：本研究蒐集了三家公司在供應鏈、定價與產能擴建方面的證據，包括 Unimicron 2026 年第二季的毛利率（13.2%）與營收數字，惟未蒐集 Ajinomoto 或 Ibiden 的完整財務報表、成本結構或營業利益率數字。_

_未進行估值：本次研究並未針對這三家公司蒐集目前市價、稀釋後股數與完整財務報表。_

# Catalysts（催化劑）

- 台積電 2026 年第三季財報電話會議（2026 年 10 月中旬），觀察對記憶體與 ABF 載板瓶頸最新評論
- Ibiden 2026 財年第二季業績（截至 2026 年 9 月止期間，預計 2026 年 10 月下旬至 11 月上旬公布），觀察資本支出進度與 Gama／Ono 廠進展
- Unimicron 2026 年第三季財報電話會議（預計 2026 年 10 月下旬），觀察毛利率走勢與 ABF 產能利用率
- TrendForce 或其他產業分析師針對 ABF 載板供需缺口預測的進一步更新

# Strongest Bear Case（最強反方論點）

- **Supply（供給面）**：多家 ABF 載板廠（Ibiden、Unimicron，據報導還有揖斐電、AT&S，以及 Unimicron 鼎鑫廠等中國大陸產能）正同時投入新產能；若這些產能依現行規劃在 2028–2030 年同步到位，本研究視為結構性的 ABF 短缺，可能翻轉為供過於求,正如這個產業在記憶體與封裝週期中曾經發生過的情況。
- **Technology（技術面）**：台積電正積極開發成本較低的替代封裝方案（預計約一年內成熟的試產線）與玻璃載板技術；若這些替代方案提前於 2028 年之前進入量產，本研究對 ABF 基載板「可替代性困難」的判斷，可能提前弱化。
- **Demand（需求面）**：若 AI 超大規模業者的資本支出成長減速——這項風險已在本研究團隊先前的 CoWoS 與 Nvidia 融資報告中提出——ABF 薄膜與載板的需求成長也將隨之放緩，緩解此瓶頸的速度可能快於目前產能擴建時程所暗示的節奏。
- **Competition（競爭面）**：據報導，相鄰載板材料（Resonac 與三菱瓦斯化學的銅箔基板）也調漲了約 30%，顯示 IC 載板供應鏈的成本壓力範圍更廣，並非僅限於單一公司的壟斷故事，這可能反映整個吃緊但多供應商並存的市場中，正常的原物料成本上升，而非 Ajinomoto 獨有的高度集中瓶頸。
- **Execution（執行面）**：現有關於 Unimicron 2026 年第二季業績的次要報導存在內部不一致之處（其中一份來源引用的毛利率與每股盈餘數字，明顯不同於本研究所採用、來自財報電話會議的更詳細摘要），顯示這條供應鏈實際承受的毛利與產能壓力程度，比本研究呈現的清晰敘事更難從公開報導中精確判定。

# Kill Conditions（推翻條件）

| 條件 | 指標 | 門檻 | 時間窗 | 影響 |
| --- | --- | --- | --- | --- |
| Ajinomoto 或具公信力的替代 ABF 材料供應商，遠早於現有報導所稱的 2032 年目標便推出有意義的新產能上線，或某家頂級載板廠已在量產中採用經合格驗證的替代介電材料 | 已公布／確認的新增 ABF 同等材料產能或合格替代材料採用情況 | 新增產能達當前全球 ABF 供給量至少 10%並確認上線，或至少一家前三大載板廠已在量產中採用經合格驗證的替代材料 | 未來 2–3 年 | invalidate |
| 產業分析師追蹤的 ABF 載板供需缺口，遠早於目前預估的 2027–2028 年時間窗便明顯收斂或轉為供過於求 | 產業分析師回報之 ABF 載板供需缺口百分比 | 未來 12–18 個月內缺口降至約 10% 以下，或轉為供過於求 | 未來 12–18 個月 | invalidate |
| AI 超大規模業者資本支出指引明顯減速，降低對 AI 加速器、進而降低對 ABF 載板的下游需求 | 超大規模業者（Google、Meta、Microsoft、Amazon）合計資本支出成長指引 | 合計財測資本支出成長率逐季明顯減速 | 未來 2–3 季 | weaken |

# 30–90 Day Validation（30–90 天驗證）

| 事件 | 時間窗 | 支持論點若 | 削弱論點若 | 追蹤來源 |
| --- | --- | --- | --- | --- |
| Ajinomoto 下一次針對其電子材料（ABF）事業部的投資人揭露／財報評論 | 約 2026 年 11 月（Ajinomoto 2026 財年上半年，即 4 月至 9 月，業績） | Ajinomoto 確認 2026 年第三季漲價已生效、重申其 ABF 產能時程（包括現有報導所稱 2032 年新廠目標），並回報 ABF 需求／價格持續強勁 | Ajinomoto 回報漲價幅度縮減、延後，或新產能時程大幅提前於 2032 年 | Ajinomoto 集團投資人關係（ajinomoto.com） |
| Ibiden 2026 財年第二季業績（截至 2026 年 9 月止期間） | 2026 年 10 月下旬至 11 月上旬 | Ibiden 重申 AI 伺服器 IC 載板需求持續超過產能，並確認其資本支出計畫與 Gama／Ono 廠時程如期進行 | Ibiden 回報需求相對產能出現軟化，或延後／縮減其 2026–2028 財年資本投資計畫 | Ibiden 投資人關係（ibiden.com/ir） |
| Unimicron 2026 年第三季財報電話會議 | 2026 年 10 月下旬 | AI／HPC 佔 ABF 載板營收比重持續朝向或超越 2026 年下半年約 70% 的預估邁進，產能利用率／毛利率趨勢顯示產能限制持續存在 | 毛利率明顯回升，或 AI／HPC 營收比重趨於平緩，顯示載板短缺緩解速度快於預期 | Unimicron 投資人關係（unimicron.com） |
| 台積電 2026 年第三季財報電話會議 | 2026 年 10 月中旬 | 台積電管理層重申或升高 2026 年 8 月 11 日 OCP APAC 峰會關於記憶體／ABF 載板瓶頸的評論 | 台積電管理層表示記憶體／ABF 限制已經緩解，或 CoWoS 周邊供應鏈壓力緩解速度快於預期 | 台積電投資人關係（investor.tsmc.com） |

# Final Assessment（總評）

**結論：VALIDATE**（信心水準：medium）

VALIDATE 的意思是：此主題值得以明確的驗證事件持續追蹤研究，而非立即投入高度信念。本研究蒐集到的證據，支持嚴謹地套用本研究團隊自身的瓶頸分析框架：與其單純延續先前「CoWoS 封裝是 AI 加速器供應鏈結構性限制」的判斷，最新證據——台積電自身表示產能三年內幾近三倍成長且正逐漸追上需求——更支持將 CoWoS 封裝組裝重新歸類為成長領域，並將真正的約束定位到 ABF 介電膜與以此製成的載板；Ajinomoto 的近乎壟斷地位、定價權與 2032 年產能時程，加上 Ibiden 與 Unimicron 自身數十億美元規模的多年期擴建計畫，共同符合結構性瓶頸的嚴格定義。這項論點面臨的最明顯風險，正是這個產業過去曾經歷過的情況：多家供應商的新產能若同時到位，可能使當前的短缺翻轉為供過於求——就如同 CoWoS 產能追上需求的速度，似乎也快於部分早期評估的預期。既定的推翻條件與驗證事件——尤其是台積電、Ibiden 與 Unimicron 接下來的財報電話會議——應可在一到兩季內，釐清 ABF 瓶頸究竟會加深、持平，還是開始沿著與 CoWoS 相似的多年期軌跡緩解。

# Sources（資料來源）

- `ev-1` [secondary] [Digitimes: "OCP APAC 2026: TSMC says AI advanced packaging enters system-level battle"](https://www.digitimes.com/news/a20260811PD258/packaging-tsmc-demand-design-development.html) (2026-08-11)
- `ev-2` [secondary] [TrendForce: "TSMC's 5.5-Reticle CoWoS Reportedly Tops 99% Yield; Flags Memory, ABF as AI Bottlenecks"](https://www.trendforce.com/news/2026/08/11/news-tsmcs-5-5-reticle-cowos-reportedly-tops-99-yield-flags-memory-abf-as-ai-bottlenecks/) (2026-08-11)
- `ev-3` [primary] [TSMC Q2 2026 earnings call transcript (Investing.com), cross-referenced with Motley Fool and Seeking Alpha Q2 2026 transcripts and Benzinga's full transcript coverage](https://www.investing.com/news/transcripts/earnings-call-transcript-tsmc-lifts-2026-outlook-as-ai-demand-stays-hot-in-q2-2026-93CH-4794777) (2026-07-16)
- `ev-4` [secondary] [Digitimes: "Ajinomoto raises ABF substrate film prices 30%"](https://www.digitimes.com/news/a20260513PD230/ic-substrate-abf-substrate-demand-substrate-2026.html) (2026-05-13)
- `ev-5` [primary] [IBIDEN CO., LTD.: "Notice Regarding Capital Investment Plan for High-Performance IC Package Substrates"](https://www.ibiden.com/company/2026/02/notice-regarding-capital-investment-plan-for-high-performance-ic-package-substrates.html) (2026-02-03)
- `ev-6` [secondary] [BigGo Finance: "Unimicron FY2026 Q2 Earnings Call: Gross Margin Plunges to 13.2%, Hitting a Recent Low; AI Revenue Exceeds 20% of Total; Utilization Rates Set to Rebound in Second Half"](https://finance.biggo.com/news/TW_3037.TW_2026-07-29) (2026-07-29)
- `ev-7` [secondary] [Digitimes: "Unimicron targets record 2026 revenue with ABF and AI system-board push"](https://www.digitimes.com/news/a20260529PD239/unimicron-revenue-2026-demand-substrate.html) (2026-05-29)
- `ev-8` [secondary] [WCCFTech: "MSG Maker, Ajinomoto, To Raise Prices By 30% As ABF Substrate Supply-Demand Gap Extends To 2027 Due To AI Supercycle"](https://wccftech.com/msg-maker-ajinomoto-to-raise-prices-as-abf-substrate-supply-demand-gap-extends-to-2027/) (2026)
- `ev-9` [discovery] [BigGo Finance: "ABF Substrate Supply-Demand Gap Could Surge to 29% by 2028; Foreign and Domestic Brokers Across-the-Board Raise Target Prices for Unimicron, Nan Ya PCB, and Kinsus"](https://finance.biggo.com/news/4978b0ef-fc31-4d7d-9de1-c14abbafc97b) (2026)
- `ev-10` [discovery] [Substack (Nikhs): "Ibiden: The Hidden Bottleneck Beneath AI"](https://nikhs.substack.com/p/ibiden-the-hidden-bottleneck-beneath) (2026)
- `ev-11` [discovery] [Substack (Next Financial): "The MSG Monopoly: How a Japanese Food Company Owns 98% of the Material Inside Every AI Chip"](https://nextfinancial.substack.com/p/the-msg-monopoly-how-a-japanese-food) (2026)
- `ev-12` [secondary] [TrendForce: "Intel EMIB-T Push Gains Momentum as TSMC CoWoS Crunch Drives Spillover; Unimicron, ASE Stand to Benefit"](https://www.trendforce.com/news/2026/08/19/news-intel-emib-t-push-gains-momentum-as-tsmc-cowos-crunch-drives-spillover-unimicron-ase-stand-to-benefit/) (2026-08-19)
