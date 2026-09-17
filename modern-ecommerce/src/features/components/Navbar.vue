<template>
  <nav class="w-full relative shadow-lg z-50 font-sans border-b bg-black border-gray-900">
    
    <div class="bg-[#0b0b0b] text-gray-300 py-2 px-6 md:px-16 flex justify-between items-center text-[10px] md:text-xs border-b border-gray-900/40">
      <span>Shop Anytime, Anywhere in Sri Lanka</span>
      <div class="flex items-center gap-6">
        <router-link to="/installment-plans" class="hover:text-[#f04343] transition-colors">Installment Plans</router-link>
        <router-link to="/help" class="hover:text-[#f04343] transition-colors">Help</router-link>
        
        <div class="flex items-center border-l border-gray-700 pl-4">
          <router-link 
            to="/auth" 
            class="flex items-center gap-2 hover:text-[#f04343] transition-colors text-white text-xs font-bold"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="2.2" 
              stroke="currentColor" 
              class="w-4 h-4 text-gray-400 dark:text-gray-500"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <span>Sign In / Register</span>
          </router-link>
        </div>
      </div>
    </div>

    <div class="bg-black dark:bg-black px-6 md:px-16 py-6 flex items-center justify-between gap-8">
      
      <router-link to="/" class="flex items-center shrink-0">
        <img src="@/assets/logo1.png" alt="Nexus Logo" class="h-24 md:h-28 w-auto object-contain" />
      </router-link>

      <div class="flex-1 max-w-2xl relative flex h-11 shadow-sm rounded-xl overflow-hidden border border-gray-800">
        <select class="bg-gray-100 dark:bg-gray-950 px-4 border-r border-gray-300 dark:border-gray-800 text-xs font-bold outline-none text-gray-700 dark:text-gray-300 hidden lg:block hover:bg-gray-200 dark:hover:bg-gray-900 transition-colors cursor-pointer">
          <option>All Categories</option>
          <option>Laptops</option>
          <option>Smartphones</option>
          <option>Accessories</option>
        </select>

        <input 
          v-model="searchQuery"
          @keyup.enter="handleSearch"
          type="text" 
          placeholder="Looking For Something Interesting..." 
          class="flex-1 px-5 outline-none text-sm text-gray-800 bg-white placeholder-gray-400"
        />

        <button 
          @click="handleSearch"
          class="bg-white px-5 hover:bg-gray-100 transition-colors border-l border-gray-200 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      <div class="flex items-center gap-6 md:gap-8 shrink-0">
        
        <div class="hidden xl:flex items-center gap-4 border border-gray-800 rounded-full px-6 py-3 bg-gray-950/40">
          <div class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div class="flex flex-col leading-tight text-left">
            <span class="text-gray-400 text-[11px] font-bold">Need Help? Call Us:</span>
            <a href="tel:+9491xxxxxxx" class="text-[#f04343] font-black text-sm md:text-base tracking-wide hover:underline">+94 76x xxx xxx</a>
          </div>
        </div>

        <div class="hidden xl:block h-8 w-px bg-gray-800"></div>

        <router-link to="/favorites" class="flex flex-col items-center cursor-pointer text-gray-400 hover:text-white transition-colors relative group gap-1 py-1">
          <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span v-if="favoriteStore.favoriteCount > 0" class="absolute -top-1.5 -right-1.5 bg-[#f04343] text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-black border-2 border-black shadow-sm">
              {{ favoriteStore.favoriteCount }}
            </span>
          </div>
          <span class="text-[10px] font-black tracking-widest uppercase transition-colors mt-0.5">Favorites</span>
        </router-link>
        
        <div @click="isCartOpen = true" class="flex flex-col items-center cursor-pointer text-gray-400 hover:text-white transition-colors relative group gap-1 py-1">
          <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span v-if="cartStore.cartCount > 0" class="absolute -top-1.5 -right-1.5 bg-[#f04343] text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-black border-2 border-black shadow-sm">
              {{ cartStore.cartCount }}
            </span>
          </div>
          <span class="text-[10px] font-black tracking-widest uppercase transition-colors mt-0.5">Cart</span>
        </div>

        <router-link 
          to="/checkout" 
          class="hidden sm:block bg-[#f04343] hover:bg-red-700 text-white font-black uppercase tracking-widest px-7 py-3.5 rounded-2xl text-xs transition-all shadow-md shadow-red-500/10 active:scale-95"
        >
          Checkout
        </router-link>

        <button 
          @click="themeStore.toggleTheme" 
          class="p-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 transition-all active:scale-90 text-gray-300 dark:text-yellow-400 border border-gray-800 flex items-center justify-center shadow-sm"
          title="Toggle Theme"
        >
          <svg v-if="!themeStore.isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M6.343 6.343l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
        </button>

      </div>
    </div>

    <div class="bg-black dark:bg-black border-t border-gray-900/60 px-6 md:px-16 flex items-center justify-between h-14">
      
      <div class="flex items-center h-full">
        <button @click="scrollToCategories" class="bg-[#f04343] text-white px-8 h-full flex items-center gap-4 font-black uppercase text-sm tracking-wider hover:bg-red-700 transition-colors active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Browse Categories
        </button>

        <div class="flex items-center gap-10 ml-12 text-white font-bold text-xs uppercase tracking-widest">
          <router-link to="/" class="relative py-1 group" active-class="text-[#f04343]">
            Home
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#f04343] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
          </router-link>

          <router-link to="/shop" class="relative py-1 group" active-class="text-[#f04343]">
            Shop
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#f04343] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
          </router-link>

          <router-link to="/about" class="relative py-1 group" active-class="text-[#f04343]">
            About Us
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#f04343] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
          </router-link>

          <router-link to="/gallery" class="relative py-1 group" active-class="text-[#f04343]">
            Gallery
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#f04343] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
          </router-link>

          <router-link to="/contact" class="relative py-1 group" active-class="text-[#f04343]">
            Contact Us
            <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#f04343] transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
          </router-link>
        </div>
      </div>

      <div class="hidden lg:flex items-center gap-8 text-white font-bold text-xs uppercase tracking-widest h-full">
        
        <div class="relative group/branch h-full flex items-center cursor-pointer">
          <div class="flex items-center gap-2 text-white hover:text-[#f04343] transition-colors py-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#f04343]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Our Branches</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-gray-400 group-hover/branch:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div class="absolute right-0 top-full w-48 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl py-3 flex flex-col opacity-0 pointer-events-none group-hover/branch:opacity-100 group-hover/branch:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover/branch:translate-y-0">
            <router-link to="/branches/colombo" class="px-5 py-2.5 text-gray-300 hover:bg-[#f04343] hover:text-white transition-colors font-bold text-[11px]">Colombo</router-link>
            <router-link to="/branches/kandy" class="px-5 py-2.5 text-gray-300 hover:bg-[#f04343] hover:text-white transition-colors font-bold text-[11px]">Kandy</router-link>
            <router-link to="/branches/galle" class="px-5 py-2.5 text-gray-300 hover:bg-[#f04343] hover:text-white transition-colors font-bold text-[11px]">Galle</router-link>
            <router-link to="/branches/rathnapura" class="px-5 py-2.5 text-gray-300 hover:bg-[#f04343] hover:text-white transition-colors font-bold text-[11px]">Rathnapura</router-link>
          </div>
        </div>

        <router-link to="/deals" class="flex items-center gap-2 hover:text-[#f04343] transition-colors py-1 group relative">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#f04343] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M6 20a1 1 0 02-1-1v-4.586a1 1 0 01.293-.707l7-7a1 1 0 011.414 0l4.586 4.586a1 1 0 010 1.414l-7 7a1 1 0 01-.707.293H6z" />
          </svg>
          <span>Weekly Deals</span>
        </router-link>

      </div>
    </div>

    <CartDrawer :isOpen="isCartOpen" @close="isCartOpen = false" />
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router' // 👈 සැබෑ Search redirect එකට router ඉම්පෝට් කළා
import { useCartStore } from '../../stores/cartStore'
import { useFavoriteStore } from '../../stores/favoriteStore' 
import CartDrawer from './CartDrawer.vue'
import { useThemeStore } from '../../stores/themeStore'

const router = useRouter() // 👈 Router instance එක සකස් කළා
const themeStore = useThemeStore()
const cartStore = useCartStore()
const favoriteStore = useFavoriteStore() 

const isCartOpen = ref(false)

// 🔍 NEW REACTIVE QUERY STATE FOR INPUT VALUE MATCHING
const searchQuery = ref('')

// 🧠 NEW ROBUST SEARCH ENGINE STRATEGY FUNCTION
const handleSearch = () => {
  if (!searchQuery.value.trim()) return // හිස්ව තිබුනොත් ක්‍රියාත්මක නොවේ
  
  // සර්ච් කරපු වචනය query parameter එකක් විදිහට (උදා: /shop?search=app) Shop පිටුවට රැගෙන යයි
  router.push({ path: '/shop', query: { search: searchQuery.value.trim() } })
}

const scrollToCategories = () => {
  const element = document.getElementById('categories-section')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  } else {
    window.location.href = '/#categories-section'
  }
}
</script>

<style scoped>
a, router-link, button {
  transition: all 0.3s ease;
}
</style>