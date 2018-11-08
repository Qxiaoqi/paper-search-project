<template>
  <div id="app">
    <div class="container">
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
import Head from "@/components/Head.vue";

export default {
  components: {
    Head
  }
};

</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 1200px;
  box-sizing: border-box;
  color: #4b505a;
}

// .container {
//   margin-right: auto;
//   margin-left: auto;
//   width: 1200px;
// }

//bdc流体布局
.bfc {
  overflow: hidden;
}

.pl-20 {
  padding-left: 20px;
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

.d-ib {
  display: inline-block;
}

.bg-white {
  background-color: #ffffff;
}

.bg-light-grey {
  background-color: @light-grey;
}

.menu {
  margin: 0;
  padding: 1em 0;
  text-align: center;
  border-bottom: 1px solid @deep-grey;
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
