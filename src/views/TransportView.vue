<template>
  <main class="max-w-4xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold text-busan-blue mb-2">🚇 交通資訊</h1>
    <p class="text-gray-500 mb-10">從台灣出發到釜山市區移動，一次搞懂</p>

    <!-- 抵達釜山 -->
    <section v-for="section in arrival" :key="section.title" class="mb-8">
      <h2 class="text-xl font-bold text-busan-blue mb-4">{{ section.title }}</h2>
      <div class="bg-white rounded-2xl shadow-md overflow-hidden">
        <dl class="divide-y divide-gray-100">
          <div v-for="item in section.items" :key="item.label" class="px-6 py-4 flex gap-4">
            <dt class="text-sm font-medium text-gray-500 w-36 shrink-0">{{ item.label }}</dt>
            <dd class="text-sm text-gray-800">{{ item.value }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- 市區交通 -->
    <section>
      <h2 class="text-xl font-bold text-busan-blue mb-4">🗺️ 市區交通方式</h2>
      <div class="grid sm:grid-cols-2 gap-5">
        <TransportStep v-for="item in cityTransport" :key="item.title" :item="item" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { arrival, cityTransport } from '../data/transport.js'
import TransportStep from '../components/TransportStep.vue'
</script>
