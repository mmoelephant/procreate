import { datawork } from './datawork.js'
import api from './axios'
export function getClientId(data, that) {
  const getClientData = {}
  let getClientData2 = {}
  for (const i in data) {
    getClientData[i] = data[i]
  }
  if (localStorage.getItem('userid')) {
    getClientData.user_id = localStorage.getItem('userid')
  } else {
    getClientData.user_id = 0
  }
  getClientData.timestamp = Math.round(new Date().getTime() / 1000).toString()
  getClientData.nonce_str =
    new Date().getTime() + '' + Math.floor(Math.random() * 899 + 100)
  getClientData2 = datawork(getClientData)
  api.get_client(getClientData2).then((v) => {
    if (v.data.errcode === 0) {
      localStorage.setItem('clientid', v.data.data.client_id)
      that.$store.commit('SET_CLIENT_ID', v.data.data.client_id)
      localStorage.setItem('accesstoken', v.data.data.access_token)
      that.$store.commit('SET_ACCESS_TOKEN', v.data.data.access_token)
      localStorage.setItem('done', true)
    } else {
      localStorage.setItem('done', false)
    }
  })
}
