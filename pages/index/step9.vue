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
      <div title="1.申请立项理由">1.申请立项理由</div>
      <div title="2.国内、外研究现状和趋势">2.国内、外研究现状和趋势</div>
      <div title="3.研究目标和预期成果">3.研究目标和预期成果</div>
      <div title="4.项目主要内容">4.项目主要内容</div>
      <div title="5.研究思路、方法和计划进度">5.研究思路、方法和计划进度</div>
      <div title="6.工作基础和科研保障情况">6.工作基础和科研保障情况</div>
      <div title="7.主要研究人员">7.主要研究人员</div>
      <div title="8.项目研究单位及合作单位">
        8.项目研究单位及合作单位
      </div>
      <div title="9.附件" class="stepOn">9.附件</div>
    </div>
    <div>
      <h1 class="pagetitle central">
        住房和城乡建设部软科学研究项目申报书(工程造价管理--软科学研究类)
      </h1>
      <div class="contentbox">
        <div class="contenthead">
          9.上传相关附件
        </div>
        <div class="content">
          <div class="formitems">
            <div class="formitem">
              <div class="uploadbox">
                <div class="uploadbtn">
                  <span>上传相关附件</span>
                  <input
                    ref="upload1"
                    type="file"
                    accept=".png,.jpg,.pdf,.docx,.xlsx,.zip,.rar"
                    @change="uploadchange1"
                  />
                </div>
              </div>
            </div>
            <p class="uploadtip">
              注意 *：<br />
              1.请上传PDF/word/execl/jpg/png格式附件，单个文件大小不超过20M。<br />
              2.如用多个文件请依次上传。
            </p>
          </div>
        </div>
      </div>
      <div class="probox">
        <p class="pagetitle">附件列表</p>
        <div class="listbox">
          <div class="listhead">
            <p class="col13">序号</p>
            <p class="col23">文件名称</p>
            <p class="col33">操作</p>
          </div>
          <div class="listItem">
            <p class="col13">序号</p>
            <p class="col23">合作单位名称</p>
            <p class="col33">
              <span @click="edit">编辑</span>
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
    </div>
    <div class="btns">
      <div>保存</div>
      <div class="submitbtn" @click="next">提交并下载打印文件</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      genders: [],
      pagetotal: 0,
      disabled1: false,
      dialogshow: false
    }
  },
  methods: {
    stepone() {
      this.$router.push('/creating')
    },
    next() {
      this.$router.push('/step2')
    },
    uploadchange1() {},
    pagechange(val) {},
    edit() {
      this.dialogshow = true
    },
    editdone() {
      this.dialogshow = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.formitem input
  width calc(100% - 114px) !important
.formitem.formitem2
  >div
    display flex
    align-items center
    width 50%
.uploadtip
  color red
.dialogform
  width 100%
  margin 0
</style>
