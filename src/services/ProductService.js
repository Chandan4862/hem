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
    getProductById(pid) {
        return apiClient.get('/o/product/view/' + "57ef6")
    },
    addProductToCartService(pid) {
        console.log("CARTSERVICE")
        return apiClient.post("/o/product/addtocart/" + "57ef6")
    }

}