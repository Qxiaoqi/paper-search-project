<template>
  <div class="home">

    <!-- 左侧过滤组件 -->
    <LeftNav></LeftNav>

    <!-- 右侧 -->
    <div class="bfc main">
      <div class="bg-light-grey header">
        <span class="pl-20 header-title">已选条件：</span>
        <div class="main-header-conditions">
          <span class="conditions-item">2018</span>
          <span class="conditions-item">1月</span>
          <span class="conditions-item">MATERIALS SCIENCE</span>
        </div>
      </div>
      <div class="main-content">
        <div class="pl-20 bg-white header">
          <span class="header-title">ESI顶级论文</span>
          <div class="d-ib conntent-search-total">
            <span>共计</span>
            <span class="search-total-number">678</span>
            <span>条搜索结果</span>
          </div>
          <div class="d-ib content-sort-choice">
            <span class="pr-6">排序</span>
            <select name="" id="">
              <option value="">按时间升序</option>
              <option value="">按时间降序</option>
            </select>
          </div>
          <div class="d-ib content-tool-choice">
            <input type="checkbox">
            <span class="content-tool-choice-all">全选</span>
            <span class="content-tool-choice-export">导出</span>
          </div>
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
.header-title {
  line-height: 50px;
}

.header {
  height: 50px;
  font-size: 14px;
  border-bottom: 1px solid @border-color;
  box-sizing: border-box;
}

.main-header-conditions {
  display: inline-block;

  .conditions-item {
    margin-right: 10px;
    padding: 8px;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid @border-color;
  }
}

.main-content {

}

.conntent-search-total {
  margin-left: 50px;

  .search-total-number {
    padding: 0 5px;
  }
}

.content-sort-choice {
  margin-left: 50px;
}

.content-tool-choice {
  // 暂未解决
}
</style>
