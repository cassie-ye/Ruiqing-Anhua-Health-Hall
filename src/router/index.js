import Vue from "vue";
import VueRouter from "vue-router";
/* 
    Layout
*/
import Layout from '@/views/Layout'
/* 
    首页 所有商品 男生专场 女生专场 儿童专场
*/
import Home from "@/views/Home";
import AllGoods from "@/views/AllGoods";
import ManChannel from "@/views/ManChannel";
import WomanChannel from "@/views/WomanChannel";
import ChildrenChannel from "@/views/ChildrenChannel";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    // redirect: "/home",
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "/goods",
        component: AllGoods,
      },
      {
        path: "/man",
        component: ManChannel,
      },
      {
        path: "/woman",
        component: WomanChannel,
      },
      {
        path: "/child",
        component: ChildrenChannel,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
