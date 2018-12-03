import axios from "./http";

export const search = params => {
  return axios({
    url: "/periodical/current/search",
    method: "post",
    data: params
  });
};

export const login = params => {
  return axios({
    url: "/user/login",
    method: "post",
    data: params
  });
};

export default {
  search,
  login
};
