import Vue from 'vue'
import  Vuex from 'vuex'
//1.安装插件
Vue.use(Vuex)
//2.创建对象
const  moduleA={
  state:{
    name:'zhangsan'
  },
  mutations:{},
  actions:{},
  getters:{}
}
const  store = new Vuex.Store({
  state:{
    info:{name:'lining',age:30},
    counter:1000,
    student:[{name:'kobe',age:24},{
      name:'lining',age:30
    },{name:'curry',age:18}]
  },

  //mutation只能同步方法
  mutations:{
    //方法
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    changeInfo(state){
      Vue.set(state.info,'address','洛杉矶')
    }
  },

  //action可以异步
  actions:{
    aUpdateInfo(context,payloader){
      setTimeout(()=>{
        context.commit('changeInfo')
        console.log(payloader)
        console.log(payloader.message)
        // console.log(payloader.fun())
        payloader.fun()
      },1000)
    }
  },
  getters:{
    more20stu(state){
      return state.student.filter(s=> s.age>=20)
    },

    more20stulength(state,getters){
      return getters.more20stu.length
    },
    incrementCount(state,payloader){
      state.counter =  state.counter+payloader.m;
    }
  },


  modules:{
    a:{
      //会自动加入state
        moduleA
    }
  }
})
//3.导出
export default store
