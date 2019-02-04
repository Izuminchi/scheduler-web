<template>
  <div>
    <span class="error">{{ this.error }}</span>
    <input type="email" v-model="email" name="email">
    <button v-on:click="onSubmit">Submit</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        error: '',
      };
    },
    methods: {
      onSubmit() {
        if (this.email === '') {
          this.email = 'Invalid email was given';
          return;
        }

        let vm = this;
        this.$store.dispatch('user/sendPasswordReestLink', {axios: this.$http, email: this.email})
          .then(() => {
            this.$router.push('/success');
          })
          .catch((error) => {
            vm.error = error.response.data.message;
          });
      },
    },
  }
</script>

<style scoped>

</style>