<script setup lang="ts">
import { useCartStore } from '../stores/cartStore'
import { useToastStore } from '../stores/toastStore'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router' // 👈 රීඩිරෙක්ට් කිරීම සඳහා useRouter ඉම්පෝට් කළා

const cartStore = useCartStore()
const toastStore = useToastStore()
const router = useRouter() // 👈 Router Instance එක සෙට් කළා

// Custom Delete Popup එක පාලනය කරන Variables
const isDeleteModalOpen = ref(false)
const productToDelete = ref<{ id: number; title: string } | null>(null)

// 🏆 NEW: Checkout Success Modal එක පාලනය කරන Variable එකක්
const isSuccessModalOpen = ref(false)

// Cart එකේ ඇති මුළු අයිතම ගණන
const totalItems = computed(() => {
  return cartStore.items.reduce((sum, item) => sum + item.quantity, 0)
})

// Delivery ගාස්තුව (රු. 100,000 ට වැඩි නම් Free, නැත්නම් රු. 350)
const deliveryFee = computed(() => {
  if (cartStore.cartTotal >= 100000 || cartStore.cartTotal === 0) return 0
  return 350
})

// අවසාන මුළු එකතුව
const grandTotal = computed(() => {
  return cartStore.cartTotal + deliveryFee.value
})

// 🗑️ Custom Delete Popup එක විවෘත කරන ශ්‍රිතය
const triggerDeleteModal = (productId: number, title: string) => {
  productToDelete.value = { id: productId, title }
  isDeleteModalOpen.value = true
}

// ❌ අයින් කිරීම ස්ථිර කළ විට ක්‍රියාත්මක වන ශ්‍රිතය
const confirmDelete = () => {
  if (productToDelete.value) {
    cartStore.removeFromCart(productToDelete.value.id)
    toastStore.showToast(`"${productToDelete.value.title}" removed from cart!`, 'error')
  }
  closeDeleteModal()
}

// Popup එක වැසීම
const closeDeleteModal = () => {
  isDeleteModalOpen.value = false
  productToDelete.value = null
}

// 🏆 NEW: Checkout එක සාර්ථක වූ විට ක්‍රියාත්මක වන නව ශ්‍රිතය
const handleCheckout = () => {
  // 1. කැත alert/toast වෙනුවට Premium Modal එක ඕපන් කරනවා
  isSuccessModalOpen.value = true
}

