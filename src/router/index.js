import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/main'
import Home from '@/view/main/home'
import CoutDownDemo from '@/view/countDown/describe'
import CheckStrengthDemo from '@/view/checkStrength/describe'
import SliderDemo from '@/view/slider/describe'
import LoadingDemo from '@/view/loading/describe'

Vue.use(Router)

export const appRouter = {
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      nameCn: '首页',
      redirect: {name: 'Home'},
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home,
          nameCn: '安装'
        }]
    },
    {
      path: 'safe',
      nameCn: '安全组件',
      component: Index,
      children: [
        {
          path: '/checkStrengthDemo',
          name: 'CheckStrengthDemo',
          component: CheckStrengthDemo,
          nameCn: '正则校验框'
        },
        {
          path: '/sliderDemo',
          name: 'SliderDemo',
          component: SliderDemo,
          nameCn: '拼图滑块'
        }
      ]
    },
    {
      path: 'safe',
      nameCn: '其他组件',
      component: Index,
      children: [
        {
          path: '/coutDownDemo',
          name: 'CoutDownDemo',
          component: CoutDownDemo,
          nameCn: '倒计时'
        },
        {
          path: '/loadingDemo',
          name: 'LoadingDemo',
          component: LoadingDemo,
          nameCn: '加载loading'
        }
      ]
    },
  ]
}

export default new Router(appRouter)
