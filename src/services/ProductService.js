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
}
