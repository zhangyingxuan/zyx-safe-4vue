<template>
  <div id="app">
    <ul>
      <li v-for="route in routers">
        <router-link :to="{name: route.name}">{{route.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { appRouter } from "../router";
  export default {
    name: 'App',
    components: {
    },
    data () {
      return {

      }
    },
    computed: {
      routers() {
        return appRouter.routes
      }
    },
    methods: {

    },
    mounted () {

    },
    created() {
      appRouter.routes.forEach((item, index) => {
      })
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
