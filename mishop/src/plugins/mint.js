import Vue from 'vue'

// import { Indicator,Lazyload } from 'mint-ui'
import { Indicator,Popup,Toast } from 'mint-ui'

Vue.prototype.$indicator = Indicator
Vue.prototype.$toast = Toast 
// Vue.use(Lazyload);
Vue.component(Popup.name, Popup);