export default {
  methods: {
    isValidEmail(str)  {
      if (!str) return false;
      const regex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
      return regex.test(str)
    },
    isValidPassword(password, password_confirm) {
      if (!password || password !== password_confirm) return false;
      const regex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
      return regex.test(password)
    },
    getErrorText(error) {
      if (typeof error === 'string') return error;
      if (error.hasOwnProperty('response') && error.response.data.hasOwnProperty('message')) return error.response.data.message;
      if (error.hasOwnProperty('message')) return error.message;
      return 'some error was found';
    },
  }
}
