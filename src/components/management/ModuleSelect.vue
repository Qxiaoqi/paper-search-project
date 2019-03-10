<template>
  <div>
    <div class="title">
      <h1>{{ titleTxt }}</h1>
    </div>
    <div class="time-bar">
      <span class="title-bar time-title">期刊时间</span>
      <input class="time-input" type="text" placeholder="例：201809" v-model="fileTime">
    </div>
    <div class="select-bar">
      <span class="title-bar select-title">模块选择</span>
      <select name="" id="select-first" class="select-input" v-model="firstSelect">
        <option value="journal">esi学科期刊</option>
        <option value="esi">esi顶级论文</option>
        <option value="school">我校esi论文</option>
        <option v-if="routerName === 'upload'" value="baseLine">基准线</option>
        <option v-if="routerName === 'upload'" value="incites">潜力值</option>
      </select>
      <select name="" id="select-second" class="select-input select-paper-input" v-if="isSecondSelect" v-model="secondSelect">
        <option value="highlyCited">高被引论文</option>
        <option value="hot">热点论文</option>
      </select>
      <div class="select-note" v-show="routerName === 'delete'">注：基准线和潜力值直接上传新的就会覆盖掉原来的文件</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModuleSelect",
  props: {
    routerName: String
  },
  data() {
    return {
      firstSelect: "journal",
      secondSelect: "highlyCited",
      fileTime: ""
    };
  },
  computed: {
    isSecondSelect() {
      if (this.firstSelect === "esi" || this.firstSelect === "school") {
        return true;
      }
      return false;
    },
    titleTxt() {
      if (this.routerName === "upload") {
        return "文件上传";
      } else if (this.routerName === "delete") {
        return "文件删除";
      }
    }
  }
};
</script>

<style lang="less" scoped>
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
