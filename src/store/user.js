import {AuthenticateAPI} from "@/api/authenticate";
import {UserAPI} from "@/api/user";

// state
const state = {
  auth_token: '',
  id: '',
  email: '',
  name: '',
  target_hour: '',
};

// getters
const getters = {
  auth_token: state => state.auth_token,
  id: state => state.id,
  email: state => state.email,
  name: state => state.name,
  target_hour: state => state.target_hour,
  isAuthenticated: state => state.auth_token !== '',
};

// actions
const actions = {
  processLogin(context, payload) {
    return AuthenticateAPI.login(payload.axios, payload.email, payload.password)
      .then((data) => {
        if (!data.auth_token || !data.user) throw new Error("Response didn't contain valid data");
        context.commit('saveCredentials', {token: data.auth_token, user: data.user})
      });
  },
  processSignup(context, payload) {
    return UserAPI.signup(payload.axios, payload.name, payload.email, payload.password, payload.passwordConfirm)
      .then((data) => {
        if (!data.auth_token || !data.user) throw new Error("Response didn't contain valid data");
        context.commit('saveCredentials', {token: data.auth_token, user: data.user})
      });
  },
  processLogout(context) {
    context.commit('clearCredentials');
  },
  autoLogin(context, payload) {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (!token || !user) return;
    if (token) payload.axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    context.commit('saveCredentials', {token: token, user: user});
  },
  getMyself(context, payload) {
    return UserAPI.me(payload.axios);
  },
  update(context, payload) {
    return UserAPI.update(payload.axios, payload.id, payload.params)
      .then((data) => {
        if (!data.user) throw new Error("Response didn't contain valid data");
        context.commit('saveCredentials', {user: data.user})
      });
  },
  sendPasswordReestLink(context, payload) {
    return AuthenticateAPI.sendResetLink(payload.axios, payload.email);
  },
  resetPassword(context, payload) {
    return AuthenticateAPI.resetPassword(payload.axios, payload.code, payload.email, payload.password, payload.passwordConfirm);
  },
  changePassword(context, payload) {
    return UserAPI.changePassword(payload.axios, payload.currentPassword, payload.password, payload.passwordConfirm);
  },
};

// mutations
const mutations = {
  saveCredentials(state, data) {
    state.id = data.user.id;
    state.email = data.user.email;
    state.name = data.user.name;
    state.target_hour = data.user.target_hour;
    localStorage.setItem('user', JSON.stringify(data.user));

    if (data.token) {
      state.auth_token = data.token;
      localStorage.setItem('token', data.token);
    }
  },
  clearCredentials(state) {
    state.id = '';
    state.name = '';
    state.email = '';
    state.target_hour = '';
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
