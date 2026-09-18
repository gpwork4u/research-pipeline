---
title: "測試之牆:Advantest 與 Teradyne 已被搶購一空的 AI 晶片測試機,是否為半導體業隱藏的結構性瓶頸?"
date: "2026-09-18"
slug: "ate-test-equipment-ai-chip-bottleneck"
research_type: NEW
topics: ["ai-infrastructure", "semiconductors", "advanced-manufacturing", "capital-equipment"]
companies: ["Advantest", "Teradyne"]
verdict: "VALIDATE"
confidence: "medium"
primary_question: "Advantest 與 Teradyne——這兩家掌控全球自動測試設備(ATE)市場逾八成的廠商——在 2026 年 7 月同一週均公布創紀錄業績、上調財測,並將多年期產能擴張計畫提前,AI/HBM 晶片測試與老化(burn-in)產能是否已成為 AI 加速器與記憶體出貨的真正結構性瓶頸——有別於本研究線已記錄的晶圓、封裝與記憶體產能制約?抑或 Teradyne 自身對 2026 年第三季環比下滑的財測,顯示目前的緊俏只是訂單時間點的雜訊,而非牢不可破的產能高牆?"
---

# 一句話結論

AI/HBM 晶片測試設備確實因雙占結構而供給偏緊,但 Teradyne 自身財測顯示第三季環比下滑,顯示目前緊俏尚非牢不可破的高牆。

# 執行摘要

合計掌控全球晶片測試設備市場約八成的 Advantest 與 Teradyne,於 2026 年 7 月底同一週均公布創紀錄業績並大幅上調財測。Advantest 全年營業利益財測再上調至年增 70%(前次 26%),並將自家 TAM 估計上調 19%;Teradyne 半導體測試營收因 HBM 與 DRAM 強勁而年增 128%。兩家均提前多年期產能計畫——Advantest 年產 1 萬台目標提前約兩年——但截至 2026 年 1 月交期仍逾六個月。複雜之處在於:Teradyne 財測顯示第三季營收與獲利環比下滑,歸因於 AI 訂單時間點不均;中國高階 ATE 自製率仍低於一成,短期內雙占定價能力難受威脅。

# 研究問題／為何是現在

**主要問題：** 見上方前言。

**子問題：** 產能擴張時程能否跟上需求?ATE 雙占格局有多集中,中國廠商長川科技能否有意義地切入?HBM/CoWoS 驅動的測試複雜度上升多少?是否有任何 AI 晶片客戶明確指出測試(而非封裝或 HBM)產能為制約?Teradyne 財測環比下滑是否削弱結構性瓶頸論點?

**為何是現在：** 同一週內(2026 年 7 月 28-29 日),兩家均公布創紀錄業績並大幅上調 AI 驅動財測——本研究線首次獨立檢視測試環節,有別於先前的晶圓、封裝或 HBM 生產制約。

**論點：** ATE 在需求與供給彈性偏低這兩項嚴格瓶頸測試條件上均成立,雙占結構與逾數月交期為證;可替代性難,但 Teradyne 自身財測顯示的訂單不均,是主要的反面證據。

# 已知事實

