<!--
     Describe: canvas实现类似时钟的倒计时效果
 -->
<template>
  <div class="spinner" :style="spinnerSize">
    <div class="double-bounce1" :style="customStyle"></div>
    <div class="double-bounce2" :style="customStyle"></div>
  </div>
</template>

<script>
  export default {
    name: "LoadingBounce",
    props: {
      // 开始倒计时
      color: {
        type: String,
        default: '#67CF22'
      },
      width: {
        type: Number,
        default: 40
      },
      height: {
        type: Number,
        default: 40
      }
    },
    computed: {
      customStyle() {
        return `background-color: ${this.color};`
      },
      spinnerSize() {
        return `width: ${this.width}px;height: ${this.height}px;`
      }
    }
  }
</script>

<style scoped>
  .spinner {
    position: relative;
    margin: 10px auto;
  }

  .double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: bounce 2.0s infinite ease-in-out;
    animation: bounce 2.0s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  @-webkit-keyframes bounce {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
  }

  @keyframes bounce {
    0%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 50% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
      }
  }
</style>
