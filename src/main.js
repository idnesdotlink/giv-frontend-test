import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import JsonViewer from 'vue-json-viewer'

import './registerServiceWorker'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.min.css'
import 'vue-json-viewer/style.css'

import '@/assets/style.css'

Vue.use(Buefy)
Vue.use(JsonViewer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
