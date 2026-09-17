<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useCartStore } from '../stores/cartStore'

const cartStore = useCartStore()

// ⏰ Countdown Timer එක සඳහා Logic (Days, Hours, Minutes, Seconds)
const days = ref(5)
const hours = ref(14)
const minutes = ref(32)
const seconds = ref(45)

let timerInterval: any = null

const startCountdown = () => {
  timerInterval = setInterval(() => {
    if (seconds.value > 0) {
      seconds.value--
    } else {
      seconds.value = 59
      if (minutes.value > 0) {
        minutes.value--
      } else {
        minutes.value = 59
        if (hours.value > 0) {
          hours.value--
        } else {
          hours.value = 23
          if (days.value > 0) {
            days.value--
          } else {
            // Timer ended
            clearInterval(timerInterval)
          }
        }
      }
    }
  }, 1000)
}

// 🛒 Weekly Deals සඳහා Mock Data සෙට් එක (Nexus Theme)
const weeklyDeals = ref([
  {
    id: 101,
    title: 'Razer Blade 15 Advanced Gaming Laptop',
    description: 'Intel Core i7, RTX 4070, 16GB RAM, 1TB SSD, 240Hz QHD Display.',
    originalPrice: 485000,
    discountPrice: 425000,
    discountPercentage: 12,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=600&auto=format&fit=crop',
    soldCount: 14,
    totalStock: 20,
    category: 'laptops'
  },
  {
    id: 102,
    title: 'Samsung Galaxy S26 Ultra 5G (Workstation Edition)',
    description: '12GB RAM, 512GB Storage, Snapdragon 8 Gen 5, Titanium Black.',
    originalPrice: 395000,
    discountPrice: 365000,
    discountPercentage: 8,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600&auto=format&fit=crop',
    soldCount: 8,
    totalStock: 10,
    category: 'smartphones'
  },
  {
    id: 103,
    title: 'Sony WH-1000XM5 Wireless Headphones',
    description: 'Industry-leading Noise Cancellation, 30-hour Battery Life, High-Res Audio.',
    originalPrice: 115000,
    discountPrice: 92000,
    discountPercentage: 20,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop',
    soldCount: 25,
    totalStock: 30,
    category: 'accessories'
  },
  {
    id: 104,
    title: 'iPad Pro 13" M4 Chip (Liquid Retina XDR)',
    description: 'Apple M4, 256GB Storage, Wi-Fi Only, Space Gray + Apple Pencil Support.',
    originalPrice: 345000,
    discountPrice: 319000,
    discountPercentage: 7,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600&auto=format&fit=crop',
    soldCount: 3,
    totalStock: 15,
    category: 'tablets'
  }
])

