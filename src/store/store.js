import Vue from 'vue'
import Vuex from 'vuex'
import login from '@/store/modules/login.js'
import product from '@/store/modules/product.js'
import checkout from '@/store/modules/checkout.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    product,
    checkout
  },
  state: {}
})