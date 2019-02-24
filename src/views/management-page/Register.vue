<template>
  <div class="management">
    <div class="title">
      <h1>用户注册</h1>
    </div>
    <div class="user-register">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      code: "",
      uuid: "",
      codeUrl: "",
      codeTimeout: 0,
      // 全局变量，防止重复点击
      clock: ""
    };
  },
  computed: {
    isCodeRender() {
      return this.codeUrl !== "" && this.codeTimeout > 0 ? true : false;
    }
  },
  methods: {
    getCode() {
      let that = this;
      this.$api.get
        .getLoginCode()
        .then(response => {
          console.log(response);
          that.codeUrl = "data:image/png;base64," + response.data.data.image;
          that.uuid = response.data.data.uuid;
          that.codeTimeout = response.data.data.time;
          // 倒计时函数
          that.countDown();
        })
        .catch(error => {
          console.log(error);
        });
    },
    registerSubmit() {
      let that = this;
      this.$api.user
        .register({
          userName: that.username,
          password: that.password,
          code: that.code,
          uuid: that.uuid
        })
        .then(response => {
          console.log(response);
          if (response.data.code === 200) {
            window.$message.success("注册成功");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    countDown() {
      window.clearInterval(this.clock);
      this.clock = window.setInterval(() => {
        if (this.codeTimeout >= 0) {
          this.codeTimeout--;
        }
        if (this.codeTimeout < 0) {
          window.clearInterval(this.clock);
        }
      }, 1000);
    }
  }
};
</script>

<style lang="less" scoped>
.management {
  padding: 45px;
}

.user-register {
  padding-top: 20px;
}

.username,
.password {
  margin-top: 10px;
  margin-bottom: 10px;
}

.register-title {
  padding-right: 10px;
}

.register-input {
  padding: 5px;
  width: 250px;
  border-radius: 4px;
  border: 1px solid #b2b2b8;
  // height: 30px;
}

.get-code-title {
  padding-left: 10px;
  color: @header-blue;
  cursor: pointer;
}

.code-input {
  width: 80px;
}

.code-img {
  // 绝对定位让其不影响其他布局
  position: absolute;
  height: 28px;
}

.code-timeout {
  padding-left: 92px;
}

.submit-bar {
  margin-bottom: 100px;
  padding: 10px 0;
}

.register-submit {
  padding: 4px 22px;
  height: 30px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  background-color: @button-color;
  cursor: pointer;
}
</style>
