<template>
  <div class="wrapper">
    <!-- 余额宝支付 -->
    <div class="pay_method">
      <!-- 左边 -->
      <div class="left">
        <div class="bank">
          <!-- 当前下单信息 -->
          <div class="selected">
            <!-- 单选框 默认选中 -->
            <input type="radio" checked name="" id="" />
            <div>余额支付</div>
            <!-- 手机号后4位 -->
            <div>{{ codePhone }}</div>
            <div>余额宝 | 快捷</div>
            <div class="price">
              <!-- 订单需要支付的价钱 -->
              支付 &nbsp;&nbsp;<span>{{ selPrice }}</span
              >&nbsp;&nbsp; 元
            </div>
          </div>
          <!-- 其他付款方式 -->
          <div class="others">
            <button>其他方式付款</button>
            <button>海外地区方式付款</button>
            <button>添加银行卡付款</button>
            <button>使用网银付款</button>
          </div>
        </div>
        <!-- 安全设置检测成功 -->
        <div class="succes">
          <i class="iconfont icon-wancheng"></i>
          <p>安全设置检测成功！</p>
        </div>
        <!-- 输入密码部分 -->
        <div class="password">
          <div class="inner">
            <!-- 余额宝支付密码： -->
            <p>余额宝支付密码：</p>
            <div class="second">
              <!-- 密码输入框 -->
              <div class="salary-container">
                <div class="dialog">
                  <div class="box-border">
                    <div class="box">
                      <input
                        class="int"
                        v-model="name"
                        maxlength="6"
                        type="password"
                      />
                      <div
                        class="enter"
                        v-for="(item, index) in password"
                        :key="index"
                      >
                        <!-- 跳跃的指示符 -->
                        <div :class="{ tips: place == index }"></div>
                        {{ item }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 忘记密码 -->
              <p class="forget">忘记密码？</p>
            </div>
            <p class="please">请输入6位数字支付密码</p>
            <!-- 确定按钮 -->
            <button @click="sure">确 定</button>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="content">
          <!-- 顶部 使用余额宝APP扫码 -->
          <div class="top_text">
            <i class="iconfont icon-saoyisao"></i>
            <p>使用余额宝APP扫码</p>
          </div>
          <!-- 二维码 -->
          <div class="pic">
            <!-- 余额宝图标 -->
            <div class="i">
              <i class="iconfont icon-yuezhifu"></i>
            </div>
            <!-- 余额宝二维码 -->
            <img src="@/assets/yuePay.jpg" alt="" />
          </div>
          <!-- 扫一扫快速付款 -->
          <div class="bottom_text">扫一扫快速付款</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      name: "",
      password: "",
      place: 0,
      // 最终转换为输入框显示的6个*
      password: ["", "", "", "", "", ""],
      // 最终输入密码的字符串数组
      correctPassword: ["", "", "", "", "", ""],
      // 商品下单所传过去的data对象
      orderInfo: {
        userId: 0,
        goodsId: 0,
        number: 0,
        totalPrice: 0,
      },
    };
  },
  methods: {
    ...mapActions("order", ["addOrderAction"]),
    ...mapActions("cart", ["deleteCartByIdAction"]),
    /* 
        用户输入余额宝支付密码后点击确定触发的事件
    */
    sure() {
      if (this.correctPassword.join("") === "330681") {
        /* 
            将购物车中选中的商品列表添加为一次新的订单记录
            将购物车中选中的商品列表删除
            提示用户支付成功
        */

        // 给商品下单所传过去的data对象赋值
        this.orderInfo.userId = this.userInfo.id;
        // 给订单对象的商品id 商品数量 商品总价赋值
        this.selCartList.forEach((item) => {
          this.orderInfo.goodsId = item.goodsId;
          this.orderInfo.number = item.number;
          this.orderInfo.totalPrice = item.number * item.disPrice;
          // 给每件商品下单
          this.addOrderAction(this.orderInfo);
          // 在购物车中删除已经下单的那件商品
          const delObj = {
            cartId: item.id,
            userId: this.userInfo.id,
          };
          this.deleteCartByIdAction(delObj);
        });
        this.$router.push("/myOrder");
      }
    },
  },
  computed: {
    ...mapState("user", ["userInfo"]),
    ...mapGetters("cart", ["selPrice", "selCartList"]),
    /* 
        手机号脱敏处理 只展示最后四位
    */
    codePhone() {
      const lastFour = this.userInfo.phone?.slice?.(-4);
      const codePhone = "****" + lastFour;
      return codePhone;
    },
  },
  watch: {
    name(newV) {
      let arr = newV.split(""); // 转为数组
      if (arr.length > 6) {
        arr = arr.splice(0, 6); // 只取六位
      }
      this.place = arr.length; // 更新指示符的位置
      this.password = ["", "", "", "", "", ""];
      arr.forEach((item, index) => {
        this.correctPassword[index] = item;
        this.password[index] = "*";
      });
    },
  },
};
</script>

