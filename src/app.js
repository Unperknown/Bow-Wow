import Vue from 'vue'
import SplashScreen from './SplashScreen.vue'
import vuetify from './plugins/vuetify'
import router from './router/router'

new Vue({
  el: '#app',
  vuetify,
  router,
  components: { SplashScreen },
  template: '<SplashScreen/>'
})