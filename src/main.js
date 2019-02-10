import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/index'
import axios from 'axios';
import moment from 'moment';
import axiosInitializer from '@/initializers/axios';
import validator from '@/utils/validation';

axiosInitializer(axios);
Vue.prototype.$http = axios;
Vue.prototype.moment = moment;
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token');
  if (token) store.dispatch('user/autoLogin', {axios: axios});
  if (!token && to.path.indexOf('/auth') === -1) {
    store.dispatch('user/processLogout');
    return next('/auth/login');
  }
  next();
});

// Global common methods
Vue.mixin(validator);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
