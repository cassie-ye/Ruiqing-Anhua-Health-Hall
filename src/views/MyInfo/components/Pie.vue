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
          value: 463,
          name: "女生保健",
        },
        {
          value: 395,
          name: "男生保健",
        },
        {
          value: 157,
          name: "儿童保健",
        },
        {
          value: 149,
          name: "OTC药",
        },
        {
          value: 147,
          name: "特价产品",
        },
      ],
      pieName: [],
      myChartStyle: { float: "left", width: "100%", height: "400px" }, //图表样式
    };
  },
  mounted() {
    this.initDate(); //数据初始化
    this.initEcharts();
    // 调用方法
    this.getNewPieData()
  },
  computed: {
    ...mapState("user", ["userInfo"]),
    ...mapGetters("order", ["orderList"]),
  },
  methods: {
    ...mapActions("order", ["getOrderListAction"]),
    /* 
        每次一进页面拉取一下orderList的值
        for循环orderList,嵌套循环pieData的数组
        如果
    */
    getNewPieData() {
      // 拉取一下订单列表
      this.getOrderListAction(this.userInfo.id);
      // 循环orderList
      this.orderList.forEach((item) => {
        this.pieData.forEach((item2) => {
          if(item.parentType===item2.name){
            item2.value=item.number
          }
        });
      });
      console.log(this.pieData);
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
          text: "国内院士前五省份图示",
          top: "0%",
          left: "center",
        },
        series: [
          {
            type: "pie",
            label: {
              show: true,
              formatter: "{b} : {c} ({d}%)", // b代表名称，c代表对应值，d代表百分比
            },
            radius: "30%", //饼图半径
            data: this.pieData,
          },
        ],
      };
      console.log(this.seriesData);
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
