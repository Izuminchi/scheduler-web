const userPath = '/api/v1/users/';

export const UserAPI = {
  async signup(axios, name, email, password, passwordConfirm) {
    const params = {name: name, email: email, password: password, password_confirm: passwordConfirm};
    const response = await axios.post("/api/v1/signup", params);
    return response.data;
  },
  async update(axios, id, payload) {
    const response = await axios.put(userPath + id, payload);
    return response.data;
  },
  async changePassword(axios, currentPassword, password, passwordConfirm) {
    const params = {current_password: currentPassword, password: password, password_confirm: passwordConfirm};
    const response = await axios.post(userPath + 'changepassword', params);
    return response.data;
  },
  async me(axios) {
    const response = await axios.get(userPath + 'me');
    return response.data;
  },
};
