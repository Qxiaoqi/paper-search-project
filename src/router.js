import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Common from "./views/Common.vue";
import Periodical from "./views/content/Periodical.vue";
import Management from "./views/Management.vue";
import ErrorView from "./views/ErrorView.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  // 此处路由分为三块，登录，内容，后台三部分
  // 内容部分做了二次路由，来使导航栏和侧边过滤栏不用每次渲染
  // 内容部分的路由都写在children里面嵌套即可
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/library/periodical/current",
      meta: { requiresAuth: true }
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
          component: Periodical,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: "/management",
      name: "management",
      component: Management,
      children: [
        {
          path: "upload",
          meta: { requiresAuth: true },
          component: () => import("./views/management-page/Upload.vue")
        },
        {
          path: "register",
          meta: { requiresAuth: true },
          component: () => import("./views/management-page/Register.vue")
        }
      ]
    },
    {
      path: "/error",
      name: "error",
      component: ErrorView,
      children: [
        {
          path: "401",
          component: () => import("./views/error/401.vue")
        },
        {
          path: "404",
          component: () => import("./views/error/404.vue")
        }
      ]
    }
  ]
});

// vue-router导航守卫，全局守卫
// 并不是所有页面请求都需要加上token，所以需要做一个全局守卫
// 在路由meta加一个字段requiresAuth,设置为true则必须加上鉴权
// 登录页不需要鉴权
router.beforeEach((to, from, next) => {
  // 如果检测到meta含有字段
  if (to.matched.some(res => res.meta.requiresAuth)) {
    // 检测是否有鉴权信息
    if (localStorage.loginUserBaseInfo) {
      let lifeTime = JSON.parse(localStorage.loginUserBaseInfo).lifeTime;
      let nowTime = new Date().getTime();
      // 比较当前时间和过期时间
      if (nowTime < lifeTime) {
        // 有鉴权信息而且未过期
        next();
      } else {
        // 鉴权已过期，跳转到登录页
        alert("登录状态过期，请重新登录");
        next({
          path: "/login"
        });
      }
    } else {
      // 没有鉴权信息，跳转到登录页
      alert("登录状态过期，请重新登录");
      next({
        path: "/login"
      });
    }
  } else {
    // 无需鉴权信息，继续
    next();
  }
});

export default router;
