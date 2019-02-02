import axios from "../http";
import store from "@/store/index";

// 查询全期
export const searchAll = () => {
  return axios({
    url: "/esi/all",
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

// 查询当期、当期新增、当期跌出
export const searchCurrent = time => {
  return axios({
    url: "/esi/" + time,
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
    url: "http://mock.eolinker.com/uhNYv5U215788ab75475306abb3164b8c20d25f46e7e136?uri=/allPaper/" + paperType,
    method: "post",
    data: {
      page: store.state.conditions.page,
      keyWord: store.state.conditions.keyword,
      ifDesc: store.state.conditions.ifDesc,
      conditionData: {
        month: store.getters.getConditionId.monthCondition,
        // year: store.getters.getConditionId.yearCondition,
        subject: store.getters.getConditionId.subjectCondition
      }
    },
    requiresAuth: true
  });
};

// 查询我校esi顶级论文
export const searchOurPaper = paperType => {
  return axios({
    url: "http://mock.eolinker.com/uhNYv5U215788ab75475306abb3164b8c20d25f46e7e136?uri=/ourPaper/" + paperType,
    method: "post",
    data: {
      page: store.state.conditions.page,
      keyWord: store.state.conditions.keyword,
      ifDesc: store.state.conditions.ifDesc,
      conditionData: {
        month: store.getters.getConditionId.monthCondition,
        // year: store.getters.getConditionId.yearCondition,
        subject: store.getters.getConditionId.subjectCondition
      }
    },
    requiresAuth: true
  });
};

export default {
  searchAll,
  searchCurrent,
  searchGlobalPaper,
  searchOurPaper
};
