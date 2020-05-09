<template>
  <div
    v-loading.fullscreen="loading"
    :class="userwho == 1 ? 'loginpage' : 'loginpage2'"
  >
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
          <span
            v-for="item in users"
            :key="item.id"
            :class="userwho == item.id ? 'userOn' : ''"
            @click="toggleuser(item.id)"
          >
            {{ item.name }}
          </span>
        </div>
        <div class="typetab">
          <span
            v-for="item in types"
            :key="item.id"
            :class="logintype == item.id ? 'typeOn' : ''"
            @click="toggletype(item.id)"
          >
            {{ item.name }}
          </span>
        </div>
        <div v-if="userwho == 1 && logintype == 1" class="loginmain">
          <div>
            <div>
              <img src="~assets/img/userIcon.svg" alt />
            </div>
            <input
              v-model="username"
              type="text"
              placeholder="请输入用户名/手机号"
              @focus="focus1"
            />
          </div>
          <div>
            <div>
              <img src="~assets/img/pswIcon.svg" alt />
            </div>
            <input
              v-model="password"
              type="password"
              placeholder="请输入密码"
              @focus="focus1"
            />
          </div>
          <p v-if="error1" class="errtip">{{ error1 }}</p>
          <div class="loginbtn" @click="login1">登 录</div>
        </div>
        <div v-if="userwho == 1 && logintype == 2" class="loginmain">
          <div>
            <input
              v-model="userphone"
              type="text"
              placeholder="请输入手机号"
              @focus="focus2"
            />
          </div>
          <div>
            <input
              v-model="msgcode"
              type="text"
              placeholder="请输入短信验证码"
              class="msginput"
              @focus="focus2"
            />
            <div
              :class="senDisable ? 'sendbtn sendbtn2' : 'sendbtn'"
              @click="send"
            >
              {{ senDisable ? '再次发送(' + countdown + 's)' : '发送验证码' }}
            </div>
          </div>
          <p v-if="error2" class="errtip">{{ error2 }}</p>
          <div class="loginbtn" @click="login2">登 录</div>
        </div>
        <div v-if="userwho == 2" class="loginmain">
          <div>
            <div>
              <img src="~assets/img/userIcon.svg" alt />
            </div>
            <input
              v-model="adminname"
              type="text"
              placeholder="请输入管理员账号"
              @focus="focus3"
            />
          </div>
          <div>
            <div>
              <img src="~assets/img/pswIcon.svg" alt />
            </div>
            <input
              v-model="adminpsw"
              type="password"
              placeholder="请输入密码"
              @focus="focus3"
            />
          </div>
          <p v-if="error3" class="errtip">{{ error3 }}</p>
          <div class="loginbtn" @click="login3">登 录</div>
        </div>
        <div class="other">
          <span @click="forgetpsw">忘记密码</span>
          <span v-if="userwho == 1" @click="register">注册账号</span>
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
      users: [
        {
          id: 1,
          name: '申报单位登录'
        },
        {
          id: 2,
          name: '管理机构登录'
        }
      ],
      userwho: 1,
      types: [
        {
          id: 1,
          name: '密码登录'
        },
        {
          id: 2,
          name: '短信登录'
        }
      ],
      logintype: 1,
      username: '',
      password: '',
      userphone: '',
      msgcode: '',
      countdown: 120,
      senDisable: 0,
      error1: '',
      error2: '',
      adminname: '',
      adminpsw: '',
      error3: '',
      loading: false
    }
  },
  mounted() {
    const that = this
    document.onkeydown = function(e) {
      const keycode = document.all ? event.keyCode : e.which
      if (keycode === 13) {
        that.login1()
        return false
      }
    }
  },
  methods: {
    toggleuser(val) {
      // this.userwho = val
      // if (val === 2) {
      //   this.types = [
      //     {
      //       id: 1,
      //       name: '密码登录'
      //     }
      //   ]
      //   this.logintype = 1
      // } else {
      //   this.types = [
      //     {
      //       id: 1,
      //       name: '密码登录'
      //     },
      //     {
      //       id: 2,
      //       name: '短信登录'
      //     }
      //   ]
      //   this.logintype = 1
      // }
    },
    toggletype(val) {
      this.logintype = val
    },
    focus1() {
      this.error1 = ''
    },
    focus2() {
      this.error2 = ''
    },
    focus3() {
      this.error3 = ''
    },
    formValidate1() {
      if (!this.username) {
        this.error1 = '请输入用户名/手机号'
        return false
      } else if (!this.password) {
        this.error1 = '请输入密码'
        return false
      } else {
        return true
      }
    },
    formValidate2() {
      if (!this.userphone) {
        this.error2 = '请输入手机号'
        return false
      } else if (this.userphone.length !== 11) {
        this.error2 = '手机号格式不正确'
        return false
      } else if (!this.msgcode) {
        this.error2 = '请输入短信验证码'
        return false
      } else {
        return true
      }
    },
    formValidate3() {
      if (!this.adminname) {
        this.error3 = '请输入管理员账号'
        return false
      } else if (!this.adminpsw) {
        this.error3 = '请输入密码'
        return false
      } else {
        return true
      }
    },
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
          data1.code = 'user_logincode'
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
    login1() {
      /*eslint-disable*/
      if (!this.formValidate1()) return
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
      data1.username = this.username
      data1.password = this.password
      data2 = datawork(data1)
      this.$api.login(data2).then((v) => {
        if (v.data.errcode === 0) {
          this.loading = false
          this.$message({
            type: 'success',
            message: '登录成功',
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
              that.login1()
            }
          }, 1000)
        } else if (v.data.errcode === 1103) {
          getClientId(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('done')) {
              that.login1()
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
    login2() {
      if (!this.formValidate2()) return
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
      data1.smscode = this.msgcode
      data2 = datawork(data1)
      this.$api.login_code(data2).then((v) => {
        if (v.data.errcode === 0) {
          this.loading = false
          this.$message({
            type: 'success',
            message: '登录成功',
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
              that.login2()
            }
          }, 1000)
        } else if (v.data.errcode === 1103) {
          getClientId(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('done')) {
              that.login2()
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
    login3() {
      if (!this.formValidate3()) return
    },
    register() {
      this.$router.push('/login/register')
    },
    forgetpsw() {
      this.$router.push('/login/findpsw')
    }
  }
}
</script>
