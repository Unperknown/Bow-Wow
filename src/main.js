import Vue from 'vue'
import axios from 'axios'

import Main from './Main.vue'

import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios

const token = localStorage.getItem('token')

if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(Main)
}).$mount('#main')
