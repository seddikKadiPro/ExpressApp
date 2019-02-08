<template>
  <div id="app">
    <v-app>
      <page-header />
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
      <page-footer />
    </v-app>
<!--     <img src="./assets/logo.png"> -->
  </div>
</template>
<script>
import pageHeader from '@/components/Header.vue'
import pageFooter from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    pageHeader,
    pageFooter

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
