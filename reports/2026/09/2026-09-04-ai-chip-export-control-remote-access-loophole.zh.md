---
title: "雲端漏洞：美國AI晶片出口管制能否禁得起遠端存取？"
date: "2026-09-04"
slug: "ai-chip-export-control-remote-access-loophole"
research_type: NEW
topics: ["ai-policy", "semiconductors", "export-controls", "geopolitics"]
companies: ["Nvidia", "Huawei"]
verdict: "VALIDATE"
confidence: "medium"
primary_question: "美國AI晶片出口管制存在的漏洞——中國企業透過泰國、新加坡、印尼與日本的第三國資料中心合法租用Nvidia Blackwell GPU存取權——是否構成美國AI出口政策上一項持久的結構性瓶頸？抑或《遠端存取安全法案》與商務部草擬中的新規，將在中國自研晶片產能追上之前把這個漏洞堵上？"
---

# 一句話結論

眾議院已通過法案、商務部也在草擬新規以堵住中國租用Nvidia GPU的漏洞，但參議院擱置與華為產能攀升讓時程存疑。

# Executive Summary

中國企業已合法透過泰國、新加坡、印尼與日本的資料中心租用受管制的Nvidia Blackwell GPU，已知交易包括騰訊經日本Datasection以12億美元租用15,000顆GPU，及INF Tech經印尼租用2,300顆GPU。眾議院於2026年1月以369比22票通過《遠端存取安全法案》堵住此缺口，商務部BIS也據報草擬同一漏洞的新規，最快9月公布，但參議院版本已擱置八個月，律師並質疑BIS是否有獨自執法的授權。同期Nvidia在中國的直接銷售市佔率已趨近於零，華為則加速拉升本土昇騰產能，估計將取得中國AI晶片市場約90%份額。真正受限的瓶頸並非晶片供給，而是執法機制本身。

# Research Question / Why Now

**主要問題：**詳見前述前言。

**子問題：**
- 已知的遠端存取租用交易規模與紀錄為何？
- 相關法案與草擬新規的立法進度及法律授權缺口為何？
- 美國出口政策如何影響Nvidia在中國的營收與市佔率？
- 中國本土晶片替代方案擴產速度是否降低堵住漏洞的重要性？
- 什麼跡象能區分持久的執法瓶頸與自然消失的暫時缺口？

**為何是現在：**2026年9月初，報導指出商務部BIS已草擬鎖定經泰國、新加坡遠端存取Nvidia GPU的新規，最快9月與業界分享——此前眾議院已於1月表決通過，且已有租用交易紀錄顯示漏洞正被大規模利用。此節點有別於本管線先前檢視的CoWoS封裝、HBM、ABF基板、NAND/HDD等實體供應鏈瓶頸。

**論點：**中國AI企業正合法利用出口管制的一項漏洞——租用海外Nvidia GPU存取權而非進口晶片——即使Nvidia中國直接銷售已趨近於零，仍促成數十億美元交易。眾議院已修法、BIS也草擬新規，但法案在參議院擱置，BIS可能缺乏獨自行動的授權，使此漏洞成為尚未關閉的瓶頸，其持久性取決於立法能否趕上中國本土晶片擴產速度。

# Known Facts

- 眾議院於2026年1月12日以369比22票通過《遠端存取安全法案》，將出口管制延伸至涵蓋受管制AI晶片的遠端存取。 _(證據：ev-3, ev-4, ev-6)_
- 參議院版法案S. 3519於2025年12月提出並交付委員會；截至2026年9月初尚無院會表決。 _(證據：ev-5)_
- 商務部BIS已草擬鎖定經泰國、新加坡遠端存取Nvidia GPU的新規，最快9月與業界分享。 _(證據：ev-1, ev-2)_
- 律師表示，業界普遍認為若無該法案立法，BIS缺乏明確授權規範遠端存取。 _(證據：ev-1, ev-14)_
- INF Tech經印尼租用2,300顆Blackwell GPU；騰訊經日本Datasection簽下12億美元、15,000顆GPU合約。 _(證據：ev-7, ev-8)_
- 黃仁勳表示Nvidia中國AI晶片市佔率已「降至零」，較2023年約95%大幅下滑；2027財年Q2財測已假設中國營收為零。 _(證據：ev-10)_
- Nvidia 2027財年Q2營收962億美元（年增106%）；資料中心營收創新高890億美元（年增117%），佔總營收逾92%。 _(證據：ev-13)_
- 華為目標2026年經SMIC生產約60萬顆昇騰910C，系列晶粒總產出擴大至多達160萬顆。 _(證據：ev-12)_
- 分析師預估中國本土廠商到2026年底將取得中國AI晶片市場約90%份額，Nvidia市佔率則將降至約8%（2025年約40%）。 _(證據：ev-11)_
- 《外交家》雜誌指出，法案擴大範圍恐使盟友與中國客戶轉向外國雲端，危及美國AI基礎設施領先地位。 _(證據：ev-9)_

