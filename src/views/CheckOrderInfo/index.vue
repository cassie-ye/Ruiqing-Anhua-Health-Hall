<template>
  <div>
    <!-- 头部黑色导航条 -->
    <HeaderBlack></HeaderBlack>
    <!-- 头部白色搜索导航条 -->
    <HeaderSearch></HeaderSearch>
    <!-- 校验地址信息 -->
    <AddressInfo></AddressInfo>
    <!-- 校验商品信息 -->
    <GoodsInfo></GoodsInfo>
  </div>
</template>

<script>
// 引入地址信息组件
import AddressInfo from "@/views/CheckOrderInfo/components/AddressInfo.vue";
// 引入商品信息组件
import GoodsInfo from "@/views/CheckOrderInfo/components/GoodsInfo.vue";
export default {
  components: {
    AddressInfo,
    GoodsInfo,
  },
};
</script>

<style>
</style>