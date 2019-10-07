import axios from 'axios'

const apiCli = axios.create({
  baseURL: `http://192.168.20.108:4700`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})
apiCli.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token != null) {
    config.headers.Authorization = token
  }
  return config
})
export default {
  getLogin(login) {
    return apiCli.post('/o/login/loginuser', login)
  },
  Reguser(user) {
    return apiCli.post('/o/product/adduser', user)
  },
  getProfile() {
    return apiCli.get('/o/user/profile')
  }
}
