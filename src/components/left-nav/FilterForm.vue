<template>
  <div class="filter-form">
    <div class="form-title"
      :class="{ 'bg-light-grey left': !isListShow }"
      @click="isListShow = !isListShow"
    >
      <h4 class="pl-25 title-txt">{{ filterTitle }}</h4>
      <i class="fa fa-caret-down title-icon"></i>
    </div>
    <div class="pl-25 filter-form-content" v-show="isListShow">
      <div class="form-content">
        <!-- 此处需要判断是否是月份组件，若是则使用display-width类定义的样式 -->
        <div class="form-item" 
          v-for="filterItem in filterItems"
          :class="{ 'display-width': isMonth}"
          :key="filterItem.id"
          :filterItem="filterItem">
          <input type="checkbox" 
            :id="filterItem.id" 
            :value="{id:filterItem.id, value:filterItem.value}" 
            v-model="checkedList"
          >
          <label class="form-item-label" 
            :for="filterItem.id"
          >{{ filterItem.value }}</label>
        </div>
        <div class="form-button">
          <button class="form-button-item" @click="giveConditions">
            <span v-if="!loadState">精炼</span>
            <Loading v-if="loadState"></Loading>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "../loading/Loading.vue";

export default {
  name: "FilterForm",
  components: {
    Loading
  },
  props: {
    filterType: String,
    filterItems: Array
  },
  data() {
    return {
      isListShow: true,
      checkedList: []
    };
  },
  computed: {
    // 判断是否是月份组件
    isMonth() {
      return this.filterType === "timeMonth" ? true : false;
    },
    // 通过组件名称获取对应中文标题
    filterTitle() {
      const filterTxt = {
        timeMonth: "版本号（月）",
        timeYear: "版本号（年）",
        categorySubject: "学科类别"
      };
      return filterTxt[this.filterType];
    },
    // 获取查询loading状态
    loadState() {
      return this.$store.state.loading.loadState;
    }
  },
  methods: {
    // 触发$emit方法，向父级组件传递事件
    giveConditions() {
      this.$emit("give-conditions");
    }
  }
};
</script>

<style lang="less" scoped>
.filter-form {
  border-bottom: 1px solid @border-light;
  background-color: @deep-grey;
}

.form-title {
  position: relative;
  height: 50px;

  .title-txt {
    display: inline-block;
    line-height: 50px;
    font-size: 15px;
  }

  .title-icon {
    position: absolute;
    top: 15px;
    right: 20px;
  }
}

.form-content {
  font-size: 13px;
}

.form-item {
  display: table;
  margin-bottom: 5px;

  input {
    vertical-align: -2px;
    display: table-cell;
  }

  .form-item-label {
    padding-left: 10px;
    padding-right: 20px;
    display: table-cell;
  }
}

// 月份组件的不同布局，月份使用inline-block布局，使其两列显示
// 年份和学科使用tabel布局，保证其等高
.display-width {
  display: inline-block;
  width: 50%;

  input {
    display: inline-block;
  }

  .form-item-label {
    display: inline-block;
  }
}

.form-button {
  text-align: right;
}

.form-button-item {
  height: 30px;
  padding: 4px 11px;
  margin: 0 5px 5px;
  background-color: #ffffff;
  border: 1px solid @border-deep;
  border-radius: 4px;
}
</style>
