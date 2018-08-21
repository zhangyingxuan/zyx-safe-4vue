/*
 * @Author: zhangyingxuan
 * @Email: 827516789@qq.com
 * @Date: 2018-8-17 13:48:43
 */
import CountDown from './countDown';

CountDown.install = function(Vue) {
  Vue.component(CountDown.name, CountDown);
};

export default CountDown;
