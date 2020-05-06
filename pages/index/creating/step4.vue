<template>
  <div class="indexpage">
    <div class="contentbox">
      <div class="contenthead">4.项目主要内容</div>
      <div class="content">
        <div>
          <p class="contentname">主要研究内容</p>
          <el-input
            v-model="form.study"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写主要研究内容"
          >
          </el-input>
        </div>
        <div>
          <p class="contentname">创新点</p>
          <el-input
            v-model="form.innovation"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写创新点"
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
      this.$router.push('/creating/step5')
    }
  }
}
</script>
