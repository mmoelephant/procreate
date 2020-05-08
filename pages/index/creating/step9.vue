<template>
  <div v-loading.fullscreen="loading" class="indexpage">
    <div class="contentbox">
      <div class="contenthead">9.上传相关附件</div>
      <div class="content">
        <div class="formitems">
          <div class="formitem">
            <div>
              <div class="uploadbox">
                <div class="uploadbtn">
                  <span>上传相关附件</span>
                  <input
                    ref="upload1"
                    type="file"
                    accept=".png, .jpg, .pdf, .docx, .xlsx, .zip, .rar"
                    @change="uploadchange1"
                  />
                </div>
                <p class="uploadtip">
                  注意 *：
                  <br />1.请上传PDF/word/execl/jpg/png格式附件，单个文件大小不超过20M。
                  <br />2.如用多个文件请依次上传。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="probox">
      <p class="pagetitle">附件列表</p>
      <div class="listbox">
        <div class="listhead">
          <p class="col13">序号</p>
          <p class="col23">文件名称</p>
          <p class="col33">操作</p>
        </div>
        <div v-for="(item, index) in files1" :key="index" class="listItem">
          <p class="col13">{{ index + 1 }}</p>
          <p class="col23">{{ item.name }}</p>
          <p class="col33">
            <!-- <span @click="edit">编辑</span> -->
            <span :title="item.name" @click="downfile(item)">下载</span>
            <span title="删除" @click="deletefile1(index)">删除</span>
          </p>
        </div>
      </div>
      <div v-if="files1.length === 0" class="nodata">
        暂时没有附件，请先添加附件
      </div>
    </div>
    <div class="btns">
      <div @click="savemsg">保存</div>
      <div class="submitbtn" @click="next">提交并下载打印文件</div>
    </div>
  </div>
