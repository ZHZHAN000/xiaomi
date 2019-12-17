<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar"
import "./assets/js/remStyle.js"
export default {
  name: 'App',
  components:{
<<<<<<< HEAD
  	Tabbar
=======
    Tabbar,
  },
  created(){
    this.$router.push('/home')
>>>>>>> f22d18481fa7b45478dd4ac156e28aaaa283c01d
  }
}
</script>

<style>
@import url(./assets/css/reset.css);

</style>
