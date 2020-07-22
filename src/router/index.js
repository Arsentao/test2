import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import select from '@/view/select'
import result from '@/view/result'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/select',
      name: 'select',
      component: select
    },
    {
      path: '/result',
      name: 'result',
      component: result
    },
  ]
})
