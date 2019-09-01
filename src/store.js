import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      contracts_loaded: [],
      contracts: [
          {id: 1, number: 1, date: '13-05-2019', type: 'оказания услуг', amount: 10000},
          {id: 2, number: 20, date: '21-04-2019', type: 'подряда', amount: 15000},
          {id: 3, number: 150, date: '30-05-2019', type: 'подряда', amount: 15000}
      ],
      accounts: [
          {id: 1, date: '10-02-2019', amount: 12000, status: 'не оплачен'},
          {id:2, date: '05-07-2019', amount: 17000, status: 'оплачен'}
      ],
      acts: [
          {id: 1, date: '15-04-2018', amount: 11700, status: 'не подписан'},
          {id: 2, date: '22-01-2019', amount: 14750, status: 'подписан'}
      ]
  },
  mutations: {
        createContract: function (state, contract) {
                var maxId = Math.max.apply(Math, state.contracts.map(c => c.id));
                contract.id = maxId + 1;
                state.contracts.push(contract)
        },
        updateContracts: function (state, contract) {
                var index = state.contracts.findIndex( el => el.id === contract.id);
                if (index >= 0) {
                state.contracts.splice(index, 1, contract)
                }
        },
        deleteContract: function (state, contract) {
                var index = state.contracts.findIndex(el => el.id === contract.id);
                if (index >= 0) {
                state.contracts.splice(index, 1);
                }
        },
        createAccounts: function (state, account) {
                var maxId = Math.max.apply(Math, state.accounts.map(c => c.id));
                account.id = maxId + 1;
                state.accounts.push(account)
        },
        updateAccounts: function (state, account) {
                var index = state.accounts.findIndex( el => el.id === account.id);
                if (index >= 0) {
                state.accounts.splice(index, 1, account)
                }
        },
        deleteAccounts: function (state, account) {
                var index = state.accounts.findIndex(el => el.id === account.id);
                if (index >= 0) {
                state.accounts.splice(index, 1);
                }
        },
        createAct: function (state, act) {
                var maxId = Math.max.apply(Math, state.acts.map(c => c.id));
                act.id = maxId + 1;
                state.acts.push(act)
        },
        updateAct: function (state, act) {
                var index = state.acts.findIndex( el => el.id === act.id);
                if (index >= 0) {
                state.acts.splice(index, 1, act)
                }
        },
        deleteAct: function (state, act) {
                var index = state.acts.findIndex(el => el.id === act.id);
                if (index >= 0) {
                state.acts.splice(index, 1);
                }
        }
  },
  actions: {

  }
})
