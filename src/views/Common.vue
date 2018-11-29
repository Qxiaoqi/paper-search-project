<template>
  <div>
    <TopNav></TopNav>
    <LeftNav></LeftNav>
    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from "@/components/top-nav/TopNav.vue";
import LeftNav from "@/components/left-nav/LeftNav.vue";

export default {
  name: "Common",
  components: {
    TopNav,
    LeftNav
  },
  watch: {
    // 监听路由变化，初始化vuex数据
    $route() {
      // console.log("watch");
      this.$store.dispatch("getKeyword", "");
      this.$store.dispatch("getPage", 1);
      this.$store.dispatch("getMonthCondition", []);
      this.$store.dispatch("getYearCondition", []);
      this.$store.dispatch("getSubjectCondition", []);
    }
  }
};
</script>

<style lang="less" scoped>
</style>
