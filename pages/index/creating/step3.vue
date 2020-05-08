<template>
  <div v-loading.fullscreen="loading" class="indexpage">
    <div class="contentbox">
      <div class="contenthead">3.研究目标和预期成果</div>
      <div class="content">
        <div>
          <p class="contentname">研究目标</p>
          <el-input
            v-model="form.c_mb"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写研究目标"
          >
          </el-input>
        </div>
        <div>
          <p class="contentname">预期成果的名称及表达方式</p>
          <el-input
            v-model="form.c_cg"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写预期成果的名称及表达方式"
          >
          </el-input>
        </div>
        <div>
          <p class="contentname">成果产出对相关管理工作的作用和应用前景</p>
          <el-input
            v-model="form.c_yy"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写成果产出对相关管理工作的作用和应用前景"
          >
          </el-input>
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
import { formValidate3 } from '../../../plugins/formValidate3'
import { formValidate4 } from '../../../plugins/formValidate4'
import { formValidate5 } from '../../../plugins/formValidate5'
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
      console.log(JSON.parse(localStorage.getItem('form')))
      this.form = deepCopy(JSON.parse(localStorage.getItem('form')))
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
        // 给表格中的每一项都去处空格
        if (i == 'address' || i == 'partner_name') {
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
      // data1.category_id = 1
      if (this.form.c_mb && this.form.c_mb.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.c_mb = this.form.c_mb.replace(/(^\s*)|(\s*$)/g, '')
      }
      if (this.form.c_cg && this.form.c_cg.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.c_cg = this.form.c_cg.replace(/(^\s*)|(\s*$)/g, '')
      }
      if (this.form.c_yy && this.form.c_yy.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.c_yy = this.form.c_yy.replace(/(^\s*)|(\s*$)/g, '')
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
        if (i == 'address' || i == 'partner_name') {
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
      // data1.category_id = 1
      data1.c_mb = this.form.c_mb.replace(/(^\s*)|(\s*$)/g, '')
      data1.c_cg = this.form.c_cg.replace(/(^\s*)|(\s*$)/g, '')
      data1.c_yy = this.form.c_yy.replace(/(^\s*)|(\s*$)/g, '')
      data2 = datawork(data1)
      console.log(data2)
      this.$api.save_create(data2).then((v) => {
        if (v.data.errcode === 0) {
          this.loading = false
          this.$message({
            type: 'success',
            message: '操作成功，即将进行下一步',
            duration: 1000
          })
          this.$store.commit('SET_FORM', this.form)
          localStorage.setItem('form', JSON.stringify(this.form))
          console.log(this.form)
          if (!localStorage.getItem('applyid') || !Number(localStorage.getItem('applyid'))) {
            localStorage.setItem('applyid', v.data.data)
            this.$store.commit('SET_APPLY_ID', v.data.data)
          }
          setTimeout(() => {
            that.$router.push({
              path: '/creating/step4',
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
