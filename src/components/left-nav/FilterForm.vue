<template>
  <div class="filter-form">
    <div class="form-title">
      <h4 class="pl-25 title-txt">版本号（年）</h4>
      <i class="fa fa-caret-down title-icon"></i>
    </div>
    <div class="pl-25 filter-form-content">
      <div class="form-content">
        <div class="form-item">
          <input type="checkbox">
          <label class="form-item-label">2018</label>
        </div>
        <div class="form-item">
          <input type="checkbox">
          <label class="form-item-label">2017</label>
        </div>
        <div class="form-item">
          <input type="checkbox">
          <label class="form-item-label">2016</label>
        </div>
        <div class="form-item">
          <input type="checkbox">
          <label class="form-item-label">2015</label>
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
  name: "FilterForm"
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
  // display: inline-block;
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
