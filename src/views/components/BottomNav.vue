<template>
  <v-bottom-navigation fixed grow color="pink lighten-1">
    <v-btn to="/share">
      <span>SNS</span>
      <v-icon>mode_comment</v-icon>
    </v-btn>

    <v-btn to="/pets">
      <span>동물관리</span>
      <v-icon>healing</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: 'BottomNav',
  data () {
    return {
      bottomNav: 'recent'
    }
  },
  links: [
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
      name: 'recommend',
      to: '/recommend'
    }
  ]
}
</script>
