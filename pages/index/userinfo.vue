<template>
  <div class="indexpage">
    <h1 class="pagetitle">
      企业资料
      <span class="statebox">（审核中）</span>
    </h1>
    <div class="pagetip">
      您提交的企业资料正在审核中，请耐心等待，如有疑问请联系
      <span>0871-65874167</span>
    </div>
    <div class="form">
      <p class="formtitle">企业资质信息</p>
      <div class="formitems">
        <div class="formitem">
          <div class="itemname">申报单位名称</div>
          <input
            v-model="form.enterprise_name"
            type="text"
            :disabled="disabled1"
            placeholder="请输入申报单位名称"
          />
        </div>
        <div class="formitem">
          <div class="itemname">统一社会信用代码</div>
          <input
            v-model="form.enterprise_code"
            type="text"
            :disabled="disabled1"
            placeholder="请输入统一社会信用代码"
          />
        </div>
        <div class="formitem">
          <div class="itemname">法人姓名</div>
          <input
            v-model="form.leaderman"
            type="text"
            :disabled="disabled1"
            placeholder="请输入法人姓名"
          />
        </div>
        <div class="formitem">
          <div class="itemname">法人身份证号</div>
          <input
            v-model="form.idnumber"
            type="text"
            :disabled="disabled1"
            placeholder="请输入法人身份证号"
          />
        </div>
        <div class="formitem upload">
          <div class="itemname">法人身份证正反面</div>
          <div>
            <div v-if="!disabled1" class="uploadbox">
              <div class="uploadbtn">
                <span>上传身份证正面扫描件</span>
                <input
                  ref="upload1"
                  type="file"
                  accept=".png,.jpg,.pdf,.docx,.xlsx,.zip,.rar"
                  @change="uploadchange1"
                />
              </div>
              <p class="uploadtip">请上传PNG/JPG格式图片，大小不超过4M</p>
            </div>
            <div class="filebox">
              <div>
                <!-- title -->
                <p @click="downfile">文件名称在这里</p>
                <div v-if="!disabled1" class="delIcon">×</div>
              </div>
            </div>
            <div v-if="!disabled1" class="uploadbox">
              <div class="uploadbtn">
                <span>上传身份证背面扫描件</span>
                <input
                  ref="upload2"
                  type="file"
                  accept=".png,.jpg,.pdf,.docx,.xlsx,.zip,.rar"
                  @change="uploadchange2"
                />
              </div>
              <p class="uploadtip">请上传PNG/JPG格式图片，大小不超过4M</p>
            </div>
            <div class="filebox">
              <div>
                <!-- title -->
                <p @click="downfile">文件名称在这里</p>
                <div v-if="!disabled1" class="delIcon">×</div>
              </div>
            </div>
          </div>
        </div>
        <div class="formitem">
          <div class="itemname">法人手机号</div>
          <input
            v-model="form.leaderphone"
            type="text"
            :disabled="disabled1"
            placeholder="请输入法人手机号"
          />
        </div>
        <div class="formitem upload">
          <div class="itemname">营业执照</div>
          <div>
            <div v-if="!disabled1" class="uploadbox">
              <div class="uploadbtn">
                <span>上传营业执照扫描件</span>
                <input
                  ref="upload3"
                  type="file"
                  accept=".png,.jpg,.pdf,.docx,.xlsx,.zip,.rar"
                  @change="uploadchange3"
                />
              </div>
              <p class="uploadtip">请上传PNG/JPG格式图片，大小不超过4M</p>
            </div>
            <div class="filebox">
              <div>
                <!-- title -->
                <p @click="downfile">文件名称在这里</p>
                <div v-if="!disabled1" class="delIcon">×</div>
              </div>
            </div>
          </div>
        </div>
        <div class="formitem">
          <div class="itemname">单位性质</div>
          <el-select
            v-model="form.unitype"
            :disabled="disabled1"
            placeholder="请选择单位性质"
          >
            <el-option
              v-for="item in unitypes"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </div>
        <div class="formitem">
          <div class="itemname">注册地址</div>
          <input
            v-model="form.regisaddre"
            type="text"
            :disabled="disabled1"
            placeholder="请输入注册地址"
          />
        </div>
      </div>
    </div>
    <div class="form">
      <p class="formtitle">企业联系信息</p>
      <div class="formitems">
        <div class="formitem">
          <div class="itemname">管理员姓名</div>
          <input
            v-model="form.adminname"
            type="text"
            :disabled="disabled1"
            placeholder="请输入管理员姓名"
          />
        </div>
        <div class="formitem">
          <div class="itemname">管理员身份证号</div>
          <input
            v-model="form.adminid"
            type="password"
            :disabled="disabled1"
            placeholder="请输入管理员身份证号"
          />
        </div>
        <div class="formitem">
          <div class="itemname">办公电话</div>
          <input
            v-model="form.adminphone"
            type="text"
            :disabled="disabled1"
            placeholder="请输入管理员办公电话"
          />
        </div>
        <div class="formitem">
          <div class="itemname">联系手机号</div>
          <input
            v-model="form.adminmobile"
            type="text"
            :disabled="disabled1"
            placeholder="请输入管理员联系手机号"
          />
        </div>
        <div class="formitem">
          <div class="itemname">QQ号</div>
          <input
            v-model="form.adminqq"
            type="text"
            :disabled="disabled1"
            placeholder="请输入管理员联系QQ号"
          />
        </div>
        <div class="formitem">
          <div class="itemname">微信号</div>
          <input
            v-model="form.adminwx"
            type="text"
            :disabled="disabled1"
            placeholder="请输入管理员联系微信号"
          />
        </div>
        <div class="formitem">
          <div class="itemname">通讯地址</div>
          <input
            v-model="form.adminaddre"
            type="text"
            :disabled="disabled1"
            placeholder="请输入管理员通讯地址"
          />
        </div>
      </div>
    </div>
    <div class="btns">
      <div v-if="disabled1" class="submitbtn" @click="modify">更改企业信息</div>
      <div v-else class="submitbtn" @click="submit">重新提交</div>
    </div>
  </div>
</template>
<script>
// import { formValidate } from '../../plugins/formValidate'
export default {
  data() {
    return {
      form: {
        enterprise_name: '',
        enterprise_code: '',
        leaderman: '',
        idnumber: '',
        leaderphone: '',
        file1: {},
        fileLen1: 0,
        files1: [],
        file2: {},
        fileLen2: 0,
        files2: [],
        file3: {},
        fileLen3: 0,
        files3: [],
        unitype: '',
        regisaddre: '',
        adminname: '',
        adminid: '',
        adminphone: '',
        adminmobile: '',
        adminqq: '',
        adminwx: '',
        adminaddre: ''
      },
      unitypes: [],
      disabled1: true
    }
  },
  methods: {
    uploadchange1() {},
    uploadchange2() {},
    uploadchange3() {},
    submit() {
      /*eslint-disable*/
      // if (!formValidate(this.form, this)) return
      this.disabled1 = true
    },
    downfile(aa) {
      window.location.href = 'http://baidu.com'
      // window.open('//baidu.com', '_blank')
    },
    modify() {
      this.disabled1 = false
    }
  }
}
</script>
<style lang="stylus" scoped></style>
