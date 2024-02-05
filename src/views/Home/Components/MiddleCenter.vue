<template>
  <div>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(item, index) in carouselList" :key="index">
        <img :src="item.url" alt="" style="max-width:100%;height:auto"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselList: [
        { url: require("@/assets/lbt/5.webp") },
        { url: require("@/assets/lbt/4.jpg") },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.el-carousel {
  width: 100%;
  height: 356px;
  .el-carousel__item {
    width: 100%;
    height: 356px;
    
  }
}
</style>>
