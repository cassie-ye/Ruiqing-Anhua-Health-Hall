<template>
  <div class="wrapper">
    <!-- 顶部title -->
    <div class="top1">
      <p>男科用药</p>
    </div>
    <!-- 内容 -->
    <div class="content">
      <!-- 左侧 -->
      <div class="left cursor">
        <!-- 上方图片 -->
        <div class="top2">
          <img
            src="https://17118605.s61i.faimallusr.com/2/AD0IjeuUCBACGAAgrOH82QUo4MnwYjDmATjKAg.jpg.webp"
            alt=""
          />
          <!-- 字体定位到图片上 -->
          <div class="text">
            <p class="title">告别“男”言之瘾</p>
            <p class="desc">四效合一激活原始动力</p>
          </div>
        </div>
        <!-- 下方选项 遍历数组+点击跳转-->
        <div class="bottom1">
          <div
            class="bottom-item"
            v-for="item in manEffectList"
            :key="item.id"
          >
            <router-link :to="item.linkUrl">
              {{ item.effect }}
            </router-link>
          </div>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="right">
        <!-- 商品组件 -->
        <div class="top3">
          <GoodsItem
            @gotoDetail="handleNavigation"
            class="t cursor"
            :goods="goodsList[0]"
            :color="color"
          ></GoodsItem>
          <!-- 中间图片 补养心脾 益肾固精 -->
          <div class="pic">
            <img
              src="https://17118605.s61i.faimallusr.com/2/AD0IjeuUCBACGAAgrOH82QUolLffgQcwxgM4qgI!450x450.jpg.webp"
              alt=""
            />
            <!-- 字体定位到图片上 -->
            <div class="text">
              <p class="title">补养心脾 益肾固精</p>
              <p class="C">四效合一激活原始动力</p>
              <div class="button">了解更多</div>
            </div>
          </div>
          <!-- 引用商品组件 组件传参 -->
          <GoodsItem
            @gotoDetail="handleNavigation"
            class="t cursor"
            :goods="goodsList[1]"
            :color="color"
          ></GoodsItem>
        </div>
        <div class="bottom2">
          <!-- 引用商品组件 组件传参 -->
          <GoodsItem
            @gotoDetail="handleNavigation"
            class="item cursor"
            v-for="item in goodsList.slice(2, 6)"
            :key="item.goodsImg"
            :goods="item"
            :color="color"
          ></GoodsItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getGoodsByParentType } from '@/apis/goods'

export default {
  data () {
    return {
      goodsList: [],
      color: '#076CE0',
      // 男生专场用药功效分类
      manEffectList: [
        {
          id: '1',
          effect: '补肾',
          linkUrl: '/goods'
        },
        {
          id: '2',
          effect: '脱发白发',
          linkUrl: '/goods'
        },
        {
          id: '3',
          effect: '不孕不育',
          linkUrl: '/goods'
        },
        {
          id: '4',
          effect: '男人保健',
          linkUrl: '/goods'
        },
        {
          id: '5',
          effect: '滋补肝肾',
          linkUrl: '/goods'
        },
        {
          id: '6',
          effect: '前列腺病',
          linkUrl: '/goods'
        },
        {
          id: '7',
          effect: '阳痿早泄',
          linkUrl: '/goods'
        },
        {
          id: '8',
          effect: '脱发少发',
          linkUrl: '/goods'
        }
      ],
      parentType: '男生保健'
    }
  },
  methods: {
    // 根据商品父级分类查询商品
    async getGoodsByParentTypeM (type) {
      const { data: res } = await getGoodsByParentType(type)
      this.goodsList = res
    },
    handleNavigation (id) {
      // 处理接收到的参数
      this.$router.push({ path: 'goodsDetail', query: { goods_id: id } })
    }
  },
  computed: {

  },
  created () {
    this.getGoodsByParentTypeM(this.parentType)
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  .top1 {
    width: 100%;
    height: 60px;
    // background-color: #EE4AA1;
    border-bottom: 2px solid #076ce0;
    margin-bottom: 40px;
    p {
      line-height: 60px;
      padding-left: 10px;
      font-size: 20px;
      color: #076ce0;
    }
  }
  .content {
    width: 100%;
    height: 630px;
    // background-color: indianred;
    display: flex;
    justify-content: space-between;
    .left:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }
    .left {
      transition: all 0.4s ease;
      width: 21.5%;
      height: 100%;
      // background-color: blueviolet;
      background-color: #fff;
      border: 1px solid #ececec;
      display: flex;
      flex-direction: column;
      align-items: center;
      .top2 {
        width: 87%;
        height: 330px;
        margin-top: 19px;
        // background-color: mediumaquamarine;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .text {
          width: 85%;
          height: 70px;
          //   background-color: darkkhaki;
          position: absolute;
          top: 30px;
          left: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .title {
            font-size: 18px;
            margin-bottom: -30px;
            color: #f5c74b;
          }
          .desc {
            font-size: 14px;
            color: #f5c74b;
            margin-top: 36px;
          }
        }
      }
      .bottom1 {
        width: 87%;
        height: 285px;
        // background-color: khaki;
        margin-top: -20px;
        display: flex;
        flex-wrap: wrap;
        // align-items: center;
        justify-content: space-evenly;
        .bottom-item:hover {
          background-color: #076ce0;
          a {
            color: #fff;
          }
        }
        .bottom-item {
          width: 39%;
          height: 30px;
          background-color: #f3f3f3;
          transition: all 0.4s ease;

          border-radius: 15px;
          text-align: center;
          line-height: 30px;
          margin-top: 30px;
          padding-top: -50px;
          a {
            font-size: 13px;
            color: #7d858c;
          }
        }
      }
    }
    .right {
      width: 76%;
      height: 100%;
      // background-color: seagreen;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      justify-content: space-around;
      .top3 {
        margin-top: -6px;
        width: 100%;
        height: 49%;
        // background-color: khaki;
        display: flex;
        justify-content: space-between;
        .pic {
          border: 1px solid #ececec;

          position: relative;
          width: 49%;
          height: 100%;
          // background-color: lawngreen;
          img {
            width: 100%;
            height: 100%;
          }
          .text {
            margin-left: 15px;
            position: absolute;
            width: 65%;
            height: 60%;
            // background-color: pink;
            top: 20%;
            .title {
              color: #f5c74b;
              font-size: 33px;
              margin-top: 20px;
            }
            .C {
              color: #f5c74b;
              font-size: 19px;
            }
            .button {
              margin-top: 40px;
              width: 36%;
              height: 35px;
              border-radius: 17px;
              background-color: #f5c74b;
              color: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
        .t {
          border: 1px solid #ececec;
          transition: all 0.4s ease;

          width: 24%;
          height: 100%;
        }
        .t:hover {
          // border: 1px solid #076ce0;
          // background-color: #fdd2df;
        }
      }
      .bottom2 .item:hover {
        // border: 1px solid #076ce0;
        // background-color: #fdd2df;
      }
      .bottom2 {
        margin-bottom: -7px;
        width: 100%;
        height: 49%;
        // background-color: skyblue;
        display: flex;
        justify-content: space-between;
        .item {
          transition: all 0.4s ease;

          height: 100%;
          width: 24%;
          border: 1px solid #ececec;
        }
      }
    }
  }
}
</style>
