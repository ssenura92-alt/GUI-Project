<script setup lang="ts">
import { useCartStore } from '../stores/cartStore'
import { computed, ref } from 'vue'

const cartStore = useCartStore()

const formData = ref({
  fullName: '',
  email: '',
  address: '',
  city: '',
  phone: ''
})

const isProcessing = ref(false)

// Calculation Logic
const subtotal = computed(() => cartStore.cartTotal)
const deliveryFee = ref(350.0) // Shipping cost in LKR or your currency
const total = computed(() => subtotal.value + deliveryFee.value)

const handlePlaceOrder = () => {
  if (cartStore.items.length === 0) {
    alert("Your cart is empty!")
    return
  }
  
  isProcessing.value = true
  
  setTimeout(() => {
    alert(`Order Success! Thank you ${formData.value.fullName}.`)
    cartStore.clearCart()
    isProcessing.value = false
  }, 2000)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 pb-20 pt-10">
    <div class="container mx-auto px-4">
      <div class="flex items-center gap-4 mb-8">
        <router-link to="/" class="bg-white p-2 rounded-full shadow-sm hover:text-pink-500 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </router-link>
        <h1 class="text-3xl font-black text-[#00155a] uppercase tracking-tight">Checkout</h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 class="text-xl font-bold mb-6 text-gray-800 border-b pb-4">Billing Details</h2>
          <form @submit.prevent="handlePlaceOrder" class="space-y-5">
            <div>
              <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
              <input v-model="formData.fullName" type="text" required class="w-full border-0 rounded-xl p-4 bg-gray-50 outline-none focus:ring-2 focus:ring-pink-500/20 transition-all" placeholder="Enter your full name">
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email</label>
                <input v-model="formData.email" type="email" required class="w-full border-0 rounded-xl p-4 bg-gray-50 outline-none focus:ring-2 focus:ring-pink-500/20 transition-all" placeholder="email@example.com">
              </div>
              <div>
                <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Phone</label>
                <input v-model="formData.phone" type="tel" required class="w-full border-0 rounded-xl p-4 bg-gray-50 outline-none focus:ring-2 focus:ring-pink-500/20 transition-all" placeholder="07XXXXXXXX">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Address</label>
              <textarea v-model="formData.address" required rows="3" class="w-full border-0 rounded-xl p-4 bg-gray-50 outline-none focus:ring-2 focus:ring-pink-500/20 transition-all" placeholder="House No, Street, City"></textarea>
            </div>

            <div class="pt-4">
              <button 
                type="submit" 
                :disabled="isProcessing" 
                class="w-full bg-[#00155a] text-white font-bold py-5 rounded-2xl hover:bg-blue-900 transition-all flex justify-center items-center gap-3 shadow-lg"
              >
                <span v-if="isProcessing" class="animate-spin h-5 w-5 border-3 border-white border-t-transparent rounded-full"></span>
                {{ isProcessing ? 'PROCESSING...' : 'PLACE ORDER NOW' }}
              </button>
            </div>
          </form>
        </div>

        <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-fit">
          <h2 class="text-xl font-bold mb-6 text-gray-800 border-b pb-4">Order Summary</h2>
          
          <div class="space-y-4 max-h-100 overflow-y-auto mb-8">
            <div v-if="cartStore.items.length === 0" class="text-center py-10 text-gray-400 italic">
              No items in your cart.
            </div>
            
            <div v-for="item in cartStore.items" :key="item.id" class="flex items-center gap-4">
              <img :src="item.thumbnail" :alt="item.title" class="w-16 h-16 object-cover rounded-xl bg-gray-50 border">
              <div class="flex-1">
                <h3 class="text-sm font-bold text-[#00155a]">{{ item.title }}</h3>
                <p class="text-xs text-gray-400">Qty: {{ item.quantity }}</p>
              </div>
              <p class="text-sm font-black text-[#f0627e]">${{ (item.price * item.quantity).toFixed(2) }}</p>
            </div>
          </div>

          <div class="border-t border-dashed pt-6 space-y-3">
            <div class="flex justify-between text-gray-500 font-medium">
              <span>Subtotal</span>
              <span>${{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-gray-500 font-medium">
              <span>Delivery Fee</span>
              <span>${{ deliveryFee.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-2xl font-black text-[#00155a] pt-6 border-t mt-4">
              <span>Total Price</span>
              <span>${{ total.toFixed(2) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>