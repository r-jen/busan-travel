<template>
  <main>
    <!-- Hero -->
    <section class="relative bg-busan-blue text-white text-center py-24 px-4 overflow-hidden">
      <div class="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Gwangalli_Beach%2C_Busan%2C_Korea.jpg/1280px-Gwangalli_Beach%2C_Busan%2C_Korea.jpg')] bg-cover bg-center"></div>
      <div class="relative z-10">
        <p class="text-busan-coral font-semibold tracking-widest uppercase text-sm mb-2">South Korea</p>
        <h1 class="text-5xl font-extrabold mb-4">🇰🇷 釜山旅遊規劃</h1>
        <p class="text-lg text-gray-200 max-w-xl mx-auto">海港城市的魅力：海鮮、溫泉、藝術村，五天四夜完整攻略</p>
      </div>
    </section>

    <!-- Cards -->
    <section class="max-w-5xl mx-auto px-4 py-14 grid sm:grid-cols-3 gap-6">
      <RouterLink
        v-for="card in cards"
        :key="card.to"
        :to="card.to"
        class="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all"
      >
        <span class="text-4xl mb-3">{{ card.icon }}</span>
        <h2 class="text-xl font-bold text-busan-blue mb-1">{{ card.title }}</h2>
        <p class="text-sm text-gray-500">{{ card.desc }}</p>
      </RouterLink>
    </section>

    <!-- Quick Tips -->
    <section class="bg-white py-10">
      <div class="max-w-5xl mx-auto px-4">
        <h2 class="text-2xl font-bold text-busan-blue mb-6 text-center">📌 出發前須知</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div v-for="tip in tips" :key="tip.title" class="flex gap-3 p-4 bg-busan-light rounded-xl">
            <span class="text-2xl shrink-0">{{ tip.icon }}</span>
            <div>
              <p class="font-semibold text-gray-800 text-sm">{{ tip.title }}</p>
              <p class="text-sm text-gray-500 mt-0.5">{{ tip.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const cards = [
  { to: '/itinerary', icon: '📅', title: '5天行程規劃', desc: '從海雲台到梵魚寺，每日詳細景點安排' },
  { to: '/food', icon: '🦀', title: '美食推薦', desc: '海鮮、燒肉、街頭小吃、甜點分類精選' },
  { to: '/transport', icon: '🚇', title: '交通指南', desc: '航班資訊、機場接駁、市區地鐵完整說明' },
]

const tips = [
  { icon: '💰', title: '貨幣', desc: '韓圓（KRW）。建議在機場或市區換匯，信用卡大部分店家可用' },
  { icon: '📱', title: 'SIM 卡 / WiFi', desc: '機場可購買韓國 SIM 卡，或租借 WiFi 分享器' },
  { icon: '🗣️', title: '語言', desc: '韓文為主，觀光區多有英文標示；Naver 翻譯 App 實用' },
  { icon: '⚡', title: '插座', desc: '韓國使用 220V / C 型圓腳插座，台灣電器需要轉接頭' },
  { icon: '🌡️', title: '氣候', desc: '夏天（6–8月）炎熱潮濕；春秋宜人；冬天（12–2月）寒冷' },
  { icon: '🕐', title: '時差', desc: '韓國時間比台灣快 1 小時（UTC+9）' },
]
</script>
