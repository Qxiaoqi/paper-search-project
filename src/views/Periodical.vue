<template>
  <div class="periodical-esi">

    <!-- 上部导航 -->
    <!-- <TopNav></TopNav> -->

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
      <PeriodicalList></PeriodicalList>

      <!-- 分页部分 -->
      <Pagination></Pagination>

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
// import TopNav from "@/components/top-nav/TopNav.vue"
// import LeftNav from "@/components/left-nav/LeftNav.vue";
import Condition from "@/components/condition/Condition.vue";
import PeriodicalList from "@/components/main/PeriodicalList.vue";
import MainHeader from "@/components/main/MainHeader.vue";
import Pagination from "@/components/main/Pagination.vue";

export default {
  name: "Periodical",
  components: {
    // TopNav,
    // LeftNav,
    Condition,
    PeriodicalList,
    MainHeader,
    Pagination
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
  text-align: right;
}

.chose-page {
  margin-right: 100px;
  padding-top: 20px;

  .page-up,
  .page-down {
    padding: 0 10px;
    vertical-align: -2px;
  }

  .current-page,
  .page-count {
    padding: 0 15px;
    margin: 0 5px;
    font-size: 13px;
  }

  .current-page {
    border-bottom: 2px solid @header-blue;
  }
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
