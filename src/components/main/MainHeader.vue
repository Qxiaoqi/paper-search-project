<template>
  <div class="main-content">
  <div class="pl-20 header">
    <span class="header-title">{{ mainTitle }}</span>
    <div class="d-ib conntent-search-total">
      <span>共计</span>
      <span class="search-total-number">{{ getArticleTotal }}</span>
      <span>条搜索结果</span>
    </div>
    <div class="d-ib content-sort-choice">
      <span class="content-sort-choice-title">排序</span>
      <select name="" id="" class="sort-select">
        <option value="">按时间升序</option>
        <option value="">按时间降序</option>
      </select>
    </div>
    <!-- 期刊时间选择（只有期刊页面才有该组件） -->
    <!-- <PeriodicalTime v-if="isPeriodical"></PeriodicalTime> -->

    <div class="d-ib content-tool-choice">
      <input type="checkbox" id="all-choice-checkbox" class="content-tool-choice-checkbox" v-model="checkedAll" @change="changeAllChecked()">
      <label for="all-choice-checkbox" class="content-tool-choice-all">全选</label>
      <span class="pl-5 content-tool-choice-export">导出</span>
    </div>
  </div>
</div>
</template>

<script>
import PeriodicalTime from "@/components/condition/PeriodicalTime.vue";

export default {
  name: "MainHeader",
  components: {
    PeriodicalTime
  },
  props: {
    title: String
  },
  computed: {
    isPeriodical() {
      return this.title === "periodicalESI" ? true : false;
    },
    // 通过组件名称获取对应中文标题
    mainTitle() {
      const mainTxt = {
        periodicalESI: "ESI学科期刊"
        // timeYear: "版本号（年）",
        // categorySubject: "学科类别"
      };
      return mainTxt[this.title];
    },
    // 获取文章总数
    getArticleTotal() {
      return this.$store.getters.separated;
    },
    // 获取当前展示所有文章id数组
    getCheckedArr() {
      return this.$store.state.checkedArticle.checkedArr;
    },
    // 获取全选布尔值
    checkedAll: {
      get() {
        return this.$store.state.checkedArticle.checked;
      },
      set(val) {
        this.$store.dispatch("getChecked", val);
      }
    }
  },
  methods: {
    changeAllChecked() {
      if (this.checkedAll) {
        this.$store.dispatch("getCheckedId", this.getCheckedArr);
      } else {
        this.$store.dispatch("getCheckedId", []);
      }
    }
  }
};
</script>


<style lang="less" scoped>
.header-title {
  line-height: 50px;
  font-weight: 600;
}

.header {
  height: 50px;
  font-size: 14px;
  border-bottom: 1px solid @border-deep;
  box-sizing: border-box;
}

.conntent-search-total {
  margin-left: 50px;

  .search-total-number {
    padding: 0 5px;
  }
}

.content-sort-choice {
  margin-left: 50px;

  .content-sort-choice-title {
    padding-right: 8px;
    font-weight: 600;
  }

  .sort-select {
    vertical-align: -2px;
  }
}

.content-tool-choice {
  float: right;
  margin-right: 30px;
  line-height: 50px;

  .content-tool-choice-checkbox {
    vertical-align: -1px;
  }
}
</style>
