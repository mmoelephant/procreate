<template>
  <div :class="$route.query.layer === 'width' ? 'detaillController' : ''">
    <div v-if="info !== null" class="back">
      <div class="backName">
        <div>查看详情</div>
        <div class="backup" @click="$router.go(-1)">
          <img src="~assets/img/backicon.png" alt="" />
          <div>返回上一级</div>
        </div>
      </div>

      <div class="small smallHead fix">
        <scroll-x class="bg-white nav" scroll-with-animation>
          <div class="total ">
            <div
              class="sizeStyle"
              :class="inv === 0 ? 'select' : ''"
              @click="inv = 0"
            >
              <div
                class="size"
                :class="inv === 0 ? 'blackStyle' : 'grayStyle'"
                @click="inv = 0"
              >
                计划任务书
              </div>
              <div
                class="lineStyle"
                :class="inv === 0 ? 'blackLine' : ''"
                @click="inv = 0"
              ></div>
            </div>
            <div
              class="sizeStyle"
              :class="inv === 1 ? 'after' : ''"
              @click="inv = 1"
            >
              <div
                class="size"
                :class="inv === 1 ? 'blackStyle' : 'grayStyle'"
                @click="inv = 1"
              >
                申报表
              </div>
              <div
                class="lineStyle"
                :class="inv === 1 ? 'blackLine' : ''"
                @click="inv = 1"
              ></div>
            </div>
          </div>
        </scroll-x>
        <div
          class="blueBtn detailBtnSize"
          style="margin:0px 20px 0 0;"
          @click="view"
        >
          预览申报书
        </div>
      </div>
      <div
        v-if="
          info &&
            (info.status == '6' || info.status == '8' || info.status == '9')
        "
        class="small"
      >
        <div class="top">
          <div class="topName">审核信息</div>
        </div>
        <div v-if="verifyData" class="bottom">
          <div class="bottomL">
            <img src="~/assets/img/cha.png" class="icon" />
            <div style="margin-left:20px;">
              <div class="black">
                {{ verifyData.content ? verifyData.content : '-' }}
              </div>
              <div class="red">
                {{ verifyData.time ? verifyData.time : '-' }}
              </div>
            </div>
          </div>
          <!-- <div
            v-if="false"
            class="blueBtn detailBtnSize"
            style="margin-top:0px;"
          >
            修改资料
          </div> -->
        </div>
      </div>
      <div class="remarkBox marT20">
        <div class="remarkL">申报状态</div>
        <div :class="'statusColor' + info.statusType">
          {{ info.statusName ? info.statusName : '-' }}
        </div>
      </div>
      <div class="remarkBox marT20">
        <div class="remarkL">申报类别</div>
        <div class="remarkR">
          {{ info.category_name ? info.category_name : '-' }}
        </div>
      </div>

      <div class="cont marT20">
        <!--计划申报书-->
        <div v-if="inv == 0">
          <div class="contName">计划任务书</div>
          <div class="contItem marT40">
            <div class="contL">项目编号</div>
            <div class="contR">{{ info.sn }}</div>
          </div>
          <div class="contItem marT20">
            <div class="contL">项目名称</div>
            <div class="contR">{{ info.name }}</div>
          </div>
          <div class="contItem marT20">
            <div class="contL">申报单位</div>
            <div class="contR">{{ info.enterprise_name }}</div>
          </div>
          <div class="contItem marT20">
            <div class="contL">起始时间</div>
            <div class="contR" style="width:160px">
              {{ info.starttime ? info.starttime : '-' }}
            </div>
            <div class="contL">完成时间</div>
            <div class="contR">
              {{ info.endtime ? info.endtime : '-' }}
            </div>
          </div>
          <div class="contItem marT20">
            <div class="contL">自筹金额</div>
            <div class="contR" style="width:160px">
              {{ info.self_amount ? info.self_amount : '-'
              }}<span class="contGray">万元</span>
            </div>
            <div class="contL">国家拨/贷款</div>
            <div class="contR" style="width:160px">
              {{ info.country_amount ? info.country_amount : '-'
              }}<span class="contGray">万元</span>
            </div>
            <div class="contL">地方贷/拨款</div>
            <div class="contR" style="width:160px">
              {{ info.current_amount ? info.current_amount : '-'
              }}<span class="contGray">万元</span>
            </div>
          </div>
          <div class="contItem marT20">
            <div class="contL">其他</div>
            <div class="contR" style="width:160px">
              {{ info.other_amount ? info.other_amount : '-'
              }}<span class="contGray">万元</span>
            </div>
            <div class="contL">外方</div>
            <div class="contR" style="width:160px">
              {{ info.foreign_amount ? info.foreign_amount : '-'
              }}<span class="contGray">万元</span>
            </div>
          </div>
          <div class="contItem marT20">
            <div class="contL">总金额</div>
            <div class="contR" style="width:160px">
              {{ info.amount ? info.amount : '-'
              }}<span class="contGray">万元</span>
            </div>
          </div>
          <div class="contItem marT20">
            <div class="contL">合作单位</div>
            <div class="contR">
              {{ info.partner_name ? info.partner_name : '-' }}
            </div>
          </div>
          <div class="contItem marT20">
            <div class="contL">项目所在地</div>
            <div class="contR">{{ info.address ? info.address : '-' }}</div>
          </div>
          <div class="contItem marT20">
            <div class="contL">主要研究内容</div>
            <div class="contR" style="width:672px;">
              {{ info.study_content ? info.study_content : '-' }}
            </div>
          </div>
          <div class="contItem marT20">
            <div class="contL">考核指标</div>
            <div class="contR" style="width:672px;">
              {{ info.check_content ? info.check_content : '-' }}
            </div>
          </div>
          <div class="contItem marT20">
            <div class="contL">研究成果(示范工程简介)</div>
            <div class="contR" style="width:672px;">
              {{ info.expect_content ? info.expect_content : '-' }}
            </div>
          </div>
          <div class="contName" style="margin-top:60px;">项目负责人</div>
          <div class="contItem marT40">
            <div class="contL">负责人姓名</div>
            <div class="contR">
              {{ info.leader_name ? info.leader_name : '-' }}
            </div>
            <div class="contL" style="width:200px;">负责人电话</div>
            <div class="contR">
              {{ info.leader_mobile ? info.leader_mobile : '-' }}
            </div>
          </div>
          <div class="contItem marT20">
            <div class="contL">电子邮箱</div>
            <div class="contR">
              {{ info.leader_email ? info.leader_email : '-' }}
            </div>
            <div class="contL" style="width:200px;">职务/职称</div>
            <div class="contR">
              {{ info.leader_job ? info.leader_job : '-' }}
            </div>
          </div>
          <div class="contItem marT20">
            <div class="contL">通讯地址</div>
            <div class="contR">
              {{ info.leader_address ? info.leader_address : '-' }}
            </div>
          </div>
          <div class="contItem marT20">
            <div class="contL">所在单位</div>
            <div class="contR">
              {{ info.leader_company ? info.leader_company : '-' }}
            </div>
          </div>
          <div class="contName" style="margin-top:60px;">项目经办人</div>
          <div class="contItem marT40">
            <div class="contL">经办人姓名</div>
            <div class="contR">
              {{ info.link_name ? info.link_name : '-' }}
            </div>
            <div class="contL" style="width:200px;">经办人电话</div>
            <div class="contR">
              {{ info.link_mobile ? info.link_mobile : '-' }}
            </div>
          </div>
          <div class="contItem marT20">
            <div class="contL">电子邮箱</div>
            <div class="contR">
              {{ info.link_email ? info.link_email : '-' }}
            </div>
            <div class="contL" style="width:200px;">职务/职称</div>
            <div class="contR">
              {{ info.link_job ? info.link_job : '-' }}
            </div>
          </div>
          <div class="contItem marT20">
            <div class="contL">通讯地址</div>
            <div class="contR">
              {{ info.link_address ? info.link_address : '-' }}
            </div>
          </div>
          <div class="contItem marT20">
            <div class="contL">所在单位</div>
            <div class="contR">
              {{ info.link_company ? info.link_company : '-' }}
            </div>
          </div>
        </div>
        <!--下面是折叠区域-->
        <div v-if="inv == 1 && info.type != 3">
          <!--一个折叠区域-->
          <div class="paddingMaring20">
            <div class="contItem marT20" @click="tabShow1 = !tabShow1">
              <div class="itemBlues">
                <div class="numbers">1.申请立项理由</div>
                <img v-if="tabShow1" src="~assets/img/updown.png" class="cha" />
                <img v-else src="~assets/img/updown.png" class="cha2" />
              </div>
            </div>
            <div v-if="tabShow1" class="itemWhite">
              <div class="whiteHead" style="margin-top:0px;padding-top:20px;">
                研究目的
              </div>
              <div class="whiteCont">
                {{ info.a_md ? info.a_md : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                选题依据
              </div>
              <div class="whiteCont">
                {{ info.a_yj ? info.a_yj : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                研发意义
              </div>
              <div class="whiteCont">
                {{ info.a_yy ? info.a_yy : '-' }}
              </div>
            </div>
          </div>
          <!--一个折叠区域-->
          <div class="paddingMaring20">
            <div class="contItem marT20" @click="tabShow2 = !tabShow2">
              <div class="itemBlues">
                <div class="numbers">2.国内、外研究现状和趋势</div>
                <img v-if="tabShow2" src="~assets/img/updown.png" class="cha" />
                <img v-else src="~assets/img/updown.png" class="cha2" />
              </div>
            </div>
            <div v-if="tabShow2" class="itemWhite">
              <div class="whiteHead" style="margin-top:0px;padding-top:20px;">
                研究现状
              </div>
              <div class="whiteCont">
                {{ info.b_xz ? info.b_xz : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                技术指标
              </div>
              <div class="whiteCont">
                {{ info.b_zb ? info.b_zb : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                存在的问题
              </div>
              <div class="whiteCont">
                {{ info.b_wt ? info.b_wt : '-' }}
              </div>
              <div class="whiteHead">
                发展趋势
              </div>
              <div class="whiteCont">
                {{ info.b_qs ? info.b_qs : '-' }}
              </div>
            </div>
          </div>
          <!--一个折叠区域-->
          <div class="paddingMaring20">
            <div class="contItem marT20" @click="tabShow3 = !tabShow3">
              <div class="itemBlues">
                <div class="numbers">3.研究目标和预期成果</div>
                <img v-if="tabShow3" src="~assets/img/updown.png" class="cha" />
                <img v-else src="~assets/img/updown.png" class="cha2" />
              </div>
            </div>
            <div v-if="tabShow3" class="itemWhite">
              <div class="whiteHead" style="margin-top:0px;padding-top:20px;">
                研究目标
              </div>
              <div class="whiteCont">
                {{ info.c_mb ? info.c_mb : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                预期成果的名称及表达方式
              </div>
              <div class="whiteCont">
                {{ info.c_cg ? info.c_cg : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                成果产出对相关管理工作的作用和应用前景
              </div>
              <div class="whiteCont">
                {{ info.c_yy ? info.c_yy : '-' }}
              </div>
            </div>
          </div>
          <!--一个折叠区域-->
          <div class="paddingMaring20">
            <div class="contItem marT20" @click="tabShow4 = !tabShow4">
              <div class="itemBlues">
                <div class="numbers">4.项目主要内容</div>
                <img v-if="tabShow4" src="~assets/img/updown.png" class="cha" />
                <img v-else src="~assets/img/updown.png" class="cha2" />
              </div>
            </div>
            <div v-if="tabShow4" class="itemWhite">
              <div class="whiteHead" style="margin-top:0px;padding-top:20px;">
                主要研究内容
              </div>
              <div class="whiteCont">
                {{ info.d_nr ? info.d_nr : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                创新点
              </div>
              <div class="whiteCont">
                {{ info.d_cx ? info.d_cx : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                考核指标
              </div>
              <div class="whiteCont">
                {{ info.d_zb ? info.d_zb : '-' }}
              </div>
            </div>
          </div>
          <!--一个折叠区域-->
          <div class="paddingMaring20">
            <div class="contItem marT20" @click="tabShow5 = !tabShow5">
              <div class="itemBlues">
                <div class="numbers">5.研究思路、方法和计划进度</div>
                <img v-if="tabShow5" src="~assets/img/updown.png" class="cha" />
                <img v-else src="~assets/img/updown.png" class="cha2" />
              </div>
            </div>
            <div v-if="tabShow5" class="itemWhite">
              <div class="whiteHead" style="margin-top:0px;padding-top:20px;">
                研究思路和方法
              </div>
              <div class="whiteCont">
                {{ info.e_sl ? info.e_sl : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                阶段目标
              </div>
              <div class="whiteCont">
                {{ info.e_mb ? info.e_mb : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                进度安排
              </div>
              <div class="whiteCont">
                {{ info.e_jd ? info.e_jd : '-' }}
              </div>
            </div>
          </div>
          <!--一个折叠区域-->
          <div class="paddingMaring20">
            <div class="contItem marT20" @click="tabShow6 = !tabShow6">
              <div class="itemBlues">
                <div class="numbers">6.工作基础和科研保障情况</div>
                <img v-if="tabShow6" src="~assets/img/updown.png" class="cha" />
                <img v-else src="~assets/img/updown.png" class="cha2" />
              </div>
            </div>
            <div v-if="tabShow6" class="itemWhite">
              <div class="whiteHead" style="margin-top:0px;padding-top:20px;">
                研究基础
              </div>
              <div class="whiteCont">
                {{ info.f_jc ? info.f_jc : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                任务分工及主要科研条件
              </div>
              <div class="whiteCont">
                {{ info.f_jc ? info.f_jc : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                项目负责人以及团队
              </div>
              <div class="whiteCont">
                {{ info.f_jc ? info.f_jc : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                资金概算和来源
              </div>
              <div class="whiteCont">
                {{ info.f_jc ? info.f_jc : '-' }}
              </div>
            </div>
          </div>
          <div class="paddingMaring20">
            <div class="contItem marT20" @click="tabShow7 = !tabShow7">
              <div class="itemBlues">
                <div class="numbers">7.主要研究人员</div>
                <img v-if="tabShow7" src="~assets/img/updown.png" class="cha" />
                <img v-else src="~assets/img/updown.png" class="cha2" />
              </div>
            </div>
            <div v-if="tabShow7" class="whiteFoot">
              <div class="footText">研究人员列表</div>
              <table class="table">
                <tr>
                  <th>
                    序号
                  </th>
                  <th>
                    姓名
                  </th>
                  <th>
                    性别
                  </th>
                  <th>
                    生日
                  </th>
                  <th>
                    职位
                  </th>
                  <th>
                    学科
                  </th>
                  <th>
                    行业
                  </th>
                  <th>
                    公司
                  </th>
                  <th>
                    专业
                  </th>
                </tr>
                <tr v-for="(val, ind) in info.worker_json" :key="ind">
                  <td>{{ ind + 1 }}</td>
                  <td>
                    {{ val.name }}
                  </td>
                  <td>
                    {{ val.sex }}
                  </td>
                  <td>
                    {{ val.birthday }}
                  </td>
                  <td>
                    {{ val.job }}
                  </td>
                  <td>
                    {{ val.study_major }}
                  </td>
                  <td>
                    {{ val.now_major }}
                  </td>
                  <td>
                    {{ val.company }}
                  </td>
                  <td>
                    {{ val.task }}
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="paddingMaring20">
            <div class="contItem marT20" @click="tabShow8 = !tabShow8">
              <div class="itemBlues">
                <div class="numbers">
                  8.项目研究单位及合作单位（打印后加盖公章生效）
                </div>
                <img v-if="tabShow8" src="~assets/img/updown.png" class="cha" />
                <img v-else src="~assets/img/updown.png" class="cha2" />
              </div>
            </div>
            <div v-if="tabShow8" class="whiteFoot">
              <div class="footText">合作单位列表</div>
              <table class="table">
                <tr>
                  <th>
                    序号
                  </th>
                  <th>
                    单位名称
                  </th>
                  <th>
                    负责人
                  </th>
                  <th>
                    负责人联系电话
                  </th>
                  <th>
                    负责人邮箱
                  </th>
                  <th>
                    负责人地址
                  </th>
                  <th>
                    联系人
                  </th>
                  <th>
                    联系人联系电话
                  </th>
                  <th>
                    联系人邮箱
                  </th>
                  <th>
                    联系人地址
                  </th>
                </tr>
                <tr v-for="(val, ind) in info.partner_json" :key="ind">
                  <td>{{ ind + 1 }}</td>
                  <td>
                    {{ val.name }}
                  </td>
                  <td>
                    {{ val.leader_name }}
                  </td>
                  <td>
                    {{ val.leader_mobile }}
                  </td>
                  <td>
                    {{ val.leader_email }}
                  </td>
                  <td>
                    {{ val.leader_address }}
                  </td>
                  <td>
                    {{ val.link_name }}
                  </td>
                  <td>
                    {{ val.link_mobile }}
                  </td>
                  <td>
                    {{ val.link_email }}
                  </td>
                  <td>
                    {{ val.link_address }}
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <!--一个折叠区域（表格）-->
          <div class="paddingMaring20">
            <div class="contItem marT20" @click="tabShow9 = !tabShow9">
              <div class="itemBlues">
                <div class="numbers">9.上传相关附件</div>
                <img v-if="tabShow9" src="~assets/img/updown.png" class="cha" />
                <img v-else src="~assets/img/updown.png" class="cha2" />
              </div>
            </div>
            <div v-if="tabShow9" class="whiteFoot">
              <div class="footText">附件列表</div>
              <table class="table">
                <tr>
                  <th>
                    序号
                  </th>
                  <th style="width:870px;">
                    文件名称
                  </th>
                  <th>
                    操作
                  </th>
                </tr>
                <tr v-for="(val, ind) in info.files" :key="ind">
                  <td>{{ ind + 1 }}</td>
                  <td>
                    {{ val.name }}
                  </td>
                  <td>
                    <div style="display:flex;">
                      <a :href="val.url" target="_blank" class="view">查看</a>
                      <a :href="val.url" download class="view">下载</a>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div v-if="inv == 1 && info.type == 3">
          <!--一个折叠区域-->
          <div class="paddingMaring20">
            <div class="contItem marT20" @click="tabShow1 = !tabShow1">
              <div class="itemBlues">
                <div class="numbers">1.申报单位概况</div>
                <img v-if="tabShow1" src="~assets/img/updown.png" class="cha" />
                <img v-else src="~assets/img/updown.png" class="cha2" />
              </div>
            </div>
            <div v-if="tabShow1" class="itemWhite">
              <div class="whiteCont">
                {{ info.a_gk ? info.a_gk : '-' }}
              </div>
            </div>
          </div>
          <!--一个折叠区域-->
          <div class="paddingMaring20">
            <div class="contItem marT20" @click="tabShow2 = !tabShow2">
              <div class="itemBlues">
                <div class="numbers">2.申报单位相关工作基础</div>
                <img v-if="tabShow2" src="~assets/img/updown.png" class="cha" />
                <img v-else src="~assets/img/updown.png" class="cha2" />
              </div>
            </div>
            <div v-if="tabShow2" class="itemWhite">
              <div class="whiteCont">
                {{ info.a_jc ? info.a_jc : '-' }}
              </div>
            </div>
          </div>
          <!--一个折叠区域-->
          <div class="paddingMaring20">
            <div class="contItem marT20" @click="tabShow10 = !tabShow10">
              <div class="itemBlues">
                <div class="numbers">3.项目概况</div>
                <img
                  v-if="tabShow10"
                  src="~assets/img/updown.png"
                  class="cha"
                />
                <img v-else src="~assets/img/updown.png" class="cha2" />
              </div>
            </div>
            <div v-if="tabShow10" class="itemWhite">
              <div class="whiteCont">
                {{ info.b_gk ? info.b_gk : '-' }}
              </div>
            </div>
          </div>
          <!--一个折叠区域-->
          <div class="paddingMaring20">
            <div class="contItem marT20" @click="tabShow3 = !tabShow3">
              <div class="itemBlues">
                <div class="numbers">4.研究目标和预期成果</div>
                <img v-if="tabShow3" src="~assets/img/updown.png" class="cha" />
                <img v-else src="~assets/img/updown.png" class="cha2" />
              </div>
            </div>
            <div v-if="tabShow3" class="itemWhite">
              <div class="whiteHead" style="margin-top:0px;padding-top:20px;">
                研究目标
              </div>
              <div class="whiteCont">
                {{ info.c_mb ? info.c_mb : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                预期成果的名称及表达方式
              </div>
              <div class="whiteCont">
                {{ info.c_cg ? info.c_cg : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                成果产出对相关管理工作的作用和应用前景
              </div>
              <div class="whiteCont">
                {{ info.c_yy ? info.c_yy : '-' }}
              </div>
            </div>
          </div>
          <!--一个折叠区域-->
          <div class="paddingMaring20">
            <div class="contItem marT20" @click="tabShow4 = !tabShow4">
              <div class="itemBlues">
                <div class="numbers">5.项目主要实施内容</div>
                <img v-if="tabShow4" src="~assets/img/updown.png" class="cha" />
                <img v-else src="~assets/img/updown.png" class="cha2" />
              </div>
            </div>
            <div v-if="tabShow4" class="itemWhite">
              <div class="whiteHead" style="margin-top:0px;padding-top:20px;">
                项目示范内容
              </div>
              <div class="whiteCont">
                {{ info.d_nr ? info.d_nr : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                关键问题和难点分析
              </div>
              <div class="whiteCont">
                {{ info.d_gj ? info.d_gj : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                考核指标
              </div>
              <div class="whiteCont">
                {{ info.d_zb ? info.d_zb : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                先进性/创新点
              </div>
              <div class="whiteCont">
                {{ info.d_zb ? info.d_zb : '-' }}
              </div>
            </div>
          </div>
          <!--一个折叠区域-->
          <div class="paddingMaring20">
            <div class="contItem marT20" @click="tabShow5 = !tabShow5">
              <div class="itemBlues">
                <div class="numbers">6.技术路线和计划进度</div>
                <img v-if="tabShow5" src="~assets/img/updown.png" class="cha" />
                <img v-else src="~assets/img/updown.png" class="cha2" />
              </div>
            </div>
            <div v-if="tabShow5" class="itemWhite">
              <div class="whiteHead" style="margin-top:0px;padding-top:20px;">
                实施技术路线
              </div>
              <div class="whiteCont">
                {{ info.e_js ? info.e_js : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                工作计划
              </div>
              <div class="whiteCont">
                {{ info.e_jh ? info.e_jh : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                成果转化
              </div>
              <div class="whiteCont">
                {{ info.e_zh ? info.e_zh : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                服务推广计划
              </div>
              <div class="whiteCont">
                {{ info.e_tg ? info.e_tg : '-' }}
              </div>
            </div>
          </div>
          <!--一个折叠区域-->
          <div class="paddingMaring20">
            <div class="contItem marT20" @click="tabShow6 = !tabShow6">
              <div class="itemBlues">
                <div class="numbers">7.实施效果分析</div>
                <img v-if="tabShow6" src="~assets/img/updown.png" class="cha" />
                <img v-else src="~assets/img/updown.png" class="cha2" />
              </div>
            </div>
            <div v-if="tabShow6" class="itemWhite">
              <div class="whiteHead" style="margin-top:0px;padding-top:20px;">
                项目实施对推动住房建设领域科技进步有作用
              </div>
              <div class="whiteCont">
                {{ info.f_jb ? info.f_jb : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                社会、经济、环境效益分析
              </div>
              <div class="whiteCont">
                {{ info.f_xy ? info.f_xy : '-' }}
              </div>
              <div class="lines"></div>
              <div class="whiteHead">
                项目示范意义
              </div>
              <div class="whiteCont">
                {{ info.f_sf ? info.f_sf : '-' }}
              </div>
            </div>
          </div>
          <!--一个折叠区域-->
          <div class="paddingMaring20">
            <div class="contItem marT20" @click="tabShow11 = !tabShow11">
              <div class="itemBlues">
                <div class="numbers">
                  8.保障措施（包括组织方式、责任分工、团队实力、风险控制措施等）
                </div>
                <img
                  v-if="tabShow11"
                  src="~assets/img/updown.png"
                  class="cha"
                />
                <img v-else src="~assets/img/updown.png" class="cha2" />
              </div>
            </div>
            <div v-if="tabShow11" class="itemWhite">
              <div class="whiteCont">
                {{ info.g_bz ? info.g_bz : '-' }}
              </div>
            </div>
          </div>
          <div class="paddingMaring20">
            <div class="contItem marT20" @click="tabShow7 = !tabShow7">
              <div class="itemBlues">
                <div class="numbers">9.主要研究人员</div>
                <img v-if="tabShow7" src="~assets/img/updown.png" class="cha" />
                <img v-else src="~assets/img/updown.png" class="cha2" />
              </div>
            </div>
            <div v-if="tabShow7" class="whiteFoot">
              <div class="footText">研究人员列表</div>
              <table class="table">
                <tr>
                  <th>
                    序号
                  </th>
                  <th>
                    姓名
                  </th>
                  <th>
                    性别
                  </th>
                  <th>
                    生日
                  </th>
                  <th>
                    职位
                  </th>
                  <th>
                    学科
                  </th>
                  <th>
                    行业
                  </th>
                  <th>
                    公司
                  </th>
                  <th>
                    专业
                  </th>
                </tr>
                <tr v-for="(val, ind) in info.worker_json" :key="ind">
                  <td>{{ ind + 1 }}</td>
                  <td>
                    {{ val.name }}
                  </td>
                  <td>
                    {{ val.sex }}
                  </td>
                  <td>
                    {{ val.birthday }}
                  </td>
                  <td>
                    {{ val.job }}
                  </td>
                  <td>
                    {{ val.study_major }}
                  </td>
                  <td>
                    {{ val.now_major }}
                  </td>
                  <td>
                    {{ val.company }}
                  </td>
                  <td>
                    {{ val.task }}
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="paddingMaring20">
            <div class="contItem marT20" @click="tabShow8 = !tabShow8">
              <div class="itemBlues">
                <div class="numbers">
                  8.项目研究单位及合作单位（打印后加盖公章生效）
                </div>
                <img v-if="tabShow8" src="~assets/img/updown.png" class="cha" />
                <img v-else src="~assets/img/updown.png" class="cha2" />
              </div>
            </div>
            <div v-if="tabShow8" class="whiteFoot">
              <div class="footText">合作单位列表</div>
              <table class="table">
                <tr>
                  <th>
                    序号
                  </th>
                  <th>
                    单位名称
                  </th>
                  <th>
                    负责人
                  </th>
                  <th>
                    负责人联系电话
                  </th>
                  <th>
                    负责人邮箱
                  </th>
                  <th>
                    负责人地址
                  </th>
                  <th>
                    联系人
                  </th>
                  <th>
                    联系人联系电话
                  </th>
                  <th>
                    联系人邮箱
                  </th>
                  <th>
                    联系人地址
                  </th>
                </tr>
                <tr v-for="(val, ind) in info.partner_json" :key="ind">
                  <td>{{ ind + 1 }}</td>
                  <td>
                    {{ val.name }}
                  </td>
                  <td>
                    {{ val.leader_name }}
                  </td>
                  <td>
                    {{ val.leader_mobile }}
                  </td>
                  <td>
                    {{ val.leader_email }}
                  </td>
                  <td>
                    {{ val.leader_address }}
                  </td>
                  <td>
                    {{ val.link_name }}
                  </td>
                  <td>
                    {{ val.link_mobile }}
                  </td>
                  <td>
                    {{ val.link_email }}
                  </td>
                  <td>
                    {{ val.link_address }}
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <!--一个折叠区域（表格）-->
          <div class="paddingMaring20">
            <div class="contItem marT20" @click="tabShow9 = !tabShow9">
              <div class="itemBlues">
                <div class="numbers">9.上传相关附件</div>
                <img v-if="tabShow9" src="~assets/img/updown.png" class="cha" />
                <img v-else src="~assets/img/updown.png" class="cha2" />
              </div>
            </div>
            <div v-if="tabShow9" class="whiteFoot">
              <div class="footText">附件列表</div>
              <table class="table">
                <tr>
                  <th>
                    序号
                  </th>
                  <th style="width:870px;">
                    文件名称
                  </th>
                  <th>
                    操作
                  </th>
                </tr>
                <tr v-for="(val, ind) in info.files" :key="ind">
                  <td>{{ ind + 1 }}</td>
                  <td>
                    {{ val.name }}
                  </td>
                  <td>
                    <div style="display:flex;">
                      <a :href="val.url" target="_blank" class="view">查看</a>
                      <a :href="val.url" download class="view">下载</a>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="detailBtn">
        <div class="grayBtn detailBtnSize" @click="$router.go(-1)">
          返回
        </div>
        <!-- <div v-if="false" class="blueBtn detailBtnSize marL20">修改资料</div> -->
        <!-- <div class="blueBtn detailBtnSize marL20">下载申报书</div> -->
      </div>
    </div>
  </div>
</template>
<style>
.statusColor1 {
  margin-left: 40px;
  color: green !important;
}
.statusColor2 {
  margin-left: 40px;
  color: black !important;
}
.statusColor3 {
  margin-left: 40px;
  color: rgba(51, 51, 51, 1) !important;
}
.statusColor4 {
  margin-left: 40px;
  color: red !important;
}
.backName {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 28px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.backup {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #1d78d3;
  cursor: pointer;
}
.backup img {
  margin-right: 5px;
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
  cursor: pointer;
}
.marL20 {
  margin-left: 20px;
}

.detailBtnSize {
  min-width: 100px;
  margin-top: 40px;
  padding: 5px 35px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  border-radius: 100px;
  cursor: pointer;
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
  cursor: pointer;
}
.top {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: flex-end;
  padding-top: 15px;
  padding-bottom: 15px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  cursor: pointer;
}
.cha2 {
  width: 14px;
  height: 8px;
  transform: rotate(180deg);
  cursor: pointer;
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
.whiteFoot th {
  border: 1px solid rgba(230, 230, 230, 1);
  background: rgba(236, 238, 242, 1);
  padding: 10px 0px;
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
  color: #000000;
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
.detaillController {
  max-width: 800px;
}
</style>
<script>
import { datawork } from '../../plugins/datawork'
// import { getClientId } from '../../plugins/getclientid'
// import { getToken } from '../../plugins/gettoken'
export default {
  data() {
    return {
      inv: 0,
      infoId: null,
      infoType: null,
      info: null,
      verifyData: [], // 审核信息
      tabShow1: false,
      tabShow2: false,
      tabShow3: false,
      tabShow4: false,
      tabShow5: false,
      tabShow6: false,
      tabShow7: false,
      tabShow8: false,
      tabShow9: false,
      tabShow10: false,
      tabShow11: false
    }
  },
  mounted() {
    /*eslint-disable*/
    // 查询的ID传递
    this.infoId = this.$route.query.id
    this.infoType = this.$route.query.type
    this.getDetil()
  },
  methods: {
    getDetil() {
      this.loading = true
      const commondata = JSON.parse(localStorage.getItem('commondata'))
      const data1 = {}
      let data2 = {}
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
      if (this.prostate) {
        data1.status = this.prostate
      }
      if (this.word && this.word.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.keyword = this.word.replace(/(^\s*)|(\s*$)/g, '')
      }
      data1.id = this.infoId
      data2 = datawork(data1)
      const that = this
      this.$api.get_pro_detail(data2).then((v) => {
        if (v.data.errcode === 0) {
          that.info = v.data.data.data
          that.verifyData = v.data.data.verifyData
        } else if (v.data.errmsg === '没有登录') {
          this.loading = false
          setTimeout(() => {
            that.$router.push('/login')
          }, 1000)
        } else {
          this.$message({
            type: 'error',
            message: v.data.errmsg
          })
        }
      })
    },
    view() {
      // 这里是预览申报书的页面
      if (this.infoType == 3) {
        window.open('http://kjxm.ynbzde.com/declaration/great/cover2?shenbaoshu=' + this.infoId, '_blank')
      } else {
        window.open('http://kjxm.ynbzde.com/declaration/great/cover?shenbaoshu=' + this.infoId, '_blank')
      }
    }
  }
}
</script>
