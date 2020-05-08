<template>
  <div v-loading.fullscreen="loading" class="indexpage">
    <div class="contentbox">
      <div class="contenthead">
        8.项目申报单位及合作单位（打印后加盖公章生效）
      </div>
      <div class="content">
        <h1 class="pagetitle central">项目申报单位</h1>
        <div class="formitems">
          <div class="formitem">
            <div class="itemname">申报单位名称</div>
            <input
              v-model="form.enterprise_name"
              type="text"
              :disabled="form.enterprise_name ? true : false"
              placeholder="请输入申报单位名称"
            />
          </div>
          <div class="formitem formitem2">
            <div>
              <div class="itemname">负责人姓名</div>
              <input
                v-model="form.leader_name"
                type="text"
                :disabled="form.leader_name ? true : false"
                placeholder="请输入负责人姓名"
              />
            </div>
            <div>
              <div class="itemname">负责人电话</div>
              <input
                v-model="form.leader_mobile"
                type="text"
                :disabled="form.leader_mobile ? true : false"
                placeholder="请输入负责人电话"
              />
            </div>
          </div>
          <div class="formitem formitem2">
            <div>
              <div class="itemname">负责人电子邮箱</div>
              <input
                v-model="form.leader_email"
                type="text"
                :disabled="form.leader_email ? true : false"
                placeholder="请输入负责人电子邮箱"
              />
            </div>
            <div>
              <div class="itemname">负责人通讯地址</div>
              <input
                v-model="form.leader_address"
                type="text"
                :disabled="form.leader_address ? true : false"
                placeholder="请输入负责人通讯地址"
              />
            </div>
          </div>
          <div class="formitem formitem2">
            <div>
              <div class="itemname">经办人姓名</div>
              <input
                v-model="form.link_name"
                type="text"
                :disabled="form.link_name ? true : false"
                placeholder="请输入经办人姓名"
              />
            </div>
            <div>
              <div class="itemname">经办人电话</div>
              <input
                v-model="form.link_mobile"
                type="text"
                :disabled="form.link_mobile ? true : false"
                placeholder="请输入经办人电话"
              />
            </div>
          </div>
          <div class="formitem formitem2">
            <div>
              <div class="itemname">经办人电子邮箱</div>
              <input
                v-model="form.link_email"
                type="text"
                :disabled="form.link_email ? true : false"
                placeholder="请输入经办人电子邮箱"
              />
            </div>
            <div>
              <div class="itemname">经办人通讯地址</div>
              <input
                v-model="form.link_address"
                type="text"
                :disabled="form.link_address ? true : false"
                placeholder="请输入经办人通讯地址"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <h1 class="pagetitle central">项目合作单位</h1>
        <div class="formitems">
          <div class="formitem">
            <div class="itemname">合作单位名称</div>
            <input
              v-model="name"
              type="text"
              placeholder="请输入合作单位名称"
            />
          </div>
          <div class="formitem formitem2">
            <div>
              <div class="itemname">负责人姓名</div>
              <input
                v-model="leader_name"
                type="text"
                placeholder="请输入负责人姓名"
              />
            </div>
            <div>
              <div class="itemname">负责人电话</div>
              <input
                v-model="leader_mobile"
                type="text"
                placeholder="请输入负责人电话"
              />
            </div>
          </div>
          <div class="formitem formitem2">
            <div>
              <div class="itemname">负责人电子邮箱</div>
              <input
                v-model="leader_email"
                type="text"
                placeholder="请输入负责人电子邮箱"
              />
            </div>
            <div>
              <div class="itemname">负责人通讯地址</div>
              <input
                v-model="leader_address"
                type="text"
                placeholder="请输入负责人通讯地址"
              />
            </div>
          </div>
          <div class="formitem formitem2">
            <div>
              <div class="itemname">经办人姓名</div>
              <input
                v-model="link_name"
                type="text"
                placeholder="请输入经办人姓名"
              />
            </div>
            <div>
              <div class="itemname">经办人电话</div>
              <input
                v-model="link_mobile"
                type="text"
                placeholder="请输入经办人电话"
              />
            </div>
          </div>
          <div class="formitem formitem2">
            <div>
              <div class="itemname">经办人电子邮箱</div>
              <input
                v-model="link_email"
                type="text"
                placeholder="请输入经办人电子邮箱"
              />
            </div>
            <div>
              <div class="itemname">经办人通讯地址</div>
              <input
                v-model="link_address"
                type="text"
                placeholder="请输入经办人通讯地址"
              />
            </div>
          </div>
        </div>
        <div class="btns">
          <div class="submitbtn" @click="addpeople">+ 保存合作单位</div>
        </div>
      </div>
    </div>
    <div class="probox">
      <p class="pagetitle">项目合作单位列表</p>
      <div class="listbox">
        <div class="listhead">
          <p class="col12">序号</p>
          <p class="col22">合作单位名称</p>
          <p class="col32">负责人</p>
          <p class="col42">负责人电话</p>
          <p class="col52">联系地址</p>
          <p class="col62">操作</p>
        </div>
        <div
          v-for="(item, index) in partner_json"
          :key="index"
          class="listItem"
        >
          <p class="col12">
            {{ index + 1 }}
          </p>
          <p class="col22" :title="item.name ? item.name : '-'">
            {{ item.name ? item.name : '-' }}
          </p>
          <p class="col32" :title="item.leader_name ? item.leader_name : '-'">
            {{ item.leader_name ? item.leader_name : '-' }}
          </p>
          <p
            class="col42"
            :title="item.leader_mobile ? item.leader_mobile : '-'"
          >
            {{ item.leader_mobile ? item.leader_mobile : '-' }}
          </p>
          <p
            class="col52"
            :title="item.leader_address ? item.leader_address : '-'"
          >
            {{ item.leader_address ? item.leader_address : '-' }}
          </p>
          <p class="col62">
            <span @click="edit(item, index)">编辑</span>
            <span @click="del(index)">删除</span>
          </p>
        </div>
      </div>
      <div v-if="partner_json.length === 0" class="nodata">
        暂时没有合作单位哦！
      </div>
    </div>
    <div class="btns">
      <div @click="savemsg">保存</div>
      <div class="submitbtn" @click="next">下一步</div>
    </div>
    <el-dialog
      :visible.sync="dialogshow"
      title="编辑合作单位"
      :close-on-click-modal="false"
      :lock-scroll="false"
      :show-close="false"
      width="1000px"
    >
      <h1 class="pagetitle central">项目合作单位</h1>
      <div class="formitems dialogform">
        <div class="formitem">
          <div class="itemname">合作单位名称</div>
          <input
            v-model="partner_detail.name"
            type="text"
            placeholder="请输入合作单位名称"
          />
        </div>
        <div class="formitem formitem2">
          <div>
            <div class="itemname">负责人姓名</div>
            <input
              v-model="partner_detail.leader_name"
              type="text"
              placeholder="请输入负责人姓名"
            />
          </div>
          <div>
            <div class="itemname">负责人电话</div>
            <input
              v-model="partner_detail.leader_mobile"
              type="text"
              placeholder="请输入负责人电话"
            />
          </div>
        </div>
        <div class="formitem formitem2">
          <div>
            <div class="itemname">负责人电子邮箱</div>
            <input
              v-model="partner_detail.leader_email"
              type="text"
              placeholder="请输入负责人电子邮箱"
            />
          </div>
          <div>
            <div class="itemname">负责人通讯地址</div>
            <input
              v-model="partner_detail.leader_address"
              type="text"
              placeholder="请输入负责人通讯地址"
            />
          </div>
        </div>
        <div class="formitem formitem2">
          <div>
            <div class="itemname">经办人姓名</div>
            <input
              v-model="partner_detail.link_name"
              type="text"
              placeholder="请输入经办人姓名"
            />
          </div>
          <div>
            <div class="itemname">经办人电话</div>
            <input
              v-model="partner_detail.link_mobile"
              type="text"
              placeholder="请输入经办人电话"
            />
          </div>
        </div>
        <div class="formitem formitem2">
          <div>
            <div class="itemname">经办人电子邮箱</div>
            <input
              v-model="partner_detail.link_email"
              type="text"
              placeholder="请输入经办人电子邮箱"
            />
          </div>
          <div>
            <div class="itemname">经办人通讯地址</div>
            <input
              v-model="partner_detail.link_address"
              type="text"
              placeholder="请输入经办人通讯地址"
            />
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="editdone(partner_detail.number)">
          确定
        </el-button>
      </span>
    </el-dialog>
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
import { formValidate6 } from '../../../plugins/formValidate6'
import { formValidate7 } from '../../../plugins/formValidate7'
import { formValidate8 } from '../../../plugins/formValidate8'
import { formValidate92 } from '../../../plugins/formValidate92'
import { formValidate10 } from '../../../plugins/formValidate10'
export default {
  data() {
    return {
      form: {},
      name: '',
      leader_name: '',
      leader_mobile: '',
      leader_email: '',
      leader_address: '',
      link_name: '',
      link_mobile: '',
      link_email: '',
      link_address: '',
      partner_json: [],
      partner_detail: {},
      dialogshow: false,
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
    // 如果存在研究合作单位，就赋值给人员列表partner_json
    if (
      localStorage.getItem('partner') &&
      JSON.parse(localStorage.getItem('partner')) &&
      JSON.parse(localStorage.getItem('partner')).length > 0
    ) {
      this.form.partner_json = deepCopy(JSON.parse(localStorage.getItem('partner')))
      this.partner_json = deepCopy(JSON.parse(localStorage.getItem('partner')))
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
      if (this.partner_json.length > 0) {
        this.form.partner_json = deepCopy(this.partner_json)
        data1.partner_json = JSON.stringify(this.partner_json)
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
      if (!formValidate10(this.form, this)) return
      this.form.partner_json = deepCopy(this.partner_json)
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
      data1.partner_json = JSON.stringify(this.partner_json)
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
              path: '/creating/step9',
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
    },
    formValidate() {
      if (!this.name && !this.name.replace(/(^\s*)|(\s*$)/g, '')) {
        this.$message({
          type: 'error',
          message: '请输入合作单位名称'
        })
        return false
      } else if(!this.leader_name && !this.leader_name.replace(/(^\s*)|(\s*$)/g, '')) {
        this.$message({
          type: 'error',
          message: '请输入负责人姓名'
        })
        return false
      } else if(!this.leader_mobile && !this.leader_mobile.replace(/(^\s*)|(\s*$)/g, '')) {
        this.$message({
          type: 'error',
          message: '请输入负责人电话'
        })
        return false
      } else if(!this.leader_email && !this.leader_email.replace(/(^\s*)|(\s*$)/g, '')) {
        this.$message({
          type: 'error',
          message: '请输入负责人电子邮箱'
        })
        return false
      } else if(!this.leader_address && !this.leader_address.replace(/(^\s*)|(\s*$)/g, '')) {
        this.$message({
          type: 'error',
          message: '请输入负责人通讯地址'
        })
        return false
      } else if(!this.link_name && !this.link_name.replace(/(^\s*)|(\s*$)/g, '')) {
        this.$message({
          type: 'error',
          message: '请输入经办人姓名'
        })
        return false
      } else if(!this.link_mobile && !this.link_mobile.replace(/(^\s*)|(\s*$)/g, '')) {
        this.$message({
          type: 'error',
          message: '请输入经办人电话'
        })
        return false
      } else if(!this.link_email && !this.link_email.replace(/(^\s*)|(\s*$)/g, '')) {
        this.$message({
          type: 'error',
          message: '请输入经办人电子邮箱'
        })
        return false
      } else if(!this.link_address && !this.link_address.replace(/(^\s*)|(\s*$)/g, '')) {
        this.$message({
          type: 'error',
          message: '请输入经办人通讯地址'
        })
        return false
      } else {
        return true
      }
    },
    addpeople() {
      if (!this.formValidate()) return
      this.partner_json.push(
        {
          name: this.name.replace(/(^\s*)|(\s*$)/g, ''),
          leader_name: this.leader_name.replace(/(^\s*)|(\s*$)/g, ''),
          leader_mobile: this.leader_mobile.replace(/(^\s*)|(\s*$)/g, ''),
          leader_email: this.leader_email.replace(/(^\s*)|(\s*$)/g, ''),
          leader_address: this.leader_address.replace(/(^\s*)|(\s*$)/g, ''),
          link_name: this.link_name.replace(/(^\s*)|(\s*$)/g, ''),
          link_mobile: this.link_mobile.replace(/(^\s*)|(\s*$)/g, ''),
          link_email: this.link_email.replace(/(^\s*)|(\s*$)/g, ''),
          link_address: this.link_address.replace(/(^\s*)|(\s*$)/g, ''),
        }
      )
      this.$store.commit('SET_PARTNER', this.partner_json)
      localStorage.setItem('partner', JSON.stringify(this.partner_json))
      console.log(this.partner_json)
    },
    edit(val, key) {
      this.dialogshow = true
      this.partner_detail = deepCopy(val)
      this.partner_detail.number = key
    },
    editdone(key) {
      // 修改了人员信息
      // 再次保存partner_json
      this.partner_json.forEach((item, index) => {
        if (index == key) {
          this.partner_json[index] = deepCopy(this.partner_detail)
        }
      })
      this.$store.commit('SET_PARTNER', this.partner_json)
      localStorage.setItem('partner', JSON.stringify(this.partner_json))
      this.dialogshow = false
    },
    del(key) {
      this.$confirm('您确定删除该合作单位吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        lockScroll: false,
        type: 'warning'
      })
        .then(() => {
          this.$delete(this.partner_json, key)
          this.$store.commit('SET_PARTNER', this.partner_json)
          localStorage.setItem('partner', JSON.stringify(this.partner_json))
        })
        .catch(() => {})
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
.dialogform
  width 100%
  margin 0
</style>
