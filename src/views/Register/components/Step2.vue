<template>
  <div class="all">
    <!-- 账号名 -->
    <div class="username">
      <div class="left">账&nbsp;&nbsp;号&nbsp;&nbsp;名</div>
      <div class="right">
        <input
          @blur="validateUsername"
          v-model="username"
          type="text"
          placeholder="账户唯一识别，可用来登录"
          class="cursor"
        />
        <i class="el-icon-circle-check" v-show="iUsername"></i>
      </div>
    </div>
    <div class="p" v-if="errorUsername">
      <i class="el-icon-warning-outline"></i>
      <p>{{ usernameWarning }}</p>
    </div>
    <div class="p" v-else></div>
    <!-- 设置密码 -->
    <div class="setPassword">
      <div class="left">设&nbsp;置&nbsp;密&nbsp;码</div>
      <div class="right">
        <input
          class="cursor"
          @blur="validatePassword"
          v-model="password"
          type="password"
          name=""
          id=""
          placeholder="6到12个字符，至少包含数字、小写字母、大写字母及特殊字符（包含_）"
        />
        <i class="el-icon-circle-check" v-show="iPassword"></i>
      </div>
    </div>
    <div v-if="errorPassword" class="p">
      <i class="el-icon-warning-outline"></i>
      <p>{{ passwordWarning }}</p>
    </div>
    <div class="p" v-else></div>
    <!-- 确认密码 -->
    <div class="confirmPassword">
      <div class="left">确&nbsp;认&nbsp;密&nbsp;码</div>
      <div class="right">
        <input
          class="cursor"
          @blur="validateSecondPassword"
          v-model="secondPassword"
          type="password"
          placeholder="请再次输入密码"
        />
        <i class="el-icon-circle-check" v-show="iSecondPassword"></i>
      </div>
    </div>
    <div class="p" v-if="errorSecondPassword">
      <i class="el-icon-warning-outline"></i>
      <p>{{ secondPasswordWarning }}</p>
    </div>
    <div class="p" v-else></div>

    <!-- 立即注册 -->
    <div class="registerNow">
      <button @click="next" class="cursor">立即注册</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // v-model绑定输入框数据
      username: "",
      password: "",
      secondPassword: "",
      errorUsername: false,
      errorPassword: false,
      errorSecondPassword: false,
      usernameWarning: "",
      passwordWarning: "",
      secondPasswordWarning: "",
      iUsername: false,
      iPassword: false,
      iSecondPassword: false,
      UserObj: {
        username: "",
        password: "",
      },
    };
  },
  // TODO:校验方法
  methods: {
    validateUsername() {
      // console.log(11)
      this.usernameWarning = "";
      this.errorUsername = false;
      if (this.username === "") {
        this.usernameWarning = "手机号输入不能为空";
        this.errorUsername = true;
        return;
      }
      this.iUsername = true;
      this.UserObj.username = this.username;
    },
    validatePassword() {
      this.validateUsername();
      if (this.errorUsername) {
        this.iPassword = false;
        return;
      }
      this.passwordWarning = "";
      this.errorPassword = false;
      if (this.password === "") {
        this.passwordWarning = "密码输入不能为空";
        this.errorPassword = true;
        return;
      }
      const regex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?(_|[^\w\s])).{6,12}$/;
      if (!regex.test(this.password)) {
        this.passwordWarning =
          "6到12个字符，至少包含数字、小写字母、大写字母及特殊字符（包含_）";
        this.errorPassword = true;
        return;
      }
      this.iPassword = true;
      this.UserObj.password = this.password;
    },
    validateSecondPassword() {
      this.validatePassword();
      if (this.errorPassword) {
        this.iSecondPassword = false;
        return;
      }
      this.secondPasswordWarning = "";
      this.errorSecondPassword = false;
      if (this.secondPassword === "") {
        this.secondPasswordWarning = "密码输入不能为空";
        this.errorSecondPassword = true;
        return;
      }
      if (this.secondPassword !== this.password) {
        this.secondPasswordWarning = "与上次密码输入不一致！";
        this.errorSecondPassword = true;
        return;
      }
      this.iSecondPassword = true;
    },
    next() {
      this.validateUsername();
      this.validatePassword();
      this.validateSecondPassword();
      if (
        this.errorUsername ||
        this.errorPassword ||
        this.errorSecondPassword
      ) {
        return;
      }
      this.$emit("getUserObj", this.UserObj);
      // 调用父组件的next方法
      this.$parent.next2();
    },
  },
};
</script>

<style lang="less" scoped>
.all {
  width: 100%;
  height: 100%;
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
      width: 100%;
      height: 100%;
      background-color: #4ab344;
      border: 1px solid #4ab344;
      color: #fff;
      font-size: 16px;
    }
  }
  .registerNow {
    margin-top: 20px;
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
