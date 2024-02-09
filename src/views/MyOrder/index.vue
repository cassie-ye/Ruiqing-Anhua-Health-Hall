<template>
  <div>
    <HeaderBlack></HeaderBlack>
    <HeaderSearch></HeaderSearch>
    <div class="wrapper">
      <!-- <div class="empty"></div> -->
      <div class="header">
        <el-tabs v-model="activeName">
          <el-tab-pane label="所有订单" name="first">
            <div class="order">
              <div class="order-top">
                <div class="baby">宝贝</div>
                <div class="single_price">单价</div>
                <div class="number">数量</div>
                <div class="operation">商品操作</div>
                <div class="fact_price">实付款</div>
                <div class="state">交易状态</div>
                <div class="jiaoyi">交易操作</div>
              </div>
              <div class="order-select">
                <input
                  @click="changeAllChecked"
                  :checked="allChecked"
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>全选</p>
                <el-button size="mini">合并付款</el-button>
                <el-button size="mini">合并代付</el-button>
                <el-button size="mini">批量确认收货</el-button>
                <i class="el-icon-delete"></i>
                <el-button
                  @click="deleteSelectGoods"
                  type="danger"
                  size="mini"
                  plain
                  >订单回收站</el-button
                >
              </div>
              <div v-if="this.orderList.length !== 0" class="order-content">
                <OrderItem
                  @changeCheck="change"
                  v-for="(item, index) in orderList"
                  :key="index"
                  :goods="item"
                ></OrderItem>
              </div>
              <div v-else class="empty">
                <el-empty description="订单列表空空如也~">
                  <el-button @click="goShopping" type="success"
                    >去购物</el-button
                  >
                </el-empty>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="待付款" name="second">
            <div class="made">待付款</div>
          </el-tab-pane>
          <el-tab-pane label="待发货" name="third">
            <div class="made">待发货</div>
          </el-tab-pane>
          <el-tab-pane label="待收货" name="fourth">
            <div class="made">待收货</div>
          </el-tab-pane>
          <el-tab-pane label="待评价" name="fifth">
            <div class="made">待评价</div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      allChecked: "",
    };
  },
  methods: {
    changeAllChecked() {},
    deleteSelectGoods() {},
    orderList() {},
    goShopping() {},
  },
};
</script>

<style lang="less" scoped>
.made {
  width: 1200px;
  height: 50px;
  // background-color: palegoldenrod;
}
.wrapper {
  .header {
    margin-top: 20px;
    width: 100%;
    // background-color: pink;
    display: flex;
    align-items: center;
    // background-color: #fff;
    ::v-deep .el-tabs__content {
      overflow: visible;
    }
    ::v-deep .el-tabs__nav-scroll {
      background-color: #fff;
    }
    ::v-deep .el-tabs__item {
      color: #666;
      font-weight: bold;
      font-size: 20px;
      width: 150px;
      text-align: center;
      margin-top: 20px;
    }
    ::v-deep .el-tabs__item.is-active {
      color: #4ab344;
      width: 150px;
      height: 45px;
      text-align: center;
      // background-color: saddlebrown;
    }
    ::v-deep .el-icon-arrow-left {
      color: white;
    }
    ::v-deep .el-icon-arrow-right {
      color: white;
    }
    ::v-deep .el-tabs__nav-wrap::after {
      height: 0;
    }
    ::v-deep .el-tabs__active-bar {
      background-color: #4ab344;
    }
    .order {
      .order-top {
        width: 1200px;
        height: 55px;
        margin-top: -14px;
        background-color: #eaf8ff;
        display: flex;
        justify-content: start;
        align-items: center;
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
        }
        .single_price {
          width: 8%;
          // background-color: palegoldenrod;
        }
        .number {
          width: 8%;
          // background-color: mediumaquamarine;
        }
        .operation {
          width: 10%;
          // background-color: salmon;
        }
        .fact_price {
          width: 12%;
          // background-color: gainsboro;
        }
        .state {
          width: 12%;
          // background-color: rosybrown;
        }
        .jiaoyi {
          width: 12%;
          // background-color: royalblue;
        }
      }
      .order-select {
        background-color: #fff;
        width: 100%;
        height: 50px;
        // background-color: royalblue;
        display: flex;
        // justify-content: center;
        align-items: center;
        input {
          width: 20px;
          height: 20px;
          margin-right: 5px;
          margin-left: 10px;
        }
        p {
          margin-right: 15px;
        }
        .el-button--danger {
          margin-left: 10px;
        }
        .el-icon-delete {
          margin-left: 660px;
          font-size: 20px;
          color: #f56c6c;
        }
      }
      .order-content {
        background-color: #f5f5f5;
      }
    }
  }
}
</style>