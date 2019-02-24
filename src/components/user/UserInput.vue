<template>
  <div>
    <div class="user-block">
      <div class="username">
        <span class="user-title username-title">账号</span>
        <input type="text" class="user-input username-input" v-model="username">
        <span class="pl-5" v-if="routerName === 'register'">5~16个字符，可使用小写字母、数字</span>
      </div>
      <div class="password">
        <span class="user-title password-title">密码</span>
        <input type="password" class="user-input password-input" v-model="password">
      </div>
      <div class="verification-code">
        <span class="user-title code-title">验证</span>
        <input type="text" class="user-input code-input" v-model="code">
        <span class="get-code-title" @click="getCode">获取验证码</span>
        <img :src="codeUrl" alt="验证码" class="code-img" v-if="isCodeRender">
        <span class="code-timeout" v-if="isCodeRender">{{ codeTimeout }} s后消失</span>
      </div>
    </div>
    <div class="submit-bar">
      <span class="user-title" style="visibility: hidden;">{{ buttonText }}</span>
      <button class="user-submit" @click="userSubmit">{{ buttonText }}</button>
    </div>
  </div>
</template>

<script>
import router from "../../router";

export default {
  name: "UserInput",
  props: {
    routerName: String,
  },
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
    },
    buttonText() {
      const text = {
        login: "登录",
        register: "注册"
      };
      return text[this.routerName];
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
    userSubmit() {
      let that = this;
      let name = this.routerName;
      if (name === "login") {
        // 登录页
        this.$api.user
          .login({
            userName: that.username,
            password: that.password,
            code: that.code,
            uuid: that.uuid
          })
          .then(response => {
            // 登录页
            window.$message.success("登陆成功");
            // console.log(response);
            let { jwtCode, lifeTime } = response.data.data;
            // 获取当前时间，将当前时间加上过期时间，得到实际过期时间戳
            let nowTime = new Date().getTime();
            // console.log(jwtCode, lifeTime, nowTime);
            let loginUserBaseInfo = {
              jwtCode: jwtCode,
              lifeTime: lifeTime + nowTime
            };
            console.log(loginUserBaseInfo);
            // 基本信息存到localStorage,里面包含过期时间和token
            // localStorage只能存字符串
            localStorage.setItem(
              "loginUserBaseInfo",
              JSON.stringify(loginUserBaseInfo)
            );
            router.push({
              path: "/"
            });
          })
          .catch(error => {
            console.log(error);
          });
      } 
      if (name === "register") {
        // 注册页
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
      }
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
}
</script>


<style lang="less" scoped>
.user-block {
  padding-top: 20px;
}

.username,
.password {
  margin-top: 10px;
  margin-bottom: 10px;
}

.user-title {
  padding-right: 10px;
}

.user-input {
  padding: 5px;
  width: 250px;
  border-radius: 4px;
  border: 1px solid #b2b2b8;
  // height: 30px;
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

.get-code-title {
  padding-left: 10px;
  color: @header-blue;
  cursor: pointer;
}

.submit-bar {
  margin-bottom: 100px;
  padding: 10px 0;
}

.user-submit {
  padding: 4px 22px;
  height: 30px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  background-color: @button-color;
  cursor: pointer;
}
</style>
