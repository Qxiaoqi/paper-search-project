// initial state
const state = {
  checked: false,
  checkedId: [],
  checkedArr: []
};

// getters
const getters = {};

// actions
const actions = {
  // 获取选择数组总数
  getCheckedArr({ commit }, arr) {
    commit("setCheckedArr", arr);
  },
  // 获取多选是否选上
  getChecked({ commit }, res) {
    commit("setChecked", res);
  },
  // 获取文章选中数组
  getCheckedId({ commit }, articlesId) {
    commit("setCheckedId", articlesId);
  }
};

// mutations
const mutations = {
  // 提交文章选择数组
  setCheckedArr(state, arr) {
    state.checkedArr = arr;
  },
  // 提交是否全选
  setChecked(state, res) {
    state.checked = res;
  },
  // 提交文章选择数组
  setCheckedId(state, articlesId) {
    state.checkedId = articlesId;
  }
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
};
