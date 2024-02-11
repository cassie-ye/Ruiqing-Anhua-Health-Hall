<template>
  <div>
    <!-- 左右边距固定
        根据设备的宽度调整大小 媒体查询
        1200px
     -->
    <HeaderBlack></HeaderBlack>
    <HeaderSearch></HeaderSearch>
    <div class="wrapper">
      <UserInfo></UserInfo>
      <div class="info_right">
        <Statistics></Statistics>
        <div class="charts">
          <!-- <div class="left"> -->
            <Pie></Pie>
          <!-- </div> -->
          <div class="right">
            <Calendar></Calendar>
            <Operations></Operations>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserInfo from "@/views/MyInfo/components/UserInfo.vue";
import Statistics from "@/views/MyInfo/components/Statistics.vue";
import Pie from "@/views/MyInfo/components/Pie.vue";
import Calendar from "@/views/MyInfo/components/Calendar.vue";
import Operations from "@/views/MyInfo/components/Operations.vue"
export default {
  components: {
    UserInfo,
    Statistics,
    Pie,
    Calendar,
    Operations
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  .info_right {
    width: 74%;
    height: 600px;
    margin-left: 1%;
    // background-color: palegoldenrod;
    .charts{
      display: flex;
      height: 400px;
      .left{
        width: 70%;
        height: 100%;
        // background-color: peru;
      }
      .right{
        margin-top: 15px;
        width: 30%;
        height: 100%;
        // background-color: lightblue;
      }
    }
  }
}
</style>