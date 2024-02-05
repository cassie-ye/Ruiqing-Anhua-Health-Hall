import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 引入全局组件插件
import { componentPlugin } from "@/components/index";
// 引入初始化样式文件
import '@/style/common.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(componentPlugin);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
