import axios from "./http";

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

export const search = params => {
  return axios({
    url: "/esi/search",
    method: "post",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    data: params,
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
