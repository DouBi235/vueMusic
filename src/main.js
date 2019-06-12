import 'babel-polyfill';
import Vue from 'vue';
import fastclick from 'fastclick';
import App from './App.vue';
import router from './router';
import store from './store';

import 'common/stylus/index.styl';

/* 移动端300毫秒延迟 */
fastclick.attach(document.body);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
