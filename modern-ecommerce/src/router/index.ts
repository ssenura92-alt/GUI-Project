import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import FavoritesView from '../views/FavoritesView.vue'
// 1. Product Detail පිටුව සඳහා වන View එක මෙතැනින් import කළා
import ProductDetailView from '../views/ProductDetailView.vue' 
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'
import ShopView from '../views/ShopView.vue'
import GalleryView from '../views/GalleryView.vue'
import BranchDetailView from '../views/BranchDetailView.vue'
import DealsView from '../views/DealsView.vue'
import InstallmentPlansView from '../views/InstallmentPlansView.vue'
import HelpView from '../views/HelpView.vue'
import AuthView from '../views/AuthView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'authentication',
      component: AuthView
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
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/branches/:city',
      name: 'branch-detail',
      component: BranchDetailView
  },
  {
      path: '/deals',
      name: 'weekly-deals',
      component: DealsView
  },
  {
      path: '/installment-plans',
      name: 'installment-plans',
      component: InstallmentPlansView
  },
  {
      path: '/help',
      name: 'help',
      component: HelpView
  }
    
  ]
})

export default router