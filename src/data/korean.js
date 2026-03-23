export const phrases = [
  // ── 問候 ──────────────────────────────────────────
  {
    id: 1,
    category: '問候',
    situation: '打招呼',
    lines: [
      { role: '說', korean: '안녕하세요.', pronunciation: 'An-nyeong-ha-se-yo', chinese: '你好／您好。' },
    ],
  },
  {
    id: 2,
    category: '問候',
    situation: '道謝',
    lines: [
      { role: '說', korean: '감사합니다.', pronunciation: 'Gam-sa-ham-ni-da', chinese: '謝謝。' },
    ],
  },
  {
    id: 3,
    category: '問候',
    situation: '道歉',
    lines: [
      { role: '說', korean: '죄송합니다.', pronunciation: 'Joe-song-ham-ni-da', chinese: '對不起／不好意思。' },
    ],
  },
  {
    id: 4,
    category: '問候',
    situation: '不會說韓語',
    lines: [
      { role: '說', korean: '한국어를 못해요.', pronunciation: 'Han-gug-eo-reul mot-hae-yo', chinese: '我不會韓語。' },
      { role: '說', korean: '영어 되세요?', pronunciation: 'Yeong-eo doe-se-yo?', chinese: '你說英語嗎？' },
    ],
  },

  // ── 餐廳 ──────────────────────────────────────────
  {
    id: 5,
    category: '餐廳',
    situation: '詢問人數',
    lines: [
      { role: '店員問', korean: '몇 분이세요?', pronunciation: 'Myeot bun-i-se-yo?', chinese: '幾位？' },
      { role: '我回答', korean: '세 명이에요.', pronunciation: 'Se myeong-i-e-yo', chinese: '三位。' },
    ],
  },
  {
    id: 6,
    category: '餐廳',
    situation: '點餐',
    lines: [
      { role: '說', korean: '이거 주세요.', pronunciation: 'I-geo ju-se-yo', chinese: '請給我這個。（指著菜單）' },
      { role: '說', korean: '하나 더 주세요.', pronunciation: 'Ha-na deo ju-se-yo', chinese: '再來一個。' },
    ],
  },
  {
    id: 7,
    category: '餐廳',
    situation: '詢問是否辣',
    lines: [
      { role: '我問', korean: '맵지 않게 해주세요.', pronunciation: 'Maep-ji an-ke hae-ju-se-yo', chinese: '請不要做辣。' },
      { role: '我問', korean: '이거 매워요?', pronunciation: 'I-geo mae-wo-yo?', chinese: '這個辣嗎？' },
    ],
  },
  {
    id: 8,
    category: '餐廳',
    situation: '結帳',
    lines: [
      { role: '說', korean: '계산해 주세요.', pronunciation: 'Gye-san-hae ju-se-yo', chinese: '請幫我結帳。' },
      { role: '店員問', korean: '같이 계산할까요?', pronunciation: 'Ga-chi gye-san-hal-kka-yo?', chinese: '一起結帳嗎？' },
      { role: '我回答', korean: '따로따로요.', pronunciation: 'Tta-ro tta-ro-yo', chinese: '各付各的。' },
    ],
  },
  {
    id: 9,
    category: '餐廳',
    situation: '要求外帶',
    lines: [
      { role: '說', korean: '포장해 주세요.', pronunciation: 'Po-jang-hae ju-se-yo', chinese: '請幫我打包。' },
    ],
  },
  {
    id: 10,
    category: '餐廳',
    situation: '好吃讚美',
    lines: [
      { role: '說', korean: '맛있어요!', pronunciation: 'Mat-it-seo-yo!', chinese: '好吃！' },
    ],
  },

  // ── 購物 ──────────────────────────────────────────
  {
    id: 11,
    category: '購物',
    situation: '詢問價格',
    lines: [
      { role: '我問', korean: '얼마예요?', pronunciation: 'Eol-ma-ye-yo?', chinese: '多少錢？' },
    ],
  },
  {
    id: 12,
    category: '購物',
    situation: '能否便宜一點',
    lines: [
      { role: '我問', korean: '깎아 주세요.', pronunciation: 'Kka-kka ju-se-yo', chinese: '算便宜一點。' },
    ],
  },
  {
    id: 13,
    category: '購物',
    situation: '試穿 / 試用',
    lines: [
      { role: '我問', korean: '입어봐도 돼요?', pronunciation: 'Ib-eo-bwa-do dwae-yo?', chinese: '可以試穿嗎？' },
    ],
  },
  {
    id: 14,
    category: '購物',
    situation: '詢問有無其他尺寸',
    lines: [
      { role: '我問', korean: '다른 사이즈 있어요?', pronunciation: 'Da-reun sa-i-jeu it-seo-yo?', chinese: '有其他尺寸嗎？' },
    ],
  },
  {
    id: 15,
    category: '購物',
    situation: '退稅',
    lines: [
      { role: '我問', korean: '세금 환급 되나요?', pronunciation: 'Se-geum hwan-geup doe-na-yo?', chinese: '可以退稅嗎？' },
    ],
  },
  {
    id: 16,
    category: '購物',
    situation: '這個我要了',
    lines: [
      { role: '說', korean: '이걸로 할게요.', pronunciation: 'I-geol-lo hal-ge-yo', chinese: '我要這個。' },
    ],
  },

  // ── 交通 ──────────────────────────────────────────
  {
    id: 17,
    category: '交通',
    situation: '搭地鐵詢問',
    lines: [
      { role: '我問', korean: '지하철 어디예요?', pronunciation: 'Ji-ha-cheol eo-di-ye-yo?', chinese: '地鐵站在哪裡？' },
    ],
  },
  {
    id: 18,
    category: '交通',
    situation: '叫計程車',
    lines: [
      { role: '說', korean: '여기로 가주세요.', pronunciation: 'Yeo-gi-ro ga-ju-se-yo', chinese: '請到這裡。（出示地圖）' },
    ],
  },
  {
    id: 19,
    category: '交通',
    situation: '詢問到站了嗎',
    lines: [
      { role: '我問', korean: '여기가 맞아요?', pronunciation: 'Yeo-gi-ga maj-a-yo?', chinese: '這裡對嗎？' },
    ],
  },
  {
    id: 20,
    category: '交通',
    situation: '問路',
    lines: [
      { role: '我問', korean: '어떻게 가요?', pronunciation: 'Eo-ddeo-ke ga-yo?', chinese: '怎麼走？' },
      { role: '我問', korean: '걸어서 갈 수 있어요?', pronunciation: 'Geol-eo-seo gal su it-seo-yo?', chinese: '可以走路去嗎？' },
    ],
  },

  // ── 住宿 ──────────────────────────────────────────
  {
    id: 21,
    category: '住宿',
    situation: '辦理入住',
    lines: [
      { role: '說', korean: '체크인 하려고요.', pronunciation: 'Che-keu-in ha-ryeo-go-yo', chinese: '我要辦理入住。' },
    ],
  },
  {
    id: 22,
    category: '住宿',
    situation: '詢問早餐',
    lines: [
      { role: '我問', korean: '조식은 몇 시예요?', pronunciation: 'Jo-sig-eun myeot si-ye-yo?', chinese: '早餐幾點開始？' },
    ],
  },
  {
    id: 23,
    category: '住宿',
    situation: '房間有問題',
    lines: [
      { role: '說', korean: '방에 문제가 있어요.', pronunciation: 'Bang-e mun-je-ga it-seo-yo', chinese: '房間有問題。' },
      { role: '例如', korean: '에어컨이 안 돼요.', pronunciation: 'E-eo-keon-i an dwae-yo', chinese: '冷氣壞了。' },
    ],
  },
  {
    id: 24,
    category: '住宿',
    situation: '退房',
    lines: [
      { role: '說', korean: '체크아웃 할게요.', pronunciation: 'Che-keu-a-ut hal-ge-yo', chinese: '我要退房。' },
    ],
  },

  // ── 緊急 ──────────────────────────────────────────
  {
    id: 25,
    category: '緊急',
    situation: '求助',
    lines: [
      { role: '說', korean: '도와주세요!', pronunciation: 'Do-wa-ju-se-yo!', chinese: '請幫幫我！' },
    ],
  },
  {
    id: 26,
    category: '緊急',
    situation: '身體不舒服',
    lines: [
      { role: '說', korean: '아파요.', pronunciation: 'A-pa-yo', chinese: '我不舒服／很痛。' },
      { role: '說', korean: '병원에 가고 싶어요.', pronunciation: 'Byeong-won-e ga-go si-peo-yo', chinese: '我想去醫院。' },
    ],
  },
  {
    id: 27,
    category: '緊急',
    situation: '東西遺失',
    lines: [
      { role: '說', korean: '지갑을 잃어버렸어요.', pronunciation: 'Ji-gab-eul il-eo-beo-ryeot-seo-yo', chinese: '我的錢包不見了。' },
      { role: '說', korean: '핸드폰을 잃어버렸어요.', pronunciation: 'Haen-deu-pon-eul il-eo-beo-ryeot-seo-yo', chinese: '我的手機不見了。' },
    ],
  },
  {
    id: 28,
    category: '緊急',
    situation: '報警',
    lines: [
      { role: '說', korean: '경찰을 불러주세요.', pronunciation: 'Gyeong-chal-eul bul-leo-ju-se-yo', chinese: '請叫警察。' },
    ],
  },
]

export const categories = ['全部', '問候', '餐廳', '購物', '交通', '住宿', '緊急']
