<template>
  <div>
    <div class="form">
      <p class="formtitle">企业资质信息</p>
      <div class="formitems">
        <div class="formitem">
          <div class="itemname">申报单位名称</div>
          <!-- <p>{{ detailinfo.enterprise_name }}</p> -->
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">统一社会信用代码</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">法人姓名</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">法人身份证号</div>
          <p>什么东东</p>
        </div>
        <div class="formitem upload">
          <div class="itemname">法人身份证正反面</div>
          <div class="imgbox">
            <div @click="seeImg">
              <img src="~assets/img/loginleft.jpg" alt />
            </div>
            <div @click="seeImg">
              <img src="~assets/img/loginleft.jpg" alt />
            </div>
          </div>
        </div>
        <div class="formitem">
          <div class="itemname">法人手机号</div>
          <p>什么东东</p>
        </div>
        <div class="formitem upload">
          <div class="itemname">营业执照</div>
          <div class="imgbox">
            <div @click="seeImg">
              <img src="~assets/img/loginleft.jpg" alt />
            </div>
          </div>
        </div>
        <div class="formitem">
          <div class="itemname">单位性质</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">注册地址</div>
          <p>什么东东</p>
        </div>
      </div>
    </div>
    <div class="form">
      <p class="formtitle">企业联系信息</p>
      <div class="formitems">
        <div class="formitem">
          <div class="itemname">管理员姓名</div>
          <!-- <p>{{ detailinfo.enterprise_name }}</p> -->
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">管理员身份证号</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">办公电话</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">联系手机号</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">QQ号</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">微信号</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">通讯地址</div>
          <p>什么东东</p>
        </div>
      </div>
    </div>
    <div class="form">
      <p class="formtitle">计划任务书</p>
      <div class="formitems">
        <div class="formitem">
          <div class="itemname">项目名称</div>
          <!-- <p>{{ detailinfo.enterprise_name }}</p> -->
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">项目类别</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">申报单位</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">起始时间</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">完成时间</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">自筹金额</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">国家拨/贷款</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">地方拨/贷款</div>
          <!-- <p>{{ detailinfo.enterprise_name }}</p> -->
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">其他</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">外方</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">总金额</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">合作单位</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">项目所在地</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">主要研究内容</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">考核指标</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">研究成果(示范工程简介)</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">主要研究内容</div>
          <p>什么东东</p>
        </div>
      </div>
    </div>
    <div class="form">
      <p class="formtitle">项目负责人1</p>
      <div class="formitems">
        <div class="formitem">
          <div class="itemname">负责人姓名</div>
          <!-- <p>{{ detailinfo.enterprise_name }}</p> -->
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">负责人电话</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">职务/职称</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">通讯地址</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">所在单位</div>
          <p>什么东东</p>
        </div>
      </div>
    </div>
    <div class="form">
      <p class="formtitle">项目联系人1</p>
      <div class="formitems">
        <div class="formitem">
          <div class="itemname">联系人姓名</div>
          <!-- <p>{{ detailinfo.enterprise_name }}</p> -->
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">联系人电话</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">职务/职称</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">通讯地址</div>
          <p>什么东东</p>
        </div>
        <div class="formitem">
          <div class="itemname">所在单位</div>
          <p>什么东东</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    seeImg() {
      window.open('http://baidu.com', '_blank')
    }
  }
}
</script>
<style lang="stylus" scoped>
.form
  justify-content center
  padding 30px 50px 30px 100px
  box-shadow none
  margin 0
.itemname + p
  margin-left 60px
  color #333
.imgbox
  width 100px
  margin-left 60px
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
