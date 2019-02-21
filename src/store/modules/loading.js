// initial state
const state = {
  loadState: false
};

// getters
const getters = {};

// actions
const actions = {
  // 获取选择数组总数
  getLoadState({ commit }, res) {
    commit("setLoadState", res);
  }
};

// mutations
const mutations = {
  // 提交文章选择数组
  setLoadState(state, res) {
    state.loadState = res;
  }
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
};
