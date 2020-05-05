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
          <p class="col8">
            <span @click="details">查看</span>
          </p>
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
    <el-dialog
      :visible.sync="dialogshow"
      title="立项申请详情"
      :close-on-click-modal="false"
      :lock-scroll="false"
      :show-close="false"
      width="1000px"
    >
      <detail />
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="cancel2">取消</el-button> -->
        <el-button type="primary" @click="sure">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import detail from './prodetail'
export default {
  components: {
    detail
  },
  data() {
    return {
      prostate: '',
      prostates: [],
      projects: [],
      word: '',
      pagetotal: 0,
      detailinfo: {},
      dialogshow: false
      // imgshow: false
    }
  },
  methods: {
    search() {},
    pagechange() {},
    tocreate() {
      this.$router.push('/creating')
    },
    details() {
      this.dialogshow = true
    },
    sure() {
      this.dialogshow = false
    }
    // seeImg() {
    //   this.imgshow = true
    // },
    // sureimg() {
    //   this.imgshow = false
    // }
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
.form
  box-shadow none
  margin 0
.itemname + p
  color #333
.imgbox
  width 100px
  >div
    width 100%
    height 100px
    margin-bottom 10px
    overflow hidden
    cursor pointer
  img
    display block
    width 100%
.showimgbox img
  display block
  width 100%
</style>
