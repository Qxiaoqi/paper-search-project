<template>
  <div>
    <div class="user">
      <div class="user-information">
        <!-- <span class="user-name">[用户名]</span> -->
        <div class="backstage-entrance"><router-link class="entrance-link" to="/management">后台入口</router-link></div>
      </div>
    </div>
    <div class="header">
      <div class="header-logo"></div>
    </div>
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
.user {
  height: 25px;
  line-height: 25px;
  padding-right: 30px;
  text-align: right;
  font-size: 13px;
  background-color: #1d335f;
  color: #e7e7e7;
}

.backstage-entrance {
  margin-left: 10px;

  .entrance-link {
    color: #ffffff;
    text-decoration: none;
  }
}

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
