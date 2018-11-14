<template>
  <div class="pl-20 search-results">
    <div class="search-item">
      <div class="d-ib search-checkbox">
        <input type="checkbox" id="test1">
        <label for="test1" class="checkbox-custom"></label>
      </div>
      <div class="d-ib search-number">1.</div>
      <div class="d-ib search-main">
        <h4 class="search-title">IRANIAN JOURNAL OF CHEMISTRY & CHEMICAL ENGINEERING-INTERNATIONAL ENGLISH EDITION CHEMICAL ENGINEERING-INTERNATIONAL ENGLISH EDITION</h4>
        <div class="search-content">
          <span class="content-subtitle">Title29：2D MATER</span>
          <span class="content-subtitle">Title20：2D MATER</span>
          <span class="content-subtitle">ISSN：2053-1583</span>
          <span class="content-subtitle">EISSN：2053-1583</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Periodical"
};
</script>


<style lang="less" scoped>
.search-results {
  margin-top: 20px;
  margin-bottom: 20px;
}

.search-item {
  display: table;
}

.search-checkbox {
  width: 30px;
  vertical-align: top;
  display: table-cell;

  input {
    display: none;
  }

  input[type="checkbox"]:checked + .checkbox-custom {
    background: url("../../assets/check.png") no-repeat;
    background-size: 100%;
  }

  .checkbox-custom {
    width: 16px;
    height: 16px;
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid @border-light;
    border-radius: 4px;
    background-color: #ffffff;
    cursor: pointer;
  }
}

.search-number {
  width: 45px;
  vertical-align: top;
  display: table-cell;
}

.search-main {
  display: table-cell;
}

.search-main {
  .search-title {
    color: @header-blue;
    font-size: 15px;
  }
}

.search-content {
  margin-top: 15px;

  .content-subtitle {
    margin-right: 15px;
    font-size: 13px;
  }
}
</style>
