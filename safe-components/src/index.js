import countDown from './packages/countDown/countDown.vue'
import checkStrength from './packages/checkStrength/checkStrength.vue'
import slider from './packages/slider/slider.vue'
import jigsawSlider from './packages/slider/jigsaw-slider.vue'

const components = [
  countDown,
  checkStrength,
  slider,
  jigsawSlider
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  countDown,
  checkStrength,
  slider,
  jigsawSlider
}
