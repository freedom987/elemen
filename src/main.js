// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BScroll from 'better-scroll'


import 'lib-flexible'   //处理移动端自适应

import FastClick from 'fastclick'
//处理移动端click事件300毫秒延迟
FastClick.attach(document.body);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
