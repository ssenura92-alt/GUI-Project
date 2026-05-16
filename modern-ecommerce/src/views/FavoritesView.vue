<template>
  <div class="min-h-screen bg-gray-50 py-12 px-6 md:px-16">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-3xl font-black text-[#00155a] mb-8 uppercase tracking-tight">My Favorites</h1>

      <div v-if="favoriteStore.favorites.length === 0" class="bg-white p-12 rounded-3xl shadow-sm text-center">
        <p class="text-gray-400 text-lg">You haven't added any favorites yet.</p>
        <router-link to="/" class="mt-4 inline-block text-red-500 font-bold hover:underline">Go shopping</router-link>
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <ProductCard 
          v-for="product in favoriteStore.favorites" 
          :key="product.id" 
          :product="product"
          @addToCart="cartStore.addToCart"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavoriteStore } from '../stores/favoriteStore'
import { useCartStore } from '../stores/cartStore'
import ProductCard from '../features/components/ProductCard.vue'

const favoriteStore = useFavoriteStore()
const cartStore = useCartStore()
</script>