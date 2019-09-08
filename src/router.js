import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Contracts from './views/Contracts.vue'
import Accounts from './views/Accounts.vue'
import Acts from './views/Acts.vue'


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
          component: Contracts,
          children: [
              {
                  path: '',
                  name: 'contracts',
                  component: () => import('./views/ContractsList.vue')
              },
              {
                  path: ':id/edit',
                  name: 'edit-contract',
                  component: () => import('./views/ContractForm.vue'),
                  props: true
              },
              {
                  path: 'new',
                  name: 'new-contract',
                  component: () => import('./views/ContractForm.vue')
              },
              {
                  path: ':id/delete',
                  name: 'contract-delete',
                  component: () => import('./views/ContractDelete.vue'),
                  props: true
              }
          ]
      },
      {
          path: '/accounts',
          component: Accounts,
          children: [
              {
                  path: '',
                  name: 'accounts',
                  component: () => import('./views/AccountsList.vue')
              },
              {
                  path: ':id/edit',
                  name: 'edit-accounts',
                  component: () => import('./views/AccountsForm.vue'),
                  props: true
              },
              {
                  path: 'new',
                  name: 'new-accounts',
                  component: () => import('./views/AccountsForm.vue')
              },
              {
                  path: ':id/delete',
                  name: 'accounts-delete',
                  component: () => import('./views/AccountsDelete.vue'),
                  props: true
              }
          ]
      },
      {
          path: '/acts',
          component: Acts,
          children: [
              {
                  path: '',
                  name: 'acts',
                  component: () => import('./views/ActsList.vue')
              },
              {
                  path: ':id/edit',
                  name: 'edit-act',
                  component: () => import('./views/ActForm.vue'),
                  props: true
              },
              {
                  path: 'new',
                  name: 'new-act',
                  component: () => import('./views/ActForm.vue')
              },
              {
                  path: ':id/delete',
                  name: 'act-delete',
                  component: () => import('./views/ActDelete.vue'),
                  props: true
              },
          ]
      }
  ]
})
