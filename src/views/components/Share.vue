<template>
  <v-container>
    <v-row align="start" justify="end">
      <v-btn to="/share/write" class="mx-2" fab dark large color="pink" icon>
        <v-icon>add_circle</v-icon>
      </v-btn>
    </v-row>
    <v-row align="center" justify="center">
      <v-col xs="12" sm="7" md="6" lg="5" xl2="2">
        <v-card flat class="mx-auto">
          <v-list-item>
            <v-list-item-avatar color="white">
              <v-icon icon>account_circle</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">My Pet</v-list-item-title>
              <v-list-item-subtitle>by Bow-Wow</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-carousel hide-delimiters>
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
          </v-carousel>
          <v-btn icon>
            <v-icon>favorite</v-icon>
          </v-btn>
          <v-divider></v-divider>
          <v-card-text>Bow-Wow SNS</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Share',
  links: [
    {
      name: 'Write',
      to: '/share/write'
    }
  ],
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
