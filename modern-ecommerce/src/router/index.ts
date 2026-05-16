import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import FavoritesView from '../views/FavoritesView.vue'
// 1. Product Detail පිටුව සඳහා වන View එක මෙතැනින් import කළා
import ProductDetailView from '../views/ProductDetailView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView
    },
    {
      // 2. නිෂ්පාදන විස්තර සඳහා dynamic id එකක් සහිත නව Route එක
      path: '/product/:id',
      name: 'product-detail',
      component: ProductDetailView
    }
  ]
})

export default router