import ProductService from '@/services/ProductService'
export default {
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS(state, list) {
      console.log('mito', list)
      state.products = list
    }
  },
  actions: {
    productsList({ commit }) {
      return ProductService.getProduct()
        .then(response => commit('SET_PRODUCTS', response.data))
        .catch(err => console.log(err))
    }
  }
}
