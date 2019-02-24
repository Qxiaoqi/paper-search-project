<template>
  <div class="management">
    <div class="title">
      <h1>文件上传</h1>
    </div>
    <div class="time-bar">
      <span class="time-title">期刊时间</span>
      <input class="time-input" type="text" placeholder="例：201809" v-model="fileTime">
    </div>
    <div class="upload-bar">
      <input @change="handFileChange" ref="uploadFile" id="upload" class="upload" type="file">
      <label for="upload" class="upload-label"><i class="fa fa-cloud-upload" aria-hidden="true"></i>选择文件</label>
      <span class="upload-name">{{ fileName }}</span>
      <div class="upload-progress">
        <progress max="100" :value="progressRate"></progress>
      </div>
      <div class="submit-bar">
        <button class="upload-submit" @click="fileSubmit">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Upload",
  // created() {
  //   this.$api.user
  //     .getManRegister()
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },
  data() {
    return {
      fileTime: "",
      fileName: "",
      file: ""
    };
  },
  computed: {
    progressRate() {
      return 60;
    }
  },
  methods: {
    handFileChange(e) {
      // 获取上传文件DOM
      let uploadDOM = this.$refs.uploadFile;
      this.file = uploadDOM.files[0];
      // 文件大小
      let size = Math.floor(this.file.size / 1024);
      // 文件名称
      this.fileName = this.file.name;
    },
    fileSubmit() {
      console.log("fileTime:", this.fileTime);
      console.log("file:", this.file);
      let formData = new FormData();
      if (this.fileTime === "") {
        window.$message.error("请填写期刊时间");
      } else if (this.file === "") {
        window.$message.error("请选择文件");
      } else {
        formData.append("fileTime", this.fileTime);
        formData.append("file", this.file);
        console.log("formData:", formData);
      }
    }
  }
};
</script>

<style lang="less" scoped>
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
    background-color: #e6e6e6;
    color: @header-blue; /*IE10*/
  }

  progress::-moz-progress-bar {
    background: @header-blue;
  }
  progress::-webkit-progress-bar {
    background: #e6e6e6;
  }
  progress::-webkit-progress-value {
    background: @header-blue;
  }
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
