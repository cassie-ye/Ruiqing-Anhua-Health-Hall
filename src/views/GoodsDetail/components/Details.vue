<template>
  <div class="wrapper">
    <!-- 标题 产品详情 -->
    <div class="title">
      <!-- 伪元素 -->
      <div class="wei"></div>
      产品详情
    </div>
    <!-- 商品主内容 -->
    <div class="goods_main">
      <!-- 左边 商品图片-->
      <div class="left">
        <img :src="goods_content.img" alt="" />
      </div>
      <!-- 右边 -->
      <div class="right">
        <!-- 商品名称 -->
        <div class="title">
          <p>{{ goods_content.name }}</p>
        </div>
        <!-- 商品价格 -->
        <div class="price">
          价格：
          <!-- 现价 -->
          <span class="newPrice"
            >￥{{ goods_content.disPrice?.toFixed(2) }}</span
          >
          <!-- 原价 -->
          <span class="oldPrice"
            >￥{{ goods_content.orPrice?.toFixed(2) }}</span
          >
        </div>
        <!-- 优惠 -->
        <div class="preferential">
          <div class="p_left">优惠：</div>
          <div class="p_right">
            <!-- 200元优惠券，满1500可用 -->
            <div class="top">
              <span class="el-tag el-tag--success el-tag--small el-tag--plain"
                >领券</span
              >200元优惠券，满1500可用
            </div>
            <!-- 100元优惠券，满800可用 -->
            <div class="bottom">
              <span class="el-tag el-tag--success el-tag--small el-tag--plain"
                >领券</span
              >100元优惠券，满800可用
              <!-- 超链接 更多 -->
              <a href="#">更多 </a>
            </div>
          </div>
        </div>
        <!-- 销量与评论 -->
        <div class="sales">
          <!-- 销量 -->
          <div class="salesVolume">销量：300</div>
          <div class="wei"></div>
          <!-- 评论 -->
          <div class="comment">评论：0条</div>
        </div>
        <!-- 购买数量与库存量 -->
        <div class="count">
          购买数量：
          <!-- 数量计数器 -->
          <el-input-number
            size="small"
            style="width: 80px"
            v-model="num"
            controls-position="right"
            @change="handleChange"
            :min="1"
            :max="100"
          ></el-input-number>
          <!-- 库存量 -->
          <div class="operation">库存量：{{ goods_content.stock }}</div>
        </div>
        <!-- 按钮组 -->
        <div class="buttonGroup">
          <!-- 加入购物车按钮 -->
          <el-button
            @click="addCartOrLogin"
            style="
              width: 160px;
              height: 40px;
              padding-top: 8px;
              background-color: #fff;
              color: #4ab344;
              margin-right: 20px;
            "
            type="success"
            plain
          >
            <i class="el-icon-shopping-cart-2"></i>
            加入购物车</el-button
          >
          <!-- 如果没有登陆，引导用户去登录的弹窗 -->
          <el-dialog
            title="提示"
            :visible.sync="dialogVisibleToLogin"
            width="30%"
            :before-close="handleClose"
          >
            <!-- 弹窗内容 -->
            <span>抱歉，您还没有登录，请先登录！</span>
            <span slot="footer" class="dialog-footer">
              <!-- 取消按钮 -->
              <el-button @click="dialogVisibleToLogin = false">取 消</el-button>
              <!-- 确定按钮 -->
              <el-button type="primary" @click="gotoLogin">确 定</el-button>
            </span>
          </el-dialog>
          <!-- 立即购买按钮 -->
          <el-button
            style="
              width: 160px;
              height: 40px;
              padding-top: 15px;
              background-color: #4ab344;
            "
            type="success"
            >立即购买</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入请求方法：根据商品Id得到商品详情
