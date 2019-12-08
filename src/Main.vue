<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
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
    },
    {
      name: 'MissingAnimals',
      to: '/missing-animals'
    },
    {
      name: 'Share',
      to: '/share'
    },
    {
      name: 'Pets',
      to: '/pets'
    },
    {
      name: 'Recommend',
      to: '/recommend'
    }
  ]
}
</script>
