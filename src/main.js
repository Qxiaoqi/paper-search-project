import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "normalize.css"; //css部分初始化
import "font-awesome/css/font-awesome.css"; //icon

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
