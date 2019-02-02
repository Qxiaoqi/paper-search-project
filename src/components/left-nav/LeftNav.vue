<template>
  <div class="bg-light-grey left">
    <div class="keyword-clock" v-if="isKeywordRender">
      <div class="pl-25 left-title">
        <h2 class="left-title-txt">关键词检索</h2>
      </div>
      <div class="left-search">
        <div class="search-content">
          <span class="serach-icon">
            <i class="fa fa-search"></i>
          </span>
          <input type="text" class="search-input" v-model="keyword" @keyup.enter="getArticaleData">
        </div>
      </div>
    </div>
    <div class="filter-clock">
      <div class="pl-25 left-title">
        <h2 class="left-title-txt">分类检索</h2>
      </div>
      <div class="left-filter">
        <!-- 月份class略有不同 -->
        <FilterForm 
          v-if="isRenderTime && isRenderMonth"
          filterType="timeMonth"
          ref="checkedMonth"
          :filterItems="formData.filterMonth"
          @give-conditions="getArticaleData"
        ></FilterForm>
        <!-- 年份 -->
        <FilterForm
          v-if="isRenderTime"
          filterType="timeYear"
          ref="checkedYear"
          :filterItems="formData.filterYear"
          @give-conditions="getArticaleData"
        ></FilterForm>
        <!-- 学科 -->
        <FilterForm
          filterType="categorySubject"
          ref="checkedSubject"
          :filterItems="formData.fiterSubject"
          @give-conditions="getArticaleData"
        ></FilterForm>
      </div>
    </div>
  </div>
</template>

<script>
import FilterForm from "./FilterForm.vue";
import filterData from "./filterData";
import getArticle from "../common/getArticle";

