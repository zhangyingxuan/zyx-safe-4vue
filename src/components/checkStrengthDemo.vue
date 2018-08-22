<template>
  <div>
      <checkStrength :rules="rules"
                     v-model="currentValue"
                     size="small"
                     width="400">
      </checkStrength>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
    },
    data () {
      return {
        currentValue: 'fasdfad',
        rules: [
          {message: "长度为6~14个字符", rule: "^.{6,14}$", isPassed: false},
          {message: "支持数字,大小写字母和标点符号帅到爆炸", rule: "^[A-Za-z0-9.,;:'\"]+$", isPassed: false}]
      }
    },
    computed: {

    },
    watch: {
    },
    methods: {
    },
    mounted () {
    }
  }
</script>

<style>
</style>
