import Vue from 'vue'
import App from './App'

import axios from "axios";
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

axios({
  url:'http://123.207.32.32:8000/home/multidata'
 , methods:'post',
  //'get'
}).then(res=>{
  console.log(res)
})

//全局配置
axios.defaults.baseURL='http://123.207.32.32:8000'
axios.defaults.timeout=5000
axios.all([
  axios({
  //  url:'http://123.207.32.32:8000/home/multidata',
  url:'/home/multidata',
}),
  axios({
  url:'/home/data',
    //get和params对应
  params:{
    type:'sell',
    page:1
  }
})
])
//   .then(result=>{
//     console.log(result)
//     console.log(result[0])
//     console.log(result[1])
// })
  .then(axios.spread((res1,res2)=>{
    console.log(res1)
    console.log(res2)
  }))

axios({
  url:'/category'
})
