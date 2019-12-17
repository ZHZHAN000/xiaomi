import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
import Home from '../components/Home'
import Classify from '../components/Classify'
import Cart from '../components/Cart'
import Mine from '../components/Mine'



export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/mine',
      component: Mine
    },
  ]
})
