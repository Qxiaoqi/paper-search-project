// initial state
const state = {
  // conditionTotal: 0,
  // conditionList: []
  monthCondition: [],
  yearCondition: [],
  subjectCondition: []
};

// getters
const getters = {
  getConditionTotal() {
    return (
      state.monthCondition.length +
      state.monthCondition.length +
      state.monthCondition.length
    );
  },
  getConditionList() {
    return [
      ...state.monthCondition,
      ...state.yearCondition,
      ...state.subjectCondition
    ];
  }
};

// actions
const actions = {
  // 获取条件总数
  getConditionTotal({ commit }, total) {
    commit("setConditionTotal", total);
  },
  // 获取月份数组
  getMonthCondition({ commit }, conditions) {
    commit("setMonthCondition", conditions);
  },
  // 获取年份数组
  getYearCondition({ commit }, conditions) {
    commit("setYearCondition", conditions);
  },
  // 获取学科分类数组
  getSubjectCondition({ commit }, conditions) {
    commit("setSubjectCondition", conditions);
  }
};

// mutations
const mutations = {
  // 提交条件总数
  setConditionTotal(state, total) {
    state.conditionTotal = total;
  },
  // 提交月份数组
  setMonthCondition(state, conditions) {
    state.monthCondition = conditions;
  },
  // 提交年份数组
  setYearCondition(state, conditions) {
    state.yearCondition = conditions;
  },
  // 提交学科数组
  setSubjectCondition(state, conditions) {
    state.subjectCondition = conditions;
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
