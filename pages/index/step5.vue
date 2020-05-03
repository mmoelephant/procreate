<template>
  <div class="indexpage">
    <div class="indexhead">
      <h1 class="pagetitle">
        项目立项申请
      </h1>
      <div class="guidebar">
        <div @click="stepone">1.选择申报类别</div>
        <i class="iconfont">&#xe617;</i>
        <div @click="stepone">2.填写计划任务书</div>
        <i class="iconfont">&#xe617;</i>
        <div class="here">3.填写申报表</div>
      </div>
    </div>
    <div class="d-guide">
      <div>1.申请立项理由</div>
      <div>2.国内、外研究现状和趋势</div>
      <div>3.研究目标和预期成果</div>
      <div>4.项目主要内容</div>
      <div class="stepOn">5.研究思路、方法和计划进度</div>
      <div>6.工作基础和科研保障情况</div>
      <div>7.主要研究人员</div>
      <div>8.项目研究单位及合作单位</div>
      <div>9.附件</div>
    </div>
    <div>
      <h1 class="pagetitle">
        住房和城乡建设部软科学研究项目申报书(工程造价管理--软科学研究类)
      </h1>
      <div class="contentbox">
        <div class="contenthead">5.研究思路、方法和计划进度</div>
        <div class="content">
          <div>
            <p class="contentname">研究思路和方法</p>
            <el-input
              v-model="form.searchway"
              type="textarea"
              rows="6"
              show-word-limit
              maxlength="500"
              placeholder="请填写主要研究内容"
            >
            </el-input>
          </div>
          <div>
            <p class="contentname">阶段目标</p>
            <el-input
              v-model="form.stagoal"
              type="textarea"
              rows="6"
              show-word-limit
              maxlength="500"
              placeholder="请填写阶段目标"
            >
            </el-input>
          </div>
          <div>
            <p class="contentname">进度安排</p>
            <el-input
              v-model="form.schedule"
              type="textarea"
              rows="6"
              show-word-limit
              maxlength="500"
              placeholder="请填写进度安排"
            >
            </el-input>
          </div>
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
    stepone() {
      this.$router.push('/creating')
    },
    next() {
      this.$router.push('/step6')
    }
  }
}
</script>
<style lang="stylus" scoped>
.indexhead
  display flex
  align-items center
  padding 20px 0
  border-bottom 1px #e6e6e6 solid
  .pagetitle
    margin 0
.guidebar
  display flex
  align-items center
  font-size 14px
  color #999
  >div
    min-width 110px
    height 24px
    padding 0 20px
    border 1px #e6e6e6 solid
    border-radius 12px
    margin 0 16px
    line-height 24px
    cursor pointer
  >div.here
    border none
    background #50A7FF
    color #fff
  i
    color #ccc
.d-guide
  display flex
  width 100%
  padding 10px 0
  font-size 12px
  line-height 24px
  color #999
  >div
    min-width 60px
    height 24px
    padding 0 10px
    margin-right 5px
    background #E6E6E6
    cursor pointer
  div.stepOn
    background rgba(80, 167, 255, 0.19)
    color #50A7FF
.pagetitle
  text-align center
.contentbox
  padding-bottom 30px
  box-shadow 0px 3px 10px rgba(151,190,255,0.17)
  margin-bottom 30px
  background #fff
.contenthead
  height 50px
  padding 0 40px
  box-shadow 0px 3px 10px rgba(151,190,255,0.17)
  font-size 16px
  line-height 50px
  background #DCE8FF
.content
  padding 0 40px
  .contentname
    margin 20px 0 10px 0
    color #666
</style>
<style lang="stylus">
.content .el-textarea
  width 100%
</style>
