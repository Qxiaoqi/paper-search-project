<template>
  <div id="app">
    <div class="hidden clearfix container">
      <Head></Head>
      <div id="nav">
        <ul class="menu">
          <li class="menu-item">
            <router-link to="/" class="menu-item-link">ESI学科期刊</router-link>
            <i class="pl-5 fa fa-caret-down"></i>
          </li>
          <li class="menu-item">
            <router-link to="/" class="menu-item-link">ESI顶级论文</router-link>
            <i class="pl-5 fa fa-caret-down"></i>
          </li>
          <li class="menu-item">
            <router-link to="/" class="menu-item-link">基准线及被引阈值</router-link>
            <i class="pl-5 fa fa-caret-down"></i>
          </li>
          <li class="menu-item">
            <router-link to="/" class="menu-item-link">我校ESI学科信息</router-link>
            <i class="pl-5 fa fa-caret-down"></i>
          </li>
          <li class="menu-item">
            <router-link to="/" class="menu-item-link">我校ESI顶级论文</router-link>
            <i class="pl-5 fa fa-caret-down"></i>
          </li>
          <li class="menu-item">
            <router-link to="/" class="menu-item-link">我校高被引论文潜力值查询</router-link>
            <i class="pl-5 fa fa-caret-down"></i>
          </li>
        </ul>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Head from "@/components/head/Head.vue";

export default {
  components: {
    Head
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
  padding: 1em 0;
  text-align: center;
  border-bottom: 1px solid @border-deep;
}

.menu-item {
  margin: 0 20px;
  display: inline-block;
  list-style: none;
  cursor: pointer;
}

// a即router-link渲染后class
.menu-item-link {
  font-weight: bold;
  text-decoration: none;
  color: @font-color;
  // &.router-link-exact-active {
  //   color: #42b983;
  // }
}
</style>
