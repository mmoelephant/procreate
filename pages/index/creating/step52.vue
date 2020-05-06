<template>
  <div class="indexpage">
    <div class="contentbox">
      <div class="contenthead">5.项目主要实施内容</div>
      <div class="content">
        <div>
          <p class="contentname">项目示范内容</p>
          <el-input
            v-model="form.example"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写项目示范内容"
          >
          </el-input>
        </div>
        <div>
          <p class="contentname">关键问题和难点分析</p>
          <el-input
            v-model="form.expect"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写关键问题和难点分析"
          >
          </el-input>
        </div>
        <div>
          <p class="contentname">考核指标</p>
          <el-input
            v-model="form.indicator"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写考核指标"
          >
          </el-input>
        </div>
        <div>
          <p class="contentname">先进性/创新点</p>
          <el-input
            v-model="form.advance"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写先进性/创新点"
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
      this.$router.push('/creating/step62')
    }
  }
}
</script>
