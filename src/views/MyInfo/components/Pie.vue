<template>
  <div class="echart" id="mychart" :style="myChartStyle"></div>
</template>

<script>
import * as echarts from "echarts";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      myChart: {},
      pieData: [
        {
          value: 0,
          name: "女生保健",
        },
        {
          value: 0,
          name: "男生保健",
        },
        {
          value: 0,
          name: "儿童保健",
        },
        {
          value: 0,
          name: "OTC药",
        },
        {
          value: 0,
          name: "特价产品",
        },
      ],
      pieName: [],
      myChartStyle: { float: "left", width: "70%", height: "350px" }, //图表样式
    };
  },
  async mounted() {
    await this.getOrderListAction(this.userInfo.id);
    // 调用方法
    this.getNewPieData();
    this.initDate(); //数据初始化
    this.initEcharts();
  },
  computed: {
    ...mapState("user", ["userInfo"]),
    ...mapState("order", ["orderList"]),
  },
  methods: {
    ...mapActions("order", ["getOrderListAction"]),
    /* 
        每次一进页面拉取一下orderList的值
        for循环orderList,嵌套循环pieData的数组
        如果
    */
    getNewPieData() {
      // 循环orderList
      this.orderList?.forEach((item) => {
        this.pieData.forEach((item2) => {
          if (item.parentType === item2.name) {
            item2.value = item.number;
          }
        });
      });
    },
    initDate() {
      for (let i = 0; i < this.pieData.length; i++) {
        // this.xData[i] = i;
        // this.yData =this.xData[i]*this.xData[i];
        this.pieName[i] = this.pieData[i].name;
      }
    },
    initEcharts() {
      // 饼图
      const option = {
        legend: {
          // 图例
          data: this.pieName,
          right: "10%",
          top: "30%",
          orient: "vertical",
        },
        title: {
          // 设置饼图标题，位置设为顶部居中
          text: "用户消费个人偏好统计",
          top: "12%",
          left: "center",
        },
        series: [
          {
            type: "pie",
            label: {
              show: true,
              formatter: "{b} : {c} ({d}%)", // b代表名称，c代表对应值，d代表百分比
            },
            radius: "35%", //饼图半径
            data: this.pieData,
            left:"-25%"
          },
        ],
      };
      // console.log(this.seriesData);
      const optionFree = {
        xAxis: {},
        yAxis: {},
        series: [
          {
            data: this.seriesData,
            type: "line",
            smooth: true,
          },
        ],
      };
      this.myChart = echarts.init(document.getElementById("mychart"));
      this.myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    },
  },
};
</script>
<style scoped>
#mychart{
  background-color: #fff;
  border-radius: 10px;
  margin-top: 15px;
}
</style>
