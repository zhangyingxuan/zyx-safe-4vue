<template>
  <div>
      <commonButton @fastclick="clickSomeThing">
        <input type="button" value="关闭"/>
      </commonButton>
  </div>
</template>

<script>
  // import commonButton from '../../safe-components/components/commonButton'
  import {commonButton} from 'zyx-safe'
  export default {
    name: 'App',
    components: {
      commonButton
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
      }
    },
    mounted () {
    }
  }
</script>

<style>
</style>
