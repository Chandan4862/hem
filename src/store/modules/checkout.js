import ProductService from '@/services/ProductService'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default {
    state: {},
    mutations: {

    },
    actions: {
        buyNowCheckout({
            commit
        }, buyNowCart) {
            console.log("actions: ", buyNowCart)
            ProductService.buyNowCartService(buyNowCart).then(response => {
                    console.log(response.data)
                    
                })
                .catch(error => {
                    console.log("There was an error: " + error)
                })
        }

    }
}