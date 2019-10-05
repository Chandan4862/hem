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
            state
        }, prodId) {
            // const cartItem = state.cart.find(item => item.pid === product.product.pid)
            // if (!cartItem) {
            //     //push product to cart
            //     console.log(product.product.pid)
            //     //create a product object to push to DB
            //     const cartEntry = {
            //         pid: product.product.pid,
            //         qty: 1
            //     }
            //     ProductService.addProductToCartService(cartEntry).then(response => {
            //         //console.log(response.data)
            //         commit('pushProductToCart', product.product.pid)
            //     }).catch(error => {
            //         console.log("There was an error: " + error)
            //     })

            //     } else {
            //     //if item already present in cart increment
            //     console.log(product.product.pid)

            //     commit('incrementItemQuantity', cartItem)
            //     ProductService.incrementProductQuantity(cart).then(response => {
            //         console.log(response.data)
            //     })
            //}
            ProductService.addProductToCartService(prodId).then(response => {
                console.log(response.data)
            }).catch(error => {
                console.log("There was an error: " + error)
            })

        },
        fetchProduct({
            commit,
        }, pid) {
            ProductService.getProduct(pid).then(response => {
                    commit('SET_PRODUCT', response.data)
                })
                .catch(error => {
                    console.log("There was an error: " + error)
                })
        },
        fetchCart({
            commit
        }) {
            ProductService.getCart().then(response => {
                commit('SET_CART', response.data)
            }).catch(error => {
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

        // pushProductToCart(state, pid) {
        //     state.cart.push({
        //         pid: pid,
        //         qty: 1
        //     })
        // },

        // incrementItemQuantity(state, cartItem) {
        //     cartItem.qty++
        // },
    }


}