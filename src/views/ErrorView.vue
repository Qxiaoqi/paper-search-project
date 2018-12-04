<template>
  <div class="error-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "ErrorView"
};
</script>

<style lang="less" scoped>
.error-container {
  padding: 45px;
}

.error-information {
  margin-bottom: 300px;
}
</style>
