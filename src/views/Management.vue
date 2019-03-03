<template>
  <div class="management-container">
    <!-- 左侧边栏选项 -->
    <div class="left">
      <div>
        <ul class="list-nav">
          <li class="list-item"><router-link class="link-item" to="/management/upload">文件上传</router-link></li>
          <li class="list-item"><router-link class="link-item" to="/management/delete">文件删除</router-link></li>
          <li class="list-item"><router-link class="link-item" to="/management/register">用户注册</router-link></li>
        </ul>
      </div>
    </div>
    <!-- 右侧 -->
    <div class="hidden main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Management"
};
</script>


<style lang="less" scoped>
.left {
  float: left;
  // 等高布局
  margin-bottom: -9999px;
  padding-bottom: 9999px;
  width: 300px;
  box-sizing: border-box;
  border-right: 1px solid @border-deep;
  background-color: @light-grey;
}

.list-nav {
  margin-top: 0;
  padding-left: 0;
}

.list-item {
  padding-left: 30px;
  height: 55px;
  line-height: 55px;
  list-style: none;
  font-size: 18px;
  font-weight: 600;
  box-sizing: border-box;
  border-bottom: 1px solid @border-light;

  .link-item {
    color: #b8b8b8;
    text-decoration: none;
  }

  .router-link-active {
    color: @font-color;
  }
}

.main {
  // 等高布局
  min-height: 500px;
  // background-color: @content-color;
}

.management-container {
  min-height: 400px;
  width: 100%;
  background-color: #ffffff;
  display: table;
}
</style>
