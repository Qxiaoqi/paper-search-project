import axios from "../http";

export const getAllYear = () => {
  return axios({
    url: "/time/allYear",
    method: "get",
    requiresAuth: true
  });
};

export const getLoginCode = () => {
  return axios({
    url: "/captcha",
    method: "get",
    requiresAuth: false
  });
};

export default {
  getAllYear,
  getLoginCode
};
