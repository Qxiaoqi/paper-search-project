<template>
  <div class="management">
    <div class="title">
      <h1>用户注册</h1>
    </div>
    <UserInput routerName="register"></UserInput>
    <!-- <div class="user-register">
      <div class="username">
        <span class="register-title username-title">账号</span>
        <input type="text" class="register-input username-input" v-model="username">
        <span class="pl-5">5~16个字符，可使用小写字母、数字</span>
      </div>
      <div class="password">
        <span class="register-title password-title">密码</span>
        <input type="password" class="register-input password-input" v-model="password">
      </div>
      <div class="verification-code">
        <span class="register-title code-title">验证</span>
        <input type="text" class="register-input code-input" v-model="code">
        <span class="get-code-title" @click="getCode">获取验证码</span>
        <img :src="codeUrl" alt="验证码" class="code-img" v-if="isCodeRender">
        <span class="code-timeout" v-if="isCodeRender">{{ codeTimeout }} s后消失</span>
      </div>
    </div>
    <div class="submit-bar">
      <span class="register-title" style="visibility: hidden;">注册</span>
      <button class="register-submit" @click="registerSubmit">注册</button>
    </div> -->
  </div>
</template>

<script>
import UserInput from "@/components/user/UserInput.vue";

export default {
  name: "Register",
  components: {
    UserInput
  },
  created() {
    window.$message.info("可以注册账号");
  },
};
</script>

<style lang="less" scoped>
.management {
  padding: 45px;
}

</style>
