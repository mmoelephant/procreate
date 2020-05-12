<template>
  <div v-loading.fullscreen="loading" class="indexpage">
    <div class="contentbox">
      <div class="contenthead">1.项目基本信息</div>
      <div class="content">
        <div class="formitems">
          <div class="formitem">
            <div class="itemname">职务/职称</div>
            <input v-model="job" type="text" placeholder="请输入职务/职称" />
          </div>
          <div class="formitem">
            <div class="itemname">所在单位</div>
            <input v-model="company" type="text" placeholder="请输入所在单位" />
          </div>
          <div class="formitem">
            <div class="itemname">在本项目中承担的任务</div>
            <input
              v-model="task"
              type="text"
              placeholder="请输入在本项目中承担的任务"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="btns">
      <div @click="savemsg">保存</div>
      <div class="submitbtn" @click="next">下一步</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      loading: false
    }
  }
}
</script>
