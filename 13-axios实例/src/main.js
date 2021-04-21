import Vue from 'vue'
import App from './App'

import axios from "axios";
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

//创建axios实例,每个服务器有独立的配置
const instance1=axios.create({
  baseURL:'//123.207.32.32:8000',
  timeout:5000
})
instance1({
  url:'/home/multidata'
}).then(res=>{
  console.log(res)
})

instance1({
  url:'/home/data'
}).then(res=>{
  console.log(res)
})


const instance2=axios.create({
  baseURL:'//123.207.32.32:8000',
  timeout:6000
})

instance2({
  url:'/home/data'
}).then(res=>{
  console.log(res)
})
