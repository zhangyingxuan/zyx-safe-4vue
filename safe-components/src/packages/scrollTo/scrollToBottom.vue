<style lang="scss" scoped>
  @import "../../assets/fonts/style.css";

  .page-component-up {
    text-align: center;
    background-color: #ccc;
    position: fixed;
    border-radius: 20px;
    cursor: pointer;
    transition: .3s;
    box-shadow: 0 0 6px rgba(0, 0, 0, .12);
    z-index: 99999;

    &:hover {
      background-color: #bbb;
    }

    .icon-arrow-up-thick {
      transform:rotate(180deg);
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      line-height: 40px;
      vertical-align: baseline;
      display: inline-block;
      -webkit-font-smoothing: antialiased;
    }
  }

  .scroll-to-top-leave-active, .scroll-to-top-enter-active {
    transition: all 1s ease;
  }

  .scroll-to-top-leave-active, .scroll-to-top-enter {
    opacity: 0 !important;
  }

  .scroll-to-top-leave, .scroll-to-top-enter-active {
    opacity: 500;
  }
</style>
<template>
  <ZyxTransition>
    <div class="page-component-up"
         v-if="showLump"
         :style="customStyle"
         @click="pageScrollToBottom">
      <i class="icon-arrow-up-thick"
         :style="customArrowStyle"></i>
    </div>
  </ZyxTransition>
</template>
<script>
  import ZyxTransition from '../transition/ZyxTransition'
  export default {
    name: 'scrollToBottom',
    components: {
      ZyxTransition
    },
    props: {
      width: {
        type: Number,
        default: 40
      },
      height: {
        type: Number,
        default: 40
      },
      right: {
        type: Number,
        default: 100
      },
      bottom: {
        type: Number,
        default: 100
      },
      color: {
        type: String,
        default: '#3E8EF7'
      }
    },
    data() {
      return {
        scrollToTop: false,
        showLump: false
      }
    },
    computed: {
      customStyle() {
        return `width: ${this.width}px; height: ${this.height}px; bottom: ${this.bottom}px; right: ${this.right}px`
      },
      customArrowStyle() {
        return `color: ${this.color}`
      }
    },
    methods: {
      /**
       *  监听滑动事件
       */
      scrollListener() {
        if (this.scrollToTop) {
          this.scrollToTop = false
        } else {
          this.showLump = true
        }
      },
      /**
       *  将页面滑动至底部
       */
      pageScrollToBottom() {
        // 滑动至顶部
        window.scroll(0, document.body.clientHeight);
        this.scrollToTop = true
        this.showLump = false
      }
    },
    mounted() {
      // 初始化判断是否显示 滑动顶部滑块
      window.addEventListener('scroll', this.scrollListener);
    }
  }
</script>
