<template>
  <v-container flat class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col xs="12" sm="6" md="4" lg="3" xl2="2">
        <v-card flat class="mx-auto">
          <v-img src="@/assets/logo.png" class="mx-auto" aspect-ratio="1" width="70%"></v-img>
          <v-form class="login" @submit.prevent="login">
            <v-card-text>
              <v-text-field required v-model="ID" label="ID" name="id" type="text" />
              <v-text-field required v-model="password" id="password" label="Password" name="password" type="password" />
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn v-on:click="login()" type="submit" text large color="pink lighten-1">Login</v-btn>
              <v-btn to="/account/signup" text large color="pink lighten-1">Sign Up</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Store from '@/store'
import Router from '@/router'

export default {
  name: 'Login',
  props: {
    source: String
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
    }
  ],
  data () {
    return {
      ID: '',
      password: ''
    }
  },
  methods: {
    login () {
      let ID = this.ID
      let password = this.password
      Store
        .dispatch('AUTH_REQUEST', { user: { ID: ID, password: password } })
        .then(token => Router.go('/'))
        .catch(err => console.log(err))
    }
  }
}
</script>
