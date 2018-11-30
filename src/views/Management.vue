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
        <input @change="handFileChange" ref="uploadFile" id="upload" class="upload" type="file">
        <label for="upload" class="upload-label"><i class="fa fa-cloud-upload" aria-hidden="true"></i>选择文件</label>
        <span class="upload-name">{{ fileName }}</span>
        <div class="upload-progress">
          <progress max="100" :value="progressRate"></progress>
        </div>
        <div class="submit-bar">
          <button class="upload-submit">确认</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Management",
  data() {
    return {
      fileName: ''
    }
  },
  computed: {
    progressRate() {
      for(let i = 0; i <= 100; i++) {
        return i;
      }
    }
  },
  methods: {
    handFileChange(e) {
      let uploadDOM = this.$refs.uploadFile;
      this.file = uploadDOM.files[0];
      let size = Math.floor(this.file.size / 1024);
      this.fileName = this.file.name;
      console.log(size);
    }
  }
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
  font-size: 16px;
  cursor: pointer;

  .fa-cloud-upload {
    padding-right: 5px;
  }
}

.upload-name {
  padding-left: 20px;
}

.upload-progress {
  margin-top: 10px;

  progress {
    display: inline-block;
    width: 400px;
    height: 20px;
    border: 1px solid @header-blue;  
    background-color:#e6e6e6;
    color: @header-blue; /*IE10*/
  }

  progress::-moz-progress-bar { background: @header-blue; }
  progress::-webkit-progress-bar { background: #e6e6e6; }
  progress::-webkit-progress-value  { background: @header-blue; }
}

.submit-bar {
  margin-top: 20px;
}

.upload-submit {
  padding: 4px 22px;
  height: 30px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  color: @font-color;
  background-color: @button-color;
  cursor: pointer;
}

</style>
