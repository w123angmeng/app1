import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "parant",
    component: HomeView,
    // children: [
    //     {
    //         path: "/demo1",
    //         name: "demo1",
    //         redirect: "/demo1"
    //     },
    // ]
  },
  {
    path: "/outpNurseUniversalPrint",
    name: "outpNurseUniversalPrint",
    component: () =>import("../views/index.vue")
  },
  {
    path: "/demo1",
    name: "demo1",
    component: () =>import("../views/index.vue")
  },
  {
    path: "/demo2",
    name: "demo2",
    component: () =>
      import( "../views/demo2.vue"),
  },
];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

export default routes;
