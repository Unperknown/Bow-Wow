<template>
<v-app id="app">
  <v-container
    flat class="fill-height"
    fluid>
    <v-row
      align="center"
      justify="center">
      <v-col
        xs="12"
            sm="6"
            md="4"
            lg="3"
            xl2="2"
        >
         <v-card
    flat class="mx-auto"
    max-width="500"
  >
  <v-img src="@/assets/logo.png" class="mx-auto" aspect-ratio="1" width="70%">
            </v-img>
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="pink lighten-1"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field
            v-model="id"
            :counter="10"
            :rules="nameRules"
            label="Id"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            Enter Id use for Bow-Wow
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field
            v-model="password"
            :counter="10"
            :rules="nameRules"
            label="Password"
            type="password"
          ></v-text-field>
          <v-text-field
            v-model="password2"
            :counter="10"
            :rules="nameRules"
            label="Confirm Password"
            type="password"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-4 text-center">
          <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>
          <v-slider
                    v-model="slider"
                    min="0"
                    max="30"
                    label="Age"
                      thumb-label
                ></v-slider>
          <v-slider
                    v-model="slider"
                    min="0"
                    max="50"
                    label="Weight"
                    thumb-label
                ></v-slider>
                 <v-file-input label="Upload profile picture"></v-file-input>
        </div>
      </v-window-item>

      <v-window-item :value="4">
        <div class="pa-4 text-center">
          <h3 class="title font-weight-light mb-2">Welcome to Bow-Wow</h3>
          <span class="caption grey--text">Thanks for signing up!</span>
          <v-btn text large color="pink lighten-1">Go Login</v-btn>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        text large color="pink lighten-1"
        @click="step--"
      >
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === 4"
        text large color="pink lighten-1"
        depressed
        @click="step++"
      >
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
      </v-col>
    </v-row>
  </v-container>
  <v-footer>
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</v-app>
</template>

<script>
export default {
  name: 'Signup',
  data: () => ({
    valid: false,

    id: '',

    password: '',

    password2: '',

    name: '',

    nameRules: [
      v => !!v || '필수 항목 입니다.',
      v => v.length <= 10 || '10자리 이내로 입력해주세요.'
    ],

    step: 1
  }),
  computed: {
    currentTitle () {
      switch (this.step) {
        case 1: return 'Sign-up'
        case 2: return 'Create a password'
        case 3: return 'About pets'
        default: return 'Account created'
      }
    }
  }
}
</script>
