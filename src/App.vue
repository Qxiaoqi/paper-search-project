<template>
  <div id="app">
    <div class="hidden clearfix container">
      <Head></Head>
      <!-- 左侧过滤栏 -->
      <!-- <LeftNav></LeftNav> -->
      <router-view/>
      <!-- 尾部 -->
      <div class="hidden footer">
        <div class="footer-logo"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Head from "@/components/head/Head.vue";
// import LeftNav from "@/components/left-nav/LeftNav.vue";

export default {
  components: {
    Head
    // LeftNav
  }
};
</script>

<style lang="less">
// 自定义-webkit-前缀的浏览器滚动条样式
::-webkit-scrollbar {
  // 宽度
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-thumb {
  // 拖动条
  background-color: rgba(0, 0, 0, .3);
  border-radius: 6px;
}

::-webkit-scrollbar-track {
  // 背景槽
  background-color: #dddddd;
  border-radius: 6px;
}

#app {
  font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  color: @font-color;
  background-color: @content-color;
  line-height: 1.42858;
  font-size: 14px;
}

.container {
  margin-right: auto;
  margin-left: auto;
  max-width: 1300px;
  min-width: 1100px;
  box-shadow: 0 -5px 10px -3px #3f3f3f;
}

.main {
  // 等高布局
  margin-bottom: -9999px;
  padding-bottom: 9999px;
  min-height: 800px;
  background-color: @content-color;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0 !important;
}

.hidden {
  overflow: hidden;
}

.d-ib {
  display: inline-block;
}

.pl-20 {
  padding-left: 20px;
}

.pl-25 {
  padding-left: 25px;
}

.pl-5 {
  padding-left: 5px;
}

.pr-6 {
  padding-right: 6px;
}

.ml-20 {
  margin-left: 20px;
}

.bg-white {
  background-color: #ffffff;
}

.bg-light-grey {
  background-color: @light-grey;
}

.none-decoration {
  text-decoration: none;
}

.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.clearfix {
  zoom: 1;
}

// 尾部
.footer {
  position: relative;
  height: 100px;
  background-color: @header-blue;

  .footer-logo {
    margin: 25px 0 0 220px;
    // height: 40px;
    // width: 245px;
    background: url("./assets/logo.png") no-repeat;
    background-size: 100%;
  }
}
</style>
