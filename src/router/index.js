import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Hello from 'components/Hello'
import Order from 'components/Order'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
})
