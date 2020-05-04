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
      <p class="formtitle">企业资质信息</p>
      <div class="formitems">
        <div class="formitem">
          <div class="itemname">申报单位名称</div>
          <input
            v-model="form.enterprise_name"
            type="text"
            :disabled="disabled1"
            placeholder="请输入申报单位名称"
          />
        </div>
        <div class="formitem">
          <div class="itemname">统一社会信用代码</div>
          <input
            v-model="form.enterprise_code"
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
            v-model="form.idnumber"
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
            v-model="form.leaderphone"
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
          </el-select>
        </div>
        <div class="formitem">
          <div class="itemname">注册地址</div>
          <input
            v-model="form.regisaddre"
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
            v-model="form.adminname"
            type="text"
            :disabled="disabled1"
            placeholder="请输入管理员姓名"
          />
        </div>
        <div class="formitem">
          <div class="itemname">管理员身份证号</div>
          <input
            v-model="form.adminid"
            type="password"
            :disabled="disabled1"
            placeholder="请输入管理员身份证号"
          />
        </div>
        <div class="formitem">
          <div class="itemname">办公电话</div>
          <input
            v-model="form.adminphone"
            type="text"
            :disabled="disabled1"
            placeholder="请输入管理员办公电话"
          />
        </div>
        <div class="formitem">
          <div class="itemname">联系手机号</div>
          <input
            v-model="form.adminmobile"
            type="text"
            :disabled="disabled1"
            placeholder="请输入管理员联系手机号"
          />
        </div>
        <div class="formitem">
          <div class="itemname">QQ号</div>
          <input
            v-model="form.adminqq"
            type="text"
            :disabled="disabled1"
            placeholder="请输入管理员联系QQ号"
          />
        </div>
        <div class="formitem">
          <div class="itemname">微信号</div>
          <input
            v-model="form.adminwx"
            type="text"
            :disabled="disabled1"
            placeholder="请输入管理员联系微信号"
          />
        </div>
        <div class="formitem">
          <div class="itemname">通讯地址</div>
          <input
            v-model="form.adminaddre"
            type="text"
            :disabled="disabled1"
            placeholder="请输入管理员通讯地址"
          />
        </div>
      </div>
    </div>
    <div class="btns">
      <div v-if="disabled1" class="submitbtn" @click="modify">更改企业信息</div>
      <div v-else class="submitbtn" @click="submit">重新提交</div>
    </div>
  </div>
</template>
<script>
// import { formValidate } from '../../plugins/formValidate'
import { datawork } from '../../plugins/datawork'
import { getClientId } from '../../plugins/getclientid'
import { getToken } from '../../plugins/gettoken'
import { objectToFormdata } from '../../plugins/objectoformdata'
export default {
  data() {
    return {
      form: {},
      unitypes: [],
      disabled1: true
    }
  },
  methods: {
    uploadchange1() {
      const inputDOM = this.$refs.upload1
      this.form.file1 = inputDOM.files
      const oldLen = this.form.fileLen1
      const len = this.form.file1.length + oldLen
      if (len > 5) {
        alert('最多可上传5个文件，您还可以上传' + (5 - oldLen) + '个')
        return false
      }
      const size = Math.floor(this.form.file1[0].size)
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
      data2.file_single = this.form.file1[0]
      const formdata = objectToFormdata(data2)
      this.$api.upload_file(formdata).then((v) => {
        if (v.data.errcode === 0) {
          this.form.fileLen1++
          this.form.files1.push(v.data.data)
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
          this.$delete(this.form.files1, key)
          this.$refs.upload1.value = ''
        })
        .catch(() => {})
    },
    uploadchange2() {},
    uploadchange3() {},
    submit() {
      /*eslint-disable*/
      // if (!formValidate(this.form, this)) return
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
