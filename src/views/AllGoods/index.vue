<template>
  <div>
    <!-- 顶部图片 无机酸铁 专利保护 -->
    <div class="topPic">
      <img src="@/assets/allgoods.jpg" alt="" />
    </div>
    <div class="wrapper">
      <!-- 幻灯片 -->
      <div class="sellected">
        幻灯片：
        <i class="el-icon-video-camera-solid cursor"></i>
      </div>
      <!-- 条件选择区域-->
      <div class="condition">
        <!-- 价格 -->
        <!-- 当价格区间被选中时添加selectItem类名 -->
        <div class="price">
          价格：
          <span
            v-for="(item, index) in priceList"
            :key="index"
            @click="selectPrice(index)"
            :class="{ selectItem: activePriceIndex === index }"
            class="cursor"
          >
            {{ item }}
          </span>
        </div>
        <!-- 保健品分类 -->
        <div class="cate">
          分类：
          <span
            v-for="(item, index) in cateList"
            :key="index"
            @click="selectCate(index)"
            :class="{ selectItem: activeCateIndex === index }"
            class="cursor"
          >
            {{ item }}
          </span>
        </div>
        <!-- 功效分类 -->
        <div class="effect">
          功效：
          <span
            v-for="(item, index) in effectList"
            :key="index"
            @click="selectEffect(index)"
            :class="{ selectItem: activeEffectIndex === index }"
            class="cursor"
          >
            {{ item }}
          </span>
        </div>
        <!-- 产地分类 -->
        <div class="place">
          产地：
          <span
            v-for="(item, index) in placeList"
            :key="index"
            @click="selectPlace(index)"
            :class="{ selectItem: activePlaceIndex === index }"
            class="cursor"
          >
            {{ item }}
          </span>
        </div>
      </div>
      <!-- 排序区域 -->
      <div class="order">
        <el-dropdown
          v-for="(item, index) in orderList"
          :key="index"
          class="cursor"
        >
          <!-- 下箭头字体图标 -->
          <span class="el-dropdown-link">
            {{ item.name }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <!-- 下拉框
              遍历orderList的每一个元素，遍历其child属性，
              生成下拉框的选项
           -->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(item2, index2) in item.child"
              :key="index2"
              @click.native="defineSortMethod(item2.En)"
              >{{ item2.Ch }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
        <!-- 两个输入框可以输入价格区间 -->
        <span class="input">
          <!-- 输入框1 价格的最小值 -->
          <input
            class="cursor"
            v-model="minPrice"
            type="text"
            placeholder="￥"
          />&nbsp;--&nbsp;
          <!-- 输入框2 价格的最大值 -->
          <input
            v-model="maxPrice"
            type="text"
            placeholder="￥"
            class="cursor"
          />
          <!-- 点击确定按钮，根据输入的最小值和最大值，查询商品列表 -->
          <button @click="priceQuery" class="cursor">确定</button>
        </span>
        <!-- 根据查询条件查询商品 -->
        <button class="btn_startQuery cursor" @click="getGoodsList()">
          开始查询
        </button>
        <!-- 点击清空查询条件 -->
        <button class="btn_clearQuery cursor" @click="clearQuery()">
          清空查询条件
        </button>
      </div>
      <!-- 商品展示区域 -->
      <div class="showGoods">
        <!-- 当nowGoodsList长度不为0时显示商品列表，否则显示空页面 -->
        <template v-if="nowGoodsList.length">
          <div
            class="showGoods_item"
            v-for="(item, index) in nowGoodsList"
            :key="index"
          >
            <GoodsItemAddBuy
              @gotoDetail="handleNavigation"
              :goods="item"
            ></GoodsItemAddBuy>
          </div>
        </template>
        <!-- 当nowGoodsList长度为0时显示空页面 -->
        <div v-else>
          <el-empty
            description="根据条件未查询到商品信息!"
            style="margin-left: 500px"
          ></el-empty>
        </div>
      </div>
      <!-- 分页 -->
      <div class="page">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPageNo"
          :page-sizes="[4, 8, 12]"
          :page-size="currentPageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalData"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoodsListAPI } from "@/apis/goods.js";
export default {
  data() {
    return {
      loading: false,
      // 价格分类数组
      priceList: ["0-199", "200-399", "400-799", "800-999", "1000-1599"],
      // 保健品分类数组
      cateList: ["OTC药", "女生保健", "男生保健", "儿童保健"],
      // 功效分类数组
      effectList: [
        "调经促孕",
        "促进食欲",
        "美白祛斑",
        "平衡营养",
        "男人保健",
        "补肾壮阳",
      ],
      // 产地分类数组
      placeList: ["宁波", "上海", "北京", "深圳", "广州", "佛山", "云南"],
      // 排序条件数组
      orderList: [
        {
          name: "名称",
          child: [
            {
              En: "nameAsc",
              Ch: "首字母A-Z",
            },
            {
              En: "nameDesc",
              Ch: "首字母Z-A",
            },
          ],
        },
        {
          name: "价格",
          child: [
            {
              En: "priceAsc",
              Ch: "从低到高",
            },
            {
              En: "priceDesc",
              Ch: "从高到低",
            },
          ],
        },
        {
          name: "上架时间",
          child: [
            {
              En: "storageDateAsc",
              Ch: "从远到近",
            },
            {
              En: "storageDateDesc",
              Ch: "从近到远",
            },
          ],
        },
        {
          name: "销量",
          child: [
            {
              En: "saleAsc",
              Ch: "从少到多",
            },
            {
              En: "saleDesc",
              Ch: "从多到少",
            },
          ],
        },
      ],
      currentIndex: null,
      isShowIcon: false,
      activeIndex: -1,
      iShow: true,
      // 选中的价格区间索引
      activePriceIndex: -1,
      // 选中的产地索引
      activePlaceIndex: -1,
      // 选中的保健品分类索引
      activeCateIndex: -1,
      // 选中的功效索引
      activeEffectIndex: -1,
      // 发请求时需要传入的对象
      conditionObj: {
        name: "",
        parentType: "",
        subType: "",
        efficacy: "",
        yieldly: "",
        fromPrice: "",
        toPrice: "",
        sort: "", // Asc升序 Desc降序
        pageSize: 4,
        pageNo: 1,
      },
      nowGoodsList: [],
      minPrice: "",
      maxPrice: "",
      totalData: 0, // 数据总条数
      totalPage: "", // 页数总数
      currentPageNo: 0, // 现在是第几页
      currentPageSize: 0, // 现在一页展示几条数据
    };
  },
  methods: {
    // 选择保健品分类
    selectCate(index) {
      if (this.activeCateIndex === index) {
        this.activeCateIndex = -1;
        this.conditionObj.parentType = "";
      } else {
        this.activeCateIndex = index;
        this.conditionObj.parentType = this.cateList[index];
      }
    },
    // 选择功效
    selectEffect(index) {
      if (this.activeEffectIndex === index) {
        this.activeEffectIndex = -1;
        this.conditionObj.efficacy = "";
      } else {
        this.activeEffectIndex = index;
        this.conditionObj.efficacy = this.effectList[index];
      }
    },
    // 选择价格
    selectPrice(index) {
      // 如果已经选中
      if (this.activePriceIndex === index) {
        this.activePriceIndex = -1;
        this.conditionObj.fromPrice = "";
        this.conditionObj.toPrice = "";
      } else {
        // 如果还未选中，鼠标点击后选中
        // 将选中项的index赋值为 activePriceIndex
        this.activePriceIndex = index;
        // 将选中项的价格区间字符串赋值为变量completelyPrice
        const completelyPrice = this.priceList[index];
        // 通过split方法将价格区间字符串分割为数组
        const splitPrice = completelyPrice.split("-");
        // 得到价格区间
        const fromPrice = splitPrice[0];
        const toPrice = splitPrice[1];
        // 将价格区间赋值给请求时的条件对象
        this.conditionObj.fromPrice = fromPrice;
        this.conditionObj.toPrice = toPrice;
      }
    },
    // 选择产地
    selectPlace(index) {
      if (this.activePlaceIndex === index) {
        this.activePlaceIndex = -1;
        this.conditionObj.yieldly = "";
      } else {
        this.activePlaceIndex = index;
        this.conditionObj.yieldly = this.placeList[index];
      }
    },
    // 根据条件查询商品
    async getGoodsList() {
      this.loading = true;
      const { data: res, code } = await getGoodsListAPI(this.conditionObj);
      if (code === "H0000") {
        this.nowGoodsList = res.list;
        this.totalData = res.total;
        this.totalPage = res.pages;
        this.currentPageNo = res.pageNo;
        this.currentPageSize = res.pageSize;
      } else {
        this.nowGoodsList = [];
      }
      this.loading = false;
    },
    // 点击商品进行路由跳转
    handleNavigation(id) {
      // 处理接收到的参数
      // 在这里可以进行相应的处理，如更新父组件的数据等
      this.$router.push({ path: "goodsDetail", query: { goods_id: id } });
    },
    // 根据价格区间查询商品
    priceQuery() {
      this.conditionObj.fromPrice = this.minPrice;
      this.conditionObj.toPrice = this.maxPrice;
      this.getGoodsList(this.conditionObj);
    },
    // 定义排序方法
    defineSortMethod(method) {
      // 将排序方法赋值给请求时的条件对象
      this.conditionObj.sort = method;
      // 发请求获取数据列表
      this.getGoodsList(this.conditionObj);
    },
    // 清空查询条件
    clearQuery() {
      this.activeCateIndex = -1;
      this.activeEffectIndex = -1;
      this.activeIndex = -1;
      this.activePlaceIndex = -1;
      this.activePriceIndex = -1;
      this.minPrice = "";
      this.maxPrice = "";
      this.conditionObj = {};
      this.conditionObj.pageSize = 4;
      this.getGoodsList();
    },
    // 修改每页几条
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
      this.currentPageSize = val;
      this.conditionObj.pageSize = val;
      this.getGoodsList();
    },
    // 当前是第几页
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.currentPageNo = val;
      this.conditionObj.pageNo = val;
      this.getGoodsList();
    },
  },
  created() {
    // 首次加载页面时展示所有商品
    this.getGoodsList();
  },
};
</script>

