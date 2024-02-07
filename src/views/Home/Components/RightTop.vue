<template>
  <!-- 当token不存在（用户未登录）时显示的导航栏内容 -->
  <div class="top" v-if="!token">
    <!-- 头像 -->
    <div class="avator">
      <div class="demo-basic--circle">
        <div class="block">
          <!-- 头像的url -->
          <el-avatar :size="70" :src="circleUrl"></el-avatar>
        </div>
      </div>
    </div>
    <!-- Hi~欢迎逛瑞清安华！ -->
    <div class="zhanghao">Hi~欢迎逛瑞清安华！</div>
    <!-- 开通Plus会员 -->
    <div class="else">
      <div class="plus cursor">
        <!-- 左边部分 Plus会员和最高3%返利 -->
        <div class="plus_left">
          <div class="huiyuan">Plus会员</div>
          <div class="fanli">最高3%返利</div>
        </div>
        <!-- 右侧部分 立即开通 -->
        <div class="plus_right">
          立即开通
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <!-- 下方按钮组 -->
      <div class="lAndR">
        <!-- 登录按钮 -->
        <router-link to="/login">
          <button class="login cursor">登 录</button
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </router-link>
        <!-- 注册按钮 -->
        <router-link to="/register">
          <button class="register cursor">注 册</button>
        </router-link>
      </div>
    </div>
  </div>
  <!-- 当token存在（用户已登录）时显示的导航栏内容 -->
  <div v-else class="top">
    <!-- 头像 -->
    <div class="avator">
      <div class="demo-basic--circle">
        <div class="block">
          <!-- 头像的url -->
          <el-avatar :size="60" :src="userInfo.headImg"></el-avatar>
        </div>
      </div>
    </div>
    <!-- Hi + 用户名 -->
    <div class="zhanghao">Hi~&nbsp;&nbsp;&nbsp;{{ userInfo.username }}</div>
    <div class="else">
      <div class="else_top">
        <router-link to="/cart">
          <span class="num">{{ 5 }}</span>
          <span>购物车</span>
        </router-link>
        <router-link to="/myOrder">
          <span class="num">{{ 5 }}</span>
          <span>待收货</span>
        </router-link>
        <router-link to="/myOrder">
          <span class="num">0</span>
          <span>待发货</span>
        </router-link>
        <router-link to="/myOrder">
          <span class="num">{{ 5 }}</span>
          <span>待评价</span>
        </router-link>
      </div>
      <div class="else_bottom">
        <router-link to="/myInfo">
          <span>
            <i class="el-icon-user-solid"></i>
          </span>
          <span class="text">个人中心</span>
        </router-link>
        <router-link to="/myOrder">
          <span>
            <i class="el-icon-star-on"></i>
          </span>
          <span class="text">宝贝收藏</span>
        </router-link>
        <router-link to="/myOrder">
          <span>
            <i class="el-icon-s-shop"></i>
          </span>
          <span class="text">关注的店</span>
        </router-link>
        <router-link to="/myOrder">
          <span>
            <i class="el-icon-time"></i>
          </span>
          <span class="text">我的足迹</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      circleUrl: require("@/assets/avator.webp"),
    };
  },
  methods: {},
  computed: {
    /* 
      获取vuex中存储的user信息和token信息
      token用来判断用户是否登录以及v-if和v-else切换导航栏内容
      userInfo用来获取用户信息，在token存在情况下的导航栏展示用户名和头像
    */
    ...mapState("user", ["userInfo", "token"]),
  },
};
</script>

<style lang="less" scoped>
.top {
  border-radius: 10px;
  width: 100%;
  height: 245px;
  // background-color: skyblue;
  display: flex;
  flex-wrap: wrap;
  // border: 1px solid #eeeeee;
  // background-color: #f0f9eb;
  background-color: #fff;
  .avator {
    width: 100%;
    height: 30%;
    // background-color: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
  }
  .zhanghao {
    // margin-top: 10px;
    width: 100%;
    height: 15%;
    // background-color: #a7a7a7;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4ab344;
    font-weight: bold;
  }
  .else {
    width: 100%;
    height: 55%;
    // background-color: #4ab344;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .plus {
      width: 90%;
      height: 45%;
      background-color: #e0e8fb;
      border-radius: 5px;
      display: flex;
      transition: all 0.4s ease;
      .plus_left {
        width: 60%;
        height: 100%;
        // background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
        .huiyuan,
        .fanli {
          color: #5e83e8;
          font-weight: bold;
        }
      }
      .plus_right {
        color: #5e83e8;
        padding-top: 8px;
        width: 40%;
        height: 100%;
        font-size: 13px;
        i {
          color: #5e83e8;
          font-size: 13px;
        }
      }
    }
    .plus:hover {
      background-color: #5e83e8;
      .huiyuan,
      .fanli,
      i,
      .plus_right {
        color: #fff;
      }
    }
    .lAndR {
      width: 100%;
      height: 50%;
      // background-color: rosybrown;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      a {
        display: inline-block;
        width: 42%;
        height: 75%;
      }
      .login,
      .register {
        // width: 40%;
        // height: 75%;
        width: 100%;
        height: 80%;
        // background-color: #fff;
        border-radius: 5px;
        transition: all 0.4s ease;
      }
      .login {
        background-color: #4ab344;
        border: 1px solid #4ab344;
        color: white;
        font-weight: 600;
        font-size: 16px;
        transition: all 0.4s ease;
      }
      .login:hover {
        background-color: #fff;
        border: 1px solid #4ab344;
        color: #4ab344;
      }
      .register:hover {
        background-color: #4ab344;
        color: #fff;
        border: 1px solid #f0f9eb;
      }
      .register {
        background-color: #f0f9eb;
        border: 1px solid #4ab344;
        color: #4ab344;
        font-weight: 600;
        font-size: 16px;
      }
    }
    .else_top,
    .else_bottom {
      width: 100%;
      height: 50%;
      // background-color: #e0e8fb;
      border-radius: 5px;
      display: flex;
      // .num:hover {
      //   // -webkit-transition: all 0.4s ease;
      //   transition: all 0.4s ease;
      // }
      // a:hover{
      //   transition: all 0.4s ease;
      // }
      a {
        transition: all 0.4s ease;
        width: 50%;
        height: 75%;
        // background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
          font-size: 10px;
          color: #666666;
        }
        .num {
          font-size: 20px;
          font-weight: bold;
          color: #5e83e8;
          padding-bottom: 3px;
        }
      }
      a:hover {
        background-color: #5e83e8;
      }
      a:hover .num {
        color: #fff;
      }
      a:hover span {
        color: #fff;
      }
      a:hover i {
        color: #fff;
      }
    }
    .else_bottom {
      i {
        font-size: 25px;
        color: #5e83e8;
        padding-bottom: 3px;
      }
      .text {
        font-size: 10px;
        color: #666666;
      }
    }
  }
}
</style>