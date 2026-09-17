<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white pb-20 transition-colors duration-300">
    
    <div class="relative w-full h-64 md:h-80 flex items-center justify-center overflow-hidden border-b border-gray-200 dark:border-gray-900 bg-black">
      
      <img 
        src="https://images.unsplash.com/photo-1423662055902-35543b217a0a?q=80&w=1920&auto=format&fit=crop" 
        alt="Contact Background" 
        class="absolute inset-0 w-full h-full object-cover opacity-40 dark:opacity-30 scale-105"
      />

      <div class="absolute inset-0 bg-linear-to-r from-gray-900/10 via-black/50 to-gray-900/10 dark:via-black/75 backdrop-blur-[2px]"></div>

      <div class="absolute top-0 left-1/3 w-96 h-full bg-red-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <h1 class="text-4xl md:text-5xl font-black text-white dark:text-white uppercase tracking-widest z-10 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
        Contact Us
      </h1>
    </div>

    <div class="container mx-auto px-6 md:px-16 py-6 border-b border-gray-100 dark:border-gray-900">
      <div class="flex items-center gap-2 text-xs md:text-sm font-bold tracking-wide">
        <router-link to="/" class="text-gray-400 hover:text-[#f04343] transition-colors">Home</router-link>
        <span class="text-gray-300 dark:text-gray-700 font-normal">></span>
        <span class="text-[#f04343]">Contact Us</span>
      </div>
    </div>

    <div class="container mx-auto px-6 md:px-16 pt-16 pb-12 text-center max-w-3xl">
      <h2 class="text-2xl md:text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-3">
        Get In Touch With Us
      </h2>
      <p class="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
        Let's get this conversation started. Tell us a bit about yourself, and we'll get in touch as soon as we can.
      </p>
    </div>

    <div class="container mx-auto px-6 md:px-16 max-w-7xl">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div class="flex flex-col items-center text-center p-8 bg-gray-50/50 dark:bg-gray-900/30 rounded-4xl border border-gray-100 dark:border-gray-900 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
          <div class="w-16 h-16 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-[#f04343] shadow-sm border dark:border-gray-800 mb-6 group-hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-base font-black uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-3">E-mail Address</h3>
          <div class="flex flex-col text-xs md:text-sm font-bold text-gray-500 dark:text-gray-400 gap-1 leading-tight">
            <a href="mailto:info@nexus.lk" class="hover:text-[#f04343] transition-colors">info@nexus.lk</a>
            <a href="mailto:nexusmail@gmail.com" class="hover:text-[#f04343] transition-colors">nexusmail@gmail.com</a>
            <a href="mailto:unity@nexus.lk" class="hover:text-[#f04343] transition-colors">unity@nexus.lk</a>
          </div>
        </div>

        <div class="flex flex-col items-center text-center p-8 bg-gray-50/50 dark:bg-gray-900/30 rounded-4xl border border-gray-100 dark:border-gray-900 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
          <div class="w-16 h-16 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-[#f04343] shadow-sm border dark:border-gray-800 mb-6 group-hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-base font-black uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-3">Phone Number</h3>
          <div class="flex flex-col text-xs md:text-sm font-bold text-gray-500 dark:text-gray-400 gap-1 leading-tight">
            <a href="tel:+940714576576" class="hover:text-[#f04343] transition-colors">+94 (0) 714 576 576</a>
            <a href="tel:+94718800400" class="hover:text-[#f04343] transition-colors">+94 718 800 400</a>
            <a href="tel:+94718800600" class="hover:text-[#f04343] transition-colors">+94 718 800 600</a>
          </div>
        </div>

        <div class="flex flex-col items-center text-center p-8 bg-gray-50/50 dark:bg-gray-900/30 rounded-4xl border border-gray-100 dark:border-gray-900 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
          <div class="w-16 h-16 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-[#f04343] shadow-sm border dark:border-gray-800 mb-6 group-hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 class="text-base font-black uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-3">Address</h3>
          <div class="flex flex-col text-xs md:text-sm font-bold text-gray-500 dark:text-gray-400 leading-relaxed px-2">
            <p># 12, Main Street,</p>
            <p>Galle, Sri Lanka.</p>
          </div>
        </div>

        <div class="flex flex-col items-center text-center p-8 bg-gray-50/50 dark:bg-gray-900/30 rounded-4xl border border-gray-100 dark:border-gray-900 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
          <div class="w-16 h-16 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-[#f04343] shadow-sm border dark:border-gray-800 mb-6 group-hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-base font-black uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-3">Opening Hours</h3>
          <div class="flex flex-col text-xs md:text-sm font-bold text-gray-500 dark:text-gray-400 gap-1 leading-tight">
            <p>Monday to Saturday:</p>
            <p class="text-gray-800 dark:text-gray-200">08:00am to 07:30pm</p>
            <p class="mt-1 text-red-500/80 dark:text-red-400/80">Sunday: Closed</p>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.group {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>