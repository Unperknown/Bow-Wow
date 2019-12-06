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
                <v-btn text large color="pink lighten-1">Login</v-btn>
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
export default {
  name: 'Login',
  props: {
    source: String
  },
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
      }
    ]
  })
}
</script>
