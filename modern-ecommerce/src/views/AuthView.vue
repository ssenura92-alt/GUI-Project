<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToastStore } from '../stores/toastStore'

const router = useRouter()
const toastStore = useToastStore()

// Active Tab එක පාලනය කිරීම ('signin' හෝ 'register')
const activeTab = ref('signin')

// Password එක පෙනෙන/නොපෙනෙන එක පාලනය කරන Variables
const showPassword = ref(false)

// Form Fields සදහා Reactive Variables
const email = ref('')
const password = ref('')
const name = ref('')
const confirmPassword = ref('')

const handleSubmit = () => {
  if (activeTab.value === 'signin') {
    if (!email.value || !password.value) {
      toastStore.showToast('Please fill in all fields.', 'error')
      return
    }
    toastStore.showToast('Welcome back to Nexus! Sign In Successful.', 'success')
    router.push('/')
  } else {
    if (!name.value || !email.value || !password.value || !confirmPassword.value) {
      toastStore.showToast('All fields are required.', 'error')
      return
    }
    if (password.value !== confirmPassword.value) {
      toastStore.showToast('Passwords do not match!', 'error')
      return
    }
    toastStore.showToast('Account Created Successfully! Welcome to Nexus.', 'success')
    activeTab.value = 'signin'
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-50/50 dark:bg-gray-950 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
    
    <div class="absolute -top-40 -left-40 w-96 h-96 bg-red-600/10 blur-[150px] rounded-full pointer-events-none"></div>
    <div class="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

    <div class="w-full max-w-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-10 md:p-12 rounded-[3rem] shadow-2xl transition-colors duration-300 relative z-10">
      
      <div class="text-center mb-10">
        <h2 class="text-4xl font-black text-gray-950 dark:text-white uppercase tracking-widest">NEXUS</h2>
        <p class="text-xs text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider mt-1.5">Gateway Authentication Platform</p>
      </div>

      <div class="flex border-b border-gray-100 dark:border-gray-800 mb-10">
        <button 
          type="button"
          @click="activeTab = 'signin'"
          class="flex-1 pb-4 text-xs font-black uppercase tracking-widest border-b-2 transition-all"
          :class="activeTab === 'signin' ? 'border-[#f04343] text-[#f04343]' : 'border-transparent text-gray-400 dark:text-gray-500 hover:text-gray-600'"
        >
          Sign In
        </button>
        <button 
          type="button"
          @click="activeTab = 'register'"
          class="flex-1 pb-4 text-xs font-black uppercase tracking-widest border-b-2 transition-all"
          :class="activeTab === 'register' ? 'border-[#f04343] text-[#f04343]' : 'border-transparent text-gray-400 dark:text-gray-500 hover:text-gray-600'"
        >
          Register
        </button>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-6 text-left">
        
        <div v-if="activeTab === 'register'" class="flex flex-col gap-2">
          <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">Full Name</label>
          <input 
            v-model="name"
            type="text" 
            placeholder="Senura De Silva"
            class="w-full px-5 py-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-sm font-semibold focus:outline-none focus:border-[#f04343] dark:focus:border-[#f04343] transition-colors"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">Email Address</label>
          <input 
            v-model="email"
            type="email" 
            placeholder="senura@nexus.lk"
            class="w-full px-5 py-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-sm font-semibold focus:outline-none focus:border-[#f04343] dark:focus:border-[#f04343] transition-colors"
          />
        </div>

        <div class="flex flex-col gap-2 relative">
          <div class="flex justify-between items-center">
            <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">Password</label>
            <a v-if="activeTab === 'signin'" href="#" class="text-[10px] font-bold text-blue-500 dark:text-blue-400 hover:underline">Forgot?</a>
          </div>
          <div class="relative w-full">
            <input 
              v-model="password"
              :type="showPassword ? 'text' : 'password'" 
              placeholder="••••••••"
              class="w-full px-5 py-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-sm font-semibold focus:outline-none focus:border-[#f04343] dark:focus:border-[#f04343] transition-colors pr-12"
            />
            <button 
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </button>
          </div>
        </div>

        <div v-if="activeTab === 'register'" class="flex flex-col gap-2">
          <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">Confirm Password</label>
          <input 
            v-model="confirmPassword"
            type="password" 
            placeholder="••••••••"
            class="w-full px-5 py-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-sm font-semibold focus:outline-none focus:border-[#f04343] dark:focus:border-[#f04343] transition-colors"
          />
        </div>

        <button 
          type="submit"
          class="w-full bg-[#f04343] hover:bg-red-700 text-white font-black uppercase tracking-widest py-4.5 rounded-2xl text-xs transition-all shadow-lg shadow-red-500/10 active:scale-95 text-center mt-4 block"
        >
          {{ activeTab === 'signin' ? 'Access Account' : 'Create Account Structure' }}
        </button>

      </form>
    </div>

  </div>
</template>

<style scoped>
form {
  animation: formFade 0.4s cubic-bezier(0.4, 0, 0.2, 1) both;
}
@keyframes formFade {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>