<style lang="less" scoped>
.activeSpan {
  background-color: #f0f9eb;
}
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
  // height: 3000px;
  // background-color: #fff;
  .sellected,
  .order {
    width: 100%;
    height: 50px;
    // background-color: skyblue;
    background-color: #f5f5f5;
    padding-left: 30px;
    display: flex;
    align-items: center;
    font-size: 18px;
    .el-icon-video-camera-solid {
      font-size: 30px;
      color: #4ab344;
    }
  }
  .sellected {
    border-top: 3px solid #dfdfdf;
    margin-top: 20px;
    background-color: #fff;
  }
  .condition {
    width: 100%;
    height: 210px;
    background-color: #fff;
    // background-color: palegoldenrod;
    .price,
    .cate,
    .effect,
    .place {
      width: 100%;
      height: 50px;
      border-bottom: 1px dashed #f0f9eb;
      display: flex;
      align-items: center;
      padding-left: 40px;
      span {
        width: 100px;
        height: 100%;
        // background-color: lavender;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 40px;
        transition: all 0.4s ease;
      }
      span:hover {
        background-color: #4ab344;
        color: #fff;
        font-weight: bold;
        border: 1px solid #4ab344;
        border-radius: 20px;
      }
      .selectItem {
        background-color: #4ab344;
        color: #fff;
        font-weight: bold;
        border: 1px solid #4ab344;
        border-radius: 20px;
      }
    }
  }
  .order {
    padding-left: 0;
    background-color: #fff;
    .el-dropdown {
      // background-color: pink;
    }
    span {
      //   display: inline-block;
      margin-left: 10px;
      margin-right: 10px;
      padding-left: 25px;
      padding-right: 25px;
      height: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      //   background-color: lavenderblush;
      //   i {
      //     padding-left: 10px;
      //   }
      input {
        width: 80px;
        height: 80%;
        padding-left: 10px;
        border: 1px solid #4ab344;
        border-radius: 10px;
      }
      button {
        border-radius: 10px;
        width: 60px;
        height: 80%;
        margin-left: 10px;
        background-color: #f0f9eb;
        color: #4ab344;
        border: 1px solid #4ab344;
        transition: all 0.4s ease;
      }
      button:hover {
        background-color: #4ab344;
        color: #fff;
      }
      div {
        width: 20%;
        height: 80%;
        // background-color: lavender;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        margin-left: 10px;
        i {
          font-size: 18px;
          // color: orange;
          padding-top: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .first {
      margin-left: 0px;
    }
    .btn_startQuery,
    .btn_clearQuery {
      width: 180px;
      height: 80%;
      background-color: #f0f9eb;
      color: #4ab344;
      border: 1px solid #4ab344;
      margin-top: 150px;
      // margin-left: 0px;
      font-size: 18px;
      border-radius: 12px;
      transition: all 0.4s ease;
      // border-radius: 15px;
      // box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.06);
    }
    .btn_clearQuery {
      margin-left: 20px;
    }
    .btn_startQuery:hover {
      background-color: #4ab344;
      color: #fff;
    }
    .btn_clearQuery:hover {
      background-color: #4ab344;
      color: #fff;
    }
  }
  .showGoods {
    width: 100%;
    // height: 1800px;
    // background-color: pink;
    background-color: #fff;
    margin-bottom: 30px;
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    .showGoods_item {
      width: 23%;
      height: 400px;
      background-color: #fff;
      margin-top: 20px;
      margin-left: 1.5%;
    }
  }
  .page {
    width: 100%;
    height: 100px;
    // background-color: pink;
    // background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.orange {
  color: orange;
}
.green {
  color: #4ab344;
}
.no {
  background-color: #fff;
}
</style>
