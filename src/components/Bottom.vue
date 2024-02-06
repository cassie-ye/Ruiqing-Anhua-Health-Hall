<template>
  <div class="bottom">
    <div class="wrapper">
      <div class="top">
        <div class="top-item" v-for="(item, index) in topList" :key="index">
          <div class="left">
            <i :class="[item.icon, 'iconfont']"></i>
          </div>
          <div class="right">
            <div class="title">{{ item.title }}</div>
            <div class="content">{{ item.content }}</div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div v-for="(item,index) in bottomList" :key="index" class="bottom-item">
            <div class="all">{{item.title}}</div>
            <div class="child" v-for="(item2,index2) in item.child" :key="index2">
                {{item2}}
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      topList: [
        {
          icon: 'icon-good-fill',
          title: '正品保障',
          content: '正品行货 放心选购'
        },
        {
          icon: 'icon-homepage-ads-fill',
          title: '物流省心',
          content: '全网闪电发货'
        },
        {
          icon: 'icon-customer-group-fill',
          title: '售后无忧',
          content: '7天无理由退货'
        },
        {
          icon: 'icon-time-fill',
          title: '准时送达',
          content: '收纳时间由你做主'
        }
      ],
      bottomList: [
        {
          title: '服务保证',
          child: [
            '正品保证',
            '7天无理由退换',
            '退货返运费',
            '7X15小时客户服务'
          ]
        },
        {
          title: '支付方式',
          child: [
            '公司转账',
            '货到付款',
            '在线支付',
            '分期付款'
          ]
        },
        {
          title: '商家服务',
          child: [
            '商家服务',
            '培训中心',
            '广告服务',
            '服务市场'
          ]
        },
        {
          title: '物流配送',
          child: [
            '免运费',
            '海外配送',
            'EMS',
            '211限时达'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.bottom {
  width: 100%;
  height: 460px;
  background-color: #282828;
  .wrapper {
    // height: 100%;
    height: 440px;
    .top {
      width: 100%;
      height: 36%;
    //   background-color: pink;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .top-item {
        width: 20%;
        height: 84%;
        // background-color: orchid;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 15px;
        .left {
          width: 33%;
          height: 58%;
          border-radius: 58%;
          // background-color: forestgreen;
          border: 4px solid #cecece;
          display: flex;
          justify-content: center;
          align-items: center;
          .iconfont {
            color: #cecece;
            font-size: 45px;
          }
        }
        .right {
          width: 55%;
          height: 58%;
          // background-color: #fff;
          color: #cecece;
          font-size: 14px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .title {
            margin-bottom: 5px;
          }
        }
      }
    }
    .bottom {
      width: 100%;
      height: 64%;
    //   background-color: lightblue;
    margin-top: 20px;
      display: flex;
      .bottom-item{
        width: 25%;
        height: 60%;
        // background-color: aqua;
        border-right: 1px solid #2F2F2F;
        .all{
            font-size: 15px;
            margin-bottom: 30px;
            padding-left: 40%;
            color: #cecece;
        }
        .child{
            font-size: 15px;
            padding-left: 40%;
            color: #cecece;
            padding-top: 10px;
        }
      }
      .bottom-item:last-child{
                border-right: 0px solid #cecece;

      }
    }
  }
}
</style>
