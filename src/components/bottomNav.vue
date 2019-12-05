<template>
    <v-app>
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
    </v-app>
</template>

<script>
export default {
  name: 'bottomNav',
  data () {
    return {
      bottomNav: 'recent'
    }
  }
}
</script>
