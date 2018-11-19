// initial state
const state = {
  conditionTotal: 0,
  conditionList: []
};

// getters
const getters = {};

// actions
const actions = {
  getConditionTotal({ commit }, time) {
    commit("setConditionTotal", time);
  },
  getConditionList({ commit }, conditions) {
    commit("setConditionList", conditions);
  }
};

// mutations
const mutations = {
  setConditionTotal(state, time) {
    state.conditionTotal = time;
  },
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
