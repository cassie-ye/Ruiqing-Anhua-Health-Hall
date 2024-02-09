import { addShopOrderAPI, getOrderListByIdAPI } from "@/apis/order";
import { Message } from "element-ui";
export default {
  namespaced: true,
  state() {
    return {
      orderList: [],
    };
  },
  mutations: {
    /* 
        提供一个方法：设置订单列表的值
    */
    setOrderList(state, newList) {
      state.orderList = newList;
    },
  },
  actions: {
    /* 
        调用下单接口
    */
    async addOrderAction(context, obj) {
      const res = await addShopOrderAPI(obj);
      if (res.code === "H0000") {
        Message({
          type: "success",
          message: "下单成功！",
        });
        context.dispatch("getOrderListAction", obj.userId);
      }
    },

    /* 
        提供一个方法：获取订单列表
    */
    async getOrderListAction(context, userId) {
      const res = await getOrderListByIdAPI(userId);
      if (res.code === "H0000") {
        context.commit("setOrderList", res.data);
      }
    },
  },
  getters: {},
};
