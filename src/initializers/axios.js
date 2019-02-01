export default (axios) => {
  axios.defaults.headers.common = {
    'Access-Control-Allow-Origin': '*',
    'X-Requested-With': 'XMLHttpRequest',
  };

  axios.defaults.baseURL = 'http://localhost'
};
