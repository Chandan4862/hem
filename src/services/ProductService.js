import axios from 'axios'
const apiCli = axios.create({
  baseURL: `http://192.168.20.108:4700`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default {
  getProduct() {
    return apiCli.get('/o/product/view')
  }
    getProduct(pid) {
        return apiClient.get('/o/product/view/' + "79c9e")
    },
    addProductToCartService(pid) {
        console.log("CARTSERVICE")
        return apiJson.post('/cart', pid)
    }
}