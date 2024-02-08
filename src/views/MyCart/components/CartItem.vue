<template>
  <div class="wrapper">
    <div class="choose">
      <input @click="changeCheck" type="checkbox" class="check" :checked="goods.isChecked"/>
    </div>
    <div class="goods">
      <div class="goods_left">
        <img
          :src="goods.img"
          alt=""
        />
      </div>
      <div class="goods_right">
        <div class="name">{{goods.name}}</div>
        <div class="effect">{{goods.efficacy}}</div>
        <p>不支持7天无理由退货</p>
      </div>
    </div>
    <div class="single_price">￥{{goods.disPrice}}</div>
    <div class="num">
      <el-input-number @change="handleChange" size="small" v-model="num" step-strictly :min="1"></el-input-number>
    </div>
    <div class="price">￥{{single_totalPrice}}</div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      // type: object,
      default: {}
    }
  },
  data () {
    return {
      num: 1
    }
  },
  methods: {
    changeCheck () {
      // this.goods.isChecked = !this.goods.isChecked
      this.$emit('changeCheck', this.goods.id)
      // console.log(this.goods.isChecked)
    },
    handleChange (value) {
      console.log(value)
      this.$emit('changeInputNumberValue', value, this.goods.id)
    }
  },
  computed: {
    single_totalPrice () {
      return this.goods.disPrice * this.goods.number
    }
  },
  mounted () {
    this.num = this.goods.number
  }
}
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
