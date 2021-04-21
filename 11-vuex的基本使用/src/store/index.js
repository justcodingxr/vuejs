import Vue from 'vue'
import  Vuex from 'vuex'
import mutations from './mutations'
import actions from "./actions"
import  getters from "./getters"
import moduleA from "./modules/moduleA";
//1.安装插件
Vue.use(Vuex)
//2.创建对象

const  store = new Vuex.Store({
  state:{
    info:{name:'lining',age:30},
    counter:1000,
    student:[{name:'kobe',age:24},{
      name:'lining',age:30
    },{name:'curry',age:18}]
  },

  //mutation只能同步方法
  mutations,
  //action可以异步
  actions,
  getters,


  modules:{
    a:{
      //会自动加入state
        moduleA
    }
  }
})
//3.导出
export default store
