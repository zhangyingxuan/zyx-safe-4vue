/*
 * @Author: zhangyingxuan
 * @Email: 827516789@qq.com
 * @Date: 2018-8-17 13:48:43
 */
import CheckStrength from './fullOfVitality';

CheckStrength.install = function(Vue) {
  Vue.component(CheckStrength.name, CheckStrength);
};

export default CheckStrength;
