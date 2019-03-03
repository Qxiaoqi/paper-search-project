// initial state
const state = {
  loadState: false,
  fileUploadRate: 0
};

// getters
const getters = {};

// actions
const actions = {
  // 获取加载状态
  getLoadState({ commit }, res) {
    commit("setLoadState", res);
  },
  // 获取上传进度
  getFileUploadRate({ commit }, res) {
    commit("setFileUploadRate", res);
  }
};

// mutations
const mutations = {
  // 提交加载状态
  setLoadState(state, res) {
    state.loadState = res;
  },
  // 提交上传进度
  setFileUploadRate(state, res) {
    state.fileUploadRate = res;
  }
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
};
