<template>
  <div class="wrapper">
    <div class="pay">
      <div class="pay_top"><span>支付方式</span></div>
      <div class="pay_content">
        <button>在线支付</button>
        <button>货到付款</button>
        <button>花呗</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.wrapper {
  background-color: #fff;
  .pay {
    width: 100%;
    height: 200px;
    background-color: #fff;
    .pay_top {
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
    .pay_content {
      // background-color: pink;
      width: 100%;
      height: 120px;
      display: flex;
      align-items: center;
      button {
        width: 240px;
        height: 50px;
        // background-color: aquamarine;
        border: 2px solid #ccc;
        margin: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      button:hover {
        border: 2px solid #4ab344;
      }
      button:first-child {
        border: 2px solid #4ab344;
      }
    }
  }
}
</style>