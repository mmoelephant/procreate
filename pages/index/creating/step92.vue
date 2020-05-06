<template>
  <div class="indexpage">
    <div class="contentbox">
      <div class="contenthead">9.主要研究人员</div>
      <div class="content">
        <div class="formitems">
          <div class="formitem two date">
            <div>
              <div class="itemname">姓名</div>
              <input
                v-model="form.yourname"
                type="text"
                :disabled="disabled1"
                placeholder="请输入姓名"
              />
            </div>
            <div>
              <div class="itemname">性别</div>
              <el-select v-model="form.gender" placeholder="请选择性别">
                <el-option
                  v-for="item in genders"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                ></el-option>
              </el-select>
            </div>
            <div>
              <div class="itemname">出生日期</div>
              <el-date-picker
                v-model="form.birthday"
                type="date"
                :disabled="disabled1"
                placeholder="请选择起始时间"
              >
              </el-date-picker>
            </div>
          </div>
          <div class="formitem">
            <div class="itemname">职务/职称</div>
            <input
              v-model="form.post"
              type="text"
              :disabled="disabled1"
              placeholder="请输入职务/职称"
            />
          </div>
          <div class="formitem formitem2">
            <div>
              <div class="itemname">所学专业</div>
              <input
                v-model="form.career"
                type="text"
                :disabled="disabled1"
                placeholder="请输入所学专业"
              />
            </div>
            <div>
              <div class="itemname">现从事专业</div>
              <input
                v-model="form.majorin"
                type="text"
                :disabled="disabled1"
                placeholder="请输入现从事专业"
              />
            </div>
          </div>
          <div class="formitem">
            <div class="itemname">所在单位</div>
            <input
              v-model="form.post"
              type="text"
              :disabled="disabled1"
              placeholder="请输入所在单位"
            />
          </div>
          <div class="formitem">
            <div class="itemname">在本项目中承担的任务</div>
            <input
              v-model="form.task"
              type="text"
              :disabled="disabled1"
              placeholder="请输入在本项目中承担的任务"
            />
          </div>
        </div>
        <div class="btns">
          <div class="submitbtn">+ 保存人员信息</div>
        </div>
      </div>
    </div>
    <div class="probox">
      <p class="pagetitle">主要研究人员列表</p>
      <div class="listbox">
        <div class="listhead">
          <p class="col11">序号</p>
          <p class="col21">姓名</p>
          <p class="col31">性别</p>
          <p class="col41">出生年月</p>
          <p class="col51">职务/职称</p>
          <p class="col61">所在单位</p>
          <p class="col71">操作</p>
        </div>
        <div class="listItem">
          <p class="col11">序号</p>
          <p class="col21">姓名</p>
          <p class="col31">性别</p>
          <p class="col41">出生日期</p>
          <p class="col51">职务/职称</p>
          <p class="col61">所在单位</p>
          <p class="col71">
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
    <div class="btns">
      <div>保存</div>
      <div class="submitbtn" @click="next">下一步</div>
    </div>
    <el-dialog
      :visible.sync="dialogshow"
      title="编辑研究人员"
      :close-on-click-modal="false"
      :lock-scroll="false"
      :show-close="false"
      width="1000px"
    >
      <div class="formitems dialogform">
        <div class="formitem two date">
          <div>
            <div class="itemname">姓名</div>
            <input
              v-model="form.yourname"
              type="text"
              :disabled="disabled1"
              placeholder="请输入姓名"
            />
          </div>
          <div>
            <div class="itemname">性别</div>
            <el-select v-model="form.gender" placeholder="请选择性别">
              <el-option
                v-for="item in genders"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
          <div>
            <div class="itemname">出生日期</div>
            <el-date-picker
              v-model="form.birthday"
              type="date"
              :disabled="disabled1"
              placeholder="请选择起始时间"
            >
            </el-date-picker>
          </div>
        </div>
        <div class="formitem">
          <div class="itemname">职务/职称</div>
          <input
            v-model="form.post"
            type="text"
            :disabled="disabled1"
            placeholder="请输入职务/职称"
          />
        </div>
        <div class="formitem formitem2">
          <div>
            <div class="itemname">所学专业</div>
            <input
              v-model="form.career"
              type="text"
              :disabled="disabled1"
              placeholder="请输入所学专业"
            />
          </div>
          <div>
            <div class="itemname">现从事专业</div>
            <input
              v-model="form.majorin"
              type="text"
              :disabled="disabled1"
              placeholder="请输入现从事专业"
            />
          </div>
        </div>
        <div class="formitem">
          <div class="itemname">所在单位</div>
          <input
            v-model="form.post"
            type="text"
            :disabled="disabled1"
            placeholder="请输入所在单位"
          />
        </div>
        <div class="formitem">
          <div class="itemname">在本项目中承担的任务</div>
          <input
            v-model="form.task"
            type="text"
            :disabled="disabled1"
            placeholder="请输入在本项目中承担的任务"
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
    next() {
      this.$router.push('/creating/step102')
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
.formitem.two
  >div
    width calc(100% / 3) !important
.formitem.formitem2
  >div
    display flex
    align-items center
    width 50%
.dialogform
  width 100%
  margin 0
</style>
<style lang="stylus">
.formitem.two.date
  .el-select, .el-date-editor.el-input
    width calc(100% - 114px) !important
  .el-input__inner
    width 100% !important
</style>
