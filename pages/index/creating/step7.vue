<template>
  <div v-loading.fullscreen="loading" class="indexpage">
    <div class="contentbox">
      <div class="contenthead">7.主要研究人员</div>
      <div class="content">
        <div class="formitems">
          <div class="formitem two date">
            <div>
              <div class="itemname">姓名</div>
              <input
                v-model="name"
                type="text"
                :disabled="disabled1"
                placeholder="请输入姓名"
              />
            </div>
            <div>
              <div class="itemname">性别</div>
              <el-select v-model="sex" placeholder="请选择性别">
                <el-option
                  v-for="item in sexs"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>
            <div>
              <div class="itemname">出生日期</div>
              <el-date-picker
                v-model="birthday"
                type="date"
                :disabled="disabled1"
                placeholder="请选择起始时间"
              >
              </el-date-picker>
            </div>
          </div>
          <div class="formitem">
            <div class="itemname">职务/职称</div>
            <input
              v-model="job"
              type="text"
              :disabled="disabled1"
              placeholder="请输入职务/职称"
            />
          </div>
          <div class="formitem formitem2">
            <div>
              <div class="itemname">所学专业</div>
              <input
                v-model="study_major"
                type="text"
                :disabled="disabled1"
                placeholder="请输入所学专业"
              />
            </div>
            <div>
              <div class="itemname">现从事专业</div>
              <input
                v-model="now_major"
                type="text"
                :disabled="disabled1"
                placeholder="请输入现从事专业"
              />
            </div>
          </div>
          <div class="formitem">
            <div class="itemname">所在单位</div>
            <input
              v-model="company"
              type="text"
              :disabled="disabled1"
              placeholder="请输入所在单位"
            />
          </div>
          <div class="formitem">
            <div class="itemname">在本项目中承担的任务</div>
            <input
              v-model="task"
              type="text"
              :disabled="disabled1"
              placeholder="请输入在本项目中承担的任务"
            />
          </div>
        </div>
        <div class="btns">
          <div class="submitbtn">+ 保存人员信息</div>
        </div>
      </div>
    </div>
    <div class="probox">
      <p class="pagetitle">主要研究人员列表</p>
      <div class="listbox">
        <div class="listhead">
          <p class="col11">序号</p>
          <p class="col21">姓名</p>
          <p class="col31">性别</p>
          <p class="col41">出生年月</p>
          <p class="col51">职务/职称</p>
          <p class="col61">所在单位</p>
          <p class="col71">操作</p>
        </div>
        <div class="listItem">
          <p class="col11">序号</p>
          <p class="col21">姓名</p>
          <p class="col31">性别</p>
          <p class="col41">出生日期</p>
          <p class="col51">职务/职称</p>
          <p class="col61">所在单位</p>
          <p class="col71">
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
        >
        </el-pagination>
      </div>
    </div>
    <div class="btns">
      <div @click="savemsg">保存</div>
      <div class="submitbtn" @click="next">下一步</div>
    </div>
    <el-dialog
      :visible.sync="dialogshow"
      title="编辑研究人员"
      :close-on-click-modal="false"
      :lock-scroll="false"
      :show-close="false"
      width="1000px"
    >
      <!-- <div class="formitems dialogform">
        <div class="formitem two date">
          <div>
            <div class="itemname">姓名</div>
            <input
              v-model="worker_detail.name"
              type="text"
              :disabled="disabled1"
              placeholder="请输入姓名"
            />
          </div>
          <div>
            <div class="itemname">性别</div>
            <el-select v-model="worker_detail.sex" placeholder="请选择性别">
              <el-option
                v-for="item in sexs"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
          <div>
            <div class="itemname">出生日期</div>
            <el-date-picker
              v-model="worker_detail.birthday"
              type="date"
              :disabled="disabled1"
              placeholder="请选择起始时间"
            >
            </el-date-picker>
          </div>
        </div>
        <div class="formitem">
          <div class="itemname">职务/职称</div>
          <input
            v-model="worker_detail.job"
            type="text"
            :disabled="disabled1"
            placeholder="请输入职务/职称"
          />
        </div>
        <div class="formitem formitem2">
          <div>
            <div class="itemname">所学专业</div>
            <input
              v-model="worker_detail.study_major"
              type="text"
              :disabled="disabled1"
              placeholder="请输入所学专业"
            />
          </div>
          <div>
            <div class="itemname">现从事专业</div>
            <input
              v-model="worker_detail.now_major"
              type="text"
              :disabled="disabled1"
              placeholder="请输入现从事专业"
            />
          </div>
        </div>
        <div class="formitem">
          <div class="itemname">所在单位</div>
          <input
            v-model="worker_detail.company"
            type="text"
            :disabled="disabled1"
            placeholder="请输入所在单位"
          />
        </div>
        <div class="formitem">
          <div class="itemname">在本项目中承担的任务</div>
          <input
            v-model="worker_detail.task"
            type="text"
            :disabled="disabled1"
            placeholder="请输入在本项目中承担的任务"
          />
        </div>
      </div> -->
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
import { formValidate9 } from '../../../plugins/formValidate9'
export default {
  data() {
    return {
      form: {},
      name: '',
      sex: '',
      birthday: '',
      job: '',
      study_major: '',
      now_major: '',
      company: '',
      task: '',
      sexs: [
        {
          id: 1,
          name: '男'
        },
        {
          id: 2,
          name: '女'
        }
      ],
      // 这里是主要研究人员的列表
      worker_json: [{}],
      // 这里是某个主要研究人员的详情
      worker_detail: {},
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
      if (this.worker_json.length > 0) {
        this.form.worker_json = deepCopy(this.worker_json)
        data1.worker_json = JSON.stringify(this.worker_json)
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
      if (!formValidate9(this.form, this)) return
      this.form.worker_json = deepCopy(this.worker_json)
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
      data1.worker_json = JSON.stringify(this.worker_json)
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
            that.$router.push('/creating/step8')
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
.formitem.two
  >div
    width calc(100% / 3) !important
.formitem.formitem2
  >div
    display flex
    align-items center
    width 50%
.dialogform
  width 100%
  margin 0
</style>
<style lang="stylus">
.formitem.two.date
  .el-select, .el-date-editor.el-input
    width calc(100% - 114px) !important
  .el-input__inner
    width 100% !important
</style>