- Advantest 2026 財年第一季(7 月 29 日):營收 3,675 億日圓(年增 39.3%),營業利益 1,900 億日圓(年增 53.3%),創同期新高。_(ev-1)_
- Advantest 上調 2026 財年財測:營收 1.42 兆→1.714 兆日圓;營業利益 6,275 億→8,460 億日圓(年增 70%,前次為 26%);淨利 4,655 億→6,600 億日圓。_(ev-1, ev-2)_
- Advantest 將自家 2026 年 ATE 市場規模財測中位數上調約 19%,至 130-145 億美元,因 AI 推論、客製 ASIC、CPU 與 DRAM 測試需求超乎預期。_(ev-1, ev-10)_
- Advantest 提前產能時程:年產 5,000 台目標估 2027 年 3 月前達成,年產 1 萬台目標自原訂 2028-2029 年提前。_(ev-4, ev-11)_
- Advantest 3 月 25 日宣布新設「大宮科技中心」研發據點(東京與群馬廠之間),估 2027 財年上半年啟用。_(ev-3)_
- 截至 2026 年 1 月,Advantest ATE 平均交期因 GPU/HBM 需求已逾六個月;其風險揭露亦指出景氣下行期測試需求降幅快於半導體銷售降幅。_(ev-5, ev-12)_
- 2026 年 7 月 17 日,Advantest 股價隨日經修正重挫 9.4%(東京威力科創跌 9%),反映市場對超大規模業者 AI 資本支出持續性的疑慮。_(ev-13)_
- Teradyne 2026 第二季(7 月 28-29 日):營收 13.29 億美元(年增 104%);半導體測試 11.22 億美元(年增 128%);記憶體測試營收創紀錄 2.12 億美元(HBM 強勁、DDR 優於預期、NAND 回溫)。_(ev-6)_
- Teradyne 財測第三季營收 12-13 億美元(中位數環比降約 5.9%),EPS 中位數環比降約 19%,歸因於 AI 訂單時間點不均。_(ev-6, ev-17)_
- Advantest 與 Teradyne 合計掌控全球 ATE 市場約八成以上,雙占格局已維持約二十年。_(ev-16, ev-18)_
- Advantest T5503HS2 記憶體測試機採 16,256 通道,測試 HBM/DDR4/LPDDR4,速度達 9Gbps,計時精度 ±45 皮秒。_(ev-9)_
- HBM/CoWoS 封裝複雜度上升,推升每顆 AI 晶片所需測試插次,產業評論稱插次數正邁向 10-20 次。_(ev-14, ev-16)_
- 中國設備自製率於類比/電源達約 55-65%,但高階 SoC 與記憶體 ATE 仍低於一成;長川科技計劃募資 31.32 億人民幣,其中 21.92 億用於高階測試機與 AOI 研發。_(ev-15, ev-15b)_

# 合理推論

- 因記憶體導向的 Advantest 與邏輯導向的 Teradyne 兩家互不重疊的廠商同週均優於財測,顯示緊俏屬產業層級而非單一公司問題。_(ev-1, ev-6)_
- 因 Advantest 提前多年期產能目標,卻仍指出交期逾六個月,顯示短期供給尚未完全追上需求。_(ev-4, ev-12)_
- 因 Teradyne 財測顯示環比下滑,儘管年增仍強,訂單流動看似不均,而非平順持續的短缺。_(ev-6)_
- 因中國高階 ATE 自製率仍低於一成,未來數年不易出現具競爭力的替代管道。_(ev-15, ev-15b)_
- 因測試插次上升與 HBM/CoWoS 複雜度(均為本研究線已確認之瓶頸)緊密相關,ATE 需求可能持續超越 AI 晶片出貨量本身的成長。_(ev-14)_

# 未知事項

- 無資料來源揭露兩家廠商每季可新增的確切產能台數,故無法量化相對於上調後 TAM 的實際缺口。
- 無資料來源證實任何 AI 加速器或 HBM 出貨曾因 ATE 產能本身而延遲,有別於晶圓、封裝或 HBM 生產產能。
- T5503HS2 約 320 萬美元單價僅出自單一獨立電子報,非官方揭露。
- 兩家個別市佔率數字各方不一(25-31% 對 23-30%),惟合計約八成以上之數字一致。
- 本次嘗試的官方與媒體網域均遭研究環境的出口代理伺服器封鎖;事實依據交叉確認的搜尋結果摘要,而非直接查證原文。

# 核心機制

每顆 AI 加速器晶粒、HBM 堆疊與 CoWoS 式封裝,出貨前均須通過功能與老化測試——無法略過的強制品質關卡。此產能幾乎全由兩家供應:記憶體導向的 Advantest 與邏輯導向的 Teradyne,合計掌控全球 ATE 市場約八成,雙占已逾二十年。兩家於 7 月底同週均公布創紀錄且優於財測的業績,並提前多年期產能計畫——但截至 2026 年 1 月交期仍逾六個月,且 HBM/CoWoS 複雜度上升正推高每顆晶片所需插次,使 ATE 需求與晶片出貨量脫鉤。

