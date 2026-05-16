<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
// path එකේ තිත (.) එකක්ද දෙකක්ද (..) කියලා බලන්න. 
// App.vue එක තියෙන්නේ src ඇතුළේ නිසා එක තිතක් තිබීම සෑහේ.
import Navbar from './features/components/Navbar.vue'
</script>