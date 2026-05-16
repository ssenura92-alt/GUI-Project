<script setup lang="ts">
import { useCartStore } from '../../stores/cartStore'

const cartStore = useCartStore()

defineProps<{ isOpen: boolean }>()
defineEmits(['close'])
</script>

<template>
  <div v-if="isOpen" @click="$emit('close')" class="fixed inset-0 bg-black/50 z-100 transition-opacity"></div>

  <div :class="isOpen ? 'translate-x-0' : 'translate-x-full'" 
       class="fixed right-0 top-0 h-full w-full max-w-md bg-white z-101 shadow-2xl transition-transform duration-300 ease-in-out">
    
    <div class="p-6 h-full flex flex-col">
      <div class="flex justify-between items-center border-b pb-4 mb-6">
        <h2 class="text-xl font-bold text-[#00155a]">Your Cart ({{ cartStore.cartCount }})</h2>
        <button @click="$emit('close')" class="text-gray-500 hover:text-red-500 text-2xl">&times;</button>
      </div>

      <div class="flex-1 overflow-y-auto space-y-4">
        <div v-if="cartStore.items.length === 0" class="text-center py-10 text-gray-400">
          Your cart is empty.
        </div>

        <div v-for="item in cartStore.items" :key="item.id" class="flex flex-col gap-2 border-b pb-4">
          <div class="flex gap-4">
            <img :src="item.thumbnail" :alt="item.title" class="w-20 h-20 object-cover rounded-lg bg-gray-50" />
            <div class="flex-1">
              <div class="flex justify-between items-start">
                <h3 class="text-sm font-semibold text-[#00155a] line-clamp-1 uppercase tracking-tight">{{ item.title }}</h3>
                <button @click="cartStore.removeFromCart(item.id)" class="text-gray-400 hover:text-red-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
              
              <p class="text-pink-600 font-bold mt-1 text-sm">${{ item.price.toFixed(2) }}</p>

              <div class="flex items-center justify-between mt-3">
                <div class="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                  <button 
                    @click="cartStore.updateQuantity(item.id, -1)"
                    class="px-3 py-1 hover:bg-gray-200 transition-colors text-[#00155a] font-bold"
                  >
                    -
                  </button>
                  <span class="px-2 font-bold text-xs min-w-7.5 text-center text-[#00155a]">{{ item.quantity }}</span>
                  <button 
                    @click="cartStore.updateQuantity(item.id, 1)"
                    class="px-3 py-1 hover:bg-gray-200 transition-colors text-[#00155a] font-bold"
                  >
                    +
                  </button>
                </div>
                
                <div class="text-right">
                  <p class="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Subtotal</p>
                  <p class="text-sm font-bold text-[#00155a]">${{ (item.price * item.quantity).toFixed(2) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="cartStore.items.length > 0" class="border-t pt-6 mt-4">
        <div class="flex justify-between items-end mb-6">
          <div>
            <p class="text-sm text-gray-400 font-bold uppercase tracking-widest">Estimated Total</p>
            <p class="text-[10px] text-gray-400 italic font-medium">Taxes and shipping calculated at checkout</p>
          </div>
          <span class="text-2xl font-black text-[#00155a] tracking-tight">${{ cartStore.cartTotal.toFixed(2) }}</span>
        </div>
        
        <router-link 
          to="/checkout"
          @click="$emit('close')"
          class="group relative w-full bg-[#00155a] text-white py-4 rounded-xl font-bold hover:bg-blue-900 transition-all overflow-hidden uppercase tracking-[0.2em] text-xs flex justify-center items-center"
        >
          <span class="relative z-10">Proceed To Checkout</span>
          <div class="absolute inset-0 bg-pink-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out opacity-10"></div>
        </router-link>
        
        <button @click="$emit('close')" class="w-full mt-3 py-2 text-xs font-bold text-gray-400 hover:text-[#00155a] transition-colors uppercase tracking-widest text-center">
          Continue Shopping
        </button>
      </div>
    </div>
  </div>
</template>