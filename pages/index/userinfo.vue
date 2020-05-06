<template>
  <div v-loading.fullscreen="loading" class="indexpage">
    <h1 class="pagetitle">
      企业资料
      <span
        :class="
          !user_info.status
            ? ''
            : user_info.status == '1'
            ? 'statebox1'
            : user_info.status == '4'
            ? 'statebox4'
            : ''
        "
      >
        ({{ user_info.statusName ? user_info.statusName : '-' }})
      </span>
    </h1>
    <div v-show="user_info.statusTitle" class="pagetip">
      {{ user_info.statusTitle ? user_info.statusTitle : '' }}
      {{
        user_info.data && user_info.data.content
          ? '。' + user_info.data.content
          : ''
      }}
    </div>
    <div class="form">
      <p class="formtitle">企业资质信息</p>
      <div class="formitems">
        <div class="formitem">
          <div class="itemname">申报单位名称</div>
          <input
            v-model="form.name"
            type="text"
            :disabled="disabled1"
            placeholder="请输入申报单位名称"
          />
        </div>
        <div class="formitem">
          <div class="itemname">统一社会信用代码</div>
          <input
            v-model="form.idnumber"
            type="text"
            :disabled="disabled1"
            placeholder="请输入统一社会信用代码"
          />
        </div>
        <div class="formitem">
          <div class="itemname">法人姓名</div>
          <input
            v-model="form.leaderman"
            type="text"
            :disabled="disabled1"
            placeholder="请输入法人姓名"
          />
        </div>
        <div class="formitem">
          <div class="itemname">法人身份证号</div>
          <input
            v-model="form.identity"
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
                  accept=".png,.jpg,.pdf,.doc,.docx,.xlsx,.zip,.rar"
                  @change="uploadchange1"
                />
              </div>
              <p class="uploadtip">请上传PNG/JPG格式图片，大小不超过4M</p>
            </div>
            <div class="filebox">
              <div v-for="(item, index) in files1" :key="index">
                <p :title="item.name" @click="downfile(item)">
                  {{ item.name }}
                </p>
                <div
                  v-if="!disabled1"
                  class="delIcon"
                  title="删除"
                  @click="deletefile1(index)"
                >
                  ×
                </div>
              </div>
            </div>
            <div v-if="!disabled1" class="uploadbox">
              <div class="uploadbtn">
                <span>上传身份证背面扫描件</span>
                <input
                  ref="upload2"
                  type="file"
                  accept=".png,.jpg,.pdf,.doc,.docx,.xlsx,.zip,.rar"
                  @change="uploadchange2"
                />
              </div>
              <p class="uploadtip">请上传PNG/JPG格式图片，大小不超过4M</p>
            </div>
            <div class="filebox">
              <div v-for="(item, index) in files2" :key="index">
                <p :title="item.name" @click="downfile(item)">
                  {{ item.name }}
                </p>
                <div
                  v-if="!disabled1"
                  class="delIcon"
                  title="删除"
                  @click="deletefile2(index)"
                >
                  ×
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="formitem">
          <div class="itemname">法人手机号</div>
          <input
            v-model="form.mobile"
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
              <div v-for="(item, index) in files3" :key="index">
                <p :title="item.name" @click="downfile(item)">
                  {{ item.name }}
                </p>
                <div
                  v-if="!disabled1"
                  class="delIcon"
                  title="删除"
                  @click="deletefile3(index)"
                >
                  ×
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="formitem">
          <div class="itemname">单位性质</div>
          <input
            v-model="form.enterprise_type"
            type="text"
            :disabled="disabled1"
            placeholder="请输入单位性质"
          />
          <!-- <el-select
            v-model="form.unitype"
            :disabled="disabled1"
            placeholder="请选择单位性质"
          >
            <el-option
              v-for="item in unitypes"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select> -->
        </div>
        <div class="formitem">
          <div class="itemname">注册地址</div>
          <input
            v-model="form.address"
            type="text"
            :disabled="disabled1"
            placeholder="请输入注册地址"
          />
        </div>
      </div>
    </div>
    <div class="form">
      <p class="formtitle">企业联系信息</p>
      <div class="formitems">
        <div class="formitem">
          <div class="itemname">管理员姓名</div>
          <input
            v-model="form.linkman"
            type="text"
            :disabled="disabled2"
            placeholder="请输入管理员姓名"
          />
        </div>
        <div class="formitem">
          <div class="itemname">管理员身份证号</div>
          <input
            v-model="form.link_identity"
            type="text"
            :disabled="disabled2"
            placeholder="请输入管理员身份证号"
          />
        </div>
        <div class="formitem">
          <div class="itemname">办公电话</div>
          <input
            v-model="form.tel"
            type="text"
            :disabled="disabled2"
            placeholder="请输入管理员办公电话"
          />
        </div>
        <div class="formitem">
          <div class="itemname">联系手机号</div>
          <input
            v-model="form.link_mobile"
            type="text"
            :disabled="disabled2"
            placeholder="请输入管理员联系手机号"
          />
        </div>
        <div class="formitem">
          <div class="itemname">QQ号</div>
          <input
            v-model="form.qq"
            type="text"
            :disabled="disabled2"
            placeholder="请输入管理员联系QQ号"
          />
        </div>
        <div class="formitem">
          <div class="itemname">微信号</div>
          <input
            v-model="form.wxnumber"
            type="text"
            :disabled="disabled2"
            placeholder="请输入管理员联系微信号"
          />
        </div>
        <div class="formitem">
          <div class="itemname">通讯地址</div>
          <input
            v-model="form.link_address"
            type="text"
            :disabled="disabled2"
            placeholder="请输入管理员通讯地址"
          />
        </div>
      </div>
    </div>
    <div class="btns">
      <div
        v-if="disabled2 && user_info.status && user_info.status == '1'"
        class="submitbtn"
        @click="modify"
      >
        更改企业信息
      </div>
      <div
        v-if="!disabled2 && user_info.status && user_info.status == '1'"
        class="submitbtn"
        @click="modifysure"
      >
        确定修改
      </div>
      <div
        v-if="
          !disabled2 &&
            user_info.status &&
            (user_info.status == '4' || user_info.status == '5')
        "
        class="submitbtn"
        @click="submit"
      >
        {{ user_info.status == '5' ? '提交信息' : '重新提交' }}
      </div>
    </div>
  </div>
