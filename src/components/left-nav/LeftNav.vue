<template>
  <div class="bg-light-grey left">
    <div class="keyword-clock">
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
          v-if="isRenderTime"
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

export default {
  name: "LeftNav",
  components: {
    FilterForm
  },
  created() {
    // 组件创建的时候axios请求获取年份数据
    this.$api
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
    isRenderTime() {
      // 控制时间过滤是否渲染
      let periodicalTime = this.$route.params.periodicalTime;
      if (this.$route.name === "periodical") {
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
      }
      return true;
    }
  },
  methods: {
    // 获取条件数据，并提交到state
    getConditions() {
      if (this.isRenderTime) {
        // 时间过滤渲染，多分发两个条件
        this.$store.dispatch(
          "getMonthCondition",
          this.$refs.checkedMonth.checkedList
        );
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
      let that = this;
      // 调用该函数，获取条件数组放入Vuex中
      this.getConditions();
      // 获取数据
      this.$api
        .search({
          page: that.$store.state.conditions.page,
          keyword: that.$store.state.conditions.keyword,
          conditionData: {
            month: that.$store.getters.getConditionId.monthCondition,
            year: that.$store.getters.getConditionId.yearCondition,
            subject: that.$store.getters.getConditionId.subjectCondition
          }
        })
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
