<template>
  <div>
    <div class="wrapper">
      <div class="timer">
        <div class="timer_left">
          <div class="icon">
            <i class="iconfont icon-wancheng"></i>
          </div>
          <div class="text">
            <div class="success">订单提交成功！请尽快完成支付</div>
            <div class="countdowm">
              支付还剩 {{ minutes }} 分 {{ seconds }} 秒，超时后将取消订单
            </div>
          </div>
        </div>
        <div class="timer_right">
          应付总额：<span>￥{{ selPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      countdown: "",
      minutes: "",
      seconds: "",
    };
  },
  methods: {
    startCountdown() {
      // 获取当前时间加上14分钟59秒
      const targetTime = new Date().getTime() + 15 * 60 * 1000;
      this.updateCountdown(targetTime); // 更新倒计时显示

      // 每秒更新一次倒计时显示
      setInterval(() => {
        this.updateCountdown(targetTime);
      }, 1000);
    },
    updateCountdown(targetTime) {
      const currentTime = new Date().getTime();
      const remainingTime = targetTime - currentTime;

      // 计算剩余时间（分钟和秒）
      const minutes = Math.floor(remainingTime / 1000 / 60);
      const seconds = Math.floor((remainingTime / 1000) % 60);

      // 格式化显示时间
      //   this.countdown = `${minutes}:${seconds.toString().padStart(2, '0')}`
      this.minutes = minutes;
      this.seconds = seconds;
      if (this.minutes === 0 && this.seconds === 0) {
        setTimeout(() => {
          this.$message({
            message: "订单已超时，自动取消",
            type: "error",
          });
          this.$router.push("/cart");
        }, 1000);
      }
    },
  },
  computed: {
    ...mapGetters("cart", ["selPrice"]),
  },
  created() {
    // 一进入页面就开启倒计时
    this.startCountdown();
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  .timer {
    margin-top: 20px;
    width: 100%;
    height: 250px;
    background-color: #fff;
    display: flex;
    .timer_left {
      width: 78%;
      height: 100%;
      // background-color: pink;
      display: flex;
      .icon {
        margin-left: 2%;
        width: 15%;
        height: 100%;
        //   background-color: coral;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          font-size: 80px;
          color: #1dc779;
        }
      }
      .text {
        width: 50%;
        height: 100%;
        //   background-color: lavender;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .success {
          font-size: 20px;
          margin-bottom: 10px;
        }
        .countdowm {
          font-size: 16px;
          color: #999999;
        }
      }
    }
    .timer_right {
      width: 22%;
      height: 100%;
      // background-color: skyblue;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      color: #999;
      span {
        font-size: 20px;
        color: #cf4444;
        font-weight: bold;
      }
    }
  }
}
</style>