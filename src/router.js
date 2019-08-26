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
          component: () => import('./views/Contracts.vue'),
          children: [
              {name: 'contract-form', path: ':id/edit', component: () => import('./components/Contract-form.vue'), props: true}
          ]
      },
      {
          path: '/accounts',
          name: 'accounts',
          component: () => import('./views/Accounts.vue'),
          children: [
              {name: 'account-form', path: ':id/edit', component: () => import('./components/Account-form.vue'), props: true}
          ]
      },
      {
          path: '/acts',
          name: 'acts',
          component: () => import('./views/Acts.vue'),
          children: [
              {name: 'act-form', path: ':id/edit', component: () => import('./components/Act-form.vue'), props: true}
          ]
      }
  ]
})
