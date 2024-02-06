<template>
  <div>
    <el-backtop
      style="
        width: 53px;
        height: 53px;
        border-radius: 0px;
        backgroundcolor: #3fb057;
      "
    >
      <i class="el-icon-arrow-up"></i>
    </el-backtop>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
i {
  font-size: 30px;
  font-weight: 700;
  color: #fff;
}
.el-backtop {
  background-color: #3fb057;
}
.el-backtop:hover {
  background-color: #1f91ff;
  // i{
  //   color: #3fb057;
  // }
}
</style>