<template>
  <div class="bg-white rounded-2xl shadow-md overflow-hidden">
    <div class="bg-busan-blue text-white px-6 py-4 flex items-center justify-between">
      <div>
        <span class="text-sm opacity-75">Day {{ day.day }}{{ day.date ? `　${day.date}` : '' }}</span>
        <h2 class="text-xl font-bold">{{ day.title }}</h2>
        <div v-if="day.hotel" class="text-xs mt-1 opacity-75">🏨 {{ day.hotel }}</div>
      </div>
      <span class="text-sm bg-busan-coral px-3 py-1 rounded-full shrink-0 ml-3">{{ day.theme }}</span>
    </div>
    <ul class="divide-y divide-gray-100">
      <li
        v-for="spot in day.spots"
        :key="spot.name"
        class="px-6 py-4 flex gap-4 hover:bg-orange-50 transition-colors"
      >
        <span class="text-busan-coral font-mono text-sm w-12 shrink-0 pt-0.5">{{ spot.time }}</span>
        <div class="flex-1">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="font-semibold text-gray-800">{{ spot.name }}</span>
            <a
              :href="spot.maps"
              target="_blank"
              rel="noopener"
              class="text-xs text-blue-500 hover:text-blue-700 underline"
            >地圖</a>
          </div>
          <p class="text-sm text-gray-500 mt-0.5">{{ spot.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({ day: Object })
</script>
