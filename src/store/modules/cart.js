import { addCartAPI, getCartListAPI, deleteCartByIdAPI } from "@/apis/cart";
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
      提供一个方法：设置购物车列表的值
    */
    setCartList(state, newList) {
      state.cartList = newList;
      localStorage.setItem("cartList", JSON.stringify(state.cartList));
    },

    /* 
      提供一个方法：改变小选框的状态 true/false
    */
    changeSingleStatus(state, goodsId) {
      // 从购物车列表中选出当前要修改小选框状态的这个商品
      const selectedGoods = state.cartList.find(
        (item) => item.goodsId === goodsId
      );
      // isChecked属性取反
      selectedGoods.isChecked = !selectedGoods.isChecked;
    },

    /* 
      提供一个方法：同步设置所有小选框的状态 treu/false
    */
    syncChangeAllBoxesStatus(state, flag) {
      // 遍历购物车列表 修改小选框的值
      state.cartList?.forEach((item) => {
        item.isChecked = flag;
      });
    },
  },
  actions: {
    /* 
      调用接口：加入购物车
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
      调用接口：获取购物车列表
    */
    async getCartListAction(context, userId) {
      const res = await getCartListAPI(userId);
      // console.log(context.state.cartList);
      // 后台返回的数据中，不包含复选框的选中状态，为了实现将来的功能
      // 需要手动维护数据，给每一项，添加一个isChecked状态 标记当前商品是否选中
      // 默认为选中状态
      res.data?.forEach((item) => {
        item.isChecked = true;
      });
      context.commit("setCartList", res.data);
    },

    /* 
      调用接口：删除购物车中的商品
    */
    async deleteCartByIdAction(context, obj) {
      const res = await deleteCartByIdAPI(obj.cartId);
      if (res.code === "H0000") {
        Message({
          type: "success",
          message: "删除成功！",
        });
        context.dispatch("getCartListAction", obj.userId);
      }
    },
  },
  getters: {
    /* 
        提供一个计算属性：判断当前是否是全选状态
    */
    isAllBoxesChecked(state) {
      return state.cartList?.every((item) => item.isChecked);
    },
    /* 
        提供一个计算属性：获取购物车列表中选中的商品
    */
    selCartList(state) {
      return state.cartList?.filter((item) => item.isChecked);
    },

    /* 
        提供一个计算属性：获取购物车列表中选中的商品的总数
    */
    selCount(state, getters) {
      return getters.selCartList?.reduce((sum, item) => sum + item.number, 0);
    },
    /* 
        提供一个计算属性：获取购物车列表中选中的商品的总价格
    */
    selPrice(state, getters) {
      return getters.selCartList
        ?.reduce((sum, item) => {
          return sum + item.number * item.disPrice;
        }, 0)
        .toFixed(2);
    },

    /* 
        提供一个计算属性：获取购物车列表中全部的商品数量
    */
    totalGoodsInCart(state) {
      return state.cartList?.reduce((sum, item) => sum + item.number, 0);
    },
  },
};
