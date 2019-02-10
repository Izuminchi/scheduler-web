<template>
  <div>
    <span class="error">{{ this.error }}</span>
    <input type="password" v-model="currentPassword" placeholder="currentPassword" name="currentPassword">
    <input type="password" v-model="password" placeholder="password" name="password">
    <input type="password" v-model="passwordConfirm" placeholder="passwordConfirm" name="passwordConfirm">
    <button v-on:click="onSubmit">Submit</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPassword: '',
        password: '',
        passwordConfirm: '',
        error: '',
      };
    },
    methods: {
      onSubmit() {
        this.error = '';
        if (this.currentPassword === '') this.error = 'Invlaid current password was given';
        if (!this.isValidPassword(this.password, this.passwordConfirm)) this.error = 'Invalid new password was given';
        if (this.error !== '') return;

        let vm = this;
        this.$store.dispatch('user/changePassword', {axios: this.$http, currentPassword: this.currentPassword, password: this.password, passwordConfirm: this.passwordConfirm})
          .then(() => {
             // TODO: Do something
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