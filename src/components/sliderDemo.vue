<template>
  <div>
      <jigsawSlider :width="'400px'" @onSuccess="onSuccess">
      </jigsawSlider>
      <slider>
      </slider>
  </div>
</template>

<script>
  // import slider from '../../safe-components/src/packages/slider/slider'
  // import JigsawSlider from '../../safe-components/src/packages/slider/jigsaw-slider'
  export default {
    name: 'App',
    components: {
      // slider,
      // JigsawSlider
    },
    data () {
      return {
      }
    },
    computed: {

    },
    methods: {
      clickSomeThing() {
        console.log("哈哈哈")
      },
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
