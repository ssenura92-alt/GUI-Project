<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import { useProductStore } from '../stores/productStore'
import { useCartStore } from '../stores/cartStore'
import ProductCard from '../features/components/ProductCard.vue'
import CategoryCircle from '../features/components/CategoryCircle.vue'
import FeatureCard from '../features/components/FeatureCard.vue'
import ProductModal from '../features/components/ProductModal.vue'

const productStore = useProductStore()
const cartStore = useCartStore()

const searchQuery = ref('')
const isModalOpen = ref(false)
const selectedProduct = ref<any>(null)

// Filtering Logic (Category සහ Search දෙකම නිවැරදිව සිදුවේ)
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
    
    <section class="container mx-auto px-4 mt-12">
      <div class="bg-white border border-gray-100 rounded-3xl py-10 px-4 shadow-sm overflow-hidden relative w-full flex items-center">
        
        <div class="flex items-center gap-16 min-w-full justify-between marquee-track">
          
          <div class="flex items-center gap-5 shrink-0 px-4">
            <div class="text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-11 md:w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div class="flex flex-col text-left leading-tight">
              <span class="font-bold text-base md:text-lg text-gray-900 tracking-tight">Customer Support</span>
              <span class="text-xs md:text-sm text-gray-400 mt-1">Call or email us 24/7</span>
            </div>
          </div>

          <div class="h-12 w-[1.5px] bg-gray-200 shrink-0"></div>

          <div class="flex items-center gap-5 shrink-0 px-4">
            <div class="text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-11 md:w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011-1v-4a1 1 0 01.316-.707l3.368-3.368A1 1 0 0119 9v7a1 1 0 01-1 1h-5" />
              </svg>
            </div>
            <div class="flex flex-col text-left leading-tight">
              <span class="font-bold text-base md:text-lg text-gray-900 tracking-tight">Free Delivery Islandwide</span>
              <span class="text-xs md:text-sm text-gray-400 mt-1">For all orders over Rs. 100,000.00</span>
            </div>
          </div>

          <div class="h-12 w-[1.5px] bg-gray-200 shrink-0"></div>

          <div class="flex items-center gap-5 shrink-0 px-4">
            <div class="text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-11 md:w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div class="flex flex-col text-left leading-tight">
              <span class="font-bold text-base md:text-lg text-gray-900 tracking-tight">Secure Payment</span>
              <span class="text-xs md:text-sm text-gray-400 mt-1">We ensure secure payment</span>
            </div>
          </div>

          <div class="h-12 w-[1.5px] bg-gray-200 shrink-0"></div>

          <div class="flex items-center gap-5 shrink-0 px-4">
            <div class="text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-11 md:w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="flex flex-col text-left leading-tight">
              <span class="font-bold text-base md:text-lg text-gray-900 tracking-tight">Free Returns</span>
              <span class="text-xs md:text-sm text-gray-400 mt-1">Any back within 7 days</span>
            </div>
          </div>

          <div class="h-12 w-[1.5px] bg-gray-200 shrink-0"></div>

          <div class="flex items-center gap-5 shrink-0 px-4">
            <div class="text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-11 md:w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div class="flex flex-col text-left leading-tight">
              <span class="font-bold text-base md:text-lg text-gray-900 tracking-tight">Customer Support</span>
              <span class="text-xs md:text-sm text-gray-400 mt-1">Call or email us 24/7</span>
            </div>
          </div>

          <div class="h-12 w-[1.5px] bg-gray-200 shrink-0"></div>

          <div class="flex items-center gap-5 shrink-0 px-4">
            <div class="text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-11 md:w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 011-1v-4a1 1 0 01.316-.707l3.368-3.368A1 1 0 0119 9v7a1 1 0 01-1 1h-5" />
              </svg>
            </div>
            <div class="flex flex-col text-left leading-tight">
              <span class="font-bold text-base md:text-lg text-gray-900 tracking-tight">Free Delivery Islandwide</span>
              <span class="text-xs md:text-sm text-gray-400 mt-1">For all orders over Rs. 100,000.00</span>
            </div>
          </div>

          <div class="h-12 w-[1.5px] bg-gray-200 shrink-0"></div>

          <div class="flex items-center gap-5 shrink-0 px-4">
            <div class="text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-11 md:w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div class="flex flex-col text-left leading-tight">
              <span class="font-bold text-base md:text-lg text-gray-900 tracking-tight">Secure Payment</span>
              <span class="text-xs md:text-sm text-gray-400 mt-1">We ensure secure payment</span>
            </div>
          </div>

          <div class="h-12 w-[1.5px] bg-gray-200 shrink-0"></div>

          <div class="flex items-center gap-5 shrink-0 px-4">
            <div class="text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 md:h-11 md:w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="flex flex-col text-left leading-tight">
              <span class="font-bold text-base md:text-lg text-gray-900 tracking-tight">Free Returns</span>
              <span class="text-xs md:text-sm text-gray-400 mt-1">Any back within 7 days</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="container mx-auto px-4 py-12">
      <div class="flex flex-wrap justify-center gap-10">
        <CategoryCircle 
          name="All" 
          image="https://cdn-icons-png.flaticon.com/512/3067/3067451.png"
          :isActive="productStore.selectedCategory === 'All'"
          @select="handleCategorySelect('All')"
        />
        <CategoryCircle 
          name="Laptops" 
          image="https://cdn-icons-png.flaticon.com/512/428/428001.png"
          :isActive="productStore.selectedCategory === 'laptops'"
          @select="handleCategorySelect('laptops')"
        />
        <CategoryCircle 
          name="Smartphones" 
          image="https://cdn-icons-png.flaticon.com/512/3437/3437334.png"
          :isActive="productStore.selectedCategory === 'smartphones'"
          @select="handleCategorySelect('smartphones')"
        />
        <CategoryCircle 
          name="Tablets" 
          image="https://cdn-icons-png.flaticon.com/512/3616/3616856.png"
          :isActive="productStore.selectedCategory === 'tablets'"
          @select="handleCategorySelect('tablets')"
        />
        <CategoryCircle 
          name="Accessories" 
          image="https://cdn-icons-png.flaticon.com/512/2888/2888713.png"
          :isActive="productStore.selectedCategory === 'mobile-accessories'"
          @select="handleCategorySelect('mobile-accessories')"
        />
      </div>
    </section>

    <section class="container mx-auto px-4 py-16">
      <div class="flex justify-between items-center mb-10">
        <h2 class="text-2xl font-bold text-[#00155a] uppercase tracking-tight">
          {{ productStore.selectedCategory === 'All' ? 'New Arrivals' : productStore.selectedCategory }}
        </h2>
        
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Filter by name..." 
          class="hidden md:block border border-gray-200 px-4 py-2 rounded-lg text-sm outline-none focus:border-blue-500 transition-all w-64"
        />
      </div>

      <div v-if="productStore.loading" class="text-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00155a] mx-auto"></div>
        <p class="mt-4 text-gray-500 font-medium">Loading Nexus Products...</p>
      </div>

      <div v-else-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        <ProductCard 
          v-for="product in filteredProducts" 
          :key="product.id" 
          :product="product"
          @addToCart="cartStore.addToCart" 
          @openPreview="openQuickView"
        />
      </div>
      
      <div v-if="!productStore.loading && filteredProducts.length === 0" class="text-center py-20">
        <p class="text-gray-400 text-lg italic">No devices found in this category.</p>
        <button @click="handleCategorySelect('All'); searchQuery = ''" class="mt-4 text-blue-500 font-bold hover:underline">Show All Products</button>
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
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 25s linear infinite;
}

/* Mouse hover එකකදී Carousel එක නතර වීමට */
.marquee-track:hover {
  animation-play-state: paused;
}
</style>