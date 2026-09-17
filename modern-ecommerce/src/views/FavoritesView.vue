<script setup lang="ts">
import { computed } from 'vue'
import { useFavoriteStore } from '../stores/favoriteStore' // 👈 සෘජුවම Favorite Store එක ඉම්පෝට් කළා
import { useCartStore } from '../stores/cartStore'
import ProductCard from '../features/components/ProductCard.vue'

const favoriteStore = useFavoriteStore()
const cartStore = useCartStore()

// 🧠 WISHLIST LOGIC:
// ඔයාගේ favoriteStore එක ඇතුළේ කැමතිම භාණ්ඩ එකතු වෙන Array එකේ නම 'favorites' නම් එය සෘජුවම ලබාගනී.
// (යම් හෙයකින් ඔයාගේ store එකේ array නම 'favoriteItems' නම් පල්ලෙහා තියෙන '.favorites' වෙනුවට '.favoriteItems' යොදන්න)
const favoriteProducts = computed(() => {
  return favoriteStore.favorites || []
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white pt-12 pb-20 transition-colors duration-300">
    
    <div class="container mx-auto px-6 md:px-16 max-w-7xl">
      
      <div v-if="favoriteProducts.length > 0">
        <div class="text-left mb-8">
          <h2 class="text-xl font-black uppercase tracking-wider border-b border-gray-100 dark:border-gray-900 pb-3">
            Favorite Items ({{ favoriteProducts.length }})
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <ProductCard 
            v-for="product in favoriteProducts" 
            :key="product.id" 
            :product="product"
            @addToCart="cartStore.addToCart" 
          />
        </div>
      </div>

      <div v-else class="max-w-md mx-auto text-center py-16 px-6 bg-gray-50/50 dark:bg-gray-900/10 border border-gray-100 dark:border-gray-900 rounded-[2.5rem] mt-12 transition-colors">
        <div class="w-16 h-16 bg-red-50 dark:bg-red-950/30 text-[#f04343] rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner border dark:border-red-900/20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </div>
        <h3 class="font-black text-lg text-gray-900 dark:text-white uppercase tracking-tight">Your Wishlist is Empty</h3>
        <p class="text-xs text-gray-400 dark:text-gray-500 font-bold mt-2 leading-relaxed">
          You haven't added any premium devices to your favorites yet. Explore the Nexus store to save items you love!
        </p>
        
        <router-link 
          to="/" 
          class="mt-6 inline-block bg-gray-950 hover:bg-[#f04343] dark:bg-gray-800 dark:hover:bg-[#f04343] text-white text-xs font-black uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all duration-300 active:scale-95 shadow-md"
        >
          Discover Products
        </router-link>
      </div>

    </div>
  </div>
</template>

<style scoped>
.grid > div {
  animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) both;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>