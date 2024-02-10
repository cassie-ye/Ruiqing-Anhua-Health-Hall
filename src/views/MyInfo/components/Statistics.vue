<template>
  <div class="tongji">
    <el-row :gutter="20">
      <el-col :span="6">
        <div>
          <el-statistic group-separator="," :precision="2" :title="titleList[0]"
            ><template slot="formatter">
              {{ cartList?.length || 0 }}
            </template></el-statistic
          >
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <el-statistic :title="titleList[1]">
            <template slot="formatter"> {{ orderList?.length || 0 }}</template>
          </el-statistic>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <el-statistic
            group-separator=","
            :precision="2"
            decimal-separator="."
            :value="value1"
            :title="titleList[2]"
          >
            <template slot="prefix">
              <i class="el-icon-s-flag" style="color: red"></i>
            </template>
            <template slot="formatter"> {{ orderList?.length || 0 }}</template>
            <template slot="suffix">
              <i class="el-icon-s-flag" style="color: blue"></i>
            </template>
          </el-statistic>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <el-statistic :value="like ? 521 : 520" :title="titleList[3]">
            <template slot="formatter"> {{ userInfo.balance }}</template>
            <template slot="suffix">
              <span @click="like = !like" class="like">
                <i
                  class="el-icon-star-on"
                  style="color: red"
                  v-show="!!like"
                ></i>
                <i class="el-icon-star-off" v-show="!like"></i>
              </span>
            </template>
          </el-statistic>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <el-statistic :value="like ? 521 : 520" :title="titleList[4]">
            <template slot="formatter"> 2</template>
            <template slot="suffix">
              <span @click="like = !like" class="like">
                <i
                  class="el-icon-star-on"
                  style="color: red"
                  v-show="!!like"
                ></i>
                <i class="el-icon-star-off" v-show="!like"></i>
              </span>
            </template>
          </el-statistic>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <el-statistic :value="like ? 521 : 520" :title="titleList[5]">
            <template slot="formatter"> — —</template>
            <template slot="suffix">
              <span @click="like = !like" class="like">
                <i
                  class="el-icon-star-on"
                  style="color: red"
                  v-show="!!like"
                ></i>
                <i class="el-icon-star-off" v-show="!like"></i>
              </span>
            </template>
          </el-statistic>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      like: true,
      value1: 4154.564,
      value2: 1314,
      titleList: [
        "购物车",
        "已买到的宝贝",
        "待收货",
        "账户余额",
        "优惠券",
        "88会员",
      ],
    };
  },
  computed: {
    ...mapState("cart", ["cartList"]),
    ...mapState("order", ["orderList"]),
    ...mapState("user", ["userInfo"]),
  },
};
</script>

<style lang="less" scoped>
.tongji {
  width: 100%;
  height: 20%;
  // background-color: paleturquoise;
  display: flex;
  justify-content: center;
  // align-items: center;
  /deep/ .el-row {
    // background-color: #C6E2FF;
    // border: 3px solid #67c23a;
    background-color: #fff;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  /deep/ .el-col {
    // border: 1px solid red;
    width: 16.666%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;
  }
  /deep/ .el-col:hover {
    background-color: #fff;
  }
}
</style>