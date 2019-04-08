import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/'
import './common/stylus/index.styl'
import VueLazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import { currency } from './util/currency'
import vueModalPlugins from 'vue-modal-plugins'
Vue.use(vueModalPlugins)
// 下拉加载插件
Vue.use(infiniteScroll)
// 图片懒加载插件
Vue.use(VueLazyload, {
  loading: '/static/loading-svg/loading-spin.svg'
})

// 注册货币全局过滤器
Vue.filter('currency', currency)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
