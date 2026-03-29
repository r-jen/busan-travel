<template>
  <div class="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-2 hover:shadow-lg transition-shadow">
    <div class="flex items-start justify-between gap-2">
      <div>
        <h3 class="font-bold text-gray-800">{{ food.name }}</h3>
        <p class="text-sm text-gray-400">{{ food.nameKo }}</p>
      </div>
      <span class="text-xs bg-busan-coral text-white px-2 py-0.5 rounded-full shrink-0">{{ food.category }}</span>
    </div>
    <div class="text-sm text-gray-500 flex items-center gap-1">
      📍 {{ food.area }}
      <a
        :href="`https://map.naver.com/p/search/${encodeURIComponent(food.nameKo + ' ' + food.areaKo)}`"
        target="_blank"
        rel="noopener noreferrer"
        class="ml-1 text-busan-blue hover:text-busan-coral transition-colors"
        title="在 Naver 地圖查詢"
      >🗺️</a>
    </div>
    <div class="text-sm text-gray-600">
      <span class="font-medium text-busan-blue">推薦：</span>{{ food.recommend }}
    </div>
    <p class="text-sm text-gray-500 leading-relaxed">{{ food.desc }}</p>
    <div class="text-sm text-busan-coral font-medium mt-auto">{{ food.price }}</div>
  </div>
</template>

<script setup>
defineProps({ food: Object })
</script>
