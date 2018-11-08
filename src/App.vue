<template>
  <div id="app">
    <div class="header">
      <div class="header-logo"></div>
    </div>
    <div id="nav">
      <ul class="menu">
        <li class="menu-link">
          <router-link to="/">ESI学科期刊</router-link>
          <i class="fa fa-caret-down"></i>
        </li>
        <li class="menu-link">
          <router-link to="/">ESI顶级论文</router-link>
          <i class="fa fa-caret-down"></i>
        </li>
        <li class="menu-link">
          <router-link to="/">基准线及被引阈值</router-link>
          <i class="fa fa-caret-down"></i>
        </li>
        <li class="menu-link">
          <router-link to="/">我校ESI学科信息</router-link>
          <i class="fa fa-caret-down"></i>
        </li>
        <li class="menu-link">
          <router-link to="/">我校ESI顶级论文</router-link>
          <i class="fa fa-caret-down"></i>
        </li>
        <li class="menu-link">
          <router-link to="/">我校高被引论文潜力值查询</router-link>
          <i class="fa fa-caret-down"></i>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 1200px;
  box-sizing: border-box;
  color: #4b505a;
}






.menu {
  padding-left: 0;
  text-align: center;

  .menu-link {
    margin: 0 20px;
    display: inline-block;
    list-style: none;
    cursor: pointer;

    // a即router-link渲染后class
    a {
      font-weight: bold;
      text-decoration: none;
      color: @font-color;
      // &.router-link-exact-active {
      //   color: #42b983;
      // }
    }

    i {
      padding-left: 5px;
    }
  }
}

.header {
  overflow: hidden; //格式化父元素防止logo设置margin发生合并
  height: 130px;
  background-color: @header-color;

  .header-logo {
    margin: 25px 0 0 220px;
    height: 80px;
    width: 490px;
    background: url("./assets/logo.png") no-repeat;
  }
}
</style>
