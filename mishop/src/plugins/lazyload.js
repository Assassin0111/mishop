import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import loadingimg from '../assets/images/loading.gif'


Vue.use(VueLazyload, {
    //preLoad: 1.3,
    loading: loadingimg,
})