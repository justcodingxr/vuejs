<template>
  <div class="tar-bar-item">
      <slot name="item-img"></slot>
      <slot name="item-text"></slot>

  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data(){
    return {
      isActive: true,
    }
  }
}
</script>

<style scoped>
.tar-bar-item{
  /*均分*/
  flex:1;
  text-align:center;
  height: 49px;
  font-size: 10px;
}

.tar-bar-item img {
  width: 24px;
  height:24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 3px;
}

/*.do {*/
/*    width: 24px;*/
/*    height:24px;*/
/*    margin-top: 3px;*/
/*    vertical-align: middle;*/
/*    margin-bottom: 3px;*/

/*}*/
</style>
