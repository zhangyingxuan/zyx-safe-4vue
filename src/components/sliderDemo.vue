<template>
  <div>
      <JigsawSlider :valueFun="valueFun">
      </JigsawSlider>
      <slider :valueFun="valueFun">
      </slider>
  </div>
</template>

<script>
  import slider from '../../safe-components/src/packages/slider/slider'
  import JigsawSlider from '../../safe-components/src/packages/slider/jigsawSlider'
  // import slider from 'zyx-safe'
  export default {
    name: 'App',
    components: {
      slider,
      JigsawSlider
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
      valueFun(left, right, pop) {
        console.log(left + "" + right + "" + pop)
      }
    },
    mounted () {
    }
  }
</script>

<style>
</style>
