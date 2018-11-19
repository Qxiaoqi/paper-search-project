// initial state
const state = {
  conditionTotal: 0,
  conditionList: []
};

// getters
const getters = {};

// actions
const actions = {
  // 获取条件总数
  getConditionTotal({ commit }, total) {
    commit("setConditionTotal", total);
  },
  // 获取条件数组
  getConditionList({ commit }, conditions) {
    commit("setConditionList", conditions);
  }
};

// mutations
const mutations = {
  // 提交条件总数
  setConditionTotal(state, total) {
    state.conditionTotal = total;
  },
  // 提交条件数组
  setConditionList(state, conditions) {
    state.conditionList = conditions;
  }

  // decrementProductInventory (state, { id }) {
  //   const product = state.all.find(product => product.id === id)
  //   product.inventory--
  // }
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
};
