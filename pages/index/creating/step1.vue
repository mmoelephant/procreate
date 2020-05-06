<template>
  <div class="indexpage">
    <div class="contentbox">
      <div class="contenthead">1.申请立项理由</div>
      <div class="content">
        <div>
          <p class="contentname">研究目的</p>
          <el-input
            v-model="form.aim"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写研究目的"
          >
          </el-input>
        </div>
        <div>
          <p class="contentname">选题依据</p>
          <el-input
            v-model="form.base"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写选题依据"
          >
          </el-input>
        </div>
        <div>
          <p class="contentname">研发意义</p>
          <el-input
            v-model="form.mean"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写研发意义"
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
      this.$router.push('/creating/step2')
    }
  }
}
</script>
