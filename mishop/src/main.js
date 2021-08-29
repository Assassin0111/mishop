import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入axios
import './plugins/axios'
// 引入mint-ui
import './plugins/mint'
// 引入全局配置
import Global from './config/global'
// 引入lazyload
import './plugins/lazyload'
// 引入iconfont
import './assets/css/iconfont.css'

// 设置为全局变量
Vue.prototype.$global = Global

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')