<template>
  <div>
    <div class="wrapper">
      <!-- 标题：特价产品 热销排行 当季 
           
      -->
      <div class="title">
        <!-- 鼠标移入触发showBody方法 重新发请求渲染数据 -->
        <div
          :class="[
            activeIndex == index ? 'title_item_active' : '',
            'title_item',
          ]"
          v-for="(item, index) in title_list"
          :key="index"
          @mouseover="showBody(index)"
        >
          <div class="p cursor">{{ item.title }}</div>
        </div>
        <div class="solid1"></div>
        <div class="solid2"></div>
      </div>
      <!-- body区域 -->
      <div class="body">
        <div
          class="body_item"
          v-for="(item2, index2) in option_list"
          :key="index2"
        >
        <!-- v-for 四个商品渲染 点击跳转到商品详情-->
          <GoodsItemAddBuy
            @gotoDetail="handleNavigation"
            :goods="item2"
          ></GoodsItemAddBuy>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 根据父级分类获取商品列表
import { getGoodsByParentType } from "@/apis/goods";
export default {
  data() {
    return {
      // 标题数组
      title_list: [
        { id: 0, title: "特价产品", child: "特价产品" },
        { id: 1, title: "热销排行", child: "热销排行" },
        { id: 2, title: "当季", child: "当季" },
      ],
      option_list: [],
      // 当前选中的父级分类的索引
      activeIndex: 0,
      parentType: "特价产品",
    };
  },
  methods: {
    showBody(index) {
      // 将activeIndex赋值为鼠标移入的父级分类的索引
      this.activeIndex = index;
      this.parentType = this.title_list[index].title;
      // console.log(this.parentType);
      this.getGoodsByParentTypeM(this.parentType);
    },
    async getGoodsByParentTypeM() {
      const { data: res } = await getGoodsByParentType(this.parentType);
      // 数组里面包对象
      // console.log('==========option axios=============')
      // console.log(res)
      this.option_list = res;
    },
    handleNavigation(id) {
      // 处理接收到的参数
      this.$router.push({ path: "goodsDetail", query: { goods_id: id } });
      // console.log('option' + id)
      // this.$router.push('cart')
    },
  },
  watch: {},
  created() {
    this.getGoodsByParentTypeM("特价产品");
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  // height: 435px;
  height: 100%;
  // background-color: pink;
  // height: 100%;
  .title {
    position: relative;
    width: 100%;
    height: 80px;
    // background-color: skyblue;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .title_item {
      margin-left: 20px;
      padding-bottom: 15px;
      padding-left: 10px;
      padding-right: 10px;
      display: flex;
      align-content: center;
      // background-color: #fff;
      justify-content: center;
      .p {
        margin-top: 15px;
        font-size: 16px;
        // color: #9b9b9b;
        color: #4ab344;
        font-weight: bold;
      }
    }
    // 父级分类的下划线
    .title_item_active {
      border-bottom: 1.5px solid #4ab344;
      color: #4ab344;
    }
    .solid1 {
      position: absolute;
      width: 2px;
      height: 20px;
      background-color: #666;
      left: 115px;
      top: 30px;
    }
    .solid2 {
      position: absolute;
      width: 2px;
      height: 20px;
      background-color: #666;
      left: 219px;
      top: 30px;
    }
  }
  .body {
    width: 100%;
    height: 428px;
    // background-color: seagreen;
    display: flex;
    .body_item {
      width: 24%;
      margin-left: 1%;
      height: 100%;
      // background-color: lightcoral;
    }
  }
}
// .pro_list {
//   display: flex;
//   width: 100%;
//   height: 430px;
//   margin-top: 10px;
//   // background-color: #4ab344;
// }
// .product {
//   width: 25%;
//   height: 430px;
//   // background-color: orchid;
//   background-color: #fff;
//   border: 1px solid #ededed;
// }
//
</style>
