<template>
  <div class="indexpage">
    <div class="contentbox">
      <div class="contenthead">6.工作基础和科研保障情况</div>
      <div class="content">
        <div>
          <p class="contentname">研究基础</p>
          <el-input
            v-model="form.foundation"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写研究基础"
          ></el-input>
        </div>
        <div>
          <p class="contentname">任务分工及主要科研条件</p>
          <el-input
            v-model="form.condition"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写任务分工及主要科研条件"
          ></el-input>
        </div>
        <div>
          <p class="contentname">项目负责人以及团队</p>
          <el-input
            v-model="form.team"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写项目负责人以及团队"
          ></el-input>
        </div>
        <div>
          <p class="contentname">资金概算和来源</p>
          <el-input
            v-model="form.fund"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写资金概算和来源"
          ></el-input>
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
    next() {
      this.$router.push('/creating/step7')
    }
  }
}
</script>
