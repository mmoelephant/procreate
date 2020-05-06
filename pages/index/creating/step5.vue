<template>
  <div class="indexpage">
    <div class="contentbox">
      <div class="contenthead">5.研究思路、方法和计划进度</div>
      <div class="content">
        <div>
          <p class="contentname">研究思路和方法</p>
          <el-input
            v-model="form.searchway"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写研究思路和方法"
          >
          </el-input>
        </div>
        <div>
          <p class="contentname">阶段目标</p>
          <el-input
            v-model="form.stagoal"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写阶段目标"
          >
          </el-input>
        </div>
        <div>
          <p class="contentname">进度安排</p>
          <el-input
            v-model="form.schedule"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写进度安排"
          >
          </el-input>
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
      this.$router.push('/creating/step6')
    }
  }
}
</script>
