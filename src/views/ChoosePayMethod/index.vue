<template>
  <div>
    <!-- 头部黑色导航条 -->
    <HeaderBlack></HeaderBlack>
    <!-- 头部白色搜索导航条 -->
    <HeaderSearch></HeaderSearch>
    <!-- 支付倒计时 -->
    <Countdown></Countdown>
    <!-- 选择支付平台 -->
    <ChoosePaymentPlatform
      @gotoBalancePayment="gotoBalancePayment"
    ></ChoosePaymentPlatform>
  </div>
</template>

<script>
// 引入支付倒计时组件
import Countdown from "@/views/ChoosePayMethod/components/Countdown.vue";
// 引入选择余额支付组件
import ChoosePaymentPlatform from "@/views/ChoosePayMethod/components/ChoosePaymentPlatform.vue";
export default {
  components: {
    Countdown,
    ChoosePaymentPlatform,
  },
  methods: {
    // 点击余额支付选项跳转到余额宝平台
    gotoBalancePayment() {
      this.$router.push("/balancePayment");
    },
  },
};
</script>

<style>
</style>