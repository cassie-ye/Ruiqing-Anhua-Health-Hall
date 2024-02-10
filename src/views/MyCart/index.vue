<template>
  <div>
    <!-- 头部搜索导航栏 -->
    <HeaderSearch></HeaderSearch>
    <!-- v-if 当前购物车不为空时显示的空购物车页面 -->
    <div v-if="cartList?.length > 0" class="content">
      <div class="wrapper">
        <!-- 购物车标题部分 -->
        <div class="header">
          <!-- 左边部分 -->
          <div class="header_left">
            <!-- 购物车商品总数量 每种商品的数量和 -->
            <div class="cartAll">购物车（全部{{ totalGoodsInCart }}）</div>
          </div>
          <!-- 右边部分 -->
          <div class="header_right">
            <!-- 已经选中的商品的总价格 -->
            <div class="sellect_text">已选商品(不含运费)</div>
            <div class="select_price">{{ selPrice }}</div>
            <!-- 结算按钮 没有商品被选中时 按钮禁用 -->
            <el-button
              v-if="this.selCartList?.length === 0"
              type="info"
              plain
              round
              disabled
              >结算</el-button
            >
            <!-- 结算按钮 如果有1件及以上商品被选中 则显示按钮 处理结算逻辑 -->
            <el-button v-else @click="settlement" type="success" plain round
              >结算</el-button
            >
          </div>
        </div>
        <!-- 购物车列表表头部分 -->
        <table class="form">
          <thead>
            <tr>
              <th class="th_1">
                <div>
                  <!-- 全选按钮 -->
                  <input
                    @click="changeAllChecked"
                    :checked="allChecked"
                    type="checkbox"
                    class="check_all"
                  />
                  <!-- 选择 -->
                  选择
                </div>
              </th>
              <!-- 商品 -->
              <th class="th_2">商品</th>
              <!-- 单价 -->
              <th class="th_3">单价（元）</th>
              <!-- 数量 -->
              <th class="th_4">数量</th>
              <!-- 金额 -->
              <th class="th_5">金额（元）</th>
            </tr>
          </thead>
        </table>
        <!-- 每个商品 -->
        <div class="every">
          <!-- for循环 cartList中的每一个商品 -->
          <div v-for="(item, index) in cartList" :key="index">
            <CartItem
              :goods="item"
              @changeStatus="changeStatus"
              @changeInputNumberValue="changeInputNumberValue"
            ></CartItem>
          </div>
        </div>
        <!-- 购物车底部部分 -->
        <div class="fix">
          <div class="fix_left">
            <div class="select_all">
              <!-- 全选框 -->
              <input
                @click="changeAllChecked"
                :checked="allChecked"
                type="checkbox"
                class="check_all"
              />
              <!-- 全选 -->
              <p>全选</p>
            </div>
            <!-- 删除选中商品 -->
            <div class="delete">
              <el-button type="danger" round @click="openDialogVisibleDelete"
                >删除</el-button
              >
            </div>
            <!-- 移入收藏夹 -->
            <div class="collect">
              <a href="#">移入收藏夹</a>
            </div>
          </div>
          <!-- 选中商品的件数 -->
          <div class="fix_right">
            <div class="select_num">
              已选商品&nbsp;<span>{{ selCount }}</span
              >&nbsp;件
            </div>
            <!-- 合计价格 -->
            <div class="add">
              合计（不含运费）：<span>{{ selPrice }}</span>
            </div>
            <!-- 结算按钮 没有商品被选中时 按钮禁用 -->
            <el-button
              v-if="this.selCartList?.length === 0"
              type="info"
              plain
              round
              disabled
              >结算</el-button
            >
            <!-- 结算按钮 如果有1件及以上商品被选中 则显示按钮 处理结算逻辑 -->
            <el-button v-else @click="settlement" type="success" plain round
              >结算</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <!-- v-else 当前购物车为空时显示的空购物车页面 -->
    <div v-else>
      <div class="wrapper">
        <div class="empty">
          <el-empty description="购物车空空如也~">
            <el-button @click="goShopping" type="success">去购物</el-button>
          </el-empty>
        </div>
      </div>
    </div>
    <Bottom class="bottom"></Bottom>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisibleDelete"
      width="30%"
      :before-close="handleClose"
    >
      <!-- 弹窗内容 -->
      <span>确定删除商品吗</span>
      <span slot="footer" class="dialog-footer">
        <!-- 取消按钮 -->
        <el-button @click="dialogVisibleDelete = false">取 消</el-button>
        <!-- 确定按钮 -->
        <el-button type="primary" @click="deleteSelectGoods">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
