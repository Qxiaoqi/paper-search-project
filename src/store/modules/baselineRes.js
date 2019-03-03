// initial state
const state = {
  // 基准线表头
  baselineTitle: [],
  // 基准线结果
  baselineData: []
};

// getters
const getters = {};

// actions
const actions = {
  getBaselineTitle({ commit }, data) {
    commit("setBaselineTitle", data);
  },
  getBaselineData({ commit }, data) {
    commit("setBaselineData", data);
  }
};

// mutations
const mutations = {
  setBaselineTitle(state, data) {
    state.baselineTitle = data;
  },
  setBaselineData(state, data) {
    state.baselineData = data;
  }
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
};
