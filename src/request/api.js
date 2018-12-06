import axios from "./http";
import store from "@/store/index";

console.log(store);

export const login = params => {
  return axios({
    url: "/user/login",
    method: "post",
    data: params,
    requiresAuth: false
  });
};

export const register = params => {
  return axios({
    url: "/user/register",
    method: "post",
    data: params,
    requiresAuth: false
  });
};

export const search = () => {
  return axios({
    url: "/esi/search",
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

export const getAllYear = () => {
  return axios({
    url: "/time/allYear",
    method: "get",
    requiresAuth: false
  });
};

export default {
  login,
  register,
  search,
  getAllYear
};
