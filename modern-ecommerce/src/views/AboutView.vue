<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white pb-20 transition-colors duration-300">
    
    <div class="relative w-full h-64 md:h-80 flex items-center justify-center overflow-hidden border-b border-gray-200 dark:border-gray-900 bg-black">
      
      <img 
        src="https://images.unsplash.com/photo-1504164996022-09080787b6b3?q=80&w=1920&auto=format&fit=crop" 
        alt="About Background" 
        class="absolute inset-0 w-full h-full object-cover opacity-40 dark:opacity-30 scale-105"
      />

      <div class="absolute inset-0 bg-linear-to-r from-gray-900/10 via-black/50 to-gray-900/10 dark:via-black/75 backdrop-blur-[2px]"></div>

      <div class="absolute top-0 left-1/3 w-96 h-full bg-red-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <h1 class="text-4xl md:text-5xl font-black text-white dark:text-white uppercase tracking-widest z-10 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
        About Us
      </h1>
    </div>

    <div class="container mx-auto px-6 md:px-16 py-6 border-b border-gray-100 dark:border-gray-900">
      <div class="flex items-center gap-2 text-xs md:text-sm font-bold tracking-wide">
        <router-link to="/" class="text-gray-400 hover:text-[#f04343] transition-colors">Home</router-link>
        <span class="text-gray-300 dark:text-gray-700 font-normal">></span>
        <span class="text-[#f04343]">About Us</span>
      </div>
    </div>

    <div class="container mx-auto px-6 md:px-16 pt-16 pb-12 max-w-4xl text-center">
      <h2 class="text-2xl md:text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-4">
        Welcome To Nexus Computers
      </h2>
      <p class="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-6">
        Established with a passion for high-performance computing and cutting-edge technology, <span class="text-[#f04343] font-bold">Nexus</span> has grown into Sri Lanka's leading online store for premium electronic devices. We specialize in bringing down world-class gaming laptops, high-end smartphones, workstation desktops, and tech accessories directly to your doorstep.
      </p>
      <p class="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
        We are not just a retail store; we are a community of tech enthusiasts, gamers, and professionals who demand nothing but the absolute best in hardware, reliability, and after-sales support.
      </p>
    </div>

    <div class="container mx-auto px-6 md:px-16 max-w-6xl mt-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div class="flex flex-col items-center text-center p-8 bg-gray-50/50 dark:bg-gray-900/30 rounded-[2.5rem] border border-gray-100 dark:border-gray-900 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
          <div class="w-14 h-14 rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center text-[#f04343] shadow-sm border dark:border-gray-800 mb-6 group-hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 class="text-base font-black uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-3">Our Vision</h3>
          <p class="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 leading-relaxed">
            To build the ultimate tech ecosystem in Sri Lanka, where premium quality, authentic products, and cutting-edge hardware are easily accessible to every innovator and creator.
          </p>
        </div>

        <div class="flex flex-col items-center text-center p-8 bg-gray-50/50 dark:bg-gray-900/30 rounded-[2.5rem] border border-gray-100 dark:border-gray-900 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
          <div class="w-14 h-14 rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center text-[#f04343] shadow-sm border dark:border-gray-800 mb-6 group-hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-base font-black uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-3">Our Mission</h3>
          <p class="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 leading-relaxed">
            To empower our customers by providing genuine, top-tier computing solutions with seamless online shopping experiences, transparent pricing, and world-class customer support.
          </p>
        </div>

        <div class="flex flex-col items-center text-center p-8 bg-gray-50/50 dark:bg-gray-900/30 rounded-[2.5rem] border border-gray-100 dark:border-gray-900 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
          <div class="w-14 h-14 rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center text-[#f04343] shadow-sm border dark:border-gray-800 mb-6 group-hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138z" />
            </svg>
          </div>
          <h3 class="text-base font-black uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-3">Why Choose Us</h3>
          <p class="text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 leading-relaxed">
            Every product we sell is 100% genuine and sourced from international official distributors. With local official warranties and highly skilled hardware support, your investment is safe with us.
          </p>
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