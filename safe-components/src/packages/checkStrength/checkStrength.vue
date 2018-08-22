<!--
     Describe: 校验正则组件
 -->
<style lang="scss" scoped>
  @import "../../assets/fonts/style.css";
  .check-strength {

    &.check-strength-border-medium {

      .check-strength-border {
        .check-strength-content {
          width: 90%;
          line-height: 40px;
          padding: 0 15px;
          font-size: 16px;

          .input__inner {
            height: 40px;
            line-height: 40px;
            width: 100%;
          }
        }

        i {
          width: 10%;
          line-height: 40px;
          font-size: 25px;
        }
      }
    }
    &.check-strength-border-small {
      .check-strength-border {
        .check-strength-content {
          width: 90%;
          line-height: 30px;
          padding: 0 10px;
          font-size: 14px;

          .input__inner {
            height: 30px;
            line-height: 30px;
            width: 100%;
          }
        }

        i {
          width: 10%;
          line-height: 30px;
          font-size: 20px;
        }
      }
    }
    &.check-strength-border-mini {
      .check-strength-border {
        .check-strength-content {
          width: 90%;
          line-height: 20px;
          padding: 0 5px;
          font-size: 12px;

          .input__inner {
            height: 20px;
            line-height: 20px;
            width: 100%;
          }
        }

        i {
          width: 10%;
          line-height: 20px;
          font-size: 18px;
        }
      }
    }

    .check-strength-border {
      display: flex;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      color: #606266;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      margin-bottom: 5px;
      padding: 1px;

      &.error {
        border-color: #fc4343;
      }

      &.success {
        border-color: #67c23a;
      }

      .check-strength-content {
        .input__inner {
          border: none;
          -webkit-appearance: none;
          background-color: #fff;
          background-image: none;
          display: inline-block;
          font-size: inherit;
          outline: none;
          -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
          transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
      }
    }

    // 提示框
    .notice-border {
      border: 1px solid #ccc;
      border-radius: 5px;
      text-align: left;
      padding-left: 10px;

      .notice-row {
        line-height: 14px;
        padding: 5px;
        margin: 0;

        span: {
          line-height: 14px;
        }
      }

      .check-success {
        color: #5BC92E;
      }
      .check-error {
        color: #fc4343;
      }
    }
  }

</style>
<template>
  <div :class="[checkStrengthClass, 'check-strength']" :style="customStyle">
    <div :class="[isAllPassed ? 'success' : 'error', 'check-strength-border']">
      <div class="check-strength-content">
        <input class="input__inner"
               v-model="currentValue"
               :type="isShowPwd ? 'text' : 'password'"
               :autocomplete="autocomplete"
               @input="handleInput"
               @focus="handleFocus"
               @blur="handleBlur"
               @change="handleChange"
               :maxlength="maxlength">
      </div>
      <i :class="[isShowPwd ? 'icon-eye' : 'icon-eye-blocked', '']" @click="isShowPwd = !isShowPwd"></i>
    </div>
    <div class="notice-border">
      <p class="notice-row" v-for="rule in rules" :class="rule.isPassed ? '' : 'check-error'">
        <i :class="rule.isPassed ? 'icon-checkmark check-success' : 'icon-cross check-error'"></i>
        <span class="notice-content">{{rule.message}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CheckStrength",
    props: {
      value: {
        required: true
      },
      size: {
        type: String,
        default: "medium"
      },
      width: {
        type: String
      },
      labelStr: {
        type: String,
        default: "label"
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
            {message: "长度为6~14个字符", rule: "^.{6,14}$", isPassed: false},
            {message: "不允许有空格", rule: "^[^\\s]+$", isPassed: false},
            {message: "支持数字,大小写字母和标点符号", rule: "^[A-Za-z0-9.,;:'\"]+$", isPassed: false}]
        }
      }
    },
    data() {
      return {
        currentValue: this.value,
        isAllPassed: false,
        isShowPwd: false,
        focused: false
      }
    },
    computed: {
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
      }
    },
    watch: {
      value(val) {
        this.setCurrentValue(val);
      },
      currentValue(val) {
        this.isAllPassed = true
        if (this.rules && this.rules instanceof Array) {
          this.rules.forEach(item => {
            if (new RegExp(item.rule).test(val)) {
              item.isPassed = true
              return true
            } else {
              this.isAllPassed = false
              item.isPassed = false
              return false
            }
          })
        }
      }
    },
    methods: {
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
    mounted() {
    },
    destroyed() {
    }
  }
</script>
