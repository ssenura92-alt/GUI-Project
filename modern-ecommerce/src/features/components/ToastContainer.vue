<template>
  <div class="fixed top-6 right-6 z-300 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
    <div 
      v-for="toast in toastStore.toasts" 
      :key="toast.id"
      class="pointer-events-auto flex items-center justify-between p-4 rounded-2xl shadow-xl bg-white border text-sm font-bold tracking-tight transform transition-all duration-300 animate-toast"
      :class="{
        'border-green-100 bg-green-50/90 text-green-800': toast.type === 'success',
        'border-blue-100 bg-blue-50/90 text-blue-800': toast.type === 'info',
        'border-red-100 bg-red-50/90 text-red-800': toast.type === 'error'
      }"
    >
      <div class="flex items-center gap-3">
        <svg v-if="toast.type === 'success'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        
        <svg v-else-if="toast.type === 'info'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>

        <span>{{ toast.message }}</span>
      </div>

      <button @click="toastStore.removeToast(toast.id)" class="text-gray-400 hover:text-gray-600 ml-4 font-light text-lg">&times;</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToastStore } from '../../stores/toastStore'
const toastStore = useToastStore()
</script>

<style scoped>
@keyframes toastIn {
  0% { transform: translateY(-20px) scale(0.9); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}
.animate-toast {
  animation: toastIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}
</style>