<template>
  <div class="indexpage">
    <div class="contentbox">
      <div class="contenthead">
        8.保障措施（包括组织方式、责任分工、团队实力、风险控制措施等）
      </div>
      <div class="content">
        <div>
          <el-input
            v-model="form.measure"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写保障措施"
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
      this.$router.push('/creating/step92')
    }
  }
}
</script>
