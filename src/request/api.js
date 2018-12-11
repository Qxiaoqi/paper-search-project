// import axios from "./http";
// import store from "@/store/index";
import user from "./module/user";
import get from "./module/get";
import search from "./module/search";
import file from "./module/file";

// // 登录
// export const login = params => {
//   return axios({
//     url: "/user/login",
//     method: "post",
//     data: params,
//     requiresAuth: false
//   });
// };

// // 注册
// export const register = params => {
//   return axios({
//     url: "/user/register",
//     method: "post",
//     data: params,
//     requiresAuth: false
//   });
// };

// // 文件下载
// export const download = params => {
//   return axios({
//     url: "/esi/download",
//     method: "post",
//     data: params,
//     requiresAuth: true
//   });
// };

// // 查询全期
// export const searchAll = () => {
//   return axios({
//     url: "/esi/all",
//     method: "post",
//     data: {
//       page: store.state.conditions.page,
//       keyWord: store.state.conditions.keyword,
//       ifDesc: store.state.conditions.ifDesc,
//       conditionData: {
//         month: store.getters.getConditionId.monthCondition,
//         year: store.getters.getConditionId.yearCondition,
//         subject: store.getters.getConditionId.subjectCondition
//       }
//     },
//     requiresAuth: true
//   });
// };

// // 查询当期、当期新增、当期跌出
// export const searchCurrent = time => {
//   return axios({
//     url: "/esi/" + time,
//     method: "post",
//     data: {
//       pageNum: store.state.conditions.page,
//       keyWord: store.state.conditions.keyword,
//       ifDesc: store.state.conditions.ifDesc,
//       subject: store.getters.getConditionId.subjectCondition
//     },
//     requiresAuth: true
//   });
// };

// export const getAllYear = () => {
//   return axios({
//     url: "/time/allYear",
//     method: "get",
//     requiresAuth: false
//   });
// };

// export const getLoginCode = () => {
//   return axios({
//     url: "/user/captcha",
//     method: "get",
//     requiresAuth: false
//   });
// };

export default {
  user,
  get,
  search,
  file
  // login,
  // register,
  // download
  // searchAll,
  // searchCurrent
  // getAllYear,
  // getLoginCode
};
