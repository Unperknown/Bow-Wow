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
  <v-container>
    <v-row align="start" justify="end">
    <v-btn class="mx-2" fab dark large color="pink"
    icon
    @click="dialogTime = !dialogTime">
    <v-icon>
    add_circle
  </v-icon>
  </v-btn>
  </v-row>
  <v-dialog v-model="dialogTime" max-width="300px">
    <v-time-picker v-model="pickerTime" ampm-in-title color="pink lighten-1"></v-time-picker>
    <v-btn color="pink lighten-1" @click="dialogTime = false">Submit</v-btn>
  </v-dialog>
  <v-card
    max-width="475"
    flat class="mx-auto"
  >
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>먹이알림</v-list-item-title>
          <v-list-item-subtitle>상단 '+' 버튼으로 알람을 추가하세요.</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list
      subheader
      two-line
      flat
    >
      <v-subheader>알람 선택</v-subheader>

      <v-list-item-group
        v-model="settings"
        multiple
      >
      <v-switch
      class="ml-4"
      color="pink lighten-1" value="6:30 AM"
      v-model="checkedNames" label="6:30 AM">
      </v-switch>
      <v-switch
      class="ml-4"
      color="pink lighten-1" value="11:30 AM"
      v-model="checkedNames" label="11:30 AM">
      </v-switch>
      <v-switch
      class="ml-4"
      color="pink lighten-1" value="3:30 PM"
      v-model="checkedNames" label="3:30 PM">
      </v-switch>
      <v-switch
      class="ml-4"
      color="pink lighten-1" value="6:00 PM"
      v-model="checkedNames" label="6:00 PM">
      </v-switch>
      <br>
      <v-row justify="center">
        <span class="subtitle-2">설정할 알림: {{ checkedNames }}</span>
      </v-row>
      <v-row justify="end">
        <v-btn text large color="pink lighten-1" @click="dialogAlert=!dialogAlert">알림설정하기</v-btn>
      </v-row>
      <v-flex row-wrap justify-center>
    <v-row>
      <v-dialog v-model="dialogAlert" max-width="400px">
    <v-card>
      <v-col justify="center">
      <v-card-title class="font-weight-bold">먹이알림설정</v-card-title>
      <v-card-subtitle>알림 설정이 완료되었습니다.</v-card-subtitle>
      </v-col>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text large color="pink lighten-1" @click="dialogAlert= false">확인</v-btn>
        </v-card-actions>
    </v-card>
  </v-dialog>
    </v-row>
  </v-flex>
      </v-list-item-group>
    </v-list>
  </v-card>
  </v-container>
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
<style>
.row {
margin-right: 0 !important;
}
</style>
<script>
export default {
  name: 'Alarm',
  data () {
    return {
      checkedNames: [],
      bottomNav: 'recent',

      dialogTime: false,

      dialogAlert: false,

      pickerTime: null
    }
  },

  data1: () => ({
    settings: []
  })
}
</script>
