<template>
  <div class="wrapper">
    <!-- 头部 -->
    <div class="header">
      <!-- 小选框 -->
      <input
        @click="changeOrderRadio"
        :checked="order.isChecked"
        type="checkbox"
        name=""
        id=""
      />
      <!-- 下单日期 -->
      <p class="date">{{ shopDate }}</p>
      <!-- 订单号 -->
      <p>
        订单号：<span>{{ order.orderNum }}</span>
      </p>
      <!-- 和我联系 -->
      <div class="relation">
        <i class="el-icon-s-shop"></i>
        <el-tag size="small" type="warning">和我联系</el-tag>
      </div>
      <!-- 小国旗图标 -->
      <i class="el-icon-s-flag"></i>
    </div>
    <div class="order-top">
      <div class="baby">
        <!-- 左边图片 -->
        <div class="baby_left">
          <img :src="order.img" alt="" />
        </div>
        <!-- 右边 -->
        <div class="baby_right">
          <!-- 商品名称 -->
          <div class="top_text">
            {{ order.name }}
          </div>
          <!-- 商品功效 -->
          <div class="mid_effect">{{ order.efficacy }}</div>
          <!-- 绿色保障卡 -->
          <div class="protect">
            <el-tag type="success" effect="dark" size="small"> 保障卡 </el-tag>
          </div>
          <!-- 发货时间 -->
          <div class="time">发货时间：付款后，48小时内发货</div>
        </div>
      </div>
      <!-- 单价 -->
      <div class="single_price">
        <!-- 原价 -->
        <p class="old">￥{{ order.orPrice }}</p>
        <!-- 现价 -->
        <p class="new">￥{{ order.disPrice }}</p>
      </div>
      <!-- 下单数量 -->
      <div class="number">{{ order.number }}</div>
      <!-- 投诉卖家 -->
      <div class="operation">投诉卖家</div>
      <div class="fact_price">
        <!-- 实付价格 -->
        <p class="new">￥{{ order.disPrice }}</p>
        <p>含运费：￥0.00</p>
      </div>
      <!-- 卖家已发货 -->
      <div class="state">
        <p>卖家已发货</p>
        <!-- 订单详情 -->
        <p class="order_detail">订单详情</p>
        <!-- 查看物流 -->
        <p class="look">查看物流</p>
      </div>
      <!-- 确认收货按钮 -->
      <div class="jiaoyi">
        <el-button type="primary" size="small">确认收货</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // 提交方法给父组件,修改每条订单记录的小选框的值
    changeOrderRadio() {
      this.$emit("changeOrderRadio", this.order.id);
    },
  },
  created() {
    // console.log(this.goods.shopDate)
  },
  computed: {
    // 下单时间字符串操作
    shopDate() {
      const dateString = this.order.shopDate;
      const date = dateString.slice(0, 10);
      return date;
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 50px;
  background-color: #f0f9eb;
  display: flex;
  align-items: center;
  input {
    width: 20px;
    height: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .date,
  span {
    font-weight: bold;
    margin-right: 15px;
  }
  .relation {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 290px;
    i {
      font-size: 25px;
      color: #1c9eff;
    }
  }
  .el-icon-s-flag {
    font-size: 23px;
    margin-left: 390px;
    color: lightskyblue;
  }
}
.order-top {
  margin-bottom: 15px;
  width: 100%;
  height: 180px;
  //   background-color: #f0f9eb;
  display: flex;
  justify-content: start;
  align-items: center;
  border-left: 2px solid #f0f9eb;
  border-right: 2px solid #f0f9eb;
  border-bottom: 2px solid #f0f9eb;
  .baby,
  .single_price,
  .number,
  .operation,
  .fact_price,
  .state,
  .jiaoyi {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .baby {
    width: 38%;
    // background-color: pink;
    background-color: #fff;
    .baby_left {
      width: 30%;
      height: 100%;
      //   background-color: lavender;
      display: flex;
      align-items: center;
      img {
        width: 100%;
      }
    }
    .baby_right {
      width: 70%;
      height: 100%;
      //   background-color: yellowgreen;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
      .top_text {
        font-size: 16px;
        // margin-top: 20px;
      }
      .mid_effect {
        margin-top: 10px;
        color: #bababa;
      }
      .el-tag {
        margin-top: 10px;
      }
      .time {
        margin-top: 10px;
      }
    }
  }
  .single_price {
    width: 8%;
    // background-color: palegoldenrod;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    p {
      font-size: 16px;
    }
    .old {
      color: #9c9c9c;
      text-decoration: line-through;
    }
    .new {
      font-size: 20px;
      color: #4ab344;
      font-weight: bold;
    }
  }
  .number {
    width: 8%;
    // background-color: mediumaquamarine;
    background-color: #fff;

    font-size: 16px;
  }
  .operation {
    width: 10%;
    // background-color: salmon;
    background-color: #fff;

    font-size: 16px;
  }
  .fact_price {
    width: 12%;
    // background-color: gainsboro;
    background-color: #fff;

    font-size: 16px;
    display: flex;
    flex-direction: column;
    .new {
      font-size: 20px;
      color: #4ab344;
      font-weight: bold;
    }
  }
  .state {
    width: 12%;
    // background-color: rosybrown;
    background-color: #fff;

    font-size: 16px;
    display: flex;
    flex-direction: column;
    .order_detail,
    .look {
      font-size: 12px;
      margin-top: 5px;
    }
    .order_detail {
      color: #66b6ff;
    }
    .look {
      color: #ff4400;
    }
  }
  .jiaoyi {
    width: 12%;
    // background-color: royalblue;
    background-color: #fff;

    font-size: 16px;
    display: flex;
    flex-direction: column;
  }
}
</style>
