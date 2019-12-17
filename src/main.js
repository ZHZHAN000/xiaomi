// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Router from 'vue-router'
<<<<<<< HEAD
import store from './Store/index.js'
=======
>>>>>>> zyf/xiaomi
import Vant from 'vant';
import 'vant/lib/index.css';

import store from './Store/index.js'

Vue.use(Vant);

Vue.config.productionTip = false
Vue.prototype.$axios = axios


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
