<!--
     Describe: 动画组件
     author: 张颖旋
     date: 2018-09-04 17:00:26
 -->
<style lang="scss" scoped>
  .fade-leave-active, .fade-enter-active {
    transition: all 1s ease;
  }

  .fade-leave-active, .fade-enter {
    opacity: 0 !important;
  }

  .fade-leave, .fade-enter-active {
    opacity: 500;
  }
</style>
<template>
  <transition :name="type">
    <slot></slot>
  </transition>
</template>
<script>
  export default {
    name: 'ZyxTransition',
    props: {
      type: {
        type: String,
        default: 'fade'
      }
    }
  }
</script>
