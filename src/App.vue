<template>
  <div id="app">
    <LoadingScreen />
    <router-view />
  </div>
</template>

<script>
import LoadingScreen from './components/LoadingScreen.vue'

export default {
  name: 'App',
  components: {
    LoadingScreen
  }
}
</script>

<style>
/* Global styles are in main.css */
body.loading-active {
  overflow: hidden;
}
</style>

