import ProductService from '@/services/ProductService'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
Vue.use(Vuex)

export default {
    state: {
        product: {}, //will store the specific product being used
        cart: [], //will save the product id and product quantity


    },
    actions: {
        addProductToCart({
            commit,
            state
        }, prodId) {
            ProductService.addProductToCartService(prodId).then(response => {
                console.log(response.data)
                commit('SET_CART', response.data)
            }).catch(error => {
                console.log("There was an error: " + error)
            })

        },
        fetchProduct({
            commit,
        }, pid) {
            ProductService.getProductById(pid).then(response => {
                    commit('SET_PRODUCT', response.data)
                })
                .catch(error => {
                    console.log("There was an error: " + error)
                })
        }
    },
    mutations: {
        //set the product fetched from db
        SET_PRODUCT(state, product) {
            state.product = product
        },
        //set the cart data fetched from db
        SET_CART(state, cart) {
            state.cart = cart
        }
    }


}