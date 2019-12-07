<template>
  <v-app>
    <SplashScreen :isLoading="isLoading"></SplashScreen>
    <router-view v-if="!isLoading"></router-view>
  </v-app>
</template>

<script>
import SplashScreen from '@/views/components/SplashScreen'

export default {
  name: 'Main',
  components: {
    SplashScreen
  },
  links: [
    {
      name: 'Home',
      to: '/'
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
  ],
  data () {
    return { isLoading: true }
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }
}
</script>
