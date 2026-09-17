<script setup lang="ts">
import { ref } from 'vue'

// FAQ Items සමඟ Accordion පාලනය කිරීමට open Index එකක්
const openIndex = ref<number | null>(null)

const faqs = ref([
  {
    q: "How can I check the availability of a specific product?",
    a: "You can view real-time availability on the product detail page, or contact our branch hotline directly via the 'Our Branches' navigation gateway panel."
  },
  {
    q: "What is your warranty policy for custom PC builds?",
    a: "All custom gaming rigs and workstation setups built by Nexus carry a 3-year comprehensive hardware warranty, along with lifetime technical service support."
  },
  {
    q: "Do you deliver island-wide within Sri Lanka?",
    a: "Yes! We offer secured delivery across Sri Lanka. Orders above Rs. 100,000 are eligible for 100% Free Shipping and Handling directly to your doorstep."
  },
  {
    q: "Can I pay using multiple credit cards at checkout?",
    a: "Currently, our website supports one transaction card per order. For split payments, please visit one of our flagship showrooms (Colombo, Galle, Kandy, Rathnapura)."
  }
])

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white pb-20 transition-colors duration-300">
    
    <div class="relative w-full h-64 flex items-center justify-center overflow-hidden border-b border-gray-200 dark:border-gray-900 bg-black">
      <div class="absolute inset-0 bg-linear-to-r from-gray-900/10 via-black/50 to-gray-900/10 dark:via-black/75 backdrop-blur-[2px]"></div>
      <h1 class="text-3xl md:text-4xl font-black text-white uppercase tracking-widest z-10">Help & Support</h1>
    </div>

    <div class="container mx-auto px-6 md:px-16 max-w-3xl mt-12 text-left">
      <h2 class="text-xl font-black uppercase tracking-tight mb-6 border-b dark:border-gray-950 pb-3">Frequently Asked Questions</h2>
      
      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="border border-gray-100 dark:border-gray-900 rounded-3xl overflow-hidden bg-gray-50/50 dark:bg-gray-900/20 transition-colors">
          <button 
            @click="toggleFaq(index)" 
            class="w-full p-5 text-left font-bold text-sm uppercase tracking-tight flex justify-between items-center text-gray-800 dark:text-gray-200"
          >
            <span>{{ faq.q }}</span>
            <span class="text-xl font-light text-[#f04343]">{{ openIndex === index ? '−' : '+' }}</span>
          </button>
          
          <div v-if="openIndex === index" class="px-5 pb-5 text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 leading-relaxed border-t dark:border-gray-900/50 pt-3">
            {{ faq.a }}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>