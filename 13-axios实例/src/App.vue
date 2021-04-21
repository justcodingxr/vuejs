<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h3>{{result}}</h3>
    <h3>Helloworld====================</h3>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import axios from "axios";
import HelloWorld from "./components/HelloWorld";
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      result:''
    }
  },
  created(){
    //组件创建好侯发送请求
    axios({
      url:'http://123.207.32.32:8000/home/multidata',
    }).then(res=>{
      this.result=res.config
    })
  }
}
</script>

<style>


</style>
