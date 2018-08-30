<!--
     Describe: 滑块组件
 -->
<style lang="scss">
  @import "../../assets/fonts/style.css";

  .zyx-jigsaw {
    font-size: 14px;
    min-width: 220px;

    /*组件上半部分，拼图*/
    .zyx-jigsaw-panel {
      padding-bottom: 15px;
      position: relative;

      .zyx-jigsaw-panel-placeholder {
        pointer-events: auto;
        position: relative;
        padding-top: 50%;
      }

      /*拼图背景 + 小滑块*/
      .zyx-jigsaw-bg {
        border-radius: 2px;
        pointer-events: auto;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .zyx-jigsaw-bg-img {
          pointer-events: auto;
          vertical-align: top;
          width: 100%;
          border-radius: 2px;
        }

        .zyx-jigsaw-lump {
          position: absolute;
          left: 0;
          top: 0;
          width: auto;
          height: 100%;
        }
      }

      /*刷新 加载中背景*/
      .zyx-jigsaw-loadbox {
        position: absolute;
        border-radius: 2px;
        left: 0;
        top: 0;
        background: linear-gradient(to bottom right, #BDBCB7, #DFDCD7);
        color: #666;
        width: 100%;
        height: 100%;
        text-align: center;

        &.hidden {
          display: none;
        }

        .zyx-jigsaw-loadbox__inner {
          position: relative;
          top: 50%;
          margin-top: -25px;
        }
      }

      /*刷新小图标*/
      .zyx-jigsaw-refresh {
        color: #A2A3A1;
        font-size: 20px;
        position: absolute;
        right: 0;
        top: 0;
        padding: 10px;
      }
    }
  }

</style>
<template>
  <div :class="['zyx-jigsaw']" :style="customStyle">
    <!--拼图布局，背景 + 移动滑块-->
    <div class="zyx-jigsaw-panel">
      <div class="zyx-jigsaw-panel-placeholder">
        <div class="zyx-jigsaw-bg">
          <img class="zyx-jigsaw-bg-img"
               ref="jigsawBg"
               :src="bgImgSrc">
          <img class="zyx-jigsaw-lump"
               ref="jigsawLump"
               :src="lumpImgSrc"
               :style="lumpCustomStyle">
        </div>

        <div :class="[!refreshLoading ? 'hidden' : '' , 'zyx-jigsaw-loadbox']">
          <div class="zyx-jigsaw-loadbox__inner">
            <Loading color="#999"></Loading>
            <span class="zyx-jigsaw-loadtext">加载中...</span></div>
        </div>
        <div class="zyx-jigsaw-refresh icon-refresh" title="刷新" @click="refresh"></div>
      </div>
    </div>
    <Slider v-model="sliderValue"
            :width="width"
            :status="status"
            :message="message"
            :disabled="status === 1"
            @change="onChange"
            @setCurrentSliderBtnLeft="setCurrentSliderBtnLeft"></Slider>
  </div>
</template>
<script type="text/javascript">
  import '../../libs/constant'
  import Loading from '../loading/loading'
  import Slider from './slider'

  export default {
    name: 'JigsawSlider',
    props: {
      width: {
        type: String,
        default: "320px"
      },
      failAutoRefresh: {
        type: Boolean,
        default: true
      },
      message: {
        type: String,
        default: '向右滑动滑块填充拼图'
      }
    },
    data() {
      return {
        refreshLoading: false,
        bgImgSrc: '',
        lumpImgSrc: '',
        // jigsawArr: window.constant.jigsawArr,
        jigsawArr: [{name: 0, xStart: 41.6},
          {name: 1, xStart: 64.3}, {name: 2, xStart: 50.6},
          {name: 3, xStart: 72.5}, {name: 4, xStart: 38.7},
          {name: 5, xStart: 54.4}, {name: 6, xStart: 68.1},
          {name: 7, xStart: 53.7}, {name: 8, xStart: 37.5},
          {name: 9, xStart: 57.5}, {name: 10, xStart: 54.3},
          {name: 11, xStart: 58.1}, {name: 12, xStart: 50},
          {name: 13, xStart: 56.2}, {name: 14, xStart: 38.1},
          {name: 15, xStart: 79.3}, {name: 16, xStart: 65.6},
          {name: 17, xStart: 44.4}, {name: 18, xStart: 46.9},
          {name: 19, xStart: 32.5}, {name: 20, xStart: 78.1},
          {name: 21, xStart: 32.5}, {name: 22, xStart: 46.9},
          {name: 23, xStart: 41.8}, {name: 24, xStart: 31.8},
          {name: 25, xStart: 26.2}, {name: 26, xStart: 34.3},
          {name: 27, xStart: 56.25}, {name: 28, xStart: 57.5},
          {name: 29, xStart: 31.8}, {name: 30, xStart: 78.12},
        ],
        currentJigsaw: {},
        sliderValue: 0,
        currentSliderBtnLeft: 0,
        status: 0, // 0 无状态，1 成功，2 失败
      }
    },
    components: {
      Loading,
      Slider
    },
    computed: {
      customStyle() {
        return `width: ${this.width}`
      },
      lumpCustomStyle() {
        return `left: ${this.currentSliderBtnLeft}px`
      },
      jigsawBgWidth() {
        return this.$refs.jigsawBg ? this.$refs.jigsawBg['clientWidth'] : 1
      },
      jigsawLumpWidth() {
        return this.$refs.jigsawLump ? this.$refs.jigsawLump['clientWidth'] : 1
      }
    },
    watch: {
      sliderValue(val) {
        // console.log(val)
      }
    },
    created() {
      this.refreshJigsaw()
    },
    methods: {
      refresh() {
        // 刷新滑条
        this.sliderValue = 0
        this.status = 0
        // 刷新整个组件
        this.refreshJigsaw()
        this.$emit('refresh')
      },
      /**
       *  刷新拼图
       */
      refreshJigsaw() {
        this.refreshLoading = true
        // 刷新小拼图位置
        this.currentSliderBtnLeft = 0
        // 获取随机数，拼接图片路径
        let randomNum = this.GetRandomNum(0, this.jigsawArr.length - 1)

        this.bgImgSrc = require('../../assets/images/jigsawSlider/' + randomNum + '.jpg')
        this.lumpImgSrc = require('../../assets/images/jigsawSlider/' + randomNum + '_' + randomNum + '.png')
        this.currentJigsaw = this.jigsawArr[randomNum]
        setTimeout(() => {
          this.refreshLoading = false
        }, 600)
      },
      /**
       *  获取整数范围内的 随机整数
       * @param Min
       * @param Max
       * @returns {*}
       * @constructor
       */
      GetRandomNum(Min, Max) {
        let Range = Max - Min;
        let Rand = Math.random();
        return (Min + Math.round(Rand * Range));
      },
      /**
       *  当滑块停止滑动时触发
       * @param value
       */
      onChange(value) {
        let realDiffLeft = this.currentJigsaw.xStart * this.jigsawBgWidth * 0.01
        // 左右相差15px 则视为成功
        if(Math.abs(realDiffLeft - this.currentSliderBtnLeft) <= 15) {
        // if(Math.abs(this.currentJigsaw.xStart - value) <= 3) {
          // 验证成功，按钮不可用
          this.status = 1
          // 调用回调函数
          this.$emit('success')
        } else {
          this.status = 2
          this.$emit('fail')
          // 如果自定义自动刷新
          if(this.failAutoRefresh) {
            // 间隔 0.5秒 刷新状态
            setTimeout(() => {
              this.refresh()
            }, 500)
          }
        }
      },
      /**
       *  当滑块滑动时，刷新当前值
       * @param currentSliderBtnLeft
       */
      setCurrentSliderBtnLeft(currentSliderBtnLeft) {
        this.currentSliderBtnLeft = currentSliderBtnLeft
        if(this.currentSliderBtnLeft > this.jigsawBgWidth - this.jigsawLumpWidth) {
          this.currentSliderBtnLeft = this.jigsawBgWidth - this.jigsawLumpWidth
        }
      }
    },
    mounted() {

    },
  }
</script>
