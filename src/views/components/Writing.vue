<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col xs="12" sm="7" md="6" lg="5" xl2="2">
        <v-file-input
          multiple
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Put up a picture of your pet."
          prepend-icon="camera"
          label="Picture"
        ></v-file-input>
        <v-card flat class="mx-auto">
          <v-card-text>
            <div>Writing</div>
            <v-textarea flat solo name="input-7-4" label="text" placeholder="여기에 간단히 설명을 적어주세요!"></v-textarea>
            <v-row justify="end">
              <v-btn text large color="pink lighten-1">Submit</v-btn>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
