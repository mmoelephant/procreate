import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = function() {
  return {
    token: '',
    uniquecode: '',
    commondata: {},
    userid: '',
    userinfo: {},
    clientid: '',
    accesstoken: ''
  }
}
const mutations = {
  setToken(state, data) {
    state.token = data
  },
  SET_UNIQUE_CODE(state, data) {
    state.uniquecode = data
  },
  SET_COMMON_DATA(state, data) {
    state.commondata = data
  },
  SET_USER_ID(state, data) {
    state.userid = data
  },
  SET_USER_INFO(state, data) {
    state.userinfo = data
  },
  SET_CLIENT_ID(state, data) {
    state.clientid = data
  },
  SET_ACCESS_TOKEN(state, data) {
    state.accesstoken = data
  }
}
export default { state, mutations }
