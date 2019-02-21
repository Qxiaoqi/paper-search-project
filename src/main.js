import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
// import axios from "axios";
import api from "./request/api";
import "normalize.css"; //css部分初始化
import "font-awesome/css/font-awesome.css"; //icon
import vMessage from "./components/message/index"; //封装的全局提示组件

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.use(vMessage);
// Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
