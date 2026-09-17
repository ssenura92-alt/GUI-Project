import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Product {
  id: number
  title: string
  price: number
  category: string
  thumbnail: string
  description: string
  rating?: number
}

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([])
  const loading = ref(false)
  const selectedCategory = ref('All')

  const EXCHANGE_RATE = 300

  // 🌐 සෙනුර, මෙතනින් නියම Core Tech Categories 4 පමණක් ඉතිරි කළා
  const TECH_CATEGORIES = [
    'laptops', 
    'smartphones', 
    'tablets', 
    'mobile-accessories'
  ]

  async function fetchProducts() {
    loading.value = true
    try {
      const response = await fetch('https://dummyjson.com/products?limit=0')
      const data = await response.json()

      products.value = data.products
        .filter((p: any) => TECH_CATEGORIES.includes(p.category.trim().toLowerCase()))
        .map((p: any) => {
          let finalCategory = p.category

          if (p.category === 'mobile-accessories') {
            finalCategory = 'accessories'
          }

          return {
            id: p.id,
            title: p.title,
            price: Math.round(p.price * EXCHANGE_RATE),
            category: finalCategory,
            thumbnail: p.thumbnail,
            description: p.description,
            rating: p.rating
          }
        })

    } catch (error) {
      console.error('Error fetching pure core tech devices:', error)
    } finally {
      loading.value = false
    }
  }

  function setCategory(categoryName: string) {
    selectedCategory.value = categoryName
  }

  return {
    products,
    loading,
    selectedCategory,
    fetchProducts,
    setCategory
  }
})