export default {
  name: "LeftNav",
  components: {
    FilterForm
  },
  created() {
    // 组件创建的时候axios请求获取年份数据
    this.$api.get
      .getAllYear()
      .then(response => {
        // 将返回的[2018]数据转换成[{id:2018, value: 2018}]数据格式
        let allYear = [];
        response.data.data.forEach(element => {
          allYear.push({
            id: element,
            value: element
          });
        });
        // console.log("allYear:", allYear);
        this.formData.filterYear = allYear;
      })
      .catch(error => {
        console.log(error);
      });
  },
  data() {
    return {
      formData: {
        filterMonth: filterData.filterMonth,
        filterYear: [],
        fiterSubject: filterData.fiterSubject
      },
      checkedConditions: [],
      keyword: ""
    };
  },
  computed: {
    isKeywordRender() {
      // 控制关键词是否渲染
      // 如果是基准线百分位模块，则关键词查询没有
      if (this.$route.name === "baseline") {
        return false;
      } else {
        return true;
      }
    },
    isRenderTime() {
      // 控制时间过滤是否渲染
      if (this.$route.name === "periodical") {
        let periodicalTime = this.$route.params.periodicalTime;
        // 如果路由在periodical学科期刊下面
        if (
          periodicalTime === "current" ||
          periodicalTime === "new" ||
          periodicalTime === "decrease"
        ) {
          // 如果是当期、当期新增、当期跌出，则时间过滤不渲染
          return false;
        } else {
          // 如果是往期，则时间过滤渲染
          return true;
        }
      } else if (this.$route.name === "baseline") {
        // 如果是基准线百分位，则只渲染学科
        return false;
      }
      return true;
    },
    isRenderMonth() {
      let name = this.$route.name;
      let res = true;
      if (
        name === "globalPaper" ||
        name === "schoolPaper" ||
        name === "potential"
      ) {
        res = false;
      }
      return res;
    }
  },
  methods: {
    // 获取条件数据，并提交到state
    getConditions() {
      if (this.isRenderTime && this.isRenderMonth) {
        // 时间过滤渲染，多分发两个条件
        this.$store.dispatch(
          "getMonthCondition",
          this.$refs.checkedMonth.checkedList
        );
        this.$store.dispatch(
          "getYearCondition",
          this.$refs.checkedYear.checkedList
        );
      } else if (this.isRenderTime && this.isRenderMonth === false) {
        // 不渲染月份的话，只提交年份
        this.$store.dispatch(
          "getYearCondition",
          this.$refs.checkedYear.checkedList
        );
      }
      // 分发学科数组
      this.$store.dispatch(
        "getSubjectCondition",
        this.$refs.checkedSubject.checkedList
      );

      // 分发关键词字符串
      this.$store.dispatch("getKeyword", this.keyword);

      // 分发页码
      this.$store.dispatch("getPage", 0);
    },
    // axios获取数据
    getArticaleData() {
      // let that = this;
      // 调用该函数，获取条件数组放入Vuex中
      this.getConditions();

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
      // console.log("test");
      // getArticle.getArticle();
      // if (this.$route.name === "periodical") {
      //   // 如果当前在esi期刊目录下
      //   let periodicalTime = this.$route.params.periodicalTime;
      //   // console.log(periodicalTime);
      //   if (periodicalTime === "all") {
      //     // 如果在全期
      //     // 获取数据
      //     this.$api.search
      //       .searchAll()
      //       .then(response => {
      //         console.log(response.data.data);
      //         // ES6变量解构
      //         let { totalElemNums, data } = response.data.data;
      //         let articleTotal = totalElemNums;
      //         let articleList = data;
      //         // map遍历文章数组，取出esiId属性重新组成数组
      //         let checkedArr = articleList.map(obj => obj.esiId);

      //         // 提交文章数量和文章列表
      //         that.$store.dispatch("getArticleTotal", articleTotal);
      //         that.$store.dispatch("getArticleListList", articleList);
      //         // 提交文章id数组
      //         that.$store.dispatch("getCheckedArr", checkedArr);
      //       })
      //       .catch(error => {
      //         console.log(error);
      //       });
      //   } else {
      //     // 在esi模块的其它栏目下
      //     const periodicalTimeTxt = {
      //       current: "current",
      //       new: "newAddition",
      //       decrease: "fellOut"
      //     };
      //     console.log(periodicalTimeTxt[periodicalTime]);
      //     // 获取数据
      //     this.$api.search
      //       .searchCurrent(periodicalTimeTxt[periodicalTime])
      //       .then(response => {
      //         // console.log(response.data.data);
      //         // ES6变量解构
      //         let { totalElemNums, data } = response.data.data;
      //         let articleTotal = totalElemNums;
      //         let articleList = data;
      //         // map遍历文章数组，取出esiId属性重新组成数组
      //         let checkedArr = articleList.map(obj => obj.esiId);

      //         // 提交文章数量和文章列表
      //         that.$store.dispatch("getArticleTotal", articleTotal);
      //         that.$store.dispatch("getArticleListList", articleList);
      //         // 提交文章id数组
      //         that.$store.dispatch("getCheckedArr", checkedArr);
      //       })
      //       .catch(error => {
      //         console.log(error);
      //       });
      //   }
      // }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// ================== 左侧 ====================
.left {
  float: left;
  // 等高布局
  margin-bottom: -9999px;
  padding-bottom: 9999px;
  width: 300px;
  box-sizing: border-box;
  border-right: 1px solid @border-deep;
  // box-shadow: 1px 1px 5px #cccccc;
}

.left-title {
  // padding-left: 25px;
  height: 55px;
  // background-color: @deep-grey;
  border-top: 1px solid @border-light;
  border-bottom: 1px solid @border-light;
  border-left: 4px solid @header-blue;
  box-sizing: border-box;

  .left-title-txt {
    line-height: 55px;
    font-size: 18px;
    font-weight: bold;
  }
}

.left-search {
  height: 80px;
  overflow: hidden;
}

.search-content {
  margin: 20px 0 0 24px;
  height: 40px;
  width: 250px;
  border: 1px solid @border-deep;
  border-radius: 4px;
  background-color: #ffffff;
}

.serach-icon {
  height: 40px;
  width: 40px;
  display: inline-block;
  text-align: center;
  border-radius: 4px;

  .fa-search {
    font-size: 1.5em;
    vertical-align: -2px;
  }
}

.search-input {
  height: 40px;
  width: 210px;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
}
</style>
