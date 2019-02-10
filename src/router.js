import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'
import Success from '@/views/Success.vue'
import ResetPassword from '@/views/ResetPassword.vue'
import Signup from '@/views/Signup.vue'
import ChangePassword from '@/views/ChangePassword.vue'

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
      path: '/settings/changepassword',
      name: 'changepassword',
      component: ChangePassword
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login
    },
    {
      path: '/auth/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/auth/forgotpassword',
      name: 'forgotpassword',
      component: ForgotPassword
    },
    {
      path: '/auth/success',
      name: 'success',
      component: Success
    },
    {
      path: '/auth/resetpassword',
      name: 'resetpassword',
      component: ResetPassword
    }
  ]
});
