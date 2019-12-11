<template>
  <v-card color="grey lighten-4" flat height="50px" tile mb-0>
    <v-toolbar dense fixed flat>
      <v-app-bar-nav-icon to="/">
        <v-img src="@/assets/logo(2).png" width="30px"></v-img>
      </v-app-bar-nav-icon>
      <v-row align="center" justify="end">
      <span class="caption mr-2">{{ currentName }}님, 환영합니다.</span>
      <v-avatar size=30>
         <v-img v-if="userProfile !== ''" v-bind:src="userProfile"></v-img>
         <v-img v-else src="@/assets/account.png"></v-img>
      </v-avatar>
        <v-btn v-on:click="logout()" color="grey" icon>
          <v-img src="@/assets/logout.png"></v-img>
        </v-btn>
      </v-row>
    </v-toolbar>
  </v-card>
</template>

<style scoped>
.v-card {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>

<script>
import Store from '@/store'
import Router from '@/router'
import Authentication from '@/store/modules/auth'

export default {
  name: 'ToolBar',
  data: () => ({
    username: '',
    userProfile: ''
  }),
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
  mounted () {
    Store
      .dispatch('USER_LOAD', Authentication.getters.getToken())
      .then(user => {
        this.username = user.name
      })
      .catch(err => console.log(err))
  },
  computed: {
    currentName () {
      return this.username
    }
  },
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
