<template>
  <div class="pl-20 search-results">
    <div class="search-item" v-for="(article, index) in articles" :key="index">
      <div class="d-ib search-checkbox">
        <input type="checkbox" :id="article.esiId" :value="article.esiId" v-model="checkedId">
        <label :for="article.esiId" class="checkbox-custom"></label>
      </div>
      <div class="d-ib search-number">{{ article.elemNum }}.</div>
      <div class="d-ib search-main">
        <h4 class="search-title">{{ article.fullTitle }}</h4>
        <div class="search-content">
          <span class="content-subtitle">Title29：{{ article.title29 }}</span>
          <span class="content-subtitle">Title20：{{ article.title20 }}</span>
          <span class="content-subtitle">ISSN：{{ article.issn }}</span>
          <span class="content-subtitle">EISSN：{{ article.eissn }}</span>
          <div class="content-subtitle">
            CategoryName：<span class="category-tag">{{ article.categoryName }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PeriodicalList",
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
.search-results {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
}

.search-item {
  display: table;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-right: 20px;
}

.search-checkbox {
  width: 30px;
  vertical-align: top;
  display: table-cell;

  input {
    display: none;
  }

  input[type="checkbox"]:checked + .checkbox-custom {
    background: url("../../assets/check.png") no-repeat;
    background-size: 100%;
  }

  .checkbox-custom {
    width: 16px;
    height: 16px;
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid @border-light;
    border-radius: 4px;
    background-color: #ffffff;
    cursor: pointer;
  }
}

.search-number {
  width: 45px;
  vertical-align: top;
  display: table-cell;
}

.search-main {
  display: table-cell;
}

.search-main {
  .search-title {
    color: @header-blue;
    font-size: 15px;
  }
}

.search-content {
  margin-top: 15px;

  .content-subtitle {
    margin-right: 15px;
    font-size: 13px;
  }

  .category-tag {
    background-color: @header-blue;
    color: #ffffff;
    border-radius: 4px;
    padding: 2px 5px;
  }
}
</style>
