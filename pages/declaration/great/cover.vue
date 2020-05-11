<template>
  <div v-loading.fullscreen="loading">
    <div class="dwlbtn" @click="downloadfile">
      下载申报书
    </div>
    <!-- <div class="dwltip">请务必下载申报表，否则立项可能会不成功！</div> -->
    <div v-if="detailinfo != {}" id="filecontent">
      <div class="panel size">
        <div id="qrcode" ref="qrcode" class="maCover maCoverStyle"></div>
        <div class="number">
          项目编号:{{ detailinfo.sn ? detailinfo.sn : '-' }}
        </div>
        <div class="company">云南省住房和城乡厅</div>
        <div class="company them" style="font-size:60px;">
          （{{ detailinfo.typeName ? detailinfo.typeName : '-' }}）
        </div>
        <div class="company book">
          <div class="word">申</div>
          <div class="word">报</div>
          <div class="word">书</div>
        </div>
        <div class="item">
          <div class="title limit">项目名称</div>
          <div class="line">
            {{ detailinfo.name ? detailinfo.name : '-' }}
          </div>
        </div>
        <div class="item">
          <div class="title">申报单位(盖章）</div>
          <div class="line">
            {{ detailinfo.enterprise_name ? detailinfo.enterprise_name : '-' }}
          </div>
        </div>
        <div class="item">
          <div class="title">项目起止时间</div>
          <div class="line">
            {{
              detailinfo.starttime && detailinfo.endtime
                ? detailinfo.starttime + ' 至 ' + detailinfo.endtime
                : '-'
            }}
          </div>
        </div>
        <div class="item">
          <div class="title limit">申报时间</div>
          <div class="line">
            {{ detailinfo.submittime ? detailinfo.submittime : '-' }}
          </div>
        </div>
        <div class="remark">云南省住房和城乡建设厅</div>
        <div class="date remark">二〇二五年五月制</div>
      </div>
      <div class="panel size2">
        <div class="headTitle">一、申请立项理由</div>
        <table class="table">
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">（一）研究目的</div>
              <div class="bodyCont">
                {{ detailinfo.a_md ? detailinfo.a_md : '-' }}
              </div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">（二）选题依据</div>
              <div class="bodyCont">
                {{ detailinfo.a_yj ? detailinfo.a_yj : '-' }}
              </div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">
                （三）研发意义
              </div>
              <div class="bodyCont">
                {{ detailinfo.a_yy ? detailinfo.a_yy : '-' }}
              </div>
            </td>
          </tr>
        </table>

        <svg id="barcode" class="ma maPage"></svg>
      </div>
      <div class="panel size2">
        <div class="headTitle">二、国内外研究现状和趋势</div>
        <table class="table">
          <tr class="centerCont">
            <td class="padding20" style="height:620px;">
              <div class="bodyTitle">（一）国内外相关领域研究状况</div>
              <div class="bodyCont">
                {{ detailinfo.b_xz ? detailinfo.b_xz : '-' }}
              </div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:620px;">
              <div class="bodyTitle">（二）技术指标</div>
              <div class="bodyCont">
                {{ detailinfo.b_zb ? detailinfo.b_zb : '-' }}
              </div>
            </td>
          </tr>
        </table>

        <svg id="barcode" class="ma maPage"></svg>
      </div>
      <div class="panel size2">
        <table class="table" style="margin-top: 60px">
          <tr class="centerCont">
            <td class="padding20" style="height:620px;">
              <div class="bodyTitle">
                （三）存在的问题
              </div>
              <div class="bodyCont">
                {{ detailinfo.b_wt ? detailinfo.b_wt : '-' }}
              </div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:620px;">
              <div class="bodyTitle">
                （四）发展趋势
              </div>
              <div class="bodyCont">
                {{ detailinfo.b_qs ? detailinfo.b_qs : '-' }}
              </div>
            </td>
          </tr>
        </table>

        <svg id="barcode" class="ma maPage"></svg>
      </div>
      <div class="panel size2">
        <div class="headTitle">三、研究目标和预期效果</div>
        <table class="table">
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">（一）研究目标</div>
              <div class="bodyCont">
                {{ detailinfo.c_mb ? detailinfo.c_mb : '-' }}
              </div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">（二）预期成果名称及表达方式</div>
              <div class="bodyCont">
                {{ detailinfo.c_cg ? detailinfo.c_cg : '-' }}
              </div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">
                （三）成果产出对相关管理工作的作用和应用前景
              </div>
              <div class="bodyCont">
                {{ detailinfo.c_yy ? detailinfo.c_yy : '-' }}
              </div>
            </td>
          </tr>
        </table>

        <svg id="barcode" class="ma maPage"></svg>
      </div>
      <div class="panel size2">
        <div class="headTitle">四、主要研究内容</div>
        <table class="table">
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">（一）主要研究内容</div>
              <div class="bodyCont">
                {{ detailinfo.d_nr ? detailinfo.d_nr : '-' }}
              </div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">（二）创新点</div>
              <div class="bodyCont">
                {{ detailinfo.d_cx ? detailinfo.d_cx : '-' }}
              </div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">
                （三）考核指标
              </div>
              <div class="bodyCont">
                {{ detailinfo.d_zb ? detailinfo.d_zb : '-' }}
              </div>
            </td>
          </tr>
        </table>

        <svg id="barcode" class="ma maPage"></svg>
      </div>
      <div class="panel size2">
        <div class="headTitle">五、研究思路、方法和计划进度</div>
        <table class="table">
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">（一）研究思路和方法</div>
              <div class="bodyCont">
                {{ detailinfo.e_sl ? detailinfo.e_sl : '-' }}
              </div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">（二）阶段目标</div>
              <div class="bodyCont">
                {{ detailinfo.e_mb ? detailinfo.e_mb : '-' }}
              </div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:470px;">
              <div class="bodyTitle">
                （三）进度安排
              </div>
              <div class="bodyCont">
                {{ detailinfo.e_jd ? detailinfo.e_jd : '-' }}
              </div>
            </td>
          </tr>
        </table>

        <svg id="barcode" class="ma maPage"></svg>
      </div>
      <div class="panel size2">
        <div class="headTitle">六、工作基础和科研保障条件</div>
        <table class="table">
          <tr class="centerCont">
            <td class="padding20" style="height:620px;">
              <div class="bodyTitle">（一）前期研究基础</div>
              <div class="bodyCont">
                {{ detailinfo.f_jc ? detailinfo.f_jc : '-' }}
              </div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:620px;">
              <div class="bodyTitle">（二）任务分工及主要科研条件</div>
              <div class="bodyCont">
                {{ detailinfo.f_rw ? detailinfo.f_rw : '-' }}
              </div>
            </td>
          </tr>
        </table>

        <svg id="barcode" class="ma maPage"></svg>
      </div>
      <div class="panel size2">
        <table class="table" style="margin-top: 60px">
          <tr class="centerCont">
            <td class="padding20" style="height:620px;">
              <div class="bodyTitle">
                （三）项目负责人以及团队
              </div>
              <div class="bodyCont">
                {{ detailinfo.f_td ? detailinfo.f_td : '-' }}
              </div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:620px;">
              <div class="bodyTitle">
                （四）资金概算和来源
              </div>
              <div class="bodyCont">
                {{ detailinfo.f_zj ? detailinfo.f_zj : '-' }}
              </div>
            </td>
          </tr>
        </table>

        <svg id="barcode" class="ma maPage"></svg>
      </div>
      <div class="panel size2">
        <div class="headTitle">
          七、主要工作人员
        </div>
        <table class="table table1">
          <thead>
            <tr>
              <th class="tableFont" style="min-height:100px;">姓名</th>
              <th class="tableFont" style="min-height:100px;">性别</th>
              <th class="tableFont" style="min-height:200px;">出生年月</th>
              <th class="tableFont" style="min-height:200px;">职称职务</th>
              <th class="tableFont" style="min-height:200px;">所学专业</th>
              <th class="tableFont" style="min-height:200px;">现从事专业</th>
              <th class="tableFont" style="min-height:357px;">所在单位</th>
              <th class="tableFont" style="min-height:283px;">
                在本项目中承担的任务
              </th>
            </tr>
          </thead>
          <tr
            v-for="(item, index) in detailinfo.worker_json"
            v-show="detailinfo.worker_json"
            :key="index"
          >
            <td class="tableFont tdHeight">
              {{ item.name ? item.name : '-' }}
            </td>
            <td class="tableFont tdHeight">
              {{
                !item.sex
                  ? '-'
                  : item.sex == 1
                  ? '男'
                  : item.sex == 2
                  ? '女'
                  : '-'
              }}
            </td>
            <td class="tableFont tdHeight">
              {{ item.birthday ? item.birthday : '-' }}
            </td>
            <td class="tableFont tdHeight">
              {{ item.job ? item.job : '-' }}
            </td>
            <td class="tableFont tdHeight">
              {{ item.study_major ? item.study_major : '-' }}
            </td>
            <td class="tableFont tdHeight">
              {{ item.now_major ? item.now_major : '-' }}
            </td>
            <td class="tableFont tdHeight">
              {{ item.company ? item.company : '-' }}
            </td>
            <td class="tableFont tdHeight">
              {{ item.task ? item.task : '-' }}
            </td>
          </tr>
          <tr
            v-if="detailinfo.worker_json && detailinfo.worker_json.length <= 0"
          >
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
          </tr>
          <tr
            v-if="detailinfo.worker_json && detailinfo.worker_json.length <= 1"
          >
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
          </tr>
          <tr
            v-if="detailinfo.worker_json && detailinfo.worker_json.length <= 2"
          >
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
          </tr>
          <tr
            v-if="detailinfo.worker_json && detailinfo.worker_json.length <= 3"
          >
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
          </tr>
          <tr
            v-if="detailinfo.worker_json && detailinfo.worker_json.length <= 4"
          >
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
          </tr>
          <tr
            v-if="detailinfo.worker_json && detailinfo.worker_json.length <= 5"
          >
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
          </tr>
          <tr
            v-if="detailinfo.worker_json && detailinfo.worker_json.length <= 6"
          >
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
          </tr>
          <tr
            v-if="detailinfo.worker_json && detailinfo.worker_json.length <= 7"
          >
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
            <td class="tableFont tdHeight"></td>
          </tr>
          <tr
            v-if="detailinfo.worker_json && detailinfo.worker_json.length <= 8"
          >
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

        <svg id="barcode" class="ma maPage"></svg>
      </div>
      <div class="panel size2">
        <div class="headTitle" style="margin-bottom:50px;">
          八、经费概算（单位：万元）
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
              <th class="tableFont" colspan="3">
                {{ detailinfo.amount ? detailinfo.amount : '-' }}
              </th>
            </tr>
          </thead>
          <tr>
            <th
              class="tableFont"
              style="width:400px;padding-left:67px;text-align:left;"
            >
              自筹
            </th>
            <th class="tableFont" colspan="3">
              {{ detailinfo.self_amount ? detailinfo.self_amount : '-' }}
            </th>
          </tr>
          <tr>
            <th
              class="tableFont"
              style="width:400px;padding-left:67px;text-align:left;"
            >
              拨贷款（国家）
            </th>
            <th class="tableFont" colspan="3">
              {{ detailinfo.country_amount ? detailinfo.country_amount : '-' }}
            </th>
          </tr>
          <tr>
            <th
              class="tableFont"
              style="width:400px;padding-left:67px;text-align:left;"
            >
              拨贷款（地方）
            </th>
            <th class="tableFont" colspan="3">
              {{ detailinfo.current_amount ? detailinfo.current_amount : '-' }}
            </th>
          </tr>
          <tr>
            <th
              class="tableFont"
              style="width:400px;padding-left:67px;text-align:left;"
            >
              外方
            </th>
            <th class="tableFont" colspan="3">
              {{ detailinfo.foreign_amount ? detailinfo.foreign_amount : '-' }}
            </th>
          </tr>
          <tr>
            <th
              class="tableFont"
              style="width:400px;padding-left:67px;text-align:left;"
            >
              其他
            </th>
            <th class="tableFont" colspan="3">
              {{ detailinfo.other_amount ? detailinfo.other_amount : '-' }}
            </th>
          </tr>
        </table>

        <svg id="barcode" class="ma maPage"></svg>
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
              <th class="tableFont" colspan="3">
                {{
                  detailinfo.enterprise_name ? detailinfo.enterprise_name : '-'
                }}
              </th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">负责人</th>
              <th class="tableFont" style="width:380px;">
                {{ detailinfo.leader_name ? detailinfo.leader_name : '-' }}
              </th>
              <th class="tableFont" style="width:178px;">电话(手机）</th>
              <th class="tableFont" style="width:380px;">
                {{ detailinfo.leader_mobile ? detailinfo.leader_mobile : '-' }}
              </th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">电子邮箱</th>
              <th class="tableFont" style="width:380px;">
                {{ detailinfo.leader_email ? detailinfo.leader_email : '-' }}
              </th>
              <th class="tableFont" style="width:178px;">通讯地址</th>
              <th class="tableFont" style="width:380px;">
                {{
                  detailinfo.leader_address ? detailinfo.leader_address : '-'
                }}
              </th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">经办人</th>
              <th class="tableFont" style="width:380px;">
                {{ detailinfo.link_name ? detailinfo.link_name : '-' }}
              </th>
              <th class="tableFont" style="width:178px;">电话(手机）</th>
              <th class="tableFont" style="width:380px;">
                {{ detailinfo.link_mobile ? detailinfo.link_mobile : '-' }}
              </th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">电子邮箱</th>
              <th class="tableFont" style="width:380px;">
                {{ detailinfo.link_email ? detailinfo.link_email : '-' }}
              </th>
              <th class="tableFont" style="width:178px;">通讯地址</th>
              <th class="tableFont" style="width:380px;">
                {{ detailinfo.link_address ? detailinfo.link_address : '-' }}
              </th>
            </tr>
          </thead>
        </table>
        <div class="font28" style="margin-top:33px;">（二）合作单位</div>
        <table
          v-for="(item, index) in detailinfo.partner_json"
          v-show="detailinfo.partner_json"
          :key="index"
          class="table"
        >
          <thead>
            <tr>
              <th class="tableFont" style="width:178px;">合作单位</th>
              <th class="tableFont" colspan="3">
                {{ item.name ? item.name : '-' }}
              </th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">负责人</th>
              <th class="tableFont" style="width:380px;">
                {{ item.leader_name ? item.leader_name : '-' }}
              </th>
              <th class="tableFont" style="width:178px;">电话(手机）</th>
              <th class="tableFont" style="width:380px;">
                {{ item.leader_mobile ? item.leader_mobile : '-' }}
              </th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">电子邮箱</th>
              <th class="tableFont" style="width:380px;">
                {{ item.leader_email ? item.leader_email : '-' }}
              </th>
              <th class="tableFont" style="width:178px;">通讯地址</th>
              <th class="tableFont" style="width:380px;">
                {{ item.leader_address ? item.leader_address : '-' }}
              </th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">经办人</th>
              <th class="tableFont" style="width:380px;">
                {{ item.link_name ? item.link_name : '-' }}
              </th>
              <th class="tableFont" style="width:178px;">电话(手机）</th>
              <th class="tableFont" style="width:380px;">
                {{ item.link_mobile ? item.link_mobile : '-' }}
              </th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">电子邮箱</th>
              <th class="tableFont" style="width:380px;">
                {{ item.link_email ? item.link_email : '-' }}
              </th>
              <th class="tableFont" style="width:178px;">通讯地址</th>
              <th class="tableFont" style="width:380px;">
                {{ item.link_address ? item.link_address : '-' }}
              </th>
            </tr>
          </thead>
        </table>
        <table
          v-if="detailinfo.partner_json && detailinfo.partner_json.length <= 0"
          class="table"
          style="margin-top: 50px"
        >
          <thead>
            <tr>
              <th class="tableFont" style="width:178px;">合作单位</th>
              <th class="tableFont" colspan="3"></th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">负责人</th>
              <th class="tableFont" style="width:380px;"></th>
              <th class="tableFont" style="width:178px;">电话(手机）</th>
              <th class="tableFont" style="width:380px;"></th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">电子邮箱</th>
              <th class="tableFont" style="width:380px;"></th>
              <th class="tableFont" style="width:178px;">通讯地址</th>
              <th class="tableFont" style="width:380px;"></th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">经办人</th>
              <th class="tableFont" style="width:380px;"></th>
              <th class="tableFont" style="width:178px;">电话(手机）</th>
              <th class="tableFont" style="width:380px;"></th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">电子邮箱</th>
              <th class="tableFont" style="width:380px;"></th>
              <th class="tableFont" style="width:178px;">通讯地址</th>
              <th class="tableFont" style="width:380px;"></th>
            </tr>
          </thead>
        </table>
        <table
          v-if="detailinfo.partner_json && detailinfo.partner_json.length <= 1"
          class="table"
          style="margin-top: 50px"
        >
          <thead>
            <tr>
              <th class="tableFont" style="width:178px;">合作单位</th>
              <th class="tableFont" colspan="3"></th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">负责人</th>
              <th class="tableFont" style="width:380px;"></th>
              <th class="tableFont" style="width:178px;">电话(手机）</th>
              <th class="tableFont" style="width:380px;"></th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">电子邮箱</th>
              <th class="tableFont" style="width:380px;"></th>
              <th class="tableFont" style="width:178px;">通讯地址</th>
              <th class="tableFont" style="width:380px;"></th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">经办人</th>
              <th class="tableFont" style="width:380px;"></th>
              <th class="tableFont" style="width:178px;">电话(手机）</th>
              <th class="tableFont" style="width:380px;"></th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">电子邮箱</th>
              <th class="tableFont" style="width:380px;"></th>
              <th class="tableFont" style="width:178px;">通讯地址</th>
              <th class="tableFont" style="width:380px;"></th>
            </tr>
          </thead>
        </table>
        <svg id="barcode" class="ma maPage"></svg>
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
                云南 省住 房和 城乡 建设 厅 审查意见
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

        <svg id="barcode" class="ma maPage"></svg>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
// import JsBarcode from 'jsbarcode'
import { datawork } from '../../../plugins/datawork'
import { getClientId } from '../../../plugins/getclientid'
import { getToken } from '../../../plugins/gettoken'
export default {
  props: {
    ids: {
      default: 0,
      type: Number
    }
  },
  data() {
    return {
      detailinfo: {},
      qrcodeObj: {},
      jsbarcode: {},
      filetitle: '',
      loading: false
    }
  },
  mounted() {
    this.qrcodeObj = {}
    this.jsbarcode = {}
    /*eslint-disable*/
    // if (
    //   !localStorage.getItem('userid') ||
    //   !Number(localStorage.getItem('userid'))
    // ) {
    //   this.$router.push('/login')
    //   return
    // }
    // if (this.$route.query.id) {
    //   this.getprodetail()
    // }
    let id = this.$route.query.shenbaoshu
    if (this.ids !== 0) {
      id = this.ids
    }
    this.getprodetail(id)
  },
  methods: {
    getprodetail(id) {
      document.getElementById('qrcode').innerHTML = ''
      document.getElementById('barcode').innerHTML = ''
      // this.loading = true
      const commondata = JSON.parse(localStorage.getItem('commondata'))
      const data1 = {}
      let data2 = {}
      const that = this
      for (const i in commondata) {
        data1[i] = commondata[i]
      }
      if (localStorage.getItem('userid')) {
        data1.user_id = localStorage.getItem('userid')
      }
      data1.timestamp = Math.round(new Date().getTime() / 1000).toString()
      data1.nonce_str =
        new Date().getTime() + '' + Math.floor(Math.random() * 899 + 100)
      if (localStorage.getItem('clientid')) {
        data1.client_id = localStorage.getItem('clientid')
      }
      if (localStorage.getItem('accesstoken')) {
        data1.access_token = localStorage.getItem('accesstoken')
      }
      data1.id = id
      data2 = datawork(data1)
      this.$api.get_pro_detail(data2).then((v) => {
        if (v.data.errcode === 0) {
          this.loading = false
          this.detailinfo = v.data.data.data
          this.filetitle = '云南省住房和城乡厅' + v.data.data.data.typeName + '申报书'
          // if (v.data.data.data.two_code) {
          that.qrcodeObj = new QRCode(this.$refs.qrcode, {
            text: v.data.data.data.two_code,    
            width: 150,
            height: 150,
            colorDark : '#000',
            colorLight : '#fff',
            correctLevel : QRCode.CorrectLevel.H
          })
          // } else {
          //   that.qrcodeObj = {}
          // }
          // if (v.data.data.data.one_code) {
          that.jsbarcode = new JsBarcode("#barcode", v.data.data.data.one_code, {
            // format: "pharmacode",
            lineColor: "#000",
            width: 4,
            height: 40,
            displayValue: false
          })
          // } else {
          //   that.jsbarcode = {}
          // }
        } else if (v.data.errcode === 1104) {
          getToken(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('tokenDone')) {
              that.getprodetail()
            }
          }, 1000)
        } else if (v.data.errcode === 1103) {
          getClientId(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('done')) {
              that.getprodetail()
            }
          }, 1000)
        } else {
          this.loading = false
          this.$message({
            type: 'error',
            message: v.data.errmsg
          })
        }
      })
    },
    downloadfile() {
      const that = this
      document.getElementById('filecontent').scrollIntoView()
      $('html , body').animate({ scrollTop: 0 }, 500)
      setTimeout(() => {
        that.getPdf(that.filetitle, 'filecontent')
      }, 1000)
    }
  },
  head:{
    script: [
      {
        src: '/qrcode.min.js'
      },
      {
        src: '/JsBarcode.all.js'
      }
    ]  
}
}
</script>
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
  padding-bottom: 60px
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
  position: relative;
  top: 20px;
  left: 10px;
  z-index: 3;
  width: 100px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  background: #000;
  color: #fff;
  cursor: pointer;
}
.dwltip {
  position: relative;
  top: 20px;
  left: 10px;
  z-index: 2;
  color: red;
}
</style>
