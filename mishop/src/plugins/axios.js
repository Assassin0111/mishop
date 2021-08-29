import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { Indicator } from 'mint-ui'


// 设置为全局属性
Vue.use(VueAxios, axios)

// 配置默认API地址
// axios.defaults.baseURL = 'http://localhost:8000/v1';
axios.defaults.baseURL = '/v1';
// 配置默认超时时间
axios.defaults.timeout = 3000;  



// 设置请求拦截
axios.interceptors.request.use( async function (config) { 

  // 设置加载中的效果
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  }); 
   
  // 这里的config包含每次请求的内容
  let token = localStorage.getItem('token');
  
  if (!token || Date.now() + 1000 > localStorage.getItem('expire')) {
    // 获取token做成真正的同步
    let result1 =  await fetch('/v1/accesstoken',{ 
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({ username:'jack', password: 123})
    })
    let result2 = await result1.json();
    // 存在本地
    localStorage.setItem('token',result2.data)  
    localStorage.setItem('expire',result2.expiresIn - 1000 + Date.now())  
    token = result2.data;

  }

  // 设置头部token
  config.headers.Authorization = 'Bearer ' + token;

  return config;
})


// 响应拦截器
axios.interceptors.response.use( 
  response => {    
    Indicator.close()
    return response.data
  }, error => {
    Indicator.close()
    return Promise.reject(error);
  }
);
