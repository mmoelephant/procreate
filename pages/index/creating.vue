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
            软科学研究项目
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
              v-model="form.proname"
              type="text"
              :disabled="disabled1"
              placeholder="请输入项目名称"
            />
          </div>
          <div class="formitem">
            <div class="itemname">项目类别</div>
            <input
              v-model="form.protype"
              type="password"
              :disabled="disabled1"
              placeholder="请输入项目类别"
            />
          </div>
          <div class="formitem">
            <div class="itemname">申报单位</div>
            <input
              v-model="form.prounit"
              type="text"
              :disabled="disabled1"
              placeholder="请输入申报单位"
            />
          </div>
          <div class="formitem two">
            <div>
              <div class="itemname">起始时间</div>
              <el-date-picker
                v-model="form.startime"
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
                v-model="form.ownmoney"
                type="text"
                :disabled="disabled1"
                placeholder="请输入金额，例如：200"
              />
            </div>
            <div>
              <div class="itemname">国家拨/贷款</div>
              <input
                v-model="form.offical"
                type="text"
                :disabled="disabled1"
                placeholder="请输入金额，例如：200"
              />
            </div>
            <div>
              <div class="itemname">地方拨/贷款</div>
              <input
                v-model="form.local"
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
                v-model="form.other"
                type="text"
                :disabled="disabled1"
                placeholder="请输入金额，例如：200"
              />
            </div>
            <div>
              <div class="itemname">外方</div>
              <input
                v-model="form.outside"
                type="text"
                :disabled="disabled1"
                placeholder="请输入金额，例如：200"
              />
            </div>
          </div>
          <div class="formitem">
            <div class="itemname">总金额</div>
            <input
              v-model="form.totalmoney"
              type="text"
              :disabled="disabled1"
              placeholder="请输入金额，例如：200"
            />
          </div>
          <div class="formitem multi">
            <div class="itemname">合作单位</div>
            <div class="multinput">
              <div v-for="(item, index) in form.partner" :key="index">
                <input
                  :v-model="item"
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
              <div v-for="(item, index) in form.proaddre" :key="index">
                <input
                  :v-model="item"
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
            <!-- <input
              v-model="form.proaddre"
              type="text"
              :disabled="disabled1"
              placeholder="请输入项目所在地"
            /> -->
          </div>
          <div class="formitem">
            <div class="itemname">主要研究内容</div>
            <el-input
              v-model="form.main"
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
              v-model="form.options"
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
              v-model="form.result"
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
                v-model="form.charge"
                type="text"
                :disabled="disabled1"
                placeholder="请输入负责人姓名"
              />
            </div>
            <div>
              <div class="itemname">负责人电话</div>
              <input
                v-model="form.chargephone"
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
                v-model="form.chargeemail"
                type="text"
                :disabled="disabled1"
                placeholder="请输入负责人电子邮箱"
              />
            </div>
            <div>
              <div class="itemname">职务/职称</div>
              <input
                v-model="form.chargeduty"
                type="text"
                :disabled="disabled1"
                placeholder="请输入负责人职务/职称"
              />
            </div>
          </div>
          <div class="formitem">
            <div class="itemname">通讯地址</div>
            <input
              v-model="form.chargeaddre"
              type="text"
              :disabled="disabled1"
              placeholder="请输入负责人通讯地址"
            />
          </div>
          <div class="formitem">
            <div class="itemname">所在单位</div>
            <input
              v-model="form.chargeunit"
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
                v-model="form.contact"
                type="text"
                :disabled="disabled1"
                placeholder="请输入经办人姓名"
              />
            </div>
            <div>
              <div class="itemname">经办人电话</div>
              <input
                v-model="form.contactphone"
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
                v-model="form.contactemail"
                type="text"
                :disabled="disabled1"
                placeholder="请输入经办人电子邮箱"
              />
            </div>
            <div>
              <div class="itemname">职务/职称</div>
              <input
                v-model="form.contactduty"
                type="text"
                :disabled="disabled1"
                placeholder="请输入经办人职务/职称"
              />
            </div>
          </div>
          <div class="formitem">
            <div class="itemname">通讯地址</div>
            <input
              v-model="form.contactaddre"
              type="text"
              :disabled="disabled1"
              placeholder="请输入经办人通讯地址"
            />
          </div>
          <div class="formitem">
            <div class="itemname">所在单位</div>
            <input
              v-model="form.contactunit"
              type="text"
              :disabled="disabled1"
              placeholder="请输入经办人所在单位"
            />
          </div>
        </div>
      </div>
      <div class="btns">
        <div>保存</div>
        <div class="submitbtn" @click="next">下一步</div>
      </div>
    </div>
    <div v-else>
      <nuxt />
    </div>
  </div>
</template>
<script>
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
        partner: [''],
        proaddre: ['']
      },
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
    next() {
      this.$router.push({
        path: '/creating/step1',
        query: { type: this.bigOn }
      })
    },
    addmore() {
      this.$confirm('确定合作单位吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        lockScroll: false,
        type: 'warning'
      })
        .then(() => {
          this.form.partner.push('')
        })
        .catch(() => {})
    },
    delmore() {
      if (this.form.partner && this.form.partner.length > 1) {
        this.$confirm('确定删除合作单位吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          lockScroll: false,
          type: 'warning'
        })
          .then(() => {
            if (this.form.partner.length > 1) {
              this.form.partner.splice(this.form.partner.length - 1, 1)
            }
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
          this.form.proaddre.push('')
        })
        .catch(() => {})
    },
    delmore2() {
      if (this.form.proaddre && this.form.proaddre.length > 1) {
        this.$confirm('确定删除合作单位吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          lockScroll: false,
          type: 'warning'
        })
          .then(() => {
            if (this.form.proaddre.length > 1) {
              this.form.proaddre.splice(this.form.proaddre.length - 1, 1)
            }
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
