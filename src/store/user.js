import {AuthenticateAPI} from "../api/authenticate";

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
};

// actions
const actions = {
  processLogin(context, payload) {
    return AuthenticateAPI.login(payload.axios, payload.email, payload.password)
      .then((data) => {
        context.commit('saveCredentials', {token: data.auth_token, user: data.user})
      });
  },
  sendPasswordReestLink(context, payload) {
    return AuthenticateAPI.sendResetLink(payload.axios, payload.email);
  },
  resetPassword(context, payload) {
    return AuthenticateAPI.resetPassword(payload.axios, payload.code, payload.email, payload.password, payload.password_confirm);
  },
};

// mutations
const mutations = {
  saveCredentials(state, data) {
    state.auth_token = data.token;
    state.id = data.user.id;
    state.email = data.user.email;
    state.name = data.user.name;
    state.target_hour = data.user.target_hour
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
