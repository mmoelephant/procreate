<template>
  <div v-loading.fullscreen="loading">
    <el-header
      v-if="
        route.name.slice(0, 5) != 'login' &&
          route.path != '/declaration/great/cover' &&
          route.path != '/declaration/great/cover2'
      "
      class="commonheader"
    >
      <div class="webtitle" @click="toIndex">
        云南省住房和城乡建设厅科学技术计划项目管理系统
      </div>
      <div v-if="userid && Number(userid)" class="user_head">
        <div class="avatar">
          <i class="iconfont">&#xe61f;</i>
        </div>
        <span @click="toset">{{ user.username }}</span>
        <span @click="logout">退出登录</span>
      </div>
    </el-header>
    <el-main
      :class="
        route.name.slice(0, 5) == 'login'
          ? ''
          : route.path == '/declaration/great/cover' ||
            route.path == '/declaration/great/cover2'
          ? 'main main2'
          : 'main'
      "
    >
      <nuxt />
    </el-main>
    <el-footer
      v-if="
        route.name.slice(0, 5) != 'login' &&
          route.path != '/declaration/great/cover' &&
          route.path != '/declaration/great/cover2'
      "
    >
      <div class="footerinfo">
        <span>主管单位：云南省住房和城乡建设厅</span>
        <span>联系电话：0871-64320642</span>
        <span class="filingsys" @click="tofilesys">
          备案号：滇ICP备18001273号
        </span>
      </div>
      <div class="footerinfo">
        <span>技术支持：昆明行列科技有限公司</span>
        <span>技术联系电话：13095322247</span>
      </div>
    </el-footer>
  </div>
