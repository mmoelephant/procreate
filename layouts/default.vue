<template>
  <div>
    <el-header v-if="route.path != '/login'" class="commonheader">
      <div class="webtitle" @click="toIndex">
        云南省住房和城乡建设厅科学技术计划项目管理系统
      </div>
    </el-header>
    <el-main :class="route.path == '/login' ? '' : 'main'"><nuxt /></el-main>
    <el-footer v-if="route.path != '/login'">
      <div class="footerinfo">
        <span>主管单位：云南省住房和城乡建设厅科技与标准定额处</span>
        <span>联系电话：64320549</span>
        <span class="filingsys" @click="tofilesys">
          备案号：滇ICP备18001273号
        </span>
      </div>
      <div class="footerinfo">
        <span>技术支持：昆明行列科技有限公司</span>
        <span>联系电话：0871-68184040</span>
        <span>后台登录</span>
      </div>
    </el-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  computed: {
    route() {
      return this.$route
    }
  },
  watch: {
    route(val) {
      console.log(val)
    }
  },
  methods: {
    tofilesys() {
      window.open(
        'http://beian.miit.gov.cn/state/outPortal/loginPortal.action',
        '_blank'
      )
    },
    toIndex() {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="stylus" scoped>
.commonheader
  display flex
  align-items center
  background linear-gradient(90deg, rgba(0,102,170,1) 0%, rgba(0,85,141,1) 100%)
  color #fff
  .webtitle
    font-size 20px
.footerinfo
  margin-bottom 10px
  span
    margin 0 3px
.filingsys
  cursor pointer
.filingsys:hover
    color rgba(0,102,170,1)
</style>
