# Progress Log

## Session 1 — 2026-03-22

### 完成事項
- [x] 讀取 itinerary-review.md 評估標準
- [x] 探索專案結構（Vue 3 + Vite + Tailwind）
- [x] 讀取 itinerary.js（5天行程）
- [x] 讀取 food.js（10道美食 × 5分類）
- [x] 建立規劃文件（task_plan.md / findings.md / progress.md）
- [x] 完成初步行程驗證（findings.md 已記錄）

### 進行中
- 無

### 發現的問題
1. **Day 3 地理動線問題**：海雲台在東邊，松島纜車在西邊，來回跨越整個釜山
2. **Day 4 體力問題**：梵魚寺→金井山城（健行 3–4 小時），同日還有龍頭山+東萊+西面，負荷過高
3. **Day 2 行程偏滿**：5 個點需確認交通時間是否充裕
4. **機張九月螃蟹**：帝王蟹尚未盛產（盛產 10–12 月），可改點花蟹或紅蟹

---

## Session 2（排程任務）— 2026-03-22

### 完成事項
- [x] 恢復 Session 1 上下文（task_plan / findings / progress）
- [x] 網路查找甘川洞、松島纜車、梵魚寺、東萊溫泉、機張市場、廣安里咖啡廳、西面豬骨湯飯
- [x] 所有研究結果寫入 findings.md
- [x] 更新 task_plan.md：階段 2、3 標記 complete

### 下一步（待使用者確認）
1. 根據研究結果提出 Day 3 / Day 4 行程調整建議
2. 可將 findings.md 資料補充進 data/ 資料夾（itinerary.js 或新增）

---

## Session 3（排程任務）— 2026-03-22

### 完成事項
- [x] 恢復上下文（讀取 task_plan / findings / progress）
- [x] 新增 task_plan 階段 4、5
- [x] itinerary.js：補充 7 個景點的 `detail` 欄位
  - Day 2：甘川洞（開放時間、交通）、廣安里（3間咖啡廳推薦）
  - Day 3：松島纜車（票價、Klook 預訂、Visit Busan Pass）
  - Day 4：梵魚寺（交通）、金井山城（路線警示）、東萊溫泉（免費足浴）、西面（豬骨湯飯店家）
  - Day 5：機張市場（九月蟹況警示、花蟹/紅蟹建議）
- [x] findings.md：新增行程調整建議（Day 3 動線方案 A/B、Day 4 精簡方案）

### 待使用者確認
1. **Day 3 動線**：是否採用方案 A（松島移至 Day 2）？
2. **Day 4 精簡**：是否刪除龍頭山（與 Day 1 重複），改為北區集中路線？
3. 確認後可直接修改 itinerary.js 的行程結構

---

## Session 4 — 2026-03-26

### 完成事項
- [x] findings.md 新增「釜山 Pass 攻略（YouTuber 避雷心得）」章節（來源：6Journal YouTube）
  - Pass 推薦：48H（24H 太趕）
  - 不值得去景點：Busan X the Sky、釜山水族館、西面逛街
  - 調整建議：海雲台市場時段、廣安里改週末、松島周邊探索、南浦洞改富平/樂天超市
  - 廣安里無人機秀場次：夏季（3–9月）20:00 & 22:00，每場約 12 分鐘
- [x] findings.md 新增「釜山 Pass 費用分析」：門票合計 ₩141,000，Pass ₩85,000，節省 ₩56,000
- [x] itinerary.js 全面改寫 Day 2、Day 3、Day 4（釜山 Pass 行程）
  - Day 2（五）：松島纜車 → 松島周邊（龍宮雲橋/岩南公園/白淺灘文化村）→ Spa Land Centum City
  - Day 3（六）：Skyline Luge → 海岸列車/膠囊列車 → 海雲台傳統市場 → 廣安里無人機秀
  - Day 4（日）：樂天世界（全日）→ 西面豬骨湯飯晚餐

### 移除景點（已從行程刪除）
- 甘川洞、BIFF廣場、扎嘎其市場（原 Day 2）
- 海雲台早晨、冬柏島、Centum City 購物（原 Day 3）
- 梵魚寺、金井山城、龍頭山、東萊溫泉（原 Day 4）
- 機張市場、尾浦港（原 Day 5）

---

## Session 5 — 2026-03-26

### 完成事項
- [x] 行程驗證（v2）：針對新行程重新驗證步調、動線、體力、費用、預訂需求
- [x] 發現並記錄 2 個關鍵問題：Pass 過期風險（Day 4 樂天世界 10:00 入場緩衝僅 30 分鐘）、Day 5 路線不順
- [x] 使用者決策：松島纜車納入 Pass（維持 10:30 啟用）、Day 5 移除所有景點直接從飯店前往機場
- [x] itinerary.js Day 4：更新樂天世界 note，加入「🚨 Pass 到期 10:30，務必 10:00 開門刷票」警示
- [x] itinerary.js Day 5：移除機張市場 + 尾浦港，改為 10:00 飯店出發搭地鐵前往機場，含地鐵路線說明
- [x] 使用者更新 Day 5 title 為「返程」、theme 為「睡到自然醒收尾」
- [x] itinerary.js Day 2 Spa Land 晚餐：改為館內三區美食說明，補充消費滿 ₩10,000 加贈 2 小時
- [x] findings.md：步調檢查、地理動線、體力評估更新為 v2 版本（表格格式）
