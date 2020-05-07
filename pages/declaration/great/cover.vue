<template>
  <div>
    <div class="dwlbtn" @click="getPdf('filename', 'filecontent')">
      下载申报书
    </div>
    <div id="filecontent">
      <div class="panel size">
        <div class="number">项目编号:</div>
        <div class="company">云南省住房和城乡厅</div>
        <div class="company them" style="font-size:60px;">
          （重大科技攻关与能力建设项目）
        </div>
        <div class="company book">
          <div class="word">申</div>
          <div class="word">报</div>
          <div class="word">书</div>
        </div>
        <div class="item">
          <div class="title limit">项目名称</div>
          <div class="line"></div>
        </div>
        <div class="item">
          <div class="title">申报单位(盖章）</div>
          <div class="line"></div>
        </div>
        <div class="item">
          <div class="title">项目起止时间</div>
          <div class="line"></div>
        </div>
        <div class="item">
          <div class="title limit">申报时间</div>
          <div class="line"></div>
        </div>
        <div class="remark">云南省住房和城乡建设厅制标准定额处</div>
        <div class="date remark">二〇二五年五月制</div>
        <div class="page">
          <div class="grayLine"></div>
          <div class="pageNumber">1</div>
          <div class="grayLine"></div>
        </div>
      </div>
      <div class="panel size2">
        <div class="headTitle">一、国内外研究现状和趋势</div>
        <table class="table">
          <tr class="centerCont">
            <td class="padding20" style="height:350px;">
              <div class="bodyTitle">（一）国内外相关领域研究状况</div>
              <div class="bodyCont"></div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:350px;">
              <div class="bodyTitle">（二）技术指标</div>
              <div class="bodyCont"></div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:350px;">
              <div class="bodyTitle">
                （三）存在的问题
              </div>
              <div class="bodyCont"></div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:350px;">
              <div class="bodyTitle">
                （四）发展趋势
              </div>
              <div class="bodyCont"></div>
            </td>
          </tr>
        </table>

        <div class="pageCont">
          <div class="grayLine"></div>
          <div class="pageNumber">2</div>
          <div class="grayLine"></div>
        </div>
      </div>
      <div class="panel size2">
        <div class="headTitle">二、研究目标和预期效果</div>
        <table class="table">
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">（一）研究目标</div>
              <div class="bodyCont"></div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">（二）预期成果名称及表达方式</div>
              <div class="bodyCont"></div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">
                （三）成果产出对相关管理工作的作用和应用前景
              </div>
              <div class="bodyCont"></div>
            </td>
          </tr>
        </table>

        <div class="pageCont">
          <div class="grayLine"></div>
          <div class="pageNumber">3</div>
          <div class="grayLine"></div>
        </div>
      </div>
      <div class="panel size2">
        <div class="headTitle">三、主要研究内容</div>
        <table class="table">
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">（一）主要研究内容</div>
              <div class="bodyCont"></div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">（二）创新点</div>
              <div class="bodyCont"></div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">
                （三）考核指标
              </div>
              <div class="bodyCont"></div>
            </td>
          </tr>
        </table>

        <div class="pageCont">
          <div class="grayLine"></div>
          <div class="pageNumber">4</div>
          <div class="grayLine"></div>
        </div>
      </div>
      <div class="panel size2">
        <div class="headTitle">四、研究思路、方法和计划进度</div>
        <table class="table">
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">（一）研究思路和方法</div>
              <div class="bodyCont"></div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">（二）阶段目标</div>
              <div class="bodyCont"></div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">
                （三）进度安排
              </div>
              <div class="bodyCont"></div>
            </td>
          </tr>
        </table>

        <div class="pageCont">
          <div class="grayLine"></div>
          <div class="pageNumber">5</div>
          <div class="grayLine"></div>
        </div>
      </div>
      <div class="panel size2">
        <div class="headTitle">五、工作基础和科研保障条件</div>
        <table class="table">
          <tr class="centerCont">
            <td class="padding20" style="height:350px;">
              <div class="bodyTitle">（一）前期研究基础</div>
              <div class="bodyCont"></div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:350px;">
              <div class="bodyTitle">（二）任务分工及主要科研条件</div>
              <div class="bodyCont"></div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:350px;">
              <div class="bodyTitle">
                （三）项目负责人以及团队
              </div>
              <div class="bodyCont"></div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:350px;">
              <div class="bodyTitle">
                （四）资金概算和来源
              </div>
              <div class="bodyCont"></div>
            </td>
          </tr>
        </table>

        <div class="pageCont">
          <div class="grayLine"></div>
          <div class="pageNumber">6</div>
          <div class="grayLine"></div>
        </div>
      </div>
      <div class="panel size2">
        <div class="headTitle" style="margin-bottom:65px;">
          七、主要工作人员
        </div>
        <table class="table">
          <thead>
            <tr>
              <th class="tableFont" style="min-width:89px;">姓名</th>
              <th class="tableFont" style="min-width:89px;">性别</th>
              <th class="tableFont" style="min-width:179px;">出生年月</th>
              <th class="tableFont" style="min-width:179px;">职称职务</th>
              <th class="tableFont" style="min-width:179px;">所学专业</th>
              <th class="tableFont" style="min-width:179px;">现从事专业</th>
              <th class="tableFont" style="min-width:357px;">所在单位</th>
              <th class="tableFont" style="min-width:283px;">
                在本项目中承担的任务
              </th>
            </tr>
          </thead>
          <tr>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
          </tr>
          <tr>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
          </tr>
          <tr>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
          </tr>
          <tr>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
          </tr>
          <tr>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
          </tr>
          <tr>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
          </tr>
          <tr>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
          </tr>
          <tr>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
          </tr>
          <tr>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
          </tr>
          <tr>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
          </tr>
        </table>

        <div class="pageCont">
          <div class="grayLine"></div>
          <div class="pageNumber">8</div>
          <div class="grayLine"></div>
        </div>
      </div>
      <div class="panel size2">
        <div class="headTitle" style="margin-bottom:50px;">
          八、经费概算（单位：元）
        </div>
        <table class="table">
          <thead>
            <tr>
              <th
                class="tableFont"
                style="width:400px;padding-left:67px;text-align:left;"
              >
                总经费
              </th>
              <th class="tableFont" colspan="3"></th>
            </tr>
          </thead>
          <tr>
            <th
              class="tableFont"
              style="width:400px;padding-left:67px;text-align:left;"
            >
              自筹
            </th>
            <th class="tableFont" colspan="3"></th>
          </tr>
          <tr>
            <th
              class="tableFont"
              style="width:400px;padding-left:67px;text-align:left;"
            >
              拨贷款（国家）
            </th>
            <th class="tableFont" colspan="3"></th>
          </tr>
          <tr>
            <th
              class="tableFont"
              style="width:400px;padding-left:67px;text-align:left;"
            >
              拨贷款（地方）
            </th>
            <th class="tableFont" colspan="3"></th>
          </tr>
          <tr>
            <th
              class="tableFont"
              style="width:400px;padding-left:67px;text-align:left;"
            >
              方外
            </th>
            <th class="tableFont" colspan="3"></th>
          </tr>
          <tr>
            <th
              class="tableFont"
              style="width:400px;padding-left:67px;text-align:left;"
            >
              其他
            </th>
            <th class="tableFont" colspan="3"></th>
          </tr>
        </table>

        <div class="pageCont">
          <div class="grayLine"></div>
          <div class="pageNumber">10</div>
          <div class="grayLine"></div>
        </div>
      </div>
      <div class="panel size2">
        <div class="headTitle">
          九、项目研究单位及合作单位（未加盖公章的单位不予认可）
        </div>
        <div class="font28">（一）申报单位</div>
        <table class="table">
          <thead>
            <tr>
              <th class="tableFont" style="width:178px;">申报单位</th>
              <th class="tableFont" colspan="3"></th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">通讯地址</th>
              <th class="tableFont" colspan="3"></th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">负责人</th>
              <th class="tableFont" style="width:380px;"></th>
              <th class="tableFont" style="width:178px;">电话(手机）</th>
              <th class="tableFont" style="width:380px;"></th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">联系人</th>
              <th class="tableFont" style="width:380px;"></th>
              <th class="tableFont" style="width:178px;">电话(手机）</th>
              <th class="tableFont" style="width:380px;"></th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">电子邮箱</th>
              <th class="tableFont" colspan="3"></th>
            </tr>
          </thead>
        </table>
        <div class="font28" style="margin-top:33px;">（二）合作单位</div>
        <table class="table">
          <thead>
            <tr>
              <th class="tableFont" style="width:178px;">合作单位1</th>
              <th class="tableFont" colspan="3"></th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">通讯地址</th>
              <th class="tableFont" colspan="3"></th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">负责人</th>
              <th class="tableFont" style="width:380px;"></th>
              <th class="tableFont" style="width:178px;">电话(手机）</th>
              <th class="tableFont" style="width:380px;"></th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">联系人</th>
              <th class="tableFont" style="width:380px;"></th>
              <th class="tableFont" style="width:178px;">电话(手机）</th>
              <th class="tableFont" style="width:380px;"></th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">电子邮箱</th>
              <th class="tableFont" colspan="3"></th>
            </tr>
          </thead>
        </table>
        <table class="table" style="margin-top:50px;">
          <thead>
            <tr>
              <th class="tableFont" style="width:178px;">合作单位2</th>
              <th class="tableFont" colspan="3"></th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">通讯地址</th>
              <th class="tableFont" colspan="3"></th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">负责人</th>
              <th class="tableFont" style="width:380px;"></th>
              <th class="tableFont" style="width:178px;">电话(手机）</th>
              <th class="tableFont" style="width:380px;"></th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">联系人</th>
              <th class="tableFont" style="width:380px;"></th>
              <th class="tableFont" style="width:178px;">电话(手机）</th>
              <th class="tableFont" style="width:380px;"></th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">电子邮箱</th>
              <th class="tableFont" colspan="3"></th>
            </tr>
          </thead>
        </table>
        <div class="pageCont">
          <div class="grayLine"></div>
          <div class="pageNumber">10</div>
          <div class="grayLine"></div>
        </div>
      </div>
      <div class="panel size2">
        <div class="headTitle" style="margin-bottom:58px;">
          十、审查意见
        </div>
        <table class="table">
          <thead>
            <tr>
              <th class="tableFont" style="width:160px;height:600px;">
                <div
                  style="flex-direction: row-reverse;width:24px;margin:auto;"
                >
                  申 报 单 位 意 见
                </div>
              </th>
              <th class="tableFont" style="width:840px;">
                <div class="footTotal">
                  <div class="name seal">负责人签字</div>
                  <div class="lines"></div>
                  <div class="seal">（盖章）</div>
                </div>
                <div
                  style="padding-left:620px;display:flex;margin-top:33px;text-align:right;"
                >
                  <div class="seal">
                    &thinsp;&thinsp;&thinsp; &thinsp; 年&thinsp;&thinsp;
                    月&thinsp;&thinsp; 日
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          <tr>
            <th class="tableFont" style="width:160px;height:600px;">
              <div style="flex-direction: row-reverse;width:48px;margin:auto;">
                云南 省住 房和 乡镇 建设 厅 标准 定额 处 审 查 意 见
              </div>
            </th>
            <th class="tableFont" style="width:840px;">
              <div class="footTotal">
                <div class="name seal">负责人签字</div>
                <div class="lines"></div>
                <div class="seal">（盖章）</div>
              </div>
              <div
                style="padding-left:620px;display:flex;margin-top:33px;text-align:right;"
              >
                <div class="seal">
                  &thinsp;&thinsp;&thinsp; &thinsp; 年&thinsp;&thinsp;
                  月&thinsp;&thinsp; 日
                </div>
              </div>
            </th>
          </tr>
        </table>

        <div class="pageCont">
          <div class="grayLine"></div>
          <div class="pageNumber">11</div>
          <div class="grayLine"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#filecontent {
  width: 1190px;
  min-height: 1680px;
  margin: 0 auto;
}
.size {
  width: 1190px;
  height: 1680px;
}
.size2 {
  width: 1190px;
  height: 1680px;
  padding-right: 95px;
  padding-left: 95px;
  padding-top: 60px;
  padding-bottom: 60px;
}
.lines {
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid rgba(112, 112, 112, 1);
  font-size: 32px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  width: 211px;
}
.seal {
  font-size: 24px;
  font-weight: 400;
}
.footTotal {
  padding-top: 450px;
  display: flex;
  padding-left: 324px;
}
.dwlbtn {
  position: absolute;
}
</style>
