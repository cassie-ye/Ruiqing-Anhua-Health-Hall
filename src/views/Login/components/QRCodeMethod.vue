<template>
  <div>
    <!-- title -->
    <div class="el-menu-demo">手机扫码，安全登录</div>
    <div @click="changeFlag" class="scanCode cursor">
      <span class="iconfont icon-diannao"></span>
      <div class="center"></div>
    </div>
    <!-- 二维码 -->
    <div class="centerCode">
      <img src="@/assets/qrCode.png" alt="" />
    </div>
    <!-- 扫一扫 -->
    <div class="sao">
      <div class="left">
        <span class="iconfont icon-saoyisao"></span>
      </div>
      <div class="right">
        打开 瑞清安华养生堂APP<br />
        扫一扫登录
      </div>
    </div>
    <!-- 点击跳转到密码登录或者免费注册 -->
    <div class="text">
      <a @click="changeFlag" href="#">密码登录</a>
      <router-link to="/register">免费注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 向父组件提交changeFlagToFalse
    changeFlag() {
      this.$emit('changeFlagToFalse');
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu-demo {
  width: 145px;
  height: 40px;
  background-color: #fff;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 20px;
}
.scanCode {
  position: absolute;
  right: 0;
  top: 0;
  width: 70px;
  height: 70px;
  //   background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon-erweima_erweima,
  .icon-diannao {
    font-size: 73px;
    color: #4ab344;
  }
  .center {
    position: absolute;
    margin-top: -10px;
    width: 50px;
    height: 30px;
    background-color: #4ab344;
  }
}
.centerCode {
  width: 140px;
  height: 140px;
  //   background-color: pink;
  margin-left: 110px;
  margin-top: 36px;
  img {
    width: 100%;
    height: 100%;
  }
}
.sao {
  width: 70%;
  height: 45px;
  // background-color: pink;
  margin-left: 50px;
  margin-top: 15px;
  display: flex;
  .left {
    width: 45px;
    height: 45px;
    // background-color: skyblue;
    margin-left: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-saoyisao {
      font-size: 32px;
      color: #4ab344;
    }
  }
  .right {
    width: 70%;
    height: 45px;
    // background-color: aquamarine;
    margin-left: 10px;
    font-size: 13px;
    color: #6c6c6c;
    display: flex;
    align-items: center;
  }
}
.text {
  width: 50%;
  height: 30px;
  // background-color: pink;
  margin-left: 160px;
  display: flex;
  justify-content: end;
  a {
    font-size: 12px;
    margin-right: 10px;
    padding-top: 5px;
    color: #6c6c6c;
  }
}
</style>