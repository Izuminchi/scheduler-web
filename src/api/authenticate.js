const authPath = '/api/v1/auth/';

export const AuthenticateAPI = {
  async login(axios, email, password) {
    const response = await axios.post(authPath + 'login', {email: email, password: password});
    return response.data;
  },
  async sendResetLink(axios, email) {
    const response = await axios.post(authPath + 'forgetpassword', {email: email});
    return response.data;
  },
  async resetPassword(axios, code, email, password, passwordConfirm) {
    const response = await axios.post(authPath + 'resetpassword', {
      code: code,
      email: email,
      password: password,
      password_confirm: passwordConfirm
    });
    return response.data;
  },
};
