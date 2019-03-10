import store from "@/store/index";
import api from "@/request/api";

/**
 * 获取ESI期刊的方法抽离
 *
 * 传入两个参数，一个是一级目录名，一个是二级目录名
 * 这里两个api接口的传过去的参数不同，但是获取数据后的操作相同
 * 所以用if判断了二级目录
 * 在全期下是一个接口
 * 在当期，当期新增，当期跌出是一个接口
 * @param {*} firDirectory
 * @param {*} secDirectory
 */

export const getEsi = (firDirectory, secDirectory) => {
  // console.log("调用");
  // console.log(firDirectory);
  // console.log(secDirectory);
  if (firDirectory === "periodical") {
    // 如果当前在esi期刊目录下
    if (secDirectory === "all") {
      // 如果在全期
      // 获取数据
      api.search
        .searchAll()
        .then(response => {
          // console.log(that.$store.state.conditions.subjectCondition);
          console.log(response.data.data);
          // ES6变量解构
          let { totalElemNums, data } = response.data.data;
          let articleTotal = totalElemNums;
          let articleList = data;
          // map遍历文章数组，取出journalId属性重新组成数组
          let checkedArr = articleList.map(obj => obj.journalId);

          // 提交文章数量和文章列表
          store.dispatch("getArticleTotal", articleTotal);
          store.dispatch("getArticleListList", articleList);
          // 提交文章id数组
          store.dispatch("getCheckedArr", checkedArr);

          // 初始化Vuex中的checkedId
          store.dispatch("getCheckedId", []);

          // 加载状态
          store.dispatch("getLoadState", false);
        })
        .catch(error => {
          console.log(error);
          // 加载状态
          store.dispatch("getLoadState", false);
        });
    } else {
      // console.log("在当期下");
      // 在esi模块的其它栏目下
      const periodicalTimeTxt = {
        current: "current",
        new: "newAddition",
        decrease: "fellOut"
      };
      console.log(periodicalTimeTxt[secDirectory]);
      // 获取数据
      api.search
        .searchCurrent(periodicalTimeTxt[secDirectory])
        .then(response => {
          // console.log(that.$store.state.conditions.subjectCondition);
          // console.log(response.data.data);
          // ES6变量解构
          let { totalElemNums, data } = response.data.data;
          let articleTotal = totalElemNums;
          let articleList = data;
          // map遍历文章数组，取出journalId属性重新组成数组
          let checkedArr = articleList.map(obj => obj.journalId);

          // 提交文章数量和文章列表
          store.dispatch("getArticleTotal", articleTotal);
          store.dispatch("getArticleListList", articleList);
          // 提交文章id数组
          store.dispatch("getCheckedArr", checkedArr);

          // 初始化Vuex中的checkedId
          store.dispatch("getCheckedId", []);

          // 加载状态
          store.dispatch("getLoadState", false);
        })
        .catch(error => {
          console.log(error);
          // 加载状态
          store.dispatch("getLoadState", false);
        });
    }
  }
};

// 获取esi顶级论文
export const getGlobalPaper = (firDirectory, secDirectory) => {
  // console.log("调用");
  // console.log(firDirectory);
  // console.log(secDirectory);
  if (secDirectory === "hotPaper") {
    secDirectory = "hot";
  }
  api.search
    .searchGlobalPaper(secDirectory)
    .then(response => {
      // console.log(that.$store.state.conditions.subjectCondition);
      console.log(response.data.data);
      // ES6变量解构
      let { totalElemNums, data } = response.data.data;
      let articleTotal = totalElemNums;
      let articleList = data;
      // map遍历文章数组，取出paperId属性重新组成数组
      let checkedArr = articleList.map(obj => obj.paperId);

      // 提交文章数量和文章列表
      store.dispatch("getArticleTotal", articleTotal);
      store.dispatch("getArticleListList", articleList);
      // 提交文章id数组
      store.dispatch("getCheckedArr", checkedArr);

      // 初始化Vuex中的checkedId
      store.dispatch("getCheckedId", []);

      // 加载状态
      store.dispatch("getLoadState", false);
    })
    .catch(error => {
      console.log(error);

      // 加载状态
      store.dispatch("getLoadState", false);
    });
};

// 获取我校esi顶级论文
export const getOurPaper = (firDirectory, secDirectory) => {
  // console.log("调用");
  // console.log(firDirectory);
  // console.log(secDirectory);
  if (secDirectory === "hotPaper") {
    secDirectory = "hot";
  }
  api.search
    .searchOurPaper(secDirectory)
    .then(response => {
      // console.log(that.$store.state.conditions.subjectCondition);
      console.log(response.data.data);
      // ES6变量解构
      let { totalElemNums, data } = response.data.data;
      let articleTotal = totalElemNums;
      let articleList = data;
      // map遍历文章数组，取出paperId属性重新组成数组
      let checkedArr = articleList.map(obj => obj.paperId);

      // 提交文章数量和文章列表
      store.dispatch("getArticleTotal", articleTotal);
      store.dispatch("getArticleListList", articleList);
      // 提交文章id数组
      store.dispatch("getCheckedArr", checkedArr);

      // 初始化Vuex中的checkedId
      store.dispatch("getCheckedId", []);

      // 加载状态
      store.dispatch("getLoadState", false);
    })
    .catch(error => {
      console.log(error);
      // 加载状态
      store.dispatch("getLoadState", false);
    });
};

export default {
  getEsi,
  getGlobalPaper,
  getOurPaper
};
