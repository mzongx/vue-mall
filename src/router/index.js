import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goodsList',
      component: () => import('@/views/goods-list/goods-list')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/cart/cart')
    },
    {
      path: '/address',
      name: 'address',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "address" */ '@/views/address/address')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/views/order/order')
    },
    {
      path: '/order-confirm',
      name: 'order-confirm',
      component: () => import('@/views/order-confirm/order-confirm')
    }
  ]
})
