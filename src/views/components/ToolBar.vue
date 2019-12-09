<template>
  <v-card color="grey lighten-4" flat height="50px" tile mb-0>
    <v-toolbar dense flat>
      <v-app-bar-nav-icon to="/">
        <v-img src="@/assets/logo(2).png" width="30px"></v-img>
      </v-app-bar-nav-icon>
      <v-toolbar-title>Bow-Wow</v-toolbar-title>
      <v-row justify="end">
        <v-btn v-on:click="logout()" color="grey" icon>
          <v-img src="@/assets/logout.png"></v-img>
        </v-btn>
      </v-row>
    </v-toolbar>
  </v-card>
</template>

<script>
import Store from '@/store'
import Router from '@/router'

export default {
  name: 'ToolBar',
  links: [
    {
      name: 'Home',
      to: '/'
    },
    {
      name: 'Login',
      to: 'account/signin'
    }
  ],
  methods: {
    logout: () => {
      Store
        .dispatch('AUTH_LOGOUT')
        .then(() => Router.push('/account/signin'))
        .catch(err => console.log(err))
    }
  }
}
</script>
