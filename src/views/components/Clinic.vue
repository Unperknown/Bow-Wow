<template>
  <v-container>
    <v-card flat class="mx-auto" max-width="500">
      <v-list-item-group>
        <v-list-item>
          <v-list-item-content>
            <div class="overline mb-4">병원 정보</div>
            <v-list-item-title class="headline mb-1">Bow-wow 동물병원</v-list-item-title>
            <v-list-item-subtitle>상세설명</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar size="80" color="grey">
            <v-img src="@/assets/logo(2).png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="caption">주소</v-list-item-title>
            <v-list-item-subtitle class="caption grey--text">광주 광산구 상무대로 312</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="caption">전화번호</v-list-item-title>
            <v-list-item-subtitle class="caption grey--text">062-949-6800</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-card-actions>
        <v-btn text @click="dialogDate = !dialogDate">날짜</v-btn>
        <v-btn text @click="dialogTime = !dialogTime">시간</v-btn>
        <v-spacer></v-spacer>
        <v-btn text large color="pink lighten-1" @click="dialogAlert=!dialogAlert">진료예약</v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="dialogDate" max-width="300px">
      <v-date-picker v-model="pickerDate" v-on:change="updateDate($event)" color="pink lighten-1"></v-date-picker>
      <v-btn color="pink lighten-1" @click="dialogDate = false">설정</v-btn>
    </v-dialog>
    <v-dialog v-model="dialogTime" max-width="300px">
      <v-time-picker v-model="pickerTime" v-on:change="updateTime($event)" ampm-in-title color="pink lighten-1"></v-time-picker>
      <v-btn color="pink lighten-1" @click="dialogTime = false">설정</v-btn>
    </v-dialog>
    <v-flex row-wrap justify-center>
      <v-row>
        <v-dialog v-model="dialogAlert" max-width="400px">
          <v-card>
            <v-row justify="center">
              <v-card-title class="font-weight-bold">Bow-Wow 동물병원</v-card-title>
              <v-card-subtitle>{{ [pickerDate, pickerTime] }}에 진료 예약이 완료되었습니다.</v-card-subtitle>
            </v-row>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text large color="pink lighten-1" @click="dialogAlert= false">확인</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-flex>
  </v-container>
</template>

<style>
.row {
  margin-right: 0 !important;
}
</style>

<script>
export default {
  name: 'Clinic',
  data () {
    return {
      dialogDate: false,
      dialogTime: false,
      dialogAlert: false,
      pickerDate: new Date().toISOString().substr(0, 10),
      alert: true,
      pickerTime: null
    }
  },
  methods: {
    updateDate (e) {
      this.pickerDate = e
    },
    updateTime (e) {
      this.pickerTime = e
    }
  }
}
</script>
