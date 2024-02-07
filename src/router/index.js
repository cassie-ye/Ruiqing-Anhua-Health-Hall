import Vue from "vue";
import VueRouter from "vue-router";
/* 
  Layout
*/
import Layout from "@/views/Layout";

/* 
  首页 所有商品 男生专场 女生专场 儿童专场
*/
import Home from "@/views/Home";
import AllGoods from "@/views/AllGoods";
import ManChannel from "@/views/ManChannel";
import WomanChannel from "@/views/WomanChannel";
import ChildrenChannel from "@/views/ChildrenChannel";

/* 
  我的购物车 我的资料 我的订单
*/
import MyCart from "@/views/MyCart";
import MyInfo from "@/views/MyInfo";
import MyOrder from "@/views/MyOrder";

/* 
  登录 注册
*/
import Login from "@/views/Login";
import Register from "@/views/Register";

/* 
  商品详情
*/
import GoodsDetail from "@/views/GoodsDetail";

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
  {
    path: "/myCart",
    component: MyCart,
  },
  {
    path: "/myOrder",
    component: MyOrder,
  },
  {
    path: "/myInfo",
    component: MyInfo,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/goodsdetail",
    component: GoodsDetail,
  },
];

const router = new VueRouter({
  routes,
  // 在不同路由切换的时候，可以自动滚动到页面的顶部，而不是停留在原先的位置
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

export default router;
