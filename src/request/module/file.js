import axios from "../http";

// 文件下载
export const download = params => {
  return axios({
    url: "/journal/download",
    method: "post",
    responseType: "blob",
    data: params,
    requiresAuth: true
  });
};

export default {
  download
};
