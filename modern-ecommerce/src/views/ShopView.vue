<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useProductStore } from '../stores/productStore'
import { useCartStore } from '../stores/cartStore'
import ProductCard from '../features/components/ProductCard.vue'

const productStore = useProductStore()
const cartStore = useCartStore()

// 🔍 Local UI States (Filters සඳහා)
const searchQuery = ref('')
const maxPrice = ref(600000) // රුපියල් 600,000 දක්වා උපරිම සීමාව
const sortBy = ref('default') // default, price-low, price-high, rating

// 🌐 පිටුව ලෝඩ් වෙද්දීම API එකෙන් බඩු ටික නැවත fetch කරගැනීම
onMounted(() => {
  productStore.fetchProducts()
})

// 🧠 FILTER & SORT LOGIC (සියලුම ක්‍රියාවලීන් එකවර සිදුවන Computed Property එකක්)
const filteredProducts = computed(() => {
  let items = [...productStore.products]

  // 1. Category Filter (Store එකේ select කරන category එක අනුව)
  if (productStore.selectedCategory !== 'All') {
    items = items.filter(p => p.category === productStore.selectedCategory)
  }

  // 2. Live Search Bar Filter
  if (searchQuery.value.trim() !== '') {
    const query = searchQuery.value.toLowerCase()
    items = items.filter(p => p.title.toLowerCase().includes(query) || p.description?.toLowerCase().includes(query))
  }

  // 3. Price Slider Filter
  items = items.filter(p => p.price <= maxPrice.value)

  // 4. Sort By Dropdown Sorting
  if (sortBy.value === 'price-low') {
    items.sort((a, b) => a.price - b.price)
  } else if (sortBy.value === 'price-high') {
    items.sort((a, b) => b.price - a.price)
  } else if (sortBy.value === 'rating') {
    items.sort((a, b) => (b.rating || 0) - (a.rating || 0))
  }

  return items
})

// 🗑️ Filters සියල්ල එකවර ඉවත් කරන ශ්‍රිතය
const clearAllFilters = () => {
  searchQuery.value = ''
  maxPrice.value = 600000
  sortBy.value = 'default'
  productStore.setCategory('All')
}
</script>

<template>
  <div class="min-h-screen bg-gray-50/50 dark:bg-gray-950 text-gray-900 dark:text-white pt-10 pb-20 transition-colors duration-300">
    <div class="container mx-auto px-4 md:px-16 max-w-7xl">
      
      <div class="mb-10 text-left">
        <h1 class="text-3xl font-black text-[#00155a] dark:text-white uppercase tracking-tight">
          Nexus Premium Shop
        </h1>
        <p class="text-xs text-gray-400 dark:text-gray-500 mt-1 font-bold">
          Browse through our ultimate collection of world-class tech architecture.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 items-start">
        
        <aside class="w-full lg:w-64 bg-white dark:bg-gray-900 rounded-4xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 shrink-0 sticky top-6 transition-colors">
          
          <div class="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-4 mb-6">
            <h2 class="font-black uppercase tracking-wider text-sm text-gray-900 dark:text-white">Filters Layout</h2>
            <button @click="clearAllFilters" class="text-[10px] font-black text-red-500 uppercase hover:underline">Clear All</button>
          </div>

          <div class="mb-8">
            <h3 class="text-xs font-black uppercase text-gray-400 dark:text-gray-500 tracking-widest mb-4">Categories</h3>
            <div class="flex flex-col gap-2">
              <button 
                v-for="cat in ['All', 'laptops', 'smartphones', 'tablets', 'accessories']" 
                :key="cat"
                @click="productStore.setCategory(cat)"
                class="w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                :class="productStore.selectedCategory === cat 
                  ? 'bg-[#f04343] text-white shadow-md shadow-red-500/10' 
                  : 'bg-gray-50 dark:bg-gray-950 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'"
              >
                {{ cat === 'laptops' ? 'Laptops' : cat === 'smartphones' ? 'Smartphones' : cat === 'tablets' ? 'Tablets' : cat === 'accessories' ? 'Accessories' : 'All Products' }}
              </button>
            </div>
          </div>

          <div class="mb-6">
            <h3 class="text-xs font-black uppercase text-gray-400 dark:text-gray-500 tracking-widest mb-3">Max Budget</h3>
            <input 
              type="range" 
              min="10000" 
              max="600000" 
              step="5000"
              v-model.number="maxPrice"
              class="w-full accent-[#f04343] h-1.5 bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer"
            />
            <div class="flex justify-between items-center mt-3 text-[11px] font-bold text-gray-600 dark:text-gray-400">
              <span>Under:</span>
              <span class="text-sm font-black text-[#00155a] dark:text-white">Rs. {{ maxPrice.toLocaleString() }}</span>
            </div>
          </div>

        </aside>

        <div class="flex-1 w-full">
          
          <div class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors">
            
            <div class="text-xs md:text-sm font-bold text-gray-500 dark:text-gray-400 text-center sm:text-left">
              Showing <span class="text-gray-900 dark:text-white font-black">{{ filteredProducts.length }}</span> Premium Architecture Devices
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <div class="relative w-full sm:w-64 h-10">
                <input 
                  type="text" 
                  placeholder="Search in shop..." 
                  v-model="searchQuery"
                  class="w-full h-full pl-4 pr-10 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 outline-none text-xs font-bold text-gray-800 dark:text-gray-200 focus:border-[#f04343] dark:focus:border-[#f04343] transition-colors"
                />
                <svg xmlns="http://www.w3.org/2000/svg" class="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <select 
                v-model="sortBy"
                class="w-full sm:w-44 h-10 px-4 rounded-xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 outline-none text-xs font-bold text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <option value="default">Default Sorting</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

          </div>

          <div v-if="productStore.loading" class="flex flex-col items-center justify-center py-32 gap-4">
            <div class="w-12 h-12 border-4 border-gray-200 border-t-[#f04343] rounded-full animate-spin"></div>
            <p class="text-xs font-black uppercase tracking-widest text-gray-400">Loading Devices...</p>
          </div>

          <div v-else-if="filteredProducts.length === 0" class="bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 p-16 text-center shadow-sm transition-colors">
            <p class="text-gray-400 text-base italic mb-4">No matching devices found within your filters.</p>
            <button @click="clearAllFilters" class="bg-[#f04343] hover:bg-red-700 text-white font-bold uppercase tracking-widest py-3 px-6 rounded-full text-xs transition-all active:scale-95 shadow-md">
              Reset All Filters
            </button>
          </div>

          <div v-else class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            <ProductCard 
              v-for="product in filteredProducts" 
              :key="product.id" 
              :product="product"
              @addToCart="cartStore.addToCart"
            />
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
/* Range Slider Override Styling for Smooth Performance */
input[type="range"]::-webkit-slider-thumb {
  transition: transform 0.1s ease;
}
input[type="range"]::-webkit-slider-thumb:active {
  transform: scale(1.3);
}
</style>