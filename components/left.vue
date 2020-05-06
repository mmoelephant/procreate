<template>
  <div class="leftpage">
    <div class="unitname">昆明行列科技有限公司</div>
    <ul class="leftnav">
      <li
        :class="
          route.path == '/createpro' || route.path.slice(0, 9) == '/creating'
            ? 'bignav leftnavOn'
            : 'bignav'
        "
        @click="createpro"
      >
        <i class="iconfont">&#xe61e;</i>
        项目立项
      </li>
      <li>
        <ul>
          <li class="bignav">
            <i class="iconfont">&#xe61f;</i>
            项目中期
          </li>
          <li>中期汇报</li>
          <li>变更申请</li>
          <li>中止申请</li>
        </ul>
      </li>
      <li>
        <ul>
          <li class="bignav">
            <i class="iconfont">&#xe61c;</i>
            项目验收
          </li>
          <li>验收申请</li>
          <li>证书申请</li>
        </ul>
      </li>
      <li
        :class="route.path == '/userinfo' ? 'bignav leftnavOn' : 'bignav'"
        @click="userinfo"
      >
        <i class="iconfont">&#xe61d;</i>
        企业信息
      </li>
      <li
        :class="
          route.path == '/accoutset'
            ? 'bignav proset leftnavOn'
            : 'bignav proset'
        "
        @click="accoutset"
      >
        <i class="iconfont">&#xe618;</i>
        账户设置
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    state: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {}
  },
  computed: {
    route() {
      return this.$route
    }
  },
  methods: {
    createpro() {
      if (this.state && this.state === 1) {
        this.$router.push('/createpro')
      } else if (this.state && this.state === 2) {
        this.$message({
          type: 'error',
          message: '该账号已关闭，暂无权限操作！'
        })
      } else {
        this.$message({
          type: 'error',
          message:
            '您的企业信息暂未认证通过，请先认证企业信息，再进行下一步操作！'
        })
      }
    },
    userinfo() {
      this.$router.push('/userinfo')
    },
    accoutset() {
      this.$router.push('/accoutset')
    }
  }
}
</script>
<style lang="stylus" scoped>
.leftpage
  position fixed
  top 0
  left 0
  width 260px
  box-shadow 0px 3px 10px rgba(151,190,255,0.17)
  padding-bottom 100px
  background #fff
.unitname
  height 100px
  border-bottom 1px #00558D solid
  font-size 18px
  font-weight bold
  line-height 100px
  text-align center
  color #333
.bignav
  display flex
  align-items center
  height 60px
  padding 0 30px !important
  border-bottom 1px #E6E6E6 solid
  font-size 16px
  font-weight bold
  color #666 !important
  i
    margin-right 14px
.bignav:hover
  color #333
.bignav.proset
  border none
.leftnav > li
  cursor pointer
  li
    min-height 50px
    padding 0 20px 0 80px
    line-height 50px
    color #999
  li:hover
    color #333
li.leftnavOn
  background #E8F2FF
  color #00558D !important
</style>
