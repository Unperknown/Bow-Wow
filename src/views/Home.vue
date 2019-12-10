<template>
  <v-app>
    <v-container>
      <router-view></router-view>
      <v-row align="center" justify="center">
        <v-col xs="12" sm="7" md="6" lg="5" xl2="2">
          <v-card>
            <v-card-text>
              <v-row class="mb-4 ml-2" align="center">
                <h2 class="headline font-weight-bold text-center">나의 반려동물</h2>
              </v-row>
              <v-img src="@/assets/dog.png" width="30%" class="mx-auto"></v-img>
              <div>
                <h3 class="title font-weight-bold mt-3 text-center">{{ petName }}</h3>
                <p class="text-center mt-2 mb-0" grey--text>{{ petAge }}살</p>
                <p class="text-center" grey--text>{{ petWeight }}kg</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Store from '@/store'
import Authentication from '@/store/modules/auth'

export default {
  name: 'Home',
  data: () => ({
    pet: {}
  }),
  mounted () {
    Store
      .dispatch('USER_LOAD', Authentication.getters.getToken())
      .then(user => {
        this.pet = user.petsInfo
      })
      .catch(err => console.log(err))
  },
  computed: {
    petName () {
      return this.pet.name
    },
    petAge () {
      return this.pet.age
    },
    petWeight () {
      return this.pet.weight
    }
  },
  links: [
    {
      name: 'Home',
      to: '/'
    },
    {
      name: 'Login',
      to: '/account/signin'
    },
    {
      name: 'Register',
      to: '/account/signup'
    },
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
      name: 'Recommend',
      to: '/recommend'
    }
  ]
}
</script>
