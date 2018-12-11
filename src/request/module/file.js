import axios from "../http";

// 文件下载
export const download = params => {
  return axios({
    url: "/esi/download",
    method: "post",
    responseType: "blob",
    data: params,
    requiresAuth: true
  });
};

export default {
  download
};
