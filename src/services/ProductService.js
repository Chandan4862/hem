import axios from 'axios'
const apiClient = axios.create({
  baseURL: `http://localhost:4700`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token != null) {
    config.headers.Authorization = token
  }
  return config
})
export default {
  getProductById(pid) {
    return apiClient.get('/o/product/view/' + pid)
  },
  addProductToCartService(pid) {
    console.log('CARTSERVICE')
    return apiClient.post('/o/product/addtocart', pid)
  },
  getProduct() {
    return apiClient.get('/o/product/view')
  },
  cartview() {
    return apiClient.get('/o/user/profile')
  }
}
