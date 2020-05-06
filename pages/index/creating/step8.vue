<template>
  <div class="indexpage">
    <div class="contentbox">
      <div class="contenthead">
        8.项目申报单位及合作单位（打印后加盖公章生效）
      </div>
      <div class="content">
        <h1 class="pagetitle central">项目申报单位</h1>
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
              <div class="itemname">负责人电子邮箱</div>
              <input
                v-model="form.manemail"
                type="text"
                :disabled="disabled1"
                placeholder="请输入负责人电子邮箱"
              />
            </div>
            <div>
              <div class="itemname">负责人通讯地址</div>
              <input
                v-model="form.manaddre"
                type="text"
                :disabled="disabled1"
                placeholder="请输入负责人通讯地址"
              />
            </div>
          </div>
          <div class="formitem formitem2">
            <div>
              <div class="itemname">经办人姓名</div>
              <input
                v-model="form.linkman"
                type="text"
                :disabled="disabled1"
                placeholder="请输入经办人姓名"
              />
            </div>
            <div>
              <div class="itemname">经办人电话</div>
              <input
                v-model="form.linkphone"
                type="text"
                :disabled="disabled1"
                placeholder="请输入经办人电话"
              />
            </div>
          </div>
          <div class="formitem formitem2">
            <div>
              <div class="itemname">经办人电子邮箱</div>
              <input
                v-model="form.linkemail"
                type="text"
                :disabled="disabled1"
                placeholder="请输入经办人电子邮箱"
              />
            </div>
            <div>
              <div class="itemname">经办人通讯地址</div>
              <input
                v-model="form.linkaddre"
                type="text"
                :disabled="disabled1"
                placeholder="请输入经办人通讯地址"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <h1 class="pagetitle central">项目合作单位</h1>
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
                v-model="form.c_director"
                type="text"
                :disabled="disabled1"
                placeholder="请输入负责人姓名"
              />
            </div>
            <div>
              <div class="itemname">负责人电话</div>
              <input
                v-model="form.c_manphone"
                type="text"
                :disabled="disabled1"
                placeholder="请输入负责人电话"
              />
            </div>
          </div>
          <div class="formitem formitem2">
            <div>
              <div class="itemname">负责人电子邮箱</div>
              <input
                v-model="form.c_manemail"
                type="text"
                :disabled="disabled1"
                placeholder="请输入负责人电子邮箱"
              />
            </div>
            <div>
              <div class="itemname">负责人通讯地址</div>
              <input
                v-model="form.c_manaddre"
                type="text"
                :disabled="disabled1"
                placeholder="请输入负责人通讯地址"
              />
            </div>
          </div>
          <div class="formitem formitem2">
            <div>
              <div class="itemname">经办人姓名</div>
              <input
                v-model="form.c_linkman"
                type="text"
                :disabled="disabled1"
                placeholder="请输入经办人姓名"
              />
            </div>
            <div>
              <div class="itemname">经办人电话</div>
              <input
                v-model="form.c_linkphone"
                type="text"
                :disabled="disabled1"
                placeholder="请输入经办人电话"
              />
            </div>
          </div>
          <div class="formitem formitem2">
            <div>
              <div class="itemname">经办人电子邮箱</div>
              <input
                v-model="form.c_linkemail"
                type="text"
                :disabled="disabled1"
                placeholder="请输入经办人电子邮箱"
              />
            </div>
            <div>
              <div class="itemname">经办人通讯地址</div>
              <input
                v-model="form.c_linkaddre"
                type="text"
                :disabled="disabled1"
                placeholder="请输入经办人通讯地址"
              />
            </div>
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
        ></el-pagination>
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
      <h1 class="pagetitle central">项目合作单位</h1>
      <div class="formitems dialogform">
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
              v-model="form.c_director"
              type="text"
              :disabled="disabled1"
              placeholder="请输入负责人姓名"
            />
          </div>
          <div>
            <div class="itemname">负责人电话</div>
            <input
              v-model="form.c_manphone"
              type="text"
              :disabled="disabled1"
              placeholder="请输入负责人电话"
            />
          </div>
        </div>
        <div class="formitem formitem2">
          <div>
            <div class="itemname">负责人电子邮箱</div>
            <input
              v-model="form.c_manemail"
              type="text"
              :disabled="disabled1"
              placeholder="请输入负责人电子邮箱"
            />
          </div>
          <div>
            <div class="itemname">负责人通讯地址</div>
            <input
              v-model="form.c_manaddre"
              type="text"
              :disabled="disabled1"
              placeholder="请输入负责人通讯地址"
            />
          </div>
        </div>
        <div class="formitem formitem2">
          <div>
            <div class="itemname">经办人姓名</div>
            <input
              v-model="form.c_linkman"
              type="text"
              :disabled="disabled1"
              placeholder="请输入经办人姓名"
            />
          </div>
          <div>
            <div class="itemname">经办人电话</div>
            <input
              v-model="form.c_linkphone"
              type="text"
              :disabled="disabled1"
              placeholder="请输入经办人电话"
            />
          </div>
        </div>
        <div class="formitem formitem2">
          <div>
            <div class="itemname">经办人电子邮箱</div>
            <input
              v-model="form.c_linkemail"
              type="text"
              :disabled="disabled1"
              placeholder="请输入经办人电子邮箱"
            />
          </div>
          <div>
            <div class="itemname">经办人通讯地址</div>
            <input
              v-model="form.c_linkaddre"
              type="text"
              :disabled="disabled1"
              placeholder="请输入经办人通讯地址"
            />
          </div>
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
      this.$router.push('/creating/step9')
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
