<template>
  <div class="indexpage">
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
        <div class="listItem">
          <p class="col13">序号</p>
          <p class="col23">合作单位名称</p>
          <p class="col33">
            <span @click="edit">编辑</span>
          </p>
        </div>
      </div>
      <div class="paging">
        <el-pagination
          layout="total, prev, pager, next"
          :page-size="8"
          :hide-on-single-page="false"
          :total="pagetotal"
          @current-change="pagechange"
        ></el-pagination>
      </div>
    </div>
    <div class="btns">
      <div>保存</div>
      <div class="submitbtn" @click="next">提交并下载打印文件</div>
    </div>
  </div>
</template>
<script>
import { datawork } from '../../../plugins/datawork'
import { getClientId } from '../../../plugins/getclientid'
import { getToken } from '../../../plugins/gettoken'
import { objectToFormdata } from '../../../plugins/objectoformdata'
// import { deepCopy } from '../../../plugins/deepcopy'
export default {
  data() {
    return {
      form: {},
      file1: {},
      fileLen1: 0,
      files1: [],
      genders: [],
      pagetotal: 0,
      disabled1: false,
      dialogshow: false
    }
  },
  methods: {
    next() {
      // this.$router.push('/step2')
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
    pagechange(val) {},
    edit() {
      this.dialogshow = true
    },
    editdone() {
      this.dialogshow = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.uploadtip
  color red
</style>
