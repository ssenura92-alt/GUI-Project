<template>
  <div 
    v-if="isOpen && product" 
    class="fixed inset-0 z-200 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    @click="$emit('close')"
  >
    <div 
      class="bg-white dark:bg-gray-900 rounded-[2.5rem] max-w-4xl w-full min-h-112.5 p-8 md:p-12 relative flex flex-col md:flex-row gap-12 shadow-2xl transition-all border border-gray-100 dark:border-gray-800 animate-in fade-in zoom-in-95 duration-300"
      @click.stop
    >
      <button 
        @click="$emit('close')" 
        class="absolute top-6 right-8 text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-white text-3xl font-light transition-colors"
      >
        &times;
      </button>
      
      <div class="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-950/50 border dark:border-gray-800/40 rounded-3xl p-6 aspect-square md:aspect-auto md:h-auto min-h-72">
        <img 
          :src="product.thumbnail" 
          :alt="product.title" 
          class="max-h-64 md:max-h-80 w-auto object-contain transition-transform duration-300 hover:scale-105" 
        />
      </div>
      
      <div class="flex-1 flex flex-col justify-between text-left py-2">
        <div>
          <h2 class="text-2xl md:text-3xl font-black text-[#00155a] dark:text-white uppercase tracking-tight mb-3 leading-tight transition-colors">
            {{ product.title }}
          </h2>
          
          <div class="text-yellow-400 flex items-center gap-1 mb-6 text-sm">
            <span v-for="i in 5" :key="i">
              {{ i <= Math.round(product.rating) ? '★' : '☆' }}
            </span>
            <span class="text-gray-400 dark:text-gray-500 text-xs ml-1">({{ product.rating }} / 5 Customer Rating)</span>
          </div>

          <p class="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-8 leading-relaxed font-normal transition-colors">
            {{ product.description || 'Premium quality product selected from Nexus Computer Systems. Built for high performance, reliability, and modern day tasks.' }}
          </p>
        </div>

        <div>
          <p class="text-3xl md:text-4xl font-black text-[#00155a] dark:text-white mb-6 tracking-tight transition-colors">
            Rs. {{ product.price.toLocaleString() }}
          </p>
          
          <button 
            @click="cartStore.addToCart(product); $emit('close')"
            class="w-full bg-[#f04343] hover:bg-red-700 text-white font-bold uppercase tracking-widest py-4 md:py-5 rounded-full text-xs md:text-sm transition-all shadow-xl shadow-red-500/10 hover:shadow-red-500/20 active:scale-95 text-center"
          >
            Add To Cart & Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../../stores/cartStore'

// Component Props Definition
defineProps<{
  product: {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    rating: number;
    description?: string;
  } | null;
  isOpen: boolean;
}>();

// Emits Definition
defineEmits<{
  (e: 'close'): void;
}>();

const cartStore = useCartStore()
</script>

<style scoped>
/* Performance optimized flow indicators */
</style>