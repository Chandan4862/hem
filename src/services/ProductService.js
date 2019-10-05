import axios from 'axios'

const apiClient = axios.create({
    baseURL: `http://192.168.20.108:4700`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

const apiJson = axios.create({
    baseURL: `http://localhost:3000`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
export default {
    getProduct(pid) {
        return apiClient.get('/o/product/view/' + "79c9e")
    },
    addProductToCartService(pid) {
        console.log("CARTSERVICE")
        return apiJson.post('/cart', pid)
    }

}