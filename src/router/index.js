import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import CoutDownDemo from '@/components/coutDownDemo'
import CheckStrengthDemo from '@/components/checkStrengthDemo'
import Slider from '@/components/sliderDemo'

Vue.use(Router)

export const appRouter = {
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/coutDownDemo',
      name: 'CoutDownDemo',
      component: CoutDownDemo
    },
    {
      path: '/checkStrengthDemo',
      name: 'CheckStrengthDemo',
      component: CheckStrengthDemo
    },
    {
      path: '/slider',
      name: 'Slider',
      component: Slider
    }
  ]
}

export default new Router(appRouter)
