// initial state
const state = {
  // 搜索到的文章总结果
  articleTotal: 9875622,
  // 分页后的当前文章结果列表
  articleList: [
    {
      articleId: 100,
      serialNumber: 1, //搜索结果序号
      fullTitle:
        "SELECTING THE BEST MODEL TO ESTIMATE POTENTIAL EVAPOTRANSPIRATION WITH RESPECT TO CLIMATE CHANGE AND MAGNITUDES OF EXTREME EVENTS",
      Title29: "2D MATER",
      Title20: "2D MATER",
      ISSN: "2053-1583",
      EISSN: "2053-1583"
    },
    {
      articleId: 101,
      serialNumber: 2, //搜索结果序号
      fullTitle:
        "ACM Transactions on Asian and Low-Resource Language Information Processing",
      Title29: "ACCID ANAL PREVENT",
      Title20: "ACCID ANAL PREVENT",
      ISSN: "2053-1583",
      EISSN: "2053-1583"
    },
    {
      articleId: 102,
      serialNumber: 3, //搜索结果序号
      fullTitle: "3D Printing and Additive Manufacturing",
      Title29: "2D MATER",
      Title20: "2D MATER",
      ISSN: "2053-1583",
      EISSN: "2053-1583"
    },
    {
      articleId: 103,
      serialNumber: 4, //搜索结果序号
      fullTitle: "4OR-A Quarterly Journal of Operations Research",
      Title29: "2D MATER",
      Title20: "2D MATER",
      ISSN: "2053-1583",
      EISSN: "2053-1583"
    },
    {
      articleId: 104,
      serialNumber: 5, //搜索结果序号
      fullTitle: "AAPG BULLETIN",
      Title29: "2D MATER",
      Title20: "2D MATER",
      ISSN: "2053-1583",
      EISSN: "2053-1583"
    },
    {
      articleId: 105,
      serialNumber: 6, //搜索结果序号
      fullTitle: "AAPS Journal",
      Title29: "2D MATER",
      Title20: "2D MATER",
      ISSN: "2053-1583",
      EISSN: "2053-1583"
    },
    {
      articleId: 106,
      serialNumber: 7, //搜索结果序号
      fullTitle:
        "ABHANDLUNGEN AUS DEM MATHEMATISCHEN SEMINAR DER UNIVERSITAT HAMBURG",
      Title29: "2D MATER",
      Title20: "2D MATER",
      ISSN: "2053-1583",
      EISSN: "2053-1583"
    },
    {
      articleId: 107,
      serialNumber: 8, //搜索结果序号
      fullTitle: "ABSTRACTS OF PAPERS OF THE AMERICAN CHEMICAL SOCIETY",
      Title29: "2D MATER",
      Title20: "2D MATER",
      ISSN: "2053-1583",
      EISSN: "2053-1583"
    },
    {
      articleId: 108,
      serialNumber: 9, //搜索结果序号
      fullTitle: "ABSTRACTS OF PAPERS OF THE AMERICAN CHEMICAL SOCIETY",
      Title29: "2D MATER",
      Title20: "2D MATER",
      ISSN: "2053-1583",
      EISSN: "2053-1583"
    },
    {
      articleId: 109,
      serialNumber: 10, //搜索结果序号
      fullTitle:
        "SELECTING THE BEST MODEL TO ESTIMATE POTENTIAL EVAPOTRANSPIRATION WITH RESPECT TO CLIMATE CHANGE AND MAGNITUDES OF EXTREME EVENTS",
      Title29: "2D MATER",
      Title20: "2D MATER",
      ISSN: "2053-1583",
      EISSN: "2053-1583"
    }
  ]
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
  // // 获取条件总数
  // getConditionTotal({ commit }, total) {
  //   commit("setConditionTotal", total);
  // },
  // // 获取条件数组
  // getConditionList({ commit }, conditions) {
  //   commit("setConditionList", conditions);
  // }
};

// mutations
const mutations = {
  // // 提交条件总数
  // setConditionTotal(state, total) {
  //   state.conditionTotal = total;
  // },
  // // 提交条件数组
  // setConditionList(state, conditions) {
  //   state.conditionList = conditions;
  // }
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
};
