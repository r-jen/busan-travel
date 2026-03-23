<template>
  <nav class="bg-busan-blue text-white shadow-lg sticky top-0 z-50">
    <div class="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
      <RouterLink to="/" class="font-bold text-lg tracking-wide hover:text-busan-coral transition-colors">
        🇰🇷 釜山旅遊
      </RouterLink>
      <div class="flex gap-6 text-sm font-medium">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="hover:text-busan-coral transition-colors"
          active-class="text-busan-coral border-b-2 border-busan-coral pb-0.5"
        >
          {{ link.label }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const links = [
  { to: '/', label: '🏠 首頁' },
  { to: '/itinerary', label: '📅 行程' },
  { to: '/food', label: '🍜 美食' },
  { to: '/transport', label: '🚇 交通' },
  { to: '/korean', label: '🗣️ 韓語' },
]
</script>
