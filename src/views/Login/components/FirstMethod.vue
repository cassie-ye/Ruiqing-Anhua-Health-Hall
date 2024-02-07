<template>
  <div class="one">
    <!-- 账号 -->
    <div class="zhanghao">
      <span class="iconfont icon-yonghu"></span>
      <input
        type="text"
        class="username cursor"
        placeholder="用户名/手机号"
        v-model.trim="username"
      />
    </div>
    <!-- 密码 -->
    <div class="mima">
      <span class="iconfont icon-suo"></span>
      <input
        type="password"
        class="username cursor"
        placeholder="请输入登录密码"
        v-model.trim="password"
      />
    </div>
    <!-- 登录按钮 -->
    <div class="denglu">
      <button class="btn_login cursor" @click="loginMethod1">登录</button>
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
      <div class="three">
        <a href="#">忘记密码</a>
        <a href="#">忘记账号名</a>
        <router-link to="/register">免费注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useLogin } from "@/views/Login/mixins/useLogin";
export default {
  mixins: [useLogin],
  data() {
    return {
      // 输入框输入的用户名
      username: "",
      // 输入框输入的密码
      password: "",
      // 发起登录请求时传过去的对象
      loginObj: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    loginMethod1() {
      // 如果其中一个输入框为空，那么提示用户
      if (this.username === "" || this.password === "") {
        this.$message({
          type: "error",
          message: "用户名(手机号)或密码不能为空",
        });
      } else {
        // 给发起登录请求时传过去的对象赋值
        this.loginObj.username = this.username;
        this.loginObj.password = this.password;
        // 清空输入框
        this.username = "";
        this.password = "";
        // 发起请求
        this.login(this.loginObj);
      }
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
.one {
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
  .username {
    width: 86%;
    height: 40px;
    background-color: #f0f9eb;
    // border: 1px solid #4ab344;
    font-size: 14px;
    padding-left: 10px;
  }
  .icon-yonghu,
  .icon-suo {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 40px;
    height: 40px;
    background-color: #ccc;
    font-size: 25px;
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