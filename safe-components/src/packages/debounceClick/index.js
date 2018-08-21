/*
 * @Author: zhangyingxuan
 * @Email: 827516789@qq.com
 * @Date: 2018-8-17 13:48:43
 */
import DebounceClick from './debounceClick';

DebounceClick.install = function(Vue) {
  Vue.component(DebounceClick.name, DebounceClick);
};

export default DebounceClick;
