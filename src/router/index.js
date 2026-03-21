import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/itinerary', name: 'itinerary', component: () => import('../views/ItineraryView.vue') },
  { path: '/food', name: 'food', component: () => import('../views/FoodView.vue') },
  { path: '/transport', name: 'transport', component: () => import('../views/TransportView.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})
