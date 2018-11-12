<template>
  <div class="header">
    <div class="header-logo"></div>
  </div>
</template>

<script>
export default {
  name: "Head"
  // props: {
  //   msg: String
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// ================== 左侧 ====================
.header {
  overflow: hidden; //格式化父元素防止logo设置margin发生合并
  height: 130px;
  background-color: @header-blue;

  .header-logo {
    margin: 25px 0 0 220px;
    height: 80px;
    width: 490px;
    background: url("../../assets/logo.png") no-repeat;
  }
}
</style>
