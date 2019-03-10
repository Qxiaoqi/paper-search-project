<template>
  <div class="pagination-bar">
    <div class="chose-page">
      <i class="fa fa-caret-left fa-lg page-up" @click="pageUp()"></i>
      <span class="current-page">{{ current + 1 }}</span>
      <span>/</span>
      <span class="page-count">{{ pageCount }}</span>
      <i class="fa fa-caret-right fa-lg page-down" @click="pageDown()"></i>
    </div>
  </div>
</template>

<script>
import getArticle from "../common/getArticle";
import getIncites from "@/components/common/getIncites";

export default {
  name: "Pagination",
  computed: {
    current: {
      get() {
        return this.$store.state.conditions.page;
      },
      set(val) {
        this.$store.dispatch("getPage", val);
      }
    },
    pageCount() {
      let articleTotal = this.$store.state.periodical.articleTotal;
      // 页码向上取整
      let pageCount = Math.ceil(articleTotal / 10);
      return pageCount;
    }
  },
  methods: {
    // 向前翻页
    pageUp() {
      if (this.current > 0) {
        this.current--;
        this.getArticaleData();
      }
    },
    // 向后翻页
    pageDown() {
      if ((this.current + 1) < this.pageCount) {
        this.current++;
        this.getArticaleData();
      }
    },
    // axios获取数据
    getArticaleData() {
      // let that = this;
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
      // 我校潜力值模块
      if (firDirectory === "potential") {
        getIncites.getIncitesData();
      }

    }
  }
};
</script>

<style lang="less" scoped>
// 分页部分
.pagination-bar {
  height: 80px;
  border-top: 1px solid @border-light;
  background-color: @light-grey;
  text-align: right;
}

.chose-page {
  margin-right: 100px;
  padding-top: 20px;

  .page-up,
  .page-down {
    padding: 0 10px;
    vertical-align: -2px;
    cursor: pointer;
  }

  .current-page,
  .page-count {
    padding: 0 15px;
    margin: 0 5px;
    font-size: 13px;
  }

  .current-page {
    border-bottom: 2px solid @header-blue;
  }
}
</style>
