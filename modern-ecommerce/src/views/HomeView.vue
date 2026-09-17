<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import { useProductStore } from '../stores/productStore'
import { useCartStore } from '../stores/cartStore'
import ProductCard from '../features/components/ProductCard.vue'
import CategoryCircle from '../features/components/CategoryCircle.vue'
import ProductModal from '../features/components/ProductModal.vue'
import allIcon from '@/assets/all-products.png'
import laptopIcon from '@/assets/laptops.png'
import phoneIcon from '@/assets/smartphones.png'
import tabletIcon from '@/assets/tablets.png'
import accessoryIcon from '@/assets/accessories.png'

const productStore = useProductStore()
const cartStore = useCartStore()

const searchQuery = ref('')
const isModalOpen = ref(false)
const selectedProduct = ref<any>(null)

// Filtering Logic
const filteredProducts = computed(() => {
  let list = productStore.products || []

  if (productStore.selectedCategory && productStore.selectedCategory !== 'All') {
    list = list.filter(product => {
      if (!product.category) return false;
      return product.category.trim().toLowerCase() === productStore.selectedCategory.trim().toLowerCase()
    })
  }

  if (searchQuery.value && searchQuery.value.trim() !== '') {
    list = list.filter(product => {
      if (!product.title) return false;
      return product.title.toLowerCase().includes(searchQuery.value.trim().toLowerCase())
    })
  }

  return list
})

const handleCategorySelect = (categoryName: string) => {
  if (productStore.selectedCategory === categoryName) {
    productStore.setCategory('All')
  } else {
    productStore.setCategory(categoryName)
  }
}

const openQuickView = (product: any) => {
  selectedProduct.value = product
  isModalOpen.value = true
}

onMounted(() => {
  productStore.fetchProducts()
})
</script>

