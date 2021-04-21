<template>
  <div>
    <h3 class="title">{{name}}</h3>
    <h3>{{name2}}</h3>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message:'李敏',
      name:'林聪',
      name2:'武松'
    }
  }
}
</script>

<style scoped>
  .title{
    color:red;
  }
</style>