import axios from "axios";
// import qs from "qs"; // 序列化请求数据，视服务端的要求
// import router from "../router";

const Axios = axios.create({
  baseURL: "http://106.14.153.164:6374",
  timeout: 10000,
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
    //对响应数据做些事
    if (res.data && !(res.data.code === 200)) {
      console.log("返回状态判断");
      // console.log("res:", res);
      alert(res.data.msg);
      return Promise.reject(res.data.msg);
    }
    console.log("res:", res);
    return res;
  },
  error => {
    if (error && error.response) {
      let msg = error.response.data.msg;
      switch (error.response.status) {
        case 400:
          alert("请求错误：" + msg);
          break;
        case 401:
          alert("未经授权的" + msg);
          break;
        case 403:
          alert("拒绝访问" + msg);
          break;
        case 404:
          alert("请求地址出错" + msg);
          break;
        case 500:
          alert("服务器内部错误");
          break;
        default:
          alert("错误");
      }
    }
    // 用户登录的时候会拿到一个基础信息,比如用户名,token,过期时间戳
    // 直接丢localStorage或者sessionStorage
    // if (!window.localStorage.getItem("loginUserBaseInfo")) {
    //   // 若是接口访问的时候没有发现有鉴权的基础信息,直接返回登录页
    //   alert("没有鉴权信息");
    //   router.push({
    //     path: "/login"
    //   });
    // }
    // else {
    //   // 若是有基础信息的情况下,判断时间戳和当前的时间,若是当前的时间大于服务器过期的时间
    //   // 乖乖的返回去登录页重新登录
    //   let lifeTime =
    //     JSON.parse(window.localStorage.getItem("loginUserBaseInfo")).lifeTime *
    //     1000;
    //   let nowTime = new Date().getTime(); // 当前时间的时间戳
    //   console.log(nowTime, lifeTime);
    //   console.log(nowTime > lifeTime);
    //   if (nowTime > lifeTime) {
    //     Message({
    //       showClose: true,
    //       message: "登录状态信息过期,请重新登录",
    //       type: "error"
    //     });
    //     router.push({
    //       path: "/login"
    //     });
    //   }
    // else {
    // 下面是接口回调的satus ,因为我做了一些错误页面,所以都会指向对应的报错页面
    // if (error.response.status === 400) {
    //   alert("错误码: 400");
    //   // router.push({
    //   //   path: "/error"
    //   // });
    // }
    // if (error.response.status === 500) {
    //   alert("错误码: 500");
    //   // router.push({
    //   //   path: "/error"
    //   // });
    // }
    // if (error.response.status === 502) {
    //   alert("错误码: 502");
    //   // router.push({
    //   //   path: "/error"
    //   // });
    // }
    // if (error.response.status === 404) {
    //   alert("错误码: 404");
    //   // router.push({
    //   //   path: "/error"
    //   // });
    // }
    // }
    // 返回 response 里的错误信息
    // let errorInfo = error.data.error ? error.data.error.message : error.data;
    console.log("response:", error.response);
    return Promise.reject(error.response);
  }
);

export default Axios;
