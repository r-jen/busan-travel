<template>
  <main class="max-w-3xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold text-busan-blue mb-2">📅 五天行程規劃</h1>
    <p class="text-gray-500 mb-8">從機場接駁到最後購物，完整安排讓你輕鬆出遊</p>

    <div class="flex gap-2 flex-wrap mb-8">
      <button
        v-for="d in itinerary"
        :key="d.day"
        @click="active = d.day"
        :class="[
          'px-4 py-1.5 rounded-full text-sm font-medium transition-colors',
          active === d.day
            ? 'bg-busan-coral text-white'
            : 'bg-white text-gray-600 hover:bg-gray-100 border',
        ]"
      >
        Day {{ d.day }}
      </button>
    </div>

    <DayCard :day="current" />
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { itinerary } from '../data/itinerary.js'
import DayCard from '../components/DayCard.vue'

const active = ref(1)
const current = computed(() => itinerary.find(d => d.day === active.value))
</script>
