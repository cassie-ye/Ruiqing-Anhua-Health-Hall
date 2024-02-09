<template>
  <div class="wrapper">
    <div class="goods_info">
      <div class="info_top"><span>商品信息</span></div>
      <div class="info_content">
        <div class="content_top">
          <div class="goods_data">商品信息</div>
          <div class="goods_price">单价</div>
          <div class="goods_num">数量</div>
          <div class="goods_sum">小计</div>
          <div class="fact_pay">实付</div>
        </div>
        <div
          class="content_data"
          v-for="(item, index) in selCartList"
          :key="index"
        >
          <CheckOutItem :goods="item"></CheckOutItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CheckOutItem from "@/views/CheckOrderInfo/components/CheckOutItem";
export default {
  computed: {
    ...mapGetters("cart", ["selCartList"]),
  },
  components: {
    CheckOutItem
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  background-color: #fff;
  .goods_info {
    width: 100%;
    // height: 300px;
    background-color: #fff;
    .info_top {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
      // background-color: skyblue;
      span {
        display: flex;
        align-items: center;
        padding-left: 35px;
        border-bottom: 1px solid #f6f6f6;
        font-size: 18px;
        width: 98%;
        height: 100%;
      }
    }
    .info_content {
      width: 100%;
      .content_top,
      .content_data {
        width: 100%;
        display: flex;
        .goods_data {
          width: 42%;
          // background-color: aquamarine;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }
        .goods_price,
        .goods_num,
        .goods_sum,
        .fact_pay {
          width: 14.5%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
        }
      }
      .content_top {
        margin-top: 20px;
        height: 60px;
        background-color: #f0f9eb;
      }
      .content_data {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>