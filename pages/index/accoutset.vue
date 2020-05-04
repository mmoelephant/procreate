<template>
  <div class="indexpage">
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
          <input v-model="form.oldpsw" type="text" placeholder="请输入旧密码" />
        </div>
        <div class="formitem">
          <div class="itemname">新密码</div>
          <input v-model="form.newpsw" type="text" placeholder="请输入新密码" />
        </div>
        <div class="formitem">
          <div class="itemname">确认新密码</div>
          <input
            v-model="form.confirmnew"
            type="text"
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
          <input v-model="form.mobile" type="text" placeholder="请输入手机号" />
        </div>
        <div class="formitem msgcode">
          <div class="itemname">短信验证码</div>
          <input
            v-model="form.msgcode"
            type="text"
            placeholder="请输入短信验证码"
          />
          <div
            :class="senDisable ? 'sendbtn sendbtn2' : 'sendbtn'"
            @click="send"
          >
            {{ sendtxt }}
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
// import { datawork } from '../../plugins/datawork'
// import { getClientId } from '../../plugins/getclientid'
// import { getToken } from '../../plugins/gettoken'
export default {
  data() {
    return {
      username: '',
      password: '******',
      userphone: '',
      disabled1: true,
      form: {},
      setshow: false,
      setshow2: false,
      next: true,
      sendtxt: '发送验证码',
      sendStatus: 0,
      countdown: 120,
      senDisable: 0
    }
  },
  methods: {
    modifypsw() {
      this.setshow = true
    },
    modifymobile() {
      this.setshow2 = true
    },
    cancel() {
      this.setshow = false
    },
    sure() {
      // const commondata = this.$store.state.commondata
      // const data1 = {}
      // let data2 = {}
      // const that = this
      // for (const i in commondata) {
      //   data1[i] = commondata[i]
      // }
      // if (localStorage.getItem('userid')) {
      //   data1.user_id = localStorage.getItem('userid')
      // }
      // data1.timestamp = Math.round(new Date().getTime() / 1000).toString()
      // data1.nonce_str =
      //   new Date().getTime() + '' + Math.floor(Math.random() * 899 + 100)
      // if (localStorage.getItem('clientid')) {
      //   data1.client_id = localStorage.getItem('clientid')
      // }
      // if (localStorage.getItem('accesstoken')) {
      //   data1.access_token = localStorage.getItem('accesstoken')
      // }
      this.setshow = false
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
    cancel2() {
      this.setshow2 = false
    },
    sure2() {
      this.next = !this.next
      this.setshow2 = false
      // if(this.next) {

      // }
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
