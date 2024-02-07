<template>
  <div class="finish">
    <i class="el-icon-time"></i>
    <p class="name">恭喜您，{{successfullObj.username}}</p>
    <p class="grey">您已成功注册为瑞清安华用户，祝您购物愉快~</p>
    <button @click="gotoLogin" class="cursor">去登录</button>
  </div>
</template>

<script>
export default {
  props: {
    successfullObj: {
      default() {
        return {};
      },
      // type: Object,
      required: true,
    },
  },
  methods:{
    gotoLogin(){
        this.$router.push('/login')
    }
  }
};
</script>

<style lang="less" scoped>
.finish {
  margin: 0 auto;
  //   background-color: pink;
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