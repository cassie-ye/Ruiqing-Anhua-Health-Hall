<template>
  <div id="app">
    <!-- 返回顶部按钮 -->
    <BackTop></BackTop>
    <!-- 一级路由出口 -->
    <RouterView></RouterView>
  </div>
</template>
<script>
// import { deleteCartByIdAPI } from "@/apis/cart";
// import {mapActions } from "vuex";
import { addShopOrderAPI, deleteOrderByIdAPI } from "@/apis/order";
import { mapActions } from "vuex";
export default {
  // methods: {
  //   ...mapActions('cart',["deleteCartByIdAction"]),
  //   // async delete() {
  //   //   await deleteCartByIdAPI(233);
  //   // },
  // },
  // created() {
  //   this.deleteCartByIdAction({cartId:234,userId:2});
  // },
  methods: {
    ...mapActions("order", ["deleteOrderByIdAction"]),
    async addShopOrder(obj) {
      const res = await addShopOrderAPI(obj);
      console.log(res);
    },
    async deleteOrderById(orderId) {
      await deleteOrderByIdAPI(orderId);
    },
  },
  created() {
    // this.deleteOrderByIdAction({
    //   orderId: 1272,
    //   userId: 2,
    // });
    // this.deleteOrderById(1281);
    // this.addShopOrder({
    //   userId: 2,
    //   goodsId: 11207,
    //   number: 222,
    //   totalPrice: 350.0,
    // });
  },
};
</script>
<style lang="less"></style>
