<template>
    <v-app>
        <v-row align="center" justify="center">
            <v-col
            xs="12"
            sm="6"
            md="4"
            lg="3"
            xl2="2"
            >
            <v-img src="@/assets/logo.png" class="mx-auato" aspect-ratio="1.5" contain>
            </v-img>
            <v-footer>
              <v-spacer></v-spacer>
              <div class="caption grey--text">&copy; {{ new Date().getFullYear() }}</div>
            </v-footer>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
export default {
  name: 'SplashScreen'
}
</script>
