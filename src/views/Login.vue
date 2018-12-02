<template>
  <div class="login-container">
    <div class="login">
      <div class="title">
        <h1>请登陆以访问图书馆</h1>
      </div>
      <div class="login-bar">
        <div class="sub-title">
          <h2>用户登录</h2>
        </div>
        <div class="user-login">
          <div class="username">
            <span class="login-title username-title">账号</span>
            <input type="text" class="login-input username-input" v-model="username">
          </div>
          <div class="password">
            <span class="login-title password-title">密码</span>
            <input type="password" class="login-input password-input" v-model="password">
          </div>
        </div>
        <div class="submit-bar">
          <span class="login-title" style="visibility: hidden;">登录</span>
          <button class="login-submit" @click="loginSubmit">登录</button>
        </div>
      </div>
    </div>
    <div class="login-information">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    loginSubmit() {
      let that = this;
      console.log("username:", this.username);
      console.log("password:", this.password);
      this.$api
        .login({
          username: that.username,
          password: that.password
        })
        .then(response => {
          console.log(response);
          // token保存到localStorage
          localStorage.setItem("token", response.data.token);
          // 基本信息存到localStorage
          // localStorage只能存字符串
          localStorage.setItem(
            "loginUserBaseInfo",
            JSON.stringify(response.data.data)
          );
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>


<style lang="less" scoped>
// 注意改，获取滚动条宽度，不让页面晃动
.login-container {
  min-height: 400px;
  width: 100%;
  background-color: #ffffff;
  display: table;
  border-top: 20px solid @content-color;
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

.user-login {
  padding-top: 20px;
}

.username,
.password {
  margin-top: 10px;
  margin-bottom: 10px;
}

.login-title {
  padding-right: 10px;
}

.login-input {
  padding: 5px;
  width: 250px;
  border-radius: 4px;
  border: 1px solid #b2b2b8;
  // height: 30px;
}

.submit-bar {
  margin-bottom: 100px;
  padding: 10px 0;
}

.login-submit {
  padding: 4px 22px;
  height: 30px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  background-color: @button-color;
  cursor: pointer;
}
</style>
