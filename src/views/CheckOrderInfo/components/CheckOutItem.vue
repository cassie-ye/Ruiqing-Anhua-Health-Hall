<template>
  <div class="wrapper">
    <div class="goods_data">
      <div class="desc_left">
        <img :src="goods.img" alt="">
      </div>
      <div class="desc_right">
        <div class="goods_name">{{goods.name}}</div>
        <div class="yunfei">运费：￥0.00</div>
      </div>
    </div>
    <div class="goods_price">￥{{goods.disPrice}}</div>
    <div class="goods_num">{{goods.number}}</div>
    <div class="goods_sum">￥{{goods.disPrice*goods.number}}</div>
    <div class="fact_pay">￥{{goods.disPrice*goods.number}}</div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  width: 98%;
  height: 120px;
//   background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f9f9f9;
  border-top: 0px solid #F0F9EB;
  .goods_data {
    width: 42%;
    height: 100%;
    // background-color: aquamarine;
    display: flex;
    align-items: center;
    // justify-content: center;
    font-size: 16px;
    .desc_left{
        width: 25%;
        height: 100%;
        // background-color: sandybrown;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .desc_right{
        width: 75%;
        height: 100%;
        // background-color: seagreen;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 2%;
        .goods_name{
            margin-top: -6%;
            margin-bottom: 2%;
            font-size: 16px;

        }.yunfei{
            color: #C9C9C9;
            font-size: 16px;
        }
    }
  }
  .goods_price,
  .goods_num,
  .goods_sum,
  .fact_pay {
    width: 14.5%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
