import LoginService from '@/services/LoginService'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  state: {
    User: {}
  },
  mutations: {
    SET_USER(state, userdata) {
      state.User = userdata
    }
  },
  actions: {
    ProfileLog({ commit }) {
      LoginService.getProfile().then(response => {
        console.log('Its Working', response.data)
        commit('SET_USER', response.data)
      })
    }
  }
}
