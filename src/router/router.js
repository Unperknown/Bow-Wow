import Vue from 'vue'
import Router from 'vue-router'

import MainScreen from '@/components/MainScreen'
import Login from '@/components/Login'
import Register from '@/components/Register'

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
    }
  ]
})