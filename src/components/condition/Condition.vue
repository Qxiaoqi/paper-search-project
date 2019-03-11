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
  // beforeRouteUpdate (to, from, next) {
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  //   // 导航守卫，在路由跳转前更新vuex数据
  //   console.log("路由守卫");
  //   this.$store.dispatch("getMonthCondition", []);
  //   this.$store.dispatch("getYearCondition", []);
  //   this.$store.dispatch("getSubjectCondition", []);
  // },
  computed: {
    // 从state获取条件数组
    conditions() {
      return this.$store.getters.getConditionList;
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
  white-space: nowrap;
  overflow: hidden;
}

.header-title {
  line-height: 50px;
  font-weight: bold;
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