onMounted(() => {
  startCountdown()
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white pb-20 transition-colors duration-300">
    
    <section class="container mx-auto px-4 pt-12">
      <div class="bg-gray-950 border border-gray-900 rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
        <div class="absolute -top-24 -left-24 w-80 h-80 bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div class="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <span class="text-xs font-black uppercase tracking-widest bg-[#f04343] text-white px-3 py-1 rounded-md">Limited Time Mega Sale</span>
        <h1 class="text-3xl md:text-5xl font-black text-white uppercase tracking-wider mt-4">
          WEEKLY DEALS OF THE NEXUS
        </h1>
        <p class="text-gray-400 text-sm md:text-base mt-2 max-w-xl mx-auto font-medium">
          Get exclusive premium tech workstation upgrades and gaming rigs for the lowest prices in Sri Lanka.
        </p>

        <div class="flex justify-center items-center gap-3 md:gap-6 mt-8">
          <div class="flex flex-col">
            <span class="w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-xl md:text-2xl font-black text-white shadow-md backdrop-blur-md">{{ days }}</span>
            <span class="text-[10px] font-black uppercase text-gray-500 tracking-wider mt-2">Days</span>
          </div>
          <span class="text-xl md:text-2xl font-black text-[#f04343] -mt-6 animate-pulse">:</span>
          <div class="flex flex-col">
            <span class="w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-xl md:text-2xl font-black text-white shadow-md backdrop-blur-md">{{ hours }}</span>
            <span class="text-[10px] font-black uppercase text-gray-500 tracking-wider mt-2">Hours</span>
          </div>
          <span class="text-xl md:text-2xl font-black text-[#f04343] -mt-6 animate-pulse">:</span>
          <div class="flex flex-col">
            <span class="w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-xl md:text-2xl font-black text-white shadow-md backdrop-blur-md">{{ minutes }}</span>
            <span class="text-[10px] font-black uppercase text-gray-500 tracking-wider mt-2">Mins</span>
          </div>
          <span class="text-xl md:text-2xl font-black text-[#f04343] -mt-6 animate-pulse">:</span>
          <div class="flex flex-col">
            <span class="w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-xl md:text-2xl font-black text-[#f04343] shadow-md backdrop-blur-md">{{ seconds }}</span>
            <span class="text-[10px] font-black uppercase text-gray-500 tracking-wider mt-2">Secs</span>
          </div>
        </div>

      </div>
    </section>

    <section class="container mx-auto px-4 py-16 max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div 
          v-for="deal in weeklyDeals" 
          :key="deal.id" 
          class="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2.5rem] p-6 flex flex-col sm:flex-row gap-6 shadow-sm hover:shadow-xl dark:hover:border-gray-700 transition-all duration-300 group relative overflow-hidden"
        >
          <div class="absolute top-4 left-4 z-10 bg-[#f04343] text-white text-xs font-black uppercase px-2.5 py-1 rounded-md shadow-md">
            Save {{ deal.discountPercentage }}%
          </div>

          <div class="w-full sm:w-48 h-48 rounded-3xl overflow-hidden bg-gray-50 dark:bg-gray-950 shrink-0 relative border border-gray-100 dark:border-gray-800">
            <img 
              :src="deal.image" 
              :alt="deal.title" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div class="flex flex-col justify-between flex-1 text-left">
            <div>
              <span class="text-[10px] font-black text-[#f04343] uppercase tracking-widest block">{{ deal.category }}</span>
              <h3 class="text-lg font-black text-gray-900 dark:text-white mt-1 group-hover:text-[#f04343] transition-colors leading-snug">
                {{ deal.title }}
              </h3>
              <p class="text-xs font-medium text-gray-400 dark:text-gray-500 mt-2 line-clamp-2">
                {{ deal.description }}
              </p>
            </div>

            <div class="mt-4">
              <div class="flex items-baseline gap-3 mb-3">
                <span class="text-xl font-black text-[#f04343]">Rs. {{ deal.discountPrice.toLocaleString() }}.00</span>
                <span class="text-xs font-bold text-gray-400 line-through">Rs. {{ deal.originalPrice.toLocaleString() }}.00</span>
              </div>

              <div class="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden mb-1.5 relative">
                <div 
                  class="bg-linear-to-r from-[#f04343] to-red-400 h-full rounded-full transition-all duration-500"
                  :style="{ width: `${(deal.soldCount / deal.totalStock) * 100}%` }"
                ></div>
              </div>
              <div class="flex justify-between items-center text-[10px] font-black uppercase tracking-wider text-gray-400 dark:text-gray-500">
                <span>Sold: {{ deal.soldCount }} / {{ deal.totalStock }} Items</span>
                <span class="text-[#f04343] animate-pulse">Only {{ deal.totalStock - deal.soldCount }} Left!</span>
              </div>
            </div>

            <button 
  @click="cartStore.addToCart({
    id: deal.id,
    title: deal.title,
    price: deal.discountPrice, // 👈 නියම වට්ටම් මිල, Cart එකේ සාමාන්‍ය price එක විදිහට මැප් කළා!
    image: deal.image,
    thumbnail: deal.image     // 👈 යම් හෙයකින් Cart එකේ පාවිච්චි වෙන්නේ thumbnail නම් ඒකත් බේරුණා!
  })"
  class="mt-5 w-full bg-gray-950 hover:bg-[#f04343] dark:bg-gray-800 dark:hover:bg-[#f04343] text-white text-xs font-black uppercase tracking-widest py-3.5 rounded-xl transition-all duration-300 active:scale-95 shadow-md"
>
  Add To Cart
</button>
          </div>

        </div>

      </div>
    </section>

  </div>
</template>

<style scoped>
/* High performance animation smoothing overrides */
</style>