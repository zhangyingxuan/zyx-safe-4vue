<template>
  <div class="layout">
    <el-container>
      <el-header class="layout-header">
        <header-top></header-top>
      </el-header>
      <el-container>
        <el-aside class="layout-aside"
                  width="220px">
          <nav-aside></nav-aside>
        </el-aside>
        <el-main class="layout-main">
          <keep-alive :exclude="excludePath">
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  // import {mapState, mapMutations, mapGetters} from 'vuex'
  import HeaderTop from './header-top'
  import NavAside from './nav-aside'

  export default {
    name: 'main',
    components: {
      HeaderTop,
      NavAside
    },
    data() {
      return {
        excludePath: []
      }
    },
    methods: {},
    mounted() {

    },
    created() {
    }
  }
</script>

<style>
</style>
