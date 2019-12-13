<template>
  <v-container>
    <v-row align="start" justify="end">
      <v-btn class="mx-2" fab dark large color="pink" icon @click="dialogTime = !dialogTime">
        <v-icon>add_circle</v-icon>
      </v-btn>
    </v-row>
    <v-dialog v-model="dialogTime" max-width="300px">
      <v-time-picker v-model="pickerTime" v-on:change="updateTime($event)" ampm-in-title color="pink lighten-1"></v-time-picker>
      <v-btn color="pink lighten-1" @click="dialogTime = false; checkedNames.push(pickerTime); dialogAlert=!dialogAlert;">설정</v-btn>
    </v-dialog>
    <v-card max-width="475" flat class="mx-auto">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>먹이알림</v-list-item-title>
            <v-list-item-subtitle>상단 '+' 버튼으로 알람을 추가하세요.</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list subheader two-line flat>
        <v-subheader>알람 선택</v-subheader>

        <v-list-item-group v-model="settings" multiple>
          <v-switch
            class="ml-4"
            color="pink lighten-1"
            value="6:30"
            v-model="checkedNames"
            label="6:30"
          ></v-switch>
          <v-switch
            class="ml-4"
            color="pink lighten-1"
            value="11:30"
            v-model="checkedNames"
            label="11:30"
          ></v-switch>
          <v-switch
            class="ml-4"
            color="pink lighten-1"
            value="15:30"
            v-model="checkedNames"
            label="15:30"
          ></v-switch>
          <v-switch
            class="ml-4"
            color="pink lighten-1"
            value="18:00"
            v-model="checkedNames"
            label="18:00"
          ></v-switch>
          <br />
          <v-row justify="end">
            <v-btn text large color="pink lighten-1" @click="dialogAlert=!dialogAlert">알림설정하기</v-btn>
          </v-row>
          <v-flex row-wrap justify-center>
            <v-row>
              <v-dialog v-model="dialogAlert" max-width="400px">
                <v-card>
                  <v-col justify="center">
                    <v-card-title class="font-weight-bold">먹이알림설정</v-card-title>
                    <v-card-subtitle>{{ checkedNames }}에 알림 설정이 완료되었습니다.</v-card-subtitle>
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
</template>

<script>
export default {
  name: 'Alarm',
  data () {
    return {
      checkedNames: [],
      dialogTime: false,
      dialogAlert: false,
      pickerTime: null,

      settings: []
    }
  },
  methods: {
    updateTime (e) {
      console.log(e)
      this.pickerTime = e
    }
  }
}
</script>
