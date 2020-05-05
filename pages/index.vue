<template>
  <div class="indexcommon">
    <left :state="user_info.status ? Number(user_info.status) : 5" />
    <div class="indexright">
      <nuxt />
    </div>
  </div>
</template>
<script>
import left from '../components/left'
import { datawork } from '../plugins/datawork'
import { getClientId } from '../plugins/getclientid'
import { getToken } from '../plugins/gettoken'
import { deepCopy } from '../plugins/deepcopy'
export default {
  components: {
    left
  },
  data() {
    return {
      // status: '',
      user_info: {}
    }
  },
  computed: {
    route() {
      return this.$route
    }
  },
  mounted() {
    /*eslint-disable*/
    if (
      !localStorage.getItem('userid') ||
      !Number(localStorage.getItem('userid'))
    ) {
      this.$router.push('/login')
      return
    }
    // this.getautheninfo()
    this.userinfo()
  },
  methods: {
    getautheninfo() {
      this.loading = true
      const commondata = JSON.parse(localStorage.getItem('commondata'))
      const data1 = {}
      let data2 = {}
      const that = this
      for (const i in commondata) {
        data1[i] = commondata[i]
      }
      if (localStorage.getItem('userid')) {
        data1.user_id = localStorage.getItem('userid')
      }
      data1.timestamp = Math.round(new Date().getTime() / 1000).toString()
      data1.nonce_str =
        new Date().getTime() + '' + Math.floor(Math.random() * 899 + 100)
      if (localStorage.getItem('clientid')) {
        data1.client_id = localStorage.getItem('clientid')
      }
      if (localStorage.getItem('accesstoken')) {
        data1.access_token = localStorage.getItem('accesstoken')
      }
      data2 = datawork(data1)
      this.$api.get_authen_info(data2).then((v) => {
        console.log(v)
        if (v.data.errcode === 0) {
          this.loading = false
          if (v.data.data) {
            if (v.data.data.status && v.data.data.status == '5') {
              this.status = v.data.data.status
              this.$message({
                type: 'error',
                message: '您的企业信息暂未认证通过，请先认证企业信息，再进行下一步操作！'
              })
              setTimeout(() => {
                this.$router.push('/userinfo')
              }, 1000)
            }
          }
        } else if (v.data.errcode === 1104) {
          getToken(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('tokenDone')) {
              that.getautheninfo()
            }
          }, 1000)
        } else if (v.data.errcode === 1103) {
          getClientId(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('done')) {
              that.getautheninfo()
            }
          }, 1000)
        } else {
          this.loading = false
          this.$message({
            type: 'error',
            message: v.data.errmsg
          })
        }
      })
    },
    userinfo() {
      this.loading = true
      this.user_info = {}
      const commondata = JSON.parse(localStorage.getItem('commondata'))
      const data1 = {}
      let data2 = {}
      const that = this
      for (const i in commondata) {
        data1[i] = commondata[i]
      }
      if (localStorage.getItem('userid')) {
        data1.user_id = localStorage.getItem('userid')
      }
      data1.timestamp = Math.round(new Date().getTime() / 1000).toString()
      data1.nonce_str =
        new Date().getTime() + '' + Math.floor(Math.random() * 899 + 100)
      if (localStorage.getItem('clientid')) {
        data1.client_id = localStorage.getItem('clientid')
      }
      if (localStorage.getItem('accesstoken')) {
        data1.access_token = localStorage.getItem('accesstoken')
      }
      data2 = datawork(data1)
      this.$api.user_info(data2).then((v) => {
        console.log(v)
        if (v.data.errcode === 0) {
          this.loading = false
          if (v.data.data.enterprise && v.data.data.enterprise[0]) {
            this.user_info = deepCopy(v.data.data.enterprise[0])
            if (
              v.data.data.enterprise[0].status &&
              v.data.data.enterprise[0].status != '1'
            ) {
              this.$message({
                type: 'error',
                message: '您的企业信息暂未认证通过，请先认证企业信息，再进行下一步操作！'
              })
              setTimeout(() => {
                this.$router.push('/userinfo')
              }, 1000)
            }
          }
        } else if (v.data.errcode === 1104) {
          getToken(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('tokenDone')) {
              that.userinfo()
            }
          }, 1000)
        } else if (v.data.errcode === 1103) {
          getClientId(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('done')) {
              that.userinfo()
            }
          }, 1000)
        } else {
          this.loading = false
          this.$message({
            type: 'error',
            message: v.data.errmsg
          })
        }
      })
    },
  }
}
</script>
<style lang="stylus" scoped>
.indexcommon
  display flex
  width 100%
.indexright
  width calc(100% - 260px)
  padding 20px 80px 20px 20px
</style>
