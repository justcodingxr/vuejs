<template>
  <div id="app">
<!--    di="tab-bar"-->
    <tab-bar>
      <tar-bar-item>
<!--           <div slot="item-img">-->
<!--             <img  src="./assets/css/img/tabbar/首页.svg" alt="">-->
<!--           </div>-->
          <img  id=p1 slot="item-img" src="./assets/css/img/tabbar/首页.svg" alt="">
          <div slot="item-text">首页</div>
      </tar-bar-item>

      <tar-bar-item>
        <div slot="item-img">
          <img  src="./assets/css/img/tabbar/分类.svg" alt="">
        </div>
        <div slot="item-text">分类</div>
      </tar-bar-item>

      <tar-bar-item>
        <div slot="item-img" >
          <img  src="./assets/css/img/tabbar/购物车空.svg" alt="">
        </div>
        <div slot="item-text">购物车</div>
      </tar-bar-item>

      <tar-bar-item>
        <div slot="item-img">
          <img src="./assets/css/img/tabbar/我的.svg" alt="">
        </div>
        <div slot="item-text">我的</div>
      </tar-bar-item>
    </tab-bar>
  </div>
</template>

<script>
//导入
import TabBar from './components/tarbar/TabBar'
import TabBarItem from './components/tarbar/TabBarItem'
export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem

  }
}
</script>

<style>
@import "./assets/css/base.css";

</style>
