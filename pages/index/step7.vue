<template>
  <div class="indexpage">
    <div class="indexhead">
      <h1 class="pagetitle">
        项目立项申请
      </h1>
      <div class="guidebar">
        <div @click="stepone">1.选择申报类别</div>
        <i class="iconfont">&#xe617;</i>
        <div @click="stepone">2.填写计划任务书</div>
        <i class="iconfont">&#xe617;</i>
        <div class="here">3.填写申报表</div>
      </div>
    </div>
    <div class="d-guide">
      <div title="1.申请立项理由">1.申请立项理由</div>
      <div title="2.国内、外研究现状和趋势">2.国内、外研究现状和趋势</div>
      <div title="3.研究目标和预期成果">3.研究目标和预期成果</div>
      <div title="4.项目主要内容">4.项目主要内容</div>
      <div title="5.研究思路、方法和计划进度">5.研究思路、方法和计划进度</div>
      <div title="6.工作基础和科研保障情况">6.工作基础和科研保障情况</div>
      <div title="7.主要研究人员" class="stepOn">7.主要研究人员</div>
      <div title="8.项目研究单位及合作单位">8.项目研究单位及合作单位</div>
      <div title="9.附件">9.附件</div>
    </div>
    <div>
      <h1 class="pagetitle central">
        住房和城乡建设部软科学研究项目申报书(工程造价管理--软科学研究类)
      </h1>
      <div class="contentbox">
        <div class="contenthead">7.主要研究人员</div>
        <div class="content">
          <div class="formitems">
            <div class="formitem two">
              <div>
                <div class="itemname">姓名</div>
                <input
                  v-model="form.yourname"
                  type="text"
                  :disabled="disabled1"
                  placeholder="请输入姓名"
                />
              </div>
              <div>
                <div class="itemname">性别</div>
                <el-select v-model="form.gender" placeholder="请选择性别">
                  <el-option
                    v-for="item in genders"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </div>
              <div>
                <div class="itemname">出生日期</div>
                <el-date-picker
                  v-model="form.birthday"
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
                v-model="form.post"
                type="text"
                :disabled="disabled1"
                placeholder="请输入职务/职称"
              />
            </div>
            <div class="formitem formitem2">
              <div>
                <div class="itemname">所学专业</div>
                <input
                  v-model="form.career"
                  type="text"
                  :disabled="disabled1"
                  placeholder="请输入所学专业"
                />
              </div>
              <div>
                <div class="itemname">现从事专业</div>
                <input
                  v-model="form.majorin"
                  type="text"
                  :disabled="disabled1"
                  placeholder="请输入现从事专业"
                />
              </div>
            </div>
            <div class="formitem">
              <div class="itemname">所在单位</div>
              <input
                v-model="form.post"
                type="text"
                :disabled="disabled1"
                placeholder="请输入所在单位"
              />
            </div>
            <div class="formitem">
              <div class="itemname">在本项目中承担的任务</div>
              <input
                v-model="form.task"
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
            <p class="col71">操作</p>
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
    </div>
    <div class="btns">
      <div>保存</div>
      <div class="submitbtn" @click="next">下一步</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      genders: [],
      pagetotal: 0,
      disabled1: false
    }
  },
  methods: {
    stepone() {
      this.$router.push('/creating')
    },
    next() {
      this.$router.push('/step2')
    },
    pagechange(val) {}
  }
}
</script>
<style lang="stylus" scoped>
.formitem input
  width calc(100% - 200px) !important
.formitem.two
  >div
    width calc(100% / 3) !important
.formitem.formitem2
  >div
    display flex
    align-items center
    width 50%
</style>
