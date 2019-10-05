import ProductService from '@/services/ProductService'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
Vue.use(Vuex)
export default {
  state: {
    products: [],
    product: {}, //will store the specific product being used
    cart: [] //will save the product id and product quantity
  },
  mutations: {
    SET_PRODUCTS(state, list) {
      console.log('mito', list)
      state.products = list
    },
    SET_PRODUCT(state, product) {
      state.product = product
    },
    //set the cart data fetched from db
    SET_CART(state, cart) {
      state.cart = cart
    }
  },
  actions: {
    addProductToCart({ commit, state }, prodId) {
      ProductService.addProductToCartService(prodId)
        .then(response => {
          console.log(response.data)
          commit('SET_CART', response.data)
        })
        .catch(error => {
          console.log('There was an error: ' + error)
        })
    },
    fetchProduct({ commit }, pid) {
      ProductService.getProductById(pid)
        .then(response => {
          commit('SET_PRODUCT', response.data)
        })
        .catch(error => {
          console.log('There was an error: ' + error)
        })
    },
    productsList({ commit }) {
      return ProductService.getProduct()
        .then(response => commit('SET_PRODUCTS', response.data))
        .catch(err => console.log(err))
    },
    fetchCart({ commit }) {
      ProductService.getCart()
        .then(response => {
          commit('SET_CART', response.data)
        })
        .catch(error => {
          console.log('There was an error: ' + error)
        })
    }
  }
}
