<template>
  <div class="pagination-bar">
    <div class="chose-page">
      <i class="fa fa-caret-left fa-lg page-up" @click="pageUp()"></i>
      <span class="current-page">{{ current }}</span>
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
      let pageCount = Math.ceil(articleTotal / 1);
      return pageCount;
    }
  },
  methods: {
    pageUp() {
      if (this.current > 1) {
        this.current--;
      }
    },
    pageDown() {
      if (this.current < this.pageCount) {
        this.current++;
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
