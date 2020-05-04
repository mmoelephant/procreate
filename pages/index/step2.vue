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
      <div title="2.国内、外研究现状和趋势" class="stepOn">
        2.国内、外研究现状和趋势
      </div>
      <div title="3.研究目标和预期成果">3.研究目标和预期成果</div>
      <div title="4.项目主要内容">4.项目主要内容</div>
      <div title="5.研究思路、方法和计划进度">5.研究思路、方法和计划进度</div>
      <div title="6.工作基础和科研保障情况">6.工作基础和科研保障情况</div>
      <div title="7.主要研究人员">7.主要研究人员</div>
      <div title="8.项目研究单位及合作单位">8.项目研究单位及合作单位</div>
      <div title="9.附件">9.附件</div>
    </div>
    <div>
      <h1 class="pagetitle central">
        住房和城乡建设部软科学研究项目申报书(工程造价管理--软科学研究类)
      </h1>
      <div class="contentbox">
        <div class="contenthead">2.国内、外研究现状和趋势</div>
        <div class="content">
          <div>
            <p class="contentname">研究现状</p>
            <el-input
              v-model="form.current"
              type="textarea"
              rows="6"
              show-word-limit
              maxlength="500"
              placeholder="请填写研究现状"
            >
            </el-input>
          </div>
          <div>
            <p class="contentname">技术指标</p>
            <el-input
              v-model="form.point"
              type="textarea"
              rows="6"
              show-word-limit
              maxlength="500"
              placeholder="请填写技术指标"
            >
            </el-input>
          </div>
          <div>
            <p class="contentname">存在的问题</p>
            <el-input
              v-model="form.problem"
              type="textarea"
              rows="6"
              show-word-limit
              maxlength="500"
              placeholder="请填写存在的问题"
            >
            </el-input>
          </div>
          <div>
            <p class="contentname">发展趋势</p>
            <el-input
              v-model="form.trend"
              type="textarea"
              rows="6"
              show-word-limit
              maxlength="500"
              placeholder="请填写发展趋势"
            >
            </el-input>
          </div>
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
      form: {}
    }
  },
  methods: {
    stepone() {
      this.$router.push('/creating')
    },
    next() {
      this.$router.push('/step3')
    }
  }
}
</script>
