<template>
  <div class="baseline">
    <!-- 右侧 -->
    <!-- bdc流体布局 -->
    <div class="hidden main">
      <!-- 已选条件头 -->
      <Condition></Condition>
      <!-- 结果标题头 -->  
      <div class="pl-20 header">
        <span class="header-title">基准线和被引阈值</span>
        <span class="header-title"> >> 百分位</span>
      </div>

      <BaseLineList></BaseLineList>

      <!-- 搜索结果 -->
      <!-- <PeriodicalList></PeriodicalList> -->

      <!-- 分页部分 -->
      <!-- <Pagination></Pagination> -->

      <!-- 搜索结果部分 -->
      <!-- <SearchNumberBar></SearchNumberBar> -->

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Condition from "@/components/condition/Condition.vue";
import BaseLineList from "@/components/baseline/BaseLineList.vue";
// import PeriodicalList from "@/components/main/PeriodicalList.vue";
// import Pagination from "@/components/main/Pagination.vue";
// import SearchNumberBar from "@/components/main/SearchNumberBar.vue";

export default {
  name: "Baseline",
  components: {
    Condition,
    BaseLineList
    // PeriodicalList,
    // Pagination,
    // SearchNumberBar
  }
};
</script>

<style lang="less">
.header-title {
  line-height: 50px;
  font-weight: bold;
}

.header {
  height: 50px;
  font-size: 14px;
  border-bottom: 1.5px solid @border-light;
  box-sizing: border-box;
}
</style>
