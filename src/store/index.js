import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import cart from "./modules/cart";
import order from "./modules/order"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    cart,
    order
  },
});
