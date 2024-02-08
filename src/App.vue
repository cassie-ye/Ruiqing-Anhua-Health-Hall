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
};
</script>
<style lang="less"></style>
