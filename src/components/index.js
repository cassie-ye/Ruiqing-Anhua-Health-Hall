// 黑色头部导航栏
import HeaderBlack from "@/components/Nav/HeaderBlack";
// logo和搜索框组件
import HeaderSearch from "@/components/Nav/HeaderSearch";
// 商品展示（选项卡处）
import GoodsItemAddBuy from "@/components/Goods/GoodsItemAddBuy";
// 底部黑色
import Bottom from "@/components/Nav/Bottom.vue";
// 返回顶部按钮
import BackTop from "@/components/Utils/BackTop.vue";
// 商品展示(男生+女生)
import GoodsItem from '@/components/Goods/GoodsItem'
// 优惠券
import Coupon from "@/components/Utils/Coupon.vue";

export const componentPlugin = {
  install(Vue) {
    Vue.component("HeaderBlack", HeaderBlack);
    Vue.component("HeaderSearch", HeaderSearch);
    Vue.component("GoodsItemAddBuy", GoodsItemAddBuy);
    Vue.component("Bottom", Bottom);
    Vue.component("BackTop", BackTop);
    Vue.component("GoodsItem", GoodsItem)
    Vue.component("Coupon", Coupon)
  },
};
