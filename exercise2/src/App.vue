<template>
  <div id="app">
  
    <DashBoard></DashBoard>
  </div>
</template>

<script>
//import LoginPage from './components/Login.vue'
import DashBoard from './components/AdminDashboard.vue'

export default {
  name: 'App',
  components: {
    //LoginPage,
    DashBoard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
