import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
import Home from '../components/Home'
import Classify from '../components/Classify'
import Cart from '../components/Cart'
import Mine from '../components/Mine'
import Address from '../components/Address'
import Newadd from '../components/Newadd'



export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home,
      meta:{
        flag:true
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta:{
        flag:true
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta:{
        flag:true
      }
    },
    {
      path: '/mine',
      component: Mine,
      meta:{
        flag:true
      }
    },
    {
      path: '/address',
      component: Address,
      meta:{
        flag:false
      }
    },
    {
      path: '/newadd',
      component: Newadd,
      meta:{
        flag:false
      }
    },
  ]
})
