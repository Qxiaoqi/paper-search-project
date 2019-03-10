import store from "@/store/index";
import api from "@/request/api";

/**
 * 获取潜力值
 *
 */

export const getIncitesData = () => {
  // console.log("调用");
  api.search
    .searchIncites()
    .then(response => {
      // console.log(that.$store.state.conditions.subjectCondition);
      console.log(response.data.data);
      // // ES6变量解构
      let { totalElemNums, data } = response.data.data;
      let articleTotal = totalElemNums;
      let articleList = data;
      // map遍历文章数组，取出incitesId属性重新组成数组
      let checkedArr = articleList.map(obj => obj.incitesId);

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
  getIncitesData
};
