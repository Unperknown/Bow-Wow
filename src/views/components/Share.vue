<template>
  <v-container>
    <v-row class="fixed" align="start" justify="end">
      <v-btn to="/share/write" class="mx-2" fab dark large color="pink" icon>
        <v-icon>add_circle</v-icon>
      </v-btn>
    </v-row>
    <v-row align="center" justify="center">
      <v-col xs="12" sm="7" md="6" lg="5" xl2="2">
        <v-card v-for="(article, i) in articles" :key="i" class="mx-auto mb-12">
          <v-list-item>
            <v-list-item-avatar color="white" size=40>
              <v-img src="@/assets/profile.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1 font-weight-bold">{{ article.username }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-carousel hide-delimiters>
            <v-carousel-item v-for="(image,i) in article.images" :key="i" :src="image.src"></v-carousel-item>
          </v-carousel>
          <v-btn v-if="article.likes === 0" icon v-on:click="article.likes += 1"
      color="grey lighten-1">
            <v-icon>favorite</v-icon>
          </v-btn>
          <v-btn v-else icon v-on:click="article.likes += 1"
      color="pink lighten-1">
            <v-icon>favorite</v-icon>
          </v-btn>
          <span class="caption">{{ article.likes }}</span>
          <v-divider></v-divider>
          <v-card-text>{{ article.written }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.fixed {
  position: fixed;
  right: 10px;
  top: 50px;
  z-index: 999;
}
</style>

<script>
import Store from '@/store'

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
      articles: []
    }
  },
  mounted () {
    Store
      .dispatch('SHARE_LOAD')
      .then(articles => {
        this.articles = articles
      })
      .catch(err => console.log(err))
  }
}
</script>
