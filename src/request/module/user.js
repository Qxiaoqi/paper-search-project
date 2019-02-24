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
    requiresAuth: true
  });
};

// 后台上传重定向
export const getManRegister = () => {
  return axios({
    url: "/user/manageRegister",
    method: "get",
    requiresAuth: true
  });
};

// 后台注册重定向
export const getManUpload = () => {
  return axios({
    url: "/user/manageUpload",
    method: "get",
    requiresAuth: true
  });
};

export default {
  login,
  register,
  getManRegister,
  getManUpload
};
