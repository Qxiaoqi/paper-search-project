<template>
  <div class="bg-light-grey left">
    <div class="pl-25 left-title">
      <h2 class="left-title-txt">关键词检索</h2>
    </div>
    <div class="left-search">
      <div class="search-content">
        <span class="serach-icon">
          <i class="fa fa-search"></i>
        </span>
        <input type="text" class="search-input">
      </div>
    </div>
    <div class="pl-25 left-title">
      <h2 class="left-title-txt">分类检索</h2>
    </div>
    <div class="left-filter">
      <!-- 月份组件是单独固定的 -->
      <Month></Month>
      <!-- 三个后面都可以合成一个，最后改动一下 -->
      <FilterForm></FilterForm>

    </div>
  </div>
</template>

<script>
import Month from "./Month.vue";
import FilterForm from "./FilterForm.vue";

export default {
  name: "LeftNav",
  components: {
    Month,
    FilterForm
  }
  // props: {
  //   msg: String
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// ================== 左侧 ====================
.left {
  float: left;
  // 等高布局
  margin-bottom: -9999px;
  padding-bottom: 9999px;
  width: 300px;
  box-sizing: border-box;
  border-right: 1px solid @border-deep;
}

.left-title {
  // padding-left: 25px;
  height: 55px;
  // background-color: @deep-grey;
  border-top: 1px solid @border-light;
  border-bottom: 1px solid @border-light;
  border-left: 4px solid @header-blue;
  box-sizing: border-box;

  .left-title-txt {
    line-height: 55px;
    font-size: 18px;
    font-weight: bold;
  }
}

.left-search {
  height: 80px;
  overflow: hidden;
}

.search-content {
  margin: 20px 0 0 24px;
  height: 40px;
  width: 250px;
  border: 1px solid @border-deep;
  border-radius: 4px;
  background-color: #ffffff;
}

.serach-icon {
  height: 40px;
  width: 40px;
  display: inline-block;
  text-align: center;
  border-radius: 4px;

  .fa-search {
    font-size: 1.5em;
    vertical-align: -2px;
  }
}

.search-input {
  height: 40px;
  width: 210px;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
}
</style>
