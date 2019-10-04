import LoginService from '@/services/LoginService'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
Vue.use(Vuex)
//export const namespaced = true
export default {
  state: {
    token: ''
  },
  mutations: {
    SET_USER({ state }, user) {
      state.token = user.token
    },
    LOGOUT_USER() {
      localStorage.clear()
    }
  },
  actions: {
    LoginUser({ commit }, login) {
      return LoginService.getLogin(login)
        .then(response => {
          console.log('SUCCESS')
          localStorage.setItem('token', response.data.Authorization)
          localStorage.setItem('username', response.data.UserName)
          commit('SET_USER', response.data)
        })
        .catch(() => {
          console.log('ERROR in login store')
        })
    },
    logout({ commit }) {
      commit('LOGOUT_USER')
      router.push({ name: 'login' })
    }
  }
}