</template>
<script>
import { datawork } from '../plugins/datawork'
import { getClientId } from '../plugins/getclientid'
import { getToken } from '../plugins/gettoken'
export default {
  data() {
    return {
      Ip: '',
      uniquecode: '',
      commondata: {},
      loading: false
    }
  },
  computed: {
    route() {
      return this.$route
    },
    userid() {
      return this.$store.state.userid
    },
    user() {
      return this.$store.state.userinfo
    }
  },
  watch: {
    route(val) {}
  },
  mounted() {
    this.ready()
    this.random15 =
      new Date().getTime() + '' + Math.floor(Math.random() * 89 + 10)
    if (
      localStorage.getItem('uniquecode') &&
      localStorage.getItem('uniquecode').length > 0
    ) {
      this.uniquecode = localStorage.getItem('uniquecode')
    } else {
      this.uniquecode = this.random15
      localStorage.setItem('uniquecode', this.random15)
      this.$store.commit('SET_UNIQUE_CODE', this.random15)
    }
    this.useragent = navigator.userAgent
    this.commondata = {
      appid: 'hlwpf2c86740fbcf02',
      unique_code: this.uniquecode,
      sign_type: 'md5',
      version: '2.0',
      format: 'JSON',
      charset: 'utf-8',
      ip: this.Ip,
      agent: this.useragent
    }
    localStorage.setItem('commondata', JSON.stringify(this.commondata))
    this.$store.commit('SET_COMMON_DATA', this.commondata)
    if (
      localStorage.getItem('clientid') &&
      localStorage.getItem('clientid').length > 0 &&
      localStorage.getItem('accesstoken') &&
      localStorage.getItem('accesstoken').length > 0
    ) {
    } else {
      this.getclientid(this.commondata)
    }
  },
  methods: {
    ready() {
      if (process.browser) {
        /* eslint-disable */
        const cip = returnCitySN['cip']
        this.Ip = cip
      }
    },
    getclientid(data) {
      const data1 = {}
      let data2 = {}
      const that = this
      this.loading = true
      for (const i in data) {
        data1[i] = data[i]
      }
      if (localStorage.getItem('userid')) {
        data1.user_id = localStorage.getItem('userid')
      } else {
        data1.user_id = 0
        this.$store.commit('SET_USER_ID', '')
        this.$store.commit('SET_USER_INFO', {})
        localStorage.removeItem('userid')
        localStorage.removeItem('userinfo')
      }
      data1.timestamp = Math.round(new Date().getTime() / 1000).toString()
      data1.nonce_str =
        new Date().getTime() + '' + Math.floor(Math.random() * 899 + 100)
      data2 = datawork(data1)
      this.$api.get_client(data2).then((v) => {
        if (v.data.errcode === 0) {
          this.loading = false
          localStorage.setItem('clientid', v.data.data.client_id)
          this.$store.commit('SET_CLIENT_ID', v.data.data.client_id)
          localStorage.setItem('accesstoken', v.data.data.access_token)
          this.$store.commit('SET_ACCESS_TOKEN', v.data.data.access_token)
        } else if (v.data.errcode === 1104) {
          getToken(this.commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('tokenDone')) {
              that.getclientid()
            }
          }, 1000)
        } else if (v.data.errcode === 1103) {
          getClientId(this.commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('done')) {
              that.getclientid()
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
    logout() {
      this.$confirm('确定退出登录吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        lockScroll: false,
        type: 'warning'
      })
        .then(() => {
          this.loading = true
          const commondata = this.$store.state.commondata
          const data1 = {}
          let data2 = {}
          const that = this
          for (const i in commondata) {
            data1[i] = commondata[i]
          }
          data1.user_id = 0
          // if (localStorage.getItem('userid')) {
          //   data1.user_id = localStorage.getItem('userid')
          // }
          data1.timestamp = Math.round(new Date().getTime() / 1000).toString()
          data1.nonce_str =
            new Date().getTime() + '' + Math.floor(Math.random() * 899 + 100)
          if (localStorage.getItem('clientid')) {
            data1.client_id = localStorage.getItem('clientid')
          }
          if (localStorage.getItem('accesstoken')) {
            data1.access_token = localStorage.getItem('accesstoken')
          }
          data2 = datawork(data1)
          this.$api.log_out(data2).then((v) => {
            if (v.data.errcode === 0) {
              this.loading = false
              localStorage.setItem('userinfo', '')
              this.$store.commit('SET_USER_INFO', {})
              localStorage.setItem('userid', '')
              this.$store.commit('SET_USER_ID', '')
              this.$message({
                type: 'success',
                message: '退出成功',
                duration: 1000
              })
              setTimeout(() => {
                that.$router.push('/login')
              }, 1000)
            } else if (v.data.errcode === 1104) {
              getToken(commondata, this)
              setTimeout(() => {
                if (localStorage.getItem('tokenDone')) {
                  that.logout()
                }
              }, 1000)
            } else if (v.data.errcode === 1103) {
              getClientId(commondata, this)
              setTimeout(() => {
                if (localStorage.getItem('done')) {
                  that.logout()
                }
              }, 1000)
            } else {
              this.loading = false
              this.$message({
                type: 'error',
                message: v.data.errmsg,
              })
            }
          })
        })
        .catch(() => {})
    },
    toset() {
      this.$router.push('/accoutset')
    },
    tofilesys() {
      window.open(
        'http://beian.miit.gov.cn/state/outPortal/loginPortal.action',
        '_blank'
      )
    },
    toIndex() {
      this.$router.push('/')
    }
  },
  head() {
    return {
      // title: this.systitle,
      script: [
        {
          type: 'text/javascript',
          src: 'http://pv.sohu.com/cityjson?ie=utf-8',
          defer: false
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.commonheader
  display flex
  align-items center
  justify-content space-between
  background linear-gradient(90deg, rgba(0,102,170,1) 0%, rgba(0,85,141,1) 100%)
  color #fff
  .webtitle
    font-size 20px
.user_head
  display flex
  align-items center
  span
    margin 0 10px
    cursor pointer
  span:hover
    color #50A7FF
.avatar
  width 28px
  height 28px
  border-radius 50%
  font-size 12px
  text-align center
  line-height 28px
  color #00558D
  background #fff
.footerinfo
  margin-bottom 10px
  span
    margin 0 3px
.filingsys
  cursor pointer
.filingsys:hover
    color rgba(0,102,170,1)
</style>
<style>
.panel {
  background: rgba(255, 255, 255, 1);
  padding-top: 102px;
  margin: 0 auto;
  position: relative;
}
.number {
  font-size: 26px;
  font-weight: 400;
  line-height: 31px;
  color: rgba(0, 0, 0, 1);
  padding-left: 745px;
}
.company {
  font-size: 80px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-top: 142px;
  text-align: center;
  width: 100%;
}
.them {
  margin-top: 20px;
  font-weight: 300;
}
.book {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 139px;
}
.word {
  width: 150px;
}
.item {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 77px;
  text-align: justify;
}
.title {
  width: 235px;
  font-size: 32px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  text-align-last: justify;
}
.line {
  height: 45px;
  margin-left: 20px;
  width: 532px;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid rgba(0, 0, 0, 1);
  font-size: 32px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
.item:last-child {
  margin-bottom: 0px;
}
.remark {
  font-size: 32px;
  font-weight: bold;
  line-height: 38px;
  color: rgba(0, 0, 0, 1);
  margin-top: 214px;
  text-align: center;
}
.date {
  margin-top: 17px;
}
/* 封面页码 */
.page {
  display: flex;
  position: absolute;
  bottom: 119px;
  right: 114px;
  align-items: center;
}
.pageNumber {
  font-size: 28px;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  margin-left: 17px;
  margin-right: 17px;
}
.grayLine {
  width: 30px;
  height: 0px;
  border: 1px solid rgba(153, 153, 153, 1);
}
/* 内页页码 */
.pageCont {
  display: flex;
  position: absolute;
  bottom: 102px;
  right: 145px;
  align-items: center;
}
/* 一级标题 */
.headTitle {
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 31px;
}
/* 表格样式 */
.table {
  width: 100%;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(0, 0, 0, 1);
  border-collapse: collapse;
}
.padding20 {
  padding: 10px 20px;
}
.centerCont {
  vertical-align: text-top;
  border: 1px solid rgba(0, 0, 0, 1);
}

/* 二级标题 */
.bodyTitle {
  font-size: 24px;
  font-weight: 400;
  text-align: left !important;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 10px;
}
.bodyCont {
  font-size: 24px;
  font-weight: 300;
  color: rgba(0, 0, 0, 1);
}
/* page8表格 */
.tableFont {
  font-size: 21px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 1);
}
.tdHeight {
  height: 100px;
}
/* page9二级标题 */
.font28 {
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 26px;
}
.tableFont24 {
  font-size: 24px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 1);
}
.maCoverStyle{
  width:150px;
  height:150px;
}
.maPageStyle{
  width:300px;
  height:60px;
}
.maCover{
 position: absolute;
 left:174px;
 top:101px;
}
.maCovers{
 position: absolute;
 left:174px;
 top:28px;
}

.maPage{
 position: absolute;
 left:420px;
 bottom:38px
}
</style>
