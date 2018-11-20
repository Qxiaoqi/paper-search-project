<template>
  <div class="bg-light-grey header">
    <span class="pl-20 header-title">已选条件：</span>
    <div class="main-header-conditions">
      <button class="conditions-item" v-for="(condition, index) in conditions" :key="index">{{ condition.value }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Condition",
  computed: {
    // 从state获取条件数组
    conditions() {
      return this.$store.state.conditions.conditionList;
    }
  }
};
</script>


<style lang="less" scoped>
.header {
  height: 50px;
  font-size: 14px;
  border-bottom: 1px solid @border-deep;
  box-sizing: border-box;
}

.header-title {
  line-height: 50px;
  font-weight: 600;
}

.main-header-conditions {
  display: inline-block;

  .conditions-item {
    margin-right: 10px;
    padding: 8px;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid @border-deep;
  }
}
</style>
