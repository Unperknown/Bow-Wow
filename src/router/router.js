import Vue from 'vue'
import Router from 'vue-router'

// Page content
import SplashScreen from '@/components/SplashScreen'

import Login from '@/components/Login'
import Register from '@/components/Register'

import MainScreen from '@/components/MainScreen'

import Pets from '@/components/Pets'
import Share from '@/components/Share'
import MissingAnimals from '@/components/MissingAnimals'
import Recommend from '@/components/Recommend'

// Fallback page
import PageNotFound from '@/components/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainScreen',
      component: MainScreen
    },
    {
      path: '/account/signin',
      name: 'Login',
      component: Login
    },
    {
      path: '/account/signup',
      name: 'Register',
      component: Register
    },
    {
      path: '/pets',
      name: 'Pets',
      component: Pets
    },
    {
      path: '/share',
      name: 'Share',
      component: Share
    },
    {
      path: '/missing-animals',
      name: 'MissingAnimals',
      component: MissingAnimals
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/404',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})