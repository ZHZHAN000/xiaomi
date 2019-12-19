import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from '../components/Home'
import Classify from '../components/Classify'
import Cart from '../components/Cart'
import Mine from '../components/Mine'
import Hparticulars from '../components/Hparticulars'



export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      meta:{
        flag:true,
      }
    },
    {
      path: '/home',
      component: Home,
      meta:{
        flag:true,
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta:{
        flag:true,
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta:{
        flag:true,
      }
    },
    {
      path: '/mine',
      component: Mine,
      meta:{
        flag:true,
      }
    },
    {
      path: '/hparticulars',
      component: Hparticulars,
      meta:{
        flag:false,
      }
    },
  ]
})
