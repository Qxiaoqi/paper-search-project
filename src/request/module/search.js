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

export default {
  searchAll,
  searchCurrent
};
