<template>
  <div class="indexpage">
    <div class="contentbox">
      <div class="contenthead">6.技术路线和计划进度</div>
      <div class="content">
        <div>
          <p class="contentname">实施技术路线</p>
          <el-input
            v-model="form.techroute"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写实施技术路线"
          >
          </el-input>
        </div>
        <div>
          <p class="contentname">工作计划</p>
          <el-input
            v-model="form.plan"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写工作计划"
          >
          </el-input>
        </div>
        <div>
          <p class="contentname">成果转化</p>
          <el-input
            v-model="form.transfer"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写成果转化"
          >
          </el-input>
        </div>
        <div>
          <p class="contentname">服务推广计划</p>
          <el-input
            v-model="form.serveplan"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写服务推广计划"
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
      this.$router.push('/creating/step72')
    }
  }
}
</script>
