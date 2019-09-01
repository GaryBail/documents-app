import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.scss'
import VueResource from 'vue-resource';
import Donut from 'vue-css-donut-chart';

Vue.use(VueResource);
Vue.use(Donut);



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
