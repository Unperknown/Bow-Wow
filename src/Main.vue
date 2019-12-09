<template>
  <v-app>
    <ToolBar v-if="isAuthenticated() === true"></ToolBar>
    <router-view></router-view>
    <BottomNav v-if="isAuthenticated() === true"></BottomNav>
  </v-app>
</template>

<script>
import ToolBar from '@/views/components/ToolBar'
import BottomNav from '@/views/components/BottomNav'
import Auth from '@/store/modules/auth'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration)
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError)
    })
  })
}

export default {
  name: 'Main',
  components: {
    ToolBar,
    BottomNav
  },
  links: [
    {
      name: 'Home',
      to: '/home'
    },
    {
      name: 'Login',
      to: '/account/signin'
    },
    {
      name: 'Register',
      to: '/account/signup'
    }
  ],
  methods: {
    isAuthenticated: () => {
      return Auth.getters.isAuthenticated()
    }
  }
}
</script>
