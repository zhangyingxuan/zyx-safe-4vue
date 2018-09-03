<template>
  <div>
    <JigsawSlider :width="'300px'"
                  :failAutoRefresh="false"
                  message="滑滑我试试"
                  @fail="onFail"
                  @refresh="onRefresh"
                  @success="onSuccess">
    </JigsawSlider>
      <Slider>
      </Slider>
  </div>
</template>

<script>
  import slider from '../../../safe-components/src/packages/slider/slider'
  import JigsawSlider from '../../../safe-components/src/packages/slider/jigsaw-slider'
  export default {
    name: 'SliderDemo',
    components: {
      slider,
      JigsawSlider
    },
    methods: {
      onSuccess() {
        this.$message.success('成功了啊')
      },
      onRefresh() {
        this.$message.success('您点了刷新')
      },
      onFail() {
        this.$message.error('失败了啊')
      }
    }
  }
</script>

<style>
</style>
