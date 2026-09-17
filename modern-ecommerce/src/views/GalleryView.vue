<script setup lang="ts">
import { ref, computed } from 'vue'

// 📂 Local UI State (දැනට තෝරාගෙන ඇති Tab එක)
const activeTab = ref('all')

// 📸 Gallery Items සඳහා High-Quality Tech/PC Setups Mock Data ලැයිස්තුව
const galleryItems = ref([
  {
    id: 1,
    title: "Minimalist Dual-Screen Workstation",
    category: "workstation",
    image: "https://images.unsplash.com/photo-1547119957-637f8679db1e?q=80&w=800&auto=format&fit=crop",
    description: "Clean aesthetic setup powered by Apple Mac Studio and Pro Displays."
  },
  {
    id: 2,
    title: "Ultimate Cyberpunk RGB Gaming Rig",
    category: "gaming",
    image: "https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?q=80&w=800&auto=format&fit=crop",
    description: "Custom liquid-cooled PC featuring ASUS ROG and Lian Li components."
  },
  {
    id: 3,
    title: "Mechanical Keyboard & Macro Shot",
    category: "closeups",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop",
    description: "Custom GMMK Pro with premium PBT keycaps and coiled cable."
  },
  {
    id: 4,
    title: "Full Matte Black Desk Setup Architecture",
    category: "workstation",
    image: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=800&auto=format&fit=crop",
    description: "Designed for software engineers and ultimate focused productivity."
  },
  {
    id: 5,
    title: "Next-Gen Console Racing Simulation Setup",
    category: "gaming",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    description: "Fanatec direct-drive wheel with triple curved gaming monitors."
  },
  {
    id: 6,
    title: "Premium Wireless Audio Closeup Showcase",
    category: "closeups",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop",
    description: "Sony WH-1000XM5 studio monitoring setup."
  },
  {
    id: 7,
    title: "Cozy Wood-Themed Coding Corner",
    category: "workstation",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    description: "Warm ambient lighting with custom walnut desktop setup."
  },
  {
    id: 8,
    title: "GeForce RTX 4090 GPU Internal Architecture",
    category: "closeups",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop",
    description: "Deep dive inside the Nexus flagship liquid-cooled build."
  }
])

// 🧠 FILTER LOGIC: තෝරාගත් Tab එකට අනුව පින්තූර වෙන් කිරීම
const filteredItems = computed(() => {
  if (activeTab.value === 'all') return galleryItems.value
  return galleryItems.value.filter(item => item.category === activeTab.value)
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white pb-20 transition-colors duration-300">
    
    <div class="relative w-full h-64 md:h-80 flex items-center justify-center overflow-hidden border-b border-gray-200 dark:border-gray-900 bg-black">
      <img 
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920&auto=format&fit=crop" 
        alt="Tech Background" 
        class="absolute inset-0 w-full h-full object-cover opacity-40 dark:opacity-30 scale-105"
      />
      <div class="absolute inset-0 bg-linear-to-r from-gray-900/10 via-black/50 to-gray-900/10 dark:via-black/75 backdrop-blur-[2px]"></div>
      <div class="absolute top-0 left-1/3 w-96 h-full bg-red-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <h1 class="text-4xl md:text-5xl font-black text-white uppercase tracking-widest z-10 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
        Media Gallery
      </h1>
    </div>

    <div class="container mx-auto px-6 md:px-16 py-6 border-b border-gray-100 dark:border-gray-900">
      <div class="flex items-center gap-2 text-xs md:text-sm font-bold tracking-wide">
        <router-link to="/" class="text-gray-400 hover:text-[#f04343] transition-colors">Home</router-link>
        <span class="text-gray-300 dark:text-gray-700 font-normal">></span>
        <span class="text-[#f04343]">Gallery</span>
      </div>
    </div>

    <div class="container mx-auto px-6 md:px-16 pt-12 pb-8 flex flex-wrap justify-center items-center gap-3">
      <button 
        v-for="tab in [{ id: 'all', label: 'All Showcases' }, { id: 'gaming', label: 'Gaming Setups' }, { id: 'workstation', label: 'Workstations' }, { id: 'closeups', label: 'Tech Closeups' }]"
        :key="tab.id"
        @click="activeTab = tab.id"
        class="px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300"
        :class="activeTab === tab.id 
          ? 'bg-[#f04343] text-white shadow-lg shadow-red-500/20 scale-105' 
          : 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 border border-gray-200/50 dark:border-gray-800'"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="container mx-auto px-6 md:px-16 max-w-7xl mt-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        
        <div 
          v-for="item in filteredItems" 
          :key="item.id"
          class="group relative overflow-hidden bg-gray-100 dark:bg-gray-900 rounded-4xl border border-gray-100 dark:border-gray-800 shadow-sm h-64 w-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-md"
        >
          <img 
            :src="item.image" 
            :alt="item.title" 
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />

          <div class="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-left z-10">
            <span class="text-[9px] font-black uppercase tracking-widest bg-[#f04343] text-white px-2 py-0.5 rounded-md w-fit mb-2">
              {{ item.category }}
            </span>
            <h3 class="text-sm font-black text-white uppercase tracking-tight line-clamp-1">
              {{ item.title }}
            </h3>
            <p class="text-[11px] text-gray-300 font-medium line-clamp-2 mt-1 leading-tight">
              {{ item.description }}
            </p>
          </div>
          
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
/* Grid අයිතම ලෝඩ් වෙද්දී සිදුවන සුමට Fade-in Animation එක */
.grid > div {
  animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>