<template>
  <div class="pb-20">
    
    <section class="container mx-auto px-4 mt-12 overflow-hidden">
      <div class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-4xl py-10 px-6 shadow-sm relative w-full flex items-center overflow-hidden transition-colors duration-300">
        
        <div class="flex items-center gap-16 marquee-track text-gray-800 dark:text-gray-100">
          
          <div class="flex items-center gap-5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-11 md:w-11 text-[#f04343]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <div class="flex flex-col text-left leading-tight">
              <span class="font-bold text-base md:text-lg text-gray-900 dark:text-white tracking-tight">Customer Support</span>
              <span class="text-xs md:text-sm text-gray-400 mt-1">Call or email us 24/7</span>
            </div>
          </div>

          <div class="h-12 w-[1.5px] bg-gray-200 dark:bg-gray-800 shrink-0"></div>

          <div class="flex items-center gap-5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-11 md:w-11 text-[#f04343]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011-1v-4a1 1 0 01.316-.707l3.368-3.368A1 1 0 0119 9v7a1 1 0 01-1 1h-5" />
            </svg>
            <div class="flex flex-col text-left leading-tight">
              <span class="font-bold text-base md:text-lg text-gray-900 dark:text-white tracking-tight">Free Delivery Islandwide</span>
              <span class="text-xs md:text-sm text-gray-400 mt-1">For all orders over Rs. 100,000.00</span>
            </div>
          </div>

          <div class="h-12 w-[1.5px] bg-gray-200 dark:bg-gray-800 shrink-0"></div>

          <div class="flex items-center gap-5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-11 md:w-11 text-[#f04343]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <div class="flex flex-col text-left leading-tight">
              <span class="font-bold text-base md:text-lg text-gray-900 dark:text-white tracking-tight">Secure Payment</span>
              <span class="text-xs md:text-sm text-gray-400 mt-1">We ensure secure payment</span>
            </div>
          </div>

          <div class="h-12 w-[1.5px] bg-gray-200 dark:bg-gray-800 shrink-0"></div>

          <div class="flex items-center gap-5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-11 md:w-11 text-[#f04343]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div class="flex flex-col text-left leading-tight">
              <span class="font-bold text-base md:text-lg text-gray-900 dark:text-white tracking-tight">Free Returns</span>
              <span class="text-xs md:text-sm text-gray-400 mt-1">Any back within 7 days</span>
            </div>
          </div>

          <div class="h-12 w-[1.5px] bg-gray-200 dark:bg-gray-800 shrink-0"></div>

          <div class="flex items-center gap-5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-11 md:w-11 text-[#f04343]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <div class="flex flex-col text-left leading-tight">
              <span class="font-bold text-base md:text-lg text-gray-900 dark:text-white tracking-tight">Customer Support</span>
              <span class="text-xs md:text-sm text-gray-400 mt-1">Call or email us 24/7</span>
            </div>
          </div>

          <div class="h-12 w-[1.5px] bg-gray-200 dark:bg-gray-800 shrink-0"></div>

          <div class="flex items-center gap-5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-11 md:w-11 text-[#f04343]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011-1v-4a1 1 0 01.316-.707l3.368-3.368A1 1 0 0119 9v7a1 1 0 01-1 1h-5" />
            </svg>
            <div class="flex flex-col text-left leading-tight">
              <span class="font-bold text-base md:text-lg text-gray-900 dark:text-white tracking-tight">Free Delivery Islandwide</span>
              <span class="text-xs md:text-sm text-gray-400 mt-1">For all orders over Rs. 100,000.00</span>
            </div>
          </div>

          <div class="h-12 w-[1.5px] bg-gray-200 dark:bg-gray-800 shrink-0"></div>

          <div class="flex items-center gap-5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-11 md:w-11 text-[#f04343]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <div class="flex flex-col text-left leading-tight">
              <span class="font-bold text-base md:text-lg text-gray-900 dark:text-white tracking-tight">Secure Payment</span>
              <span class="text-xs md:text-sm text-gray-400 mt-1">We ensure secure payment</span>
            </div>
          </div>

          <div class="h-12 w-[1.5px] bg-gray-200 dark:bg-gray-800 shrink-0"></div>

          <div class="flex items-center gap-5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-11 md:w-11 text-[#f04343]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div class="flex flex-col text-left leading-tight">
              <span class="font-bold text-base md:text-lg text-gray-900 dark:text-white tracking-tight">Free Returns</span>
              <span class="text-xs md:text-sm text-gray-400 mt-1">Any back within 7 days</span>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section id="categories-section" class="w-full bg-gray-50/50 dark:bg-gray-950/20 py-12 border-y border-gray-100 dark:border-gray-900 transition-colors">
      <div class="container mx-auto px-4">
        
        <div class="flex items-center justify-start md:justify-center gap-6 md:gap-10 overflow-x-auto pb-6 scrollbar-none snap-x">
          
          <CategoryCircle 
            name="All" 
            :image="allIcon"
            :isActive="productStore.selectedCategory === 'All'"
            @select="handleCategorySelect('All')"
            class="snap-center"
          />
          <CategoryCircle 
            name="laptops" 
            :image="laptopIcon"
            :isActive="productStore.selectedCategory === 'laptops'"
            @select="handleCategorySelect('laptops')"
            class="snap-center"
          />
          <CategoryCircle 
            name="smartphones" 
            :image="phoneIcon"
            :isActive="productStore.selectedCategory === 'smartphones'"
            @select="handleCategorySelect('smartphones')"
            class="snap-center"
          />
          <CategoryCircle 
            name="tablets" 
            :image="tabletIcon"
            :isActive="productStore.selectedCategory === 'tablets'"
            @select="handleCategorySelect('tablets')"
            class="snap-center"
          />
          <CategoryCircle 
            name="accessories" 
            :image="accessoryIcon"
            :isActive="productStore.selectedCategory === 'accessories'"
            @select="handleCategorySelect('accessories')"
            class="snap-center"
          />

        </div>

        <div class="flex justify-center items-center gap-2 mt-2">
          <span class="h-2 rounded-full transition-all duration-300" :class="productStore.selectedCategory === 'All' ? 'w-6 bg-[#f04343]' : 'w-2 bg-gray-300 dark:bg-gray-700'"></span>
          <span class="h-2 rounded-full transition-all duration-300" :class="productStore.selectedCategory === 'laptops' ? 'w-6 bg-[#f04343]' : 'w-2 bg-gray-200 dark:bg-gray-800'"></span>
          <span class="h-2 rounded-full transition-all duration-300" :class="productStore.selectedCategory === 'smartphones' ? 'w-6 bg-[#f04343]' : 'w-2 bg-gray-200 dark:bg-gray-800'"></span>
          <span class="h-2 rounded-full transition-all duration-300" :class="productStore.selectedCategory === 'tablets' ? 'w-6 bg-[#f04343]' : 'w-2 bg-gray-200 dark:bg-gray-800'"></span>
          <span class="h-2 rounded-full transition-all duration-300" :class="productStore.selectedCategory === 'accessories' ? 'w-6 bg-[#f04343]' : 'w-2 bg-gray-200 dark:bg-gray-800'"></span>
        </div>

      </div>
    </section>

    <section class="container mx-auto px-4 py-16">
      <div class="flex justify-between items-center mb-10">
        <h2 class="text-2xl font-bold text-[#00155a] dark:text-white uppercase tracking-tight transition-colors duration-300">
          {{ productStore.selectedCategory === 'All' ? 'New Arrivals' : productStore.selectedCategory }}
        </h2>
        
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Filter by name..." 
          class="hidden md:block border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-2 rounded-lg text-sm outline-none focus:border-blue-500 transition-all w-64"
        />
      </div>

      <div class="text-center py-20" v-if="productStore.loading">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00155a] dark:border-white mx-auto"></div>
        <p class="mt-4 text-gray-500 dark:text-gray-400 font-medium">Loading Nexus Products...</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10" v-else-if="filteredProducts.length > 0">
        <ProductCard 
          v-for="product in filteredProducts" 
          :key="product.id" 
          :product="product"
          @addToCart="cartStore.addToCart" 
          @openPreview="openQuickView"
        />
      </div>
      
      <div class="text-center py-20" v-if="!productStore.loading && filteredProducts.length === 0">
        <p class="text-gray-400 text-lg italic">No devices found in this category.</p>
        <button @click="handleCategorySelect('All'); searchQuery = ''" class="mt-4 text-blue-500 dark:text-blue-400 font-bold hover:underline">Show All Products</button>
      </div>
    </section>

    <ProductModal 
      :product="selectedProduct" 
      :is-open="isModalOpen" 
      @close="isModalOpen = false" 
    />
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 25s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}
</style>