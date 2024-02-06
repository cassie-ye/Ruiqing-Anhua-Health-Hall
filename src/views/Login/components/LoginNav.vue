<template>
  <!-- 登录页面头部Header -->
  <div class="header">
    <div class="name">
      <div class="chinese">瑞清安华养生堂</div>
      <div class="English">Ruiqing Anhua Wellness Hall</div>
    </div>
    <div class="advice">
      <div class="no">网站无障碍</div>
      <div class="loginAdvice">
        <i class="el-icon-chat-line-square"></i>
        <p>"登录页面"改进建议</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 110px;
  //   background-color: pink;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  .name {
    width: 20%;
    height: 100%;
    // background-color: skyblue;
    color: #4ab344;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 130px;
    .chinese {
      font-size: 37px;
      font-weight: bold;
    }
    .English {
      font-size: 18px;
    }
  }
  .advice {
    width: 10%;
    height: 100%;
    // background-color: skyblue;
    margin-right: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .no {
      font-size: 13px;
      margin-left: -68px;
      color: #666666;
    }
    .no:hover {
      color: #4ab344;
    }
    .loginAdvice {
      display: flex;
      padding-top: 8px;
      font-size: 13px;
      color: #666666;
      i {
        font-size: 20px;
        color: #4ab344;
      }
      p {
        font-size: 13px;
      }
    }
    .loginAdvice:hover {
      color: #4ab344;
    }
  }
}
</style>