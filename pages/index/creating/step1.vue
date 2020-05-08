<template>
  <div v-loading.fullscreen="loading" class="indexpage">
    <div class="contentbox">
      <div class="contenthead">1.申请立项理由</div>
      <div class="content">
        <div>
          <p class="contentname">研究目的</p>
          <el-input
            v-model="form.a_md"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写研究目的"
          >
          </el-input>
        </div>
        <div>
          <p class="contentname">选题依据</p>
          <el-input
            v-model="form.a_yj"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写选题依据"
          >
          </el-input>
        </div>
        <div>
          <p class="contentname">研发意义</p>
          <el-input
            v-model="form.a_yy"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写研发意义"
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
    // 有三种途径可以来到本页面：
    // 1.在计划书页面点击“保存”；
    //  (form对象中包含什么值不确定，但是一定包含formsType，partner_name和address)，还有存储在缓存中的applyid
    // 2.在计划书页面点击“下一步”，要进行表单检验，所以form的值比较齐全
    // 3.在计划书页面点击“填写申报表”，直接到达本页面；
    //   一定包含formsType, partner_name和address
    // 上述三种情况，不管哪一种，首先要检查有没有存储的form数据，
    if (
      localStorage.getItem('form') &&
      JSON.parse(localStorage.getItem('form')) &&
      JSON.parse(localStorage.getItem('form')) != {}
    ) {
      console.log(JSON.parse(localStorage.getItem('form')))
      // 这一步操作可能会导致vuex报错，但是我们设置为非严格模式就可以了
      this.form = deepCopy(JSON.parse(localStorage.getItem('form')))
    }
    // 这一步就没有必要了
    // if (this.$route.query.type) {
    //   this.form.formsType = this.$route.query.type
    // }
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
      if (this.form.a_md && this.form.a_md.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.a_md = this.form.a_md.replace(/(^\s*)|(\s*$)/g, '')
      }
      if (this.form.a_yj && this.form.a_yj.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.a_yj = this.form.a_yj.replace(/(^\s*)|(\s*$)/g, '')
      }
      if (this.form.a_yy && this.form.a_yy.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.a_yy = this.form.a_yy.replace(/(^\s*)|(\s*$)/g, '')
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
      // const that = this
      if (!formValidate21(this.form, this)) return
      console.log('表单检验完成')
      if (!formValidate3(this.form, this)) return
      console.log('这里的表单也是检验完成')
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
      data1.a_md = this.form.a_md.replace(/(^\s*)|(\s*$)/g, '')
      data1.a_yj = this.form.a_yj.replace(/(^\s*)|(\s*$)/g, '')
      data1.a_yy = this.form.a_yy.replace(/(^\s*)|(\s*$)/g, '')

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
              path: '/creating/step2',
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