複雜之處在於,Teradyne 財測第三季營收與獲利環比下滑,歸因於 AI 訂單時間點不均,而非剛性短缺。此型態亦見於 7 月 17 日的股價重挫——投資人對超大規模業者 AI 資本支出持續性存疑,重創 Advantest 與東京威力科創。中國高階 ATE 自製率仍低於一成,短期無具競爭力的替代管道;待解問題是此緊俏究竟是結構性高牆,抑或僅是資本支出循環下的時間點假象。

# 產業鏈

| 節點 | 角色 | 主要業者 | 定價能力 | 供給彈性 | 可替代性 |
| --- | --- | --- | --- | --- | --- |
| 半導體 ATE 製造 | 零組件 | Advantest、Teradyne | 高 | 低 | 難 |
| AI/HBM 封裝組裝與測試(OSAT、晶圓廠後段) | 零組件 | TSMC、Amkor、ASE | 中 | 低 | 中 |
| HBM/DRAM 製造(背景脈絡;見 8 月 22 日報告) | 零組件 | SK 海力士、三星、美光 | 高 | 低 | 難 |
| 中國 ATE 自製化 | 零組件 | 杭州長川科技 | 低 | 中 | 對舊製程易,對 AI 級難 |

# 瓶頸分析

| 節點 | 需求 | 供給彈性 | 可替代性 | 定價能力 | 機會分數 | 分類 |
| --- | --- | --- | --- | --- | --- | --- |
| AI/HBM 終測與老化用 ATE | 極高 | 低 | 難 | 高 | 4 | 結構性瓶頸 |
| 中國本土 ATE 業者(AI/HBM 級) | 高 | 中 | 難 | 低 | 2 | 成長領域 |
| 先進封裝/HBM 生產(背景脈絡,未重新評分) | 極高 | 低 | 難 | 高 | 4 | 結構性瓶頸 |

ATE 符合嚴格測試條件:雙占格局確認之極高需求;二十年雙占與數月交期造成低供給彈性;測試無法略過故可替代性難。機會分數評為中等獲利捕捉,低於封裝/HBM,因測試佔 AI 晶片整體價值比重較小。

# 關鍵指標

| 指標 | 數值 | 單位 | 期間 | 來源 |
| --- | --- | --- | --- | --- |
| Advantest 2026財年第一季營收 | 367.5 | 億日圓 | 2026財年第一季 | ev-1 |
| Advantest 2026財年第一季營業利益 | 190.0 | 億日圓 | 2026財年第一季 | ev-1 |
| Advantest 2026財年營收財測(上調) | 1714.0 | 億日圓 | 2026財年 | ev-1 |
| Advantest 2026財年營業利益財測(上調) | 846.0 | 億日圓 | 2026財年 | ev-1 |
| Advantest 2026年ATE整體市場規模財測 | 130-145 | 億美元 | 2026年 | ev-1 |
| Teradyne 2026第二季總營收 | 1329 | 百萬美元 | 2026第二季 | ev-6 |
| Teradyne 2026第二季半導體測試營收 | 1122 | 百萬美元 | 2026第二季 | ev-6 |
| Teradyne 2026第三季營收財測(中位數) | 1250 | 百萬美元 | 2026第三季 | ev-17 |

# 競爭態勢

| 名稱 | 類型 | 說明 |
| --- | --- | --- |
| Teradyne | 直接競爭者 | 邏輯/SoC 導向 ATE 龍頭;自身 2026 第二季亦創紀錄。 |
| Advantest | 直接競爭者 | 記憶體/SoC 導向 ATE 龍頭;雙占格局另一方。 |
| Cohu / FormFactor | 間接替代方案 | 相鄰的分選機/探針卡供應商,非 ATE 替代品。 |
| 杭州長川科技 | 間接替代方案 | 中國領先 ATE 業者;尚未取得 AI/HBM 級資格認證。 |
| IDM 廠內部自建測試能力 | 內部自建 | 屬補充性質,核心設備仍仰賴外部供應。 |
| 排隊等候/接受較長交期 | 現狀維持 | 因雙占結構,客戶多選擇接受延遲。 |

# 財務／估值

