<template>
  <div class="pl-20 search-results">
    <div class="search-item" v-for="(article, index) in articles" :key="index">
      <div class="d-ib search-checkbox">
        <input type="checkbox" :id="article.incitesId" :value="article.incitesId" v-model="checkedId">
        <label :for="article.incitesId" class="checkbox-custom"></label>
      </div>
      <div class="d-ib search-number">{{ article.elemNum }}.</div>
      <div class="d-ib search-main">
        <h4 class="search-title">{{ article.articleName }}</h4>
        <div class="search-content">
          <div class="content-subtitle">
            <span class="content-subtitle">Authors：{{ article.authors }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle">Source：{{ article.sources }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle">Publication Date：{{ article.publicationDate }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle">Accession Number：{{ article.accessionNumber }}</span>
          </div>
          <div class="content-subtitle">
            Research Field：<span class="category-tag">{{ article.categoryName }}</span>
          </div>
          <div class="content-subtitle">
            <span class="content-subtitle">DOI：{{ article.doi }}</span>
          </div>
        </div>
      </div>
      <div class="d-ib search-foot">
        <div class="search-cited-frequency">
          <i class="fa fa-trophy" aria-hidden="true"></i>
          <span v-if="article.valueType !== 0"> 被引频次：{{ article.citedTimes }}</span>
          <span v-if="article.valueType === 0"> 潜力值：{{ article.value }}</span>
        </div>
        <div class="search-tag" v-if="article.valueType === 2 || article.valueType === 3">
          <i class="fa fa-tag fa-blue" aria-hidden="true"></i>
          <span> 高被引论文</span>
        </div>
        <div class="search-tag" v-if="article.valueType === 1 || article.valueType === 3">
          <i class="fa fa-tag fa-yellow" aria-hidden="true"></i>
          <span> 热点论文</span>
        </div>
        <!-- <div class="search-tag" v-if="article.valueType === 0">
          <i class="fa fa-tag fa-grey" aria-hidden="true"></i>
          <span> 非高被引/热点</span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IncitesList",
  data() {
    return {
    };
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
};
</script>


<style lang="less" scoped>
@import "../common/Article.less";

.search-foot {
  width: 150px;
  display: table-cell;
  font-weight: 700;
  padding-left: 20px;
}

.search-cited-frequency {
  .fa-trophy {
    color: rgb(255, 174, 0);
  }
}

.search-tag {
  padding-top: 5px;

  // .fa-tag {
  //   color: @header-blue;
  // }

  .fa-blue {
    color: @header-blue;
  }

  .fa-yellow {
    color: rgb(255, 0, 0);
  }

  .fa-grey {
    color: grey;
  }
}
</style>
