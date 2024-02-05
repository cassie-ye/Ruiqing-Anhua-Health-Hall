import HeaderBlack from './HeaderBlack';
import HeaderSearch from './HeaderSearch';
export const componentPlugin = {
  install (Vue) {
    Vue.component('HeaderBlack', HeaderBlack);
    Vue.component('HeaderSearch', HeaderSearch);
  }
};