_未進行估值分析:Advantest 以日圓計價、Teradyne 以美元計價,且僅 Teradyne 較接近純 ATE 業務;本次工作階段未能自可信來源取得兩家公司經查證之現時股價與股數。_

# 催化劑

- Advantest 2026財年第二季財報(約2026年11月初)
- Teradyne 2026年第三季財報(約2026年10月底)
- SK海力士、三星、美光2026年第三季財報中任何ATE相關評論
- Advantest／Teradyne進一步產能擴張公告
- 長川科技下一步高階資格認證進展

# 最強反方論點

- **需求面**：Teradyne 財測顯示第三季環比下滑,歸因於 AI 訂單時間點不均,削弱平順短缺論述。
- **供給面**：兩家均提前多年期產能計畫,顯示供給端已有真實資本回應,而非僵固高牆。
- **競爭面**：中國高階 ATE 自製率仍低於一成,但長川科技約 31 億人民幣募資顯示資本積極投入。
- **經濟面**：Advantest 風險揭露顯示景氣下行時測試需求降幅快於晶片銷售,7 月 17 日重挫印證此風險。
- **估值面**：兩家股價已因此題材大幅重估,論點或已大幅反映於現價。

# 觸發失效條件

| 條件 | 指標 | 門檻 | 期間 | 影響 |
| --- | --- | --- | --- | --- |
| 合計訂單/積壓成長停滯但AI出貨持續成長 | 季度環比訂單/部門營收 | 持平或下降 | 2-4季 | 減弱 |
| 交期明顯縮短 | 揭露之交期 | 低於3個月 | 3-4季 | 推翻 |
| 新進業者取得高階AI/HBM測試大量資格認證 | 揭露之資格認證 | 雙占以外1家以上取得認證 | 2-3年 | 推翻 |
| AI需求成長明顯趨緩 | 超大規模業者與ATE廠財測 | 連續2次財測下修 | 2-4季 | 推翻 |
| 從無客戶指出ATE為約束因素 | 公開揭露型態 | 連續4季以上完全無提及 | 4季 | 減弱 |

# 30-90天驗證事件

| 事件 | 期間 | 支持條件 | 削弱條件 | 監測來源 |
| --- | --- | --- | --- | --- |
| Advantest 2026財年第二季財報 | 2026年11月初 | 財測再度上調 | 財測持平 | Advantest IR |
| Teradyne 2026第三季財報 | 2026年10月底 | 年增仍強、產能受限評論持續 | 成長趨緩 | Teradyne IR |
| SK海力士/三星/美光第三季財報 | 2026年10月底 | 提及ATE為HBM4出貨節奏因素 | 未提及ATE | 各自IR |
| 進一步產能擴張公告 | 未來2-3季 | 更多、更快的擴產 | 擴產放緩 | 公司新聞稿 |
| 長川科技資格認證進展 | 未來2-4季 | 佔比維持低於10-15% | 揭露重大資格認證 | TrendForce、Digitimes |

# 總體評估

**結論：VALIDATE**(信心程度:中)

半導體 ATE 對 AI 與 HBM 晶片而言,可能符合嚴格的結構性瓶頸測試:雙占確認之極高需求;二十年雙占與數月交期造成低供給彈性;可替代性難,因測試無法略過,中國廠商距 AI 級認證仍遠。複雜之處在於 Teradyne 財測顯示第三季環比放緩,顯示緊俏或許只是訂單時間點不均,而非牢不可破的高牆——值得隨後續業績持續驗證。

# 資料來源

_註:[primary] 標示資料來源本身的性質(官方公司發布、申報文件與產品頁面),而非本次工作階段已直接擷取該頁面——以下所有網址均遭研究環境的出口代理伺服器封鎖,引用係依據交叉確認的二手轉載/搜尋結果摘要,而非直接查證(詳見「未知事項」)。_

