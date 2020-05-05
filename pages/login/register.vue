<template>
  <div v-loading.fullscreen="loading" class="loginpage">
    <div class="systemname">
      云南省住房和城乡建设厅科学技术计划项目管理系统
    </div>
    <div class="loginbox">
      <div class="loginleft">
        <img src="~assets/img/denglu.svg" alt />
        <h4 class="mt-20">登录&注册</h4>
      </div>
      <div class="loginright">
        <div class="userstab">
          <span class="userOn">
            申报单位注册
          </span>
        </div>
        <div class="loginmain">
          <div>
            <input
              v-model="username"
              type="text"
              placeholder="请设置登录用户名"
            />
          </div>
          <div>
            <input
              v-model="password"
              type="password"
              placeholder="请设置登录密码"
            />
          </div>
          <div>
            <input
              v-model="confirmpsw"
              type="password"
              placeholder="请确认登录密码"
            />
          </div>
          <div>
            <input
              v-model="userphone"
              type="text"
              placeholder="请输入注册手机号"
            />
          </div>
          <div>
            <input
              v-model="msgcode"
              type="text"
              placeholder="请输入短信验证码"
            />
            <div
              :class="senDisable ? 'sendbtn sendbtn2' : 'sendbtn'"
              @click="send"
            >
              {{ senDisable ? '再次发送(' + countdown + 's)' : '发送验证码' }}
            </div>
          </div>
          <p v-if="error1" class="errtip">{{ error1 }}</p>
          <div class="loginbtn" @click="login">注 册</div>
        </div>
        <div class="other">
          <span @click="tologin">已有账号，立即登录</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { datawork } from '../../plugins/datawork'
import { getClientId } from '../../plugins/getclientid'
import { getToken } from '../../plugins/gettoken'
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmpsw: '',
      userphone: '',
      msgcode: '',
      countdown: 120,
      senDisable: 0,
      error1: '',
      loading: false
    }
  },
  methods: {
    send() {
      if (this.userphone) {
        if (this.senDisable === 0) {
          const commondata = this.$store.state.commondata
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
          data1.mobile = this.userphone
          data1.code = 'user_reg'
          data2 = datawork(data1)
          this.$api.get_msgcode(data2).then((v) => {
            if (v.data.errcode === 0) {
              this.$message({
                type: 'success',
                message: '发送成功，请查收！'
              })
              const timer = setInterval(() => {
                if (this.countdown === 0) {
                  clearInterval(timer)
                  this.senDisable = 0
                  this.countdown = 120
                } else {
                  this.senDisable = 1
                  this.countdown--
                }
              }, 1000)
            } else if (v.data.errcode === 1104) {
              getToken(commondata, this)
              setTimeout(() => {
                if (localStorage.getItem('tokenDone')) {
                  that.send()
                }
              }, 1000)
            } else if (v.data.errcode === 1103) {
              getClientId(commondata, this)
              setTimeout(() => {
                if (localStorage.getItem('done')) {
                  that.send()
                }
              }, 1000)
            } else {
              this.$message({
                type: 'error',
                message: v.data.errmsg
              })
            }
          })
        } else {
          this.$message({
            type: 'error',
            message: '请稍候！'
          })
        }
      } else {
        this.$message({
          type: 'error',
          message: '请先输入手机号'
        })
      }
    },
    tologin() {
      this.$router.push('/login')
    },
    login() {
      this.loading = true
      const commondata = this.$store.state.commondata
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
      data1.scene_id = 2
      data1.mobile = this.userphone
      data1.username = this.username
      data1.smscode = this.msgcode
      data1.password = this.password
      data1.password_a = this.confirmpsw
      data2 = datawork(data1)
      this.$api.register(data2).then((v) => {
        if (v.data.errcode === 0) {
          this.loading = false
          this.$message({
            type: 'success',
            message: '注册成功',
            duration: 1000
          })
          localStorage.setItem('userinfo', JSON.stringify(v.data.data))
          this.$store.commit('SET_USER_INFO', v.data.data)
          localStorage.setItem('userid', v.data.data.id)
          this.$store.commit('SET_USER_ID', v.data.data.id)
          setTimeout(() => {
            that.$router.push('/createpro')
          }, 1000)
        } else if (v.data.errcode === 1104) {
          getToken(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('tokenDone')) {
              that.login()
            }
          }, 1000)
        } else if (v.data.errcode === 1103) {
          getClientId(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('done')) {
              that.login()
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
    }
  }
}
</script>
