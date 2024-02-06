<template>
  <div>
    <!-- 顶部男生专场宣传图片 -->
    <div class="topPic">
      <img
        src="//17118605.s61i.faimallusr.com/2/AD0IjeuUCBACGAAg7c782QUokOvwmwMwgA84kAM.jpg"
        alt=""
      />
    </div>
    <div class="wrapper">
      <!-- 锁住男人雄风图片 -->
      <div class="beautyPic">
        <div class="wrapper">
          <img src="@/assets/beauty2.png" alt="" />
        </div>
      </div>
      <!-- 男生用药模块 -->
      <div class="womenMedical">
        <div class="wrapper">
          <ManMedical></ManMedical>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ManMedical from './components/ManMedical.vue'
export default {
  components:{
    ManMedical:ManMedical
  }
};
</script>

<style lang="less" scoped>
.topPic {
  width: 100%;
  height: 400px;
  // background-color: pink;
  img {
    width: 100%;
    height: 100%;
  }
}
.wrapper {
  height: 950px;
  margin-bottom: 40px;
}
// 还原天然美丽肌肤图片模块
.beautyPic {
  .wrapper {
    margin-top: 50px;
    height: 150px;
    // background-color: pink;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
// 女科用药模块
.womenMedical {
  .wrapper {
    height: 730px;
    // background-color: pink;
    margin-top: 10px;
  }
}
</style>
