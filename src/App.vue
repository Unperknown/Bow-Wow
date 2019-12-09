<template>
    <v-app>
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
      <v-row align="center" justify="end">
      <span class="caption">OOO님, 환영합니다.</span>
      <v-avatar>
         <img src="https://randomuser.me/api/portraits/women/81.jpg">
      </v-avatar>
        <v-btn color="grey"
    icon>
    <v-img src="@/assets/logout.png">
    </v-img>
  </v-btn>
      </v-row>
    </v-toolbar>
  </v-card>
    </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
