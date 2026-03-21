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
        name: '南浦洞晚餐',
        desc: '前往南浦洞美食街或富平罐頭市場，品嚐釜山著名的糖餅（Ssiat Hotteok）、魚板或豬肉湯飯',
        maps: 'https://maps.google.com/?q=Nampo-dong+Busan',
      },
      {
        time: '21:30',
        name: '光復路 & 釜山塔夜景',
        desc: '漫步光復路時裝街感受熱鬧夜間氛圍，體力許可可登上釜山塔（Busan Diamond Tower）俯瞰市區夜景',
        maps: 'https://maps.google.com/?q=Busan+Tower+Yongdusan+Park',
      },
    ],
  },
  {
    day: 2,
    date: '2026-09-04',
    hotel: 'Stanford Inn Busan',
    title: '甘川洞 · 南浦洞 · 廣安里',
    theme: '文青藝術風',
    spots: [
      {
        time: '09:30',
        name: '甘川洞文化村',
        desc: '彩色小屋沿山而建，有「韓國馬丘比丘」之稱，巷弄間充滿藝術裝置',
        maps: 'https://maps.google.com/?q=Gamcheon+Culture+Village',
        detail: {
          note: '建議 09:30–10:00 抵達，人潮最少；下午 15:00 後人多，避開週末。',
          options: [
            {
              title: '入場資訊',
              steps: [
                '社區全日免費開放（24 小時）',
                '集章地圖 ₩2,000（中英日文版，在旅遊中心購買）',
                '店家通常 09:00–18:00',
              ],
              cost: '免費入場，地圖 ₩2,000',
            },
            {
              title: '🚇 交通方式',
              steps: [
                '地鐵 1 號線扎嘎其站（111）6 號出口',
                '轉乘 1-1 號或 2 號公車，至「甘川文化村」站下車',
                '從 Stanford Inn 步行至扎嘎其站約 5 分鐘',
              ],
              time: '約 20 分鐘',
              cost: '₩1,500（公車）',
            },
          ],
        },
      },
      {
        time: '12:00',
        name: '南浦洞 BIFF 廣場',
        desc: '釜山國際影展聖地，附近小吃攤、餐廳雲集，適合午餐覓食',
        maps: 'https://maps.google.com/?q=BIFF+Square+Busan',
      },
      {
        time: '14:00',
        name: '國際市場 → 扎嘎其市場',
        desc: '歷史市場逛街後，前往釜山最大水產市場，可自選活魚上樓料理',
        maps: 'https://maps.google.com/?q=Gukje+Market+Busan',
      },
      {
        time: '17:00',
        name: '廣安里海水浴場',
        desc: '欣賞夕陽映照廣安大橋的絕景，沿岸咖啡廳適合休憩',
        maps: 'https://maps.google.com/?q=Gwangalli+Beach+Busan',
        detail: {
          note: '夕陽約 18:30–19:00，提前佔好海景位是關鍵。以下咖啡廳皆有廣安大橋窗景。',
          options: [
            {
              title: '☕ 推薦海景咖啡廳',
              steps: [
                'CUP&CUP：日系米白木質裝潢，大片窗景，招牌起司蛋糕｜水營區廣安海邊路 177，4–5 樓',
                '차선책（Chaseonsaek）：低飽和木質調日式禪風，大片玻璃窗眺望廣安大橋｜수영구 광안해변로 237，3 樓，11:00–22:00',
                'Working Holiday：美式風格，全天早午餐，可打包到海邊野餐｜수영구 광안해변로 235，3 樓，09:00–23:00',
              ],
            },
          ],
        },
      },
      {
        time: '19:00',
        name: '廣安里夜景',
        desc: '廣安大橋夜間燈光璀璨，沿岸酒吧街熱鬧非凡，是釜山最美夜景之一',
        maps: 'https://maps.google.com/?q=Gwangalli+Beach+Busan',
      },
    ],
  },
  {
    day: 3,
    date: '2026-09-05',
    hotel: 'Stanford Inn Busan',
    title: '海雲台 · 松島纜車',
    theme: '海岸全制霸',
    spots: [
      {
        time: '09:00',
        name: '海雲台海水浴場（早晨）',
        desc: '趁遊客未聚集前漫步沙灘，享受清晨海景',
        maps: 'https://maps.google.com/?q=Haeundae+Beach+Busan',
      },
      {
        time: '10:30',
        name: '冬柏島・APEC 夜未眠燈塔',
        desc: '與海雲台相鄰的小島，步行繞島一圈約 30 分鐘，夕陽與海景必拍',
        maps: 'https://maps.google.com/?q=Dongbaek+Island+Busan',
      },
      {
        time: '13:00',
        name: 'Shinsegae Centum City 午餐 & 購物',
        desc: '金氏世界紀錄最大百貨公司，美食街選擇多元，下午順便逛街免稅',
        maps: 'https://maps.google.com/?q=Shinsegae+Centum+City+Busan',
      },
      {
        time: '15:30',
        name: '松島海上纜車',
        desc: '韓國最長海上纜車（1.62 公里），透明地板纜車車廂俯瞰松島海岸絕景',
        maps: 'https://maps.google.com/?q=Songdo+Cable+Car+Busan',
        detail: {
          note: 'Klook / KKday 線上預購比現場便宜；持 Visit Busan Pass 可免費搭水晶車廂來回（2024/9/10 起）。',
          options: [
            {
              title: '🎫 票價',
              steps: [
                '一般車廂：單程 ₩12,000 / 來回 ₩15,000',
                '水晶（玻璃地板）車廂：單程 ₩16,000 / 來回 ₩20,000',
                '一日無限搭乘：₩30,000',
              ],
              cost: '來回 ₩15,000–20,000',
            },
            {
              title: '📱 預訂方式',
              steps: [
                'Klook / KKday 線上購票，持 QR Code 至售票處兌換（比現場便宜）',
                '持 Visit Busan Pass：可免費搭水晶車廂來回，毋需加價',
              ],
            },
          ],
        },
      },
      {
        time: '17:30',
        name: '松島海水浴場',
        desc: '纜車下方的海灘，夕陽西沉時景色迷人，遊客比海雲台少',
        maps: 'https://maps.google.com/?q=Songdo+Beach+Busan',
      },
    ],
  },
  {
    day: 4,
    date: '2026-09-06',
    hotel: 'Stanford Inn Busan',
    title: '梵魚寺 · 龍頭山 · 西面',
    theme: '文化放鬆日',
    spots: [
      {
        time: '09:00',
        name: '梵魚寺',
        desc: '678年建立的千年古剎，藏於金井山中，秋初的山林清幽宜人',
        maps: 'https://maps.google.com/?q=Beomeosa+Temple+Busan',
        detail: {
          note: '地鐵站步行至梵魚寺約 45 分鐘；有公車可搭，建議不要步行以保留體力登金井山城。',
          options: [
            {
              title: '🚇 交通方式',
              steps: [
                '地鐵 1 號線梵魚寺站（119）7 號出口',
                '轉乘 90 號公車至梵魚寺（約 10 分鐘）',
                '或搭 203 號公車可直達東門',
              ],
              time: '地鐵站→梵魚寺 約 15–20 分鐘（公車）',
            },
          ],
        },
      },
      {
        time: '11:30',
        name: '金井山城',
        desc: '朝鮮時代山城遺址，健行路線景色壯闊，可俯瞰整座釜山',
        maps: 'https://maps.google.com/?q=Geumjeongsanseong+Fortress',
        detail: {
          note: '⚠️ 體力警示：梵魚寺 + 金井山城健行合計約 3–4 小時，下午行程建議以休閒為主，避免安排需要大量步行的景點。',
          options: [
            {
              title: '🥾 路線選擇',
              steps: [
                '東門 → 北門：4 km（輕鬆級，約 1.5–2 小時，推薦）',
                '全線 Y 型：10 km，總爬升 1,200m（費體力，不建議當天再安排其他行程）',
                '登頂姑堂峰來回：從東門約 90 分鐘',
              ],
              time: '輕鬆版約 1.5–2 小時',
            },
          ],
        },
      },
      {
        time: '14:00',
        name: '龍頭山公園・釜山塔',
        desc: '120 公尺高展望台，俯瞰釜山港全景，公園內有庭園與花圃',
        maps: 'https://maps.google.com/?q=Busan+Tower',
      },
      {
        time: '16:00',
        name: '東萊溫泉街',
        desc: '百年溫泉區，泡足浴放鬆雙腳，旁邊傳統市場可買伴手禮',
        maps: 'https://maps.google.com/?q=Dongnae+Hot+Spring+Busan',
        detail: {
          note: '露天足湯完全免費，九月正常開放；注意每週三、五休息。健行後泡腳，最佳恢復選擇。',
          options: [
            {
              title: '🦶 東萊溫泉露天足浴（돈래온천노천족탕）',
              steps: [
                '地鐵溫泉場站（127）1 號出口步行約 20 分鐘',
                '費用：完全免費',
                '休息日：每週三（三）、五（五）；夏期（7/20–8/20）、冬季（1/1–1/31）不開放',
                '九月（9/3–9/7）正常開放 ✓',
              ],
              cost: '免費',
            },
          ],
        },
      },
      {
        time: '19:00',
        name: '西面商圈晚餐 & 購物',
        desc: '釜山最繁華夜生活區，豬骨湯飯名店集中，最後一晚盡情血拼',
        maps: 'https://maps.google.com/?q=Seomyeon+Busan',
        detail: {
          note: '以下豬骨湯飯名店均位於西面站 1–2 號出口步行距離內，24 小時營業，登山後完美收尾。',
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
    title: '機張螃蟹 · 返程',
    theme: '美食收尾',
    spots: [
      {
        time: '08:00',
        name: '機張市場',
        desc: '釜山最新鮮的螃蟹市場，早市蟹腳飽滿，享用最後一頓豐盛釜山早午餐',
        maps: 'https://maps.google.com/?q=Gijang+Market+Busan',
        detail: {
          note: '⚠️ 九月季節提示：帝王蟹盛產期為 10–12 月，九月可吃但肉質未達最肥美，價格偏高。建議改點花蟹（꽃게）或紅蟹（홍게），九月盛產且性價比高。',
          options: [
            {
              title: '🦀 九月最佳選擇',
              steps: [
                '花蟹（꽃게）：九月盛產，肉質鮮甜，性價比高 ✓',
                '紅蟹（홍게）：九月盛產，膏豐厚，推薦 ✓',
                '帝王蟹：可點，但建議等 10–11 月最佳賞味期',
              ],
            },
            {
              title: '🏪 推薦店家',
              steps: [
                '鱈蟹之家（市場尾端）',
                '機張總角大蟹（中央）',
                '青海王大蟹',
                '計費方式：食材費（秤重，各店不同）+ 料理費（公定價，不可殺價）',
              ],
              cost: '花蟹約 ₩30,000–40,000/人',
            },
          ],
        },
      },
      {
        time: '09:30',
        name: '尾浦港散步',
        desc: '寧靜漁港，看漁船出入，吹海風放空，旅程最後的平靜時光',
        maps: 'https://maps.google.com/?q=Mipo+Port+Busan',
      },
      {
        time: '10:30',
        name: '前往金海國際機場',
        desc: '搭地鐵至沙上站換機場快線，預留約 1 小時車程，提前辦理登機手續',
        maps: 'https://maps.google.com/?q=Gimhae+International+Airport',
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
