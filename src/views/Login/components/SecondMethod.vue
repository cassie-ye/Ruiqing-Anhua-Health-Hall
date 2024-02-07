<template>
  <div class="two">
    <!-- 手机号 -->
    <div class="zhanghao">
      <span class="iconfont icon-shouji"></span>
      <input
        type="text"
        class="username cursor"
        placeholder="请输入手机号"
        v-model="phoneNumber"
      />
    </div>
    <!-- 验证码 -->
    <div class="mima">
      <span class="iconfont icon-shuzijianpan"></span>
      <input
        type="password"
        class="code cursor"
        placeholder="请输入验证码"
        v-model="phoneMsg"
      />
      <!-- 获取验证码按钮 -->
      <button class="btn_code cursor" @click="getMsgCode">
        {{ second === totalSecond ? "获取验证码" : second + `秒后重新发送` }}
      </button>
    </div>
    <!-- 登录按钮 -->
    <div class="denglu">
      <button class="btn_login cursor" @click="loginMethod2">登录</button>
    </div>
    <!-- 其他登陆方式 微博登录 支付宝登陆 -->
    <div class="elseMethods">
      <div class="wbAndZfb">
        <div class="wb">
          <span class="iconfont icon-weibo"></span>
          微博登录
        </div>
        <div class="zfb">
          <span class="iconfont icon-zhifubao"></span>
          支付宝登录
        </div>
      </div>
      <!-- 点击注册 -->
      <div class="three">
        <router-link to="/register">免费注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useLogin } from "@/views/Login/mixins/useLogin";
import { getMsgCodeAPI } from "@/apis/user";
export default {
  mixins: [useLogin],
  data() {
    return {
      // 输入框输入的手机号
      phoneNumber: "",
      // 输入框输入的验证码
      phoneMsg: "",
      // 短信倒计时秒数的最大值
      totalSecond: 60,
      // 短信倒计时的秒数
      second: 60,
      // 短信倒计时定时器的id
      timer: null,
      // 发起登录请求时传过去的对象
      loginObj: {
        username: "",
        msgCode: "",
      },
    };
  },
  methods: {
    // 校验手机号
    checkPhone() {
      // 正则表达式
      const reg = /^1[3456789]\d{9}$/;
      if (!reg.test(this.phoneNumber)) {
        this.$message.error("手机号码格式不正确");
        return false;
      }
      return true;
    },
    // 获取短信验证码
    async getMsgCode() {
      if (this.checkPhone()) {
        // 倒计时
        if (!this.timer && this.second === this.totalSecond) {
          // 开启倒计时
          this.timer = setInterval(() => {
            // 短信倒计时秒数 减1
            this.second--;
            // 当秒数小于1时，清除计时器，将秒数设置为初始值(最大值)60
            if (this.second < 1) {
              clearInterval(this.timer);
              this.timer = null;
              this.second = this.totalSecond;
            }
          }, 1000);
          // 发请求获取验证码
          const { data: res } = await getMsgCodeAPI();
          // message提示用户短信内容
          this.$message.success("短信发送成功     " + res);
        }
      }
    },
    // 手机号+短信验证码登录方式
    loginMethod2() {
      // 如果其中一个输入框为空，那么提示用户
      if (this.phoneNumber === "" || this.phoneMsg === "") {
        this.$message({
          type: "error",
          message: "手机号或验证码不能为空",
        });
      } else {
        // 给发起登录请求时传过去的对象赋值
        this.loginObj.username = this.phoneNumber;
        this.loginObj.msgCode = this.phoneMsg;
        // 清空输入框
        this.phoneNumber = "";
        this.phoneMsg = "";
        // 发起请求
        this.login(this.loginObj);
      }
    },
  },
  // 销毁定时器
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="less" scoped>
.two {
  .btn_code {
    width: 120px;
    height: 40px;
    background-color: #f0f9eb;
    border: 1px solid #f0f9eb;
    font-size: 13px;
    color: #6c6c6c;
    padding-right: 5px;
  }
  .zhanghao,
  .mima,
  .denglu {
    margin-top: 22px;
    margin-left: 7%;
    width: 86%;
    height: 40px;
    // background-color: skyblue;
    display: flex;
    justify-content: space-around;
  }
  .username,
  .code {
    width: 86%;
    height: 40px;
    background-color: #f0f9eb;
    // border: 1px solid #4ab344;
    font-size: 14px;
    padding-left: 10px;
  }
  .code {
    width: 55%;
  }
  .icon-shouji,
  .icon-shuzijianpan {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 40px;
    height: 40px;
    background-color: #ccc;
    font-size: 25px;
  }
  .icon-shuzijianpan {
    font-size: 18px;
  }
  .btn_login {
    width: 100%;
    height: 100%;
    background-color: #4ab344;
    border: 1px solid #4ab344;
    color: #fff;
    font-size: 16px;
  }
  .elseMethods {
    margin-top: 8px;
    margin-left: 7%;
    margin-right: 7%;
    width: 86%;
    height: 80px;
    // background-color: skyblue;
    display: flex;
    flex-direction: column;
    .wbAndZfb {
      width: 100%;
      height: 50%;
      //   background-color: pink;
      display: flex;
      //   justify-content: center;
      align-items: center;
      .wb {
        font-size: 13px;
        display: flex;
        align-items: center;
        margin-right: 5px;
        color: #6c6c6c;
        .iconfont {
          padding-right: 3px;
          color: #e52425;
        }
      }
      .zfb {
        font-size: 12px;
        display: flex;
        align-items: center;
        color: #6c6c6c;
        .iconfont {
          color: #1ba9ee;
          padding-right: 3px;
        }
      }
    }
    .three {
      width: 100%;
      height: 50%;
      //   background-color: palegoldenrod;
      display: flex;
      //   justify-content: center;
      //   align-items: center;
      padding-top: 5px;
      justify-content: end;
      a {
        color: #6c6c6c;
        font-size: 12px;
        padding-left: 10px;
      }
    }
  }
}
</style>