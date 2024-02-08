<template>
  <div class="wrapper">
    <!-- 是否选中？ -->
    <div class="choose">
      <input
        @click="changeStatus"
        type="checkbox"
        class="check"
        :checked="goods.isChecked"
      />
    </div>
    <div class="goods">
      <!-- 左边部分 -->
      <div class="goods_left">
        <!-- 商品图片 -->
        <img :src="goods.img" alt="" />
      </div>
      <!-- 右边部分 -->
      <div class="goods_right">
        <!-- 商品名称 -->
        <div class="name">{{ goods.name }}</div>
        <!-- 商品功效 -->
        <div class="effect">{{ goods.efficacy }}</div>
        <!-- 不支持7天无理由退货 -->
        <p>不支持7天无理由退货</p>
      </div>
    </div>
    <!-- 商品单价 -->
    <div class="single_price">￥{{ goods.disPrice }}</div>
    <!-- 商品加入购物车的数量 -->
    <div class="num">
      <el-input-number
        @change="handleChange"
        size="small"
        v-model="num"
        step-strictly
        :min="1"
      ></el-input-number>
    </div>
    <!-- 单个商品总金额 -->
    <div class="price">￥{{ single_totalPrice }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    goods: {
      // type: object,
      default: {},
    },
  },
  data() {
    return {
      // 计数器的值
      num: 1,
      // 小选框的值
      isChecked: true,
      // 加入购物车的编号
      cartId: 0,
    };
  },
  methods: {
    /* 
        改变小选框的状态，向父组件传递当前商品的id，在父组件中调用vuex修改小选框状态
    */
    changeStatus() {
      this.$emit("changeStatus", this.goods.goodsId);
    },

    /* 
        点击计数器的加/减触发该方法
        暂时先做加
        value：计数器的值
    */
    handleChange(value) {
      if (value > this.goods.number) {
        const addToCartObj = {
          userId: this.userInfo.id,
          goodsId: this.goods.goodsId,
          method: "add",
        };
        this.$emit("changeInputNumberValue", addToCartObj);
        // }else {
        //   const deleteGoodsObj={
        //     userId: this.userInfo.id,
        //     cartId: this.cartId,
        //     method:'delete'
        //   }
        //   this.$emit("changeInputNumberValue", deleteGoodsObj);
      }
    },
  },
  computed: {
    ...mapState("user", ["userInfo"]),
    // 单个商品总金额
    single_totalPrice() {
      return this.goods.disPrice * this.goods.number;
    },
  },
  created() {
    // 将父组件传过来的商品对象的数量赋值给计数器数量（回显）
    this.num = this.goods.number;
    // 将父组件传过来的商品对象的**加入购物车的编号**赋值
    this.cartId = this.goods.id;
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  background-color: #f0f9eb;
  width: 100%;
  display: flex;
  height: 170px;
  .choose {
    width: 12%;
    // height: 100%;
    // background-color: rosybrown;
    display: flex;
    align-items: center;
    .check {
      margin-left: 20px;
      width: 20px;
      height: 20px;
    }
  }
  .goods {
    width: 45%;
    // height: 100%;
    // background-color: beige;
    display: flex;
    .goods_left {
      width: 25%;
      height: 100%;
      // background-color: salmon;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        border: 1px solid #e4e4e4;
      }
    }
    .goods_right {
      width: 75%;
      height: 100%;
      // background-color: honeydew;
      padding-left: 25px;
      padding-top: 20px;
      .name {
        font-size: 20px;
        font-weight: bold;
      }
      .effect {
        padding-top: 25px;
        font-size: 16px;
        font-weight: 550;
        color: #a5a5a5;
      }
      p {
        padding-top: 5px;
        font-size: 16px;
        font-weight: 550;
        color: #a5a5a5;
      }
    }
  }
  .single_price {
    width: 12%;
    // height: 100%;
    // background-color: royalblue;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: #e0130c;
  }
  .num {
    width: 15%;
    // background-color: lavender;
    display: flex;
    align-items: center;
  }
  .price {
    width: 16%;
    // background-color: palegreen;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bolder;
    color: #e0130c;
  }
}
</style>
