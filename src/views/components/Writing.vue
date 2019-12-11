<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col xs="12" sm="7" md="6" lg="5" xl2="2">
        <v-card class="mx-auto pt-2 pl-2 pr-2 pb-2">
          <v-file-input v-model="imageStorage" multiple name="images" v-on:change="uploadImage($event)" prepend-icon="camera" accept="image/png, image/jpeg, image/bmp" show-size counter placeholder="회원 님이 공유할 반려동물 사진을 올려주세요!" label="사진"></v-file-input>
          <v-card-text>
            <div>글</div>
            <v-textarea v-model="written" flat solo name="input-7-4" label="text" placeholder="회원 님이 공유할 문구를 간단히 적어주세요!"></v-textarea>
            <v-row justify="end">
              <v-btn v-on:click="submit()" text large color="pink lighten-1">올리기</v-btn>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Store from '@/store'
import Router from '@/router'
import Authentication from '@/store/modules/auth'
import axios from 'axios'

export default {
  name: 'Writing',
  data: () => ({
    imageStorage: [],

    username: '',
    userProfile: '',
    imagePaths: [],
    written: '',
    imageRules: [
      value => !value || '먼저 사진을 올려주세요!'
    ]
  }),
  links: [
    {
      name: 'Share',
      to: '/share'
    }
  ],
  mounted () {
    Store
      .dispatch('USER_LOAD', Authentication.getters.getToken())
      .then(user => {
        this.username = user.name
        this.userProfile = user.imagePath
      })
      .catch(err => console.log(err))
  },
  methods: {
    uploadImage (e) {
      console.log(e)
      const formData = new FormData()

      for (let i in e) {
        console.log(e[i])
        formData.append('images', e[i])
      }

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      axios.post('/api/upload/share', formData, config)
        .then(resp => {
          console.log(resp.data.imagePaths)

          this.imagePaths = resp.data.imagePaths
        })
        .catch(err => {
          console.log(err)
        })
    },
    submit () {
      let share = {
        username: this.username,
        userProfile: this.userProfile,
        imagePaths: this.imagePaths,
        written: this.written,
        likes: 0
      }

      Store
        .dispatch('SHARE_CREATE', { share: share })
        .then(share => Router.push('/share'))
        .catch(err => console.log(err))
    }
  }
}
</script>
