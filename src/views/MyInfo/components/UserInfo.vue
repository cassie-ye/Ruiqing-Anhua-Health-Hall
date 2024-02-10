<template>
  <div class="info_left">
    <div class="block">
      <el-avatar :size="88" :src="userInfo.headImg"></el-avatar>
    </div>
    <el-descriptions :column="1">
      <el-descriptions-item label="用户名">{{
        userInfo.username
      }}</el-descriptions-item>
      <el-descriptions-item label="性别">女</el-descriptions-item>
      <el-descriptions-item label="密码">********** </el-descriptions-item>
      <el-descriptions-item label="手机号">{{
        userInfo.phone
      }}</el-descriptions-item>
      <el-descriptions-item label="账户余额">{{
        userInfo.balance
      }}</el-descriptions-item>
      <el-descriptions-item label="生日">{{
        userInfo.birthday
      }}</el-descriptions-item>
      <el-descriptions-item label="权限">普通用户</el-descriptions-item>
    </el-descriptions>
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
.info_left {
  width: 25%;
  height: 600px;
  // background-color: pink;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  // border: 3px solid #67c23a;
  border-radius: 15px;
  .block {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /deep/ .el-descriptions__table {
    width: 100%;
    height: 450px;
    background-color: #fff;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
  }
  /deep/ .el-descriptions-row {
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 35px;
    width: 100%;
    height: 64.28px;
    // border: 1px solid red;
    padding-top: 10px;
  }
  /deep/ .el-descriptions-item__content {
    font-size: 17px;
  }
  /deep/ .el-descriptions-item__label {
    font-size: 17px;
  }
}
</style>