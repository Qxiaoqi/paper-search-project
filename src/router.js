import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import Common from "./views/Common.vue";
import Periodical from "./views/content/Periodical.vue";
import Paper from "./views/content/Paper.vue";
import Baseline from "./views/content/Baseline.vue";
import Potential from "./views/content/Potential.vue";
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
    // 根目录重定向
    {
      path: "/",
      name: "home",
      redirect: "/periodical/current",
      meta: { requiresAuth: true }
    },
    // 登录页
    {
      path: "/login",
      name: "login",
      component: Login
    },
    // 主体查询页
    {
      path: "/",
      component: Common,
      children: [
        // esi期刊
        {
          path: "/periodical/:periodicalTime",
          name: "periodical",
          component: Periodical,
          meta: { requiresAuth: true }
        },
        // 顶级论文
        {
          path: "/globalPaper/:paperType",
          name: "globalPaper",
          component: Paper,
          meta: { requiresAuth: true }
        },
        // 我校顶级论文
        {
          path: "/schoolPaper/:paperType",
          name: "schoolPaper",
          component: Paper,
          meta: { requiresAuth: true }
        },
        // 基准线和被引阈值
        {
          path: "/baseline",
          name: "baseline",
          component: Baseline,
          meta: { requiresAuth: true }
        },
        // 我校高被引论文潜力值查询
        {
          path: "/potential",
          name: "potential",
          component: Potential,
          meta: { requiresAuth: true }
        }
      ]
    },
    // // 论文
    // {
    //   path: "/parper",
    //   component: Common,
    //   children: [
    //     {
    //       path: "global/:paperType",
    //       name: "global",
    //       component: Paper,
    //       meta: { requiresAuth: true }
    //     }
    //   ]
    // },
    // 后台管理页面
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
    // 错误页面
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
        // alert("登录状态过期，请重新登录");
        window.$message.error("登录状态过期，请重新登录");
        next({
          path: "/login"
        });
      }
    } else {
      // 没有鉴权信息，跳转到登录页
      window.$message.error("登录状态过期，请重新登录");
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
