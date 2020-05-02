<template>
  <div class="regispage">
    <div class="ban">
      <div class="bantitle">申报单位注册</div>
      <div class="bantip">
        <div>1. 设置账户基本信息</div>
        <div class="line"></div>
        <div>2. 企业资质信息登记</div>
        <div class="line"></div>
        <div>3. 等待注册资料审核</div>
        <div class="line"></div>
        <div>4. 注册成功</div>
      </div>
    </div>
    <div class="regisbox">
      <div class="form">
        <p class="formtitle">一、设置账户基基本信息</p>
        <div class="formitems">
          <div class="formitem">
            <div class="itemname">用户名</div>
            <input
              v-model="username"
              type="text"
              placeholder="请设置登录用户名"
            />
          </div>
          <div class="formitem">
            <div class="itemname">设置密码</div>
            <input
              v-model="text"
              type="password"
              placeholder="请设置登录密码"
            />
          </div>
          <div class="formitem">
            <div class="itemname">确认密码</div>
            <input
              v-model="confirmpsw"
              type="text"
              placeholder="请确认登录密码"
            />
          </div>
          <div class="formitem">
            <div class="itemname">注册手机号</div>
            <input
              v-model="userphone"
              type="text"
              placeholder="请输入注册手机号"
            />
          </div>
          <div class="formitem msgcode">
            <div class="itemname">验证手机号</div>
            <input
              v-model="msgcode"
              type="text"
              placeholder="请输入短信验证码"
            />
            <div :class="senDisable ? 'sendbtn2' : 'sendbtn'" @click="send">
              {{ sendtxt }}
            </div>
          </div>
        </div>
      </div>
      <div class="form">
        <p class="formtitle">二、企业资质信息登记</p>
        <div class="formitems">
          <div class="formitem">
            <div class="itemname">申报单位名称</div>
            <input
              v-model="enterprise_name"
              type="text"
              placeholder="请输入申报单位名称"
            />
          </div>
          <div class="formitem">
            <div class="itemname">统一社会信用代码</div>
            <input
              v-model="enterprise_code"
              type="text"
              placeholder="请输入统一社会信用代码"
            />
          </div>
          <div class="formitem">
            <div class="itemname">法人姓名</div>
            <input
              v-model="leaderman"
              type="text"
              placeholder="请输入法人姓名"
            />
          </div>
          <div class="formitem">
            <div class="itemname">法人身份证号</div>
            <input
              v-model="idnumber"
              type="text"
              placeholder="请输入法人身份证号"
            />
          </div>
          <div class="formitem upload">
            <div class="itemname">法人身份证正反面</div>
            <div>
              <div class="uploadbox">
                <div class="uploadbtn">
                  <span>上传身份证正面扫描件</span>
                  <input
                    ref="upload1"
                    type="file"
                    accept=".png,.jpg,.pdf,.docx,.xlsx,.zip,.rar"
                    @change="uploadchange1"
                  />
                </div>
                <p class="uploadtip">请上传PNG/JPG格式图片，大小不超过4M</p>
              </div>
              <div class="filebox">
                <div>
                  <!-- title -->
                  <p>文件名称在这里</p>
                  <div class="delIcon">×</div>
                </div>
              </div>
              <div class="uploadbox">
                <div class="uploadbtn">
                  <span>上传身份证背面扫描件</span>
                  <input
                    ref="upload2"
                    type="file"
                    accept=".png,.jpg,.pdf,.docx,.xlsx,.zip,.rar"
                    @change="uploadchange2"
                  />
                </div>
                <p class="uploadtip">请上传PNG/JPG格式图片，大小不超过4M</p>
              </div>
              <div class="filebox">
                <div>
                  <!-- title -->
                  <p>文件名称在这里</p>
                  <div class="delIcon">×</div>
                </div>
              </div>
            </div>
          </div>
          <div class="formitem">
            <div class="itemname">法人手机号</div>
            <input
              v-model="leaderphone"
              type="text"
              placeholder="请输入法人手机号"
            />
          </div>
          <div class="formitem upload">
            <div class="itemname">营业执照</div>
            <div>
              <div class="uploadbox">
                <div class="uploadbtn">
                  <span>上传营业执照扫描件</span>
                  <input
                    ref="upload3"
                    type="file"
                    accept=".png,.jpg,.pdf,.docx,.xlsx,.zip,.rar"
                    @change="uploadchange3"
                  />
                </div>
                <p class="uploadtip">请上传PNG/JPG格式图片，大小不超过4M</p>
              </div>
              <div class="filebox">
                <div>
                  <!-- title -->
                  <p>文件名称在这里</p>
                  <div class="delIcon">×</div>
                </div>
              </div>
            </div>
          </div>
          <div class="formitem">
            <div class="itemname">单位性质</div>
            <el-select v-model="unitype" placeholder="请选择单位性质">
              <el-option
                v-for="item in unitypes"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
          <div class="formitem">
            <div class="itemname">注册地址</div>
            <input
              v-model="regisaddre"
              type="text"
              placeholder="请输入注册地址"
            />
          </div>
        </div>
      </div>
      <div class="form">
        <p class="formtitle">三、企业联系信息</p>
        <div class="formitems">
          <div class="formitem">
            <div class="itemname">管理员姓名</div>
            <input
              v-model="adminname"
              type="text"
              placeholder="请输入管理员姓名"
            />
          </div>
          <div class="formitem">
            <div class="itemname">管理员身份证号</div>
            <input
              v-model="adminid"
              type="password"
              placeholder="请输入管理员身份证号"
            />
          </div>
          <div class="formitem">
            <div class="itemname">办公电话</div>
            <input
              v-model="adminphone"
              type="text"
              placeholder="请输入管理员办公电话"
            />
          </div>
          <div class="formitem">
            <div class="itemname">联系手机号</div>
            <input
              v-model="adminmobile"
              type="text"
              placeholder="请输入管理员联系手机号"
            />
          </div>
          <div class="formitem">
            <div class="itemname">QQ号</div>
            <input
              v-model="adminqq"
              type="text"
              placeholder="请输入管理员联系QQ号"
            />
          </div>
          <div class="formitem">
            <div class="itemname">微信号</div>
            <input
              v-model="adminwx"
              type="text"
              placeholder="请输入管理员联系微信号"
            />
          </div>
          <div class="formitem">
            <div class="itemname">通讯地址</div>
            <input
              v-model="adminaddre"
              type="text"
              placeholder="请输入管理员通讯地址"
            />
          </div>
        </div>
      </div>
      <div class="btns">
        <div @click="backLogin">返回登录页</div>
        <div class="submitbtn" @click="submit">提交</div>
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
      enterprise_name: '',
      enterprise_code: '',
      leaderman: '',
      idnumber: '',
      leaderphone: '',
      file1: {},
      fileLen1: 0,
      files1: [],
      file2: {},
      fileLen2: 0,
      files2: [],
      file3: {},
      fileLen3: 0,
      files3: [],
      unitypes: [],
      unitype: '',
      regisaddre: '',
      adminname: '',
      adminid: '',
      adminphone: '',
      adminmobile: '',
      adminqq: '',
      adminwx: '',
      adminaddre: ''
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
    uploadchange1() {},
    uploadchange2() {},
    uploadchange3() {},
    formValidate() {
      if (!this.username) {
        this.$message({
          type: 'error',
          message: '请输入用户名'
        })
        return false
      } else if (!this.password) {
        this.$message({
          type: 'error',
          message: '请设置密码'
        })
        return false
      } else if (!this.confirmpsw) {
        this.$message({
          type: 'error',
          message: '请再次输入登录密码'
        })
        return false
      } else if (!this.userphone || this.userphone !== 11) {
        this.$message({
          type: 'error',
          message: '请输入正确的注册手机号'
        })
        return false
      } else if (!this.msgcode) {
        this.$message({
          type: 'error',
          message: '请输入短信验证码'
        })
        return false
      } else if (!this.enterprise_name) {
        this.$message({
          type: 'error',
          message: '请输入申报单位名称'
        })
        return false
      } else if (!this.enterprise_code || this.enterprise_code !== 18) {
        this.$message({
          type: 'error',
          message: '请输入正确的统一社会信用代码'
        })
        return false
      } else if (!this.leaderman) {
        this.$message({
          type: 'error',
          message: '请输入法人姓名'
        })
        return false
      } else if (!this.idnumber || this.idnumber.length !== 18) {
        this.$message({
          type: 'error',
          message: '请输入正确的法人身份证号'
        })
        return false
      } else if (this.files1.length === 0) {
        this.$message({
          type: 'error',
          message: '请上传身份证正面扫描件'
        })
        return false
      } else if (this.files2.length === 0) {
        this.$message({
          type: 'error',
          message: '请上传身份证背面扫描件'
        })
        return false
      } else if (!this.leaderphone || this.leaderphone.length !== 11) {
        this.$message({
          type: 'error',
          message: '请输入正确的法人手机号'
        })
        return false
      } else if (this.files3.length === 0) {
        this.$message({
          type: 'error',
          message: '请上传营业执照'
        })
        return false
      } else if (!this.unitype) {
        this.$message({
          type: 'error',
          message: '请选择单位性质'
        })
        return false
      } else if (!this.regisaddre) {
        this.$message({
          type: 'error',
          message: '请输入注册地址'
        })
        return false
      } else if (!this.adminname) {
        this.$message({
          type: 'error',
          message: '请输入管理员姓名'
        })
        return false
      } else if (!this.adminid) {
        this.$message({
          type: 'error',
          message: '请输入管理员身份证号'
        })
        return false
      } else if (!this.adminphone) {
        this.$message({
          type: 'error',
          message: '请输入办公电话'
        })
        return false
      } else if (!this.adminmobile) {
        this.$message({
          type: 'error',
          message: '请输入管理员联系手机号'
        })
        return false
      } else if (!this.adminqq) {
        this.$message({
          type: 'error',
          message: '请输入管理员联系qq'
        })
        return false
      } else if (!this.adminwx) {
        this.$message({
          type: 'error',
          message: '请输入管理员联系微信号'
        })
        return false
      } else if (!this.adminaddre) {
        this.$message({
          type: 'error',
          message: '请输入管理员通讯地址'
        })
        return false
      } else {
        return true
      }
    },
    backLogin() {
      this.$router.push('/login')
    },
    submit() {
      /*eslint-disable*/
      if (!this.formValidate()) return
    }
  }
}
</script>
<style lang="stylus" scoped>
.regispage
  width 1200px
  margin 0 auto
