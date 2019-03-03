import axios from "../http";
import store from "@/store/index";

// 查询期刊全期
export const searchAll = () => {
  return axios({
    url: "/journal/all",
    method: "post",
    data: {
      page: store.state.conditions.page,
      keyWord: store.state.conditions.keyword,
      ifDesc: store.state.conditions.ifDesc,
      conditionData: {
        month: store.getters.getConditionId.monthCondition,
        year: store.getters.getConditionId.yearCondition,
        subject: store.getters.getConditionId.subjectCondition
      }
    },
    requiresAuth: true
  });
};

// 查询期刊当期、当期新增、当期跌出
export const searchCurrent = time => {
  return axios({
    url: "/journal/" + time,
    method: "post",
    data: {
      pageNum: store.state.conditions.page,
      keyWord: store.state.conditions.keyword,
      ifDesc: store.state.conditions.ifDesc,
      subject: store.getters.getConditionId.subjectCondition
    },
    requiresAuth: true
  });
};

// 查询esi顶级论文
export const searchGlobalPaper = paperType => {
  return axios({
    url: "/allPaper/" + paperType,
    method: "post",
    data: {
      page: store.state.conditions.page,
      keyWordType: store.state.conditions.keywordType,
      keyWord: store.state.conditions.keyword,
      ifDesc: store.state.conditions.ifDesc,
      conditionData: {
        month: store.getters.getConditionId.monthCondition,
        year: store.getters.getConditionId.yearCondition,
        subject: store.getters.getConditionId.subjectCondition
      }
    },
    requiresAuth: true
  });
};

// 查询我校esi顶级论文
export const searchOurPaper = paperType => {
  return axios({
    url: "/ourPaper/" + paperType,
    method: "post",
    data: {
      page: store.state.conditions.page,
      keyWordType: store.state.conditions.keywordType,
      keyWord: store.state.conditions.keyword,
      ifDesc: store.state.conditions.ifDesc,
      conditionData: {
        month: store.getters.getConditionId.monthCondition,
        year: store.getters.getConditionId.yearCondition,
        subject: store.getters.getConditionId.subjectCondition
      }
    },
    requiresAuth: true
  });
};

// // 查询总基准线
// export const searchBaselineAll = () => {
//   return axios({
//     url: "/baseLine/byAll",
//     method: "post",
//     data: null,
//     requiresAuth: true
//   });
// };

// 按查询学科基准线
export const searchBaseline = () => {
  return axios({
    url: "/baseLine/byCategory",
    method: "post",
    data: {
      subjects: store.getters.getConditionId.subjectCondition
    },
    requiresAuth: true
  });
};

// 按查询学科基准线
export const searchBaselineAll = () => {
  return axios({
    url: "/baseLine/byCategory",
    method: "post",
    data: {
      subjects: [1024]
    },
    requiresAuth: true
  });
};

export default {
  searchAll,
  searchCurrent,
  searchGlobalPaper,
  searchOurPaper,
  searchBaselineAll,
  searchBaseline
};
