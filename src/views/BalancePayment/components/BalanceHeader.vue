<template>
  <div class="header">
    <div class="header_left">
      <div class="yueBao">
        <i class="iconfont icon-yuezhifu"></i>
        <p>余额宝</p>
      </div>
      <div class="wei"></div>
      <div class="shouyintai">收银台</div>
    </div>
    <div class="header_right">
      <div class="acount">
        <span>余额宝账户：</span>
        <span>{{ userInfo.phone }}</span>
      </div>
      <div class="help">
        <p>找人代付</p>
        <div class="wei"></div>
        <p>唯一热线：95188</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("user", ["userInfo"]),
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  .header_left {
    width: 40%;
    height: 100%;
    // background-color: pink;
    display: flex;
    .yueBao {
      width: 25%;
      height: 100%;
      // background-color: mediumpurple;
      margin-left: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 45px;
        color: orangered;
        margin-right: 10px;
      }
      p {
        font-size: 25px;
        font-weight: bold;
      }
    }
    .wei {
      width: 2px;
      height: 34px;
      background-color: #666;
      margin-top: 18px;
    }
    .shouyintai {
      width: 16%;
      height: 100%;
      // background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 25px;
      font-weight: bold;
    }
  }
  .header_right {
    width: 40%;
    height: 100%;
    // background-color: mediumpurple;
    display: flex;
    justify-content: center;
    align-items: center;
    .acount {
      width: 40%;
      height: 100%;
      // background-color: navajowhite;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 16px;
      }
    }
    .help {
      width: 40%;
      height: 100%;
      // background-color: lightblue;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .wei {
      width: 1px;
      height: 16px;
      background-color: #666;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}
</style>