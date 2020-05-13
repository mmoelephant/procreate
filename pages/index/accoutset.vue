<template>
  <div v-loading.fullscreen="loading" class="indexpage">
    <h1 class="pagetitle">
      账户设置
    </h1>
    <div class="form">
      <p class="formtitle">账户基本信息</p>
      <div class="formitems">
        <div class="formitem">
          <div class="itemname">用户名</div>
          <input
            v-model="username"
            type="text"
            :disabled="disabled1"
            placeholder="请输入用户名"
          />
        </div>
        <div class="formitem msgcode">
          <div class="itemname">密码</div>
          <input
            v-model="password"
            type="password"
            :disabled="disabled1"
            placeholder="请输入用户密码"
          />
          <p class="setbtn" @click="modifypsw">修改密码</p>
        </div>
        <div class="formitem msgcode">
          <div class="itemname">手机号</div>
          <input
            v-model="userphone"
            type="text"
            :disabled="disabled1"
            placeholder="请输入用户手机号"
          />
          <p class="setbtn" @click="modifymobile">换绑</p>
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="setshow"
      title="修改密码"
      :close-on-click-modal="false"
      :lock-scroll="false"
      :show-close="false"
      width="600px"
    >
      <div class="formitems dialogform">
        <div class="formitem">
          <div class="itemname">旧密码</div>
          <input
            v-model="form.oldpsw"
            type="password"
            placeholder="请输入旧密码"
          />
        </div>
        <div class="formitem">
          <div class="itemname">新密码</div>
          <input
            v-model="form.newpsw"
            type="password"
            placeholder="请输入新密码"
          />
        </div>
        <div class="formitem">
          <div class="itemname">确认新密码</div>
          <input
            v-model="form.confirmnew"
            type="password"
            placeholder="请再次输入新密码"
          />
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="sure">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      :visible.sync="setshow2"
      :title="next ? '验证旧手机号' : '绑定新手机'"
      :close-on-click-modal="false"
      :lock-scroll="false"
      :show-close="false"
      width="600px"
    >
      <div class="formitems dialogform">
        <div class="formitem">
          <div class="itemname">{{ next ? '旧手机号' : '新手机号' }}</div>
          <input
            v-model="form2.mobile"
            :disabled="next ? true : false"
            type="text"
            placeholder="请输入手机号"
          />
        </div>
        <div class="formitem msgcode">
          <div class="itemname">短信验证码</div>
          <input
            v-model="form2.msgcode"
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
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel2">取消</el-button>
        <el-button type="primary" @click="sure2">
          {{ next ? '下一步' : '换绑' }}
        </el-button>
      </span>
    </el-dialog>
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
      password: '******',
      userphone: '',
      disabled1: true,
      form: {},
      form2: {},
      setshow: false,
      setshow2: false,
      next: true,
      countdown: 120,
      senDisable: 0,
      oldmsg: '',
      timer: {},
      loading: false
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
    this.userinfo()
  },
  methods: {
    userinfo() {
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
      this.$api.user_info(data2).then((v) => {
        if (v.data.errcode === 0) {
          this.loading = false
          this.username = v.data.data.username
          this.userphone = v.data.data.mobile
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
        } else if (v.data.errmsg === '没有登录') {
          this.loading = false
          setTimeout(() => {
            that.$router.push('/login')
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
    modifypsw() {
      this.setshow = true
    },
    modifymobile() {
      this.setshow2 = true
      if (this.next) {
        this.form2.mobile = this.userphone
      } else {
        this.form2 = {}
      }
    },
    cancel() {
      this.setshow = false
    },
    sure() {
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
      if (this.form.oldpsw && this.form.oldpsw.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.old_pwd = this.form.oldpsw
      }
      if (this.form.newpsw && this.form.newpsw.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.new_pwd = this.form.newpsw
      }
      if (this.form.confirmnew && this.form.confirmnew.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.c_new_pwd = this.form.confirmnew
      }
      data2 = datawork(data1)
      this.$api.change_psw(data2).then((v) => {
        if (v.data.errcode === 0) {
          this.loading = false
          this.$message({
            type: 'success',
            message: '修改成功'
          })
          this.setshow = false
          this.form = {}
          this.userinfo()
        } else if (v.data.errcode === 1104) {
          getToken(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('tokenDone')) {
              that.sure()
            }
          }, 1000)
        } else if (v.data.errcode === 1103) {
          getClientId(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('done')) {
              that.sure()
            }
          }, 1000)
        } else if (v.data.errmsg === '没有登录') {
          this.loading = false
          setTimeout(() => {
            that.$router.push('/login')
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
    send() {
      if (this.form2.mobile && this.form2.mobile.replace(/(^\s*)|(\s*$)/g, '')) {
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
          data1.mobile = this.form2.mobile
          if (this.next) {
            data1.code = 'user_verifyold'
          } else {
            data1.code = 'user_bindnew'
          }
          data2 = datawork(data1)
          this.$api.get_msgcode(data2).then((v) => {
            if (v.data.errcode === 0) {
              this.$message({
                type: 'success',
                message: '发送成功，请查收！'
              })
              if (this.next) {
                this.oldmsg = v.data.data.code
              }
              this.timer = setInterval(() => {
                if (this.countdown === 0) {
                  clearInterval(this.timer)
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
            } else if (v.data.errmsg === '没有登录') {
              setTimeout(() => {
                that.$router.push('/login')
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
    cancel2() {
      this.setshow2 = false
    },
    sure2() {
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
      if (this.next) {
        // 验证旧手机
        if (this.form2.msgcode && this.form2.msgcode.replace(/(^\s*)|(\s*$)/g, '')) {
          data1.smscode = this.form2.msgcode
        }
        data2 = datawork(data1)
        this.$api.verify_phone(data2).then((v) => {
          if (v.data.errcode === 0) {
            this.loading = false
            this.$message({
              type: 'success',
              message: '验证旧手机号成功'
            })
            this.form2 = {}
            clearInterval(this.timer)
            this.senDisable = 0
            this.countdown = 120
            this.next = !this.next
          } else if (v.data.errcode === 1104) {
            getToken(commondata, this)
            setTimeout(() => {
              if (localStorage.getItem('tokenDone')) {
                that.sure2()
              }
            }, 1000)
          } else if (v.data.errcode === 1103) {
            getClientId(commondata, this)
            setTimeout(() => {
              if (localStorage.getItem('done')) {
                that.sure2()
              }
            }, 1000)
          } else if (v.data.errmsg === '没有登录') {
            this.loading = false
            setTimeout(() => {
              that.$router.push('/login')
            }, 1000)
          } else {
            this.loading = false
            this.$message({
              type: 'error',
              message: v.data.errmsg
            })
          }
        })
      } else {
        // 绑定新手机
        if (this.form2.mobile && this.form2.mobile.replace(/(^\s*)|(\s*$)/g, '')) {
          data1.mobile = this.form2.mobile
        }
        if (this.form2.msgcode && this.form2.msgcode.replace(/(^\s*)|(\s*$)/g, '')) {
          data1.smscode = this.form2.msgcode
        }
        if (this.oldmsg) {
          data1.old_smscode = this.oldmsg
        }
        data2 = datawork(data1)
        this.$api.bind_phone(data2).then((v) => {
          if (v.data.errcode === 0) {
            this.loading = false
            this.$message({
              type: 'success',
              message: '换绑手机号成功'
            })
            this.setshow2 = false
            this.next = !this.next
            this.form2 = {}
            clearInterval(this.timer)
            this.senDisable = 0
            this.countdown = 120
            this.userinfo()
          } else if (v.data.errcode === 1104) {
            getToken(commondata, this)
            setTimeout(() => {
              if (localStorage.getItem('tokenDone')) {
                that.sure2()
              }
            }, 1000)
          } else if (v.data.errcode === 1103) {
            getClientId(commondata, this)
            setTimeout(() => {
              if (localStorage.getItem('done')) {
                that.sure2()
              }
            }, 1000)
          } else if (v.data.errmsg === '没有登录') {
            this.loading = false
            setTimeout(() => {
              that.$router.push('/login')
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
}
</script>
<style lang="stylus" scoped>
.setbtn
  position absolute
  left 360px
  color #50A7FF
  cursor pointer
.setbtn:hover
  color #1D78D3
.dialogform
  width 100%
  margin 0
  input
    width calc(100% - 200px)
.formitem.msgcode
  input
    width calc(100% - 300px)
.sendbtn
  height 40px
  right 66px
  // left 0
</style>
