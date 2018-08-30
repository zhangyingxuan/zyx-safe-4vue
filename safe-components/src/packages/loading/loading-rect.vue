<!--
     Describe: canvas实现类似时钟的倒计时效果
 -->
<template>
  <div class="spinner" :style="spinnerSize">
    <div class="rect1" :style="customStyle"></div>
    <div class="rect2" :style="customStyle"></div>
    <div class="rect3" :style="customStyle"></div>
    <div class="rect4" :style="customStyle"></div>
    <div class="rect5" :style="customStyle"></div>
  </div>
</template>

<script>
  export default {
    name: "LoadingRect",
    props: {
      // 开始倒计时
      color: {
        type: String,
        default: '#67CF22'
      },
      width: {
        type: Number,
        default: 50
      },
      height: {
        type: Number,
        default: 60
      }
    },
    computed: {
      customStyle() {
        return `background-color: ${this.color};width: ${this.width / 10}px;`
      },
      spinnerSize() {
        return `width: ${this.width}px;height: ${this.height}px;`
      }
    }
  }
</script>

<style scoped>
  .spinner {
    margin: 20px auto;
    text-align: center;
    font-size: 10px;
  }

  .spinner > div {
    height: 100%;
    width: 6px;
    display: inline-block;

    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
    animation: stretchdelay 1.2s infinite ease-in-out;
  }

  .spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .spinner .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  .spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
    20% { -webkit-transform: scaleY(1.0) }
  }

  @keyframes stretchdelay {
    0%, 40%, 100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }  20% {
         transform: scaleY(1.0);
         -webkit-transform: scaleY(1.0);
       }
  }
</style>
