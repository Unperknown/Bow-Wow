<template>
<v-app id="app">
<v-card
    color="grey lighten-4"
    flat
    height="60px"
    tile
    mb-0
  >
    <v-toolbar dense flat>
      <v-app-bar-nav-icon>
        <v-img src="@/assets/logo(2).png" width="30px">
        </v-img>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Bow-Wow</v-toolbar-title>
    </v-toolbar>
  </v-card>
<v-comtainer>
  <v-row
    align="center"
    justify="center">
    <v-col
      xs="12"
      sm="7"
      md="6"
      lg="5"
      xl2="2"
    >
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
          <v-img src="@/assets/dog.png" width="30%" class="mx-auto">
          </v-img>
          <div>
          <h3 class="title font-weight-light mt-3 text-center">Name</h3>
          <p class="text-center mt-2" grey--text>age:</p>
          <p class="text-center" grey--text>weight:</p>
        </div>
        </v-card-text>
      </v-card>
      <v-bottom-navigation fixed="true"
      :value="activeBtn"
      grow
      color="pink lighten-1"
       >
        <v-btn>
          <span>실종</span>
          <v-icon>scatter_plot</v-icon>
        </v-btn>

        <v-btn>
          <span>SNS</span>
          <v-icon>mode_comment</v-icon>
        </v-btn>

        <v-btn>
          <span>홈</span>
          <v-icon>home</v-icon>
        </v-btn>

        <v-btn>
          <span>동물관리</span>
          <v-icon>healing</v-icon>
        </v-btn>

          <v-btn>
            <span>추천</span>
            <v-icon>thumb_up_alt</v-icon>
          </v-btn>

        </v-bottom-navigation>
      </v-col>
   </v-row>
  </v-comtainer>
  </v-app>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      bottomNav: 'recent'
    }
  }
}
</script>
