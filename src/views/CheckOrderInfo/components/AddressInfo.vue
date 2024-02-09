<template>
  <div class="wrapper">
    <div class="address">
      <!-- 收货地址 -->
      <div class="address_top"><span>收货地址</span></div>
      <!-- 收货信息具体内容 -->
      <div class="address_content">
        <div class="content_left">
          <div class="user">
            收货人：<span>{{ userInfo.username }}</span>
          </div>
          <div class="phone">
            联系方式：<span>{{ userInfo.phone }}</span>
          </div>
          <div class="user_address">
            收货地址：
            <span>浙江省宁波市海曙区高桥镇学院路899号宁波财经学院本部校区</span>
          </div>
        </div>
        <div class="content_right">
          <el-button type="success" plain>切换地址</el-button>
          <el-button type="success" plain>添加地址</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    // 拿到vuex中的用户信息渲染
    computed:{
        ...mapState('user',["userInfo"])
    }
};
</script>

<style lang="less" scoped>
.wrapper {
  background-color: #fff;
  .address {
    margin-top: 20px;
    width: 100%;
    height: 260px;
    // background-color: pink;
    background-color: #fff;
    .address_top {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
      // background-color: skyblue;
      span {
        display: flex;
        align-items: center;
        padding-left: 35px;
        border-bottom: 1px solid #f6f6f6;
        font-size: 18px;
        width: 98%;
        height: 100%;
      }
    }
    .address_content {
      width: 100%;
      height: 160px;
      // background-color: orchid;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      .content_left {
        width: 59%;
        height: 100%;
        border: 1px solid #f6f6f6;
        border-right: 1px solid #fff;
        // background-color: mediumslateblue;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding-left: 40px;
        div {
          margin-bottom: 10px;
          font-size: 16px;
          color: #999999;
          span {
            font-size: 16px;
            color: #333333;
          }
        }
        div:last-child {
          margin-bottom: 0;
        }
      }
      .content_right {
        width: 39%;
        height: 100%;
        // background-color: wheat;
        border: 1px solid #f6f6f6;
        border-left: 1px solid #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>