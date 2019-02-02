<template>
  <div class="potential">

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
      <MainHeader></MainHeader>

      <!-- 搜索结果 -->
      <PotentialList></PotentialList>

      <!-- 分页部分 -->
      <Pagination></Pagination>

      <!-- 搜索结果部分 -->
      <SearchNumberBar></SearchNumberBar>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import TopNav from "@/components/top-nav/TopNav.vue"
// import LeftNav from "@/components/left-nav/LeftNav.vue";
import Condition from "@/components/condition/Condition.vue";
import PotentialList from "@/components/potential/PotentialList.vue";
import MainHeader from "@/components/main/MainHeader.vue";
import Pagination from "@/components/main/Pagination.vue";
import SearchNumberBar from "@/components/main/SearchNumberBar.vue";

export default {
  name: "Potential",
  components: {
    // TopNav,
    // LeftNav,
    Condition,
    PotentialList,
    MainHeader,
    Pagination,
    SearchNumberBar
  }
};
</script>

<style lang="less">
//=================== 右侧 ====================
// .main {
//   // 等高布局
//   margin-bottom: -9999px;
//   padding-bottom: 9999px;
//   min-height: 800px;
//   background-color: @content-color;
// }
</style>
