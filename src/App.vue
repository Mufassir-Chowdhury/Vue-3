<template>
<div id="app"  class="overflow-x-scroll">
  <user-profile/>
</div>
</template>

<script>
import userProfile from './components/userProfile.vue';

export default {
  components: { userProfile },
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #F3F5FA;
}
</style>
