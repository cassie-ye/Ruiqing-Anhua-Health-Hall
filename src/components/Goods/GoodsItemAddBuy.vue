<template>
  <div class="all" @click="navigateToRoute(goods.goodsId)">
    <router-link to="">
      <div class="top">
        <div class="pic">
          <img :src="goods.img" alt="" />
        </div>
        <div class="tag">
          <div class="q">
            <el-tag type="success" size="small" effect="plain">领券</el-tag>
          </div>
          <p>{{ goods.name }}</p>
        </div>
      </div>
      <div class="bottom">
        <div class="price">
          <p class="now">
            ￥
            <span>{{ goods.disPrice.toFixed(2) }}</span>
          </p>
          <p class="ago">￥{{ goods.orPrice.toFixed(2) }}</p>
        </div>
        <div class="buyNow">
          <button class="btn">立即购买</button>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      required: true
    }
  },
  methods: {
    navigateToRoute (id) {
      // console.log(id)
      this.$emit('gotoDetail', id)
    }
  }
}
</script>

<style lang="less" scoped>
// .all:hover {
//   // background-color: #67C23A
//   border: 1px solid #4ab344;
// }
.all:hover{
      transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
}
.all {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #eee;
  transition: all 0.4s ease;
  .top {
    width: 100%;
    height: 77%;
    border-bottom: 1px dashed #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background-color: mediumaquamarine;
    .pic {
      width: 100%;
      height: 88%;
      //   background-color: khaki;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 92%;
        // height: 100%;
      }
    }
    .tag {
      // background-color: navajowhite;
      width: 90%;
      height: 12%;
      display: flex;
      justify-content: center;
      align-items: center;
      .q {
        padding-right: 2%;
      }
      p {
        color: #666666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .bottom {
    width: 100%;
    height: 23%;
    // background-color: mediumaquamarine;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .price {
      display: flex;
      width: 100%;
      height: 40%;
      // background-color: #fff;
      justify-content: center;
      align-items: center;
      .now {
        color: #4ab344;
        font-size: 12px;
        span {
          font-size: 20px;
        }
      }
      .ago {
        font-size: 12px;
        margin-top: 6px;
        margin-left: 10px;
        color: #767676;
        text-decoration: line-through;
      }
    }

    .buyNow {
      display: flex;
      width: 100%;
      height: 60%;
      //   background-color: burlywood;
      justify-content: center;
      //   align-items: center;
      .btn {
        width: 75%;
        height: 60%;
        border: 2px solid #5cbc57;

        background-color: #f0f9eb;
        color: #4ab344;
      }
    }
  }
}
.all:hover .bottom .buyNow .btn {
  background-color: #4ab344;
  border: 1px solid #4ab344;
  color: #fff;
  font-size: 20px;
  font-weight: bolder;
}
.all:hover .bottom .price .now{
  font-weight: bolder;
  font-size: 26px;
  span{
  font-size: 26px;

  }
}
</style>
