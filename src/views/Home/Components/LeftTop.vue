<template>
  <div>
    <ul>
      <li>
        <router-link to="/man">男科 温阳补肾 男性保障</router-link>
      </li>
      <li>
        <router-link to="woman">女科 调经促孕 妇科炎症</router-link>
      </li>
      <li>
        <router-link to="/child">儿科 乳酸菌片 智力糖浆</router-link>
      </li>
      <li>
        <router-link to="/goods">营养保健 螺旋藻 绿蜂胶</router-link>
      </li>
      <li>
        <router-link to="goods">OTC药 感冒 肠胃炎</router-link>
      </li>
      <li>
        <router-link to="goods">特价商品 维生素 孢子粉</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
ul {
  width: 100%;
  //   height: 100%;
  li {
    width: 100%;
    // height: 16.666%;
    height: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px dashed #2f9f29;
    a {
      display: inline-block;
      font-size: 16px;
      color: #fff;
      color: #2f9f29;
      font-weight: bold;
    }
  }
  li:nth-child(6) {
    border-bottom: 0px dashed #2f9f29;
  }
  li:hover {
    background-color: #4ab344;
    a {
      color: #fff;
    }
  }
}
</style>