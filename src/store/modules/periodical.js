// initial state
const state = {
  // 搜索到的文章总结果
  articleTotal: 0,
  // 分页后的当前文章结果列表
  articleList: []
};

// getters
const getters = {
  // 将搜索结果通过正则转换为逗号分隔
  separated(state) {
    return String(state.articleTotal).replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  }
};

// actions
const actions = {
  // 获取文章总数
  getArticleTotal({ commit }, total) {
    commit("setArticleTotal", total);
  },
  // 获取文章列表数组
  getArticleListList({ commit }, article) {
    commit("setArticleListList", article);
  }
};

// mutations
const mutations = {
  // 提交条件总数
  setArticleTotal(state, total) {
    state.articleTotal = total;
  },
  // 提交文章列表数组
  setArticleListList(state, article) {
    state.articleList = article;
  }
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
};
