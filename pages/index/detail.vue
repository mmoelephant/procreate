<template>
  <div>
    <div class="back">
      <div class="backName">查看详情</div>

      <div class="small smallHead fix">
        <scroll-x class="bg-white nav" scroll-with-animation>
          <div class="total ">
            <div
              class="sizeStyle"
              :class="Inv === 0 ? 'select' : ''"
              @click="Inv = 0"
            >
              <div
                class="size"
                :class="Inv === 0 ? 'blackStyle' : 'grayStyle'"
                @click="Inv = 0"
              >
                计划任务书
              </div>
              <div
                class="lineStyle"
                :class="Inv === 0 ? 'blackLine' : ''"
                @click="Inv = 0"
              ></div>
            </div>
            <div
              class="sizeStyle"
              :class="Inv === 1 ? 'after' : ''"
              @click="Inv = 1"
            >
              <div
                class="size"
                :class="Inv === 1 ? 'blackStyle' : 'grayStyle'"
                @click="Inv = 1"
              >
                申报表
              </div>
              <div
                class="lineStyle"
                :class="Inv === 1 ? 'blackLine' : ''"
                @click="Inv = 1"
              ></div>
            </div>
          </div>
        </scroll-x>
        <div class="return">返回上一级</div>
      </div>
      <div class="small">
        <div class="top">
          <div class="topName">审核信息</div>
          <div v-if="false" class="topBtn">初审退回</div>
          <div v-if="false" class="topBtn">退回修改</div>
          <div class="topBtn" style="background:rgba(0,159,48,1);">
            待送审纸质资料
          </div>
        </div>
        <div class="bottom">
          <div class="bottomL">
            <img src="http://placehold.it/350x150" class="icon" />
            <div v-if="false" style="margin-left:20px;">
              <div class="black">抱歉您的资料未通过初审，请求改后重新提交</div>
              <div class="red">反馈信息：上传的营业执照附件不清晰。</div>
            </div>
            <div style="margin-left:20px;">
              <div class="black">
                恭喜您的线上资料已审核通过，请尽快送审纸质资料
              </div>
              <div v-if="false" class="red">
                反馈信息：上传的营业执照附件不清晰。
              </div>
              <div class="add" style="margin-top:7px;">
                送审地址&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;杨莉花&nbsp;&nbsp;&nbsp;&nbsp;15887247513&nbsp;&nbsp;&nbsp;&nbsp;周一至周五&nbsp;&nbsp;&nbsp;&nbsp;9:00至17:30&nbsp;&nbsp;&nbsp;&nbsp;云南省昆明市官渡区关上街道春城路巫家坝昭商大酒店7楼办公区
              </div>
            </div>
          </div>
          <div
            v-if="false"
            class="blueBtn detailBtnSize"
            style="margin-top:0px;"
          >
            修改资料
          </div>
          <div class="blueBtn detailBtnSize" style="margin-top:0px;">
            下载申报书
          </div>
        </div>
      </div>
      <div class="remarkBox marT20">
        <div class="remarkL">申报类别</div>
        <div class="remarkR">软科学研究项目-工程造价管理</div>
      </div>

      <div class="cont marT20">
        <!--计划申报书-->
        <div v-if="Inv === 0">
          <div class="contName">计划任务书</div>
          <div class="contItem marT40">
            <div class="contL">项目编号</div>
            <div class="contR">XXXXXXXXX</div>
          </div>
          <div class="contItem marT20">
            <div class="contL">项目名称</div>
            <div class="contR">XXX项目科学研究</div>
          </div>
          <div class="contItem marT20">
            <div class="contL">申报单位</div>
            <div class="contR">昆明XXX有限公司</div>
          </div>
          <div class="contItem marT20">
            <div class="contL">起始时间</div>
            <div class="contR" style="width:160px">2020-04-25</div>
            <div class="contL">完成时间</div>
            <div class="contR">2020-04-25</div>
          </div>
          <div class="contItem marT20">
            <div class="contL">自筹金额</div>
            <div class="contR" style="width:160px">
              200<span class="contGray">万元</span>
            </div>
            <div class="contL">国家拨/贷款</div>
            <div class="contR" style="width:160px">
              200<span class="contGray">万元</span>
            </div>
            <div class="contL">地方贷/拨款</div>
            <div class="contR" style="width:160px">
              200<span class="contGray">万元</span>
            </div>
          </div>
          <div class="contItem marT20">
            <div class="contL">其他</div>
            <div class="contR" style="width:160px">
              200<span class="contGray">万元</span>
            </div>
            <div class="contL">外方</div>
            <div class="contR" style="width:160px">
              200<span class="contGray">万元</span>
            </div>
          </div>
          <div class="contItem marT20">
            <div class="contL">总金额</div>
            <div class="contR" style="width:160px">
              800<span class="contGray">万元</span>
            </div>
          </div>
          <div class="contItem marT20">
            <div class="contL">合作单位</div>
            <div class="contR">昆明XXX有限公司</div>
          </div>
          <div class="contItem marT20">
            <div class="contL">项目所在地</div>
            <div class="contR">昆明市官渡区XX路XX号</div>
          </div>
          <div class="contItem marT20">
            <div class="contL">主要研究内容</div>
            <div class="contR" style="width:672px;">
              主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容
              主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容
            </div>
          </div>
          <div class="contItem marT20">
            <div class="contL">考核指标</div>
            <div class="contR" style="width:672px;">
              主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容
              主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容
            </div>
          </div>
          <div class="contItem marT20">
            <div class="contL">研究成果(示范工程简介)</div>
            <div class="contR" style="width:672px;">
              主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容
              主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容
            </div>
          </div>
          <div class="contName" style="margin-top:60px;">项目负责人</div>
          <div class="contItem marT40">
            <div class="contL">负责人姓名</div>
            <div class="contR">张某某的货物的话说</div>
            <div class="contL" style="width:200px;">负责人电话</div>
            <div class="contR">180894944545</div>
          </div>
          <div class="contItem marT20">
            <div class="contL">电子邮箱</div>
            <div class="contR">75533333@qq.com</div>
            <div class="contL" style="width:200px;">职务/职称</div>
            <div class="contR">项目总工程师</div>
          </div>
          <div class="contItem marT20">
            <div class="contL">通讯地址</div>
            <div class="contR">昆明市官渡区XX路XX号</div>
          </div>
          <div class="contItem marT20">
            <div class="contL">所在单位</div>
            <div class="contR">昆明XXX有限公司</div>
          </div>
          <div class="contName" style="margin-top:60px;">项目联系人</div>
          <div class="contItem marT40">
            <div class="contL">负责人姓名</div>
            <div class="contR">张某某的货物的话说</div>
            <div class="contL" style="width:200px;">负责人电话</div>
            <div class="contR">180894944545</div>
          </div>
          <div class="contItem marT20">
            <div class="contL">电子邮箱</div>
            <div class="contR">75533333@qq.com</div>
            <div class="contL" style="width:200px;">职务/职称</div>
            <div class="contR">项目总工程师</div>
          </div>
          <div class="contItem marT20">
            <div class="contL">通讯地址</div>
            <div class="contR">昆明市官渡区XX路XX号</div>
          </div>
          <div class="contItem marT20">
            <div class="contL">所在单位</div>
            <div class="contR">昆明XXX有限公司</div>
          </div>
        </div>
        <!--下面是折叠区域-->
        <div v-if="Inv === 1">
          <!--一个折叠区域-->
          <div class="paddingMaring20">
            <div class="contItem marT20">
              <div class="itemBlues">
                <div class="numbers">理由1</div>
                <img src="http://placehold.it/350x150" class="cha" />
              </div>
            </div>
            <div class="itemWhite">
              <div class="whiteHead" style="margin-top:0px;padding-top:20px;">
                研究目的
              </div>
              <div class="whiteCont">
                主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容
                主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                选题依据
              </div>
              <div class="whiteCont">
                主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容
                主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                研发意义
              </div>
              <div class="whiteCont">
                主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容
                主要研究内容主要研究内容主要研究内容主要研究内容主要研究内容
              </div>
            </div>
          </div>
          <!--一个折叠区域-->
          <div class="paddingMaring20">
            <div class="contItem marT20">
              <div class="itemBlues">
                <div class="numbers">理由1</div>
                <img src="http://placehold.it/350x150" class="cha" />
              </div>
            </div>
            <!--下面是申报表区域-->
            <div class="whiteFoot">
              <div class="footText">附件列表</div>
              <table class="table">
                <tr>
                  <td style="background: rgba(236, 238, 242, 1);">
                    序号
                  </td>
                  <td
                    style="width:870px; padding-top:15px;padding-bottom:15px; background: rgba(236, 238, 242, 1);"
                  >
                    文件名称
                  </td>
                  <td style="background: rgba(236, 238, 242, 1);">
                    操作
                  </td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>
                    云南省XXX建设工程有限公司
                  </td>
                  <td style="display:flex;just-content:center;">
                    <div class="view">查看</div>
                    <div class="view">下载</div>
                  </td>
                </tr>
              </table>

              <el-pagination
                style="margin-top:10px;width:100%;display:flex; justify-content: flex-end;"
                background
                layout="prev, pager, next"
                :total="5"
              >
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
      <div class="detailBtn">
        <div class="grayBtn detailBtnSize">返回上一级</div>
        <div v-if="false" class="blueBtn detailBtnSize marL20">修改资料</div>
        <div class="blueBtn detailBtnSize marL20">下载申报书</div>
      </div>
    </div>
  </div>
