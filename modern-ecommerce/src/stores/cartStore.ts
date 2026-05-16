import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // 1. State: Cart එකේ ඇති භාණ්ඩ ලැයිස්තුව
  const items = ref<any[]>([])

  // 2. Getters: ගණනය කිරීම්
  const cartCount = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  const cartTotal = computed(() => {
    return items.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  })

  // 3. Actions: ක්‍රියාකාරකම්
  
  // භාණ්ඩයක් Cart එකට එකතු කිරීම
  function addToCart(product: any) {
    const existingItem = items.value.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      // නව භාණ්ඩයක් නම් quantity එක 1 ලෙස ඇතුළත් කරනවා
      items.value.push({ ...product, quantity: 1 })
    }
  }

  // ප්‍රමාණය (Quantity) වැඩි හෝ අඩු කිරීම
  function updateQuantity(productId: number, amount: number) {
    const item = items.value.find(item => item.id === productId)
    if (item) {
      item.quantity += amount
      // ප්‍රමාණය 0 වුවහොත් එය Cart එකෙන් ඉවත් කරනවා
      if (item.quantity <= 0) {
        removeFromCart(productId)
      }
    }
  }

  // භාණ්ඩයක් ඉවත් කිරීම
  function removeFromCart(productId: number) {
    items.value = items.value.filter(item => item.id !== productId)
  }

  // Checkout එකෙන් පසු සම්පූර්ණ Cart එකම හිස් කිරීම
  function clearCart() {
    items.value = []
  }

  // පිටතින් පාවිච්චි කළ හැකි දේ Return කිරීම
  return { 
    items, 
    cartCount, 
    cartTotal, 
    addToCart, 
    updateQuantity, 
    removeFromCart, 
    clearCart 
  }
})