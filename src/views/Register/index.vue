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
    <!-- <Step1 @gotoSecond="gotoSecond" v-if="this.active === 0 ? true : false"></Step1> -->
    <Step2 v-if="this.active === 1 ? true : false"></Step2>
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
    Step2:Step2
  },
  data() {
    return {
      active: 1,
    };
  },
  methods: {
    gotoSecond() {
      this.active = 1;
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