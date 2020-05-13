<template>
  <div v-loading.fullscreen="loading">
    <div class="dwlbtn" @click="downloadfile">
      下载申报书
    </div>
    <div v-if="detailinfo != {}" id="filecontent">
      <div class="panel size">
        <div id="qrcode" ref="qrcode" class="maCover maCoverStyle"></div>
        <div class="number">
          项目编号:{{ detailinfo.sn ? detailinfo.sn : '-' }}
        </div>
        <div class="company">云南省住房和城乡建设厅</div>
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
        <div class="date remark">二〇二〇年五月制</div>
      </div>
      <div class="panel size2">
        <div class="headTitle">
          一、项目基本信息
        </div>
        <!-- <div class="font28">（一）申报单位</div> -->
        <table class="table">
          <thead>
            <tr>
              <th class="tableFont" style="width:178px;">项目名称</th>
              <th class="tableFont" colspan="3">
                {{
                  detailinfo.enterprise_name ? detailinfo.enterprise_name : '-'
                }}
              </th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">项目研发类型</th>
              <th class="tableFont" colspan="3">
                {{ detailinfo.a_nx ? detailinfo.a_nx : '-' }}
              </th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">
                属何种合作协议（协定）
              </th>
              <th class="tableFont" colspan="3">
                {{ detailinfo.a_hz ? detailinfo.a_hz : '-' }}
              </th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">协议名称</th>
              <th class="tableFont" colspan="3">
                {{ detailinfo.a_xy ? detailinfo.a_xy : '-' }}
              </th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">合作国别</th>
              <th class="tableFont" colspan="3">
                {{ detailinfo.a_gb ? detailinfo.a_gb : '-' }}
              </th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">合作起始日期</th>
              <th class="tableFont" colspan="3">
                {{ detailinfo.a_qs ? detailinfo.a_qs : '-' }}
              </th>
            </tr>
            <tr>
              <th class="tableFont" style="width:178px;">合作终止日期</th>
              <th class="tableFont" colspan="3">
                {{ detailinfo.a_zz ? detailinfo.a_zz : '-' }}
              </th>
            </tr>
          </thead>
        </table>
        <div class="headTitle">
          二、项目申请单位
        </div>
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

        <!-- <svg id="barcode" class="ma maPage"></svg> -->
        <img id="barcode" class="ma maPage" />
      </div>
      <div class="panel size2">
        <div class="headTitle">
          三、合作方信息
        </div>
        <table
          v-for="(item, index) in detailinfo.partner_json"
          v-show="index < 3"
          :key="index"
          class="table"
          style="margin-top: 50px"
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
        <table
          v-if="detailinfo.partner_json && detailinfo.partner_json.length <= 2"
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

        <!-- <svg id="barcode" class="ma maPage"></svg> -->
        <img id="barcode" class="ma maPage" />
      </div>
      <div
        v-if="detailinfo.partner_json && detailinfo.partner_json.length > 3"
        class="panel size2"
      >
        <table
          v-for="(item, index) in detailinfo.partner_json"
          v-show="index > 2 && index < 6"
          :key="index"
          class="table"
          :style="index == 2 ? '' : 'margin-top: 50px'"
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

        <!-- <svg id="barcode" class="ma maPage"></svg> -->
        <img id="barcode" class="ma maPage" />
      </div>
      <div class="panel size2">
        <div class="headTitle" style="margin-bottom:50px;">
          四、经费概算（单位：万元）
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

        <!-- <svg id="barcode" class="ma maPage"></svg> -->
        <img id="barcode" class="ma maPage" />
      </div>
      <div class="panel size2">
        <div class="headTitle">五、项目概况及申请理由</div>
        <table class="table">
          <tr class="centerCont">
            <td class="padding20" style="height:620px;">
              <div class="bodyTitle">（一）必要性</div>
              <div class="bodyCont">
                {{ detailinfo.d_by ? detailinfo.d_by : '-' }}
              </div>
            </td>
          </tr>
          <tr class="centerCont">
            <td class="padding20" style="height:620px;">
              <div class="bodyTitle">（二）可行性</div>
              <div class="bodyCont">
                {{ detailinfo.d_kx ? detailinfo.d_kx : '-' }}
              </div>
            </td>
          </tr>
        </table>

        <!-- <svg id="barcode" class="ma maPage"></svg> -->
        <img id="barcode" class="ma maPage" />
      </div>
      <div class="panel size2">
        <div class="headTitle">六、合作内容及预期目标</div>
        <table class="table">
          <tr class="centerCont">
            <td class="padding20" style="height:1400px;">
              {{ detailinfo.e_nr ? detailinfo.e_nr : '-' }}
            </td>
          </tr>
        </table>

        <!-- <svg id="barcode" class="ma maPage"></svg> -->
        <img id="barcode" class="ma maPage" />
      </div>
      <div class="panel size2">
        <div class="headTitle">七、合作各方简况及现有技术基础和优势等</div>
        <table class="table">
          <tr class="centerCont">
            <td class="padding20" style="height:1400px;">
              {{ detailinfo.f_gf ? detailinfo.f_gf : '-' }}
            </td>
          </tr>
        </table>

        <!-- <svg id="barcode" class="ma maPage"></svg> -->
        <img id="barcode" class="ma maPage" />
      </div>
      <div class="panel size2">
        <div class="headTitle">八、项目合作方式及已具备的合作基础和条件</div>
        <table class="table">
          <tr class="centerCont">
            <td class="padding20" style="height:1400px;">
              {{ detailinfo.f_tj ? detailinfo.f_tj : '-' }}
            </td>
          </tr>
        </table>

        <!-- <svg id="barcode" class="ma maPage"></svg> -->
        <img id="barcode" class="ma maPage" />
      </div>
      <div class="panel size2">
        <div class="headTitle">九、进度计划</div>
        <table class="table">
          <tr class="centerCont">
            <td class="padding20" style="height:1400px;">
              {{ detailinfo.f_jh ? detailinfo.f_jh : '-' }}
            </td>
          </tr>
        </table>

        <!-- <svg id="barcode" class="ma maPage"></svg> -->
        <img id="barcode" class="ma maPage" />
      </div>
      <div class="panel size2">
        <div class="headTitle">
          十、主要研究人员
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

        <!-- <svg id="barcode" class="ma maPage"></svg> -->
        <img id="barcode" class="ma maPage" />
      </div>
      <div class="panel size2">
        <div class="headTitle" style="margin-bottom:58px;">
          十一、审查意见
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

        <!-- <svg id="barcode" class="ma maPage"></svg> -->
        <img id="barcode" class="ma maPage" />
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
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
          this.filetitle = '云南省住房和城乡建设厅' + v.data.data.data.typeName + '申报书'
          setTimeout(() => {
            that.qrcodeObj = new QRCode(this.$refs.qrcode, {
              text: v.data.data.data.two_code,    
              width: 150,
              height: 150,
              colorDark : '#000',
              colorLight : '#fff',
              correctLevel : QRCode.CorrectLevel.H
            })
          }, 1000)
          if (v.data.data.data.one_code) {
            that.jsbarcode = new JsBarcode("#barcode", v.data.data.data.one_code, {
              // format: "pharmacode",
              lineColor: "#000",
              width: 4,
              height: 40,
              displayValue: false
            })
          } else {
            that.jsbarcode = {}
          }
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
        } else if (v.data.errmsg === '没有登录') {
          this.loading = false
          setTimeout(() => {
            that.$router.push('/login')
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
