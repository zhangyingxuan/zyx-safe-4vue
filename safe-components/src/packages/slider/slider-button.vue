<style lang="scss" scoped>

  /*按钮部分*/
  .zyx-slider__button-wrapper {
    text-align: center;
    outline: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 40px;
    background-color: #fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, .3);
    cursor: pointer;
    color: #676D73;
    border-radius: 4px;
    transition: background .2s linear;

    &:hover, &.dragging {
      background-color: #1991fa;
      color: #fff;
    }

    .zyx-icon {
      line-height: 40px;
    }

    /*初始状态*/
    &.noStatus {
    }

    /*成功*/
    &.success {
      background-color: #5FD0BF;
      .zyx-icon {
        color: #fff;
      }
    }

    /*失败*/
    &.failure {
      background-color: #EDAAA7;
      .zyx-icon {
        color: #fff;
      }
    }
  }
</style>
<template>
  <div
    :class="[statusClass, { 'hover': hovering, 'dragging': dragging }, 'zyx-slider__button-wrapper']"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousedown="onButtonDown"
    @touchstart="onButtonDown"
    :style="wrapperStyle"
    ref="button"
    tabindex="0"
    @focus="handleMouseEnter"
    @blur="handleMouseLeave">
    <i :class="[iClass, 'zyx-icon']"></i>
  </div>
</template>

<script>

  export default {
    name: 'SliderButton',

    components: {},

    props: {
      value: {
        type: Number,
        default: 0
      },
      status: {
        type: Number,
        default: 0
      },
    },

    data() {
      return {
        hovering: false,
        dragging: false,
        isClick: false,
        startX: 0,
        currentX: 0,
        startPosition: 0,
        newPosition: null,
        oldValue: this.value,
        statusClass: 'noStatus',
        iClass: 'icon-arrow-right'
      };
    },

    computed: {
      disabled() {
        return this.$parent.sliderDisabled;
      },

      max() {
        return this.$parent.max;
      },

      min() {
        return this.$parent.min;
      },

      step() {
        return this.$parent.step;
      },

      precision() {
        return this.$parent.precision;
      },

      currentPosition() {
        return `${ (this.value - this.min) / (this.max - this.min) * 100 }%`;
      },

      wrapperStyle() {
        return {left: this.currentPosition};
      },

      btnWidth() {
        return this.$refs.button['clientWidth']
      }
    },

    watch: {
      dragging(val) {
        this.$parent.dragging = val;
      },
      /**
       *  根据滑块状态添加 组件class
       */
      status(val) {
        switch (val) {
          case 0:
            this.statusClass = 'noStatus'
            this.iClass = 'icon-arrow-right'
            break
          case 1:
            this.statusClass = 'success'
            this.iClass = 'icon-checkmark'
            break
          case 2:
            this.statusClass = 'failure'
            this.iClass = 'icon-cross'
            break
          default:
            break
        }
      },
    },

    methods: {

      handleMouseEnter() {
        this.hovering = true;
      },

      handleMouseLeave() {
        this.hovering = false;
      },

      onButtonDown(event) {
        if (this.disabled) return;
        event.preventDefault();
        this.onDragStart(event);
        window.addEventListener('mousemove', this.onDragging);
        window.addEventListener('touchmove', this.onDragging);
        window.addEventListener('mouseup', this.onDragEnd);
        window.addEventListener('touchend', this.onDragEnd);
        window.addEventListener('contextmenu', this.onDragEnd);
      },
      onDragStart(event) {
        this.dragging = true;
        this.isClick = true;
        if (event.type === 'touchstart') {
          event.clientY = event.touches[0].clientY;
          event.clientX = event.touches[0].clientX;
        }
        this.startX = event.clientX;
        this.startPosition = parseFloat(this.currentPosition);
        this.newPosition = this.startPosition;
      },

      onDragging(event) {
        if (this.dragging) {
          this.isClick = false;
          this.$parent.resetSize();
          let diff = 0;
          if (event.type === 'touchmove') {
            event.clientY = event.touches[0].clientY;
            event.clientX = event.touches[0].clientX;
          }
          this.currentX = event.clientX;
          diff = (this.currentX - this.startX) / this.$parent.sliderSize * 100;
          this.newPosition = this.startPosition + diff;
          this.setPosition(this.newPosition);
          this.$parent.setPosition();
        }
      },

      onDragEnd() {
        if (this.dragging) {
          /*
           * 防止在 mouseup 后立即触发 click，导致滑块有几率产生一小段位移
           * 不使用 preventDefault 是因为 mouseup 和 click 没有注册在同一个 DOM 上
           */
          setTimeout(() => {
            this.dragging = false;
            if (!this.isClick) {
              this.setPosition(this.newPosition);
              this.$parent.emitChange();
            }
          }, 0);
          window.removeEventListener('mousemove', this.onDragging);
          window.removeEventListener('touchmove', this.onDragging);
          window.removeEventListener('mouseup', this.onDragEnd);
          window.removeEventListener('touchend', this.onDragEnd);
          window.removeEventListener('contextmenu', this.onDragEnd);
        }
      },

      setPosition(newPosition) {
        if (newPosition === null) return;
        if (newPosition < 0) {
          newPosition = 0;
        } else if (newPosition > 100) {
          newPosition = 100;
        }
        const lengthPerStep = 100 / ((this.max - this.min) / this.step);
        const steps = Math.round(newPosition / lengthPerStep);
        let value = steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min;
        value = parseFloat(value.toFixed(this.precision));
        this.$emit('input', value);
        if (!this.dragging && this.value !== this.oldValue) {
          this.oldValue = this.value;
        }
      },
    }
  };
</script>
