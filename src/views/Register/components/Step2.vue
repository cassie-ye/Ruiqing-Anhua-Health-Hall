<template>
  <div class="all">
    <!-- 账号名 -->
    <div class="username">
      <!-- 标题 账号名 -->
      <div class="left">账&nbsp;&nbsp;号&nbsp;&nbsp;名</div>
      <div class="right">
        <!-- username输入框 -->
        <input
          @blur="validateUsername"
          v-model="username"
          type="text"
          placeholder="账户唯一识别，可用来登录"
          class="cursor"
        />
      </div>
    </div>
    <!-- 设置密码 -->
    <div class="setPassword">
      <!-- 标题 设置密码 -->
      <div class="left">设&nbsp;置&nbsp;密&nbsp;码</div>
      <div class="right">
        <!-- password输入框 -->
        <input
          class="cursor"
          @blur="validatePassword"
          v-model="password"
          type="password"
          name=""
          id=""
          placeholder="6到12个字符，至少包含数字、小写字母、大写字母及特殊字符"
        />
      </div>
    </div>
    <!-- 确认密码 -->
    <div class="confirmPassword">
      <!-- 标题 确认密码 -->
      <div class="left">确&nbsp;认&nbsp;密&nbsp;码</div>
      <div class="right">
        <!-- 再次输入密码输入框 -->
        <input
          class="cursor"
          @blur="validateSecondPassword"
          v-model="secondPassword"
          type="password"
          placeholder="请再次输入密码"
        />
      </div>
    </div>
    <!-- 立即注册 -->
    <div class="registerNow">
      <button @click="gotoSteps(0)" class="cursor">返回上一步</button>
      <button @click="registeNow" class="cursor">立即注册</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 输入框输入的账号名
      username: "",
      // 账号名是否符合规范
      isUsernameLegal: false,
      // 输入框输入的密码
      password: "",
      // 密码是否符合规范
      isPasswordLegal: false,
      // 输入框输入的再次输入密码
      secondPassword: "",
      // 确认密码是否符合规范
      isSecondPasswordLegal: false,
      // 注册对象的username和password属性，以及下一步的索引2
      step2Obj: {
        username: "",
        password: "",
        index: 2
      },
    };
  },
  methods: {
    // TODO1：账号名非空校验
    validateUsername() {
      if (this.username === "") {
        this.isUsernameLegal = false;
        this.$message.error("账号名输入不能为空");
        return;
      }
      this.isUsernameLegal = true;
    },
    // TODO2：第一次密码正则校验
    validatePassword() {
      if (this.password === "") {
        this.isPasswordLegal = false;
        this.$message.error("密码输入不能为空");
        return;
      }
      const regex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?(_|[^\w\s])).{6,12}$/;
      if (!regex.test(this.password)) {
        this.isPasswordLegal = false;
        this.$message.error(
          "密码必须是6到12个字符，至少包含数字、小写字母、大写字母及特殊字符"
        );
        return;
      }
      this.isPasswordLegal = true;
    },
    // TODO3：第二次密码正则校验
    validateSecondPassword() {
      if (this.secondPassword === "") {
        this.isSecondPasswordLegal = false;
        this.$message.error("密码输入不能为空");
        return;
      }
      if (this.secondPassword !== this.password) {
        this.isSecondPasswordLegal = false;
        this.$message.error("与上次密码输入不一致！");
        return;
      }
      this.isSecondPasswordLegal = true;
    },
    // TODO4：点击按钮进行注册
    registeNow() {
      // 如果账号名、密码、确认密码都符合规范，才允许注册
      if (
        this.isUsernameLegal &&
        this.isPasswordLegal &&
        this.isSecondPasswordLegal
      ) {
        // 给传递给父组件的step2Obj赋值，username和password
        this.step2Obj.username = this.username;
        this.step2Obj.password = this.password;
        // 向父组件传递注册对象
        this.$emit("registeNow", this.step2Obj);
      }
    },
    // TODO5：点击按钮返回上一步
    gotoSteps(index) {
      this.$parent.gotoSteps(index)
    },
  },
};
</script>

<style lang="less" scoped>
.all {
  width: 40%;
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  .username,
  .setPassword,
  .confirmPassword,
  .registerNow {
    width: 100%;
    height: 55px;
    // background-color: skyblue;
    // margin-top: 30px;
    display: flex;
    border: 1px solid #e1e1e1;
    margin-top: 25px;
    .left {
      width: 26%;
      height: 100%;
      // background-color: palegoldenrod;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .right {
      position: relative;
      width: 74%;
      height: 100%;
      background-color: mediumaquamarine;
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        width: 100%;
        height: 100%;
        padding-left: 5px;
        font-size: 13px;
      }
    }
    button {
      width: 40%;
      height: 100%;
      background-color: #4ab344;
      border: 1px solid #4ab344;
      color: #fff;
      font-size: 16px;
    }
  }
  .registerNow {
    margin-top: 30px;
    display: flex;
    justify-content: space-evenly;
    border: 0px solid #e1e1e1;
  }
  .p {
    width: 95%;
    height: 40px;
    display: flex;
    // justify-content: center;
    align-items: center;
    color: orange;
    i {
      padding-right: 5px;
    }
  }
  .username {
    margin-top: 40px;
  }
  .el-icon-circle-check {
    color: #4ab344;
    font-size: 15px;
    position: absolute;
    top: 16px;
    right: -25px;
  }
}
</style>
