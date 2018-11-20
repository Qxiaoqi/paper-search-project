// initial state
const state = {
  checked: false,
  checkedId: [],
  // 此处需要在获取数据后提交更新，这里暂时造几个假数据
  checkedArr: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109]
};

// getters
const getters = {};

// actions
const actions = {
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
