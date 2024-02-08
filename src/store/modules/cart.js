import { addCartAPI, getCartListAPI } from "@/apis/cart";
import { Message } from "element-ui";
export default {
  namespaced: true,
  state() {
    return {
      /* 
        购物车列表
      */
      cartList: JSON.parse(localStorage.getItem("cartList") || "[]"),
    };
  },
  mutations: {
    /* 
      提供一个设置cartList的mutation
    */
    setCartList(state, newList) {
      state.cartList = newList;
      localStorage.setItem("cartList", JSON.stringify(state.cartList));
    },
  },
  actions: {
    /* 
      加入购物车
    */
    async addCartAction(context, obj) {
      const res = await addCartAPI(obj);
      // 提示用户加入购物车成功
      if (res.code === "H0000") {
        Message({
          type: "success",
          message: "加入购物车成功！",
        });
        // 重新拉取最新的购物车数据 重新渲染
        context.dispatch("getCartListAction", obj.userId);
      }
    },

    /* 
      获取购物车列表
    */
    async getCartListAction(context, userId) {
      const res = await getCartListAPI(userId);
      context.commit("setCartList", res.data);
      // console.log(context.state.cartList);
    },
  },
  getters: {},
};
