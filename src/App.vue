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
        <v-btn color="grey"
    icon>
    <v-img src="@/assets/logout.png">
    </v-img>
  </v-btn>
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
        <v-list-item>
          <template v-slot:default="{ active, toggle }">
            <v-list-item-action>
              <v-checkbox
                v-model="active"
                color="pink lighten-1"
                @click="toggle"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>6 : 30</v-list-item-title>
              <v-list-item-subtitle>오전</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active, toggle }">
            <v-list-item-action>
              <v-checkbox
                v-model="active"
                color="pink lighten-1"
                @click="toggle"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>11 : 00</v-list-item-title>
              <v-list-item-subtitle>오전</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active, toggle }">
            <v-list-item-action>
              <v-checkbox
                v-model="active"
                color="pink lighten-1"
                @click="toggle"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>6 : 30</v-list-item-title>
              <v-list-item-subtitle>오후</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active, toggle }">
            <v-list-item-action>
              <v-checkbox
                v-model="active"
                color="pink lighten-1"
                @click="toggle"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>8 : 00</v-list-item-title>
              <v-list-item-subtitle>오후</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
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

<script>
export default {
  name: 'App',
  data () {
    return {
      bottomNav: 'recent',

      dialogTime: false,

      pickerTime: null
    }
  },

  data1: () => ({
    settings: []
  })
}
</script>
