<template>
  <div>
    <span>{{ error }}</span>
    <input type="email" v-model="email" name="email">
    <input type="password" v-model="password" name="password">
    <input type="password" v-model="password_confirm" name="password_confirm">
    <input type="hidden" v-model="code" name="code">
    <button v-on:click="onSubmit">Submit</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        password_confirm: '',
        code: '',
        error: '',
      };
    },
    methods: {
      onSubmit() {
        if (this.email === '') {
          this.error = 'Invalid email was given';
          return;
        }
        if (this.password === '' || this.password_confirm === '') {
          this.error = 'Invalid password was given';
          return;
        }
        if (this.password !== this.password_confirm) {
          this.error = 'Password did not match';
          return;
        }

        let vm = this;
        this.$store.dispatch('user/resetPassword', {axios: this.$http, email: this.email, password: this.password, password_confirm: this.password_confirm, code: this.code})
          .then(() => {
            this.$router.push('/login')
          })
          .catch((error) => {
            vm.error = error.response.data.message;
          });
      },
    },
    created() {
      this.code = this.$route.query.code;
    },
  }
</script>

<style scoped>

</style>