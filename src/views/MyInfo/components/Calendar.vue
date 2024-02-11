<template>
  <div class="calendar">
    <div class="calendar_top">我的日历</div>
    <div class="calendar_bottom">
      <p class="day">{{ day }}</p>
      <p>{{ dayOfWeek }}</p>
      <p>{{ year }}.{{ month + 1 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: "",
      month: "",
      day: "",
      dayOfWeek: "",
    };
  },
   created() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const dayOfWeek = now.getDay();
    this.year = year;
    this.month = month;
    this.day = day;
    const dayOfWeekStr = [
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
    ][dayOfWeek];
    this.dayOfWeek = dayOfWeekStr;
  },
};
</script>

<style lang="less" scoped>
.calendar {
  width: 95%;
  height: 40%;
  margin-left: 5%;
  background-color: #f8fffa;
  border-radius: 15px;

  .calendar_top {
    border-radius: 15px 15px 0px 0px;
    width: 100%;
    height: 25%;
    background-color: #6ec884;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .calendar_bottom {
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    margin-top: 5px;
    p {
      color: #6ec884;
    }
    .day {
      font-size: 50px;
      font-weight: bold;
    }
  }
}
</style>