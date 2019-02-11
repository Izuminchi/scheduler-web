import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import Success from './views/Success.vue'
import ResetPassword from './views/ResetPassword.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: ForgotPassword
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    },
    {
      path: '/resetpassword',
      name: 'resetpassword',
      component: ResetPassword
    }
  ]
});
