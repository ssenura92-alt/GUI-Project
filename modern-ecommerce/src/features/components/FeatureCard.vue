<template>
  <div 
    class="flex flex-col items-center p-6 text-center bg-white border-b border-gray-200 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 transition-all duration-300 hover:bg-gray-50 group focus-within:ring-2 focus-within:ring-red-500 outline-none"
  >
    <div class="mb-4 text-gray-800 transition-transform duration-300 group-hover:scale-110">
      <slot name="icon">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </slot>
    </div>

    <h3 class="text-lg font-bold text-gray-900 uppercase tracking-wide mb-1">
      {{ title }}
    </h3>
    <p class="text-sm text-gray-500 leading-relaxed max-w-50">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
}

defineProps<Props>();
</script>