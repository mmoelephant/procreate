import axios from 'axios'
import qs from 'qs'
const test = '//cxwadmin.link-dev.com/'
const service = axios.create({
  baseURL: test,
  withCredentials: false,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})
service.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    alert('网络错误，请稍后重试')
    return Promise.reject(error)
  }
)
const api = {
  login(data) {
    if (data) data = qs.stringify(data, { allowDots: true })
    return service.post('api/user/login', data)
  }
}
export default api
