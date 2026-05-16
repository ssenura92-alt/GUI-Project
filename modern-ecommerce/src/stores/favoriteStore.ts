import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useFavoriteStore = defineStore('favorite', () => {
  const favorites = ref<any[]>([])

  const favoriteCount = computed(() => favorites.value.length)

  function toggleFavorite(product: any) {
    const index = favorites.value.findIndex(p => p.id === product.id)
    if (index > -1) {
      favorites.value.splice(index, 1) // දැනටමත් තියෙනවා නම් අයින් කරන්න
    } else {
      favorites.value.push(product) // නැත්නම් එකතු කරන්න
    }
  }

  function isFavorite(productId: number) {
    return favorites.value.some(p => p.id === productId)
  }

  return { favorites, favoriteCount, toggleFavorite, isFavorite }
})