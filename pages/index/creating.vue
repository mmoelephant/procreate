<template>
  <div class="indexpage">
    <div class="indexhead">
      <h1 class="pagetitle">
        项目立项申请
      </h1>
      <div class="guidebar">
        <div :class="route.path == '/creating' ? 'here' : ''" @click="stepone">
          1.填写计划任务书
        </div>
        <i class="iconfont">&#xe617;</i>
        <div :class="route.path == '/creating' ? '' : 'here'" @click="steptwo">
          2.填写申报表
        </div>
      </div>
    </div>
    <div v-if="route.path == '/creating'" class="pagetip">
      <p class="pagetitle">选择申报类型</p>
      <div class="selectbox">
        <div class="bigcate">
          <div
            v-for="item in bigcates"
            :key="item.id"
            :class="bigOn == item.id ? 'bigon' : ''"
            @click="togglebig(item.id)"
          >
            {{ item.name }}
          </div>
        </div>
        <p>请继续选择子类别</p>
        <div class="smallcate">
          <div
            v-for="item in smallcates"
            :key="item.id"
            :class="smallOn == item.id ? 'smallon' : ''"
            @click="togglesmall(item.id)"
          >
            软科学研究项目
          </div>
        </div>
      </div>
    </div>
    <div v-if="route.path != '/creating'" class="d-guide">
      <div
        title="1.申请立项理由"
        :class="route.path == '/creating/step1' ? 'stepOn' : ''"
        @click="tostep1"
      >
        1.申请立项理由
      </div>
      <div
        title="2.国内、外研究现状和趋势"
        :class="route.path == '/creating/step2' ? 'stepOn' : ''"
        @click="tostep2"
      >
        2.国内、外研究现状和趋势
      </div>
      <div
        title="3.研究目标和预期成果"
        :class="route.path == '/creating/step3' ? 'stepOn' : ''"
        @click="tostep3"
      >
        3.研究目标和预期成果
      </div>
      <div
        title="4.项目主要内容"
        :class="route.path == '/creating/step4' ? 'stepOn' : ''"
        @click="tostep4"
      >
        4.项目主要内容
      </div>
      <div
        title="5.研究思路、方法和计划进度"
        :class="route.path == '/creating/step5' ? 'stepOn' : ''"
        @click="tostep5"
      >
        5.研究思路、方法和计划进度
      </div>
      <div
        title="6.工作基础和科研保障情况"
        :class="route.path == '/creating/step6' ? 'stepOn' : ''"
        @click="tostep6"
      >
        6.工作基础和科研保障情况
      </div>
      <div
        title="7.主要研究人员"
        :class="route.path == '/creating/step7' ? 'stepOn' : ''"
        @click="tostep7"
      >
        7.主要研究人员
      </div>
      <div
        title="8.项目申报单位及合作单位"
        :class="route.path == '/creating/step8' ? 'stepOn' : ''"
        @click="tostep8"
      >
        8.项目申报单位及合作单位
      </div>
      <div
        title="9.附件"
        :class="route.path == '/creating/step9' ? 'stepOn' : ''"
        @click="tostep9"
      >
        9.附件
      </div>
    </div>
    <h1 v-if="route.path != '/creating'" class="pagetitle central">
      住房和城乡建设部软科学研究项目申报书(工程造价管理--软科学研究类)
    </h1>
    <div v-if="route.path == '/creating'">
      <div class="form">
        <p class="formtitle">填写计划任务书</p>
        <div class="formitems">
          <p class="formtip">所有贷款、金额类填写项，单位均为：万元</p>
          <div class="formitem">
            <div class="itemname">项目名称</div>
            <input
              v-model="form.name"
              type="text"
              :disabled="disabled1"
              placeholder="请输入项目名称"
            />
          </div>
          <div class="formitem">
            <div class="itemname">项目类别</div>
            <input
              v-model="form.protype"
              type="text"
              :disabled="disabled1"
              placeholder="请输入项目类别"
            />
          </div>
          <div class="formitem">
            <div class="itemname">申报单位</div>
            <input
              v-model="form.enterprsie_name"
              type="text"
              :disabled="disabled1"
              placeholder="请输入申报单位"
            />
          </div>
          <div class="formitem two">
            <div>
              <div class="itemname">起始时间</div>
              <el-date-picker
                v-model="form.starttime"
                type="date"
                :disabled="disabled1"
                placeholder="请选择起始时间"
              >
              </el-date-picker>
            </div>
            <div>
              <div class="itemname second">完成时间</div>
              <el-date-picker
                v-model="form.endtime"
                type="date"
                :disabled="disabled1"
                placeholder="请选择完成时间"
              >
              </el-date-picker>
            </div>
          </div>
          <div class="formitem two">
            <div>
              <div class="itemname">自筹金额</div>
              <input
                v-model="form.self_amount"
                type="text"
                :disabled="disabled1"
                placeholder="请输入金额，例如：200"
              />
            </div>
            <div>
              <div class="itemname">国家拨/贷款</div>
              <input
                v-model="form.county_amount"
                type="text"
                :disabled="disabled1"
                placeholder="请输入金额，例如：200"
              />
            </div>
            <div>
              <div class="itemname">地方拨/贷款</div>
              <input
                v-model="form.current_amount"
                type="text"
                :disabled="disabled1"
                placeholder="请输入金额，例如：200"
              />
            </div>
          </div>
          <div class="formitem two">
            <div>
              <div class="itemname">其他</div>
              <input
                v-model="form.other_amount"
                type="text"
                :disabled="disabled1"
                placeholder="请输入金额，例如：200"
              />
            </div>
            <div>
              <div class="itemname">外方</div>
              <input
                v-model="form.foreign_amount"
                type="text"
                :disabled="disabled1"
                placeholder="请输入金额，例如：200"
              />
            </div>
          </div>
          <div class="formitem">
            <div class="itemname">总金额</div>
            <input
              v-model="form.amount"
              type="text"
              :disabled="disabled1"
              placeholder="请输入金额，例如：200"
            />
          </div>
          <div class="formitem multi">
            <div class="itemname">合作单位</div>
            <div class="multinput">
              <div v-for="(item, index) in form.partner_name" :key="index">
                <input
                  v-model="form.partner[index]"
                  type="text"
                  :disabled="disabled1"
                  placeholder="请输入合作单位"
                />
              </div>
            </div>
            <div class="btns2">
              <div class="addmorebtn" @click="addmore">添加合作单位</div>
              <div class="delmorebtn" @click="delmore">
                删除
              </div>
            </div>
          </div>
          <div class="formitem multi">
            <div class="itemname">项目所在地</div>
            <div class="multinput">
              <div v-for="(item, index) in form.address" :key="index">
                <input
                  v-model="form.addressb[index]"
                  type="text"
                  :disabled="disabled1"
                  placeholder="请输入项目所在地"
                />
              </div>
            </div>
            <div class="btns2">
              <div class="addmorebtn" @click="addmore2">添加项目所在地</div>
              <div class="delmorebtn" @click="delmore2">
                删除
              </div>
            </div>
          </div>
          <div class="formitem">
            <div class="itemname">主要研究内容</div>
            <el-input
              v-model="form.study_content"
              type="textarea"
              rows="6"
              :disabled="disabled1"
              placeholder="请输入主要研究内容"
            >
            </el-input>
          </div>
          <div class="formitem">
            <div class="itemname">考核指标</div>
            <el-input
              v-model="form.check_content"
              type="textarea"
              rows="6"
              :disabled="disabled1"
              placeholder="请输入考核指标"
            >
            </el-input>
          </div>
          <div class="formitem">
            <div class="itemname">研究成果(示范工程简介)</div>
            <el-input
              v-model="form.expect_content"
              type="textarea"
              rows="6"
              :disabled="disabled1"
              placeholder="请输入研究成果"
            >
            </el-input>
          </div>
        </div>
      </div>
      <div class="form">
        <p class="formtitle">项目负责人</p>
        <div class="formitems">
          <div class="formitem two">
            <div>
              <div class="itemname">负责人姓名</div>
              <input
                v-model="form.leader_name"
                type="text"
                :disabled="disabled1"
                placeholder="请输入负责人姓名"
              />
            </div>
            <div>
              <div class="itemname">负责人电话</div>
              <input
                v-model="form.leader_mobile"
                type="text"
                :disabled="disabled1"
                placeholder="请输入负责人电话"
              />
            </div>
          </div>
          <div class="formitem two">
            <div>
              <div class="itemname">电子邮箱</div>
              <input
                v-model="form.leader_email"
                type="text"
                :disabled="disabled1"
                placeholder="请输入负责人电子邮箱"
              />
            </div>
            <div>
              <div class="itemname">职务/职称</div>
              <input
                v-model="form.leader_job"
                type="text"
                :disabled="disabled1"
                placeholder="请输入负责人职务/职称"
              />
            </div>
          </div>
          <div class="formitem">
            <div class="itemname">通讯地址</div>
            <input
              v-model="form.leader_address"
              type="text"
              :disabled="disabled1"
              placeholder="请输入负责人通讯地址"
            />
          </div>
          <div class="formitem">
            <div class="itemname">所在单位</div>
            <input
              v-model="form.leader_company"
              type="text"
              :disabled="disabled1"
              placeholder="请输入负责人所在单位"
            />
          </div>
        </div>
      </div>
      <div class="form">
        <p class="formtitle">项目经办人</p>
        <div class="formitems">
          <div class="formitem two">
            <div>
              <div class="itemname">经办人姓名</div>
              <input
                v-model="form.link_name"
                type="text"
                :disabled="disabled1"
                placeholder="请输入经办人姓名"
              />
            </div>
            <div>
              <div class="itemname">经办人电话</div>
              <input
                v-model="form.link_mobile"
                type="text"
                :disabled="disabled1"
                placeholder="请输入经办人电话"
              />
            </div>
          </div>
          <div class="formitem two">
            <div>
              <div class="itemname">电子邮箱</div>
              <input
                v-model="form.link_email"
                type="text"
                :disabled="disabled1"
                placeholder="请输入经办人电子邮箱"
              />
            </div>
            <div>
              <div class="itemname">职务/职称</div>
              <input
                v-model="form.link_job"
                type="text"
                :disabled="disabled1"
                placeholder="请输入经办人职务/职称"
              />
            </div>
          </div>
          <div class="formitem">
            <div class="itemname">通讯地址</div>
            <input
              v-model="form.link_address"
              type="text"
              :disabled="disabled1"
              placeholder="请输入经办人通讯地址"
            />
          </div>
          <div class="formitem">
            <div class="itemname">所在单位</div>
            <input
              v-model="form.link_company"
              type="text"
              :disabled="disabled1"
              placeholder="请输入经办人所在单位"
            />
          </div>
        </div>
      </div>
      <div class="btns">
        <div @click="savemsg">保存</div>
        <div class="submitbtn" @click="next">下一步</div>
      </div>
    </div>
    <div v-else>
      <nuxt />
    </div>
  </div>
