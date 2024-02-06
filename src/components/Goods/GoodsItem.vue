<template>
  <!-- <div class="wrapper"> -->
  <div class="goods_item" @click="navigateToRoute(goods.goodsId)">
    <div class="top">
      <img :src="goods.img" alt="" />
    </div>
    <div class="middle">
      <span
        :style="{ color: color, borderColor: color}"
        class="el-tag el-tag--success el-tag--small el-tag--plain"
        >领券</span
      >
      <p>{{ goods.name }}</p>
    </div>
    <div class="bottom">
      <span class="newPrice" :style="{ color: color }">￥{{
        goods.disPrice | formatPrice
      }}</span>
      <span class="oldPrice">￥{{ goods.orPrice | formatPrice }}</span>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  // 在Vue中，默认情况下，使用插值表达式{{}}来显示数据时，
  // 会将数字转换为字符串并进行简单的格式化。
  // 这可能会导致小数点后的位数丢失。
  // 要保留小数点后两位，可以使用Vue的过滤器来处理。
  // 在Vue实例中定义一个名为 formatPrice 的过滤器，用于格式化价格：
  filters: {
    formatPrice (value) {
      return value?.toFixed?.(2) || 0
    }
  },
  props: {
    goods: {
      default () {
        return {}
      },
      // type: Object,
      required: true
    },
    color: {
      default: '',
      // type: String,
      required: true
    }
  },
  methods: {
    navigateToRoute (id) {
      this.$emit('gotoDetail', id)
    }
  }
}
</script>

<style lang="less" scoped>
.goods_item:hover p{
  // transform: scale(1.5);
  font-weight: bold;
}
.goods_item:hover .newPrice{
  transform: scale(1.3);
  font-weight: bolder;
}
.goods_item:hover{
      transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
}
.goods_item {
  width: 18%;
  height: 295px;
  //   background-color: orchid;
  background-color: #fff;
  .top {
    width: 100%;
    height: 70%;
    // background-color: salmon;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .middle {
    width: 100%;
    height: 10%;
    // background-color: chartreuse;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    span {
      color: #f37ec0;
      border-color: #f37ec0;
    }
    p {
      font-size: 13px;
      margin-left: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .bottom {
    width: 100%;
    height: 20%;
    // background-color: lightblue;
    font-size: 13px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    .newPrice {
      font-size: 20px;
      color: #ed3fa1;
      padding-right: 10px;
    }
    .oldPrice {
      font-size: 13px;
      color: #b7a8a7;
      text-decoration: line-through;
    }
  }
}
</style>
