<template>
  <div class="loginpage">
    <div class="systemname">云南省住房和城乡建设厅科学技术计划项目管理系统</div>
    <div class="loginbox">
      <div class="loginleft">
        <h4>登录&注册</h4>
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
            <div></div>
            <input
              v-model="username"
              type="text"
              placeholder="请输入用户名/手机号"
              @focus="focus1"
            />
          </div>
          <div>
            <div></div>
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
            <div :class="senDisable ? 'sendbtn2' : 'sendbtn'" @click="send">
              {{ sendtxt }}
            </div>
          </div>
          <p v-if="error2" class="errtip">{{ error2 }}</p>
          <div class="loginbtn" @click="login2">登 录</div>
        </div>
        <div v-if="userwho == 2" class="loginmain">
          <div>
            <div></div>
            <input
              v-model="adminname"
              type="text"
              placeholder="请输入管理员账号"
              @focus="focus3"
            />
          </div>
          <div>
            <div></div>
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
          <span>忘记密码</span>
          <span v-if="userwho == 1" @click="register">注册账号</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
      sendtxt: '发送验证码',
      sendStatus: 0,
      countdown: 120,
      senDisable: 0,
      error1: 'afaf',
      error2: 'afaf',
      adminname: '',
      adminpsw: '',
      error3: ''
    }
  },
  methods: {
    toggleuser(val) {
      this.userwho = val
      if (val === 2) {
        this.types = [
          {
            id: 1,
            name: '密码登录'
          }
        ]
        this.logintype = 1
      } else {
        this.types = [
          {
            id: 1,
            name: '密码登录'
          },
          {
            id: 2,
            name: '短信登录'
          }
        ]
        this.logintype = 1
      }
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
      // let data = {}
      if (this.userphone) {
        // if (this.sendStatus === 0) {
        //   data = {
        //     mobile: this.phone.replace(/(^\s*)|(\s*$)/g, ''),
        //     event: 'mobilelogin'
        //   }
        //   this.$api.send_msg(data).then((v) => {
        //     if (v.data.code === 1) {
        //       this.loading = false
        //       this.$message({
        //         type: 'success',
        //         message: '发送成功，请查收！'
        //       })
        //       const timer = setInterval(() => {
        //         if (this.countdown === 0) {
        //           clearInterval(timer)
        //           this.senDisable = 0
        //           this.sendtxt = '发送验证码'
        //           this.countdown = 120
        //           this.sendStatus = 0
        //         } else {
        //           this.senDisable = 1
        //           this.sendtxt = '再次发送(' + this.countdown + 's)'
        //           this.countdown--
        //           this.sendStatus = 1
        //         }
        //       }, 1000)
        //     } else {
        //       this.loading = false
        //       this.$message({
        //         type: 'error',
        //         message: v.data.msg
        //       })
        //     }
        //   })
        // } else {
        //   this.$message({
        //     type: 'error',
        //     message: '请稍候！'
        //   })
        // }
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
    },
    login2() {
      if (!this.formValidate2()) return
    },
    login3() {
      if (!this.formValidate3()) return
    },
    register() {
      this.$router.push('/register')
      // this.$router.push('/login/code')
    },
  }
}
</script>
<style lang="stylus" scoped>
.loginpage
  display flex
  flex-direction column
  align-items center
  justify-content center
  width 100%
  height 100%
  background url(../../assets/img/loginbg.jpg) center no-repeat
  background-size 100% 100%
  .systemname
    font-size 40px
    color #fff
.loginbox
  display flex
  width 720px
  min-height 480px
  margin-top 80px
  border-radius 10px
  box-shadow 0px 0px 12px rgba(0,0,0,0.06)
.loginleft
  display flex
  flex-direction column
  align-items center
  justify-content center
  width 280px
  border-radius 10px 0 0 10px
  font-size 24px !important
  background url(../../assets/img/loginleft.jpg) center no-repeat
  color #fff
.loginright
  width 440px
  padding 30px 50px
  border-radius 0 10px 10px 0
  background #fff
  color #999
  .userstab
    font-size 20px
    text-align center
    line-height 30px
    span
      padding 0 14px
      border-right 1px #333 solid
      cursor pointer
    span:hover
      color #666
    span.userOn
      color #333
    span:last-of-type
      border none
.typetab
  display flex
  border-bottom 1px #e6e6e6 solid
  margin 30px 0 20px 0
  span
    display block
    padding 5px 0
    margin-right 40px
    cursor pointer
  span.typeOn
    border-bottom 2px #1D78D3 solid
    color #1D78D3
  span:hover
    color #666
.loginmain, .loginmain2
  position relative
  margin 30px 0
  >div
    position relative
    display flex
    width 100%
    height 44px
    border 1px #e6e6e6 solid
    margin-bottom 30px
    >div
      width 44px
      height 44px
  input
    width calc(100% - 44px)
    height 44px
  div.loginbtn
    position static
    display block
    border none
    border-radius 24px
    margin-top 40px
    text-align center
    line-height 44px
    background #3972E4
    color #fff
    cursor pointer
  div.loginbtn:hover
    background #1D78D3
.loginmain2
  input
    width 100%
  input.msginput
    width calc(100% - 100px)
.sendbtn
  position absolute
  right 0
  top 0
  width 100px !important
  height 44px
  text-align center
  line-height 44px
  background #50A7FF
  color #fff
  cursor pointer
.sendbtn2
  background #999
  cursor default
.errtip
  position absolute
  left 0
  bottom 54px
  color red
.other
  display flex
  align-items center
  justify-content center
  text-align center
  line-height 14px
  span
    display block
    padding 0 8px
    border-right 1px #1D78D3 solid
    cursor pointer
  span:last-of-type
    border none
    color #1D78D3
  span:hover
    color #1D78D3
</style>
