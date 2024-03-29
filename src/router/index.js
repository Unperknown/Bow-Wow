import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/account/signin')
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/account/signup',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/account/signin',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/missing-animals',
    name: 'MissingAnimals',
    component: () => import('../views/components/Share.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/share',
    name: 'Share',
    component: () => import('../views/components/Share.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/share/write',
    name: 'Write',
    component: () => import('../views/components/Writing.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/pets',
    name: 'Pets',
    component: () => import('../views/components/PetCare.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/pets/alarm',
    name: 'Alarm',
    component: () => import('../views/components/Alarm.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/pets/clinic',
    name: 'Clinic',
    component: () => import('../views/components/Clinic.vue'),
    beforeEnter: ifAuthenticated
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: () => import('../views/components/Share.vue'),
    beforeEnter: ifAuthenticated
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