</template>
<script>
import { datawork } from '../../../plugins/datawork'
import { getClientId } from '../../../plugins/getclientid'
import { getToken } from '../../../plugins/gettoken'
import { objectToFormdata } from '../../../plugins/objectoformdata'
import { deepCopy } from '../../../plugins/deepcopy'
import { formValidate21 } from '../../../plugins/formValidate21'
import { formValidate3 } from '../../../plugins/formValidate3'
import { formValidate4 } from '../../../plugins/formValidate4'
import { formValidate5 } from '../../../plugins/formValidate5'
import { formValidate6 } from '../../../plugins/formValidate6'
import { formValidate7 } from '../../../plugins/formValidate7'
import { formValidate8 } from '../../../plugins/formValidate8'
import { formValidate92 } from '../../../plugins/formValidate92'
import { formValidate102 } from '../../../plugins/formValidate102'
import { formValidate11 } from '../../../plugins/formValidate11'
export default {
  data() {
    return {
      form: {},
      file1: {},
      fileLen1: 0,
      files1: [],
      Id: 0,
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
    if (
      localStorage.getItem('form') &&
      JSON.parse(localStorage.getItem('form')) &&
      JSON.parse(localStorage.getItem('form')) != {}
    ) {
      console.log(JSON.parse(localStorage.getItem('form')))
      this.form = deepCopy(JSON.parse(localStorage.getItem('form')))
    }
    if (this.form.files && this.form.files.length > 0) {
      this.files1 = this.form.files
      this.fileLen1 = this.form.files.length
    }
  },
  methods: {
    savemsg() {
      // “保存”操作
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
      for (const i in this.form) {
        // 合作单位和项目所在地是转为字符串
        if (i == 'address' || i == 'partner_name') {
          data1[i] = JSON.stringify(this.form[i])
        } else {
          // 给表格中的每一项都去处空格
          if (this.form[i].toString().replace(/(^\s*)|(\s*$)/g, '')) {
            data1[i] = this.form[i].toString().replace(/(^\s*)|(\s*$)/g, '')
          }
        }
      }
      if (!this.$route.query.id) {
        // 保存生成的id
        if (localStorage.getItem('applyid')) {
          data1.id = localStorage.getItem('applyid')
        }
      } else {
        data1.id = this.$route.query.id
      }
      // data1.category_id = 1
      if (this.files1.length > 0) {
        this.form.files = deepCopy(this.files1)
        data1.files = JSON.stringify(this.files1)
      }
      data2 = datawork(data1)
      console.log(data2)
      this.$api.save_create(data2).then((v) => {
        if (v.data.errcode === 0) {
          this.loading = false
          this.$message({
            type: 'success',
            message: '保存成功'
          })
          this.$store.commit('SET_FORM', this.form)
          localStorage.setItem('form', JSON.stringify(this.form))
          console.log(this.form)
          if (!localStorage.getItem('applyid') || !Number(localStorage.getItem('applyid'))) {
            localStorage.setItem('applyid', v.data.data)
            this.$store.commit('SET_APPLY_ID', v.data.data)
          }
        } else if (v.data.errcode === 1104) {
          getToken(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('tokenDone')) {
              that.savemsg()
            }
          }, 1000)
        } else if (v.data.errcode === 1103) {
          getClientId(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('done')) {
              that.savemsg()
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
    next() {
      if (!formValidate21(this.form, this)) return
      if (!formValidate3(this.form, this)) return
      if (!formValidate4(this.form, this)) return
      if (!formValidate5(this.form, this)) return
      if (!formValidate6(this.form, this)) return
      if (!formValidate7(this.form, this)) return
      if (!formValidate8(this.form, this)) return
      if (!formValidate92(this.form, this)) return
      if (!formValidate102(this.form, this)) return
      if (!formValidate11(this.form, this)) return
      this.form.files = deepCopy(this.files1)
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
      for (const i in this.form) {
        // 合作单位和项目所在地是转为字符串
        if (i == 'address' || i == 'partner_name') {
          data1[i] = JSON.stringify(this.form[i])
        } else {
          // 给表格中的每一项都去处空格
          if (this.form[i].toString().replace(/(^\s*)|(\s*$)/g, '')) {
            data1[i] = this.form[i].toString().replace(/(^\s*)|(\s*$)/g, '')
          }
        }
      }
      if (!this.$route.query.id) {
        // 保存生成的id
        if (localStorage.getItem('applyid')) {
          data1.id = localStorage.getItem('applyid')
        }
      } else {
        data1.id = this.$route.query.id
      }
      // data1.category_id = 1
      data1.files = JSON.stringify(this.files1)
      data2 = datawork(data1)
      console.log(data2)
      this.$api.commit_create(data2).then((v) => {
        console.log(v)
        if (v.data.errcode === 0) {
          this.loading = false
          this.$message({
            type: 'success',
            message: '提交成功',
            duration: 1000
          })
          if (this.$route.query.id) {
            this.Id = Number(this.$router.query.id)
          } else if(localStorage.getItem('applyid')) {
            this.Id = Number(localStorage.getItem('applyid'))
          }
          // 提交成功之后要清除掉缓存，包括form和applyid
          this.$store.commit('SET_FORM', {})
          localStorage.setItem('form', '')
          this.$store.commit('SET_APPLY_ID', '')
          localStorage.removeItem('applyid')
          console.log(this.form)
          setTimeout(() => {
            that.$router.push({ path: '/declaration/great/cover', query: { id: this.Id } })
          }, 1000);
        } else if (v.data.errcode === 1104) {
          getToken(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('tokenDone')) {
              that.next()
            }
          }, 1000)
        } else if (v.data.errcode === 1103) {
          getClientId(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('done')) {
              that.next()
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
      if (size > 20 * 1024 * 1024) {
        alert('请选择20M以内的文件！')
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
    downfile(val) {
      window.location.href = val.url
      // window.open(val.url, '_blank')
    },
    edit() {}
  }
}
</script>
<style lang="stylus" scoped>
.uploadtip
  color red
.listItem
  border-bottom 1px #e6e6e6 solid
.listItem:last-of-type
  border none
</style>
