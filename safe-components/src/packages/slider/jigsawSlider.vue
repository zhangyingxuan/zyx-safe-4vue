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

        <div :class="[!refreshLoading ? 'hidden' : '' , 'zyx-jigsaw-loadbox']" style="border-radius: 2px">
          <div class="zyx-jigsaw-loadbox__inner">
            <Loading></Loading>
            <span class="zyx-jigsaw-loadtext">加载中...</span></div>
        </div>
        <div class="zyx-jigsaw-refresh icon-refresh" title="刷新" @click="refreshJigsaw"></div>
      </div>
    </div>
    <Slider v-model="sliderValue"
            :status="status"
            @change="onChange"
            @setCurrentSliderBtnLeft="setCurrentSliderBtnLeft"></Slider>
  </div>
</template>
<script type="text/javascript">
  import '../../libs/constant'
  import Loading from '../loading/loading'
  import Slider from './slider'

  export default {
    name: 'slider',
    props: {
      width: {
        type: String,
        default: "320px"
      },
      height: {
        type: String,
        default: "medium"
      },
    },
    data() {
      return {
        refreshLoading: false,
        bgImgSrc: '',
        lumpImgSrc: '',
        jigsawArr: window.constant.jigsawArr,
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
        return this.$refs.jigsawBg['clientWidth']
      },
      jigsawLumpWidth() {
        return this.$refs.jigsawLump['clientWidth']
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
      /**
       *  刷新拼图
       */
      refreshJigsaw() {
        this.refreshLoading = true
        // 刷新小拼图位置
        this.currentSliderBtnLeft = 0
        // 获取随机数，拼接图片路径
        let randomNum = this.GetRandomNum(0, this.jigsawArr.length)

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
        if(Math.abs(this.currentJigsaw.xStart - this.currentSliderBtnLeft) <= 3) {
          this.status = 1
        } else {
          this.status = 2
          // 间隔 0.5秒 刷新状态
          setTimeout(()=>{
            // 刷新滑条
            this.sliderValue = 0
            this.status = 0
            // 刷新整个组件
            this.refreshJigsaw()
          }, 500)
        }
        console.log('监听华快停止时，判断位置是否成功 onChange' + this.currentJigsaw.xStart)
        console.log('监听华快停止时，判断位置是否成功 onChange' + value + '---' + this.currentSliderBtnLeft)
      },
      /**
       *  当滑块滑动时，刷新当前值
       * @param currentSliderBtnLeft
       */
      setCurrentSliderBtnLeft(currentSliderBtnLeft) {
        if(this.currentSliderBtnLeft > this.jigsawBgWidth - this.jigsawLumpWidth) {
          this.currentSliderBtnLeft = this.jigsawBgWidth - this.jigsawLumpWidth
        } else {
          this.currentSliderBtnLeft = currentSliderBtnLeft
        }
      }
    },
    mounted() {

    },
  }
</script>
