<template>
  <div class="d-ib periodical-time-choice">
    <button class="choice-item">当期</button>
    <button class="choice-item">往期</button>
    <button class="choice-item">当期新增</button>
    <button class="choice-item">当期跌出</button>
  </div>
</template>

<script>
export default {
  name: "PeriodicalTime"
}
</script>


<style lang="less" scoped>
// 期刊时间选择
.periodical-time-choice {
  margin-left: 20px;

  .choice-item {
    margin-right: 10px;
    padding: 8px;
    background-color: #ffffff;
    border: 1px solid @border-light;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
