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
    Tabbar,
  },
  // created(){
  //   this.$router.push('/home')
  // }
}
</script>

<style>
@import url(./assets/css/reset.css);

</style>
