<template>
  <div v-loading.fullscreen="loading" class="indexpage">
    <div class="contentbox">
      <div class="contenthead">1.项目基本信息</div>
      <div class="content">
        <div class="formitems">
          <div class="formitem">
            <div class="itemname">项目名称</div>
            <input
              v-model="form.name"
              type="text"
              disabled
              placeholder="请输入项目名称"
            />
          </div>
          <div class="formitem">
            <div class="itemname">项目研发类型</div>
            <input
              v-model="form.a_nx"
              type="text"
              placeholder="请输入项目研发类型"
            />
          </div>
          <div class="formitem">
            <div class="itemname">属何种合作协议（协定）</div>
            <input
              v-model="form.a_hz"
              type="text"
              placeholder="请输入属何种合作协议（协定）"
            />
          </div>
          <div class="formitem">
            <div class="itemname">协议名称</div>
            <input
              v-model="form.a_xy"
              type="text"
              placeholder="请输入协议名称"
            />
          </div>
          <div class="formitem">
            <div class="itemname">合作国别</div>
            <input
              v-model="form.a_gb"
              type="text"
              placeholder="请输入合作国别"
            />
          </div>
          <div class="formitem formitem2 date2">
            <div>
              <div class="itemname">合作起始日期</div>
              <el-date-picker
                v-model="form.a_qs"
                type="date"
                placeholder="请选择合作起始时间"
              >
              </el-date-picker>
            </div>
            <div>
              <div class="itemname">合作终止日期</div>
              <el-date-picker
                v-model="form.a_zz"
                type="date"
                placeholder="请选择合作终止时间"
              >
              </el-date-picker>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btns">
      <div @click="savemsg">保存</div>
      <div class="submitbtn" @click="next">下一步</div>
    </div>
  </div>
</template>
<script>
import { datawork } from '../../../plugins/datawork'
import { getClientId } from '../../../plugins/getclientid'
import { getToken } from '../../../plugins/gettoken'
import { deepCopy } from '../../../plugins/deepcopy'
import { formValidate21 } from '../../../plugins/formValidate21'
import { formValidate33 } from '../../../plugins/formValidate33'
export default {
  data() {
    return {
      form: {},
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
      this.form = deepCopy(JSON.parse(localStorage.getItem('form')))
    }
  },
  methods: {
    handlestarttime(data) {
      let timedata = {}
      let year = ''
      let month = ''
      let date = ''
      if (data && typeof data == 'string') {
        if (data.slice(0, 1) != 0) {
          timedata = new Date(data)
          year = timedata.getFullYear()
          month = timedata.getMonth()
          date = timedata.getDate()
          return year + '-' + (month + 1) + '-' + date
        } {
          return data
        }
      } else {
        timedata = new Date(data)
        year = timedata.getFullYear()
        month = timedata.getMonth()
        date = timedata.getDate()
        return year + '-' + (month + 1) + '-' + date
      }
    },
    handlendtime(data) {
      let timedata = {}
      let year = ''
      let month = ''
      let date = ''
      if (data && typeof data == 'string') {
        if (data.slice(0, 1) != 0) {
          timedata = new Date(data)
          year = timedata.getFullYear()
          month = timedata.getMonth()
          date = timedata.getDate()
          return year + '-' + (month + 1) + '-' + date
        } {
          return data
        }
      } else {
        timedata = new Date(data)
        year = timedata.getFullYear()
        month = timedata.getMonth()
        date = timedata.getDate()
        return year + '-' + (month + 1) + '-' + date
      }
    },
    handleform(data) {
      for (const i in data) {
        if (i == 'a_qs') {
          data.a_qs = this.handlestarttime(data[i])
        } else if (i == 'a_zz') {
          data.a_zz = this.handlendtime(data[i])
        }
      }
    },
    savemsg() {
      // “保存”操作
      const commondata = JSON.parse(localStorage.getItem('commondata'))
      const data1 = {}
      let data2 = {}
      this.loading = true
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
        // 给表格中的每一项都去处空格
        if (
          i == 'address' ||
            i == 'partner_name' ||
            i == 'worker_json' ||
            i == 'partner_json' ||
            i == 'files'
        ) {
          data1[i] = JSON.stringify(this.form[i])
        } else {
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
      if (this.form.a_nx && this.form.a_nx.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.a_nx = this.form.a_nx.replace(/(^\s*)|(\s*$)/g, '')
      }
      if (this.form.a_hz && this.form.a_hz.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.a_hz = this.form.a_hz.replace(/(^\s*)|(\s*$)/g, '')
      }
      if (this.form.a_xy && this.form.a_xy.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.a_xy = this.form.a_xy.replace(/(^\s*)|(\s*$)/g, '')
      }
      if (this.form.a_gb && this.form.a_gb.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.a_gb = this.form.a_gb.replace(/(^\s*)|(\s*$)/g, '')
      }
      if (this.form.a_qs) {
        data1.a_qs = this.handlestarttime(this.form.a_qs)
      }
      if (this.form.a_zz) {
        data1.a_zz = this.handlendtime(this.form.a_zz)
      }
      data2 = datawork(data1)
      this.$api.save_create3(data2).then((v) => {
        if (v.data.errcode === 0) {
          this.loading = false
          this.handleform(this.form)
          this.$message({
            type: 'success',
            message: '保存成功'
          })
          this.$store.commit('SET_FORM', this.form)
          localStorage.setItem('form', JSON.stringify(this.form))
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
    next() {
      if (!formValidate21(this.form, this)) return
      if (!formValidate33(this.form, this)) return
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
        // 给表格中的每一项都去处空格
        if (
          i == 'address' ||
            i == 'partner_name' ||
            i == 'worker_json' ||
            i == 'partner_json' ||
            i == 'files'
        ) {
          data1[i] = JSON.stringify(this.form[i])
        } else {
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
      data1.a_nx = this.form.a_nx.replace(/(^\s*)|(\s*$)/g, '')
      data1.a_hz = this.form.a_hz.replace(/(^\s*)|(\s*$)/g, '')
      data1.a_xy = this.form.a_xy.replace(/(^\s*)|(\s*$)/g, '')
      data1.a_gb = this.form.a_gb.replace(/(^\s*)|(\s*$)/g, '')
      data1.a_qs = this.handlestarttime(this.form.a_qs)
      data1.a_zz = this.handlendtime(this.form.a_zz)
      data2 = datawork(data1)
      this.$api.save_create3(data2).then((v) => {
        if (v.data.errcode === 0) {
          this.loading = false
          this.handleform(this.form)
          this.$message({
            type: 'success',
            message: '操作成功，即将进行下一步',
            duration: 1000
          })
          this.$store.commit('SET_FORM', this.form)
          localStorage.setItem('form', JSON.stringify(this.form))
          if (!localStorage.getItem('applyid') || !Number(localStorage.getItem('applyid'))) {
            localStorage.setItem('applyid', v.data.data)
            this.$store.commit('SET_APPLY_ID', v.data.data)
          }
          setTimeout(() => {
            that.$router.push({
              path: '/creating/step23',
              query: { id: this.$route.query.id }
            })
          }, 1000)
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
</script>
<style lang="stylus" scoped>
.formitem input
  width calc(100% - 114px) !important
.formitem.formitem2
  >div
    display flex
    align-items center
    width 50%
</style>
<style lang="stylus">
.formitem.formitem2.date2
  .el-date-editor.el-input
    width calc(100% - 114px) !important
  .el-input__inner
    width 100% !important
</style>
