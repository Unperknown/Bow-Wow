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
  <v-row align="start" justify="end">
    <v-btn  class="mx-2" fab dark large color="pink" icon>
    <v-icon>
    add_circle
  </v-icon>
  </v-btn>
  </v-row>
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
      <v-card
    flat class="mx-auto"
  >
    <v-list-item>
      <v-list-item-avatar color="white">
        <v-icon icon>
          account_circle
        </v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">My Pet</v-list-item-title>
        <v-list-item-subtitle>by Bow-Wow</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
    <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-divider></v-divider>
    <v-card-text>
     Bow-Wow SNS
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
  name: 'SocialNetwork',
  data () {
    return {
      bottomNav: 'recent',

      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },

        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        }
      ]
    }
  }
}
</script>
