<template>
  <main class="max-w-5xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold text-busan-blue mb-2">🍜 釜山美食推薦</h1>
    <p class="text-gray-500 mb-6">海鮮、燒肉、街頭小吃、甜點一次掌握</p>

    <!-- 分類篩選 -->
    <div class="flex gap-2 flex-wrap mb-8">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="selected = cat"
        :class="[
          'px-4 py-1.5 rounded-full text-sm font-medium transition-colors',
          selected === cat
            ? 'bg-busan-coral text-white'
            : 'bg-white text-gray-600 hover:bg-gray-100 border',
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <!-- 卡片列表 -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <FoodCard v-for="food in filtered" :key="food.id" :food="food" />
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { foods, categories } from '../data/food.js'
import FoodCard from '../components/FoodCard.vue'

const selected = ref('全部')
const filtered = computed(() =>
  selected.value === '全部' ? foods : foods.filter(f => f.category === selected.value)
)
</script>
