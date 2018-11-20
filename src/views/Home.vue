<template>
  <div class="home">

    <!-- 左侧过滤组件 -->
    <!-- <LeftNav></LeftNav> -->

    <!-- 右侧 -->
    <!-- bdc流体布局 -->
    <div class="hidden main">
      <!-- 已选条件头 -->
      <Condition></Condition>
      <!-- 结果标题头 -->  
      <MainHeader title="periodicalESI"></MainHeader>

      <!-- 搜索结果 -->
      <Periodical></Periodical>


      <!-- 分页部分 -->
      <div class="pagination-bar">

      </div>

      <!-- 搜索结果部分 -->
      <div class="search-number-bar">
        <span>其中有 </span>
        <span>6,457,380</span>
        <span> 条记录与检索式相匹配。</span>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import LeftNav from "@/components/left-nav/LeftNav.vue";
import Condition from "@/components/condition/Condition.vue";
import Periodical from "@/components/main/Periodical.vue";
import MainHeader from "@/components/main/MainHeader.vue";

export default {
  name: "home",
  components: {
    // LeftNav,
    Condition,
    Periodical,
    MainHeader
  }
};
</script>

<style lang="less">
//=================== 右侧 ====================
.main {
  // 等高布局
  margin-bottom: -9999px;
  padding-bottom: 9999px;
  min-height: 800px;
  background-color: @content-color;
}

// 分页部分
.pagination-bar {
  height: 80px;
  border-top: 1px solid @border-light;
  background-color: @light-grey;
}

// 搜索结果部分
.search-number-bar {
  height: 50px;
  line-height: 50px;
  padding-left: 25px;
  font-style: italic;
  border-top: 1px solid @border-light;
}
</style>
