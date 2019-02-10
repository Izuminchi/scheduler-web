<template>
  <div>
    <span v-if="error !== ''">{{ error }}</span>
    <input v-model="email" placeholder="email" name="email" type="email">
    <input v-model="password" placeholder="password" name="password" type="password">
    <button v-on:click="onLogin">Login</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: '',
      };
    },
    methods: {
      onLogin() {
        let vm = this;
        this.error = '';
        if (!this.isValidEmail(this.email)) this.error = 'Invalid email was given';
        if (this.password === '') this.error = 'Invalid password was given';
        if (this.error !== '') return;

        this.$store.dispatch('user/processLogin', {axios: this.$http, email: this.email, password: this.password})
          .then(() => {
            vm.$router.push('/');
          })
          .catch((error) => {
            vm.error = vm.getErrorText(error);
          });
      }
    }
  }
</script>

<style scoped>

</style>
