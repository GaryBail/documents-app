import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
        path: '/',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: '/contracts',
        name: 'contracts',
        component: () => import('./views/Contracts.vue')
      },
      {
        path: '/accounts',
        name: 'accounts',
        component: () => import('./views/Accounts.vue')
      },
      {
          path: '/acts',
          name: 'acts',
          component: () => import('./views/Acts.vue')
      }
  ]
})
