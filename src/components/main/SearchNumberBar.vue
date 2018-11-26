<template>
  <div class="search-number-bar">
    <span>其中有 </span>
    <span> {{ getArticleTotal }} </span>
    <span> 条记录与检索式相匹配。</span>
  </div>
</template>

<script>
export default {
  name: "SearchNumberBar",
  computed: {
    // 获取文章总数
    getArticleTotal() {
      return this.$store.getters.separated;
    }
  }
};
</script>


<style lang="less" scoped>
.search-number-bar {
  height: 50px;
  line-height: 50px;
  padding-left: 25px;
  font-style: italic;
  border-top: 1px solid @border-light;
}
</style>
