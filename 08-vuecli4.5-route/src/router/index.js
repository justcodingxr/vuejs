import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
//懒加载方式
const Home = () =>   import ('../views/Home.vue')
const About=()=>  import ('../views/About.vue')
const Profile=()=>  import ('../views/Profile.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/about/profile',
    name: 'Profile',
    component: Profile,
    //嵌套
    meta:{
      title:'我的'
    }

  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    //嵌套
    meta:{
      title:'首页'
    }

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About,
    //加上属性
    meta:{
      title:'关于'
    }
  }
]
//路由独享守卫
const router = new VueRouter({
  mode: 'history',

  base: process.env.BASE_URL,
  routes
})

//跳转前，前置首位
router.beforeEach((to,from,next)=>{
 document.title=to.meta.title
  next()
})

//跳转后，后置首位
// router.afterEach((to,from)=>{
//
// })
export default router
