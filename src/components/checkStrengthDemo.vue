<template>
  <div>
      <checkStrength :rules="rules"
                     v-model="currentValue"
                     size="small"
                     width="400">
        <!--<template slot="label">哈哈哈</template>-->
      </checkStrength>
    <input type="button" value="确定" @click="clickBtn"/>
  </div>
</template>

<script>
  import checkStrength from "../../safe-components/src/packages/checkStrength/checkStrength"
  export default {
    name: 'App',
    components: {
      checkStrength
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
      clickBtn() {
        this.currentValue = new Date().getTime()
        alert(this.currentValue)
      }
    },
    mounted () {
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
