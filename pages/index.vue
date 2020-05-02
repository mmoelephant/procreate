<template>
  <div class="indexcommon">
    <left v-if="route.path != '/register'" />
    <div :class="route.path != '/register' ? 'indexright' : 'indexright2'">
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
  methods: {
    toindex() {
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="stylus" scoped>
.indexcommon
  display flex
  width 100%
.indexright
  width calc(100% - 320px)
  padding 20px 80px 20px 20px
.indexright2
  width 100%
</style>
