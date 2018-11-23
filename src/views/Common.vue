<template>
  <div>
    <TopNav></TopNav>
    <LeftNav></LeftNav>
    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from "@/components/top-nav/TopNav.vue"
import LeftNav from "@/components/left-nav/LeftNav.vue";

export default {
  name: "Common",
  components: {
    TopNav,
    LeftNav
  }
};
</script>

<style lang="less" scoped>

</style>

