import {add} from "./mathUtils.js"
console.log(add(1,2))
document.writeln('<h3>黎明</h3>')
require('./css/normal.css')
require('./css/special.less')


// 使用vue开发
// import Vue from 'vue'
//新版本
// import Vue from 'vue/dist/vue.esm.js'

//下面要在webpack.config.js中配置
import Vue from 'vue'


// const App = {
//   //注意``
//   template: `
//     <div>
//       <h3>{{name}}</h3>
//       <h3>{{name2}}</h3>
//     </div>
//   `,
//   //data定义方式要改变
//   // data:{
//   //   message:'李敏',
//   //   name:'林聪',
//   //   name2:'武松'
//   // }
//   data() {
//     return {
//       message: '李敏',
//       name: '林聪',
//       name2: '武松'
//     }
//   }
// }
// import  App from './vue/app.js'被取代
import  App from './vue/app.js'
// import  App from './vue/App.vue'
new Vue({
  el:'#id1',
  //同时有el和template时，template自动替换index.html<div id="id1"></div>
  // template:'<div><h3>{{name}}</h3></div>',
  // data:{
  //   message:'李敏',
  //   name:'林聪'
  // }

//注意不要用单标签
  template:'<App></App>',
  components:{
    App
  }

})