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
      if (this.current < this.pageCount) {
        this.current++;
        this.getArticaleData();
      }
    },
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

          // 点击翻页后，要初始化Vuex中的checkedId
          that.$store.dispatch("getCheckedId", []);
        })
        .catch(error => {
          console.log(error);
        });
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
