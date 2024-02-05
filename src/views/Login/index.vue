<template>
  <div>
    <!-- 头部白色和标题区域 -->
    <div class="header">
      <div class="name">
        <div class="chinese">瑞清安华养生堂</div>
        <div class="English">Ruiqing Anhua Wellness Hall</div>
      </div>
      <div class="advice">
        <div class="no">网站无障碍</div>
        <div class="loginAdvice">
          <i class="el-icon-chat-line-square"></i>
          <p>"登录页面"改进建议</p>
        </div>
      </div>
    </div>
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
        <div class="one" v-show="activeIndex === '1'">
          <!-- 账号 -->
          <div class="zhanghao">
            <span class="iconfont icon-yonghu"></span>
            <input
              type="text"
              class="username cursor"
              placeholder="账号名/邮箱/手机号"
            />
          </div>
          <!-- 密码 -->
          <div class="mima">
            <span class="iconfont icon-suo"></span>
            <input
              type="password"
              class="username cursor"
              placeholder="请输入登录密码"
            />
          </div>
          <!-- 登录按钮 -->
          <div class="denglu">
            <button class="btn_login cursor" >登录</button>
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
        <!-- 第二种登录方式: 手机验证码登录 -->
        <div class="two" v-show="activeIndex === '2'">
          <!-- 手机号 -->
          <div class="zhanghao">
            <span class="iconfont icon-shouji"></span>
            <input
              type="text"
              class="username cursor"
              placeholder="请输入手机号"
            />
          </div>
          <!-- 验证码 -->
          <div class="mima">
            <span class="iconfont icon-shuzijianpan"></span>
            <input
              type="password"
              class="code cursor"
              placeholder="请输入验证码"
            />
            <!-- 获取验证码按钮 -->
            <button class="btn_code cursor" >
              <!-- {{
                second === totalSecond ? "获取验证码" : second + `秒后重新发送`
              }} -->
            </button>
          </div>
          <!-- 登录按钮 -->
          <div class="denglu">
            <button class="btn_login cursor" >登录</button>
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
      </div>
      <!-- ****手机扫码登录**** -->
      <div v-else class="loginForm">
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
    </div>
    <!-- 底部区域 -->
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      usernameFlag: true,
      activeIndex: "1",
    };
  },
  methods: {
    changeFlag() {
      console.log(this.usernameFlag);
      this.usernameFlag = !this.usernameFlag;
    },
    handleSelect(index) {
      this.activeIndex = index;
      console.log(this.activeIndex);
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 110px;
  //   background-color: pink;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  .name {
    width: 20%;
    height: 100%;
    // background-color: skyblue;
    color: #4ab344;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 130px;
    .chinese {
      font-size: 37px;
      font-weight: bold;
    }
    .English {
      font-size: 18px;
    }
  }
  .advice {
    width: 10%;
    height: 100%;
    // background-color: skyblue;
    margin-right: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .no {
      font-size: 13px;
      margin-left: -68px;
      color: #666666;
    }
    .no:hover {
      color: #4ab344;
    }
    .loginAdvice {
      display: flex;
      padding-top: 8px;
      font-size: 13px;
      color: #666666;
      i {
        font-size: 20px;
        color: #4ab344;
      }
      p {
        font-size: 13px;
      }
    }
    .loginAdvice:hover {
      color: #4ab344;
    }
  }
}
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
  }
  .loginForm {
    .el-menu-demo {
      font-weight: bold;
      font-weight: 600;
      font-size: 15px;
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
  }
}
</style>
