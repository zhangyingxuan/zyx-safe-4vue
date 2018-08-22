import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import CoutDownDemo from '@/components/coutDownDemo'
import CheckStrengthDemo from '@/components/checkStrengthDemo'
import SliderDemo from '@/components/sliderDemo'
import LoadingDemo from '@/components/LoadingDemo'

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
      path: '/sliderDemo',
      name: 'SliderDemo',
      component: SliderDemo
    },
    {
      path: '/loadingDemo',
      name: 'LoadingDemo',
      component: LoadingDemo
    }
  ]
}

export default new Router(appRouter)
