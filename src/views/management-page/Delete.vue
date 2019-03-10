<template>
  <div class="management">
    <ModuleSelect routerName="delete" ref="moduleSelect"></ModuleSelect>
    <!-- <div class="title">
      <h1>文件删除</h1>
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
      </select>
      <select name="" id="select-second" class="select-input select-paper-input" v-if="isSecondSelect" v-model="secondSelect">
        <option value="highlyCited">高被引论文</option>
        <option value="hotPaper">热点论文</option>
      </select>
      <div class="select-note">注：基准线和潜力值直接上传新的就会覆盖掉原来的文件</div>
    </div> -->
    <div class="upload-bar">
      <div class="submit-bar">
        <button class="delete-submit" @click="deleteSubmit">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
import ModuleSelect from "@/components/management/ModuleSelect.vue";

export default {
  name: "Delete",
  components: {
    ModuleSelect
  },
  beforeCreate() {
    this.$api.user
      .getManage()
      .then(response => {
        console.log(response);
        if (response.data.code === 200) {
          window.$message.info("可以删除文件");
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
    }
  },
  methods: {
    deleteSubmit() {
      console.log("fileTime:", this.$refs.moduleSelect.fileTime);
      let fileTime = this.$refs.moduleSelect.fileTime;
      let firstSelect = this.$refs.moduleSelect.firstSelect;
      let path = "";
      if (firstSelect === "journal") {
        path = "/" + firstSelect;
      } else if (firstSelect === "esi" || firstSelect === "school") {
        // 如果是论文
        let secondSelect = this.$refs.moduleSelect.secondSelect;
        firstSelect === "esi" ? path = "/paper/esi/" + secondSelect : path = "/paper/school/" + secondSelect;
      }
      if (fileTime === "") {
        window.$message.error("请填写期刊时间");
      } else {
        let yearNum = parseInt(fileTime.slice(0, 4));
        let monthNum = parseInt(fileTime.slice(4));
        let deleteData = {
          path: path,
          data: {
            month: monthNum,
            year: yearNum
          }
        }

        // axios请求
        this.deleteAjax(deleteData);
      }
    },
    deleteAjax(deleteData) {
      console.log(deleteData);
      this.$api.file
        .fileDelete(deleteData)
        .then(response => {
          console.log(response);
          if (response.data.code === 200) {
            window.$message.success("删除成功");
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
  padding: 45px;
}

.title-bar {
  padding-right: 10px;
}

.time-bar {
  padding-top: 20px;
  padding-bottom: 20px;

  .time-input {
    height: 28px;
    width: 250px;
    padding-left: 5px;
    border-radius: 4px;
    border: 1px solid #b2b2b8;
    box-sizing: border-box;
  }
}

.select-bar {
  padding-bottom: 20px;

  .select-input {
    height: 28px;
    width: 115px;
    border-radius: 4px;
    border: 1px solid #b2b2b8;
    box-sizing: border-box;
  }

  .select-paper-input {
    margin-left: 20px;
    width: 115px;
  }

  .select-note {
    padding-top: 5px;
    font-size: 13px;
    color: @deep-red;
  }
}


.submit-bar {
  margin-top: 20px;
}

.delete-submit {
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

