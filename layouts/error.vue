<template>
  <div class="errpage">
    <img src="~assets/img/errpic.png" />
    <div>
      <h2>出了一点小差错，请刷新重试，或者：</h2>
      <p @click="backto">返回上一级</p>
      <p @click="backindex">返回首页</p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    backto() {
      this.$router.go(-1)
    },
    backindex() {
      this.$router.push('/createpro')
    }
  }
}
</script>
<style lang="stylus" scoped>
.errpage
  display flex
  justify-content center
  margin-top 200px
  >div
    margin-top 20px
  img
   margin-right 40px
  p
    margin 40px 0
    font-size 18px
    color #50A7FF
    cursor pointer
</style>
