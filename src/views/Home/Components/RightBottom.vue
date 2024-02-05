<template>
  <div class="bottom">
    <div class="title">{{ this.asideObj.title }}</div>
    <div class="pic">
      <img
        src="https://17118605.s61i.faimallusr.com/2/AD0IjeuUCBACGAAg1dX72QUosPfR2QQwyAE4ew.jpg.webp"
        alt=""
      />
    </div>
    <!-- <div class="desc" v-for="(item, index) in newsList" :key="index">
              {{ item.title }}
            </div> -->
    <div class="desc cursor">
      <div class="item" v-for="(item, index) in fourIcon" :key="index">
        <i :class="[item.icon, 'icon iconfont']"></i>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getHomeConsultRightInfoAPI } from "@/apis/news";
export default {
  data() {
    return {
      asideObj: [],
      fourIcon: [],
      // 四个图标部分
      fourIcon: [
        {
          icon: "icon-good-fill",
          text: "正品保证",
        },
        {
          icon: "icon-time-fill",
          text: "准时送达",
        },
        {
          icon: "icon-homepage-ads-fill",
          text: "退换无忧",
        },
        {
          icon: "icon-customer-group-fill",
          text: "药师服务",
        },
      ],
    };
  },
  methods: {
    // 获取右侧信息
    async getHomeConsultRightInfo() {
      const { data: res } = await getHomeConsultRightInfoAPI();
      this.asideObj = res[0];
      this.newsObj = this.asideObj.newsTitleList;
    },
  },
  created() {
    this.getHomeConsultRightInfo();
  },
};
</script>

<style lang="less" scoped>
.bottom {
    border-radius: 10px;
  width: 100%;
  // height: px;
  // background-color: orange;
  border: 1px solid #eeeeee;
  background-color: #fff;
  .title {
    width: 100%;
    height: 35px;
    // background-color: skyblue;
    padding-left: 20px;
    margin-bottom: 5px;
    // text-align: center;
    line-height: 45px;
    font-size: 16px;
  }
  .pic {
    width: 100%;
    height: 100px;
    // background-color: greenyellow;
    padding-left: 10px;
    padding-right: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .desc {
    width: 100%;
    height: 170px;
    // background-color: pink;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  .item:nth-child(1),
  .item:nth-child(3) {
    border-right: 1px solid #eeeeee;
  }
  .item {
    width: 50%;
    height: 50%;
    // background-color: pink;
    border-top: 1px solid #eeeeee;
    // border-left: 1px solid #eeeeee;
    // border-right: 1px solid #eeeeee;
    transition: all 0.4s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .iconfont {
      font-size: 35px;
      color: #4ab344;
      margin-bottom: 5px;
    }
    p {
      color: #a7a7a7;
    }
  }
  .item:hover {
    background-color: #4ab344;
    .iconfont {
      color: #fff;
    }
    p {
      color: #fff;
    }
  }
}
</style>