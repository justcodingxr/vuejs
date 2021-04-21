<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <h3>{{message}}</h3>
    <h3>{{$store.state.counter}}</h3>
<!--    <button @click="$store.state.counter++">+</button>-->
<!--    <button @click="$store.state.counter&#45;&#45;">-</button>-->
        <button @click="add">+</button>
        <button @click="sub">-</button>
        <button @click="addCount(10)">+10</button>
    <h3>{{$store.state.info}}</h3>
    <button @click="changeInfo">change</button>
<!--    <h3>{{$store.getters.more20stu}}</h3>-->
    <h3>{{$store.getters.more20stu.length}}</h3>
    <h3>{{$store.getters.more20stulength}}</h3>
    <h3>modules中的内容</h3>
    <h3>{{$store.state.a.name}}</h3>
    <HelloVuex></HelloVuex>
  </div>
</template>

<script>
import HelloVuex from "./components/Hellovuex";

export default {
  name: 'App',
  data(){
    return {
      message:'App======================',
      counter:0
    }
  },
  methods:{
    changeInfo(){
      // this.$store.dispatch('aUpdateInfo','payloader param')
      this.$store.dispatch('aUpdateInfo',{
        message:'param',
        fun:()=>{
          console.log('sucess!')
        }
      })
    },
    add(){
      //store中mution中的方法
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    },
    addCount(m){

      // this.$store.commit('incrementCount',m)
      this.$store.commit({
        type:'incrementCount',
        m
      })
    }
  },
  components: {
    HelloVuex
  }
}
</script>

<style>

</style>
