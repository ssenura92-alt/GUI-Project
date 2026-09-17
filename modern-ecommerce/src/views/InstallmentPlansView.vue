<script setup lang="ts">
import { ref } from 'vue'

// 💳 වාරික සැලසුම් ලබාදෙන බැංකු ලැයිස්තුව (Mock Data)
const banks = ref([
  {
    name: 'Commercial Bank',
    logo: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=150&auto=format&fit=crop',
    tenures: ['3 Months', '6 Months', '12 Months', '24 Months'],
    interest: '0% Interest Free',
    minAmount: 50000
  },
  {
    name: 'HNB Bank',
    logo: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=150&auto=format&fit=crop',
    tenures: ['6 Months', '12 Months', '18 Months'],
    interest: '0% Interest Free',
    minAmount: 75000
  },
  {
    name: 'Sampath Bank',
    logo: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=150&auto=format&fit=crop',
    tenures: ['3 Months', '6 Months', '12 Months', '24 Months', '36 Months'],
    interest: 'Handling fee applies for 36 months',
    minAmount: 60000
  },
  {
    name: 'BOC Bank',
    logo: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=150&auto=format&fit=crop',
    tenures: ['6 Months', '12 Months'],
    interest: '0% Interest Free',
    minAmount: 40000
  }
])
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white pb-20 transition-colors duration-300">
    
    <div class="relative w-full h-64 flex items-center justify-center overflow-hidden border-b border-gray-200 dark:border-gray-900 bg-black">
      <div class="absolute inset-0 bg-linear-to-r from-gray-900/10 via-black/50 to-gray-900/10 dark:via-black/75 backdrop-blur-[2px]"></div>
      <h1 class="text-3xl md:text-4xl font-black text-white uppercase tracking-widest z-10">Installment Plans</h1>
    </div>

    <div class="container mx-auto px-6 md:px-16 max-w-5xl mt-12 text-left">
      <p class="text-gray-500 dark:text-gray-400 font-medium mb-10 text-center max-w-xl mx-auto">
        Upgrade your workspace now and pay later! Nexus offers flexible 0% interest-free monthly installment schemes with leading credit cards in Sri Lanka.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="bank in banks" :key="bank.name" class="bg-gray-50/50 dark:bg-gray-900/30 border border-gray-100 dark:border-gray-900 rounded-[2.5rem] p-8 flex gap-6 items-center shadow-sm hover:shadow-md transition-all">
          <div class="w-20 h-20 bg-white dark:bg-gray-950 rounded-2xl flex items-center justify-center border dark:border-gray-800 p-2 shrink-0 font-bold text-xs text-gray-400">
            Logo
          </div>
          <div>
            <h3 class="font-black text-lg text-gray-900 dark:text-white uppercase tracking-tight">{{ bank.name }}</h3>
            <p class="text-xs font-black text-[#f04343] mt-1">{{ bank.interest }}</p>
            
            <div class="flex flex-wrap gap-1.5 mt-3">
              <span v-for="t in bank.tenures" :key="t" class="text-[10px] font-bold bg-white dark:bg-gray-950 border dark:border-gray-800 px-2.5 py-1 rounded-md text-gray-600 dark:text-gray-400">
                {{ t }}
              </span>
            </div>
            <p class="text-[11px] text-gray-400 font-medium mt-3">Minimum transaction value: Rs. {{ bank.minAmount.toLocaleString() }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>