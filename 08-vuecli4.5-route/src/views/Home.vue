<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>


  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  //生命周期函数1
  created(){
    console.log('Home created');
    document.title='首页'
  },
  destroyed(){
    console.log('Home destroyed')
  }
}

</script>
