import axios from "axios";
// import qs from "qs"; // 序列化请求数据，视服务端的要求
// import router from "../router";

const Axios = axios.create({
  baseURL: "http://106.14.153.164:6374",
  // baseURL: "http://localhost:8080",
  timeout: 40000,
  responseType: "json",
  withCredentials: false, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
});

//POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    // if (config.method === "post") {
    //   // 序列化
    //   config.data = qs.stringify(config.data);
    // }

    // 若是有做鉴权token , 就给头部带上token
    // 若是需要跨站点,存放到 cookie 会好一点,限制也没那么多,有些浏览环境限制了 localstorage 的使用
    // 这里localStorage一般是请求成功后我们自行写入到本地的,因为你放在vuex刷新就没了
    // 一些必要的数据写入本地,优先从本地读取

    // 这里在api.js里面加了一个参数，控制是否需要传递鉴权
    // 当有requiresAuth且为true是加上鉴权
    if (
      config.requiresAuth &&
      config.requiresAuth === true &&
      localStorage.loginUserBaseInfo &&
      JSON.parse(localStorage.loginUserBaseInfo).jwtCode
    ) {
      let token = JSON.parse(localStorage.loginUserBaseInfo).jwtCode;
      config.headers.Authorization = token;
    }
    console.log("config:", config);
    return config;
  },
  error => {
    // error 的回调信息
    console.log("request:", error);
    return Promise.reject(error);
  }
);

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  res => {
    // if (res.data instanceof Blob) {
    //   console.log("Blob");
    // }
    //对响应数据做些事,data存在且不为Blob，且返回code不为200
    if (res.data && !(res.data instanceof Blob) && !(res.data.code === 200)) {
      console.log("返回状态判断");
      console.log("res:", res);
      // alert(res.data.msg);
      window.$message.success(res.data.msg);
      // return Promise.reject(res.data.msg);
    }
    // message.msg("info", "test");
    console.log("res:", res);
    return res;
  },
  error => {
    if (error && error.response) {
      let msg = error.response.data.msg;
      switch (error.response.status) {
        case 400:
          window.$message.error("请求错误：" + msg);
          break;
        case 401:
          window.$message.error("未经授权的：" + msg);
          break;
        case 403:
          window.$message.error("拒绝访问：" + msg);
          break;
        case 404:
          window.$message.error("请求地址未找到：" + msg);
          break;
        case 500:
          window.$message.error("内部错误：" + msg);
          break;
        default:
          window.$message.error("错误：" + msg);
      }
    }
    console.log("response:", error.response);
    return Promise.reject(error.response);
  }
);

export default Axios;
