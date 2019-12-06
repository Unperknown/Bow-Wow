<template>
<v-app id="app">
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
    </v-toolbar>
  </v-card>
<v-comtainer>
  <v-row
    align="center"
    justify="center">
    <v-col
      xs="12"
      sm="7"
      md="6"
      lg="5"
      xl2="2"
    >
      <v-file-input
      multiple
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Put up a picture of your pet."
    prepend-icon="camera"
    label="Picture"
  ></v-file-input>
      <v-card
        class="mx-auto">
        <v-card-text>
      <div>Writing</div>
      <v-textarea
          solo
          name="input-7-4"
          label="text"
        ></v-textarea>
        <v-row justify="end">
          <v-btn text large color="pink lighten-1">Submit</v-btn>
        </v-row>
    </v-card-text>
      </v-card>
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
      </v-col>
   </v-row>
  </v-comtainer>
  </v-app>
</template>

<script>
export default {
  name: 'Writing',
  data () {
    return {
      bottomNav: 'recent'
    }
  }
}
</script>
