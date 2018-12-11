<template>
  <div class="main-content">
  <div class="pl-20 header">
    <span class="header-title">{{ mainTitle }}</span>
    <span class="header-title"> >> {{subTitle}}</span>
    <div class="d-ib conntent-search-total">
      <span>共计</span>
      <span class="search-total-number">{{ getArticleTotal }}</span>
      <span>条搜索结果</span>
    </div>
    <div class="d-ib content-sort-choice">
      <span class="content-sort-choice-title">排序</span>
      <select name="" id="sort-select" class="sort-select" v-model="ifDesc" @change="getArticaleData">
        <option value="true">按时间降序</option>
        <option value="false">按时间升序</option>
      </select>
    </div>
    <!-- 期刊时间选择（只有期刊页面才有该组件） -->
    <!-- <PeriodicalTime v-if="isPeriodical"></PeriodicalTime> -->

    <div class="d-ib content-tool-choice">
      <input type="checkbox" id="all-choice-checkbox" class="content-tool-choice-checkbox" v-model="checkedAll" @change="changeAllChecked()">
      <label for="all-choice-checkbox" class="content-tool-choice-all">全选</label>
      <span class="pl-5 content-tool-choice-export" @click="exportChoice">导出</span>
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
    // isPeriodical() {
    //   return this.title === "periodicalESI" ? true : false;
    // },
    // 通过组件名称获取对应中文标题
    mainTitle() {
      let str = this.$route.name;
      const mainTxt = {
        periodical: "ESI学科期刊",
        globalPaper: "ESI顶级论文",
        schoolPaper: "我校ESI顶级论文"
      };
      return mainTxt[str];
    },
    subTitle() {
      if (this.$route.name === "periodical") {
        let str = this.$route.params.periodicalTime;
        const subTxt = {
          current: "当期",
          all: "往期",
          new: "当期新增",
          decrease: "当期跌出"
        };
        return subTxt[str];
      } else if (this.$route.name === "globalPaper" || this.$route.name === "schoolPaper") {
        let str = this.$route.params.paperType;
        const subTxt = {
          highlyCited: "高被引论文",
          hotPaper: "热点论文"
        };
        return subTxt[str];
      }
    },
    // 升序还是降序
    ifDesc: {
      get() {
        return this.$store.state.conditions.ifDesc;
      },
      set(val) {
        val === "true" && this.$store.dispatch("getIfDesc", true);
        val === "false" && this.$store.dispatch("getIfDesc", false);
      }
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
    },
    // 监听全选框
    changeAllChecked() {
      if (this.checkedAll) {
        this.$store.dispatch("getCheckedId", this.getCheckedArr);
      } else {
        this.$store.dispatch("getCheckedId", []);
      }
    },
    // 导出文件
    exportChoice() {
      let checkedId = this.$store.state.checkedArticle.checkedId;
      console.log(checkedId);
      this.$api.file
        .download({
          data: checkedId
        })
        .then(response => {
          console.log(response.headers);
          let content = response.data;
          let blob = new Blob([content]);
          let fileName = response.headers["content-disposition"].split("=")[1];
          if ("download" in document.createElement("a")) {
            
            // 非IE下载
            let elink = document.createElement("a");
            elink.download = fileName;
            elink.style.display = "none";
            elink.href = URL.createObjectURL(blob);
            document.body.appendChild(elink);
            elink.click();
            URL.revokeObjectURL(elink.href);
          } else {
            // IE 10+ 下载
            navigator.msSaveBlob(blob, fileName)
          }
        })
        .catch(error => {
          console.log(error);
        })
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

  .content-tool-choice-all {
    cursor: pointer;
  }

  .content-tool-choice-export {
    cursor: pointer;
  }
}
</style>
