import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      contracts: [
          {id: 1, number: 1, date: '2019-05-13', type: 'оказания услуг', amount: 10000},
          {id: 2, number: 20, date: '2019-04-21', type: 'подряда', amount: 15000},
          {id: 2, number: 150, date: '2019-05-30', type: 'подряда', amount: 15000}
      ],
      accounts: [
          {date: '2019-02-10', amount: 12000, status: 'не оплачен'},
          {date: '2019-07-05', amount: 17000, status: 'оплачен'}
      ],
      acts: [
          {data: '2018-04-15', amount: 11700, status: 'не подписан'},
          {data: '2019-01-22', amount: 14750, status: 'подписан'}
      ],
  },
  mutations: {

  },
  actions: {

  }
})
