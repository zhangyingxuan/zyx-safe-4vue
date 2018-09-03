<template>
  <div>
    <checkStrength :rules="rules"
                   clearable
                   v-model="currentValue"
                   size="small"
                   width="400px">
    </checkStrength>
  </div>
</template>

<script>
  import checkStrength from '../../../safe-components/src/packages/checkStrength/checkStrength'

  export default {
    name: 'CheckStrengthDemo',
    components: {
      checkStrength
    },
    data() {
      return {
        currentValue: 'dsafs',
        rules: [
          {message: "长度为6~14个字符", rule: "^.{6,14}$", isPassed: false},
          {message: "支持数字,大小写字母和标点符号帅到爆炸", rule: "^[A-Za-z0-9.,;:'\"]+$", isPassed: false}]
      }
    }
  }
</script>

<style>
</style>
