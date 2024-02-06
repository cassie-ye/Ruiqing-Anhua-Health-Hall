<template>
  <div class="all">
    <!-- 上面半圆 -->
    <div class="top_radius"></div>
    <!-- 下面半圆 -->
    <div class="bottom_radius"></div>
    <!-- 左边商品信息部分 -->
    <div class="left">
      <!-- 上面部分 -->
      <div class="top_price">
        <!-- ￥ -->
        <div class="rmb">￥</div>
        <!-- 价格 -->
        <div class="price">{{coupon.price}}</div>
        <!-- 满1500可用 -->
        <div class="full">满{{coupon.full}}可用</div>
        <!-- 日期 -->
        <div class="date">{{coupon.date}}</div>
      </div>
      <!-- 店铺优惠部分 -->
      <div class="Preferential">
        <div class="shop_pre">店铺优惠</div>
      </div>
    </div>
    <!-- 左右中间的虚线 -->
    <div class="wei"></div>
    <!-- 右边立即领取部分 -->
    <div class="right">立<br />即<br />领<br />取</div>
  </div>
</template>

<script>
export default {
  props: {
    coupon: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.all:hover{
  background-color: #ddf4ee;
  border: 1px solid #5fceb0;
}
.all:hover .left .top_price .rmb,
.all:hover .left .top_price .price,
.all:hover .left .top_price .full,
.all:hover .left .top_price .date,
.all:hover .right
{
  color: #5fceb0;
}
.all {
      transition: all 0.4s ease;

  display: flex;
  justify-content: space-between;
  position: relative;
  // margin-top: 20px;
  // margin-bottom: 100px;
  // margin-left: 400px;
  width: 260px;
  height: 120px;
  background-color: #5fceb0;
  border-radius: 8px;
  .top_radius {
    position: absolute;
    right: 42px;
    top: -9px;
    width: 18px;
    height: 18px;
    border-radius: 18px;
    background-color: #fff;
  }
  .bottom_radius {
    position: absolute;
    right: 42px;
    bottom: -9px;
    width: 18px;
    height: 18px;
    border-radius: 18px;
    background-color: #fff;
  }
  .wei {
    position: absolute;
    right: 50px;
    top: 14px;
    width: 0.3px;
    height: 90px;
    border: 1px dashed #afe6d7;
  }
  .left {
    width: 76%;
    height: 100%;
    // background-color: pink;
    .top_price {
      position: relative;
      width: 100%;
      height: 58%;
      // background-color: lavenderblush;
      .rmb {
        position: absolute;
        color: #fff;
        font-size: 18px;
        left: 10px;
        top: 10px;
      }
      .price {
        position: absolute;
        color: #fff;
        font-weight: bold;
        font-size: 36px;
        left: 24px;
        top: 8px;
      }
      .full {
        position: absolute;
        color: #fff;
        font-size: 13px;
        right: 2px;
        top: 33px;
      }
      .date {
        position: absolute;
        right: 2px;
        color: #b5e8da;
        font-size: 12px;
        top: 52px;
      }
    }
    .Preferential {
      width: 100%;
      height: 42%;
      // background-color: sandybrown;
      .shop_pre {
        margin-top: 5px;
        margin-left: 14px;
        width: 92%;
        height: 25px;
        background-color: #6fd3b8;
        border-radius: 5px;
        color: #ddf4ee;
        font-size: 13px;
        line-height: 25px;
        padding-left: 8px;
      }
    }
  }
  .right {
    width: 15%;
    height: 100%;
    // background-color: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding-right: 10px;
  }
}
</style>