</template>
<script>
import { datawork } from '../../plugins/datawork'
import { getClientId } from '../../plugins/getclientid'
import { getToken } from '../../plugins/gettoken'
export default {
  data() {
    return {
      bigOn: 1,
      bigcates: [
        {
          id: 1,
          name: '软科学研究项目'
        },
        {
          id: 2,
          name: '软科学研究项目'
        },
        {
          id: 3,
          name: '软科学研究项目'
        }
      ],
      smallOn: 1,
      smallcates: [],
      form: {
        type: this.bigOn,
        partner_name: [''],
        partner: [''],
        address: [''],
        addressb: ['']
      },
      starttime: '',
      endtime: '',
      disabled1: false
    }
  },
  computed: {
    route() {
      return this.$route
    }
  },
  watch: {
    form(val) {}
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
    this.beforeapply()
  },
  methods: {
    togglebig(val) {
      this.bigOn = val
    },
    togglesmall(val) {
      this.smallOn = val
    },
    stepone() {
      this.$router.push('/creating')
    },
    steptwo() {
      this.$router.push({
        path: '/creating/step1',
        query: { type: this.bigOn }
      })
    },
    beforeapply() {
      this.loading = true
      this.bigcates = []
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
      data1.type = this.bigOn
      data2 = datawork(data1)
      this.$api.handle_before(data2).then((v) => {
        console.log(v)
        if (v.data.errcode === 0) {
          this.loading = false
          this.bigcates = v.data.data.typeData
        } else if (v.data.errcode === 1104) {
          getToken(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('tokenDone')) {
              that.beforeapply()
            }
          }, 1000)
        } else if (v.data.errcode === 1103) {
          getClientId(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('done')) {
              that.beforeapply()
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
    handlestarttime(data) {
      const timedata = new Date(data)
      let year = timedata.getFullYear()
      let month = timedata.getMonth()
      let date = timedata.getDate()
      this.starttime = year + '-' + month + '-' + date
      return year + '-' + month + '-' + date
    },
    handlendtime(data) {
      const timedata = new Date(data)
      let year = timedata.getFullYear()
      let month = timedata.getMonth()
      let date = timedata.getDate()
      this.endtime = year + '-' + month + '-' + date
      return year + '-' + month + '-' + date
    },
    savemsg() {
      // 保存信息
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
      if (this.$route.query.id) {
        data1.id = this.$route.query.id
      }
      data1.formsType = this.bigOn
      data1.category_id = 1
      if (this.form.name && this.form.name.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.name = this.form.name
      }
      if (this.form.enterprsie_name && this.form.enterprsie_name.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.enterprsie_name = this.form.enterprsie_name
      }
      if (this.form.starttime) {
        data1.starttime = this.handlestarttime(this.form.starttime)
      }
      if (this.form.endtime) {
        data1.endtime = this.handlendtime(this.form.endtime)
      }
      if (this.form.self_amount && this.form.self_amount.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.self_amount = this.form.self_amount
      }
      if (this.form.county_amount && this.form.county_amount.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.county_amount = this.form.county_amount
      }
      if (this.form.current_amount && this.form.current_amount.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.current_amount = this.form.current_amount
      }
      if (this.form.other_amount && this.form.other_amount.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.other_amount = this.form.other_amount
      }
      if (this.form.foreign_amount && this.form.foreign_amount.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.foreign_amount = this.form.foreign_amount
      }
      if (this.form.amount && this.form.amount.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.amount = this.form.amount
      }
      if (this.form.partner[0]) {
        data1.partner_name = JSON.stringify(this.form.partner)
      }
      if (this.form.addressb[0]) {
        data1.address = JSON.stringify(this.form.addressb)
      }
      if (this.form.study_content && this.form.study_content.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.study_content = this.form.study_content
      }
      if (this.form.check_content && this.form.check_content.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.check_content = this.form.check_content
      }
      if (this.form.expect_content && this.form.expect_content.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.expect_content = this.form.expect_content
      }
      if (this.form.leader_name && this.form.leader_name.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.leader_name = this.form.leader_name
      }
      if (this.form.leader_job && this.form.leader_job.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.leader_job = this.form.leader_job
      }
      if (this.form.leader_mobile && this.form.leader_mobile.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.leader_mobile = this.form.leader_mobile
      }
      if (this.form.leader_email && this.form.leader_email.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.leader_email = this.form.leader_email
      }
      if (this.form.leader_address && this.form.leader_address.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.leader_address = this.form.leader_address
      }
      if (this.form.leader_company && this.form.leader_company.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.leader_company = this.form.leader_company
      }
      if (this.form.link_name && this.form.link_name.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.link_name = this.form.link_name
      }
      if (this.form.link_job && this.form.link_job.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.link_job = this.form.link_job
      }
      if (this.form.link_mobile && this.form.link_mobile.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.link_mobile = this.form.link_mobile
      }
      if (this.form.link_email && this.form.link_email.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.link_email = this.form.link_email
      }
      if (this.form.link_address && this.form.link_address.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.link_address = this.form.link_address
      }
      if (this.form.link_company && this.form.link_company.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.link_company = this.form.link_company
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
      this.$store.commit('SET_FORM', this.form)
      localStorage.setItem('form', JSON.stringify(this.form))
      this.$router.push('/creating/step1')
    },
    addmore() {
      this.$confirm('确定合作单位吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        lockScroll: false,
        type: 'warning'
      })
        .then(() => {
          this.form.partner_name.push('')
          this.form.partner.push('')
        })
        .catch(() => {})
    },
    delmore() {
      if (this.form.partner_name && this.form.partner_name.length > 1) {
        this.$confirm('确定删除合作单位吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          lockScroll: false,
          type: 'warning'
        })
          .then(() => {
            this.form.partner_name.splice(this.form.partner_name.length - 1, 1)
            this.form.partner.splice(this.form.partner.length - 1, 1)
          })
          .catch(() => {})
      } else {
        this.$message({
          type: 'error',
          message: '请至少填写一个合作单位'
        })
      }
    },
    addmore2() {
      this.$confirm('确定项目所在地吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        lockScroll: false,
        type: 'warning'
      })
        .then(() => {
          this.form.address.push('')
          this.form.addressb.push('')
        })
        .catch(() => {})
    },
    delmore2() {
      if (this.form.address && this.form.address.length > 1) {
        this.$confirm('确定删除合作单位吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          lockScroll: false,
          type: 'warning'
        })
          .then(() => {
            this.form.address.splice(this.form.address.length - 1, 1)
            this.form.addressb.splice(this.form.addressb.length - 1, 1)
          })
          .catch(() => {})
      } else {
        this.$message({
          type: 'error',
          message: '请至少填写一个合作单位'
        })
      }
    },
    tostep1() {
      this.$router.push('/creating/step1')
    },
    tostep2() {
      this.$router.push('/creating/step2')
    },
    tostep3() {
      this.$router.push('/creating/step3')
    },
    tostep4() {
      this.$router.push('/creating/step4')
    },
    tostep5() {
      this.$router.push('/creating/step5')
    },
    tostep6() {
      this.$router.push('/creating/step6')
    },
    tostep7() {
      this.$router.push('/creating/step7')
    },
    tostep8() {
      this.$router.push('/creating/step8')
    },
    tostep9() {
      this.$router.push('/creating/step9')
    }
  }
}
</script>
<style lang="stylus" scoped>
.pagetip
  padding 30px 60px
  line-height 32px
  .pagetitle
    margin 0
    line-height 18px
.bigcate, .smallcate
  display flex
  padding 20px 0
  border-bottom 1px #e6e6e6 solid
  >div
    min-width 180px
    height 32px
    padding 0 20px
    border 1px #999 solid
    border-radius 20px
    margin-right 40px
    text-align center
    cursor pointer
  >div:hover
    background #f7f7f7
  div.bigon, div.smallon
    border none
    background #3972E4
    color #fff
  div.smallon
    background #50A7FF
.smallcate
  height 32px
  border none
  padding 0
  >div
    min-width 120px
    border-radius 4px
.formtip
  padding-left 134px
  margin 10px 0 20px 0
  color red
.formitem input
  width 500px
.formitem textarea
  width 500px
</style>
