<script setup lang="ts">
import { useCartStore } from '../../stores/cartStore'

const cartStore = useCartStore()

defineProps<{ isOpen: boolean }>()
defineEmits(['close'])
</script>

<template>
  <div v-if="isOpen" @click="$emit('close')" class="fixed inset-0 bg-black/60 z-100 transition-opacity backdrop-blur-[1px]"></div>

  <div :class="isOpen ? 'translate-x-0' : 'translate-x-full'" 
       class="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-950 z-101 shadow-2xl transition-transform duration-500 ease-in-out border-l border-gray-100 dark:border-gray-900">
    
    <div class="p-6 h-full flex flex-col">
      
      <div class="flex justify-between items-center border-b border-gray-100 dark:border-gray-900 pb-4 mb-6">
        <h2 class="text-xl font-black text-[#00155a] dark:text-white uppercase tracking-tight">
          Your Cart ({{ cartStore.cartCount }})
        </h2>
        <button @click="$emit('close')" class="text-gray-400 hover:text-[#f04343] dark:text-gray-500 dark:hover:text-white transition-colors text-2xl font-bold">&times;</button>
      </div>

      <div class="flex-1 overflow-y-auto space-y-4 pr-1">
        
        <div v-if="cartStore.items.length === 0" class="text-center py-20 text-gray-400 dark:text-gray-600 flex flex-col items-center justify-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-gray-300 dark:text-gray-700">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          <span class="font-bold text-sm uppercase tracking-wider">Your cart is empty.</span>
        </div>

        <div v-for="item in cartStore.items" :key="item.id" class="flex flex-col gap-2 border-b border-gray-100 dark:border-gray-900 pb-5 transition-colors">
          <div class="flex gap-4">
            
            <img :src="item.thumbnail" :alt="item.title" class="w-20 h-20 object-contain rounded-2xl bg-gray-50 dark:bg-gray-900 p-2 border border-gray-100 dark:border-gray-800 shrink-0" />
            
            <div class="flex-1 text-left">
              <div class="flex justify-between items-start gap-2">
                <h3 class="text-xs font-black text-gray-800 dark:text-gray-200 line-clamp-1 uppercase tracking-tight">{{ item.title }}</h3>
                <button @click="cartStore.removeFromCart(item.id)" class="text-gray-400 hover:text-[#f04343] dark:text-gray-600 dark:hover:text-white transition-colors shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
              
              <p class="text-[#f04343] font-black mt-1 text-sm">Rs. {{ item.price.toLocaleString() }}</p>

              <div class="flex items-center justify-between mt-3">
                
                <div class="flex items-center border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900">
                  <button 
                    @click="cartStore.updateQuantity(item.id, -1)"
                    class="px-3 py-1 bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-white font-black text-sm"
                  >
                    -
                  </button>
                  <span class="px-3 font-black text-xs min-w-8 text-center text-gray-900 dark:text-white">{{ item.quantity }}</span>
                  <button 
                    @click="cartStore.updateQuantity(item.id, 1)"
                    class="px-3 py-1 bg-white hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-white font-black text-sm"
                  >
                    +
                  </button>
                </div>
                
                <div class="text-right">
                  <p class="text-[9px] text-gray-400 dark:text-gray-500 font-black uppercase tracking-widest">Subtotal</p>
                  <p class="text-xs font-black text-gray-900 dark:text-white">Rs. {{ (item.price * item.quantity).toLocaleString() }}</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div v-if="cartStore.items.length > 0" class="border-t border-gray-100 dark:border-gray-900 pt-6 mt-4">
        <div class="flex justify-between items-end mb-6 text-left">
          <div>
            <p class="text-[10px] text-gray-400 dark:text-gray-500 font-black uppercase tracking-widest">Estimated Total</p>
            <p class="text-[9px] text-gray-400 dark:text-gray-600 italic font-medium mt-0.5">Taxes and shipping calculated at checkout</p>
          </div>
          <span class="text-xl font-black text-[#f04343] tracking-tight">Rs. {{ cartStore.cartTotal.toLocaleString() }}</span>
        </div>
        
        <router-link 
          to="/checkout"
          @click="$emit('close')"
          class="group relative w-full bg-gray-950 dark:bg-white dark:text-black text-white py-4 rounded-xl font-black transition-all overflow-hidden uppercase tracking-widest text-xs flex justify-center items-center shadow-lg active:scale-95"
        >
          <span class="relative z-10 group-hover:scale-105 transition-transform duration-300">Proceed To Checkout</span>
          <div class="absolute inset-0 bg-[#f04343] translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out opacity-10 dark:opacity-20"></div>
        </router-link>
        
        <button @click="$emit('close')" class="w-full mt-4 py-2 text-[10px] font-black text-gray-400 hover:text-[#f04343] dark:text-gray-500 dark:hover:text-white transition-colors uppercase tracking-widest text-center">
          Continue Shopping
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Strict frame performance optimization adjustments */
</style>