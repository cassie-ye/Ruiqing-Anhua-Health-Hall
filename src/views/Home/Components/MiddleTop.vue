<template>
  <!-- <div class="ad cursor">
    <i class="iconfont icon-guangbo"></i>
    <p class="content">
      <span
        >
      </span>
    </p>
  </div> -->
  <div class="ad">
    <i class="iconfont icon-gonggao"></i>
    <p class="content">
      <span>大家好！
        瑞清安华养生堂是一个专注于为顾客提供优质产品的养生商城！在这里，你可以找到各种高品质的保健品，满足你的健康需求。
        瑞清安华养生堂是一个值得信赖的平台，所有的保健品都经过了严格的质量检测，确保产品的安全和有效性。我们的宗旨是为顾客提供优质的保健品和专业的健康咨询服务，让你的健康得到最好的保障。
        为了欢迎和感谢广大顾客的支持，我们特别推出了一系列的优惠活动和促销方案，让你在购物的同时还能享受更多的实惠。
        我们诚挚地呼吁和欢迎各位顾客前来选购我们的保健品，我们将竭尽全力为你提供最好的产品和服务，让你的健康更美好！
        祝大家身体健康，生活愉快！</span>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
.ad {
  // width: 100%;
  height: 35px;
  background-color: #f0f9eb;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  color: #353535;
  box-shadow: 2px 1px 8px 1px rgb(228, 232, 235);
  // margin: 40px auto;
  i {
    color: #4ab344;
    font-size: 20px;
    margin-right: 10px;
  }

  .content {
    flex: 1;
    overflow: hidden;
    span {
      display: block;
      width: auto;
      white-space: nowrap;
      animation: marquee 30s linear infinite;
      display: block;
      width: auto;
      white-space: nowrap;
      animation: marquee 30s linear infinite;
      padding-left: 105%;
      padding-right: 120%;

      &:hover {
        animation-play-state: paused;
      }
    }
  }
}
</style>