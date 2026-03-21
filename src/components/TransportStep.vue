<template>
  <div class="bg-white rounded-2xl shadow-md p-6">
    <div class="flex items-center gap-3 mb-4">
      <span class="text-3xl">{{ item.icon }}</span>
      <h3 class="text-lg font-bold text-busan-blue">{{ item.title }}</h3>
    </div>
    <p class="text-gray-600 text-sm mb-3">{{ item.desc }}</p>
    <ul class="space-y-1.5 mb-4">
      <li
        v-for="tip in item.tips"
        :key="tip"
        class="flex items-start gap-2 text-sm text-gray-700"
      >
        <span class="text-busan-coral mt-0.5">▸</span>
        {{ tip }}
      </li>
    </ul>
    <div class="bg-busan-light rounded-lg px-4 py-2 text-sm text-busan-blue font-medium">
      💰 {{ item.fare }}
    </div>
  </div>
</template>

<script setup>
defineProps({ item: Object })
</script>
