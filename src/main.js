import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios';
import moment from 'moment';
import axiosInitializer from './initializers/axios';

axiosInitializer(axios);
Vue.prototype.$http = axios;
Vue.prototype.moment = moment;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
