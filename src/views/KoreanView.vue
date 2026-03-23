<template>
  <main class="max-w-5xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold text-busan-blue mb-2">🗣️ 實用韓語</h1>
    <p class="text-gray-500 mb-6">餐廳、購物、交通、住宿常用句，含韓文・拼音・中文對照</p>

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
    <div class="grid sm:grid-cols-2 gap-4">
      <div
        v-for="phrase in filtered"
        :key="phrase.id"
        class="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-3 hover:shadow-lg transition-shadow"
      >
        <!-- 標題列 -->
        <div class="flex items-center justify-between gap-2">
          <h3 class="font-bold text-gray-800">{{ phrase.situation }}</h3>
          <span class="text-xs bg-busan-coral text-white px-2 py-0.5 rounded-full shrink-0">
            {{ phrase.category }}
          </span>
        </div>

        <!-- 對話行 -->
        <div class="flex flex-col gap-2.5">
          <div
            v-for="(line, i) in phrase.lines"
            :key="i"
            class="flex flex-col gap-0.5"
          >
            <span class="text-xs text-gray-400 font-medium">{{ line.role }}</span>
            <div class="flex items-baseline justify-between gap-2 flex-wrap">
              <span class="text-lg font-semibold text-gray-800 leading-snug">{{ line.korean }}</span>
              <span class="text-sm text-gray-500 shrink-0">{{ line.chinese }}</span>
            </div>
            <span class="text-xs text-busan-coral">{{ line.pronunciation }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { phrases, categories } from '../data/korean.js'

const selected = ref('全部')
const filtered = computed(() =>
  selected.value === '全部' ? phrases : phrases.filter(p => p.category === selected.value)
)
</script>
