<template>
  <div class="management">
    <div class="title">
      <h1>用户注册</h1>
    </div>
    <div class="user-register">
      <div class="username">
        <span class="register-title username-title">账号</span>
        <input type="text" class="register-input username-input" v-model="username">
      </div>
      <div class="password">
        <span class="register-title password-title">密码</span>
        <input type="password" class="register-input password-input" v-model="password">
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
      password: ""
    };
  },
  methods: {
    registerSubmit() {
      let that = this;
      this.$api
        .register({
          userName: that.username,
          password: that.password
        })
        .then(response => {
          console.log(response);
          if (response.data.code === 200) {
            alert("注册成功");
          }
        })
        .catch(error => {
          console.log(error);
        });
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
