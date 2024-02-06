<template>
  <div>
    <!-- 顶部图片 -->
    <div class="topPic">
      <img
        src="//17118605.s61i.faimallusr.com/2/AD0IjeuUCBACGAAgqtr82QUo6t7angMwgA84kAM.jpg"
        alt=""
      />
    </div>
    <div class="wrapper">
      <!-- 领券中心title -->
      <div class="top1">
        <p>领券中心</p>
      </div>
      <div class="mid"></div>
      <!-- 优惠券 v-for -->
      <div class="couponList">
        <div
          v-for="(item, index) in CouponList"
          :key="index"
          class="couponList-item"
        >
        <!-- 引入优惠券组件 -->
          <Coupon :coupon="item" class="coupon cursor"></Coupon>
        </div>
      </div>
      <!-- 开启宝宝健康之旅 -->
      <div class="beautyPic">
        <div class="wrapper">
          <img src="@/assets/beauty3.png" alt="" />
        </div>
      </div>
      <!-- 儿科商品列表 -->
      <div class="child_list">
        <div
          class="child_item"
          v-for="(item, index) in child_list"
          :key="index"
        >
          <GoodsItemAddBuy
            @gotoDetail="handleNavigation"
            :goods="item"
          ></GoodsItemAddBuy>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoodsByParentType } from "@/apis/goods";
export default {
  data() {
    return {
      // 优惠券列表
      CouponList: [
        {
          price: 200,
          full: 1500,
          date: "2023.06.06-2024.06.07",
        },
        {
          price: 100,
          full: 800,
          date: "2023.08.08-2025.03.19",
        },
        {
          price: 50,
          full: 500,
          date: "2023.03.27-2024.09.09",
        },
        {
          price: 10,
          full: 100,
          date: "2023.11.11-2024.07.27",
        },
      ],
      parentType: "儿童保健",
      // 儿童保健商品列表
      child_list: [],
    };
  },
  methods: {
    // 根据商品父级分类得到商品列表
    async getGoodsByParentTypeM() {
      const { data: res } = await getGoodsByParentType(this.parentType);
      // 取前8件商品
      this.child_list = res.slice(0, 8);
    },
    // 点击跳转到商品详情页
    handleNavigation(id) {
      // 处理接收到的参数
      this.$router.push({ path: "goodsDetail", query: { goods_id: id } });
    },
  },
  created() {
    this.getGoodsByParentTypeM();
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
.wrapper {
  height: 1500px;
  // background-color: lavender;
  .top1 {
    margin-top: 30px;
    width: 100%;
    height: 60px;
    background-color: #fff;
    // background-color: #EE4AA1;
    border-bottom: 2px solid #eaeaea;
    // margin-bottom: 40px;
    p {
      width: 120px;
      line-height: 60px;
      padding-left: 10px;
      font-size: 25px;
      color: #4ab344;
      border-bottom: 2px solid #4ab344;
    }
  }
  .mid {
    width: 100%;
    height: 30px;
    background-color: #fff;
  }
  // 领券中心
  .couponList {
    background-color: #fff;
    width: 100%;
    height: 155px;
    // background-color: palegoldenrod;
    display: flex;
    justify-content: center;
    align-content: center;
    .couponList-item {
      margin-left: 15px;
      width: 260px;
      height: 120px;
      // background-color: orchid;
      display: flex;
      .coupon {
        width: 100%;
        height: 100%;
      }
    }
  }
  // 开启宝宝健康之旅
  .beautyPic {
    .wrapper {
      margin-top: 80px;
      height: 150px;
      // background-color: pink;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .child_list {
    margin-top: 80px;
    width: 100%;
    height: 880px;
    // background-color: salmon;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .child_item {
      height: 417px;
      width: 23.5%;
      margin-right: 5px;
      // background-color: skyblue;
    }
  }
}
</style>
