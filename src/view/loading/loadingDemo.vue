<template>
  <div>
    <loading color="red" :width="30" :height="30">
    </loading>
    <loadingRect></loadingRect>
    <loadingBounce></loadingBounce>
    <loadingBounce2></loadingBounce2>
  </div>
</template>
<script>
  import loading from '../../../safe-components/src/packages/loading/loading.vue'
  import loadingRect from '../../../safe-components/src/packages/loading/loading-rect.vue'
  import loadingBounce from '../../../safe-components/src/packages/loading/loading-bounce.vue'
  import loadingBounce2 from '../../../safe-components/src/packages/loading/loading-bounce2.vue'
  export default {
    name: 'LoadingDemo',
    components: {
      loading,
      loadingRect,
      loadingBounce,
      loadingBounce2
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
    },
    mounted() {
    }
  }
</script>

<style>
</style>
