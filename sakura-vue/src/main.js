// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store'
// 阻止vue在启动时生成生产提示
Vue.config.productionTip = false
// 注入插件
// wabpack 图片路径会当成模块解析
Vue.use(VueLazyload,{
  preLoad: 1.0,
  error: require('../static/img/error.png'),
  loading: require('../static/img/loading.png'),
})

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})
