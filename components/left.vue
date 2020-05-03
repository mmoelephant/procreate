<template>
  <div class="leftpage">
    <div class="unitname">昆明行列科技有限公司</div>
    <ul class="leftnav">
      <li class="bignav">项目立项</li>
      <li>
        <ul>
          <li class="bignav">项目中期</li>
          <li>中期汇报</li>
          <li>变更申请</li>
          <li>中止申请</li>
        </ul>
      </li>
      <li>
        <ul>
          <li class="bignav">项目验收</li>
          <li>验收申请</li>
          <li>证书申请</li>
        </ul>
      </li>
      <li
        :class="
          route.path == '/userinfo'
            ? 'bignav proset leftnavOn'
            : 'bignav proset'
        "
        @click="userinfo"
      >
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
        账户设置
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    route() {
      return this.$route
    }
  },
  methods: {
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
  width 320px
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
