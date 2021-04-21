import Vue from "vue";

export  default {
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
}
