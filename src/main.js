import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import BaseIcon from '@/components/BaseIcon'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
//import './assets/css/style.css'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

Vue.use(Vuelidate)
Vue.use(BootstrapVue)

Vue.filter('date', function(value) {
  const date = new Date(value)
  return date.toLocaleString(['en-Us'], {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })
})

Vue.config.productionTip = false
Vue.component('BaseIcon', BaseIcon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
export default new Vue()
