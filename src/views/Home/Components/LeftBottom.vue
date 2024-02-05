<template>
  <div>
    <div class="countdown">
      <!-- <span class="hour">{{ formatNumber(hours) }}</span>
      <span class="minute">{{ formatNumber(minutes) }}</span>
      <span class="second">{{ formatNumber(seconds) }}</span> -->
      <!-- <span class="millisecond">{{ formatNumber(milliseconds) }}</span> -->
      <p class="ruiqing">瑞清安华秒杀</p>
      <i class="iconfont icon-shandian"></i>
      <p class="end"><span>22:00</span>&nbsp;点场 距结束</p>
      <div class="time">
        <span class="hour">{{ formatNumber(hours) }}</span>
        <span class="mao">:</span>
        <span class="minute">{{ formatNumber(minutes) }}</span>
        <span class="mao">:</span>
        <span class="second">{{ formatNumber(seconds) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      endtime: new Date('2024-01-18T22:00:00'),
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }
  },
  mounted () {
    this.updateCountdown()
    setInterval(this.updateCountdown, 1)
  },
  methods: {
    updateCountdown () {
      const now = new Date()
      const diff = this.endtime - now

      if (diff <= 0) {
        this.hours = 0
        this.minutes = 0
        this.seconds = 0
        this.milliseconds = 0
        return
      }

      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      const milliseconds = Math.floor(diff % 1000)

      this.hours = hours
      this.minutes = minutes
      this.seconds = seconds
      this.milliseconds = milliseconds
    },
    formatNumber (value) {
      return value.toString().padStart(2, '0')
    }
  }
}
</script>

<style lang="less" scoped>
.countdown {
  height: 225px;
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #4AB344;
  border-radius: 10px;
  .ruiqing {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    margin-top: 15px;
  }
  i {
    margin-top: 10px;
    font-size: 60px;
    color: #fff;
  }
  .end {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    color: #fff;
    span {
      font-weight: bold;
      font-size: 20px;
    }
  }
  .time {
    width: 100%;
    // background-color: pink;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .hour,
    .minute,
    .second {
      height: 90%;
      margin-top: 5%;
      width: 20%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 25px;
      font-weight: bold;
      color: #fff;
    }
    .mao{
            height: 90%;
      margin-top: 5%;
      width: 8%;
      // background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
            font-size: 25px;
      font-weight: bold;
    }
  }
}
</style>
