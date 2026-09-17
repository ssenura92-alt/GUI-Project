<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

interface BranchInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  manager: string;
  image: string;
  mapImage: string;      // 🗺️ Static Map Graphic Preview URL
  googleMapsLink: string; // 📍 Real GPS Navigation Redirect Link
}

// 🏢 Nexus ශාඛා 4ට අදාළ ස්ථිර තොරතුරු (Never Expires)
const branchesData: Record<string, BranchInfo> = {
  colombo: {
    name: "Colombo Flagship Store",
    address: "#45, Unity Plaza, Colombo 03, Sri Lanka.",
    phone: "+94 112 050 600",
    email: "colombo@nexus.lk",
    hours: "Monday - Saturday: 09:00 AM - 07:30 PM (Sunday: Closed)",
    manager: "Sahan Perera",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
    mapImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop",
    // ✅ Colombo Unity Plaza සැබෑ ස්ථිර දිග ලින්ක් එක (No Firebase involvement)
    googleMapsLink: "https://www.google.com/maps/place/Unity+Plaza/@6.8962057,79.8530349,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae259430c5e7b21:0x397779b5c328d1cf!8m2!3d6.8962057!4d79.8556098!16s%2Fm%2F0_9z8g8"
  },
  kandy: {
    name: "Kandy Tech Hub",
    address: "#12, Dalada Veediya, Kandy, Sri Lanka.",
    phone: "+94 812 030 400",
    email: "kandy@nexus.lk",
    hours: "Monday - Saturday: 08:30 AM - 06:30 PM (Sunday: Closed)",
    manager: "Kasun Jayasinghe",
    image: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=1200&auto=format&fit=crop",
    mapImage: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=800&auto=format&fit=crop",
    // ✅ Kandy Dalada Veediya සැබෑ ස්ථිර දිග ලින්ක් එක
    googleMapsLink: "https://www.google.com/maps/place/Sri+Dalada+Veediya,+Kandy/@7.293444,80.6358316,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae3662b661c9ab5:0x51c720a0586e9cd!8m2!3d7.293444!4d80.6384065!16s%2Fg%2F11b6b4c1zm"
  },
  galle: {
    name: "Galle Premium Outlet",
    address: "#12, Main Street, Galle, Sri Lanka.",
    phone: "+94 912 030 000",
    email: "galle@nexus.lk",
    hours: "Monday - Saturday: 08:00 AM - 07:30 PM (Sunday: Closed)",
    manager: "Senura De Silva",
    image: "https://images.unsplash.com/photo-1423662055902-35543b217a0a?q=80&w=1200&auto=format&fit=crop",
    mapImage: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop",
    // ✅ Galle Main Street සැබෑ ස්ථිර දිග ලින්ක් එක
    googleMapsLink: "https://www.google.com/maps/place/Main+St,+Galle/@6.0357754,80.211145,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae173b22b6c93f5:0x5a542b4b456bd5c!8m2!3d6.0357754!4d80.2137199!16s%2Fg%2F11b6m5r5_0"
  },
  rathnapura: {
    name: "Rathnapura Smart Center",
    address: "#88, Banda Veediya, Rathnapura, Sri Lanka.",
    phone: "+94 452 040 500",
    email: "rathnapura@nexus.lk",
    hours: "Monday - Saturday: 08:30 AM - 06:30 PM (Sunday: Closed)",
    manager: "Nuwan Fernando",
    image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=1200&auto=format&fit=crop",
    mapImage: "https://images.unsplash.com/photo-1577086664693-894d8405334a?q=80&w=800&auto=format&fit=crop",
    // ✅ Rathnapura Town සැබෑ ස්ථිර දිග ලින්ක් එක
    googleMapsLink: "https://www.google.com/maps/place/Ratnapura/@6.6896228,80.375549,14z/data=!3m1!4b1!4m6!3m5!1s0x3ae3be6c64ff346d:0x39a9c298eb4bbfb1!8m2!3d6.6913619!4d80.3853112!16s%2Fm%2F03cs1_6"
  }
}

