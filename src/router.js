import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Common from "./views/Common.vue";
import Periodical from "./views/content/Periodical.vue";
import Management from "./views/Management.vue";
import ErrorView from "./views/ErrorView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  // 此处路由分为三块，登录，内容，后台三部分
  // 内容部分做了二次路由，来使导航栏和侧边过滤栏不用每次渲染
  // 内容部分的路由都写在children里面嵌套即可
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/library/periodical/current"
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/library",
      name: "library",
      component: Common,
      children: [
        {
          path: "periodical/:periodicalTime",
          name: "periodical",
          component: Periodical
        }
      ]
    },
    {
      path: "/management",
      name: "management",
      component: Management
    },
    {
      path: "/error",
      name: "error",
      component: ErrorView
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
