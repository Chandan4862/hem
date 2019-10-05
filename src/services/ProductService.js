import axios from 'axios'
const apiClient = axios.create({
  baseURL: `http://192.168.20.108:4700`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getProductByid(pid) {
    console.log('PID', pid)
    return apiClient.get('/o/product/view/' + pid)
  },
  addProductToCartService(pid) {
    console.log('CARTSERVICE')
    return apiClient.post('/o/product/addtocart/' + '04f7f')
  },
  getProduct() {
    return apiClient.get('/o/product/view')
  }
}