// URL parameter lookup with absolute TypeScript safety assertion
const currentBranch = computed<BranchInfo>(() => {
  const city = (route.params.city as string)?.toLowerCase()
  const foundBranch = branchesData[city]
  if (foundBranch) {
    return foundBranch
  }
  return branchesData.colombo as BranchInfo
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white pb-20 transition-colors duration-300">
    
    <div class="relative w-full h-64 md:h-80 flex items-center justify-center overflow-hidden border-b border-gray-200 dark:border-gray-900 bg-black">
      <img 
        :src="currentBranch.image" 
        :alt="currentBranch.name" 
        class="absolute inset-0 w-full h-full object-cover opacity-40 dark:opacity-30 scale-105"
      />
      <div class="absolute inset-0 bg-linear-to-r from-gray-900/10 via-black/50 to-gray-900/10 dark:via-black/75 backdrop-blur-[2px]"></div>
      <div class="absolute top-0 left-1/3 w-96 h-full bg-red-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div class="z-10 text-center">
        <span class="text-[10px] font-black uppercase tracking-widest bg-[#f04343] text-white px-2.5 py-0.5 rounded-md">Nexus Showroom</span>
        <h1 class="text-4xl md:text-5xl font-black text-white dark:text-white uppercase tracking-widest mt-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
          {{ currentBranch.name }}
        </h1>
      </div>
    </div>

    <div class="container mx-auto px-6 md:px-16 py-6 border-b border-gray-100 dark:border-gray-900">
      <div class="flex items-center gap-2 text-xs md:text-sm font-bold tracking-wide">
        <router-link to="/" class="text-gray-400 hover:text-[#f04343] transition-colors">Home</router-link>
        <span class="text-gray-300 dark:text-gray-700 font-normal">></span>
        <span class="text-gray-400">Branches</span>
        <span class="text-gray-300 dark:text-gray-700 font-normal">></span>
        <span class="text-[#f04343] capitalize">{{ route.params.city }}</span>
      </div>
    </div>

    <div class="container mx-auto px-6 md:px-16 max-w-7xl mt-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div class="lg:col-span-5 flex flex-col gap-6">
          <div class="bg-gray-50/50 dark:bg-gray-900/30 border border-gray-100 dark:border-gray-900 rounded-[2.5rem] p-8 md:p-10 shadow-sm transition-colors duration-300">
            <h2 class="text-xl font-black uppercase tracking-tight text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-4 mb-6">
              Store Information
            </h2>

            <div class="flex flex-col gap-6">
              <div class="flex gap-4 items-start">
                <div class="p-3 bg-white dark:bg-gray-950 rounded-2xl text-[#f04343] shadow-sm border dark:border-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="text-left">
                  <h4 class="text-xs font-black uppercase tracking-wider text-gray-400 dark:text-gray-500">Our Address</h4>
                  <p class="text-sm md:text-base font-bold text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">{{ currentBranch.address }}</p>
                </div>
              </div>

              <div class="flex gap-4 items-start">
                <div class="p-3 bg-white dark:bg-gray-950 rounded-2xl text-[#f04343] shadow-sm border dark:border-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="text-left">
                  <h4 class="text-xs font-black uppercase tracking-wider text-gray-400 dark:text-gray-500">Contact Number</h4>
                  <a :href="`tel:${currentBranch.phone}`" class="text-sm md:text-base font-black text-[#f04343] hover:underline mt-1 block tracking-wide">{{ currentBranch.phone }}</a>
                </div>
              </div>

              <div class="flex gap-4 items-start">
                <div class="p-3 bg-white dark:bg-gray-950 rounded-2xl text-[#f04343] shadow-sm border dark:border-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="text-left">
                  <h4 class="text-xs font-black uppercase tracking-wider text-gray-400 dark:text-gray-500">Opening Hours</h4>
                  <p class="text-sm font-bold text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">{{ currentBranch.hours }}</p>
                </div>
              </div>

              <div class="flex gap-4 items-start">
                <div class="p-3 bg-white dark:bg-gray-950 rounded-2xl text-[#f04343] shadow-sm border dark:border-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div class="text-left">
                  <h4 class="text-xs font-black uppercase tracking-wider text-gray-400 dark:text-gray-500">Store Manager</h4>
                  <p class="text-sm md:text-base font-bold text-gray-700 dark:text-gray-300 mt-1">{{ currentBranch.manager }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7 relative overflow-hidden rounded-[2.5rem] bg-gray-900 border border-gray-100 dark:border-gray-900 h-112.5 group shadow-lg">
          
          <img 
            :src="currentBranch.mapImage" 
            alt="Showroom Map Grid" 
            class="w-full h-full object-cover opacity-60 dark:opacity-30 filter grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
          />
          <div class="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-0"></div>

          <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
            <div class="w-16 h-16 bg-white dark:bg-gray-950 rounded-full flex items-center justify-center text-[#f04343] shadow-xl border dark:border-gray-800 animate-bounce mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <h3 class="font-black text-xl uppercase tracking-tight text-white drop-shadow-md">GPS Location Map</h3>
            <p class="text-xs text-gray-300 dark:text-gray-400 font-medium mt-1.5 max-w-sm drop-shadow-sm"> Click the button below to navigate directly via real-time Google Maps interface.</p>
          </div>

          <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-auto">
            <a
              :href="currentBranch.googleMapsLink"
              target="_blank"
              class="inline-flex items-center gap-2 bg-[#f04343] text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl shadow-2xl shadow-red-500/20 text-xs transition-all duration-300 hover:bg-red-600 active:scale-95 whitespace-nowrap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.446 3.562-1.077a.75.75 0 0 0 .543-.72V4.225a.75.75 0 0 0-.923-.724l-4.53 1.36a.75.75 0 0 1-.439 0l-4.752-1.454a.75.75 0 0 0-.44 0L3.53 4.774a.75.75 0 0 0-.53.72v12.012a.75.75 0 0 0 .923.724l4.53-1.36a.75.75 0 0 1 .439 0l4.752 1.454a.75.75 0 0 0 .44 0l.503-.154Z" />
              </svg>
              START LIVE NAVIGATION
            </a>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
/* High performance transition tuning optimization variables */
</style>