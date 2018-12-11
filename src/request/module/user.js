import axios from "../http";

export const login = params => {
  return axios({
    url: "/user/login",
    method: "post",
    data: params,
    requiresAuth: false
  });
};

// 注册
export const register = params => {
  return axios({
    url: "/user/register",
    method: "post",
    data: params,
    requiresAuth: false
  });
};

export default {
  login,
  register
};
