<template>
  <div class="bg-light-grey left">
    <div class="left-title">
      <span class="left-title-txt">关键词检索</span>
    </div>
    <div class="left-search">
      <div class="search-content">
        <span class="serach-icon">
          <i class="fa fa-search"></i>
        </span>
        <input type="text" class="search-input">
      </div>
    </div>
    <div class="left-title">
      <span class="left-title-txt">分类检索</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftNav",
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
  width: 300px;
  min-height: 1000px;
  box-sizing: border-box;
  border-right: 1px solid @border-color;
}

.left-title {
  padding-left: 20px;
  height: 50px;
  background-color: @deep-grey;

  .left-title-txt {
    line-height: 50px;
    font-size: 16px;
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
  border: 1px solid @border-grey;
  border-radius: 8px;
  background-color: #ffffff;
}

.serach-icon {
  height: 40px;
  width: 40px;
  display: inline-block;
  text-align: center;
  border-radius: 8px;

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
  border-radius: 8px;

  &:focus {
    outline: none;
  }
}
</style>
