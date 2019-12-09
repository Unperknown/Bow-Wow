<template>
  <v-container>
    <v-row mt-5>
      <v-col order="first">
        <v-hover v-slot:default="{ hover }">
          <v-card class="pa-2 mx-auto" :elevation="hover ? 12 : 2" height="200" max-width="200">
            <v-row justify="center">
              <v-icon x-large light>apartment</v-icon>
            </v-row>
            <v-card-text class="my-4 text-center title">병원찾기</v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover v-slot:default="{ hover }">
          <v-card to="/pets/clinic" class="pa-2 mx-auto" :elevation="hover ? 12 : 2" height="200" max-width="200">
            <v-row justify="center">
              <v-icon x-large light>date_range</v-icon>
            </v-row>
            <v-card-text class="my-4 text-center title">진료예약</v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col order="last">
        <v-hover v-slot:default="{ hover }">
          <v-card to="/pets/alarm" class="pa-2 mx-auto" :elevation="hover ? 12 : 2" height="200" max-width="200">
            <v-row justify="center">
              <v-icon x-large light>access_alarms</v-icon>
            </v-row>
            <v-card-text class="my-4 text-center title">먹이알림</v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PetCare',
  data () {
    return {
      bottomNav: 'recent'
    }
  },
  links: [
    {
      name: 'Alarm',
      to: '/pets/alarm'
    },
    {
      name: 'Clinic',
      to: '/pets/clinic'
    },
    {
      name: 'Clinic',
      to: '/pets/clinic'
    }
  ]
}
</script>
