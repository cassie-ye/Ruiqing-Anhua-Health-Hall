<template>
  <div class="all">
    <div class="wrapper">
      <div class="left">
        <div class="leftTop">
          <LeftTop></LeftTop>
        </div>
        <div class="leftBottom">
          <LeftBottom></LeftBottom>
        </div>
      </div>
      <div class="middle">
        <div class="middleTop">
          <MiddleTop></MiddleTop>
        </div>
        <div class="middleCenter">
          <MiddleCenter></MiddleCenter>
        </div>
        <div class="middleBottom">
          <MiddleBottom></MiddleBottom>
        </div>
      </div>
      <div class="right">
        <div class="rightTop"></div>
        <div class="rightBottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftTop from '@/views/Home/Components/LeftTop.vue'
import LeftBottom from '@/views/Home/Components/LeftBottom.vue'
import MiddleCenter from '@/views/Home/Components/MiddleCenter.vue'
import MiddleTop from '@/views/Home/Components/MiddleTop.vue'
import MiddleBottom from '@/views/Home/Components/MiddleBottom.vue'
export default {
  name: "Layout",
  components: {
    LeftTop,
    LeftBottom,
    MiddleCenter,
    MiddleTop,
    MiddleBottom
}
}
</script>

<style lang="less" scoped>
.all{
  .wrapper{
    margin-top: 0.8%;
  // background-color: lavender;
    height: 570px;
    display: flex;
    .left{
      width: 19%;
      height: 100%;
      // background-color: palegoldenrod;
      display: flex;
      flex-direction: column;
      .leftTop{
        width: 100%;
        height: 60%;
        background-color: #F0F9EB;
        border-radius: 10px;
        border: 1px dashed #4AB344;
        margin-bottom: 5%;
      }
      .leftBottom{
        width: 100%;
        // height: 35%;
        flex:1;
        // background-color: goldenrod;
      }
    }
    .middle{
      width: 60%;
      height: 100%;
      // background-color: palegreen;
      margin-left: 1%;
      margin-right: 1%;
      display: flex;
      flex-direction: column;
      .middleTop{
        width: 100%;
        height: 6%;
        // background-color: coral;
      }
      .middleCenter{
        width: 100%;
        height: 64%;
        margin-top: 1%;
        // margin-bottom: 1%;
        // background-color: thistle;
      }
      .middleBottom{
        width: 100%;
        flex:1;
        // background-color: indianred;
      }
    }
    .right{
      width: 19%;
      height: 100%;
      background-color: paleturquoise;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .rightTop{
        width: 100%;
        height: 43%;
        background-color: tan;
      }
      .rightBottom{
        width: 100%;
        height: 55%;
        background-color: thistle;
      }
    }
  }
}
</style>