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
      <v-row justify="end">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-row>
    </v-toolbar>
  </v-card>
  <v-card
    flat class="mx-auto"
    max-width="500"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">병원 정보</div>
        <v-list-item-title class="headline mb-1">Bow-wow 동물병원</v-list-item-title>
        <v-list-item-subtitle>상세설명</v-list-item-subtitle>
        <v-list-item-text class="caption">주소</v-list-item-text>
        <v-list-item-text class="caption grey--text">광주 광산구 상무대로 312</v-list-item-text>
        <v-list-item-text class="caption">전화번호</v-list-item-text>
        <v-list-item-text class="caption grey--text">062-949-6800</v-list-item-text>
      </v-list-item-content>

      <v-list-item-avatar
        size="80"
        color="grey"
      >
      <v-img src="@/assets/logo(2).png">
      </v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <v-btn text @click="dialogDate = !dialogDate">Date</v-btn>
      <v-btn text  @click="dialogTime = !dialogTime">Time</v-btn>
    </v-card-actions>
  </v-card>
  <v-card-action align="center">
    <v-btn text large color="pink lighten-1">진료예약</v-btn>
  </v-card-action>
  <v-dialog v-model="dialogDate" max-width="300px">
    <v-date-picker v-model="pickerDate" color="pink lighten-1"></v-date-picker>
    <v-btn color="pink lighten-1" @click="dialogDate = false">Submit</v-btn>
  </v-dialog>
  <v-dialog v-model="dialogTime" max-width="300px">
    <v-time-picker v-model="pickerTime" ampm-in-title color="pink lighten-1"></v-time-picker>
    <v-btn color="pink lighten-1" @click="dialogTime = false">Submit</v-btn>
  </v-dialog>
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
  name: 'Clinic.vue',
  data () {
    return {
      bottomNav: 'recent',

      dialogDate: false,

      dialogTime: false,

      pickerDate: new Date().toISOString().substr(0, 10),

      pickerTime: null
    }
  }
}
</script>
