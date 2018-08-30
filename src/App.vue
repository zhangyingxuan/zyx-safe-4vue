<template>
  <div id="app" ref="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {

    // console.log(this.$refs['app'].clientWidth)

    // this.$refs['app'].width = '1000px'
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 1000px;
  margin: 0 auto;
}
</style>