<style lang="less" scoped>
.pay_method {
  width: 100%;
  height: 480px;
  background-color: #fff;
  display: flex;
  .left {
    width: 75%;
    height: 100%;
    // background-color: pink;
    .bank {
      margin-top: 20px;
      width: 100%;
      height: 32%;
      // background-color: mediumturquoise;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .selected {
        width: 90%;
        height: 45%;
        // background-color: pink;
        border: 5px solid #85a1d4;
        display: flex;
        align-items: center;
        input {
          width: 20px;
          height: 20px;
          margin-left: 20px;
        }
        div {
          font-size: 18px;
          margin-left: 30px;
        }
        .price {
          width: 48%;
          // background-color: #fff;
          // margin-left: 180px;
          display: flex;
          align-items: center;
          justify-content: end;
          padding-right: 30px;
          span {
            font-size: 30px;
            font-weight: bold;
            color: #ff8316;
          }
        }
      }
      .others {
        width: 90%;
        height: 40%;
        // background-color: antiquewhite;
        display: flex;
        // justify-content: center;
        align-items: center;
        button {
          // width: 150px;
          height: 35px;
          // background-color: silver;
          border: 1px solid #e5e5e5;
          color: #5da0ff;
          margin-right: 20px;
          padding-left: 20px;
          padding-right: 20px;
        }
        button:hover {
          border: 1px solid #5da0ff;
        }
      }
    }
    .succes {
      width: 100%;
      height: 30px;
      // background-color: mediumaquamarine;
      display: flex;
      padding-left: 40px;
      margin-top: 20px;
      align-items: center;
      i {
        color: #29b81a;
        margin-right: 10px;
      }
    }
    .password {
      margin-top: 20px;
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: center;
      .inner {
        width: 90%;
        height: 100%;
        // background-color: mediumpurple;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        p {
          font-size: 16px;
        }
        .second {
          width: 80%;
          height: 40px;
          // background-color: mediumturquoise;
          display: flex;
          align-items: center;
          .forget {
            font-size: 13px;
            color: #5da0ff;
            padding-left: 5px;
          }
        }
        .please {
          font-size: 14px;
          color: #949091;
        }
        button {
          width: 180px;
          height: 40px;
          background-color: #00aaee;
          color: #fff;
          font-size: 16px;
        }
      }
    }
  }
  .right {
    width: 25%;
    height: 100%;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: pink;
    .content {
      width: 80%;
      height: 65%;
      // background-color: pink;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .top_text,
      .bottom_text {
        width: 80%;
        height: 20%;
        // background-color: lavender;
        display: flex;
        justify-content: center;
        align-items: center;
        // font-size: 15px;
        i {
          margin-right: 8px;
        }
      }
      .pic {
        position: relative;
        width: 80%;
        height: 60%;
        // background-color: lemonchiffon;
        .i {
          width: 46px;
          height: 46px;
          background-color: #fff;
          position: absolute;
          left: 38%;
          top: 38%;
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            font-size: 50px;
            color: orangered;
          }
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

@keyframes fade {
  //闪烁的动画
  from {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
// 输入框部分css
.dialog {
  // width: 100vw;
  // height: 100vh;
  // z-index: 999;
  // background-color: rgba(0, 0, 0, 0.6);
  // display: flex;
  // justify-content: center;
  // align-items: center;
  .box-border {
    // width: 500px;
    // height: 200px;
    background-color: #fff;
    border: 1px solid #fff;
    // box-shadow: 0px 0px 10px rgba(0,0,0, .6) inset;
    display: flex;
    justify-content: center;
    align-items: center;
    .box {
      position: relative;
      display: flex;
      .enter {
        width: 50px;
        height: 50px;
        border: 2px solid #85a1d4;
        border-radius: 5px;
        margin: 0 5px 0 0;
        z-index: 100;
        display: flex;
        font-size: 30px;
        justify-content: center;
        align-items: center;
        //跳跃的指示符
        .tips {
          height: 30px;
          width: 1px;
          background-color: #000;
          animation: fade 1000ms infinite;
        }
      }
      .int {
        border: none;
        display: inline-block;
        width: 100%;
        height: 50px;
        position: absolute;
        z-index: 999;
        opacity: 0;
      }
    }
  }
}
</style>