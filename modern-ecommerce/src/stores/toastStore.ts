import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'info' | 'error';
}

export const useToastStore = defineStore('toast', () => {
  const toasts = ref<Toast[]>([])
  let nextId = 1

  function showToast(message: string, type: 'success' | 'info' | 'error' = 'success') {
    const id = nextId++
    toasts.value.push({ id, message, type })

    // තත්පර 3කට පසු ස්වයංක්‍රීයව Toast එක අයින් කිරීම
    setTimeout(() => {
      removeToast(id)
    }, 3000)
  }

  function removeToast(id: number) {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }

  return { toasts, showToast, removeToast }
})