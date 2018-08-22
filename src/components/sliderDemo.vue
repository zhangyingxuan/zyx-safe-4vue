<template>
  <div>
      <JigsawSlider :width="'300px'" @success="onSuccess">
      </JigsawSlider>
      <Slider>
      </Slider>

  </div>
</template>

<script>
  // import slider from '../../safe-components/src/packages/slider/slider'
  import JigsawSlider from '../../safe-components/src/packages/slider/jigsaw-slider'
  export default {
    name: 'App',
    components: {
      // slider,
      JigsawSlider
    },
    data () {
      return {
      }
    },
    computed: {

    },
    methods: {
      onSuccess() {
        console.log('成功了啊')
      }
    },
    mounted () {
    }
  }
</script>

<style>
</style>
