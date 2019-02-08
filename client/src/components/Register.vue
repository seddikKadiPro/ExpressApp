<template>
  <v-layout column>
    <v-flex>
      <div class="white elevation-2 ">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>
            Register
          </v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <input type="email" name="email" placeholder="email" v-model="email">
          <br>
          <input type="password" name="password" placeholder="password" v-model="password">
          <br>
          <div class="error" v-html="error">
          </div>
          <v-btn class="cyan" @click="register">Register</v-btn>
          <br>
         </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        // eslint-disable-next-line
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
.error{
  color: red;

}
</style>
