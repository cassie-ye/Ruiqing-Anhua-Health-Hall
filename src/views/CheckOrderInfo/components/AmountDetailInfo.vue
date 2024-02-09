<template>
  <div class="wrapper">
    <div class="money_detail">
      <div class="money_title"><span>金额明细</span></div>
      <div class="money_content">
        <div class="title">
          <div>商品件数：</div>
          <div>商品总价：</div>
          <div>运&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;费：</div>
          <div>应付总额：</div>
        </div>
        <div class="check">
          <div>{{ selCount }}件</div>
          <div>￥{{ selPrice }}</div>
          <div>￥0.00</div>
          <div class="price_red">￥{{ selPrice }}</div>
        </div>
      </div>
      <div class="button">
        <el-button
          @click="gotoChoosePayMethod"
          type="success"
          style="margin-right: 100px"
          plain
          >提交订单</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("cart", ["selCount", "selPrice"]),
  },
  methods: {
    // 点击按钮提交事件给父组件
    gotoChoosePayMethod() {
      this.$emit("gotoChoosePayMethod");
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  background-color: #fff;
  margin-bottom: 20px;
  .money_detail {
    width: 100%;
    height: 500px;
    background-color: #fff;
    .money_title {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
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
    .money_content {
      width: 98%;
      height: 280px;
      border-bottom: 1px solid #f6f6f6;
      display: flex;
      justify-content: end;
      .title,
      .check {
        width: 20%;
        height: 100%;
        // background-color: pink;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        font-size: 16px;
        .price_red {
          font-size: 20px;
          color: #cf4546;
          font-weight: bold;
        }
      }
    }
    .button {
      width: 100%;
      height: 140px;
      // background-color: pink;
      display: flex;
      align-items: center;
      justify-content: end;
    }
  }
}
</style>