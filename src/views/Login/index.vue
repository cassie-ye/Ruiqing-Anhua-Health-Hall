<template>
  <div>
    <!-- 头部白色和标题区域 -->
    <LoginNav></LoginNav>
    <!-- banner区域 -->
    <div class="banner">
      <img src="@/assets/login2.jpg" alt="" />
      <!-- 定位字体 -->
      <div class="font">
        瑞清安华养生堂<br />
        让您散发健康自信的光芒，欢迎前来选购！
      </div>
      <!-- 登录表单 -->
      <!-- ****密码登录和短信登陆**** -->
      <div v-if="usernameFlag" class="loginForm">
        <!-- el-menu的header -->
        <el-menu
          style=""
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item class="item1" style="" index="1">密码登录</el-menu-item>
          <el-menu-item class="item2" style="" index="2">短信登录</el-menu-item>
        </el-menu>
        <!-- 扫码登录更安全 -->
        <el-tag class="success" type="success">扫码登录更安全</el-tag>
        <div @click="changeFlag" class="scanCode cursor">
          <span class="iconfont icon-erweima_erweima"></span>
        </div>
        <!-- 第一种登陆方式: 账号密码登录 -->
        <FirstMethod v-show="activeIndex === '1'"></FirstMethod>
        <!-- 第二种登录方式: 手机验证码登录 -->
        <SecondMethod v-show="activeIndex === '2'"></SecondMethod>
      </div>
      <!-- ****手机扫码登录****  -->
      <!-- 接收子组件传递过来的changeFlagToFalse并对应方法 -->
      <QRCodeMethod
        v-else
        class="loginForm"
        @changeFlagToFalse="changeFlag"
      ></QRCodeMethod>
    </div>
    <!-- 底部区域 -->
    <div class="bottom"></div>
  </div>
</template>

<script>
// 登录页面顶部白色导航条
import LoginNav from "@/views/Login/components/LoginNav";
// 登陆方式1：账号密码登录
import FirstMethod from "@/views/Login/components/FirstMethod.vue";
// 登陆方式2：手机验证码登录
import SecondMethod from "@/views/Login/components/SecondMethod.vue";
// 登陆方式3：二维码扫码登陆
import QRCodeMethod from "@/views/Login/components/QRCodeMethod.vue";
export default {
  name: "Login",
  components: {
    LoginNav: LoginNav,
    FirstMethod: FirstMethod,
    SecondMethod: SecondMethod,
    QRCodeMethod: QRCodeMethod,
  },
  data() {
    return {
      // 是否为扫码登陆
      usernameFlag: true,
      // 导航栏
      activeIndex: "1",
    };
  },
  methods: {
    // 通过usernameFlag变量实现扫码登陆和密码登录的两种方式自由切换
    changeFlag() {
      this.usernameFlag = !this.usernameFlag;
    },
    // 通过activeIndex变量实现导航栏的切换
    handleSelect(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
// banner区域
.banner {
  position: relative;
  width: 100%;
  height: 600px;
  background-color: lavender;
  img {
    width: 100%;
    height: 100%;
  }
  .font {
    position: absolute;
    top: 170px;
    left: 200px;
    width: 44%;
    height: 30%;
    // background-color: lemonchiffon;
    font-size: 35px;
    line-height: 80px;
    font-family: Kaiti;
    font-weight: bold;
    color: #403f3f;
  }
  // login表单区域
  .loginForm {
    position: relative;
    position: absolute;
    top: 100px;
    right: 233px;
    width: 22.5%;
    height: 58%;
    background-color: #fff;
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
    .item1 {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-weight: 600;
      font-size: 15px;
    }
    .item2 {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-weight: 600;
      font-size: 15px;
    }
    .is-active {
      border-bottom: 2px solid #4ab344;
    }
    .item1:hover {
      background-color: #fff;
    }
    .item2:hover {
      background-color: #fff;
    }
    .success {
      position: absolute;
      right: 75px;
      top: 5px;
    }
  }
  .loginForm {
    .el-menu-demo {
      font-weight: bold;
      font-weight: 600;
      font-size: 15px;
    }
  }
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
</style>