- `ev-1` [primary] [Advantest Corporation: Consolidated Financial Results / Forecast Revision (Q1 FY2026)](https://www.advantest.com/en/news/2026/a81o6o0000000hgw-att/E_FR_FY2025_FN.pdf) (2026-07-29)
- `ev-2` [primary] [Earnings Forecast | Financial Highlights | ADVANTEST CORPORATION](https://www.advantest.com/en/investors/financial-highlights/forecast/)
- `ev-3` [primary] [Advantest to Establish New R&D Location: "Omiya Tech Hub"](https://www.advantest.com/en/news/2026/20260325.html) (2026-03-25)
- `ev-4` [primary] [Advantest Investors Guide (January 28, 2026)](https://www.advantest.com/document/en/investors/ir-library/investors-guide/Investors_Guide_2601E.pdf) (2026-01-28)
- `ev-5` [primary] [Risk Factors | Management Information | ADVANTEST CORPORATION](https://www.advantest.com/en/investors/management-policy/risk/)
- `ev-6` [primary] [Teradyne Reports Second Quarter 2026 Results](https://investors.teradyne.com/news-events/press-releases/detail/445/teradyne-reports-second-quarter-2026-results) (2026-07-28)
- `ev-7` [primary] [Teradyne, Inc. Form 10-Q (period ended June 28, 2026)](https://www.sec.gov/Archives/edgar/data/0000097210/000119312526327715/ter-20260628.htm) (2026-07-31)
- `ev-8` [primary] [How AI is Changing Computing—And Why Testing Is Critical | Teradyne](https://www.teradyne.com/2026/02/10/how-ai-is-changing-computing/) (2026-02-10)
- `ev-9` [primary] [T5503HS2 | Memory Test Systems | ADVANTEST CORPORATION](https://www.advantest.com/en/products/semiconductor-test-system/memory/t5503hs2/)
- `ev-10` [secondary] [Bloomberg: "Advantest Lifts Outlook After Demand for AI Chip Testers Soars"](https://www.bloomberg.com/news/articles/2026-07-29/advantest-lifts-outlook-after-demand-for-ai-chip-testers-soars) (2026-07-29)
- `ev-11` [secondary] [Bloomberg: "Advantest Rushes to Boost AI Chip Tester Capacity to Meet Demand"](https://www.bloomberg.com/news/articles/2026-01-28/advantest-rushes-to-boost-ai-chip-tester-capacity-to-meet-demand) (2026-01-28)
- `ev-12` [secondary] [Digitimes: "Advantest ATE lead times remain tight as AI and memory markets expand"](https://www.digitimes.com/news/a20260116PD217/demand-advantest-equipment-hbm-2026.html) (2026-01-16)
- `ev-13` [secondary] [Invezz: "Here's why Tokyo Electron, Advantest, and Kioxia stocks are plunging today"](https://invezz.com/news/2026/07/17/heres-why-tokyo-electron-advantest-and-kioxia-stocks-are-plunging-today/) (2026-07-17)
- `ev-14` [secondary] [SemiEngineering: "HBM Shifts Testing Left To Preserve AI Chip Yield"](https://semiengineering.com/hbm-shifts-testing-left-to-preserve-ai-chip-yield/)
- `ev-15` [secondary] [TrendForce: "Chinese Semiconductor Equipment Manufacturers Draw in New Investment"](https://www.trendforce.com/news/2026/03/30/news-chinese-semiconductor-equipment-manufacturers-draw-in-new-investment/) (2026-03-30)
- `ev-15b` [secondary] [Tianxia Gongchang Research: "China Semiconductor Test Equipment 2026: SoC ATE and Probe Station Localization Push"](https://faxiangongchang.com/en/reports/china-semiconductor-test-equipment-2026) (2026)
- `ev-16` [discovery] [Growth Papa (Substack): "Back-End Semiconductor Equipment: The Fields Have Grown. One Seed Spot Remained."](https://growthpapa.substack.com/p/back-end-semiconductor-equipment) (2026)
- `ev-17` [secondary] [Investing.com: "Teradyne Q2 2026 slides: AI drives record revenue, 104% growth"](https://www.investing.com/news/company-news/teradyne-q2-2026-slides-ai-drives-record-revenue-104-growth-93CH-4820714) (2026-07-29)
- `ev-18` [secondary] [Morningstar: "Advantest Benefits From the Increasing Complexity of Semiconductor Manufacturing"](https://www.morningstar.com/company-reports/1444412-advantest-benefits-from-the-increasing-complexity-of-semiconductor-manufacturing)
