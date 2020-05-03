<template>
  <div class="indexpage">
    <h1 class="pagetitle">
      账户设置
    </h1>
    <div class="form">
      <p class="formtitle">账户基本信息</p>
      <div class="formitems">
        <div class="formitem">
          <div class="itemname">用户名</div>
          <input
            v-model="username"
            type="text"
            :disabled="disabled1"
            placeholder="请输入用户名"
          />
        </div>
        <div class="formitem msgcode">
          <div class="itemname">密码</div>
          <input
            v-model="password"
            type="password"
            :disabled="disabled1"
            placeholder="请输入用户密码"
          />
          <p class="setbtn">修改密码</p>
        </div>
        <div class="formitem msgcode">
          <div class="itemname">手机号</div>
          <input
            v-model="userphone"
            type="text"
            :disabled="disabled1"
            placeholder="请输入用户手机号"
          />
          <p class="setbtn">换绑</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      userphone: '',
      disabled1: true
    }
  }
}
</script>
<style lang="stylus" scoped>
.setbtn
  position absolute
  left 360px
  color #50A7FF
  cursor pointer
.setbtn:hover
  color #1D78D3
</style>
