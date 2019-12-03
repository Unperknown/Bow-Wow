import Vue from 'vue'
import Test from '@/components/Login.vue'
import vuetify from './plugins/vuetify'
import router from './router/router'

new Vue({
  el: '#app',
  vuetify,
  router,
  components: { Test },
  template: '<Test/>'
})