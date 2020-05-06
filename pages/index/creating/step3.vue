<template>
  <div class="indexpage">
    <div class="contentbox">
      <div class="contenthead">3.研究目标和预期成果</div>
      <div class="content">
        <div>
          <p class="contentname">研究目标</p>
          <el-input
            v-model="form.target"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写研究目标"
          >
          </el-input>
        </div>
        <div>
          <p class="contentname">预期成果的名称及表达方式</p>
          <el-input
            v-model="form.except"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写预期成果的名称及表达方式"
          >
          </el-input>
        </div>
        <div>
          <p class="contentname">成果产出对相关管理工作的作用和应用前景</p>
          <el-input
            v-model="form.prospect"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写成果产出对相关管理工作的作用和应用前景"
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
      this.$router.push('/creating/step4')
    }
  }
}
</script>
