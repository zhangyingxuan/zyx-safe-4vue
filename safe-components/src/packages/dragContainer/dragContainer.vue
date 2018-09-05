<!--
     Describe: 可拖拽组件
     author: 张颖旋
     date: 2018-09-04 17:00:26
 -->
<style lang="scss" scoped>
  .drag-container {
    position: fixed;
    z-index: 99999;
    background-color: #fff;
  }
</style>
<template>
  <div ref="dragElement"
       :style="customStyle"
       class="drag-container"
       @mousedown="down" @touchstart="down"
       @mousemove="move" @touchmove="move"
       @mouseup="up" @touchend="up">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'DragContainer',
    prop: {
      position: {
        type: 'String'
      }
    },
    data() {
      return {
        dragElement: null,
        distanceX: 0,
        distanceY: 0,
        isDragging: false,
        customStyle: ''
      }
    },
    methods: {
      resetCustomStyle(dragElement) {
        if(this.position) {
          // 计算 组件居中left top
          let left = Math.abs(window.innerWidth / 2 - dragElement.clientWidth / 2)
          console.log(left)
          this.customStyle = `left: ${left}`
        }
        return ``
      },
      down(event) {
        this.isDragging = true
        if (event.type === 'touchstart') {
          event.clientY = event.touches[0].clientY;
          event.clientX = event.touches[0].clientX;
        }
        this.dragElement.style.cursor = 'move'
        this.distanceX = event.clientX - this.dragElement.offsetLeft
        this.distanceY = event.clientY - this.dragElement.offsetTop
      },
      move(event) {
        if(!this.isDragging) {
          return
        }
        if (event.type === 'touchmove') {
          event.clientY = event.touches[0].clientY;
          event.clientX = event.touches[0].clientX;
        }
        this.dragElement.style.left = event.clientX - this.distanceX + 'px'
        this.dragElement.style.top = event.clientY - this.distanceY + 'px'
      },
      up() {
        this.isDragging = false
        this.dragElement.style.cursor = 'default'
      }
    },
    mounted() {
      this.dragElement = this.$refs.dragElement
      // 重设组件位置
      this.resetCustomStyle(this.dragElement)
    }
  }
</script>
