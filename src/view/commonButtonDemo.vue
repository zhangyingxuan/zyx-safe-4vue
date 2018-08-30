<template>
  <div>
      <commonButton @fastclick="clickSomeThing">
        <input type="button" value="关闭"/>
      </commonButton>
  </div>
</template>

<script>
  export default {
    name: 'CommonButtonDemo',
    components: {
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
