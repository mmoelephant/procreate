<template>
  <div class="indexpage">
    <h1 class="pagetitle">
      项目立项申请
    </h1>
    <div class="pagetip">
      <div class="btns">
        <div class="submitbtn" @click="tocreate">发起立项申请</div>
      </div>
      <p>
        注意 *：
        1、项目所有完成单位（包括申报单位和合作单位）都须在本系统中进行注册，未注册单位不能作为项目完成单位。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        2、申报书成功提交后，请下载打印申报书及附件（全部材料原件和复印件1式1份），并加盖申报单位和合作单位公章后送审初审单位。
      </p>
    </div>
    <div class="probox">
      <p class="pagetitle">项目立项</p>
      <div class="filters">
        <el-select v-model="prostate" placeholder="请选择项目申报状态">
          <el-option
            v-for="item in prostates"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
        <div class="searchbox">
          <input
            v-model="word"
            type="text"
            placeholder="请输入项目编号或名称查询"
          />
          <i class="iconfont" @click="search">&#xe619;</i>
        </div>
      </div>
      <div class="listbox">
        <div class="listhead">
          <p class="col1">序号</p>
          <p class="col2">项目编号</p>
          <p class="col3">项目名称</p>
          <p class="col4">起始日期</p>
          <p class="col5">截止日期</p>
          <p class="col6">申报状态</p>
          <p class="col7">审核意见</p>
          <p class="col8">操作</p>
        </div>
        <div class="listItem">
          <p class="col1">序号</p>
          <p class="col2">项目编号</p>
          <p class="col3">项目名称</p>
          <p class="col4">起始日期</p>
          <p class="col5">截止日期</p>
          <p class="col6">申报状态</p>
          <p class="col7">审核意见</p>
          <p class="col8">操作</p>
        </div>
      </div>
      <div class="paging">
        <el-pagination
          layout="total, prev, pager, next"
          :page-size="8"
          :hide-on-single-page="false"
          :total="pagetotal"
          @current-change="pagechange"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      prostate: '',
      prostates: [],
      projects: [],
      word: '',
      pagetotal: 0
    }
  },
  methods: {
    search() {},
    pagechange() {},
    tocreate() {
      this.$router.push('/creating')
    }
  }
}
</script>
<style lang="stylus" scoped>
.pagetip
  padding 30px 60px
  p
    width 800px
    margin-top 10px
    line-height 20px
    color red
.btns
  justify-content flex-start
.probox
  padding 6px 60px 40px 60px
  box-shadow 0px 3px 10px rgba(151,190,255,0.17)
  margin-top 6px
  background #fff
.listbox
  border 1px #e6e6e6 solid
  border-right none
  text-align center
  line-height 50px
.listhead, .listItem
  display flex
  align-items center
  width 100%
  height 50px
  background #ECEEF2
  color #333
  p
    border-right 1px #e6e6e6 solid
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
.listItem
  background #fff
  color #666
  .col4, .col5
    color #999
.col1
  width 5%
.col2, .col4, .col5, .col6, .col8
  width 10%
.col3
  width 20%
.col7
  width 25%
</style>
