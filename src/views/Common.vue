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
      this.$api.search
        .searchAll()
        .then(response => {
          // console.log(that.$store.state.conditions.subjectCondition);
          console.log(response);
          console.log(response.data.data);
          // ES6变量解构
          let { totalElemNums, data } = response.data.data;
          let articleTotal = totalElemNums;
          let articleList = data;
          // map遍历文章数组，取出esiId属性重新组成数组
          let checkedArr = articleList.map(obj => obj.esiId);

          // 提交文章数量和文章列表
          that.$store.dispatch("getArticleTotal", articleTotal);
          that.$store.dispatch("getArticleListList", articleList);
          // 提交文章id数组
          that.$store.dispatch("getCheckedArr", checkedArr);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  watch: {
    // 监听路由变化，初始化vuex数据
    $route() {
      console.log("watch");
      this.$store.dispatch("getKeyword", "");
      this.$store.dispatch("getPage", 0);
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
