// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import 'iview/dist/styles/iview.css';
import App from './App';
import router from './router';
import store from './store';
import './my-theme/index.less';
import './assets/font/iconfont.css';
import './ivewsUi';


// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './static/404.png',
  // loading: require('./assets/images/no-cart-data.png'),
  attempt: 1,
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
