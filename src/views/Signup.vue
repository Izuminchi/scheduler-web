<template>
  <div>
    <p>test</p>
    <input v-model="name" name="name" type="text">
    <input v-model="email" name="email" type="email">
    <input v-model="password" name="password" type="password">
    <input v-model="password_confirm" name="password_confirm" type="password">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        password_confirm: '',
      };
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
