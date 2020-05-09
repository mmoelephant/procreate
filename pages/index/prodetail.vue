<template>
  <div>
    <div v-if="detailinfo != null">
      <div class="form">
        <p class="formtitle">计划任务书</p>
        <div class="formitems">
          <div class="formitem">
            <div class="itemname">项目名称</div>
            <p>{{ detailinfo.name ? detailinfo.name : '-' }}</p>
          </div>
          <!-- <div class="formitem">
            <div class="itemname">项目类别</div>
            <p>{{ detailinfo.name ? detailinfo.name : '-' }}</p>
          </div> -->
          <div class="formitem">
            <div class="itemname">申报单位</div>
            <p>
              {{
                detailinfo.enterprise_name ? detailinfo.enterprise_name : '-'
              }}
            </p>
          </div>
          <div class="formitem">
            <div class="itemname">起始时间</div>
            <p>{{ detailinfo.starttime ? detailinfo.starttime : '-' }}</p>
          </div>
          <div class="formitem">
            <div class="itemname">完成时间</div>
            <p>{{ detailinfo.endtime ? detailinfo.endtime : '-' }}</p>
          </div>
          <div class="formitem">
            <div class="itemname">自筹金额</div>
            <p>
              {{
                detailinfo.self_amount ? detailinfo.self_amount + '万元' : '-'
              }}
            </p>
          </div>
          <div class="formitem">
            <div class="itemname">国家拨/贷款</div>
            <p>
              {{
                detailinfo.country_amount
                  ? detailinfo.country_amount + '万元'
                  : '-'
              }}
            </p>
          </div>
          <div class="formitem">
            <div class="itemname">地方拨/贷款</div>
            <p>
              {{
                detailinfo.current_amount
                  ? detailinfo.current_amount + '万元'
                  : '-'
              }}
            </p>
          </div>
          <div class="formitem">
            <div class="itemname">其他</div>
            <p>
              {{
                detailinfo.other_amount ? detailinfo.other_amount + '万元' : '-'
              }}
            </p>
          </div>
          <div class="formitem">
            <div class="itemname">外方</div>
            <p>
              {{
                detailinfo.foreign_amount
                  ? detailinfo.foreign_amount + '万元'
                  : '-'
              }}
            </p>
          </div>
          <div class="formitem">
            <div class="itemname">总金额</div>
            <p>{{ detailinfo.amount ? detailinfo.amount : '-' }}</p>
          </div>
          <div class="formitem upload">
            <div class="itemname">合作单位</div>
            <div class="listdiv">
              <p v-for="(item, index) in partner" :key="index" class="listp">
                {{ item ? item : '-' }}
              </p>
              <p>第二个合作单位</p>
            </div>
          </div>
          <div class="formitem upload">
            <div class="itemname">项目所在地</div>
            <div class="listdiv">
              <p v-for="(item, index) in addressb" :key="index" class="listp">
                {{ item ? item : '-' }}
              </p>
              <p>第二个项目所在地</p>
            </div>
          </div>
          <div class="formitem upload">
            <div class="itemname">主要研究内容</div>
            <p>
              {{ detailinfo.study_content ? detailinfo.study_content : '-' }}
            </p>
          </div>
          <div class="formitem upload">
            <div class="itemname">考核指标</div>
            <p>
              {{ detailinfo.check_content ? detailinfo.check_content : '-' }}
            </p>
          </div>
          <div class="formitem upload">
            <div class="itemname">研究成果(示范工程简介)</div>
            <p>
              {{ detailinfo.expect_content ? detailinfo.expect_content : '-' }}
            </p>
          </div>
        </div>
      </div>
      <div class="form">
        <p class="formtitle">项目负责人</p>
        <div class="formitems">
          <div class="formitem">
            <div class="itemname">负责人姓名</div>
            <p>
              {{ detailinfo.leader_name ? detailinfo.leader_name : '-' }}
            </p>
          </div>
          <div class="formitem">
            <div class="itemname">负责人电话</div>
            <p>
              {{ detailinfo.leader_mobile ? detailinfo.leader_mobile : '-' }}
            </p>
          </div>
          <div class="formitem">
            <div class="itemname">职务/职称</div>
            <p>
              {{ detailinfo.leader_job ? detailinfo.leader_job : '-' }}
            </p>
          </div>
          <div class="formitem">
            <div class="itemname">通讯地址</div>
            <p>
              {{ detailinfo.leader_address ? detailinfo.leader_address : '-' }}
            </p>
          </div>
          <div class="formitem">
            <div class="itemname">所在单位</div>
            <p>
              {{ detailinfo.leader_company ? detailinfo.leader_company : '-' }}
            </p>
          </div>
        </div>
      </div>
      <div class="form">
        <p class="formtitle">项目经办人1</p>
        <div class="formitems">
          <div class="formitem">
            <div class="itemname">经办人姓名</div>
            <p>
              {{ detailinfo.link_name ? detailinfo.link_name : '-' }}
            </p>
          </div>
          <div class="formitem">
            <div class="itemname">经办人电话</div>
            <p>
              {{ detailinfo.link_mobile ? detailinfo.link_mobile : '-' }}
            </p>
          </div>
          <div class="formitem">
            <div class="itemname">职务/职称</div>
            <p>
              {{ detailinfo.link_job ? detailinfo.link_job : '-' }}
            </p>
          </div>
          <div class="formitem">
            <div class="itemname">通讯地址</div>
            <p>
              {{ detailinfo.link_address ? detailinfo.link_address : '-' }}
            </p>
          </div>
          <div class="formitem">
            <div class="itemname">所在单位</div>
            <p>
              {{ detailinfo.link_company ? detailinfo.link_company : '-' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { datawork } from '../../plugins/datawork'
import { getToken } from '../../plugins/gettoken'
import { getClientId } from '../../plugins/getclientid'
export default {
  props: {
    ids: {
      default: 0,
      type: Number
    }
  },
  data() {
    return {
      detailinfo: null,
      partner: [],
      addresb: []
    }
  },
  mounted() {
    let id = 0
    if (this.ids !== 0) {
      id = this.ids
    }
    this.getprodetail(id)
  },
  methods: {
    seeImg() {
      window.open('http://baidu.com', '_blank')
    },
    getprodetail(val) {
      this.loading = true
      this.partner = []
      this.addressb = []
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
      data1.id = val
      data2 = datawork(data1)
      this.$api.get_pro_detail(data2).then((v) => {
        if (v.data.errcode === 0) {
          this.loading = false
          this.detailinfo = v.data.data.data
          this.partner.push(v.data.data.data.partner_name)
          this.addressb.push(v.data.data.data.address)
        } else if (v.data.errcode === 1104) {
          getToken(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('tokenDone')) {
              that.getDetail()
            }
          }, 1000)
        } else if (v.data.errcode === 1103) {
          getClientId(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('done')) {
              that.getDetail()
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
.itemname + p, .itemname + div
  margin-left 60px
  color #333
.listp
  margin-bottom 5px
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
