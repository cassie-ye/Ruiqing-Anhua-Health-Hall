<template>
  <div class="all">
    <div class="wrapper">
        <router-link to="/">首页</router-link>
        <router-link to="/goods">所有商品</router-link>
        <router-link to="/man">男生专场</router-link>
        <router-link to="/woman">女生专场</router-link>
        <router-link to="/child">儿童专场</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.all{
    width: 100%;
    height: 45px;
    background-color: #4AB344;
    .wrapper{
        height: 100%;
                    display: flex;
            justify-content: center;
            align-items: center;
        a{
            display: inline-block;
            width: 20%;
            height: 100%;
            // background-color: pink;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            color: #fff;
        }
        a:hover{
            background-color: #2F9F29;
        }
        .router-link-exact-active{
            background-color: #2F9F29;
        }
    }
}

</style>
