export const itinerary = [
  {
    day: 1,
    date: '2026-09-03',
    hotel: 'Stanford Inn Busan',
    title: '抵達釜山',
    theme: '輕鬆入住',
    spots: [
      {
        time: '14:45',
        name: '✈️ 起飛 — 桃園國際機場 第一航廈',
        desc: '2026-09-03 (四)｜飛行約 2.5 小時，降落金海國際機場 國際航廈 17:55',
        maps: 'https://maps.google.com/?q=Taiwan+Taoyuan+International+Airport',
      },
      {
        time: '18:30',
        name: '金海機場 → Stanford Inn Busan',
        desc: '🚇 地鐵約 50-60 分 ₩2,000｜🚕 計程車約 30-45 分 ₩25,000-30,000',
        maps: 'https://maps.app.goo.gl/SYfu4B56jVGUy78G8',
        detail: {
          note: '出關後約 18:30–19:00，正值下班塞車時段，建議優先考慮地鐵（最準時）或計程車（最方便）。',
          options: [
            {
              title: '🚇 地鐵（推薦・省錢防塞車）',
              steps: [
                '搭 釜山金海輕軌 往「沙上方向」，在 沙上站（Sasang）下車',
                '轉乘 地鐵 2 號線（綠色）往「西面方向」，在 西面站（Seomyeon）下車',
                '轉乘 地鐵 1 號線（橘色）往「新平/多大浦方向」，在 札嘎其站（Jagalchi）下車',
                '從 10 號出口 出站，直走約 3 分鐘抵達飯店（有手扶梯）',
              ],
              time: '約 50–60 分鐘',
              cost: '₩2,000–2,300（約台幣 48–55 元）',
            },
            {
              title: '🚕 計程車（方便・直達飯店門口）',
              steps: [
                '入境大廳外的計程車排班站上車，告知目的地 Stanford Inn Busan',
                '行李多或有長輩時最省心，直達飯店門口無需轉乘',
                '行李箱非常大時，建議攔乘大型計程車或確認後車廂空間',
              ],
              time: '約 30–45 分鐘（塞車時段可能稍久）',
              cost: '₩25,000–30,000（約台幣 600–720 元）',
            },
          ],
        },
      },
      {
        time: '20:00',
        name: '南浦洞晚餐 & 富平罐頭市場夜市',
        desc: '前往南浦洞美食街：富平罐頭市場夜市（19:30–23:30）、BIFF 廣場씨앗호떡（糖餅）、魚板串燒',
        maps: 'https://maps.google.com/?q=Bupyeong+Kkangtong+Market+Busan',
        detail: {
          note: '富平罐頭市場夜市越晚越熱鬧，19:30 後人潮最旺。씨앗호떡（糖餅）的正確攤位在 BIFF 廣場，非市場內部，兩者相距步行 2–3 分鐘。',
          options: [
            {
              title: '🍢 必吃清單',
              steps: [
                '씨앗호떡（糖餅）— BIFF 廣場攤位，葵瓜子+花生+黑糖，外酥內麻糬感，釜山第一名小吃',
                '魚板（어묵）— 南浦洞隨處可見，熱湯魚板串最暖胃',
                '辣炒年糕（떡볶이）— 富平市場內有多家老店',
                '豬肉湯飯（돼지국밥）— 如尚未吃過，西面或南浦洞周邊均有店家',
              ],
            },
            {
              title: '🏪 富平罐頭市場',
              steps: [
                '白天市場：08:00–20:00',
                '夜市：19:30–23:30（越晚越熱鬧，異國美食集中地）',
                '地鐵 1 號線 南浦站（111）步行約 5 分鐘',
              ],
            },
          ],
        },
      },
      {
        time: '21:30',
        name: '光復路 & 釜山塔夜景',
        desc: '漫步光復路時裝街感受熱鬧夜間氛圍，體力許可可登上釜山塔（Busan Diamond Tower）俯瞰市區夜景',
        maps: 'https://maps.google.com/?q=Busan+Tower+Yongdusan+Park',
        detail: {
          note: '龍頭山公園免費進入，釜山塔為付費景點。夜景最佳時段為 21:00–22:00。最終入場 21:30，建議 21:00 左右抵達以確保入場時間充裕。',
          options: [
            {
              title: '🗼 釜山塔基本資訊',
              steps: [
                '龍頭山公園：免費進入，全年無休',
                '釜山塔（Busan Diamond Tower）營業時間：10:00–22:00（最終入場 21:30）',
                '從南浦站（111）或扎嘎其站步行約 10–15 分鐘可達',
                '夜間可俯瞰釜山港、南浦洞、廣安大橋遠景',
              ],
            },
          ],
        },
      },
    ],
  },
  {
    day: 2,
    date: '2026-09-04',
    hotel: 'Stanford Inn Busan',
    title: '松島纜車 · Spa Land',
    theme: '海景 + 汗蒸幕',
    spots: [
      {
        time: '10:30',
        name: '松島海上纜車',
        desc: '韓國最長海上纜車（1.62 公里），透明地板纜車車廂俯瞰松島海岸絕景',
        maps: 'https://maps.google.com/?q=Songdo+Cable+Car+Busan',
        detail: {
          note: '持釜山 Pass（48H）可免費搭水晶車廂來回（原價 ₩22,000）。Klook / KKday 線上預購亦可；持 Visit Busan Pass 同樣免費。',
          options: [
            {
              title: '🎫 票價（參考）',
              steps: [
                '一般車廂：單程 ₩12,000 / 來回 ₩15,000',
                '水晶（玻璃地板）車廂：單程 ₩16,000 / 來回 ₩22,000',
                '釜山 Pass 持有者：水晶車廂免費來回',
              ],
              cost: 'Pass 持有者免費（原價 ₩22,000）',
            },
          ],
        },
      },
      {
        time: '12:00',
        name: '松島周邊探索',
        desc: '纜車後步行探索松島周邊：龍宮雲橋（₩1,000）、岩南公園森林步道、白淺灘文化村、海水浴場沙灘',
        maps: 'https://maps.google.com/?q=Yonggu+Bridge+Songdo+Busan',
      },
      {
        time: '16:00',
        name: 'Spa Land Centum City 汗蒸幕',
        desc: '新世界百貨頂樓溫泉 SPA，多種主題浴池 + 汗蒸幕，約 4 小時放鬆',
        maps: 'https://maps.google.com/?q=Spa+Land+Centum+City+Busan',
        detail: {
          note: '持釜山 Pass（48H）免費入場（原價 ₩25,000）。建議預留 4 小時，含換衣、泡湯、汗蒸幕。毛巾與汗蒸幕服裝費另計。',
          options: [
            {
              title: '🛁 基本資訊',
              steps: [
                '地鐵 2 號線 Centum City 站直結新世界百貨',
                '營業時間：06:00–24:00',
                '含多種主題溫泉池、汗蒸幕、休息區',
                '約 20:00 結束，離開前可在Spa Land 內用晚餐',
              ],
              cost: 'Pass 持有者免費（原價 ₩25,000）',
            },
          ],
        },
      },
      {
        time: '21:00',
        name: 'Spa Land 內用餐',
        desc: '館內三區美食：自助泡麵區、點心吧（甜米露・烤雞蛋）、韓式料理餐廳，價格 ₩3,000–15,000，平價好吃不用出館。消費滿 ₩10,000 加贈 2 小時使用時間',
        maps: 'https://maps.google.com/?q=Spa+Land+Centum+City+Busan',
      },
    ],
  },
  {
    day: 3,
    date: '2026-09-05',
    hotel: 'Stanford Inn Busan',
    title: '海雲台體驗 · 廣安里無人機秀',
    theme: '活力 + 夜景（週六限定）',
    spots: [
      {
        time: '10:00',
        name: 'Skyline Luge Busan',
        desc: '海雲台山頂俯衝滑車，高速下滑欣賞釜山海景，刺激又好玩',
        maps: 'https://maps.google.com/?q=Skyline+Luge+Busan',
        detail: {
          note: '持釜山 Pass（48H）免費入場（原價 ₩30,000）。建議開門即入場，假日排隊時間較長。',
          options: [
            {
              title: '🎫 基本資訊',
              steps: [
                '營業時間：平日 10:00–19:00 / **週末 10:00–20:00**（Day 3 為週六，可玩到 20:00）',
                'Pass 含 2 次 Luge（纜椅上山 + 2 次下滑）',
                '可加購更多次，費用另計',
                '建議開門即入場，假日排隊較長',
              ],
              cost: 'Pass 持有者免費（原價 ₩30,000，含 2 次）',
            },
          ],
        },
      },
      {
        time: '12:00',
        name: '海雲台海岸列車 + 天空膠囊列車',
        desc: '沿海岸線行駛的特色觀光列車，飽覽海雲台至松亭間的海岸風光；天空膠囊列車在高架軌道俯瞰大海',
        maps: 'https://maps.google.com/?q=Haeundae+Beach+Train+Busan',
        detail: {
          note: '⚠️ 重要：Pass 只含海岸列車（免費），天空膠囊列車不含在 Pass 內，需額外付費。膠囊列車非常熱門，出發前 1–2 週務必至官網提前預約。',
          options: [
            {
              title: '🚂 海岸列車（Beach Train）— Pass 免費',
              steps: [
                '路線：海雲台 ↔ 松亭，共 7 站，多人共乘',
                '持 Visit Busan Pass：自由票免費，無需預約，當天現場可購',
                '近距離欣賞海景，沿途停靠多站可上下車',
              ],
              cost: 'Pass 持有者免費（原價 ₩16,000）',
            },
            {
              title: '🫧 天空膠囊列車（Sky Capsule）— 需另購票',
              steps: [
                '路線：尾浦站 ↔ 青沙浦站，高架軌道 7–10 公尺，俯瞰大海',
                '4 人一包廂，景觀更佳但路線較短（僅 2 站）',
                '⚠️ 不含在 Visit Busan Pass 內，需另外付費約 ₩30,000',
                '⚠️ 必須提前 1–2 週至官網預約（假日名額一搶而空）',
                '預約官網：haeundaeblueline.com（英文/韓文）',
              ],
              cost: '約 ₩30,000（Pass 不適用）',
            },
          ],
        },
      },
      {
        time: '14:30',
        name: '海雲台傳統市場',
        desc: '在地傳統市場，逛攤、吃小吃，走到底有好吃糖餅',
        maps: 'https://maps.google.com/?q=Haeundae+Traditional+Market+Busan',
        detail: {
          note: '建議 14:00–15:00 後造訪，店家大多已開門，晚上人潮最熱鬧。',
          options: [
            {
              title: '🏪 基本資訊',
              steps: [
                '營業時間：每日 09:00–22:00（各攤位略有不同）',
                '走到底另有糖餅攤（強推）',
              ],
            },
          ],
        },
      },
      {
        time: '19:00',
        name: '廣安里海水浴場 & 無人機秀',
        desc: '週六限定！廣安里 M 無人機燈光秀 20:00 & 22:00，每場約 12 分鐘，搭配廣安大橋夜景超震撼',
        maps: 'https://maps.google.com/?q=Gwangalli+Beach+Busan',
        detail: {
          note: '夏季（3–9月）無人機秀場次：20:00 & 22:00，建議 19:30 前到廣安里佔位。平日冷清，週六人氣最旺。',
          options: [
            {
              title: '☕ 推薦海景咖啡廳（邊等邊看秀）',
              steps: [
                'CUP&CUP：日系米白木質裝潢，大片窗景，招牌起司蛋糕｜水營區廣安海邊路 177，4–5 樓',
                '차선책（Chaseonsaek）：低飽和木質調日式禪風，大片玻璃窗眺望廣安大橋｜수영구 광안해변로 237，3 樓，11:00–22:00',
                'Working Holiday：美式風格，全天早午餐，可打包到海邊野餐｜수영구 광안해변로 235，3 樓，09:00–23:00',
              ],
            },
          ],
        },
      },
    ],
  },
  {
    day: 4,
    date: '2026-09-06',
    hotel: 'Stanford Inn Busan',
    title: '釜山樂天世界 · 西面',
    theme: '主題樂園 + 美食',
    spots: [
      {
        time: '10:00',
        name: '釜山樂天世界',
        desc: '釜山最大主題樂園，室內外遊樂設施 + 海景摩天輪，建議預留 5–6 小時暢玩',
        maps: 'https://maps.google.com/?q=Lotte+World+Adventure+Busan',
        detail: {
          note: '⚠️ Pass 時效提醒：釜山 Pass 48H 於 Day 2 松島纜車（約 10:30）啟用，到期時間為 Day 4 10:30。必須在 10:00 開門時即刻入場刷票，不得延誤。',
          options: [
            {
              title: '🎡 基本資訊',
              steps: [
                '地址：機張郡東部山業路 42（地鐵東海線 機張站）',
                '營業時間：10:00–21:00',
                '含室內 / 室外遊樂區、海景摩天輪（Magic Island）',
                '建議預留 5–6 小時',
                '🚨 Pass 到期：10:30，務必 10:00 開門時刷票入場',
              ],
              cost: 'Pass 持有者免費（原價 ₩47,000）',
            },
          ],
        },
      },
      {
        time: '19:00',
        name: '西面商圈晚餐',
        desc: '釜山最繁華夜生活區，豬骨湯飯名店集中，樂園後完美收尾',
        maps: 'https://maps.google.com/?q=Seomyeon+Busan',
        detail: {
          note: '以下豬骨湯飯名店均位於西面站 1–2 號出口步行距離內，24 小時營業。',
          options: [
            {
              title: '🍲 推薦豬骨湯飯店家',
              steps: [
                '松亭三代豬肉湯飯（송정3대국밥）：西面站 1 號出口步行 3 分鐘，24 小時',
                '浦項豬肉湯飯（포항돼지국밥）：西面站 1 號出口步行 2 分鐘，24 小時，在地人常去',
                '一品狀元豬肉湯飯（일품장원돼지국밥）：30 年老店，₩9,000 一碗，24 小時',
                '雙胞胎豬肉湯飯（쌍둥이돼지국밥）：釜山代表名店，清湯與白飯分開盛裝',
              ],
              cost: '₩9,000–15,000/人',
            },
          ],
        },
      },
    ],
  },
  {
    day: 5,
    date: '2026-09-07',
    hotel: null,
    title: '返程',
    theme: '睡到自然醒收尾',
    spots: [
      {
        time: '09:00',
        name: 'Stanford Inn → 金海國際機場',
        desc: '退房後搭地鐵前往機場，12:30 國際航班建議 10:30 前完成報到',
        maps: 'https://maps.google.com/?q=Gimhae+International+Airport',
        detail: {
          note: '飯店（扎嘎其站）→ 機場約 50–60 分鐘，09:00 出發可於 10:30 前抵達完成報到。',
          options: [
            {
              title: '🚇 地鐵路線',
              steps: [
                '扎嘎其站（111）搭地鐵 1 號線往沙上方向',
                '沙上站（128）轉乘 釜山金海輕軌 往機場',
                '金海機場 國際航廈 下車',
              ],
              time: '約 50–60 分鐘',
              cost: '₩2,000–2,300',
            },
          ],
        },
      },
      {
        time: '12:30',
        name: '✈️ 起飛 — 釜山金海機場 國際航廈',
        desc: '2026-09-07 (一)｜抵達時間 13:45，降落桃園國際機場 第一航廈',
        maps: 'https://maps.google.com/?q=Gimhae+International+Airport',
      },
    ],
  },
]
