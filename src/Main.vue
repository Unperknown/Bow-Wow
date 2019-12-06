<template>
  <v-app>
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'Main',
  data: () => ({
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
    ]
  })
}
</script>
