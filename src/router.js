import Vue from "vue";
import Router from "vue-router";
import Common from "./views/Common.vue";
import Periodical from "./views/Periodical.vue";

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
