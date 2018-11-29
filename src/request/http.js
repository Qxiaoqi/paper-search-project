import axios from "axios";
import qs from "qs"; // 序列化请求数据，视服务端的要求

const Axios = axios.create({
  baseURL:
    "http://mock.eolinker.com/uhNYv5U215788ab75475306abb3164b8c20d25f46e7e136?uri=",
  timeout: 10000,
  responseType: "json",
  withCredentials: false, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
});

//POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    if (config.method === "post") {
      // 序列化
      config.data = qs.stringify(config.data);
    }

    // // 若是有做鉴权token , 就给头部带上token
    // // 若是需要跨站点,存放到 cookie 会好一点,限制也没那么多,有些浏览环境限制了 localstorage 的使用
    // // 这里localStorage一般是请求成功后我们自行写入到本地的,因为你放在vuex刷新就没了
    // // 一些必要的数据写入本地,优先从本地读取
    // if (localStorage.token) {
    //   config.headers.Authorization = localStorage.token;
    // }
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
    // //对响应数据做些事
    // if (res.data && !res.data.success) {
    //   console.log("返回状态判断");
    //   return Promise.reject(res.data.error.message);
    // }
    console.log("res:", res);
    return res;
  },
  error => {
    // // 用户登录的时候会拿到一个基础信息,比如用户名,token,过期时间戳
    // // 直接丢localStorage或者sessionStorage
    // if (!window.localStorage.getItem("loginUserBaseInfo")) {
    //   // 若是接口访问的时候没有发现有鉴权的基础信息,直接返回登录页
    //   router.push({
    //     path: "/login"
    //   });
    // } else {
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
    //   } else {
    //     // 下面是接口回调的satus ,因为我做了一些错误页面,所以都会指向对应的报错页面
    //     if (error.response.status === 403) {
    //       router.push({
    //         path: "/error/403"
    //       });
    //     }
    //     if (error.response.status === 500) {
    //       router.push({
    //         path: "/error/500"
    //       });
    //     }
    //     if (error.response.status === 502) {
    //       router.push({
    //         path: "/error/502"
    //       });
    //     }
    //     if (error.response.status === 404) {
    //       router.push({
    //         path: "/error/404"
    //       });
    //     }
    //   }
    // }
    // 返回 response 里的错误信息
    // let errorInfo = error.data.error ? error.data.error.message : error.data;
    return Promise.reject(error.res);
  }
);

export default Axios;
