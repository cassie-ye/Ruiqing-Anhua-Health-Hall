<template>
  <div class="all">
    <div class="wrapper">
      <!-- 左边部分 -->
      <div class="left">
        <!-- v-if 已登录 -->
        <div v-if="token" class="avator">
          <el-avatar
            size="small"
            :src="userInfo.headImg || circleUrl"
          ></el-avatar>
          <p>用户：{{ userInfo.username }}</p>
        </div>
        <!-- v-else未登录 -->
        <div v-else class="login_register">
          <p @click="goto('login')">请登录</p>
          <div class="tiger"></div>
          <p @click="goto('register')">注册</p>
          <div class="tiger"></div>
        </div>
        <!-- 微信登录 -->
        <div class="weixinLogin">
          <div class="wx_bottom">
            <i class="iconfont icon-weixin"></i>
          </div>
          <p>微信登录</p>
        </div>
      </div>
      <!-- 右边部分 -->
      <div class="right">
        <div class="phone">
          <i class="el-icon-mobile-phone"></i>
          <p>手机版</p>
          <div class="tiger"></div>
        </div>
        <div class="collect">
          <i class="el-icon-star-on"></i>
          <p>收藏本站</p>
          <div class="tiger"></div>
        </div>
        <!-- 我的资料 点击跳转到我的资料页 -->
        <div class="myInfo">
          <p @click="goto('myInfo')">我的资料</p>
          <div class="tiger"></div>
        </div>
        <!-- 我的订单 点击跳转到我的订单页 -->
        <div class="myOrders">
          <p @click="goto('myOrder')">我的订单</p>
          <div class="tiger"></div>
        </div>
        <!-- 购物车 点击跳转到购物车页 -->
        <div @click="goto('myCart')" class="cart">
          <i class="el-icon-shopping-cart-2"></i>
          <p>购物车({{ cartList.length }})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "HeaderBlack",
  props: {},
  data() {
    return {
      // 默认头像
      circleUrl: require("@/assets/avator2.jpg"),
    };
  },
  methods: {
    ...mapActions('cart',["getCartListAction"]),
    // TODO 点击跳转到对应页面
    goto(name) {
      this.$router.push(`/${name}`);
    },
  },
  computed: {
    /* 
      获取vuex中存储的user信息和token信息
      token用来判断用户是否登录以及v-if和v-else切换导航栏内容
      userInfo用来获取用户信息，在token存在情况下的导航栏展示用户名和头像
    */
    ...mapState("user", ["userInfo", "token"]),
    ...mapState("cart", ["cartList"]),
  },
  created() {
    // 得到最新的购物车数据
    this.getCartListAction(this.userInfo.id)
  },
};
</script>

<style lang="less" scoped>
.all {
  width: 100%;
  height: 38px;
  background-color: #333333;
  .wrapper {
    height: 100%;
    display: flex;
    // background-color: #fff;
    .left {
      width: 50%;
      height: 100%;
      //   background-color: pink;
      display: flex;
      justify-content: start;
      align-items: center;
      .avator {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
        p {
          font-size: 13px;
          padding-left: 10px;
          color: #cccccc;
        }
      }
      .login_register {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-right: 7px;
        width: 18%;
        height: 100%;
        // background-color: paleturquoise;
        p {
          font-size: 13px;
          color: #cccccc;
        }
        .tiger {
          width: 1px;
          height: 12px;
          background-color: #595959;
          margin-top: 1px;
        }
      }
      .weixinLogin {
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          color: #cccccc;
          font-size: 13px;
        }
        .wx_bottom {
          width: 20px;
          height: 20px;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          i {
            font-size: 25px;
            color: #12d269;
          }
        }
      }
    }
    .right {
      width: 50%;
      height: 100%;
      //   background-color: pink;
      display: flex;
      justify-content: end;
      .phone,
      .collect,
      .myInfo,
      .myOrders,
      .cart {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 3.8%;
        // width: 15%;
        p {
          font-size: 13px;
          color: #cccccc;
        }
        i {
          color: #cccccc;
        }
        // border: 1px solid red;
        // .tiger {
        //   width: 1px;
        //   height: 12px;
        //   background-color: #595959;
        //   margin-left: 15px;
        // }
      }
      .phone {
        i {
          font-size: 25px;
          margin-right: 5px;
        }
      }
      .collect {
        i {
          font-size: 22px;
          margin-right: 5px;
        }
      }
      .cart {
        i {
          font-size: 22px;
          margin-right: 5px;
        }
        margin-right: 1%;
      }
    }
  }
}
</style>
