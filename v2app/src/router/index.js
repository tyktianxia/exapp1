import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "index",
    component: () => import("@/views/index.vue"),
    meta: {
      name: "首页",
      tx: 1,
    },
  },
  {
    path: "/qiniu",
    name: "qiniu",
    component: () => import("@/views/qiniu.vue"),
    meta: {
      name: "七牛测试",
      tx: 2,
    },
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
