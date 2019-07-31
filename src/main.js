import Vue from 'vue'
import App from './App.vue'

import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage)

new Vue({
  el: '#app',
  render: h => h(App)
})
