<template>
  <div 
    @click="$emit('openPreview', product)"
    class="group relative flex h-full min-w-55 flex-col items-center rounded-[2.5rem] bg-white p-6 cursor-pointer
           transition-all duration-500 ease-in-out
           border-4 border-transparent
           hover:-translate-y-3 
           hover:border-[#00155a] 
           hover:shadow-[0_20px_50px_rgba(0,21,90,0.2)]"
  >
    <button 
      @click.stop="favoriteStore.toggleFavorite(product)"
      class="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-all active:scale-90"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-5 w-5 transition-colors duration-300" 
        :class="favoriteStore.isFavorite(product.id) ? 'fill-red-500 stroke-red-500' : 'fill-none stroke-gray-400'"
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </button>

    <div class="mb-6 flex aspect-square w-full items-center justify-center overflow-hidden bg-white">
      <img 
        :src="product.thumbnail" 
        :alt="product.title" 
        class="max-h-[90%] max-w-[90%] object-contain transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
    </div>

    <div class="flex w-full grow flex-col items-center text-center">
      <h3 class="mb-2 line-clamp-2 text-sm font-bold text-gray-900 uppercase tracking-tight h-10">
        {{ product.title }}
      </h3>
      
      <div class="mb-4 flex items-center gap-1 text-yellow-400">
        <span v-for="i in 5" :key="i" class="text-xs">
          {{ i <= Math.round(product.rating) ? '★' : '☆' }}
        </span>
        <span class="ml-1 text-[10px] text-gray-400">({{ product.rating }})</span>
      </div>

      <div class="mt-auto mb-4">
        <span class="text-xl font-black text-[#00155a]">
          Rs. {{ product.price.toLocaleString() }}
        </span>
      </div>

      <button 
        @click.stop="$emit('addToCart', product)"
        class="w-full rounded-full bg-[#f04343] py-3 text-[11px] font-bold uppercase tracking-widest text-white transition-all hover:bg-red-700 shadow-md active:scale-95"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavoriteStore } from '../../stores/favoriteStore'

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
  description?: string;
}

interface Props {
  product: Product;
}

defineProps<Props>();

defineEmits<{ 
  (e: 'addToCart', product: Product): void;
  (e: 'openPreview', product: Product): void;
}>();

const favoriteStore = useFavoriteStore();
</script>