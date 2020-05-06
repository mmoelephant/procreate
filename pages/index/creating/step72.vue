<template>
  <div class="indexpage">
    <div class="contentbox">
      <div class="contenthead">7.实施效果分析</div>
      <div class="content">
        <div>
          <p class="contentname">项目实施对推动住房建设领域科技进步有作用</p>
          <el-input
            v-model="form.work"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写项目实施对推动住房建设领域科技进步有作用"
          >
          </el-input>
        </div>
        <div>
          <p class="contentname">社会、经济、环境效益分析</p>
          <el-input
            v-model="form.benefit"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写社会、经济、环境效益分析"
          >
          </el-input>
        </div>
        <div>
          <p class="contentname">项目示范意义</p>
          <el-input
            v-model="form.sence"
            type="textarea"
            rows="6"
            show-word-limit
            maxlength="500"
            placeholder="请填写项目示范意义"
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
      this.$router.push('/creating/step82')
    }
  }
}
</script>
