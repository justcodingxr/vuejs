<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home" >Home</router-link> |
      <router-link to="/about" >About</router-link>
<!--      <router-view/>-->
<!--      避免频繁创建-->
<!--      排除一个，exclude="About"-->
      <keep-alive exclude="About">
        <router-view/>
      </keep-alive>
      </div>
  </div>
</template>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
