<template>
  <div id="nav">
    <ul class="menu">
      <li class="menu-item">
        <router-link to="/periodical/current" class="menu-item-link">ESI学科期刊</router-link>
        <i class="pl-5 fa fa-caret-down"></i>
        <ul class="sub-menu">
          <router-link to="/periodical/current" class="none-decoration"><li class="sub-menu-item">当期</li></router-link>
          <router-link to="/periodical/all" class="none-decoration"><li class="sub-menu-item">往期</li></router-link>
          <router-link to="/periodical/new" class="none-decoration"><li class="sub-menu-item">当期新增</li></router-link>
          <router-link to="/periodical/decrease" class="none-decoration"><li class="sub-menu-item">当期跌出</li></router-link>
        </ul>
      </li>
      <li class="menu-item">
        <router-link to="/globalPaper/highlyCited" class="menu-item-link">ESI顶级论文</router-link>
        <i class="pl-5 fa fa-caret-down"></i>
        <ul class="sub-menu">
          <router-link to="/globalPaper/highlyCited" class="none-decoration"><li class="sub-menu-item">高被引论文</li></router-link>
          <router-link to="/globalPaper/hotPaper" class="none-decoration"><li class="sub-menu-item">热点论文</li></router-link>
        </ul>
      </li>
      <li class="menu-item">
        <router-link to="/baseline" class="menu-item-link">基准线及被引阈值</router-link>
        <i class="pl-5 fa fa-caret-down"></i>
        <ul class="sub-menu">
          <router-link to="/baseline" class="none-decoration"><li class="sub-menu-item">百分位</li></router-link>
        </ul>
      </li>
      <!-- <li class="menu-item">
        <router-link to="/" class="menu-item-link">我校ESI学科信息</router-link>
        <i class="pl-5 fa fa-caret-down"></i>
        <ul class="sub-menu">
          <li class="sub-menu-item">已进入</li>
          <li class="sub-menu-item">未进入</li>
        </ul>
      </li> -->
      <li class="menu-item">
        <router-link to="/schoolPaper/highlyCited" class="menu-item-link">我校ESI顶级论文</router-link>
        <i class="pl-5 fa fa-caret-down"></i>
        <ul class="sub-menu">
          <router-link to="/schoolPaper/highlyCited" class="none-decoration"><li class="sub-menu-item">高被引论文</li></router-link>
          <router-link to="/schoolPaper/hotPaper" class="none-decoration"><li class="sub-menu-item">热点论文</li></router-link>
        </ul>
      </li>
      <li class="menu-item">
        <router-link to="/potential" class="menu-item-link">我校高被引论文潜力值查询</router-link>
        <i class="pl-5 fa fa-caret-down"></i>
        <ul class="sub-menu">
          <router-link to="/potential" class="none-decoration"><li class="sub-menu-item">被引频次</li></router-link>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopNav"
};
</script>

<style lang="less" scoped>
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
  margin: 0 25px;
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
  z-index: 10;
  top: 49px;
  min-width: 150px;
  padding-left: 0;
  display: none;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  text-align: left;

  .sub-menu-item {
    padding: 0 26px;
    height: 40px;
    line-height: 40px;
    list-style: none;
    color: #4b505a;

    &:hover {
      background-color: #ececec;
    }
  }
}
</style>
