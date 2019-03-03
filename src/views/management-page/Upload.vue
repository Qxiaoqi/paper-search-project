<template>
  <div class="upload-container">
    <div class="management">
      <div class="upload-left">
        <ModuleSelect routerName="upload" ref="moduleSelect"></ModuleSelect>
        <!-- <div class="title">
          <h1>文件上传</h1>
        </div>
        <div class="time-bar">
          <span class="title-bar time-title">期刊时间</span>
          <input class="time-input" type="text" placeholder="例：201809" v-model="fileTime">
        </div>
        <div class="select-bar">
          <span class="title-bar select-title">模块选择</span>
          <select name="" id="select-first" class="select-input" v-model="firstSelect">
            <option value="journal">esi学科期刊</option>
            <option value="globalPaper">esi顶级论文</option>
            <option value="schoolPaper">我校esi论文</option>
            <option value="baseLine">基准线</option>
            <option value="">潜力值</option>
          </select>
          <select name="" id="select-second" class="select-input select-paper-input" v-if="isSecondSelect" v-model="secondSelect">
            <option value="highlyCited">高被引论文</option>
            <option value="hotPaper">热点论文</option>
          </select>
        </div> -->
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
      <div class="upload-files">
        <!-- 右侧 -->
        <li class="file-list" v-for="fileItem in files"><span class="file-list-time">[{{ fileItem.time }}]</span> {{ fileItem.name }}</li>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import ModuleSelect from "@/components/management/ModuleSelect.vue";

export default {
  name: "Upload",
  components: {
    ModuleSelect
  },
  beforeCreate() {
    this.$api.user
      .getManage()
      .then(response => {
        console.log(response);
        if (response.data.code === 200) {
          window.$message.info("可以选择上传文件");
        }
      })
      .catch(error => {
        console.log(error);
        if (error.data.code === 401) {
          router.push({
            path: "/"
          });
        }
      })
  },
  data() {
    return {
      // firstSelect: "journal",
      // secondSelect: "highlyCited",
      // fileTime: "",
      fileName: "",
      file: "",
      files: []
    };
  },
  computed: {
    progressRate() {
      return this.$store.state.loading.fileUploadRate;
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
      console.log("fileTime:", this.$refs.moduleSelect.fileTime);
      console.log("file:", this.file);
      let fileTime = this.$refs.moduleSelect.fileTime;
      let firstSelect = this.$refs.moduleSelect.firstSelect;
      let formData = new FormData();
      if (fileTime === "") {
        window.$message.error("请填写期刊时间");
      } else if (this.file === "") {
        window.$message.error("请选择文件");
      } else {
        let yearNum = parseInt(fileTime.slice(0, 4));
        let monthNum = parseInt(fileTime.slice(4));
        formData.append("file", this.file);

        if (firstSelect === "journal") {
          // 需要时间的上传
          formData.append("month", monthNum);
          formData.append("year", yearNum);
        } 
        let fileData = {
          name: firstSelect,
          data: formData,
        }

        // axios请求
        this.fileAjax(fileData, fileTime);
      }
    },
    fileAjax(fileData, fileTime) {
      // 进度条清零
      this.$store.dispatch("getFileUploadRate", 0);
      this.$api.file
        .upload(fileData)
        .then(response => {
          console.log(response);
          if (response.data.code === 200) {
            window.$message.success("上传成功");
            this.files.push({
              time: fileTime,
              name: this.fileName
            });
          }
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
};
</script>

<style lang="less" scoped>

.management {
  min-height: 500px;
  // max-height: 510px;
  width: 100%;
  display: table;
  table-layout: fixed;
}

.upload-left {
  padding: 45px;
  display: table-cell;
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
    height: 10px;
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

.upload-files {
  width: 250px;
  padding: 45px;
  display: table-cell;
  background-color: @light-grey;
}

.file-list {
  list-style: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  .file-list-time {
    color: @deep-red;;
  }
}
</style>
