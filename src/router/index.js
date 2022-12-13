import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=> import('../views/HomeScreen.vue')
  },
  {
    path: '/CreateAccountScreen',
    name: 'Create',
    component: () => import('@/views/CreateAccountScreen.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: ()=> import('@/views/SearchScreen.vue')
  },
  {
    path: '/myOrders',
    name: 'myOrders',
    component: ()=> import('@/views/MyOrdersScreen.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
