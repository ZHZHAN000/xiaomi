<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <Tabbar v-show="$route.meta.flag"></Tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar.vue"
import "./assets/js/remStyle.js"
// import "./assets/js/jquery-1.8.1.js"
export default {
  name: 'App',
  components:{
    Tabbar,
  },
  created(){
    this.$router.push('/home')
  }
}
</script>

<style>
@import url(./assets/css/reset.css);

</style>
