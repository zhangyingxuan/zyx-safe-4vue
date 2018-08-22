import countDown from './packages/countDown/index.js'
import checkStrength from './packages/checkStrength/index.js'
import slider from './packages/slider/slider.js'
import jigsawSlider from './packages/slider/jigsaw-slider.js'
import loading from './packages/loading/loading.js'
import loadingRect from './packages/loading/loading-rect.js'
import loadingBounce from './packages/loading/loading-bounce.js'
import loadingBounce2 from './packages/loading/loading-bounce2.js'

const components = [
  countDown,
  checkStrength,
  slider,
  jigsawSlider,
  loading,
  loadingRect,
  loadingBounce,
  loadingBounce2
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
  jigsawSlider,
  loading,
  loadingRect,
  loadingBounce,
  loadingBounce2
}
