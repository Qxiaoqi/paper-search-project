import axios from "../http";

export const getAllYear = () => {
  return axios({
    url: "/time/allYear",
    method: "get",
    requiresAuth: false
  });
};

export const getLoginCode = () => {
  return axios({
    url: "/user/captcha",
    method: "get",
    requiresAuth: false
  });
};

export default {
  getAllYear,
  getLoginCode
};