import { getGoodsByIdAPI } from "@/apis/goods";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      // 商品详情的对象
      goods_content: {},
      //  计数器的v-model
      num: 1,
      // 抱歉，请先登录 弹框的显示标识
      dialogVisibleToLogin: false,
      // 要加入购物车的对象
      addToCartObj: {
        goodsId: "",
        userId: "",
      },
    };
  },
  methods: {
    ...mapActions("cart", ["addCartAction"]),
    // 调用接口 通过商品Id获取商品详情
    async getGoodsById(id) {
      const { data: res } = await getGoodsByIdAPI(id);
      // 给当前商品对象信息赋值
      this.goods_content = res[0];
    },
    // 点击计数器加减按钮时，会打印数量
    handleChange(e) {
      // console.log(e);
    },
    // 点击加入购物车按钮
    addCartOrLogin() {
      // TODO：如果已经登录，加入商品到购物车
      if (this.token) {
        // 调用vuex中添加商品到购物车的方法
        this.addCartAction(this.addToCartObj);
      } else {
        // TODO：如果没有登陆，引导用户去登录的弹窗
        // 开启 抱歉，请先登录的弹框
        this.dialogVisibleToLogin = true;
      }
    },
    // 点击弹框的叉叉或者弹框外部区域，弹框关闭
    handleClose() {
      this.dialogVisibleToLogin = false;
    },
    // 点击抱歉，请先登录  的确定按钮 路由跳转到登录页面
    gotoLogin() {
      this.$router.push("/login");
    },
  },
  computed: {
    /* 
      获取vuex中存储的user信息和token信息
      token用来判断用户是否登录以及v-if和v-else切换导航栏内容
      userInfo用来获取用户信息，在token存在情况下的导航栏展示用户名和头像
    */
    ...mapState("user", ["userInfo", "token"]),
  },
  created() {
    // 获取路由上的goods_id参数并且发起请求
    this.getGoodsById(this.$route.query.goods_id);
    // 设置加入购物车对象的属性的值
    this.addToCartObj.goodsId = this.$route.query.goods_id;
    this.addToCartObj.userId = this.userInfo.id;
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  background-color: #fff;
  // height: 1100px;
  margin-bottom: 40px;
  // background-color: wheat;
  .title {
    width: 100%;
    height: 53px;
    // background-color: lavender;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #4ab344;
    .wei {
      width: 6px;
      height: 40%;
      background-color: #4ab344;
      margin-right: 10px;
      margin-left: 10px;
    }
  }
  .goods_main {
    margin-top: 40px;
    padding-left: 20px;
    width: 100%;
    height: 500px;
    // background-color: pink;
    background-color: #fff;
    display: flex;
    .left {
      width: 39%;
      height: 80%;
      border: 1px solid #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 85%;
        height: 85%;
      }
    }
    .right {
      width: 45%;
      height: 100%;
      // background-color: palegreen;
      margin-left: 6%;
      .title {
        // padding-left: 28px;
        margin-left: 30px;

        width: 100%;
        height: 50px;
        // background-color: salmon;
        border-bottom: 1px solid #fff;
        p {
          font-size: 22px;
          color: #585858;
        }
      }
      .price {
        width: 100%;
        height: 70px;
        // background-color: lightblue;
        font-size: 15px;
        display: flex;
        align-items: center;
        padding-left: 30px;
        padding-top: 10px;
        color: #585858;
        .newPrice {
          font-size: 35px;
          font-weight: bold;
          color: #4ab344;
          padding-right: 10px;
        }
        .oldPrice {
          color: #b7a8a7;
          text-decoration: line-through;
          margin-top: 10px;
        }
      }
      .preferential {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #eee;
        .p_left {
          width: 9%;
          height: 70px;
          // background-color: aliceblue;
          color: #585858;
          font-size: 15px;
          // margin-left: 30px;
        }
        .p_right {
          width: 80%;
          height: 70px;
          // background-color: lightcoral;
          .top,
          .bottom {
            font-size: 12px;
            color: #585858;
            a {
              font-size: 13px;
              color: #4ab344;
              text-decoration: underline;
              padding-left: 10px;
            }
            span {
              margin-right: 5px;
            }
          }
          .top {
            margin-bottom: 5px;
          }
        }
      }
      .sales {
        width: 100%;
        height: 80px;
        // background-color: sandybrown;
        border-bottom: 1px solid #eee;
        align-items: center;
        justify-content: center;
        display: flex;
        .salesVolume {
          width: 30%;
          height: 100%;
          // background-color: rosybrown;
          display: flex;
          font-size: 15px;
          color: #585858;
          align-items: center;
          justify-content: center;
        }
        .wei {
          width: 2px;
          height: 25px;
          // background-color: #ccc;
        }
        .comment {
          width: 59%;
          height: 100%;
          // background-color: #fff;
          display: flex;
          font-size: 15px;
          color: #585858;
          align-items: center;
          // justify-content: center;
          padding-left: 50px;
        }
      }
      .count {
        width: 100%;
        height: 100px;
        // background-color: cornflowerblue;
        display: flex;
        align-items: center;
        margin-left: 30px;
        // padding-left: 30px;
        font-size: 14px;
        color: #585858;
        .operation {
          font-size: 14px;
          padding-left: 10px;
          color: #585858;
        }
      }
      .buttonGroup {
        width: 100%;
        height: 80px;
        // background-color: lightpink;
        display: flex;
        // justify-content: center;
        margin-left: 30px;
        align-items: center;
        .el-icon-shopping-cart-2 {
          font-size: 20px;
        }
        el-button {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>