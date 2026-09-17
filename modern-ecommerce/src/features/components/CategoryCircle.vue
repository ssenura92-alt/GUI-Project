<template>
  <div 
    @click="$emit('select')" 
    class="flex flex-col items-center cursor-pointer group shrink-0 select-none"
  >
    <div 
      class="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white dark:bg-gray-900 border-2 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-105"
      :class="isActive ? 'border-[#f04343] ring-4 ring-red-500/10' : 'border-gray-100 dark:border-gray-800'"
    >
      <img 
        :src="image" 
        :alt="name" 
        class="w-12 h-12 md:w-14 md:h-14 object-contain transition-all duration-300 opacity-30 group-hover:opacity-100 dark:opacity-40 dark:group-hover:opacity-100 dark:invert" 
        :class="{ 'opacity-100 dark:opacity-100': isActive }"
      />
    </div>

    <span 
      class="text-xs md:text-sm font-bold text-gray-800 dark:text-gray-200 mt-4 text-center transition-colors px-2"
      :class="{ 'text-[#f04343] dark:text-[#f04343] font-black': isActive }"
    >
      {{ displayName }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name: string;
  image: string;
  isActive: boolean;
}>();

defineEmits<{
  (e: 'select'): void;
}>();

const displayName = computed(() => {
  switch (props.name.toLowerCase()) {
    case 'all': return 'All Products'
    case 'laptops': return 'Gaming & Premium Laptops'
    case 'smartphones': return 'Workstation & Smartphones'
    case 'tablets': return 'Used PC & Tablets'
    case 'accessories': return 'Laptop & Desktop Accessories'
    case 'lighting': return 'Smart Ambient Lighting'
    case 'automotive': return 'Automotive Electronics'
    default: return props.name
  }
})
</script>