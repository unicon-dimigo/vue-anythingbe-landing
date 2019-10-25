import Vue from 'vue'
import App from './App.vue'

import VueFullPage from 'vue-fullpage.js'
import VModal from 'vue-js-modal'
 
Vue.use(VModal)
Vue.use(VueFullPage)

new Vue({
  el: '#app',
  render: h => h(App)
})
