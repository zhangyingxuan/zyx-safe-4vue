<!--
     Describe: 元气满满
 -->
<style lang="scss" scoped>

</style>
<template>
</template>

<script>
  export default {
    name: "CheckStrength",
    props: {
      showIcon: {
        type: Boolean,
        default: true
      },
      value: {
        required: true
      },
      size: {
        type: String,
        default: "medium"
      },
      width: {
        type: String,
        default: '100%'
      },
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
            {message: "长度为6~14个字符", rule: "^.{6,14}$"},
            {message: "不允许有空格", rule: "^[^\\s]+$"},
            {message: "支持数字,大小写字母和标点符号", rule: "^[A-Za-z0-9.,;:'\"]+$"}]
        }
      }
    },
    data() {
      return {
        currentValue: '',
        /**
         *  校验状态 0，初始状态 1，成功 2，失败
         */
        currentStatus: 0,
        isShowPwd: false,
        focused: false
      }
    },
    computed: {
      statusClass() {
        let statusClass
        switch(this.currentStatus) {
          case 0:
            statusClass = 'normal'
            break
          case 1:
            statusClass = 'success'
            break
          case 2:
            statusClass = 'error'
            break
        }
        return statusClass
      },
      checkStrengthClass() {
        let classType
        switch (this.size) {
          case "medium":
            classType = "check-strength-border-medium"
            break
          case "small":
            classType = "check-strength-border-small"
            break
          case "mini":
            classType = "check-strength-border-mini"
            break
          default:
            classType = "check-strength-border-medium"
            break
        }
        return classType
      },
      customStyle() {
        if (this.width) {
          return `width: ${this.width}`
        }
      },
      /**
       *  是否校验通过
       * @returns {boolean}
       */
      success() {
        return this.currentStatus === 1
      }
    },
    watch: {
      value(val) {
        this.setCurrentValue(val);
      },
      currentValue(val) {
        this.currentStatus = 1
        if (this.rules && this.rules instanceof Array) {
          this.rules.forEach(item => {
            if (new RegExp(item.rule).test(val)) {
              item.status = 1
              return true
            } else {
              this.currentStatus = 2
              item.status = 2
              return false
            }
          })
        }
        if(this.currentStatus === 1) {
          this.$emit('success')
        } else {
          this.$emit('fail')
        }
      }
    },
    methods: {
      isSuccess() {
        return this.success
      },
      /**
       *  点击眼睛图标
       */
      onClickIcon() {
        this.isShowPwd = !this.isShowPwd
        this.$emit('clickIcon', this.isShowPwd)
      },
      handleInput(event) {
        const value = event.target.value;
        this.$emit('input', value);
        this.setCurrentValue(value);
      },
      handleFocus(event) {
        this.focused = true;
        this.$emit('focus', event);
      },
      handleChange(event) {
        this.$emit('change', event.target.value);
      },
      handleBlur(event) {
        this.focused = false;
        this.$emit('blur', event);
      },
      setCurrentValue(value) {
        if (value === this.currentValue) return;
        this.currentValue = value;
      },
    },
    created() {
      // 初始化组件，通过设置value 进行首次赋值校验 2018-8-22 20:14:48
      this.setCurrentValue(this.value)
    },
    destroyed() {
    }
  }
</script>
