import HeaderBlack from './HeaderBlack';
import HeaderSearch from './HeaderSearch';
import Option from '@/components/Goods/Option'
import GoodsItemAddBuy from '@/components/Goods/GoodsItemAddBuy'

export const componentPlugin = {
  install (Vue) {
    Vue.component('HeaderBlack', HeaderBlack);
    Vue.component('HeaderSearch', HeaderSearch);
    Vue.component('GoodsItemAddBuy', GoodsItemAddBuy);

  }
};