<template>
  <v-app id="inspire">
    <v-content>
      <v-container flat class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col xs="12" sm="6" md="4" lg="3" xl2="2">
            <v-card flat class="mx-auto">
              <v-img src="@/assets/logo.png" class="mx-auto" aspect-ratio="1" width="70%"></v-img>
              <v-card-text>
                <v-form>
                  <v-text-field label="ID" name="id" type="text" />

                  <v-text-field id="password" label="Password" name="password" type="password" />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn v-on:click="getPosts()" text large color="pink lighten-1">Login</v-btn>
                <v-btn to="/account/signup" text large color="pink lighten-1">Sign Up</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios'

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
      email: '',
      password: ''
    }
  },
  methods: {
    getPosts () {
      return axios
        .post(
          'http://localhost:3000/api/user.json',
          { email: this.email, password: this.password },
          {
            headers: {
              'Content-type': 'application/json'
            }
          }
        )
        .then(response => {
          console.log('email: ' + this.email)
          console.log('password: ' + this.password)
        })
        .catch(error => {
          console.log('error: ' + error)
        })
    }
  }
}
</script>
