<template>
  <div class="indexpage">
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
      this.$router.push('/creating/step3')
    }
  }
}
</script>
