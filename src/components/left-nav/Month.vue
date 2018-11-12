<template>
  <div class="filter-form">
    <div class="form-title">
      <h4 class="pl-25 title-txt">版本号（月）</h4>
      <i class="fa fa-caret-down title-icon"></i>
    </div>
    <div class="pl-25 filter-form-content">
      <div class="form-content">
        <div class="form-item">
          <input type="checkbox">
          <label class="form-item-label">一月</label>
        </div>
        <div class="form-item">
          <input type="checkbox">
          <label class="form-item-label">三月</label>
        </div>
        <div class="form-item">
          <input type="checkbox">
          <label class="form-item-label">五月</label>
        </div>
        <div class="form-item">
          <input type="checkbox">
          <label class="form-item-label">七月</label>
        </div>
        <div class="form-item">
          <input type="checkbox">
          <label class="form-item-label">九月</label>
        </div>
        <div class="form-item">
          <input type="checkbox">
          <label class="form-item-label">十一月</label>
        </div>
        <div class="form-button">
          <button class="form-button-item">精炼</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Month"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
  // 下面两行是和组件不同的css，其它都一样
  display: inline-block;
  width: 50%;

  margin-bottom: 5px;

  input {
    vertical-align: -2px;
  }

  .form-item-label {
    padding-left: 10px;
    margin-right: 10px;
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
