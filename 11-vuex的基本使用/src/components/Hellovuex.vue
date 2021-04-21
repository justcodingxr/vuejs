<template>
  <div>
    <h3>HelloVuex===================</h3>
    <h3>{{$store.state.counter}}</h3>
<!--    <h3>{{$store.getters.more20stu}}</h3>-->
    <h3>{{$store.getters.more20stu.length}}</h3>
  </div>
</template>

<script>
export default {
  name: "HelloVuex",
}
</script>

<style scoped>

</style>
