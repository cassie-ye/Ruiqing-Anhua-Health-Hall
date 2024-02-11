<template>
  <div class="operations">
    <div class="top">
      <el-button type="primary" plain @click="gotoHome">快速购物</el-button>
      <el-button type="success" plain>修改信息</el-button>
    </div>
    <div class="bottom">
      <el-button type="warning" plain @click="openDialogVisibleLogout"
        >退出登录</el-button
      >
      <el-button type="danger" plain>注销账号</el-button>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisibleLogout"
      width="30%"
      :before-close="handleClose"
    >
      <!-- 弹窗内容 -->
      <span>确定退出登录吗</span>
      <span slot="footer" class="dialog-footer">
        <!-- 取消按钮 -->
        <el-button @click="dialogVisibleLogout = false">取 消</el-button>
        <!-- 确定按钮 -->
        <el-button type="primary" @click="logout">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      // 退出登录时跳出的弹窗
      dialogVisibleLogout: false,
    };
  },
  methods: {
    ...mapMutations('user',['setUserInfo','setToken']),
    /* 
        点击快速购物 去到首页
    */
    gotoHome() {
      this.$router.push("/");
    },

    /* 
        点击退出登录按钮，打开弹窗
    */
    openDialogVisibleLogout() {
      this.dialogVisibleLogout = true;
    },

    /* 
        点击弹框的叉叉或者弹框外部区域，弹框关闭
    */
    handleClose() {
      this.dialogVisibleLogout = false;
    },

    /* 
        点击退出登录的确定按钮 消除localStorage
    */
    logout() {
      localStorage.clear();
      this.setUserInfo({});
      this.setToken("");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="less" scoped>
.operations {
  width: 95%;
  height: 45%;
  margin-left: 5%;
  //   background-color: palegoldenrod;
  background-color: #fff;
  border-radius: 15px;
  margin-top: 5%;
  .top,
  .bottom {
    width: 100%;
    height: 50%;
    // background-color: lavenderblush;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .top {
    .el-button {
      margin-top: 10%;
    }
  }
  .bottom {
    .el-button {
      margin-bottom: 10%;
    }
  }
}
</style>