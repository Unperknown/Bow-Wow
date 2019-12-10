<template>
  <v-container flat class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col xs="12" sm="6" md="4" lg="3" xl2="2">
        <v-card flat class="mx-auto" max-width="500">
          <v-img src="@/assets/logo.png" class="mx-auto" aspect-ratio="1" width="70%"></v-img>
          <v-card-title class="title font-weight-regular justify-space-between">
            <span>{{ currentTitle }}</span>
          </v-card-title>
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-card-text>
                <v-text-field v-model="ID" :counter="10" :rules="nameRules" label="아이디" required></v-text-field>
                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="이름" required></v-text-field>
                <v-file-input show-size label="회원 님의 프로필 사진이 있다면 올려주세요!"></v-file-input>
              </v-card-text>
            </v-window-item>
            <v-window-item :value="2">
              <v-card-text>
                <v-text-field
                  v-model="password"
                  :counter="16"
                  :rules="passwordRules"
                  label="비밀번호"
                  type="password"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="confirmPassword"
                  :counter="16"
                  :rules="passwordRules"
                  label="비밀번호 확인"
                  type="password"
                  required
                ></v-text-field>
              </v-card-text>
            </v-window-item>
            <v-window-item :value="3">
              <div class="pa-4 text-center">
                <v-text-field
                  v-model="petName"
                  :counter="10"
                  label="반려동물 이름"
                ></v-text-field>
                <v-slider v-model="petAge" min="0" max="30" label="반려동물 나이" thumb-label></v-slider>
                <v-slider v-model="petWeight" min="0" max="50" label="반려동물 무게" thumb-label></v-slider>
                <v-file-input show-size label="반려동물을 대표할 프로필 사진을 올려주세요!"></v-file-input>
              </div>
            </v-window-item>
            <v-window-item :value="4">
              <div class="pa-4 text-center">
                <v-btn v-on:click="register()" text large color="pink lighten-1">로그인으로 돌아가기</v-btn>
              </div>
            </v-window-item>
          </v-window>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn :disabled="step === 1" text large color="pink lighten-1" @click="step--">이전</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="isNotCompleted"
              text
              large
              color="pink lighten-1"
              depressed
              @click="step++"
            >다음</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Store from '@/store'
import Router from '@/router'

export default {
  name: 'Register',
  data: () => ({
    step: 1,

    ID: '',
    name: '',
    password: '',
    confirmPassword: '',

    petName: '',
    petAge: 0,
    petWeight: 0,

    nameRules: [
      v => !!v || '필수 항목 입니다.',
      v => (v.length >= 1 && v.length <= 10) || '1 ~ 10자리 이내로 입력해주세요.'
    ],
    passwordRules: [
      v => !!v || '필수 항목 입니다.',
      v => (v.length >= 8 && v.length <= 16) || '8 ~ 16자리 이내로 입력해주세요.'
    ]
  }),
  computed: {
    currentTitle () {
      switch (this.step) {
        case 1:
          return '회원 님을 식별할 정보가 필요해요!'
        case 2:
          return `이제 ${this.name} 님을 지켜줄 비밀번호를 설정합시다.`
        case 3:
          return `${this.name} 님이 키우시는 반려동물이 있다면 알려주세요!`
        default:
          return `${this.name} 님, 회원이 되신 것을 환영합니다!`
      }
    },
    isNotCompleted () {
      switch (this.step) {
        case 1:
          return (this.ID === '' || this.name === '')
        case 2:
          return (this.password === '' || this.confirmPassword === '') || this.password !== this.confirmPassword
        case 4:
          return true
        default:
          return false
      }
    }
  },
  links: [
    {
      name: 'Login',
      to: '/account/signin'
    }
  ],
  methods: {
    register () {
      let user = {
        ID: this.ID,
        name: this.name,
        password: this.password,
        petInfo: {
          name: this.petName,
          age: this.petAge,
          weight: this.petWeight
        }
      }

      Store
        .dispatch('USER_CREATE', user)
        .then(user => Router.push('/account/signin'))
        .catch(err => console.log(err))
    }
  }
}
</script>
