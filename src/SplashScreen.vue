<template>
  <v-app>
    <v-row align="center" justify="center">
      <v-col xs="12" sm="6" md="4" lg="3" xl2="2">
        <v-img src="@/assets/logo.png" class="mx-auato" aspect-ratio="1.5" contain></v-img>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default {
  name: 'SplashScreen',
  created () {
    setTimeout(() => {
      this.$router.go({
        path: '/home',
        force: true
      })
    }, 3000)
  }
}
</script>
