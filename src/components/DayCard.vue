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
        class="px-6 py-4 flex gap-4"
        :class="spot.detail ? '' : 'hover:bg-orange-50 transition-colors'"
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

          <!-- 展開詳細內容 -->
          <template v-if="spot.detail">
            <button
              @click="toggleDetail(spot.name)"
              class="mt-2 text-xs text-busan-blue font-medium flex items-center gap-1 hover:text-busan-coral transition-colors"
            >
              <span>{{ expanded[spot.name] ? '▲ 收起詳細交通' : '▼ 展開詳細交通方式' }}</span>
            </button>

            <div v-if="expanded[spot.name]" class="mt-3 space-y-4">
              <p class="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-2">
                ⚠️ {{ spot.detail.note }}
              </p>
              <div
                v-for="opt in spot.detail.options"
                :key="opt.title"
                class="bg-gray-50 rounded-xl p-4"
              >
                <p class="text-sm font-semibold text-gray-800 mb-2">{{ opt.title }}</p>
                <ol class="space-y-1.5 mb-3">
                  <li
                    v-for="(step, i) in opt.steps"
                    :key="i"
                    class="flex gap-2 text-sm text-gray-600"
                  >
                    <span class="text-busan-coral font-bold shrink-0">{{ i + 1 }}.</span>
                    {{ step }}
                  </li>
                </ol>
                <div class="flex gap-4 text-xs text-gray-500">
                  <span>⏱ {{ opt.time }}</span>
                  <span>💰 {{ opt.cost }}</span>
                </div>
              </div>
            </div>
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

defineProps({ day: Object })

const expanded = reactive({})
function toggleDetail(name) {
  expanded[name] = !expanded[name]
}
</script>
