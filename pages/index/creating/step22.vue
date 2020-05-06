<template>
  <div class="indexpage">
    <div class="contentbox">
      <div class="contenthead">2.申报单位相关工作基础</div>
      <div class="content">
        <div>
          <el-input
            v-model="form.workbase"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写申报单位相关工作基础"
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
      this.$router.push('/creating/step32')
    }
  }
}
</script>
