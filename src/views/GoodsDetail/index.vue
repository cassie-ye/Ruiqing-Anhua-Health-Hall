<template>
  <div>
    <HeaderBlack></HeaderBlack>
    <HeaderSearch></HeaderSearch>
    <div class="topPic">
      <img
        src="//17118605.s61i.faimallusr.com/2/AD0IjeuUCBACGAAg38382QUohMPD3gcwgA84kAM.jpg"
        alt=""
      />
    </div>
    <Details></Details>
    <UserComment></UserComment>
  </div>
</template>

<script>
import Details from "@/views/GoodsDetail/components/Details.vue";
import UserComment from "@/views/GoodsDetail/components/UserComment.vue";
export default {
  components: {
    Details: Details,
    UserComment:UserComment
  },
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
</style>