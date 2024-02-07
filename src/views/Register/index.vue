<template>
  <div id="page">
    <RegisterNav></RegisterNav>
    <!-- 进度条 -->
    <div class="step">
      <el-steps :active="active" finish-status="success">
        <el-step title="验证手机号"></el-step>
        <el-step title="填写账号信息"></el-step>
        <el-step title="注册成功"></el-step>
      </el-steps>
    </div>
    <!-- 步骤1 -->
    <Step1
      @gotoSteps="gotoSteps"
      v-if="this.active === 0 ? true : false"
    ></Step1>
    <Step2
      @registeNow="registeNow"
      v-if="this.active === 1 ? true : false"
    ></Step2>
    <div v-if="this.active === 2 ? true : false">steps3</div>
    <!-- <template v-if="this.active === 1 ? true : false">
        <div class="formR">
          <RegisterForm @getUserObj="getUserMessage"></RegisterForm>
        </div>
      </template>
      <template v-if="this.active === 2 ? true : false">
        <div class="finish">
          <i class="el-icon-time"></i>
          <p class="name">恭喜您，{{ registerObj.username }}</p>
          <p class="grey">您已成功注册为瑞清安华用户，祝您购物愉快~</p>
          <button @click="next3" class="cursor">去登录</button>
        </div>
      </template> -->
  </div>
</template>

<script>
import RegisterNav from "@/views/Register/components/RegisterNav.vue";
import Step1 from "@/views/Register/components/Step1.vue";
import Step2 from "@/views/Register/components/Step2.vue";
export default {
  components: {
    RegisterNav: RegisterNav,
    Step1: Step1,
    Step2: Step2,
  },
  data() {
    return {
      // 步骤条当前所在的步骤索引
      active: 1,
      // 注册接口所需对象
      registerObj: {
        username: "",
        password: "",
        phone: "",
      },
    };
  },
  methods: {
    // 点击跳转到上一步或者下一步
    gotoSteps(content) {
      // 如果传过来的参数类型为数字，那么直接赋值
      if (typeof content === "number") {
        this.active = content;
        // 如果传过来的参数类型为对象，那么取其中的index属性赋值
      } else if (typeof content === "object") {
        this.active = content.index;
        // 只有step2中传过来是对象，因此顺便在此处赋值注册对象的phone属性
        this.registerObj.phone = content.phoneNumber;
      }
    },
    registeNow(steps2Obj) {
      // 接收子组件传过来的参数对象steps2Obj，并赋值注册对象的username属性和password属性
      this.registerObj.username = steps2Obj.username;
      this.registerObj.password = steps2Obj.password;
      // TODO：在这里调用注册接口
      // 调用方法跳转到步骤三————注册成功
      // this.gotoSteps(steps2Obj.index);
    },
  },
};
</script>

<style lang="less" scoped>
#page {
  height: 800px;
  background-color: #fff;
}
.step {
  margin-left: 10%;
  width: 80%;
  height: 150px;
  // background-color: palegoldenrod;
  display: flex;
  justify-content: center;
  align-items: center;
}
/deep/.el-steps {
  width: 80%;
}
.form {
  width: 35%;
  height: 650px;
  // background-color: pink;
  background-color: #fff;
  margin-left: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
}
.formR {
  width: 80%;
  // height: 1000px;
  // background-color: pink;
  display: flex;
  align-items: center;
  margin-top: 30px;
  .success {
    width: 200px;
  }
}
.finish {
  width: 600px;
  height: 400px;
  // background-color: pink;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  i {
    color: #4ab344;
    font-size: 60px;
  }
  .name {
    margin-top: 10px;
    font-size: 25px;
  }
  .grey {
    margin-top: 10px;

    font-size: 16px;
    color: grey;
  }
  button {
    margin-top: 40px;
    width: 110px;
    height: 55px;
    background-color: #4ab344;
    border: 1px solid #4ab344;
    color: #fff;
    font-size: 18px;
  }
}
</style>