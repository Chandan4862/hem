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
    //set the product fetched from db
    SET_PRODUCT(state, product) {
      state.product = product
    },
    //set the cart data fetched from db
    SET_CART(state, cart) {
      state.cart = cart
    }
  },
  actions: {
    productsList({ commit }) {
      return ProductService.getProduct()
        .then(response => commit('SET_PRODUCTS', response.data))
        .catch(err => console.log(err))
    },
    addProductToCart({ state }, prodid) {
      const cartItem = {
        pid: prodid
      }
      ProductService.addProductToCartService(cartItem)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log('There was an error: ' + error)
        })
    },
    fetchProduct({ commit }, pid) {
      ProductService.getProductByid(pid)
        .then(response => {
          commit('SET_PRODUCT', response.data)
        })
        .catch(error => {
          console.log('There was an error: ' + error)
        })
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