.ban
  display flex
  flex-direction column
  align-items center
  justify-content center
  width 100%
  height 140px
  margin 40px 0
  background url(../../assets/img/regisbg.jpg) no-repeat
  color #ddd
.bantitle
  margin-bottom 20px
  font-size 24px
  color #fff
.bantip
  display flex
  align-items center
.line
  width 100px
  height 1px
  margin 0 10px
  background #fff
.regisbox
  padding 30px 50px
  box-shadow 0px 3px 10px rgba(151,190,255,0.17)
  background #fff
.form
  display flex
  margin-bottom 60px
.formtitle
  width auto
  max-width 160px
  font-weight bold
.formitems
  width calc(100% - 200px)
  margin-left 40px
.formitem
  display flex
  align-items center
  margin-bottom 20px
  .itemname
    width 114px
    margin-right 20px
    text-align right
    color #666
  input
    width 420px
    height 40px
    background #F3F6FA
    border 1px #DCDEE2 solid
.formitem.msgcode
  position relative
  input
    width 320px
.formitem.upload
  align-items flex-start
  .itemname
    margin-top 10px
.uploadbox, .filebox
  width 420px
  display flex
  align-items center
.uploadbtn
  position relative
  width 160px
  height 40px
  margin-right 10px
  text-align center
  line-height 40px
  background #50A7FF
  color #fff
  cursor pointer
  input
    position absolute
    top 0
    left 0
    opacity 0
    cursor pointer
.uploadtip
  font-size 12px
  color #ccc
.filebox
  margin-top 10px
  color #1D78D3
  >div
    width 100%
    display flex
    align-items center
    margin-bottom 10px
    p
      width auto
      max-width calc(100% - 26px)
      text-decoration underline
      cursor pointer
    p:hover
      color #3972E4
.delIcon
  width 12px
  height 12px
  border-radius 50%
  margin-left 10px
  font-size 12px
  line-height 11px
  text-align center
  background #666
  color #fff
  cursor pointer
.delIcon:hover
  background #333
.sendbtn
  position absolute
  left 454px
  top 0
  width 100px !important
  height 40px
  text-align center
  line-height 44px
  background #50A7FF
  color #fff
  cursor pointer
.sendbtn2
  background #999
  cursor default
.btns
  display flex
  justify-content center
  >div
    width 140px
    height 36px
    border-radius 20px
    margin 0 10px
    text-align center
    line-height 36px
    background #CCC
    color #fff
    cursor pointer
  div:hover
    background #bbb
  div.submitbtn
    background #3972E4
  div.submitbtn:hover
    background #50A7FF
</style>
