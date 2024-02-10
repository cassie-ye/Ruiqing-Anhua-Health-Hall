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
                  @click="openDialogVisibleDelete"
                  type="danger"
                  size="mini"
                  plain
                  >订单回收站</el-button
                >
              </div>
              <div v-if="this.orderList.length !== 0" class="order-content">
                <OrderItem
                  @changeOrderRadio="changeOrderRadio"
                  v-for="(item, index) in orderList"
                  :key="index"
                  :order="item"
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
    <el-dialog
      title="提示"
      :visible.sync="dialogVisibleDelete"
      width="30%"
      :before-close="handleClose"
    >
      <!-- 弹窗内容 -->
      <span>确定删除订单吗</span>
      <span slot="footer" class="dialog-footer">
        <!-- 取消按钮 -->
        <el-button @click="dialogVisibleDelete = false">取 消</el-button>
        <!-- 确定按钮 -->
        <el-button type="primary" @click="deleteSelectOrders">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import OrderItem from "@/views/MyOrder/components/OrderItem.vue";
import { deleteOrderByIdAPI } from "@/apis/order";
export default {
  components: {
    OrderItem,
  },
  data() {
    return {
      activeName: "first",
      // 全选框的值 默认为true
      allChecked: "true",
      // 删除时跳出的弹窗
      dialogVisibleDelete: false,
      // 删除时要传入的对象
      delObj: {
        userId: 0,
        orderId: 0,
      },
    };
  },
  methods: {
    ...mapActions("order", ["getOrderListAction", "deleteOrderByIdAction"]),
    ...mapMutations("order", [
      "changeSingleStatus",
      "syncChangeAllBoxesStatus",
    ]),

    /* 
        调用vuex中的方法：改变小选框的状态 true/false
        相应的也判断一下全选框的状态
    */
    changeOrderRadio(orderId) {
      this.changeSingleStatus(orderId);
      this.allChecked = this.isAllBoxesChecked;
    },

    /* 
        点击全选按钮，修改全选框的值，并更新到vuex中
        调用vuex中的方法：根据全选框状态，同步修改所有小选框的值
    */
    changeAllChecked() {
      this.allChecked = !this.allChecked;
      this.syncChangeAllBoxesStatus(this.allChecked);
    },

    /* 
        删除选中商品
    */
    async deleteSelectOrders() {
      // // 遍历当前选中的商品列表，删除这个列表的每一件商品，关闭弹窗
      // // this.delObj.userId = this.userInfo.id;
      // this.selOrderList.forEach((item) => {
      //   console.log(item);
      //   // this.delObj.orderId = item.id;
      //   // this.deleteOrderByIdAction(this.delObj);
      //   // console.log(this.delObj);
      //   const obj = {
      //     orderId: item.id,
      //     userId: this.userInfo.id,
      //   };
      //   console.log(obj);
      //   this.deleteOrderByIdAction(obj);
      // });
      // this.dialogVisibleDelete = false;
      for (let index = 0; index < this.selOrderList.length; index++) {
        const element = this.selOrderList[index];
        console.log(element);
        await deleteOrderByIdAPI(element.id);
        this.getOrderListAction(this.userInfo.id);
        this.dialogVisibleDelete = false;
      }
    },

    /* 
      点击删除按钮，打开弹窗
    */
    openDialogVisibleDelete() {
      this.dialogVisibleDelete = true;
    },

    /* 
      点击弹框的叉叉或者弹框外部区域，弹框关闭
    */
    handleClose() {
      this.dialogVisibleDelete = false;
    },

    /* 
      订单列表没有任何数据的时候，点击去购物，跳转到首页
    */
    goShopping() {
      this.$router.push("/");
    },
  },
  computed: {
    ...mapState("user", ["userInfo"]),
    ...mapState("order", ["orderList"]),
    ...mapGetters("order", ["isAllBoxesChecked", "selOrderList"]),
  },
  created() {
    /* 
      每次进入页面的时候，都调用同步设置所有小选框的状态方法
      使得所有全选框、所有小选框 全部选中
      每次进入页面都重新拉取一下订单列表数据
    */
    this.syncChangeAllBoxesStatus(true);
    this.allChecked = this.isAllBoxesChecked;
    this.getOrderListAction(this.userInfo.id);
  },
  watch: {
    isAllBoxesChecked: {
      handler(newValue, oldValue) {
        console.log(newValue, oldValue);
        this.allChecked = this.isAllBoxesChecked;
      },
      deep: true,
    },
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