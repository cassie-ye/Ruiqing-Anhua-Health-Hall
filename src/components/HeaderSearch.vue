<template>
  <div class="all">
    <div class="wrapper">
      <!-- logo -->
      <div @click="gotoHome" class="name">瑞清安华养生堂</div>
      <!-- 搜索框 -->
      <div class="search">
        <!-- 输入框 -->
        <el-select
          v-model="value"
          filterable
          remote
          reserve-keyword
          placeholder="请输入关键词"
          :remote-method="remoteMethod"
          :loading="loading"
          @change="gotoGoodsDetail($event)"
        >
          <!-- 下拉框 -->
          <el-option
            v-for="(item, index) in options"
            :key="index"
            :value="item.name"
          >
          </el-option>
        </el-select>
        <!-- 搜索按钮 -->
        <div class="btn">
          <el-button type="success">搜 索</el-button>
        </div>
      </div>
      <!-- 联系信息 -->
      <div class="relation">
        <div class="relation_left">
          <img src="@/assets/phone.png" alt="" />
        </div>
        <div class="relation_right">
          <p>020-0000000</p>
          <span>9:00-18:00</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getGoodsListAPI } from "@/apis/goods";
export default {
  data() {
    return {
      // 搜索后得到的搜索结果数组
      options: [],
      // 输入框绑定的v-model
      value: [],
      loading: false,
      // 发请求时的data参数
      searchObj: {
        name: "",
        parentType: "",
        subType: "",
        efficacy: "",
        yieldly: "",
        pageNo: 1,
        sort: "",
        pageSize: 4,
      }
    };
  },
  mounted() {},
  methods: {
    // 点击Logo跳转到首页
    gotoHome() {
      this.$router.push("/");
    },
    // 根据搜索关键词获取商品列表 发请求
    async getGoodsList(obj) {
      const { data: res } = await getGoodsListAPI(obj);
      // console.log(res);
      this.options = res.list;
    },
    // 远程搜索方法
    remoteMethod(query) {
      // 输入框输入的值 query
      // console.log(query);
      // 如果输入的值不为空,那么赋值调接口
      if (query !== "") {
        this.searchObj.name = query;
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.getGoodsList(this.searchObj);
        }, 200);
        // 否则清空数组
      } else {
        this.options = [];
      }
    },
    // 点击搜索框的item携带goodsId跳转到商品详情页
    gotoGoodsDetail(goodsName) {
      // 根据商品名称得到商品Id
      const item = this.options.find((item) => item.name === goodsName);
      // 路由跳转
      this.$router.push({
        path: "goodsDetail",
        query: { goods_id: item.goodsId },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.all {
  width: 100%;
  background-color: #fff;
  .wrapper {
    height: 110px;
    // background-color: pink;
    display: flex;
    .name {
      width: 25%;
      height: 100%;
      // background-color: palegoldenrod;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 42px;
      font-weight: bolder;
      color: #4ab344;
    }
    .search {
      width: 35%;
      height: 100%;
      //   background-color: orchid;
      margin-left: 12%;
      display: flex;
      justify-content: center;
      align-items: center;
      .btn {
        background-color: #4ab344;
        height: 45px;
        /deep/ .el-button--success {
          width: 100%;
          height: 100%;
          background-color: #4ab344;
          span {
            font-size: 16px;
          }
        }
      }
      /deep/ .el-select {
        background-color: #4ab344;
        width: 80%;
        height: 45px;
      }
      /deep/ .el-select input {
        width: 100%;
        height: 45px;
        border: 2px solid #4ab344;
      }
      /deep/ .el-select .el-input.is-focus .el-input__inner {
        border-color: #4ab344;
      }
    }
    .relation {
      width: 20%;
      height: 100%;
      //   background-color: orchid;
      //   margin-left: 12%;
      margin-left: 8%;
      display: flex;
      justify-content: center;
      align-items: center;
      .relation_right {
        margin-left: 10px;
        width: 70%;
        height: 100%;
        // background-color: sandybrown;
        display: flex;
        justify-content: center;
        flex-direction: column;
        p {
          font-size: 25px;
          font-weight: bold;
          color: #4ab344;
        }
        span {
          color: #636363;
        }
      }
    }
  }
}
</style>
