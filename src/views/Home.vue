<template>
  <v-app>
    <ToolBar></ToolBar>
    <v-container>
      <router-view></router-view>
      <v-row align="center" justify="center">
        <v-col xs="12" sm="7" md="6" lg="5" xl2="2">
          <v-card flat shaped="true">
            <v-card-text>
              <v-row class="mb-4" align="center">
                <v-avatar color="pink lighten-1" class="mr-4"></v-avatar>
                <strong class="title">My Pet {{ n }}</strong>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>account_circle</v-icon>
                </v-btn>
              </v-row>
              <v-img src="@/assets/dog.png" width="30%" class="mx-auto"></v-img>
              <div>
                <h3 class="title font-weight-light mt-3 text-center">Name</h3>
                <p class="text-center mt-2" grey--text>age:</p>
                <p class="text-center" grey--text>weight:</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <BottomNav></BottomNav>
  </v-app>
</template>

<script>
import ToolBar from './components/ToolBar'
import BottomNav from './components/BottomNav'

export default {
  name: 'Home',
  components: {
    ToolBar,
    BottomNav
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
