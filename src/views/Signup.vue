<template>
  <div>
    <span class="error">{{ this.error }}</span>
    <input type="text" v-model="name" placeholder="name" name="name">
    <input type="email" v-model="email" placeholder="email" name="email">
    <input type="password" v-model="password" placeholder="password" name="password">
    <input type="password" v-model="passwordConfirm" placeholder="passwordConfirm" name="passwordConfirm">
    <button v-on:click="onSubmit">Submit</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        error: '',
      };
    },
    methods: {
      onSubmit() {
        this.error = '';
        if (this.name === '') this.error = 'Invalid name was given';
        if (!this.isValidEmail(this.email)) this.error = 'Invalid email was given';
        if (!this.isValidPassword(this.password, this.passwordConfirm)) this.error = 'Invalid password was given';
        if (this.error !== '') return;

        let vm = this;
        let params = {axios: this.$http, name: this.name, email: this.email, password: this.password, passwordConfirm: this.passwordConfirm};
        this.$store.dispatch('user/processSignup', params)
          .then(() => {
            this.$router.push('/');
          })
          .catch((error) => {
            vm.error = vm.getErrorText(error);
          });
      },
    },
  }
</script>

<style scoped>

</style>