import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      contracts_loaded: [],
      contracts: [
          {id: 1, number: 1, date: '13-05-2019', type_id: 2, amount: 10000},
          {id: 2, number: 20, date: '21-04-2019', type_id: 3, amount: 15000},
          {id: 3, number: 150, date: '30-05-2019', type_id: 3, amount: 15000}
      ],
      accounts: [
          {id: 1, date: '10-02-2019', amount: 15000, status_id: 2, contract_id: 2},
          {id: 2, date: '05-07-2019', amount: 10000, status_id: 1, contract_id: 1},
          {id: 3, date: '05-12-2015', amount: 15000, status_id: 1, contract_id: 3}
      ],
      acts: [
          {id: 1, date: '15-04-2018', amount: 15000, condition_id: 2, contract_id: 2},
          {id: 2, date: '22-01-2019', amount: 10000, condition_id: 1, contract_id: 1},
          {id: 3, date: '22-05-2019', amount: 15000, condition_id: 1, contract_id: 3}
      ],
      types: [
          {id: 1, name: 'licence', full_name: 'лицензионный'},
          {id: 2, name: 'service', full_name: 'оказания услуг'},
          {id: 3, name: 'subcontracting', full_name: 'подряда'}
      ],
      statuses: [
          {id: 1, name: 'paid', full_name: 'Оплачен'},
          {id: 2, name: 'not_paid', full_name: 'Не оплачен'}
      ],
      conditions: [
          {id: 1, name: 'signed', full_name: 'Подписан'},
          {id: 2, name: 'not_signed', full_name: 'Не подписан'}
      ]
  },
    getters: {
        contract: state => id => {
            return state.contracts.find(c => c.id == id)
        },
        accounts: state => id => {
            return state.accounts.find(c => c.id == id)
        },
        act: state => id => {
            return state.acts.find(c => c.id == id)
        },
        contractAccounts: state => contract_id => {
            return state.accounts.filter(c => c.contract_id == contract_id)
        },
        contractAccountsPayed: state => contract_id => {
            return state.accounts.filter(c => c.contract_id == contract_id && c.status_id === 1)
        },
        payedAmount: (state, getters) => contract_id => {
            var result = 0;
            getters.contractAccountsPayed(contract_id).forEach(el => result += el.amount);
            return parseInt(result)
        },
        unpaidContracts: (state, getters) => {
            return state.contracts.filter(c => c.amount > getters.payedAmount(c.id))
        },
        statusContract: (state, getters) => contract_id => {
            if (getters.payedAmount(contract_id) === getters.contract(contract_id).amount) {
                return 'Оплачен'
            } else if (getters.payedAmount(contract_id) > getters.contract(contract_id).amount) {
                return 'Сумма счета превышает сумму договора'
            } else {
                return 'Не оплачен'
            }
        },
        contractAct: state => contract_id => {
            return state.acts.filter(c => c.contract_id == contract_id)
        },
        contractActSigned: state => contract_id => {
            return state.acts.filter(c => c.contract_id == contract_id && c.condition_id === 1)
        },
        signedAmount: (state, getters) => contract_id => {
            var result = 0;
            getters.contractActSigned(contract_id).forEach(el => result += el.amount);
            return parseInt(result)
        },
        unsignedAct: (state, getters) => {
            return state.contracts.filter(c => c.amount > getters.signedAmount(c.id))
        },
        conditionContract: (state, getters) => contract_id => {
            if (getters.signedAmount(contract_id) === getters.contract(contract_id).amount) {
                return 'Закрыт'
            } else if (getters.signedAmount(contract_id) > getters.contract(contract_id).amount) {
                return 'Сумма акта превышает сумму договора'
            } else {
                return 'Не закрыт'
            }
        }
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
