<template>
  <div>
    <h2>安装步骤</h2>
    <h3>步骤一</h3>
    <pre style="font-size: 14px">
      利用npm安装

      npm install zyx-safe --save
    </pre>
    <h3>步骤二</h3>
    <pre style="font-size: 14px">
      项目中入口文件main.js

      import zyxSafe from 'zyx-safe'

      Vue.use(zyxSafe)
    </pre>
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {
    },
    methods: {
    }
  }
</script>

<style>
</style>
