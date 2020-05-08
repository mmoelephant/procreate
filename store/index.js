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
    accesstoken: '',
    form: {},
    applyid: '',
    worker: [],
    partner: []
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
  },
  SET_FORM(state, data) {
    state.form = data
  },
  SET_APPLY_ID(state, data) {
    state.applyid = data
  },
  SET_WORKER(state, data) {
    state.worker = data
  },
  SET_PARTNER(state, data) {
    state.partner = data
  }
}
export default { state, mutations, strict: false }
