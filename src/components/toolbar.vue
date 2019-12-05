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
      <v-row justify="end">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-row>
    </v-toolbar>
  </v-card>
    </v-app>
</template>

<script>
export default {
  name: 'toolbar'
}
</script>