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
        </div>
        <div class="formitem msgcode">
          <div class="itemname">手机号</div>
          <input
            v-model="userphone"
            type="text"
            :disabled="disabled1"
            placeholder="请输入用户手机号"
          />
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
<style lang="stylus" scoped></style>
