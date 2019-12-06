<template>
<v-app id="app">
<v-card
    color="grey lighten-4"
    flat
    height="50px"
    tile
    mb-0
  >
    <v-toolbar dense flat>
      <v-app-bar-nav-icon>
        <v-img src="@/assets/logo(2).png" width="30px">
        </v-img>
      </v-app-bar-nav-icon>
      <v-toolbar-title>Bow-Wow</v-toolbar-title>
      <v-row justify="end">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-row>
    </v-toolbar>
  </v-card>
<v-comtainer>
  <v-row no-gutters>
      <v-col order="last">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          First, but last
        </v-card>
      </v-col>
      <v-col>
        <v-card
          class="pa-2"
          outlined
          tile
        >
          Second, but unordered
        </v-card>
      </v-col>
      <v-col order="first">
        <v-hover v-slot:default="{ hover }">
          <v-card
          class="pa-2"
          :elevation="hover ? 12 : 2"
          outlined
          tile
        >
          Third, but first
        </v-card>
        </v-hover>
      </v-col>
    </v-row>
      <v-hover v-slot:default="{ hover }">
        <v-card
          :elevation="hover ? 12 : 2"
          class="mx-auto"
          height="300"
          max-width="300"
        >
          <v-card-text class="my-4 text-center title">Hover over me!</v-card-text>
        </v-card>
      </v-hover>
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
  name: 'App',
  data () {
    return {
      bottomNav: 'recent'
    }
  }
}
</script>
