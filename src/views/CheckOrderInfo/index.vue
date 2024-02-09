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
    <!-- 校验配送时间信息 -->
    <DeliveryTimeInfo></DeliveryTimeInfo>
    <!-- 校验支付方式信息 -->
    <PayMethodInfo></PayMethodInfo>
    <!-- 校验金额明细信息 -->
    <AmountDetailInfo
      @gotoChoosePayMethod="gotoChoosePayMethod"
    ></AmountDetailInfo>
    <!-- 底部 -->
    <Bottom></Bottom>
  </div>
</template>

<script>
// 引入地址信息组件
import AddressInfo from "@/views/CheckOrderInfo/components/AddressInfo.vue";
// 引入商品信息组件
import GoodsInfo from "@/views/CheckOrderInfo/components/GoodsInfo.vue";
// 引入配送时间信息组件
import DeliveryTimeInfo from "@/views/CheckOrderInfo/components/DeliveryTimeInfo.vue";
// 引入支付方式信息组件
import PayMethodInfo from "@/views/CheckOrderInfo/components/PayMethodInfo.vue";
// 引入金额明细信息组件
import AmountDetailInfo from "@/views/CheckOrderInfo/components/AmountDetailInfo.vue";
// 引入底部组件
import Bottom from "@/components/Nav/Bottom.vue";

export default {
  components: {
    AddressInfo,
    GoodsInfo,
    DeliveryTimeInfo,
    PayMethodInfo,
    AmountDetailInfo,
    Bottom,
  },
  methods: {
    // 接收子组件传过来的方法，点击跳转到选择支付方式页面
    gotoChoosePayMethod() {
      this.$router.push("/choosePayMethod");
    },
  },
};
</script>

<style>
</style>