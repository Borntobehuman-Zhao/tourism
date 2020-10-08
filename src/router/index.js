import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index.vue'

Vue.use(Router)


const routes = [
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/attractions',
    name: 'attractions',
    component: () => import('../views/attractions.vue')
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: () => import('../views/hotel.vue')
  },
  {
    path: '/hotels',
    name: 'hotels',
    component: () => import('../views/hotels.vue')
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('../views/personal.vue')
  },
]


const router = new Router({routes})
export default router
