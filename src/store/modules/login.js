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
    SET_USER(state, user) {
      state.token = user.token
    },
    LOGOUT_USER() {
      localStorage.clear()
    }
  },
  actions: {
    LoginUser({ commit }, login) {
      LoginService.getLogin(login)

        .then(response => {
          localStorage.setItem('token', response.data.Authorization)
          commit('SET_USER', response.data)
          window.location.href = '/list'
        })
        .catch(error => {
          console.log(error)
          alert('Invalid Credentials')
        })
    },
    logout({ commit }) {
      commit('LOGOUT_USER')
      router.push({ name: 'login' })
    },
    RegisterUser({ commit }, user) {
      LoginService.Reguser(user)
       
    }
  }
}