</template>
<script>
import { formValidate } from '../../plugins/formValidate'
import { datawork } from '../../plugins/datawork'
import { getClientId } from '../../plugins/getclientid'
import { getToken } from '../../plugins/gettoken'
import { objectToFormdata } from '../../plugins/objectoformdata'
import { deepCopy } from '../../plugins/deepcopy'
export default {
  data() {
    return {
      form: {},
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
      disabled1: false,
      disabled2: false,
      user_info: {},
      // status: '',
      // authtip: '',
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
    this.getautheninfo()
  },
  methods: {
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
              (v.data.data.enterprise[0].status == '4' ||
              v.data.data.enterprise[0].status == '5')
            ) {
              this.disabled1 = false
              this.disabled2 = false
            } else {
              this.disabled1 = true
              this.disabled2 = true
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
    getautheninfo() {
      this.loading = true
      this.form = {}
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
            } else {
              this.form = deepCopy(v.data.data)
              this.files1 = v.data.data.identity_image
              this.fileLen1 = v.data.data.identity_image.length
              this.files2 = v.data.data.identity_imageb
              this.fileLen2 = v.data.data.identity_imageb.length
              this.files3 = v.data.data.idnumber_image
              this.fileLen3 = v.data.data.idnumber_image.length
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
    uploadchange1() {
      const inputDOM = this.$refs.upload1
      this.file1 = inputDOM.files
      const oldLen = this.fileLen1
      const len = this.file1.length + oldLen
      if (len > 5) {
        alert('最多可上传5个文件，您还可以上传' + (5 - oldLen) + '个')
        return false
      }
      const size = Math.floor(this.file1[0].size)
      if (size > 4 * 1024 * 1024) {
        alert('请选择4M以内的文件！')
        return false
      }
      this.uploadfile1()
    },
    uploadfile1() {
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
      data1.type = 'file'
      data2 = datawork(data1)
      data2.file_single = this.file1[0]
      const formdata = objectToFormdata(data2)
      this.$api.upload_file(formdata).then((v) => {
        console.log(v)
        if (v.data.errcode === 0) {
          this.fileLen1++
          this.files1.push(v.data.data)
        } else if (v.data.errcode === 1104) {
          getToken(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('tokenDone')) {
              that.uploadfile1()
            }
          }, 1000)
        } else if (v.data.errcode === 1103) {
          getClientId(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('done')) {
              that.uploadfile1()
            }
          }, 1000)
        } else if (v.data.errmsg === '客户端ID不能为空') {
          getClientId(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('done')) {
              that.uploadfile1()
            }
          }, 1000)
        } else {
          this.$message({
            type: 'error',
            message: v.data.errmsg,
            duration: 1000
          })
        }
      })
    },
    deletefile1(key) {
      this.$confirm('您确定删除该文件吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        lockScroll: false,
        type: 'warning'
      })
        .then(() => {
          this.$delete(this.files1, key)
          this.$refs.upload1.value = ''
          this.fileLen1--
        })
        .catch(() => {})
    },
    uploadchange2() {
      const inputDOM = this.$refs.upload2
      this.file2 = inputDOM.files
      const oldLen = this.fileLen2
      const len = this.file2.length + oldLen
      if (len > 5) {
        alert('最多可上传5个文件，您还可以上传' + (5 - oldLen) + '个')
        return false
      }
      const size = Math.floor(this.file2[0].size)
      if (size > 4 * 1024 * 1024) {
        alert('请选择4M以内的文件！')
        return false
      }
      this.uploadfile2()
    },
    uploadfile2() {
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
      data1.type = 'file'
      data2 = datawork(data1)
      data2.file_single = this.file2[0]
      const formdata = objectToFormdata(data2)
      this.$api.upload_file(formdata).then((v) => {
        console.log(v)
        if (v.data.errcode === 0) {
          this.fileLen2++
          this.files2.push(v.data.data)
        } else if (v.data.errcode === 1104) {
          getToken(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('tokenDone')) {
              that.uploadfile2()
            }
          }, 1000)
        } else if (v.data.errcode === 1103) {
          getClientId(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('done')) {
              that.uploadfile2()
            }
          }, 1000)
        } else {
          this.$message({
            type: 'error',
            message: v.data.errmsg,
            duration: 1000
          })
        }
      })
    },
    deletefile2(key) {
      this.$confirm('您确定删除该文件吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        lockScroll: false,
        type: 'warning'
      })
        .then(() => {
          this.$delete(this.files2, key)
          this.$refs.upload2.value = ''
          this.fileLen2--
        })
        .catch(() => {})
    },
    uploadchange3() {
      const inputDOM = this.$refs.upload3
      this.file3 = inputDOM.files
      const oldLen = this.fileLen3
      const len = this.file3.length + oldLen
      if (len > 5) {
        alert('最多可上传5个文件，您还可以上传' + (5 - oldLen) + '个')
        return false
      }
      const size = Math.floor(this.file3[0].size)
      if (size > 4 * 1024 * 1024) {
        alert('请选择4M以内的文件！')
        return false
      }
      this.uploadfile3()
    },
    uploadfile3() {
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
      data1.type = 'file'
      data2 = datawork(data1)
      data2.file_single = this.file3[0]
      const formdata = objectToFormdata(data2)
      this.$api.upload_file(formdata).then((v) => {
        console.log(v)
        if (v.data.errcode === 0) {
          this.fileLen3++
          this.files3.push(v.data.data)
        } else if (v.data.errcode === 1104) {
          getToken(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('tokenDone')) {
              that.uploadfile3()
            }
          }, 1000)
        } else if (v.data.errcode === 1103) {
          getClientId(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('done')) {
              that.uploadfile3()
            }
          }, 1000)
        } else {
          this.$message({
            type: 'error',
            message: v.data.errmsg,
            duration: 1000
          })
        }
      })
    },
    deletefile3(key) {
      this.$confirm('您确定删除该文件吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        lockScroll: false,
        type: 'warning'
      })
        .then(() => {
          this.$delete(this.files3, key)
          this.$refs.upload3.value = ''
          this.fileLen3--
        })
        .catch(() => {})
    },
    submit() {
      if (!formValidate(this.form, this)) return
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
      data1.name = this.form.name
      data1.idnumber = this.form.idnumber
      data1.idnumber_image = JSON.stringify(this.files3)
      data1.leaderman = this.form.leaderman
      data1.mobile = this.form.mobile
      data1.identity = this.form.identity
      data1.identity_image = JSON.stringify(this.files1)
      data1.identity_imageb = JSON.stringify(this.files2)
      data1.address = this.form.address
      data1.enterprise_type = this.form.enterprise_type
      data1.linkman = this.form.linkman
      data1.link_identity = this.form.link_identity
      data1.link_mobile = this.form.link_mobile
      data1.link_address = this.form.link_address
      data1.qq = this.form.qq
      data1.wxnumber = this.form.wxnumber
      data1.tel = this.form.tel
      data2 = datawork(data1)
      this.$api.enterprise_authen(data2).then((v) => {
        console.log(v)
        if (v.data.errcode === 0) {
          this.loading = false
          this.$message({
            type: 'success',
            message: '提交成功'
          })
          this.userinfo()
          this.getautheninfo()
        } else if (v.data.errcode === 1104) {
          getToken(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('tokenDone')) {
              that.submit()
            }
          }, 1000)
        } else if (v.data.errcode === 1103) {
          getClientId(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('done')) {
              that.submit()
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
    downfile(val) {
      // window.location.href = 'http://baidu.com'
      window.open(val.url, '_blank')
    },
    modify() {
      this.disabled2 = false
    },
    modifysure() {
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
      data1.linkman = this.form.linkman
      data1.link_identity = this.form.link_identity
      data1.link_mobile = this.form.link_mobile
      data1.link_address = this.form.link_address
      data1.qq = this.form.qq
      data1.wxnumber = this.form.wxnumber
      data1.tel = this.form.tel
      data2 = datawork(data1)
      this.$api.edit_authen_info(data2).then((v) => {
        console.log(v)
        if (v.data.errcode === 0) {
          this.loading = false
          this.$message({
            type: 'success',
            message: '修改成功'
          })
          this.userinfo()
          this.getautheninfo()
        } else if (v.data.errcode === 1104) {
          getToken(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('tokenDone')) {
              that.modifysure()
            }
          }, 1000)
        } else if (v.data.errcode === 1103) {
          getClientId(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('done')) {
              that.modifysure()
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
