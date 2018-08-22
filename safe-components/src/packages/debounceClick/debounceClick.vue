<!--
     Describe: canvas实现类似时钟的倒计时效果
 -->
<style lang="scss" scoped>
</style>
<template>
  <div @click="fastClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "DebounceClick",
    props: {
      autocomplete: {
        type: String,
        default: "off"
      },
      maxlength: {
        type: Number,
        default: 100
      },
      rules: {
        type: Array,
        default: () => {
          return [
            {noticeStr: "长度为6~14个字符", rule: "^.{6,14}$", isPassed: false},
            {noticeStr: "不允许有空格", rule: "^[^\\s]+$", isPassed: false},
            {noticeStr: "支持数字,大小写字母和标点符号", rule: "^[A-Za-z0-9.,;:'\"]+$", isPassed: false}]
        }
      }
    },
    data() {
      return {
        passWordStr: '',
        isPassed: false,
        isShowPwd: false
      }
    },
    computed: {},
    watch: {},
    methods: {
      fastClick() {
        this.$emit()
      },
      debounce(fn, delay) {
        // 维护一个 timer
        let timer = null;

        return function() {
          // 通过 ‘this’ 和 ‘arguments’ 获取函数的作用域和变量
          let context = this;
          let args = arguments;

          clearTimeout(timer);
          timer = setTimeout(function() {
            fn.apply(context, args);
          }, delay);
        }
      }
    },
    mounted() {
    },
    destroyed() {
    }
  }
</script>