# Reasonable Inferences

- 租用存取目前仍屬合法，現行出口許可制度實質上只是限速，而非硬性障礙。 _(證據：ev-7, ev-8, ev-9)_
- BIS若無法案授權即搶先發布新規，可能面臨法律挑戰或執行延宕。 _(證據：ev-1, ev-14)_
- 法案在參議院擱置八個月，顯示立法進度未必如倡議者所願如期完成。 _(證據：ev-4, ev-5)_
- 華為擴產速度顯示，即使漏洞最終堵上，中國可能已日益不再需要依賴它。 _(證據：ev-11, ev-12)_

# Unknowns

- 沒有資料來源提供所有第三國租用安排的總金額或GPU總數。
- BIS新規何時（或是否）正式成為可執行法規，尚無資料解答。
- 參議院是否／何時將法案排入表決，沒有資料來源揭露。
- 沒有資料量化華為規劃晶粒中，有多少可用於前沿規模訓練。
- 本次研究環境的出口代理伺服器封鎖所有一手資料來源的直接存取，事實均仰賴搜尋摘要交叉印證，而非直接查核原始頁面。

# Core Mechanism

美國出口管制限制先進AI晶片對中國的銷售與實體進口，但現行法律未明確涵蓋晶片落地第三國後的遠端存取。中國企業已直接利用此缺口：騰訊使用託管於日本的15,000顆Blackwell GPU，INF Tech經印尼再租用2,300顆，全程無晶片實際進入中國。眾議院通過法案，將此類租用視為受管制出口；BIS另行草擬鎖定同一漏洞的行政新規。但堵住漏洞前仍有兩道障礙：參議院八個月未推進法案；BIS在法案正式立法前可能缺乏獨自行動授權。同時華為本土產能持續擴張，正降低中國對外國GPU存取的整體需求，意味即使漏洞最終堵上，其重要性也可能隨時間遞減。

# Industry Chain

六個節點串連晶片製造、監管關卡，以至尋求運算資源的中國AI實驗室。

| Node | Role | Major players | Pricing power | Supply elasticity | Substitutability |
| --- | --- | --- | --- | --- | --- |
| 先進AI GPU設計與製造 | 上游 | Nvidia、台積電 | 高 | 低 | 難 |
| 美國出口許可與管制制度 | 監管關卡 | BIS、美國國會 | -- | 低 | 難 |
| 第三國GPU租用資料中心 | 基礎設施 | Datasection、區域業者 | 中 | 中 | 中 |
| 雲端／GPU租用仲介 | 平台 | INF Tech | 中 | 中 | 中 |
| 中國AI實驗室與雲端業者 | 應用端 | 騰訊、阿里巴巴、字節跳動、DeepSeek | 低 | -- | -- |
| 中國本土AI晶片替代方案 | 替代品 | 華為、寒武紀、SMIC | 中 | 中 | 中 |

# Bottleneck Analysis

嚴格檢驗顯示真正的關卡不在晶片供給，而在執法授權。

| Node | Demand | Supply elasticity | Substitutability | Pricing power | Opportunity | Classification |
| --- | --- | --- | --- | --- | --- | --- |
| 美國遠端存取執法授權 | 極高 | 低 | 難 | -- | 3 | 結構性瓶頸 |
| 透過租用取得Nvidia運算力 | 極高 | 中 | 中 | 中 | 2 | 成長領域 |
| 中國本土加速器產能 | 極高 | 中 | 中 | 中 | 3 | 成長領域 |

- **執法授權**符合嚴格標準：需求迫切、彈性偏低、可替代性難。
- **租用取得運算力**仍屬成長領域，因漏洞尚未堵上，彈性為中而非低。
- **本土加速器**同屬成長領域：SMIC缺乏EUV，可替代性維持在中等。

