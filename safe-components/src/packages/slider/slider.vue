<!--
     Describe: 滑块组件
     author: 张颖旋
     date: 2018-09-04 17:00:26
 -->
<style lang="scss" scoped>
  /*整个滑块组件*/
  .zyx-slider {
    min-width: 220px;
    border-radius: 2px;
    border: 1px solid #e4e7eb;

    .zyx-slider__runway {
      position: relative;
      height: 40px;

      &.on-dragging {
        .zyx-slider__bar {
          border-top: 1px;
          border-left: 1px;
          border-right: 0;
          border-bottom: 1px;
          border-color: #1991fa;
          border-style: solid;
          background-color: #C5D4E7;
        }
        .zyx-slider__tips {
          display: none;
        }
      }

      /*滑条部分*/
      .zyx-slider__bar {
        position: absolute;
        left: 0;
        top: 0;
        height: 38px;
        cursor: default;
        border-radius: 2px;
      }

      /*提示语部分*/
      .zyx-slider__tips {
        line-height: 40px;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        text-align: center;
      }
    }

    /*初始状态*/
    &.noStatus {

    }

    /*成功*/
    &.success {
      .zyx-slider__bar {
        border-top: 1px;
        border-left: 1px;
        border-right: 0;
        border-bottom: 1px;
        border-color: #52CCBA;
        border-style: solid;
        background-color: #D2F4EF;
      }
      .zyx-slider__tips {
        display: none;
      }
    }

    /*失败*/
    &.failure {
      .zyx-slider__bar {
        border-top: 1px;
        border-left: 1px;
        border-right: 0;
        border-bottom: 1px;
        border-color: #FF5447;
        border-style: solid;
        background-color: #EDAAA7;
      }
      .zyx-slider__tips {
        display: none;
      }
    }
  }

</style>
<template>
  <div :class="[statusClass, 'zyx-slider']"
       ref="sliderBorder"
       :style="sliderCustomStyle">
    <div class="zyx-slider__runway"
         :class="{'on-dragging': dragging}"
         ref="slider">
      <div class="zyx-slider__tips">{{message}}</div>
      <!--滑条部分-->
      <div class="zyx-slider__bar"
           ref="sliderBar"
           :style="barStyle"></div>
      <!--滑块部分-->
      <SliderButton v-model="firstValue"
                    :status="status"
                    :disabled="disabled"
                    ref="sliderButton"></SliderButton>
    </div>
  </div>
</template>
<script type="text/javascript">
  import SliderButton from './slider-button'

  export default {
    name: 'Slider',
    components: {
      SliderButton
    },
    props: {
      status: {
        type: Number,
        default: 0
      },

      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      value: {
        type: [Number, Array],
        default: 0
      },
      width: {
        type: String,
        default: '320px'
      },
      message: {
        type: String,
        default: '向右滑动滑块'
      },
      disabled: {
        type: Boolean,
        default: false
      },

    },
    data() {
      return {
        firstValue: null,
        sliderSize: 1,
        dragging: false,
        oldValue: null,
      }
    },
    computed: {
      sliderCustomStyle() {
        return `width: ${this.width}`
      },

      sliderDisabled() {
        return this.disabled
      },

      precision() {
        let precisions = [this.min, this.max, this.step].map(item => {
          let decimal = ('' + item).split('.')[1];
          return decimal ? decimal.length : 0;
        });
        return Math.max.apply(null, precisions);
      },

      barStyle() {
        return {
          width: this.barSize,
          left: this.barStart
        };
      },

      barSize() {
        return `${ 100 * (this.firstValue - this.min) / (this.max - this.min) }%`;
      },

      barStart() {
        return '0%';
      },

      /**
       *  根据滑块状态添加 组件class
       */
      statusClass() {
        let statusClass
        switch (this.status) {
          case 0:
            statusClass = 'noStatus'
            break
          case 1:
            statusClass = 'success'
            break
          case 2:
            statusClass = 'failure'
            break
          default:
            break
        }
        return statusClass
      }
    },

    watch: {
      value(val, oldVal) {
        if (this.dragging ||
          Array.isArray(val) &&
          Array.isArray(oldVal) &&
          val.every((item, index) => item === oldVal[index])) {
          return;
        }
        this.setValues();
      },

      dragging(val) {
        if (!val) {
          this.setValues();
        }
      },

      firstValue(val) {
        this.$emit('input', val);
      },

      min() {
        this.setValues();
      },

      max() {
        this.setValues();
      }
    },
    methods: {
      resetSize() {
        if (this.$refs.slider) {
          this.sliderSize = this.$refs.slider['clientWidth'];
        }
      },

      valueChanged() {
        return this.value !== this.oldValue;
      },

      setValues() {
        if (this.min > this.max) {
          console.error('[Element Error][Slider]min should not be greater than max.');
          return;
        }
        const val = this.value;
        if (typeof val === 'number' && !isNaN(val)) {
          if (val < this.min) {
            this.$emit('input', this.min);
          } else if (val > this.max) {
            this.$emit('input', this.max);
          } else {
            this.firstValue = val;
            if (this.valueChanged()) {
              this.oldValue = val;
            }
          }
        }
      },

      emitChange() {
        this.$nextTick(() => {
          this.$emit('change', this.value);
        });
      },

      setPosition() {
        this.$nextTick(() => {
          this.$emit('setCurrentSliderBtnLeft', this.$refs.sliderBar['clientWidth']);
        });
      },
    },
    created() {
      this.firstValue = this.value > this.min ? this.value : this.min
    },
    mounted() {
      // this.$refs.slider.style['width'] = (this.$refs.sliderBorder['clientWidth'] - this.$refs.sliderButton.btnWidth) + "px"

      this.$nextTick(() => {
        //获取元素内联样式值
        let sliderBorderWidth = this.$refs.sliderBorder.style.width.replace('px', '')
        let btnWidth = this.$refs.sliderButton.getBtnWidth().replace('px', '')
        this.$refs.slider.style['width'] = (sliderBorderWidth - btnWidth) + "px"
      })
    }
  }
</script>
