<template>
  <div id="app">

  </div>
</template>

<script>
import Customers from './components/Customers'
import About from './components/About'

export default {
  name: 'App',
  components: {
    Customers,About
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
