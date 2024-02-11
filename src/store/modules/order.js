import {
  addShopOrderAPI,
  getOrderListByIdAPI,
  deleteOrderByIdAPI,
} from "@/apis/order";
import { Message } from "element-ui";
export default {
  namespaced: true,
  state() {
    return {
      /* 
        当前登录的用户的订单列表
    */
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

    /* 
      提供一个方法：改变小选框的状态 true/false
    */
    changeSingleStatus(state, orderId) {
      // 从订单列表中选出当前要修改小选框状态的这个商品
      const selectedOrder = state.orderList.find((item) => item.id === orderId);
      // isChecked属性取反
      selectedOrder.isChecked = !selectedOrder.isChecked;
    },

    /* 
        提供一个方法：同步设置所有小选框的状态 treu/false
      */
    syncChangeAllBoxesStatus(state, flag) {
      // 遍历订单列表 修改小选框的值
      state.orderList?.forEach((item) => {
        item.isChecked = flag;
      });
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
        // 后台返回的数据中，不包含复选框的选中状态，为了实现将来的功能
        // 需要手动维护数据，给每一项，添加一个isChecked状态 标记当前商品是否选中
        // 默认为选中状态
        res.data?.forEach((item) => {
          item.isChecked = true;
        });
        context.commit("setOrderList", res.data);
    },

    /* 
        提供一个方法：删除订单
    */
    async deleteOrderByIdAction(context, obj) {
      await deleteOrderByIdAPI(obj.orderId);
      // context.dispatch("getOrderListAction", obj.userId);
    },
  },
  getters: {
    /* 
        提供一个计算属性：判断当前是否是全选状态
    */
    isAllBoxesChecked(state) {
      return state.orderList?.every((item) => item.isChecked);
    },

    /* 
        提供一个计算属性：获取订单列表中选中的商品
    */
    selOrderList(state) {
      return state.orderList?.filter((item) => item.isChecked);
    },
  },
};
