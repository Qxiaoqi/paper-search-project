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
            <span class="content-subtitle">Authors：{{ article.authors }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle">Source：{{ article.source }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle">Publication Date：{{ article.publicationDate }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle">Accession Number：{{ article.accessionNumber }}</span>
          </div>
          <div class="content-subtitle">
            Research Field：<span class="category-tag">{{ article.researchField }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle">DOI：{{ article.doi }}</span>
          </div>
        </div>
      </div>
      <div class="d-ib search-foot">
        <div class="search-cited-frequency">
          <i class="fa fa-trophy" aria-hidden="true"></i>
          <span> 被引频次：{{ article.citedFrequency }}</span>
        </div>
        <div class="search-tag">
          <i class="fa fa-tag" aria-hidden="true"></i>
          <span> 高被引论文</span>
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
      checkedId: "",
      articles: [
        {
          paperId: 1000001,
          elemNum: 1,
          accessionNumber: "WOS:000370925200004",
          doi: "10.1109/TPDS.2015.2401003",
          articleName:
            "Toward Efficient Multi-Keyword Fuzzy Search Over Encrypted Outsourced Data With Accuracy Improvement",
          authors: "Xia, Zhihua; Wang, Xinhui; Sun, Xingming; Wang, Qian",
          source: "IEEE TRANSACTIONS ON PARALLEL AND DISTRIBUTED SYSTEMS",
          researchField: "Computer Science",
          publicationDate: "2016",
          citedFrequency: "500"
        },
        {
          paperId: 1000002,
          elemNum: 2,
          accessionNumber: "WOS:000370925200004",
          doi: "10.1109/TPDS.2015.2401003",
          articleName:
            "Long-term impacts of aerosols on the vertical development of clouds and precipitation",
          authors: "Xia, Zhihua; Wang, Xinhui; Sun, Xingming; Wang, Qian",
          source: "IEEE TRANSACTIONS ON PARALLEL AND DISTRIBUTED SYSTEMS",
          researchField: "Computer Science",
          publicationDate: "2016",
          citedFrequency: "397"
        }
      ]
    };
  }
  // computed: {
  //   articles() {
  //     return this.$store.state.periodical.articleList;
  //   },
  //   // 获取当前展示所有文章id数组
  //   getCheckedArr() {
  //     return this.$store.state.checkedArticle.checkedArr;
  //   },
  //   // 获取checkbox当前绑定的数组
  //   checkedId: {
  //     get() {
  //       return this.$store.state.checkedArticle.checkedId;
  //     },
  //     set(val) {
  //       this.$store.dispatch("getCheckedId", val);
  //     }
  //   }
  // },
  // watch: {
  //   // 监听文章列表的全选是否发生变化
  //   checkedId() {
  //     if (this.checkedId.length == this.getCheckedArr.length) {
  //       this.$store.dispatch("getChecked", true);
  //     } else {
  //       this.$store.dispatch("getChecked", false);
  //     }
  //   }
  // }
};
</script>


<style lang="less" scoped>
@import "../common/Article.less";

.search-foot {
  width: 150px;
  display: table-cell;
  // vertical-align: middle;
  font-weight: 700;
}

.search-cited-frequency {
  .fa-trophy {
    color: rgb(255, 174, 0);
  }
}

.search-tag {
  padding-top: 5px;

  .fa-tag {
    color: @header-blue;
  }
}
</style>
