import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      contracts: [
          {id: 1, number: 1, date: '2019-05-13', type: 'оказания услуг', amount: 10000},
          {id: 2, number: 20, date: '2019-04-21', type: 'подряда', amount: 15000},
          {id: 3, number: 150, date: '2019-05-30', type: 'подряда', amount: 15000}
      ],
      accounts: [
          {id: 1, date: '2019-02-10', amount: 12000, status: 'не оплачен'},
          {id:2, date: '2019-07-05', amount: 17000, status: 'оплачен'}
      ],
      acts: [
          {id: 1, data: '2018-04-15', amount: 11700, status: 'не подписан'},
          {id: 2, data: '2019-01-22', amount: 14750, status: 'подписан'}
      ],
  },
  mutations: {
        updateContracts: function (state, contract) {
            var index = state.contracts.findIndex( el => el.id === contract.id);
            if (index >= 0) {
                state.contracts.splice(index, 1, contract)
            }
        },
        updateAccounts: function (state, account) {
          var index = state.accounts.findIndex( el => el.id === account.id);
          if (index >= 0) {
              state.accounts.splice(index, 1, account)
          }
      },
        updateActs: function (state, act) {
          var index = state.acts.findIndex( el => el.id === act.id);
          if (index >= 0) {
              state.acts.splice(index, 1, act)
          }
      }
  },
  actions: {

  }
})
