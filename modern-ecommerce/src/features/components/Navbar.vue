<template>
  <nav class="w-full relative shadow-lg z-50 font-sans">
    <div class="bg-[#0b0b0b] text-gray-300 py-2 px-6 md:px-16 flex justify-between items-center text-[10px] md:text-xs">
      <span>THE LEADING ONLINE STORE IN SRI LANKA</span>
      <div class="flex items-center gap-6">
        <a href="#" class="hover:text-white transition-colors">Installment Plans</a>
        <a href="#" class="hover:text-white transition-colors">Help</a>
        <div class="flex items-center gap-1 cursor-pointer hover:text-white transition-colors border-l border-gray-700 pl-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span class="font-bold">Sign In / Register</span>
        </div>
      </div>
    </div>

    <div class="bg-black px-6 md:px-16 py-6 flex items-center justify-between gap-8">
      <router-link to="/" class="flex items-center shrink-0">
        <img src="@/assets/logo1.png" alt="Nexus Logo" class="h-24 md:h-28 w-auto object-contain" />
      </router-link>

      <div class="flex-1 max-w-2xl relative flex h-11 shadow-sm">
        <select class="bg-gray-100 px-4 rounded-l-md border-r border-gray-300 text-xs font-bold outline-none text-gray-700 hidden lg:block hover:bg-gray-200 transition-colors cursor-pointer">
          <option>All Categories</option>
          <option>Laptops</option>
          <option>Smartphones</option>
          <option>Accessories</option>
        </select>

        <input 
          type="text" 
          placeholder="Looking For Something Interesting..." 
          class="flex-1 px-5 outline-none text-sm text-gray-800 bg-white placeholder-gray-400 border-y border-gray-300 md:border-none"
        />

        <button class="bg-white px-5 rounded-r-md hover:bg-gray-100 transition-colors border-l border-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      <div class="flex items-center gap-8">
        <div class="hidden xl:flex items-center gap-3 border border-gray-800 rounded-full px-5 py-2">
          <div class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div class="flex flex-col leading-tight text-left">
            <span class="text-gray-400 text-[10px] font-bold">Need Help? Call Us:</span>
            <span class="text-red-600 font-black text-sm tracking-tight">+94 912 030 000</span>
          </div>
        </div>

        <div class="flex items-center gap-6 text-white">
          
          <router-link 
            v-if="cartStore.cartCount > 0" 
            to="/checkout" 
            class="hidden lg:block bg-[#f04343] hover:bg-red-700 text-white px-5 py-2 rounded-lg font-bold text-xs uppercase transition-all shadow-lg shadow-red-500/20"
          >
            Checkout
          </router-link>

          <router-link to="/favorites" class="flex flex-col items-center cursor-pointer hover:text-red-500 transition-colors relative group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span v-if="favoriteStore.favoriteCount > 0" class="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] rounded-full min-w-4.5 h-4.5 flex items-center justify-center font-bold px-1 border border-black shadow-sm">
              {{ favoriteStore.favoriteCount }}
            </span>
            <span class="text-[10px] font-bold mt-1 uppercase">Favorites</span>
          </router-link>
          
          <div @click="isCartOpen = true" class="flex flex-col items-center cursor-pointer hover:text-red-500 transition-colors relative group">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span v-if="cartStore.cartCount > 0" class="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] rounded-full min-w-4.5 h-4.5 flex items-center justify-center font-bold px-1 border border-black shadow-sm">
              {{ cartStore.cartCount }}
            </span>
            <span class="text-[10px] font-bold mt-1 uppercase">Cart</span>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-[#1a1a1a] px-6 md:px-16 flex items-center h-14">
      <button class="bg-[#f04343] text-white px-8 h-full flex items-center gap-4 font-black uppercase text-sm tracking-wider hover:bg-red-700 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        Browse Categories
      </button>

      <div class="flex items-center gap-10 ml-12 text-white font-bold text-xs uppercase tracking-widest">
        <router-link to="/" class="hover:text-red-500 transition-colors" active-class="text-red-500 border-b-2 border-red-500 pb-1">Home</router-link>
        <router-link to="/shop" class="hover:text-red-500 transition-colors" active-class="text-red-500">Shop</router-link>
        <router-link to="/about" class="hover:text-red-500 transition-colors" active-class="text-red-500">About Us</router-link>
        <a href="#" class="hover:text-red-500 transition-colors text-gray-500 cursor-not-allowed">Gallery</a>
        <router-link to="/contact" class="hover:text-red-500 transition-colors" active-class="text-red-500">Contact Us</router-link>
      </div>
    </div>

    <CartDrawer :isOpen="isCartOpen" @close="isCartOpen = false" />
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '../../stores/cartStore'
import { useFavoriteStore } from '../../stores/favoriteStore' 
import CartDrawer from './CartDrawer.vue'

// Stores initialization
const cartStore = useCartStore()
const favoriteStore = useFavoriteStore() 

// State for Sidebar Cart
const isCartOpen = ref(false)
</script>

<style scoped>
a, router-link, button {
  transition: all 0.3s ease;
}
</style>