import axios from 'axios'

const apiCli = axios.create({
  baseURL: `http://localhost:4700`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getLogin(login) {
    return apiCli.post('/o/login', login)
  }
}
