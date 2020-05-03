<template>
  <div class="loginpage">
    <div class="systemname">
      云南省住房和城乡建设厅科学技术计划项目管理系统
    </div>
    <div class="loginbox">
      <div class="loginleft">
        <h4>登录&注册</h4>
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
            <div :class="senDisable ? 'sendbtn2' : 'sendbtn'" @click="send">
              {{ sendtxt }}
            </div>
          </div>
          <p v-if="error1" class="errtip">{{ error1 }}</p>
          <div class="loginbtn" @click="login">登 录</div>
        </div>
        <div class="other">
          <span @click="tologin">已有账号，立即登录</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmpsw: '',
      userphone: '',
      msgcode: '',
      sendtxt: '发送验证码',
      sendStatus: 0,
      countdown: 120,
      senDisable: 0,
      error1: ''
    }
  },
  methods: {
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
    tologin() {
      this.$router.push('/login')
    },
    login() {}
  }
}
</script>
