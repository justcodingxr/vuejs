<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
<!--      <router-link to="/about/profile" >Profile</router-link>-->
      <router-link :to="{path:'/about/profile',query:{name:'ling',age:24}}" >Profile</router-link>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default{
//生命周期函数1
  created() {
  console.log('About created');
  },
  destroyed() {
    console.log('About destroyed')
  }
}


</script>

