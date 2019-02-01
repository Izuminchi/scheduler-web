<template>
  <div>
    <span v-if="error !== ''">{{ error }}</span>
    <input v-model="email" name="email" type="email">
    <input v-model="password" name="password" type="password">
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

        if (this.email === '') {
          this.error = 'Invalid email was given';
          return;
        }
        if (this.password === '') {
          this.error = 'Invalid password was given';
          return;
        }
        this.$store.dispatch('user/processLogin', {axios: this.$http, email: this.email, password: this.password})
          .then((data) => {
            vm.$router.push('/');
          })
          .catch((error) => {
            vm.error = error.response.data.message;
          });
      }
    }
  }
</script>

<style scoped>

</style>
