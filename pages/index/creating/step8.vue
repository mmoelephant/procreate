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
              v-model="form.enterprsie_name"
              type="text"
              :disabled="form.enterprsie_name ? true : false"
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
              :disabled="disabled1"
              placeholder="请输入合作单位名称"
            />
          </div>
          <div class="formitem formitem2">
            <div>
              <div class="itemname">负责人姓名</div>
              <input
                v-model="leader_name"
                type="text"
                :disabled="disabled1"
                placeholder="请输入负责人姓名"
              />
            </div>
            <div>
              <div class="itemname">负责人电话</div>
              <input
                v-model="leader_mobile"
                type="text"
                :disabled="disabled1"
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
                :disabled="disabled1"
                placeholder="请输入负责人电子邮箱"
              />
            </div>
            <div>
              <div class="itemname">负责人通讯地址</div>
              <input
                v-model="leader_address"
                type="text"
                :disabled="disabled1"
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
                :disabled="disabled1"
                placeholder="请输入经办人姓名"
              />
            </div>
            <div>
              <div class="itemname">经办人电话</div>
              <input
                v-model="link_mobile"
                type="text"
                :disabled="disabled1"
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
                :disabled="disabled1"
                placeholder="请输入经办人电子邮箱"
              />
            </div>
            <div>
              <div class="itemname">经办人通讯地址</div>
              <input
                v-model="link_address"
                type="text"
                :disabled="disabled1"
                placeholder="请输入经办人通讯地址"
              />
            </div>
          </div>
        </div>
        <div class="btns">
          <div class="submitbtn">+ 保存合作单位</div>
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
        <div class="listItem">
          <p class="col12">序号</p>
          <p class="col22">合作单位名称</p>
          <p class="col32">负责人</p>
          <p class="col42">负责人电话</p>
          <p class="col52">联系地址</p>
          <p class="col62">
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
            :disabled="disabled1"
            placeholder="请输入合作单位名称"
          />
        </div>
        <div class="formitem formitem2">
          <div>
            <div class="itemname">负责人姓名</div>
            <input
              v-model="partner_detail.leader_name"
              type="text"
              :disabled="disabled1"
              placeholder="请输入负责人姓名"
            />
          </div>
          <div>
            <div class="itemname">负责人电话</div>
            <input
              v-model="partner_detail.leader_mobile"
              type="text"
              :disabled="disabled1"
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
              :disabled="disabled1"
              placeholder="请输入负责人电子邮箱"
            />
          </div>
          <div>
            <div class="itemname">负责人通讯地址</div>
            <input
              v-model="partner_detail.leader_address"
              type="text"
              :disabled="disabled1"
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
              :disabled="disabled1"
              placeholder="请输入经办人姓名"
            />
          </div>
          <div>
            <div class="itemname">经办人电话</div>
            <input
              v-model="partner_detail.link_mobile"
              type="text"
              :disabled="disabled1"
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
              :disabled="disabled1"
              placeholder="请输入经办人电子邮箱"
            />
          </div>
          <div>
            <div class="itemname">经办人通讯地址</div>
            <input
              v-model="partner_detail.link_address"
              type="text"
              :disabled="disabled1"
              placeholder="请输入经办人通讯地址"
            />
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="editdone">确定</el-button>
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
      partner_json: [{}],
      partner_detail: {},
      pagetotal: 0,
      disabled1: false,
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
    if (JSON.parse(localStorage.getItem('form')) && JSON.parse(localStorage.getItem('form')) != {}) {
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
      data1.category_id = 1
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
          localStorage.setItem('applyid', v.data.data)
          this.$store.commit('SET_APPLY_ID', v.data.data)
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
      data1.category_id = 1
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
          localStorage.setItem('applyid', v.data.data)
          this.$store.commit('SET_APPLY_ID', v.data.data)
          setTimeout(() => {
            that.$router.push('/creating/step9')
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
