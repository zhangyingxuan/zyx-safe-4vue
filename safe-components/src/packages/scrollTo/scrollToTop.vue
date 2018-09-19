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

</style>
<template>
  <ZyxTransition name="scroll-to-top">
    <div class="page-component-up"
         v-if="showLump"
         :style="customStyle"
         @click="pageScrollToTop">
      <i class="icon-arrow-up-thick"
         :style="customArrowStyle"></i>
    </div>
  </ZyxTransition>
</template>
<script>
  import ZyxTransition from '../transition/ZyxTransition'
  export default {
    name: 'ScrollToTop',
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
        default: 150
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
       *  将页面滑动至顶部
       */
      pageScrollToTop() {
        // 滑动至顶部
        window.scroll(0, 0);
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
