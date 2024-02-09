<template>
  <div>
    <!-- 余额宝头部 余额宝|收银台 -->
    <BalanceHeader></BalanceHeader>
    <!-- 订单信息 合并支付？ 订单总金额 -->
    <OrderInfo></OrderInfo>
    <!-- 余额支付主要部分 **输入密码** -->
    <BanlancePayMain></BanlancePayMain>
  </div>
</template>

<script>
// 引入余额宝头部组件
import BalanceHeader from "@/views/BalancePayment/components/BalanceHeader.vue";
// 引入订单信息组件
import OrderInfo from "@/views/BalancePayment/components/OrderInfo.vue";
// 引入余额支付主要部分组件
import BanlancePayMain from "@/views/BalancePayment/components/BalancePayMain.vue";
export default {
  components: {
    BalanceHeader,
    OrderInfo,
    BanlancePayMain,
  },
};
</script>

<style>
</style>