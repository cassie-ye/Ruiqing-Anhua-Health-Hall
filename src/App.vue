<template>
  <div id="app">
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>
<script>
import {getNewsListAPI} from '@/apis/test'
export default {
  methods: {
    async getNewsList() {
      const { data: res } = await getNewsListAPI()
      // console.log('===========新闻==========')
      console.log(res)
      // this.newsList = res
      // for (const item of this.newsList) {
      //   const date = new Date(item.newsDate)
      //   const year = date.getFullYear()
      //   const month = date.getMonth() + 1
      //   const day = date.getDate()
      //   item.newsDate = `${year}-${month}-${day}`
      // }
      // console.log('===改造====')
      // console.log(this.newsList)
    },
  },
  created(){
    this.getNewsList()
  }
}
</script>
<style lang="less"></style>
