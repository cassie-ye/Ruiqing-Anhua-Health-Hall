<template>
  <div class="all">
    <div class="channel" @click="gotoChannel('/man')">
      <span>男生专场</span>
      <img src="@/assets/middleBt/1.jpg" alt="" />
    </div>
    <div class="channel" @click="gotoChannel('/woman')">
      <span>女生专场</span>
      <img src="@/assets/middleBt/2.jpg" alt="" />
    </div>
    <div class="channel" @click="gotoChannel('/child')">
      <span>儿童专场</span>
      <img src="@/assets/middleBt/3.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        gotoChannel(path) {
            this.$router.push(path);
        }
    }
};
</script>

<style lang="less" scoped>
.all {
  display: flex;
  .channel {
    position: relative;
    background-color: #fff;
    width: 33%;
    height: 165px;
    span {
      position: absolute;
      top: 17px;
      left: 50%;
      color: #4AB344;
      font-weight: bold;
      font-size: 23px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .channel:nth-child(2) {
    margin-left: 0.5%;
    margin-right: 0.5%;
  }
}
</style>