import CartItem from "./components/CartItem.vue";
export default {
  components: {
    CartItem,
  },
  data() {
    return {
      // 全选按钮默认全部选中
      allChecked: true,
      // 删除时跳出的弹窗
      dialogVisibleDelete: false,
      // 删除的对象
      delObj: {
        userId: 2,
        cartId: 0,
      },
    };
  },
  methods: {
    ...mapMutations("cart", [
      "setCartList",
      "changeSingleStatus",
      "syncChangeAllBoxesStatus",
      "getCartListAction",
    ]),
    ...mapActions("cart", [
      "getCartListAction",
      "addCartAction",
      "deleteCartByIdAction",
    ]),
    /* 
        调用vuex中的方法：改变小选框的状态 true/false
    */
    changeStatus(goodsId) {
      this.changeSingleStatus(goodsId);
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
        接收子组件传过来的对象，发起添加商品到购物车的请求，使得数据库中该商品加入购物车的数量+1
        减减操作暂时不写（后端有误）
    */
    changeInputNumberValue(obj) {
      // console.log(obj);
      if (obj.method === "add") {
        const addObj = {
          userId: obj.userId,
          goodsId: obj.goodsId,
        };
        this.addCartAction(addObj);
        // } else {
        //   const delObj = {
        //     userId: obj.userId,
        //     cartId: obj.cartId,
        //   };
        //   this.deleteCartByIdAction(delObj);
      }
    },

    /* 
      删除选中的商品
    */
    deleteSelectGoods() {
      // 遍历当前选中的商品列表，删除这个列表的每一件商品，关闭弹窗
      // const cartIds = [];
      this.selCartList.forEach((item) => {
        this.delObj.cartId = item.id;
        this.deleteCartByIdAction(this.delObj);
        this.dialogVisibleDelete = false;
      });
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
      购物车列表没有任何数据的时候，点击去购物，跳转到首页
    */
    goShopping() {
      this.$router.push("/");
    },

    /* 
      结算
    */
    settlement() {
      // 跳转到检查订单信息页面
      this.$router.push("/checkOrderInfo");
    },
  },
  computed: {
    // 获取vuex中用户信息
    ...mapState("user", ["userInfo"]),
    // 获取vuex中购物车列表数据
    ...mapState("cart", ["cartList"]),
    // 获取vuex中购物车的计算属性
    ...mapGetters("cart", [
      "isAllBoxesChecked",
      "selCount",
      "selCartList",
      "selPrice",
      "totalGoodsInCart",
    ]),
  },
  created() {
    /* 
      每次进入页面的时候，都调用同步设置所有小选框的状态方法
      使得所有全选框、所有小选框 全部选中
      每次进入页面都重新拉取一下购物车列表数据
    */
    this.syncChangeAllBoxesStatus(true);
    this.allChecked = this.isAllBoxesChecked;
    this.getCartListAction(this.userInfo.id);
    this.delObj.userId = this.userInfo.id;
  },
};
</script>

<style lang="less" scoped>
// search
.search {
  background-color: #fff;
  position: relative;
  width: 100%;
  height: 110px;
  // background-color: pink;
  .searchDiv {
    position: absolute;
    width: 375px;
    z-index: 999;
    left: 0;
    top: 48px;
    height: 200px;
    background-color: #fff;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.06);
    border-radius: 0 0 4px 4px;
    .search_item {
      width: 100%;
      height: 20%;
      font-size: 16px;
      padding-left: 10px;
      // border-block: 1px solid red;
      display: flex;
      align-items: center;
    }
    .search_item:hover {
      background-color: #f5f5f5;
    }
  }
  .wrapper {
    display: flex;
    height: 110px;
    .left {
      width: 300px;
      // background-color: skyblue;
      font-size: 40px;
      font-weight: 700;
      color: #4ab344;
      text-align: center;
      line-height: 110px;
    }
    .middle {
      position: relative;
      flex: 1;
      // background-color: pink;
      .inpBtn {
        position: absolute;
        display: flex;
        width: 375px;
        height: 40px;
        border: 1px solid #4ab344;

        background-color: #4ab344;
        justify-content: center;
        left: 190px;
        top: 32px;
        //使用 >>>
        // .el-input >>> .el-input__inner {
        //   background-color: rgba(255, 255, 255, 0.247);
        // }
        //使用 /deep/
        // .el-input /deep/ .el-input__inner {
        //   width: 290px;
        //   height: 37.5px;
        // }
        // /deep/.el-input__inner:focus {
        //   border-color: #4ab344;
        // }
        // /deep/ .el-button--success {
        //   width: 100px;
        //   background-color: #4ab344;
        // }
        input {
          width: 80%;
          height: 100%;
          background-color: #fff;
          border: 1px solid #4ab344;
          font-size: 18px;
          padding-left: 10px;
        }

        button {
          width: 20%;
          height: 100%;
          background-color: #4ab344;
          border: 2px solid #4ab344;
          color: #fff;
        }
      }
    }
    .right {
      width: 240px;
      // background-color: #595959;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .num {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 110px;
        .p1 {
          color: #4ab344;
          font-size: 24px;
          font-weight: 700;
        }
        .p2 {
          color: #595959;
        }
      }
    }
  }
}
.content {
  margin-top: 30px;
  .wrapper {
    background-color: #fff;
    transform: translate(0, 0);
    .header {
      width: 100%;
      height: 80px;
      // background-color: pink;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e6e6e6;
      justify-content: space-between;
      .header_left {
        width: 30%;
        height: 100%;
        // background-color: mediumaquamarine;
        display: flex;
        align-items: center;
        padding-left: 2%;
        .cartAll {
          font-size: 18px;
          font-weight: 600;
        }
      }
      .header_right {
        width: 33%;
        height: 100%;
        // background-color: navajowhite;
        display: flex;
        align-items: center;
        justify-content: end;
        padding-right: 2%;
        .select_price,
        .btn_settlement {
          margin-left: 3%;
        }
        .btn_settlement:hover {
          background-color: #4ab344;
        }
        .select_price {
          font-size: 25px;
          color: #e0130c;
          font-weight: bold;
          margin-right: 30px;
        }
        .btn_settlement {
          width: 22%;
          height: 57%;
          background-color: #aaa;
          border: 1px solid #aaa;
          border-radius: 25px;
          color: #fff;
          transition: all 0.4s ease;
          // 没勾选状态时是禁用，有商品勾选时就开启
        }
      }
    }
    .form {
      width: 100%;
      thead {
        width: 100%;
        height: 60px;
        tr {
          width: 100%;
          th {
            font-size: 17px;
            height: 100%;
            text-align: left;
          }
          .th_1 {
            width: 12%;
            // background-color: magenta;
            div {
              width: 100%;
              height: 100%;
              display: flex;
              // justify-content: center;
              padding-left: 20px;
              align-items: center;
              font-size: 17px;
            }
            .check_all {
              width: 20px;
              height: 20px;
              margin-right: 10px;
            }
          }
          .th_2 {
            width: 46%;
            // background-color: navajowhite;
          }
          .th_3 {
            width: 12%;
            height: 100%;
            // background-color: darkcyan;
          }
          .th_4 {
            width: 15%;
            height: 100%;
            // background-color: sandybrown;
          }
          .th_5 {
            width: 15%;
            height: 100%;
          }
        }
      }
      tbody {
        width: 100%;
      }
    }
    .every {
      margin-bottom: 15px;
      width: 100%;
      div {
        // background-color: #f0f9eb;
        background-color: #eee;
        border-radius: 15px;
        margin-top: 1%;
        width: 98%;
        margin-left: 1%;
      }
    }
    .fix {
      position: sticky;
      left: 0;
      bottom: 0;
      right: 0;
      height: 90px;
      // background-color: pink;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      .fix_left {
        width: 30%;
        height: 100%;
        // background-color: aquamarine;
        display: flex;
        .select_all {
          width: 25%;
          height: 100%;
          // background-color: palevioletred;
          display: flex;
          justify-content: center;
          align-items: center;
          input {
            width: 20px;
            height: 20px;
            margin-right: 5px;
          }
        }
        .delete,
        .collect {
          width: 25%;
          height: 100%;
          // background-color: navajowhite;
          display: flex;
          justify-content: center;
          align-items: center;
          a:hover {
            color: #4ab344;
          }
        }
      }
      .fix_right {
        width: 45%;
        height: 100%;
        // background-color: mediumslateblue;
        display: flex;
        align-items: center;
        .select_num {
          width: 30%;
          height: 100%;
          // background-color: fuchsia;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            font-size: 22px;
            font-weight: bold;
            color: #e0130c;
          }
        }
        .add {
          width: 50%;
          height: 100%;
          // background-color: yellowgreen;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            font-size: 22px;
            font-weight: bold;
            color: #e0130c;
          }
        }
        .btn_settlement {
          width: 14%;
          height: 52%;
          background-color: #aaa;
          border: 1px solid #aaa;
          border-radius: 25px;
          color: #fff;
          margin-left: 15px;
        }
      }
    }
  }
}

.empty {
  width: 100%;
  height: 600px;
  // background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom {
  margin-top: 20px;
}
</style>