</template>
<style>
.back {
  padding-top: 25px;
  padding-left: 25px;
  padding-right: 83px;
}
.backName {
  font-size: 28px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.remarkBox {
  padding-left: 38px;
  padding-right: 38px;
  width: 100%;
  border-radius: 4px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 10px rgba(151, 190, 255, 0.17);
}
.remarkL {
  font-size: 14px;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
.remarkR {
  font-size: 14px;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  margin-left: 40px;
}
.marT20 {
  margin-top: 20px;
}
.marT40 {
  margin-top: 40px;
}
.cont {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 10px rgba(151, 190, 255, 0.17);
  border-radius: 4px;
  padding-top: 22px;
  padding-left: 33px;
  padding-right: 33px;
  padding-bottom: 52px;
}
.contName {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: rgba(51, 51, 51, 1);
}
.contItem {
  display: flex;
}
.contL {
  font-size: 14px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  opacity: 1;
  width: 150px;
  text-align: right;
}
.contR {
  margin-left: 20px;
  font-size: 14px;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  opacity: 1;
}
.contGray {
  margin-left: 13px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  opacity: 1;
}
.detailBtn {
  display: flex;
  justify-content: flex-start;
}
.marL20 {
  margin-left: 20px;
}

.detailBtnSize {
  margin-top: 40px;
  padding: 10px 35px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  border-radius: 100px;
}
.grayBtn {
  background: rgba(204, 204, 204, 1);
}
.blueBtn {
  background: rgba(57, 114, 228, 1);
}
.small {
  margin-top: 20px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 10px rgba(151, 190, 255, 0.17);
}
.return {
  right: 25px;
  top: 17px;
  position: absolute;
  font-size: 12px;
  font-weight: 400;
  color: rgba(29, 120, 211, 1);
}
.top {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: flex-end;
  padding-top: 18px;
  padding-bottom: 8px;
  padding-left: 38px;
  border-bottom: 1px solid rgba(230, 230, 230, 1);
}
.topBtn {
  margin-left: 18px;
  padding: 2px 5px;
  background: rgba(255, 0, 0, 1);
  opacity: 1;
  border-radius: 7px;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.add {
  font-size: 12px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.topName {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.bottom {
  padding: 30px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bottomL {
  display: flex;
}
.icon {
  width: 40px;
  height: 40px;
}
.black {
  font-size: 12px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.red {
  margin-top: 6px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 0, 0, 1);
}
.line {
  background-color: #fafafd;
  height: 10upx;
}
.fix {
  position: relative !important;
}
.total {
  display: flex;
  padding-top: 14px;
  border-bottom: 1upx solid #e5e5e5;
}

.size {
  font-size: 16px;
  text-align: center;
  padding-left: 38px;
  padding-right: 38px;
  margin-bottom: 14px;
}

.blackStyle {
  font-weight: normal;
  color: rgba(0, 85, 141, 1);
}

.grayStyle {
  font-weight: normal;
  color: rgba(153, 153, 153, 1);
}

.lineStyle {
  width: 82px;
  height: 2px;
  margin: auto;
}

.blackLine {
  background-color: rgba(0, 85, 141, 1);
}
.itemBlues {
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 38px;
  padding-right: 30px;
  background: rgba(220, 232, 255, 1);
  box-shadow: 0px 3px 10px rgba(151, 190, 255, 0.17);
  opacity: 1;
  border-radius: 4px;
}
.numbers {
  font-size: 16px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  opacity: 1;
  flex: 1;
}
.cha {
  width: 14px;
  height: 8px;
}
.itemWhite {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 10px rgba(151, 190, 255, 0.17);
  opacity: 1;
  border-radius: 4px;
  padding-bottom: 15px;
  padding-left: 39px;
  padding-right: 39px;
}
.whiteHead {
  font-size: 14px;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  opacity: 1;
  margin-top: 20px;
}
.whiteCont {
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  height: 150px;
}
.lines {
  width: 100%;
  height: 1px;
  border: 1px solid rgba(230, 230, 230, 1);
}
.whiteFoot {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 10px rgba(230, 230, 230, 1);
  border-radius: 4px;
  padding-left: 35px;
  padding-right: 35px;
  padding-bottom: 10px;
}
.footText {
  padding-top: 17px;
  padding-bottom: 17px;
}
table tr td {
  border: 1px solid rgba(230, 230, 230, 1);
  border-collapse: collapse;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
}
.table {
  border: none;
}
.view {
  display: flex;
  flex: 1;
  justify-content: center;
}
.paddingMaring20 {
  margin-top: 20px;
}
.paddingMaring20:first-child {
  margin-top: 0px;
}
.sizeStyle {
  cursor: pointer;
}
</style>
<script>
export default {
  data() {
    return {
      Inv: 0
    }
  }
}
</script>
