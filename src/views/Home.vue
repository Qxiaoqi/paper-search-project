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
      <div class="main-content">
        <div class="pl-20 header">
          <span class="header-title">ESI顶级论文</span>
          <div class="d-ib conntent-search-total">
            <span>共计</span>
            <span class="search-total-number">678</span>
            <span>条搜索结果</span>
          </div>
          <div class="d-ib content-sort-choice">
            <span class="content-sort-choice-title">排序</span>
            <select name="" id="" class="sort-select">
              <option value="">按时间升序</option>
              <option value="">按时间降序</option>
            </select>
          </div>
          <!-- 期刊时间选择（只有期刊页面才有该组件） -->
          <div class="d-ib periodical-time-choice">
            <button class="choice-item">当期</button>
            <button class="choice-item">往期</button>
            <button class="choice-item">当期新增</button>
            <button class="choice-item">当期跌出</button>
          </div>

          <div class="d-ib content-tool-choice">
            <input type="checkbox" id="all-choice-checkbox" class="content-tool-choice-checkbox">
            <label for="all-choice-checkbox" class="content-tool-choice-all">全选</label>
            <span class="pl-5 content-tool-choice-export">导出</span>
          </div>
        </div>
      </div>

      <!-- 搜索结果 -->
      <Periodical></Periodical>
      <Periodical></Periodical>
      <Periodical></Periodical>
      <Periodical></Periodical>
      <Periodical></Periodical>
      <Periodical></Periodical>
      <Periodical></Periodical>
      <Periodical></Periodical>
      <Periodical></Periodical>
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

export default {
  name: "home",
  components: {
    // LeftNav,
    Condition,
    Periodical
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

.header-title {
  line-height: 50px;
  font-weight: 600;
}

.header {
  height: 50px;
  font-size: 14px;
  border-bottom: 1px solid @border-deep;
  box-sizing: border-box;
}

.conntent-search-total {
  margin-left: 50px;

  .search-total-number {
    padding: 0 5px;
  }
}

.content-sort-choice {
  margin-left: 50px;

  .content-sort-choice-title {
    padding-right: 8px;
    font-weight: 600;
  }

  .sort-select {
    vertical-align: -2px;
  }
}

.content-tool-choice {
  float: right;
  margin-right: 30px;
  line-height: 50px;

  .content-tool-choice-checkbox {
    vertical-align: -1px;
  }
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

// 期刊时间选择
.periodical-time-choice {
  margin-left: 20px;

  .choice-item {
    margin-right: 10px;
    padding: 8px;
    background-color: #ffffff;
    border: 1px solid @border-light;
    border-radius: 4px;
  }
}
</style>
