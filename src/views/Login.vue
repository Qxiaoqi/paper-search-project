<template>
  <div class="login-container" id="login-container">
    <div class="login">
      <div class="title">
        <h1>请登陆以访问图书馆</h1>
      </div>
      <div class="login-bar">
        <div class="sub-title">
          <h2>用户登录</h2>
        </div>
        <UserInput routerName="login"></UserInput>
        <!-- <div class="user-login">
          <div class="username">
            <span class="login-title username-title">账号</span>
            <input type="text" class="login-input username-input" v-model="username">
          </div>
          <div class="password">
            <span class="login-title password-title">密码</span>
            <input type="password" class="login-input password-input" v-model="password">
          </div>
          <div class="verification-code">
            <span class="login-title code-title">验证</span>
            <input type="text" class="login-input code-input" v-model="code">
            <span class="get-code-title" @click="getCode">获取验证码</span>
            <img :src="codeUrl" alt="验证码" class="code-img" v-if="isCodeRender">
            <span class="code-timeout" v-if="isCodeRender">{{ codeTimeout }} s后消失</span>
          </div>
        </div>
        <div class="submit-bar">
          <span class="login-title" style="visibility: hidden;">登录</span>
          <button class="login-submit" @click="loginSubmit">登录</button>
        </div> -->
      </div>
    </div>
    <div class="login-information">
      <!-- 右侧 -->
    </div>
  </div>
</template>

<script>
import router from "../router";
import UserInput from "@/components/user/UserInput.vue";
import FontFaceObserver from "fontfaceobserver"; //字体加载前降级库

export default {
  name: "Login",
  components: {
    UserInput
  },
  beforeCreate() {
    let font = new FontFaceObserver("DownloadFont");

    font
      .load(null, 100).then(function() {
        console.log("My Family has loaded");
        // document.getElementById("login-container").style.fontFamily = "DownloadFont";

      }).catch(function() {
        console.log("字体未在0.1s内加载，则登录页显示安全字体");
        document.getElementById("login-container").style.fontFamily = "Arial, Helvetica, sans-serif";
      })
  }

};
</script>


<style lang="less" scoped>
// 注意改，获取滚动条宽度，不让页面晃动
.login-container {
  min-height: 500px;
  width: 100%;
  background-color: #ffffff;
  display: table;
  // 登录页先用安全字体加载，提高页面加载速度
  // font-family:  Arial, Helvetica, sans-serif;
  font-family: "DownloadFont", Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.login {
  display: table-cell;
}

.login-information {
  width: 35%;
  display: table-cell;
  background-color: @light-grey;
}

.title {
  padding: 45px;
}

.login-bar {
  padding: 0 45px;
}

// .user-login {
//   padding-top: 20px;
// }

// .username,
// .password {
//   margin-top: 10px;
//   margin-bottom: 10px;
// }

// .login-title {
//   padding-right: 10px;
// }

// .login-input {
//   padding: 5px;
//   width: 250px;
//   border-radius: 4px;
//   border: 1px solid #b2b2b8;
//   // height: 30px;
// }

// .code-input {
//   width: 80px;
// }

// .code-img {
//   // 绝对定位让其不影响其他布局
//   position: absolute;
//   height: 28px;
// }

// .code-timeout {
//   padding-left: 92px;
// }

// .get-code-title {
//   padding-left: 10px;
//   color: @header-blue;
//   cursor: pointer;
// }

// .submit-bar {
//   margin-bottom: 100px;
//   padding: 10px 0;
// }

// .login-submit {
//   padding: 4px 22px;
//   height: 30px;
//   font-size: 16px;
//   border-radius: 4px;
//   border: none;
//   background-color: @button-color;
//   cursor: pointer;
// }
</style>
