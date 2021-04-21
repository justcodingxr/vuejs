<template>
  <div id="tab-bar">
    <slot></slot>
<!--    <div class="tar-bar-item">-->
<!--      <img src="../../assets/css/img/tabbar/首页.svg"></img>首页</div>-->
<!--    <div class="tar-bar-item">-->
<!--      <img src="../../assets/css/img/tabbar/分类.svg"></img>分类</div>-->
<!--    <div class="tar-bar-item" >-->
<!--      <img src="../../assets/css/img/tabbar/购物车空.svg"></img>购物车</div>-->
<!--    <div class="tar-bar-item">-->
<!--      <img src="../../assets/css/img/tabbar/我的.svg"></img>我的</div>-->
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
/*body {*/
/*  //靠边*/
/*  padding:0;*/
/*  margin:0;*/
/*}*/




#tab-bar{
  /*水平分布*/
  display:flex;
  background-color: #f6f6f6;

  /*放置下部*/
  position: fixed;
  left:0;
  right: 0;
  bottom: 0;

  /*阴影*/
  box-shadow: 0px -3px 10px rgba(100,100,100,.1);
}


</style>
