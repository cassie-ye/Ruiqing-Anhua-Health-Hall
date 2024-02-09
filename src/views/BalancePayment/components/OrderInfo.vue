<template>
  <div class="wrapper">
    <div class="info">
      <div class="info_left">
        <p class="b">瑞清安华 - 宁波市瑞清安华有限公司</p>
        <p>商品信息：{{ goodsText }}</p>
      </div>
      <div class="info_right">
        订单金额&nbsp;&nbsp;<span>{{ selPrice }}</span
        >&nbsp;&nbsp;元
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      goodsText: "",
    };
  },
  computed: {
    ...mapGetters("cart", ["selCartList", "selCount", "selPrice"]),
  },
  methods: {
    /* 
        如果下单的商品件数只有一件，那么goodsText的值为那件商品的名称
        如果下单的商品件数有2件以上，那么goodsText的值为合并支付()件商品
    */
    getGoodsText() {
      if (this.selCount === 1) {
        this.goodsText = this.selCartList[0].name;
      } else {
        this.goodsText = `合并支付${this.selCount}件商品`;
      }
    },
  },
  created() {
    this.getGoodsText();
  },
};
</script>

<style lang="less" scoped>
.info {
  width: 100%;
  height: 150px;
  // background-color: pink;
  border-bottom: 4px solid #b6b6b6;
  display: flex;
  .info_left {
    width: 78%;
    height: 100%;
    // background-color: palegoldenrod;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .b {
      margin-bottom: 10px;
    }
    p {
      font-size: 16px;
    }
  }
  .info_right {
    width: 22%;
    height: 100%;
    // background-color: lavender;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    span {
      font-size: 30px;
      font-weight: bold;
      color: #ff8316;
    }
  }
}
</style>