# Key Metrics

| Metric | Value | Unit | Period | Growth | Source |
| --- | --- | --- | --- | --- | --- |
| Nvidia 2027財年Q2總營收 | 96.2 | 十億美元 | 2027財年Q2 | 年增106% | ev-13 |
| Nvidia 2027財年Q2資料中心營收 | 89.0 | 十億美元 | 2027財年Q2 | 年增117% | ev-13 |
| 資料中心佔總營收比重 | >92 | 百分比 | 2027財年Q2 | -- | ev-13 |
| Nvidia中國AI晶片市佔率 | ~0 | 百分比，較2023年約95% | 2026年中 | -- | ev-10 |
| 中國本土廠商市佔率（預估） | 90 | 百分比 | 2026年底 | -- | ev-11 |
| 華為昇騰910C 2026年規劃產量 | 600,000 | 顆 | 2026年 | -- | ev-12 |
| 騰訊Blackwell租用（Datasection） | 12億美元／15,000顆 | 美元／GPU | 2026年 | -- | ev-7 |
| 眾議院法案表決結果 | 369比22 | 票數 | 2026-01-12 | -- | ev-6 |

# Competition

| Name | Kind | Note |
| --- | --- | --- |
| 華為昇騰／寒武紀 | 直接競爭者 | 朝向約90%中國AI晶片市佔率擴產。 |
| 第三國GPU租用仲介 | 間接替代方案 | 使中國企業持續合法取得Nvidia運算力。 |
| 現行僅涵蓋實體晶片的許可制度 | 現況維持 | 未涵蓋本報告檢視的遠端存取缺口。 |
| 中國雲端業者自建主權運算 | 內部自建 | 進口與第三國租用之外的長期替代方案。 |

# Financial / Valuation

_未進行：本報告屬跨產業出口政策分析，非單一公司估值。上列Nvidia數字僅供背景參考。_

# Catalysts

- 商務部正式發布草擬中的遠端存取新規
- 參議院就S. 3519展開行動
- Nvidia 2027財年Q3財報對中國營收假設的說明
- 進一步揭露的租用交易或執法行動
- 分析師更新追蹤華為／中國本土晶片市佔率

# Strongest Bear Case

- **監管**：若法案未通過，BIS可能缺乏執法授權，新規恐面臨法律挑戰或延宕。
- **競爭**：華為朝約90%本土市佔率擴產，削弱堵住漏洞的長期戰略意義。
- **執行**：法案在參議院擱置八個月，顯示後續進度並無保證。
- **經濟面**：Nvidia資料中心營收創新高，即使假設中國營收為零仍持續成長。
- **需求面**：範圍過廣的管制恐使盟友與客戶轉向外國替代方案。

# Kill Conditions

| Condition | Metric | Threshold | Window | Impact |
| --- | --- | --- | --- | --- |
| 參議院通過法案並完成立法 | 法案通過狀態 | 院會表決加簽署 | 2-3季 | 推翻論點 |
| BIS正式發布草擬新規 | 聯邦公報狀態 | 正式規則發布 | 26Q4-27Q1 | 削弱論點 |
| 對租用業者採取實質執法 | 已採取行動 | 任何實質公開行動 | 2-3季 | 削弱論點 |
| 中國本土晶片市佔率達約90%且具前沿能力 | 本土市佔率 | 持續90%以上 | 26年底-27年 | 推翻論點 |
| 揭露更多大規模租用交易 | 累計金額／GPU數 | 逾50億美元 | 2-3季 | 削弱論點 |

# 30–90 Day Validation

| Event | Window | Supports if | Weakens if | Monitor |
| --- | --- | --- | --- | --- |
| BIS發布遠端存取新規 | 26年9月-27Q1 | 明確涵蓋租用存取 | 延宕或範圍縮小 | 聯邦公報 |
| 參議院就S. 3519行動 | 26Q4-27H1 | 通過委員會審查 | 持續擱置 | congress.gov |
| Nvidia 2027財年Q3財報 | 26年11月 | 仍假設中國營收為零 | 顯示營收恢復 | investor.nvidia.com |
| 進一步租用交易或執法 | 2-3季 | 新交易／行動出現 | 未見新動態 | 產業媒體 |
| 華為／本土市佔率追蹤 | 26Q4-27Q1 | 市佔率持續上升 | 市佔率停滯下滑 | 分析師報告 |

