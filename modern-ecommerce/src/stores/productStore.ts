// src/stores/productStore.ts
import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as any[],
    loading: false,
    selectedCategory: 'All' // දැනට තෝරාගත් category එක තබා ගැනීමට
  }),
  
  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await fetch('https://dummyjson.com/products?limit=150'); 
        const data = await response.json();
        
        const electricCategories = [
          'laptops', 
          'smartphones', 
          'tablets', 
          'mobile-accessories',
          'computers',
          'monitors', 
          'audio-accessories' 
        ];
        
        this.products = data.products.filter((product: any) => 
          electricCategories.includes(product.category)
        );

        console.log("Electronics Loaded:", this.products);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        this.loading = false;
      }
    },

    // Category එක වෙනස් කිරීමට අවශ්‍ය action එක
    setCategory(category: string) {
      this.selectedCategory = category; //
    }
  }
});