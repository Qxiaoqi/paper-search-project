<template>
  <div>
    <div class="user">
      <div class="user-information" v-if="isLinkRender">
        <!-- <span class="user-name">[用户名]</span> -->
        <div class="d-ib link-entrance"><router-link class="link-font" to="/login">切换用户</router-link></div>
        <div class="d-ib link-entrance" v-if="isIndexRender"><router-link class="link-font" to="/">返回主页</router-link></div>
        <div class="d-ib link-entrance"><router-link class="link-font" to="/management/upload">后台入口</router-link></div>
      </div>
    </div>
    <div class="header">
      <div class="header-logo"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  computed: {
    isLinkRender() {
      // 登陆页面不显示用户切换和后台入口
      // console.log(this.$route.name)
      let isRender = true;
      this.$route.name === "login" ? (isRender = false) : (isRender = true);
      return isRender;
    },
    isIndexRender() {
      let isRender = true;
      let url = this.$route.path.split("/")[1];
      // console.log(url);
      url === "management" ? (isRender = true) : (isRender = false);
      return isRender;
    }
  }
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

.link-entrance {
  margin-left: 10px;

  .link-font {
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