# Final Assessment

**結論：驗證中**（信心程度：中）

漏洞在嚴格檢驗下，結構性瓶頸不在晶片供給端，而在執法授權層面：堵住此漏洞極為迫切，但參議院擱置八個月加上BIS授權存疑使彈性偏低，且無其他合法途徑可替代。運算存取層與中國本土晶片替代方案仍屬成長領域，因雙方都存在真實彈性空間。這種「漏洞真實存在，但解方尚不明朗」的組合，適合給予驗證中而非更強烈的結論。

# Sources

- `ev-1` [次級] [Tom's Hardware:「New US export controls reportedly target Chinese access to remote AI servers」](https://www.tomshardware.com/tech-industry/policy/new-us-export-controls-reportedly-target-chinese-access-to-remote-ai-servers-trump-admins-cut-down-ai-diffusion-rule-could-be-shared-with-industry-as-soon-as-september) (2026-08)
- `ev-2` [次級] [aiweekly.co:「Commerce drafts rule to shut China's remote AI-chip access」](https://aiweekly.co/alerts/commerce-drafts-rule-to-shut-chinas-remote-ai-chip-access) (2026-08)
- `ev-3` [一手] [眾議院中國問題特別委員會:「House Passes Bipartisan Legislation to Limit Adversaries' Remote Access to Critical Technology」](https://chinaselectcommittee.house.gov/media/press-releases/house-passes-bipartisan-legislation-to-limit-adversaries-remote-access-to-critical-technology) (2026-01-12)
- `ev-4` [一手] [Congress.gov: H.R.2683 - Remote Access Security Act](https://www.congress.gov/bill/119th-congress/house-bill/2683) (2026)
- `ev-5` [一手] [Congress.gov: S.3519 - Remote Access Security Act](https://www.congress.gov/bill/119th-congress/senate-bill/3519/text) (2025-12)
- `ev-6` [次級] [Baker McKenzie:「US House Passes Remote Access Security Act」](https://sanctionsnews.bakermckenzie.com/us-house-passes-remote-access-security-act/) (2026-01-12)
- `ev-7` [次級] [The Register:「Congress votes to close China cloud chip export loophole」](https://www.theregister.com/on-prem/2026/01/13/congress-votes-to-close-china-cloud-chip-export-loophole/4462528) (2026-01-13)
- `ev-8` [次級] [Igor's Lab:「How Tencent gets its hands on NVIDIA's banned AI chips via GPU rental models」](https://www.igorslab.de/en/how-tencent-gets-its-hands-on-nvidias-banned-ki-chips-via-gpu-rental-models/) (2026)
- `ev-9` [次級] [The Diplomat:「Expanding Export Control to 'Remote Access' May Backfire on US AI Ambitions」](https://thediplomat.com/2026/07/expanding-export-control-to-remote-access-may-backfire-on-us-ai-ambitions/) (2026-07)
- `ev-10` [次級] [TechRadar:「Jensen Huang says Nvidia's China market share fallen to zero」](https://www.techradar.com/pro/jensen-huang-says-nvidias-china-market-share-fallen-to-zero-so-where-does-it-go-next) (2026-06)
- `ev-11` [次級] [Huawei Central:「Huawei and native firms to capture 90% of 2026 China's AI chip market」](https://www.huaweicentral.com/huawei-chinas-ai-chip-market/) (2026)
- `ev-12` [次級] [Tom's Hardware:「Huawei braces for $12 billion in AI chip revenue this year as Nvidia's China market share hits zero」](https://www.tomshardware.com/tech-industry/huawei-expects-12-billion-in-ai-chip-revenue-this-year-as-nvidias-china-market-share-hits-zero) (2026)
- `ev-13` [一手] [SEC EDGAR: NVIDIA Corp Form 8-K - Q2 FY2027 press release](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/q2fy27pr.htm) (2026-08-26)
- `ev-14` [次級] [Freshfields:「Remote Access or Remote Possibility? RASA and the Future of Cloud Export Controls」](https://www.freshfields.com/en/our-thinking/blogs/a-fresh-take/remote-access-or-remote-possibility-rasa-and-the-future-of-cloud-export-controls-102nfbw) (2026)
