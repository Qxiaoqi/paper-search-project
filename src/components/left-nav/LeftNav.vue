<template>
  <div class="bg-light-grey left">
    <div class="pl-25 left-title">
      <h2 class="left-title-txt">关键词检索</h2>
    </div>
    <div class="left-search">
      <div class="search-content">
        <span class="serach-icon">
          <i class="fa fa-search"></i>
        </span>
        <input type="text" class="search-input">
      </div>
    </div>
    <div class="pl-25 left-title">
      <h2 class="left-title-txt">分类检索</h2>
    </div>
    <div class="left-filter">
      <!-- 月份class略有不同 -->
      <FilterForm 
        filterType="timeMonth"
        ref="checkedMonth"
        :filterItems="formData.filterMonth"
        @give-conditions="getConditions"
      ></FilterForm>
      <!-- 年份 -->
      <FilterForm
       filterType="timeYear"
       ref="checkedYear"
       :filterItems="formData.filterYear"
       @give-conditions="getConditions"
      ></FilterForm>
      <!-- 学科 -->
      <FilterForm
       filterType="categorySubject"
       ref="checkedSubject"
       :filterItems="formData.fiterSubject"
       @give-conditions="getConditions"
      ></FilterForm>
    </div>
  </div>
</template>

<script>
import FilterForm from "./FilterForm.vue";

export default {
  name: "LeftNav",
  components: {
    FilterForm
  },
  data() {
    return {
      formData: {
        filterMonth: [
          {
            id: 1,
            value: "一月"
          },
          {
            id: 2,
            value: "三月"
          },
          {
            id: 3,
            value: "五月"
          },
          {
            id: 4,
            value: "七月"
          },
          {
            id: 5,
            value: "九月"
          },
          {
            id: 6,
            value: "十一月"
          }
        ],
        filterYear: [
          {
            id: 11,
            value: "2018"
          },
          {
            id: 12,
            value: "2017"
          },
          {
            id: 13,
            value: "2016"
          },
          {
            id: 14,
            value: "2015"
          }
        ],
        fiterSubject: [
          {
            id: 21,
            value: "MATERIALS SCIENCE"
          },
          {
            id: 22,
            value: "BIOLOGY & BIOCHEMISTRY"
          },
          {
            id: 23,
            value: "ENGINEERING"
          },
          {
            id: 24,
            value: "GEOSCIENCES"
          },
          {
            id: 25,
            value: "PHARMACOLOGY & TOXICOLOG Yadwad"
          }
        ]
      },
      checkedConditions: []
    };
  },
  methods: {
    getConditions() {
      // 获取条件数组(ES6数组扩展运算符)
      this.checkedConditions = [
        ...this.$refs.checkedMonth.checkedList,
        ...this.$refs.checkedYear.checkedList,
        ...this.$refs.checkedSubject.checkedList
      ];
      // 分发条件总数
      this.$store.dispatch("getConditionTotal", this.checkedConditions.length);
      // 分发条件数组
      this.$store.dispatch("getConditionList", this.checkedConditions);
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
