<template>
  <div class="wrapper">
    <div class="pay">
      <div class="select">选择以下支付方式付款</div>
      <div class="pay_methods">
        <div class="pay_title">支付平台</div>
        <div class="pay_content">
          <button @click="gotoBalancePayment" class="yue">
            <i class="iconfont icon-yuezhifu"></i>
            <p>余额支付</p>
          </button>
          <button class="weixin">
            <i class="iconfont icon-weixinzhifu"></i>
            <p>微信支付</p>
          </button>
          <button class="zhifubao">
            <i class="iconfont icon-zhifubao1"></i>
            <p>支付宝</p>
          </button>
        </div>
      </div>
      <div class="pay_bank">
        <div class="pay_title">支付方式</div>
        <div class="pay_content">
          <button>
            <p>招商银行</p>
          </button>
          <button>
            <p>工商银行</p>
          </button>
          <button>
            <p>建设银行</p>
          </button>
          <button>
            <p>农业银行</p>
          </button>
          <button>
            <p>交通银行</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 提交事件给父组件
    gotoBalancePayment() {
      this.$emit("gotoBalancePayment");
    },
  },
};
</script>

<style lang="less" scoped>
.pay {
  margin-bottom: 20px;
  margin-top: 20px;
  width: 100%;
  height: 400px;
  background-color: #fff;
  .select {
    width: 100%;
    height: 70px;
    // background-color: pink;
    display: flex;
    align-items: center;
    font-size: 16px;
    padding-left: 30px;
  }
  .pay_methods,
  .pay_bank {
    width: 100%;
    height: 140px;
    // background-color: pink;
    .pay_title {
      width: 100%;
      height: 40%;
      //   background-color: salmon;
      display: flex;
      align-items: center;
      font-size: 16px;
      padding-left: 30px;
    }
    .pay_content {
      width: 100%;
      height: 60%;
      //   background-color: paleturquoise;
      display: flex;
      align-items: center;
      button {
        width: 150px;
        height: 55px;
        // background-color: mediumpurple;
        margin-left: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #e4e4e4;
      }
      button:hover {
        border: 2px solid #1dc779;
      }
      .yue {
        i {
          font-size: 35px;
          color: orangered;
          margin-right: 8px;
        }
      }
      .weixin {
        i {
          font-size: 25px;
          color: #00c900;
          margin-right: 8px;
        }
      }
      .zhifubao {
        i {
          font-size: 35px;
          color: #00acf4;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>