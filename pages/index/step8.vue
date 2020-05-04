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
      <div title="8.项目研究单位及合作单位" class="stepOn">
        8.项目研究单位及合作单位
      </div>
      <div title="9.附件">9.附件</div>
    </div>
    <div>
      <h1 class="pagetitle central">
        住房和城乡建设部软科学研究项目申报书(工程造价管理--软科学研究类)
      </h1>
      <div class="contentbox">
        <div class="contenthead">
          8.项目研究单位及合作单位（打印后加盖公章生效）
        </div>
        <div class="content">
          <h1 class="pagetitle central">
            项目研究单位
          </h1>
          <div class="formitems">
            <div class="formitem">
              <div class="itemname">申报单位名称</div>
              <input
                v-model="form.companyname"
                type="text"
                :disabled="disabled1"
                placeholder="请输入申报单位名称"
              />
            </div>
            <div class="formitem formitem2">
              <div>
                <div class="itemname">负责人姓名</div>
                <input
                  v-model="form.director"
                  type="text"
                  :disabled="disabled1"
                  placeholder="请输入负责人姓名"
                />
              </div>
              <div>
                <div class="itemname">负责人电话</div>
                <input
                  v-model="form.manphone"
                  type="text"
                  :disabled="disabled1"
                  placeholder="请输入负责人电话"
                />
              </div>
            </div>
            <div class="formitem formitem2">
              <div>
                <div class="itemname">联系人姓名</div>
                <input
                  v-model="form.linkman"
                  type="text"
                  :disabled="disabled1"
                  placeholder="请输入联系人姓名"
                />
              </div>
              <div>
                <div class="itemname">联系人电话</div>
                <input
                  v-model="form.linkphone"
                  type="text"
                  :disabled="disabled1"
                  placeholder="请输入联系人电话"
                />
              </div>
            </div>
            <div class="formitem">
              <div class="itemname">电子邮箱</div>
              <input
                v-model="form.email"
                type="text"
                :disabled="disabled1"
                placeholder="请输入电子邮箱"
              />
            </div>
            <div class="formitem">
              <div class="itemname">联系地址</div>
              <input
                v-model="form.linkaddre"
                type="text"
                :disabled="disabled1"
                placeholder="请输入联系地址"
              />
            </div>
          </div>
        </div>
        <div class="content">
          <h1 class="pagetitle central">
            项目合作单位
          </h1>
          <div class="formitems">
            <div class="formitem">
              <div class="itemname">合作单位名称</div>
              <input
                v-model="form.cooperator"
                type="text"
                :disabled="disabled1"
                placeholder="请输入合作单位名称"
              />
            </div>
            <div class="formitem formitem2">
              <div>
                <div class="itemname">负责人姓名</div>
                <input
                  v-model="form.director2"
                  type="text"
                  :disabled="disabled1"
                  placeholder="请输入负责人姓名"
                />
              </div>
              <div>
                <div class="itemname">负责人电话</div>
                <input
                  v-model="form.manphone2"
                  type="text"
                  :disabled="disabled1"
                  placeholder="请输入负责人电话"
                />
              </div>
            </div>
            <div class="formitem formitem2">
              <div>
                <div class="itemname">联系人姓名</div>
                <input
                  v-model="form.linkman2"
                  type="text"
                  :disabled="disabled1"
                  placeholder="请输入联系人姓名"
                />
              </div>
              <div>
                <div class="itemname">联系人电话</div>
                <input
                  v-model="form.linkphone2"
                  type="text"
                  :disabled="disabled1"
                  placeholder="请输入联系人电话"
                />
              </div>
            </div>
            <div class="formitem">
              <div class="itemname">电子邮箱</div>
              <input
                v-model="form.email2"
                type="text"
                :disabled="disabled1"
                placeholder="请输入电子邮箱"
              />
            </div>
            <div class="formitem">
              <div class="itemname">联系地址</div>
              <input
                v-model="form.linkaddre2"
                type="text"
                :disabled="disabled1"
                placeholder="请输入联系地址"
              />
            </div>
          </div>
          <div class="btns">
            <div class="submitbtn">+ 保存合作单位</div>
          </div>
        </div>
      </div>
      <div class="probox">
        <p class="pagetitle">项目合作单位列表</p>
        <div class="listbox">
          <div class="listhead">
            <p class="col12">序号</p>
            <p class="col22">合作单位名称</p>
            <p class="col32">负责人</p>
            <p class="col42">负责人电话</p>
            <p class="col52">联系地址</p>
            <p class="col62">操作</p>
          </div>
          <div class="listItem">
            <p class="col12">序号</p>
            <p class="col22">合作单位名称</p>
            <p class="col32">负责人</p>
            <p class="col42">负责人电话</p>
            <p class="col52">联系地址</p>
            <p class="col62">
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
      <div class="submitbtn" @click="next">下一步</div>
    </div>
    <el-dialog
      :visible.sync="dialogshow"
      title="编辑合作单位"
      :close-on-click-modal="false"
      :lock-scroll="false"
      :show-close="false"
      width="1000px"
    >
      <h1 class="pagetitle central">
        项目合作单位
      </h1>
      <div class="formitems">
        <div class="formitem">
          <div class="itemname">合作单位名称</div>
          <input
            v-model="form.cooperator"
            type="text"
            :disabled="disabled1"
            placeholder="请输入合作单位名称"
          />
        </div>
        <div class="formitem formitem2">
          <div>
            <div class="itemname">负责人姓名</div>
            <input
              v-model="form.director2"
              type="text"
              :disabled="disabled1"
              placeholder="请输入负责人姓名"
            />
          </div>
          <div>
            <div class="itemname">负责人电话</div>
            <input
              v-model="form.manphone2"
              type="text"
              :disabled="disabled1"
              placeholder="请输入负责人电话"
            />
          </div>
        </div>
        <div class="formitem formitem2">
          <div>
            <div class="itemname">联系人姓名</div>
            <input
              v-model="form.linkman2"
              type="text"
              :disabled="disabled1"
              placeholder="请输入联系人姓名"
            />
          </div>
          <div>
            <div class="itemname">联系人电话</div>
            <input
              v-model="form.linkphone2"
              type="text"
              :disabled="disabled1"
              placeholder="请输入联系人电话"
            />
          </div>
        </div>
        <div class="formitem">
          <div class="itemname">电子邮箱</div>
          <input
            v-model="form.email2"
            type="text"
            :disabled="disabled1"
            placeholder="请输入电子邮箱"
          />
        </div>
        <div class="formitem">
          <div class="itemname">联系地址</div>
          <input
            v-model="form.linkaddre2"
            type="text"
            :disabled="disabled1"
            placeholder="请输入联系地址"
          />
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="editdone">确定</el-button>
      </span>
    </el-dialog>
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
      this.$router.push('/step9')
    },
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
.dialogform
  width 100%
  margin 0
</style>
