<template>
  <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <Navbar />
    <router-view />
    <ToastContainer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Navbar from './features/components/Navbar.vue'
import ToastContainer from './features/components/ToastContainer.vue'
// useThemeStore එක මෙතනටත් ඉම්පෝට් කළා
import { useThemeStore } from './stores/themeStore'

const themeStore = useThemeStore()

// 👈 සයිට් එක ලෝඩ් වෙද්දීම Theme එක චෙක් කරලා ස්ටාර්ට් කරන්න ඕනේ
onMounted(() => {
  themeStore.initTheme()
})
</script>