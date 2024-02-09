<template>
  <div class="wrapper">
    <div class="time">
      <div class="time_top"><span>配送时间</span></div>
      <div class="time_content">
        <button>不限送货时间：周一至周日</button>
        <button>工作日送货：周一至周五</button>
        <button>双休日、假日送货：周六至周日</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.time {
  width: 100%;
  height: 200px;
  background-color: #fff;
  .time_top {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    // background-color: skyblue;
    span {
      display: flex;
      align-items: center;
      padding-left: 35px;
      border-bottom: 1px solid #f6f6f6;
      font-size: 18px;
      width: 98%;
      height: 100%;
    }
  }
  .time_content {
    // background-color: pink;
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    button {
      width: 240px;
      height: 50px;
      // background-color: aquamarine;
      border: 2px solid #ccc;
      margin: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button:hover {
      border: 2px solid #4ab344;
    }
    button:first-child {
      border: 2px solid #4ab344;
    }
  }
}
</style>