import axios from "../http";
import store from "@/store/index";

// 文件下载
export const download = params => {
  return axios({
    url: "/" + params.name + "/download",
    method: "post",
    responseType: "blob",
    data: params.exportData,
    requiresAuth: true
  });
};

// 文件上传
export const upload = params => {
  return axios({
    url: "/" + params.name + "/upload",
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data;charset=utf-8"
    },
    data: params.data,
    requiresAuth: true,
    onUploadProgress: function(progressEvent) {
      // 对原生进度事件的处理
      let complete = ((progressEvent.loaded / progressEvent.total) * 100) | 0;
      console.log(complete);
      store.dispatch("getFileUploadRate", complete);
    }
  });
};

// 文件删除
export const fileDelete = params => {
  return axios({
    url: params.path + "/delete",
    method: "post",
    data: params.data,
    requiresAuth: true
  });
};

export default {
  download,
  upload,
  fileDelete
};
