# 釜山旅遊規劃網頁應用 — 實作計畫

## Context
使用者想建立一個釜山（韓國）旅遊規劃的網頁應用程式，涵蓋行程規劃、美食推薦、交通資訊三大功能。參考現有的 countdown-day-frontend（Vue 3 + Vite + Vercel）採用相同技術棧，確保風格一致且使用者熟悉。

---

## 技術選型

| 項目 | 技術 |
|------|------|
| 框架 | Vue 3 (Composition API) |
| 建置工具 | Vite |
| 路由 | Vue Router 4 |
| 樣式 | Tailwind CSS |
| 部署 | Vercel（沿用現有方式） |

---

## 專案目錄

```
d:\coding-things\busan-travel\
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── public/
│   └── favicon.ico
└── src/
    ├── main.js
    ├── App.vue
    ├── router/
    │   └── index.js
    ├── views/
    │   ├── HomeView.vue       # 首頁：釜山簡介 + 快速導覽
    │   ├── ItineraryView.vue  # 行程規劃：多日行程卡片
    │   ├── FoodView.vue       # 美食推薦：分類餐廳清單
    │   └── TransportView.vue  # 交通資訊：台灣→釜山 + 市區交通
    ├── components/
    │   ├── NavBar.vue
    │   ├── DayCard.vue        # 單日行程卡片
    │   ├── FoodCard.vue       # 餐廳/美食卡片
    │   └── TransportStep.vue  # 交通步驟說明
    └── data/
        ├── itinerary.js       # 行程資料（靜態）
        ├── food.js            # 美食資料（靜態）
        └── transport.js       # 交通資訊資料（靜態）
```

---

## 頁面功能規劃

### 1. 首頁 (HomeView)
- 釜山大圖 Hero banner
- 快速導覽卡片連結至三大功能

### 2. 行程規劃 (ItineraryView)
- 4~5 天範例行程（Day 1–5）
- 每日卡片顯示：景點清單、預計時間、地點標示
- 景點含簡短描述與 Google Maps 連結

### 3. 美食推薦 (FoodView)
- 分類標籤篩選（海鮮、燒肉、街頭小吃、甜點）
- 每間餐廳卡片：名稱（韓/中）、區域、推薦菜色、特色說明

### 4. 交通資訊 (TransportView)
- 台灣→釜山：航班資訊、金海機場→市區方式
- 市區交通：釜山地鐵路線說明、T-money 卡、公車、計程車費用估計

---

## 資料設計（靜態 JS 檔）

所有資料以靜態 JS 物件儲存於 `src/data/`，方便後續擴充或串接 API。

---

## 實作步驟

1. 建立 `busan-travel/` 目錄，初始化 Vite + Vue 3 專案
2. 安裝 Vue Router、Tailwind CSS
3. 建立路由設定（4 頁）
4. 填入靜態旅遊資料（行程、美食、交通）
5. 實作各 View 頁面與共用 Components
6. 加入 NavBar 導覽列
7. 調整 Tailwind 樣式，套用韓風配色（深藍 + 珊瑚紅）

---

## 驗證方式

1. `npm run dev` 啟動 dev server，瀏覽器開啟確認四頁正常顯示
2. 確認路由切換無錯誤
3. 確認美食篩選標籤功能運作
4. `npm run build` 確認建置成功，無警告