// 🏆 NEW: සාර්ථක Popup එක වසා හෝම් පේජ් එකට රැගෙන යාම සහ Cart එක Clear කිරීම
const closeSuccessModal = () => {
  isSuccessModalOpen.value = false
  
  // යම් හෙයකින් ඔයාගේ store එකේ මුළු cart එකම clear කරන ෆන්ක්ෂන් එකක් තියෙනවා නම් එය මෙතැනට දාන්න (උදා: cartStore.clearCart())
  // නැත්නම් අපි සාමාන්‍ය විදිහට items array එක හිස් කරමු:
  cartStore.items = [] 
  
  // කෙළින්ම හෝම් පේජ් එකට රීඩිරෙක්ට් කිරීම
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen bg-gray-50/50 dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8 text-gray-900 dark:text-white transition-colors duration-300">
    <div class="container mx-auto max-w-6xl">
      
      <h1 class="text-3xl font-black text-[#00155a] dark:text-white uppercase tracking-tight mb-10 text-left transition-colors">
        Shopping Cart <span class="text-gray-400 dark:text-gray-500 font-normal">({{ totalItems }} Items)</span>
      </h1>

      <div v-if="cartStore.items.length === 0" class="bg-white dark:bg-gray-900 rounded-[2.5rem] p-16 text-center shadow-sm border border-gray-100 dark:border-gray-800 max-w-md mx-auto mt-10 transition-colors">
        <div class="text-gray-300 dark:text-gray-700 flex justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200 uppercase mb-2">Your cart is empty</h2>
        <p class="text-gray-500 dark:text-gray-400 text-sm mb-8">Looks like you haven't added any premium devices to your cart yet.</p>
        <router-link to="/" class="inline-block bg-[#f04343] hover:bg-red-700 text-white font-bold uppercase tracking-widest py-4 px-8 rounded-full text-xs transition-all shadow-md active:scale-95">
          Continue Shopping
        </router-link>
      </div>

      <div v-else class="flex flex-col lg:flex-row gap-10 items-start">
        
        <div class="w-full lg:flex-1 bg-white dark:bg-gray-900 rounded-[2.5rem] p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
          <div class="divide-y divide-gray-100 dark:divide-gray-800">
            
            <div v-for="item in cartStore.items" :key="item.id" class="py-6 flex flex-col sm:flex-row items-center gap-6 first:pt-0 last:pb-0">
              
              <div class="w-24 h-24 bg-gray-50 dark:bg-gray-950 rounded-2xl p-2 flex items-center justify-center shrink-0 border dark:border-gray-800 transition-colors">
                <img :src="item.thumbnail" :alt="item.title" class="max-h-full max-w-full object-contain" />
              </div>

              <div class="flex-1 text-center sm:text-left">
                <h3 class="font-bold text-gray-900 dark:text-gray-100 text-base uppercase tracking-tight line-clamp-1 mb-1 transition-colors">
                  {{ item.title }}
                </h3>
                <p class="text-sm font-black text-[#00155a] dark:text-white transition-colors">
                  Rs. {{ item.price.toLocaleString() }}
                </p>
              </div>

              <div class="flex items-center border border-gray-200 dark:border-gray-700 rounded-full bg-gray-50/50 dark:bg-gray-950 p-1 transition-colors">
                <button 
                  @click="item.quantity > 1 ? item.quantity-- : triggerDeleteModal(item.id, item.title)"
                  class="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 shadow-sm font-bold text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors border dark:border-gray-700"
                >
                  -
                </button>
                <span class="w-10 text-center font-bold text-sm text-gray-800 dark:text-gray-200">
                  {{ item.quantity }}
                </span>
                <button 
                  @click="item.quantity++"
                  class="w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 shadow-sm font-bold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border dark:border-gray-700"
                >
                  +
                </button>
              </div>

              <div class="text-center sm:text-right shrink-0 min-w-24">
                <p class="text-base font-black text-[#00155a] dark:text-white transition-colors">
                  Rs. {{ (item.price * item.quantity).toLocaleString() }}
                </p>
              </div>

              <button 
                @click="triggerDeleteModal(item.id, item.title)"
                class="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 p-2 transition-colors shrink-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>

            </div>

          </div>
        </div>

        <div class="w-full lg:w-96 bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col sticky top-6 transition-colors">
          <h2 class="text-lg font-black text-[#00155a] dark:text-white uppercase tracking-tight mb-6 transition-colors">Order Summary</h2>
          
          <div class="space-y-4 text-sm font-medium text-gray-600 dark:text-gray-400 pb-6 border-b border-gray-100 dark:border-gray-800">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span class="text-gray-900 dark:text-gray-100 font-bold">Rs. {{ cartStore.cartTotal.toLocaleString() }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span>Shipping & Delivery</span>
              <span v-if="deliveryFee === 0" class="text-green-600 dark:text-green-400 font-bold uppercase text-xs bg-green-50 dark:bg-green-950/40 px-2 py-1 rounded-md">Free</span>
              <span v-else class="text-gray-900 dark:text-gray-100 font-bold">Rs. {{ deliveryFee.toLocaleString() }}</span>
            </div>
          </div>

          <div class="flex justify-between items-center pt-6 mb-8">
            <span class="text-base font-bold text-gray-800 dark:text-gray-200">Total Price</span>
            <span class="text-2xl font-black text-[#00155a] dark:text-white transition-colors">Rs. {{ grandTotal.toLocaleString() }}</span>
          </div>

          <button 
            @click="handleCheckout"
            class="w-full bg-[#f04343] hover:bg-red-700 text-white font-bold uppercase tracking-widest py-4 rounded-full text-xs transition-all shadow-lg shadow-red-500/10 active:scale-95 text-center mb-3"
          >
            Proceed to Checkout
          </button>
          
          <router-link to="/" class="text-center text-xs font-bold text-blue-500 dark:text-blue-400 hover:underline">
            Back to Shopping
          </router-link>
        </div>

      </div> 
    </div>

    <div 
      v-if="isDeleteModalOpen" 
      class="fixed inset-0 z-400 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      @click="closeDeleteModal"
    >
      <div 
        class="bg-white dark:bg-gray-900 rounded-4xl max-w-md w-full p-8 text-center shadow-2xl border border-gray-100 dark:border-gray-800 animate-in zoom-in-95 duration-200 transition-colors"
        @click.stop
      >
        <div class="w-16 h-16 bg-red-50 dark:bg-red-950/30 text-red-500 dark:text-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>

        <h3 class="text-lg font-black text-gray-900 dark:text-gray-100 uppercase tracking-tight mb-2 transition-colors">Remove from Cart?</h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
          Do you really want to remove <span class="font-bold text-gray-800 dark:text-gray-200">"{{ productToDelete?.title }}"</span> from your shopping cart?
        </p>

        <div class="flex gap-4 justify-center">
          <button 
            @click="closeDeleteModal"
            class="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold uppercase tracking-widest py-3.5 rounded-full text-xs transition-all active:scale-95 border dark:border-gray-700"
          >
            Cancel
          </button>
          <button 
            @click="confirmDelete"
            class="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold uppercase tracking-widest py-3.5 rounded-full text-xs transition-all shadow-md active:scale-95"
          >
            Yes, Remove
          </button>
        </div>
      </div>
    </div>

    <div 
      v-if="isSuccessModalOpen" 
      class="fixed inset-0 z-400 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
      @click="closeSuccessModal"
    >
      <div 
        class="bg-white dark:bg-gray-900 rounded-[2.5rem] max-w-md w-full p-8 text-center shadow-2xl border border-gray-100 dark:border-gray-800 animate-in zoom-in-95 duration-300 transition-colors"
        @click.stop
      >
        <div class="w-20 h-20 bg-green-50 dark:bg-green-950/30 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-green-100 dark:border-green-900/20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-10 h-10 animate-pulse">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>

        <h3 class="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-2 transition-colors">Order Placed Successfully!</h3>
        <p class="text-xs text-gray-400 dark:text-gray-500 font-bold mt-2 leading-relaxed px-2">
          Thank you for purchasing from Nexus. Your workstation upgrades and elite tech setups are registered successfully!
        </p>

        <button 
          @click="closeSuccessModal"
          class="mt-8 w-full bg-gray-950 hover:bg-green-600 dark:bg-white dark:hover:bg-green-600 dark:text-black dark:hover:text-white text-white text-xs font-black uppercase tracking-widest py-4 rounded-full transition-all duration-300 shadow-xl active:scale-95"
        >
          Continue Shopping
        </button>
      </div>
    </div>

  </div>
</template>

<style scoped>
a, button {
  transition: all 0.3s ease;
}
</style>