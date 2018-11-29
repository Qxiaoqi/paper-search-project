<template>
  <div class="management-container">
    <div class="management">
      <div class="title">
        <h1>文件上传</h1>
      </div>
      <div class="time-bar">
        <span class="time-title">期刊时间</span>
        <input class="time-input" type="text" placeholder="例：201809">
      </div>
      <div class="upload-bar">
        <input id="upload" class="upload" type="file">
        <label for="upload" class="upload-label"><i class="fa fa-cloud-upload" aria-hidden="true"></i>上传文件</label>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Management"
}
</script>


<style lang="less" scoped>
.management-container {
  min-height: 400px;
  width: 100%;
  background-color: #ffffff;
  display: table;
  border-top: 20px solid @content-color;
}

.management {
  padding: 45px;
}

.time-bar {
  padding-top: 20px;
  padding-bottom: 20px;

  .time-title {
    padding-right: 10px;
  }

  .time-input {
    padding: 5px;
    width: 250px;
    border-radius: 4px;
    border: 1px solid #b2b2b8;
  }
}

.upload {
  display: none;
}

.upload-label {
  padding: 4px 16px;
  display: inline-block;
  height: 22px;
  line-height: 22px;
  background-color: @button-color;
  border-radius: 4px;

  .fa-cloud-upload {
    padding-right: 5px;
  }
}

</style>
