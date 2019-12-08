<template>
  <v-container>
    <v-row align="start" justify="end">
      <v-btn class="mx-2" fab dark large color="pink" icon @click="dialogTime = !dialogTime">
        <v-icon>add_circle</v-icon>
      </v-btn>
    </v-row>
    <v-dialog v-model="dialogTime" max-width="300px">
      <v-time-picker v-model="pickerTime" ampm-in-title color="pink lighten-1"></v-time-picker>
      <v-btn color="pink lighten-1" @click="dialogTime = false">Submit</v-btn>
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
          <v-list-item>
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-checkbox v-model="active" color="pink lighten-1" @click="toggle"></v-checkbox>
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
                <v-checkbox v-model="active" color="pink lighten-1" @click="toggle"></v-checkbox>
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
                <v-checkbox v-model="active" color="pink lighten-1" @click="toggle"></v-checkbox>
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
                <v-checkbox v-model="active" color="pink lighten-1" @click="toggle"></v-checkbox>
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
</template>

<script>
export default {
  name: 'Alarm',
  data() {
    return {
      dialogTime: false,
      pickerTime: null
    }
  }
}
</script>
