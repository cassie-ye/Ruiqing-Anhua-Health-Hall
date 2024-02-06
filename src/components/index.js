// 黑色头部导航栏
import HeaderBlack from './HeaderBlack';
// logo和搜索框组件
import HeaderSearch from './HeaderSearch';
// 商品展示（选项卡处）
import GoodsItemAddBuy from '@/components/Goods/GoodsItemAddBuy'
// 底部黑色
import Bottom from '@/components/Bottom.vue'

export const componentPlugin = {
  install (Vue) {
    Vue.component('HeaderBlack', HeaderBlack);
    Vue.component('HeaderSearch', HeaderSearch);
    Vue.component('GoodsItemAddBuy', GoodsItemAddBuy);
    Vue.component('Bottom', Bottom);


  }
};