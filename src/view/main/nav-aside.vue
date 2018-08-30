<template>
  <el-menu :default-active="defaultActive"
           class="nav-aside-menu">
    <template v-for="item in menuList">
      <el-menu-item-group v-if="item.children">
        <template slot="title">{{item.nameCn}}</template>
        <el-menu-item v-for="subMenu in item.children"
                      :index="subMenu.path"
                      :key="subMenu.name"
                      @click="routeHandle(subMenu)">
          <span slot="title">{{subMenu.nameCn}}</span>
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item v-else
                    :index="item.path"
                    @click="routeHandle(item)"
                    :key="item.name">
        <span slot="title">{{item.nameCn}}</span>
      </el-menu-item>

    </template>

  </el-menu>
</template>

<script>
  import {appRouter} from "../../router/index";

  export default {
    name: 'nav-aside',
    data() {
      return {}
    },
    computed: {
      defaultActive() {
        const path = this.$route.path
        return path || '1'
      },
      menuList() {
        return appRouter.routes
      }
    },
    methods: {
      routeHandle(item) {
        this.$router.push({name: item.name})
      },
    }
  }
</script>

<style lang="scss">
  .nav-aside-menu {
    border-right: 0;
  }
</style>
