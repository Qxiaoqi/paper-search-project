import axios from "./http";

export const search = params => {
  return axios({
    url: "/periodical/current/search",
    method: "post",
    params
  });
};

export default {
  search
};
