<template>
  <div class="management-container">
    <div class="management">
      <div class="title">
        <h1>文件上传</h1>
      </div>
      <div class="upload-bar">
        <input type="file">
      </div>
      <!-- <div class="login-bar">
        <div class="sub-title">
          <h2>用户登录</h2>
        </div>
        <div class="user-login">
          <div class="username">
            <span class="login-title username-title">账号</span>
            <input type="text" class="login-input username-input">
          </div>
          <div class="password">
            <span class="login-title password-title">密码</span>
            <input type="text" class="login-input password-input">
          </div>
        </div>
        <div class="submit-bar">
          <span class="login-title" style="visibility: hidden;">登录</span>
          <button class="login-submit">登录</button>
        </div>
      </div> -->
    </div>

  </div>
</template>

<style lang="less" scoped>
.management-container {
  min-height: 400px;
  width: 100%;
  background-color: #ffffff;
  display: table;
  border-top: 20px solid @content-color;
}

.management {
  padding: 45px;
}

</style>
