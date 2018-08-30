<style lang="scss" scoped>
  .layout-header-wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .layout-header-title {
      margin-top: 10px;
      margin-bottom: 10px;
      color: #409EFF;
      text-blink: none;
    }
    a:link {
      color: blue;
      text-decoration: none;
    }
    //未访问：蓝色、无下划线
    a:active {
      color: #409EFF;
      text-decoration: none;
    }
    //激活：红色
    a:visited {
      color: #409EFF;
      text-decoration: none;
    }
    //已访问：紫色、无下划线
    a:hover {
      color: #409EFF;
      text-decoration: none;
    }
    //鼠标移近：红色、下划线
    .layout-header-right {
      align-self: flex-end;
      text-align: right;
    }
    .breadcrumb-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-grow: 1;
      padding-left: 30px;
    }

    .header-menu {
      border-bottom: 0;
      background-color: transparent;
    }
    .submenu-avatar.el-submenu {
      // 重置element激活导航样式
      .el-submenu__title {
        border-bottom: none;
      }
    }
  }
</style>
<template>
  <div class="layout-header-wrap">
    <h1 class="layout-header-title">
      <router-link :to="{ path: '/' }">自定义组件集 zyx-safe</router-link>
    </h1>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapGetters} from 'vuex'

  export default {
    name: 'header-top',
    data() {
      return {
        activeIndex: '1'
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>
