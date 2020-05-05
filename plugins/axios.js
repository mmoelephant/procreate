import axios from 'axios'
import qs from 'qs'
const test = 'http://testk.dlzjzy.com/'
const service = axios.create({
  baseURL: test,
  withCredentials: false,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})
const service2 = axios.create({
  baseURL: test,
  withCredentials: false,
  headers: { 'Content-Type': 'multipart/form-data' }
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
service2.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    alert('网络错误，请稍后重试')
    return Promise.reject(error)
  }
)
// const commondata = JSON.parse(localStorage.getItem('commondata'))
// data
const api = {
  get_client(data) {
    if (data) data = qs.stringify(data, { allowDots: true })
    return service.post('Api/Access/client', data)
  },
  get_token(data) {
    if (data) data = qs.stringify(data, { allowDots: true })
    return service.post('Api/Access/token', data)
  },
  login(data) {
    if (data) data = qs.stringify(data, { allowDots: true })
    return service.post('Api/Passport/login', data)
  },
  login_code(data) {
    if (data) data = qs.stringify(data, { allowDots: true })
    return service.post('Api/Passport/loginCode', data)
  },
  register(data) {
    if (data) data = qs.stringify(data, { allowDots: true })
    return service.post('Api/Passport/reg', data)
  },
  log_out(data) {
    if (data) data = qs.stringify(data, { allowDots: true })
    return service.post('Api/User/logout', data)
  },
  upload_file(data) {
    return service2.post('Api/Attachment/upload', data)
  },
  get_msgcode(data) {
    if (data) data = qs.stringify(data, { allowDots: true })
    return service.post('Api/Sms/sendCode', data)
  },
  get_emailcode(data) {
    if (data) data = qs.stringify(data, { allowDots: true })
    return service.post('Api/Email/sendCode', data)
  },
  get_addre_list(data) {
    if (data) data = qs.stringify(data, { allowDots: true })
    return service.post('Api/SystemAddress/getTree', data)
  },
  user_info(data) {
    if (data) data = qs.stringify(data, { allowDots: true })
    return service.post('Api/User/info', data)
  },
  change_psw(data) {
    if (data) data = qs.stringify(data, { allowDots: true })
    return service.post('Api/User/updatePassword', data)
  },
  verify_phone(data) {
    if (data) data = qs.stringify(data, { allowDots: true })
    return service.post('Api/User/verifyMobile', data)
  },
  bind_phone(data) {
    if (data) data = qs.stringify(data, { allowDots: true })
    return service.post('Api/User/bindMobile', data)
  }
}
export default api
