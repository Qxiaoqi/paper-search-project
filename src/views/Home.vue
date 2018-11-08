<template>
  <div class="home">

    <!-- 左侧过滤组件 -->
    <LeftNav></LeftNav>

    <!-- 右侧 -->
    <div class="bfc right">
      <div class="right-header">
        <span class="right-header-title">已选条件：</span>
        <div class="selected-conditions">
          <span>2018</span>
          <span>1月</span>
          <span>MATERIALS SCIENCE</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import LeftNav from "@/components/LeftNav.vue";

export default {
  name: "home",
  components: {
    LeftNav
  }
};
</script>

<style lang="less">
//=================== 右侧 ====================
//bdc流体布局
.bfc {
  overflow: hidden;
}

.right-header {
  height: 50px;
  background-color: @light-grey;
  font-size: 14px;

  .right-header-title {
    padding-left: 20px;
    line-height: 50px;
  }

  .selected-conditions {
    display: inline-block;

    span {
      margin-right: 10px;
      padding: 8px;
      background: #ffffff;
      border-radius: 4px;
      border: 1px solid @border-color;
    }
  }
}
</style>
