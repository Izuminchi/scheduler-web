export default (axios) => {
  axios.defaults.headers.common = {
    'Access-Control-Allow-Origin': '*',
    'X-Requested-With': 'XMLHttpRequest',
  };

  axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

  axios.interceptors.response.use((response) => {
    if (response.data.auth_token) {
      axios.defaults.headers.common['Authorization'] = "Bearer " + response.data.auth_token;
    }
    return response;
  });
};
