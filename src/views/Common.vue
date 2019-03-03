<template>
  <div class="clearfix">
    <TopNav></TopNav>
    <LeftNav></LeftNav>
    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from "@/components/top-nav/TopNav.vue";
import LeftNav from "@/components/left-nav/LeftNav.vue";
import getArticle from "@/components/common/getArticle";

export default {
  name: "Common",
  components: {
    TopNav,
    LeftNav
  },
  created() {
    console.log("create");
    // axios请求
    this.getArticaleData();
  },
  methods: {
    // axios获取数据
    getArticaleData() {
      let that = this;
      // =====================与过滤不同之处=========================
      // // 调用该函数，获取条件数组放入Vuex中
      // this.getConditions();
      // ===========================================================
      // 获取数据

      // 开始进行axios获取数据
      // 获取一级二级栏目数据，根据不同数据发送不同axiso
      let firDirectory = this.$route.name;
      let secDirectory = "";
      if (firDirectory === "periodical") {
        secDirectory = this.$route.params.periodicalTime;
      }
      // 如果是esi顶级论文
      if (firDirectory === "globalPaper") {
        secDirectory = this.$route.params.paperType;
      }
      // 如果是esi顶级论文
      if (firDirectory === "schoolPaper") {
        secDirectory = this.$route.params.paperType;
      }

      // 调用axios请求
      // esi期刊模块
      if (firDirectory === "periodical") {
        getArticle.getEsi(firDirectory, secDirectory);
      }
      // esi顶级论文模块
      if (firDirectory === "globalPaper") {
        getArticle.getGlobalPaper(firDirectory, secDirectory);
      }
      // 我校esi顶级论文模块
      if (firDirectory === "schoolPaper") {
        getArticle.getOurPaper(firDirectory, secDirectory);
      }

    }
  },
  watch: {
    // 监听路由变化，初始化vuex数据
    $route() {
      console.log("watch");
      this.$store.dispatch("getKeyword", "");
      this.$store.dispatch("getPage", 0);
      // this.$store.dispatch("getArticleTotal", 0);
      this.$store.dispatch("getIfDesc", true);
      this.$store.dispatch("getMonthCondition", []);
      this.$store.dispatch("getYearCondition", []);
      this.$store.dispatch("getSubjectCondition", []);

      // 请求获取数据
      this.getArticaleData();
    }
  }
};
</script>

<style lang="less" scoped>
</style>
