<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar"
import "./assets/js/remStyle.js"
export default {
  name: 'App'
}
</script>

<style>
@import url(./assets/css/reset.css);
#app {
  
}
</style>
