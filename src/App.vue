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
import { addShopOrderAPI } from "@/apis/order";
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
    async addShopOrder(obj) {
      const res = await addShopOrderAPI(obj);
      console.log(res);
    },
  },
  created() {
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
