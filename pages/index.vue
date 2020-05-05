<template>
  <div class="indexcommon">
    <left />
    <div class="indexright">
      <nuxt />
    </div>
  </div>
</template>
<script>
import left from '../components/left'
export default {
  components: {
    left
  },
  data() {
    return {}
  },
  computed: {
    route() {
      return this.$route
    }
  },
  mounted() {
    if (
      !localStorage.getItem('userid') ||
      !Number(localStorage.getItem('userid'))
    ) {
      this.$router.push('/login')
    }
  },
  methods: {}
}
</script>
<style lang="stylus" scoped>
.indexcommon
  display flex
  width 100%
.indexright
  width calc(100% - 260px)
  padding 20px 80px 20px 20px
</style>
