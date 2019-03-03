<template>
  <div class="pl-20 search-results">
    <div class="search-item" v-for="(article, index) in articles" :key="index">
      <div class="d-ib search-checkbox">
        <input type="checkbox" :id="article.paperId" :value="article.paperId" v-model="checkedId">
        <label :for="article.paperId" class="checkbox-custom"></label>
      </div>
      <div class="d-ib search-number">{{ article.elemNum }}.</div>
      <div class="d-ib search-main">
        <h4 class="search-title">{{ article.articleName }}</h4>
        <div class="search-content">
          <div class="content-subtitle">
            <span class="content-subtitle content-text"><b>Authors：</b>{{ article.authors }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle content-text"><b>Source：</b>{{ article.source }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle content-text"><b>Times Cited：</b>{{ article.timesCited }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle content-text"><b>Countries：</b>{{ article.countries }}</span>
          </div>
          <!-- <div class="content-subtitle test">
            <span class="content-subtitle content-text"><b>Addresses：</b>{{ article.addresses }}</span>
          </div> -->
          <!-- <div class="content-subtitle">
            <span class="content-subtitle content-text"><b>Institutions：</b>{{ article.institutions }}</span>
          </div> -->
          <div class="content-subtitle">
            <span class="content-subtitle content-text"><b>Publication Date：</b>{{ article.publicationDate }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle content-text"><b>Accession Number：</b>{{ article.accessionNumber }}</span>
          </div>
          <div class="content-subtitle">
            <b>Research Field：</b><span class="category-tag">{{ article.researchField }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle content-text"><b>DOI：</b>{{ article.doi }}</span>
          </div>
          <!-- <div class="content-subtitle">
            <span class="content-subtitle content-text"><b>PMID：</b>{{ article.pmid }}</span>
          </div> -->
          <div class="content-subtitle">
            <span class="content-subtitle content-text"><b>版本号：</b>{{ article.year }}-{{ article.month }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaperList",
  data() {
    return {

    }
  },
  computed: {
    articles() {
      return this.$store.state.periodical.articleList;
    },
    // 获取当前展示所有文章id数组
    getCheckedArr() {
      return this.$store.state.checkedArticle.checkedArr;
    },
    // 获取checkbox当前绑定的数组
    checkedId: {
      get() {
        return this.$store.state.checkedArticle.checkedId;
      },
      set(val) {
        this.$store.dispatch("getCheckedId", val);
      }
    }
  },
  watch: {
    // 监听文章列表的全选是否发生变化
    checkedId() {
      if (this.checkedId.length == this.getCheckedArr.length) {
        this.$store.dispatch("getChecked", true);
      } else {
        this.$store.dispatch("getChecked", false);
      }
    }
  }

}
</script>


<style lang="less" scoped>
@import "../common/Article.less";
</style>

