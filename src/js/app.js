/**
 *
 * @version 1.0
 * @author Thomas Abbondi
 */


/**
 *  Includes the styles
 */
import 'babel-polyfill';

import Vue from 'vue';
import App from './App.vue';

import router from './commons/router.js';
import HTTP from './commons/axios.js';

import LazyLoadDirective from './directives/LazyLoadDirective';

Vue.config.productionTip = false;
Vue.prototype.$http = HTTP;
Vue.directive('lazyload', LazyLoadDirective);

new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
});
