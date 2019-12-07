<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
    <div>
      <v-row align="center" justify="center">
        <v-col xs="12" sm="6" md="4" lg="3" xl2="2">
          <v-img src="@/assets/logo.png" class="mx-auato" aspect-ratio="1.5" contain></v-img>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
.loader {
  position: fixed;
  left: 50%;
  top: 50%;
}

.loader > div {
  position: relative;
  left: -50%;
  top: -50%;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

.fadeout {
  animation: fadeout 0.5s forwards;
}
</style>
<script>
export default {
  name: 'SplashScreen',
  props: ['isLoading']
}
</script>
