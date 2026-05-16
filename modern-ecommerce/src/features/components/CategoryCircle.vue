<!-- src/features/components/CategoryCircle.vue -->
<script setup lang="ts">
defineProps<{ 
  name: string, 
  image: string,
  isActive: boolean 
}>()

defineEmits(['select'])
</script>

<template>
  <div 
    @click="$emit('select')" 
    class="flex flex-col items-center gap-3 cursor-pointer group"
  >
    <div :class="[
      'w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border-2',
      isActive ? 'bg-[#f0627e] border-[#f0627e] scale-110 shadow-lg' : 'bg-gray-100 border-transparent hover:border-gray-300'
    ]">
      <img :src="image" :alt="name" class="w-10 h-10 object-contain group-hover:scale-110 transition-transform" />
    </div>
    <span :class="[
      'text-xs font-bold uppercase tracking-widest transition-colors',
      isActive ? 'text-[#f0627e]' : 'text-[#00155a] group-hover:text-pink-500'
    ]">
      {{ name }}
    </span>
  </div>
</template>