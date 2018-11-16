<template>
  <div id="app">
    <div class="hidden clearfix container">
      <Head></Head>
      <div id="nav">
        <ul class="menu">
          <li class="menu-item">
            <router-link to="/" class="menu-item-link">ESI学科期刊</router-link>
            <!-- <i class="pl-5 fa fa-caret-down"></i> -->
          </li>
          <li class="menu-item">
            <router-link to="/" class="menu-item-link">ESI顶级论文</router-link>
            <i class="pl-5 fa fa-caret-down"></i>
            <ul class="sub-menu">
              <li class="sub-menu-item">高被引论文</li>
              <li class="sub-menu-item">热点论文</li>
            </ul>
          </li>
          <li class="menu-item">
            <router-link to="/" class="menu-item-link">基准线及被引阈值</router-link>
            <i class="pl-5 fa fa-caret-down"></i>
            <ul class="sub-menu">
              <li class="sub-menu-item">百分位</li>
              <!-- <li class="sub-menu-item">2</li> -->
              <!-- <li class="sub-menu-item">3</li> -->
            </ul>
          </li>
          <li class="menu-item">
            <router-link to="/" class="menu-item-link">我校ESI学科信息</router-link>
            <i class="pl-5 fa fa-caret-down"></i>
            <ul class="sub-menu">
              <li class="sub-menu-item">已进入</li>
              <li class="sub-menu-item">未进入</li>
            </ul>
          </li>
          <li class="menu-item">
            <router-link to="/" class="menu-item-link">我校ESI顶级论文</router-link>
            <i class="pl-5 fa fa-caret-down"></i>
            <ul class="sub-menu">
              <li class="sub-menu-item">高被引论文</li>
              <li class="sub-menu-item">热点论文</li>
            </ul>
          </li>
          <li class="menu-item">
            <router-link to="/" class="menu-item-link">我校高被引论文潜力值查询</router-link>
            <i class="pl-5 fa fa-caret-down"></i>
          </li>
        </ul>
      </div>
      <!-- 左侧过滤栏 -->
      <LeftNav></LeftNav>
      <router-view/>
      <!-- 尾部 -->
      <div class="footer">
        <div class="footer-logo"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Head from "@/components/head/Head.vue";
import LeftNav from "@/components/left-nav/LeftNav.vue";

export default {
  components: {
    Head,
    LeftNav
  }
};
</script>

<style lang="less">
#app {
  font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  color: #4b505a;
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

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
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

.menu {
  margin: 0;
  padding: 0;
  height: 50px;
  line-height: 50px;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 1px solid @border-deep;
}

.menu-item {
  position: relative;
  margin: 0 20px;
  display: inline-block;
  list-style: none;
  cursor: pointer;

  &:hover .sub-menu {
    display: block;
  }
}

// a即router-link渲染后class
.menu-item-link {
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  color: @font-color;
  // &.router-link-exact-active {
  //   color: #42b983;
  // }
}

.sub-menu {
  position: absolute;
  top: 49px;
  min-width: 150px;
  padding-left: 0;
  display: none;
  background-color: #ffffff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  text-align: left;

  .sub-menu-item {
    padding: 0 26px;
    height: 40px;
    line-height: 40px;
    list-style: none;

    &:hover {
      background-color: #e3edf7;
    }
  }
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
