<!--
     Describe: canvas实现类似时钟的倒计时效果
 -->
<template>
  <div class="spinner" :style="spinnerSize">
    <div class="bounce1" :style="customStyle"></div>
    <div class="bounce2" :style="customStyle"></div>
    <div class="bounce3" :style="customStyle"></div>
  </div>
</template>

<script>
  export default {
    name: "LoadingBounce2",
    props: {
      // 开始倒计时
      color: {
        type: String,
        default: '#67CF22'
      },
      width: {
        type: Number,
        default: 150
      },
    },
    computed: {
      customStyle() {
        return `background-color: ${this.color};width: ${this.width / 5}px;height: ${this.width / 5}px;`
      },
      spinnerSize() {
        return `width: ${this.width}px;height: ${this.height}px;`
      }
    }
  }
</script>

<style scoped>
  .spinner {
    margin: 30px auto 0;
    text-align: center;
  }

  .spinner > div {

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
    animation: bouncedelay 1.4s infinite ease-in-out;
    /* Prevent first frame from flickering when animation starts */
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0.0) }
    40% { -webkit-transform: scale(1.0) }
  }

  @keyframes bouncedelay {
    0%, 80%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 40% {
        transform: scale(1.0);
        -webkit-transform: scale(1.0);
      }
  }
</style>
