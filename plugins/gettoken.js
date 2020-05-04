import { datawork } from './datawork'
import api from './axios'
export function getToken(data, that) {
  const getTokenData = {}
  let getTokenData2 = {}
  let clientid
  for (const i in data) {
    getTokenData[i] = data[i]
  }
  if (localStorage.getItem('userid')) {
    getTokenData.user_id = localStorage.getItem('userid')
  } else {
    getTokenData.user_id = 0
  }
  getTokenData.timestamp = Math.round(new Date().getTime() / 1000).toString()
  getTokenData.nonce_str =
    new Date().getTime() + '' + Math.floor(Math.random() * 899 + 100)
  if (localStorage.getItem('clientid')) {
    clientid = localStorage.getItem('clientid')
  }
  getTokenData.client_id = clientid
  getTokenData2 = datawork(getTokenData)
  api.get_token(getTokenData2).then((v) => {
    if (v.data.errcode === 0) {
      localStorage.setItem('accesstoken', v.data.data.access_token)
      that.$store.commit('SET_ACCESS_TOKEN', v.data.data.access_token)
      localStorage.setItem('tokenDone', true)
    } else {
      localStorage.setItem('tokenDone', false)
    }
  })
}
