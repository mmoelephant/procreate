<template>
  <div class="indexpage">
    <h1 class="pagetitle">
      企业资料
      <span class="statebox">（审核中）</span>
    </h1>
    <div class="pagetip">
      您提交的企业资料正在审核中，请耐心等待，如有疑问请联系
      <span>0871-65874167</span>
    </div>
    <div class="form">
      <p class="formtitle">资料信息</p>
      <div class="formitems">
        <div class="formitem">
          <div class="itemname">申报单位名称</div>
          <input
            v-model="enterprise_name"
            type="text"
            :disabled="disabled1"
            placeholder="请输入申报单位名称"
          />
        </div>
        <div class="formitem">
          <div class="itemname">统一社会信用代码</div>
          <input
            v-model="enterprise_code"
            type="text"
            :disabled="disabled1"
            placeholder="请输入统一社会信用代码"
          />
        </div>
        <div class="formitem">
          <div class="itemname">法人姓名</div>
          <input
            v-model="leaderman"
            type="text"
            :disabled="disabled1"
            placeholder="请输入法人姓名"
          />
        </div>
        <div class="formitem">
          <div class="itemname">法人身份证号</div>
          <input
            v-model="idnumber"
            type="text"
            :disabled="disabled1"
            placeholder="请输入法人身份证号"
          />
        </div>
        <div class="formitem upload">
          <div class="itemname">法人身份证正反面</div>
          <div>
            <div v-if="!disabled1" class="uploadbox">
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
                <p @click="downfile">文件名称在这里</p>
                <div v-if="!disabled1" class="delIcon">×</div>
              </div>
            </div>
            <div v-if="!disabled1" class="uploadbox">
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
                <p @click="downfile">文件名称在这里</p>
                <div v-if="!disabled1" class="delIcon">×</div>
              </div>
            </div>
          </div>
        </div>
        <div class="formitem">
          <div class="itemname">法人手机号</div>
          <input
            v-model="leaderphone"
            type="text"
            :disabled="disabled1"
            placeholder="请输入法人手机号"
          />
        </div>
        <div class="formitem upload">
          <div class="itemname">营业执照</div>
          <div>
            <div v-if="!disabled1" class="uploadbox">
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
                <p @click="downfile">文件名称在这里</p>
                <div v-if="!disabled1" class="delIcon">×</div>
              </div>
            </div>
          </div>
        </div>
        <div class="formitem">
          <div class="itemname">单位性质</div>
          <el-select
            v-model="unitype"
            :disabled="disabled1"
            placeholder="请选择单位性质"
          >
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
            :disabled="disabled1"
            placeholder="请输入注册地址"
          />
        </div>
      </div>
    </div>
    <div class="btns">
      <div v-if="disabled1" class="submitbtn" @click="modify">修改</div>
      <div v-else class="submitbtn" @click="submit">重新提交</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      disabled1: true
    }
  },
  methods: {
    uploadchange1() {},
    uploadchange2() {},
    uploadchange3() {},
    formValidate() {
      if (!this.enterprise_name) {
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
      } else {
        return true
      }
    },
    submit() {
      /*eslint-disable*/
      // if (!this.formValidate()) return
      this.disabled1 = true
    },
    downfile(aa) {
      window.location.href = 'http://baidu.com'
      // window.open('//baidu.com', '_blank')
    },
    modify() {
      this.disabled1 = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.indexpage
  color #666
.pagetitle
  margin 24px 0
  font-size 18px
  // font-weight normal
  color #333
  span
    font-size 16px
    font-weight normal
    color #999
.pagetip
  width 100%
  height 50px
  padding 0 40px
  box-shadow 0px 3px 10px rgba(151,190,255,0.17)
  font-size 12px
  line-height 50px
  background #fff
  span
    font-weight bold
    color #1D78D3
.form
  display flex
  box-shadow 0px 3px 10px rgba(151,190,255,0.17)
  padding 30px 50px
  margin 20px 0
  background #fff
.formtitle
  width auto
  max-width 160px
  font-weight bold
  color #333
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
  input[disabled]
    border none
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
