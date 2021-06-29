import count from './count';
import currency from './currency';
import percentage from './percentage';
import quantity from './quantity';

const Filters = {
  install(Vue) {
    Vue.filter('count', count);
    Vue.filter('currency', currency);
    Vue.filter('percentage', percentage);
    Vue.filter('quantity', quantity);
  },
};

export default Filters;
