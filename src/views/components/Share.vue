<template>
  <v-container>
    <v-row class="fixed" align="start" justify="end">
      <v-btn to="/share/write" class="mx-2" fab dark large color="pink" icon>
        <v-icon>add_circle</v-icon>
      </v-btn>
    </v-row>
    <v-row align="center" justify="center">
      <v-col xs="12" sm="7" md="6" lg="5" xl2="2">
        <v-card v-for="(article, index) in articles" :key="index" class="mx-auto mb-12">
          <v-list-item>
            <v-list-item-avatar color="white" size=40>
              <v-img v-if="article.userProfile !== ''" v-bind:src="article.userProfile"></v-img>
              <v-img v-else src="@/assets/account.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1 font-weight-bold">{{ article.username }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-carousel hide-delimiters>
            <v-carousel-item v-for="(path, index) in article.imagePaths" :key="index" :src="path.src"></v-carousel-item>
          </v-carousel>
          <v-btn v-if="article.likes === []" icon v-on:click="article.liked = changeLikes(article) === 'Liked Successfully' ? !article.liked : article.liked"
      color="grey lighten-1">
            <v-icon>favorite</v-icon>
          </v-btn>
          <v-btn v-else icon v-on:click="article.liked = changeLikes(article) === 'Liked Successfully' ? !article.liked : article.liked"
      color="pink lighten-1">
            <v-icon>favorite</v-icon>
          </v-btn>
          <span class="caption">{{ getLikes(article) }}</span>
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
import axios from 'axios'
import Authentication from '@/store/modules/auth'

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
      articles: [],
      currentUser: ''
    }
  },
  mounted () {
    Store
      .dispatch('SHARE_LOAD')
      .then(articles => {
        for (let i in articles) {
          articles[i].liked = false
        }

        this.articles = articles
      })
      .catch(err => console.log(err))
    Store
      .dispatch('USER_LOAD', Authentication.getters.getToken())
      .then(user => {
        this.currentUser = user.name
      })
      .catch(err => console.log(err))
  },
  methods: {
    getLikes (article) {
      if (article.liked) {
        return article.likes.length + 1
      }

      return article.likes.length
    },
    changeLikes (article) {
      console.log(article)
      if (article.likes.includes(this.currentUser)) {
        console.log('You already liked')
        return
      }

      axios.post('/api/share/liked', { share: article })
        .then(resp => {
          let message = resp.data.message
          if (message === 'SHARE_SUCCESS') {
            console.log('Liked Successfully')
          } else {
            console.log('Liked Failed')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
